"use client";

import { useEffect, useState } from "react";

export default function Result() {
  // top からの検索結果をここに
  const [searchResult, setSearchResult] = useState<
    { AppName: string; download_URL: string }[]
  >([]);
  const [synonymsResult, setSynonymsResult] = useState<string[]>([]);

  const [selectedSynonyms, setSelectedSynonyms] = useState<string[]>([]);

  useEffect(() => {
    // sessionStorage から検索結果と類義語データを取得
    const searchData = sessionStorage.getItem("searchResult");
    if (searchData) {
      setSearchResult(JSON.parse(searchData));
    }

    const synonymsData = sessionStorage.getItem("synonymsResult");
    if (synonymsData) {
      setSynonymsResult(JSON.parse(synonymsData));
    }
  }, []);

  // 類義語の選択、解除などの処理
  const toggleSelection = (synonym: string) => {
    setSelectedSynonyms((prev) =>
      prev.includes(synonym)
        ? prev.filter((s) => s !== synonym)
        : [...prev, synonym]
    );
  };

  // 選択した類義語を Top ページに渡して検索
  const handleSearchWithSynonyms = () => {
    if (selectedSynonyms.length === 0) return;
    sessionStorage.setItem(
      "selectedSynonyms",
      JSON.stringify(selectedSynonyms)
    );
    // 新規ページで開く
    window.open("/", "_blank");
  };

  return (
    <div className="flex flex-col h-screen gap-5 items-center justify-center bg-gradient-to-br from-[#84E53E] to-[#23BD99]">
      {/* 検索結果の表示 */}
      <h3 className="text-3xl">検索結果</h3>
      <div className="w-4/5 max-w-[1200px] h-[200px] bg-white overflow-y-scroll p-4 border border-gray-300 rounded-2xl shadow-md">
        {searchResult.length > 0 ? (
          <ul className="list-disc list-inside px-5">
            {searchResult.map((app, index) => (
              <li key={index}>
                <a
                  href={app.download_URL}
                  target="_blank"
                  className="text-blue-500 hover:underline"
                >
                  {app.AppName}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>データがありません。</p>
        )}
      </div>

      {/* 類義語の選択 */}
      <h3 className="text-3xl mt-10">類似語でアイデア検索！</h3>
      <div className="w-4/5 max-w-[1200px] p-4 bg-white rounded-xl">
        {synonymsResult.length > 0 ? (
          <ul className="flex flex-wrap gap-4 justify-center">
            {synonymsResult.map((synonym, index) => (
              <li
                key={index}
                className={`px-4 py-2 rounded-lg cursor-pointer ${
                  selectedSynonyms.includes(synonym)
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => toggleSelection(synonym)}
              >
                {synonym}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-600">
            類義語のデータがありません。
          </p>
        )}
      </div>

      {/* 再検索ボタン */}
      {selectedSynonyms.length > 0 && (
        <button
          onClick={handleSearchWithSynonyms}
          className="mt-6 bg-white text-[#1A9A79] font-bold py-2 px-6 rounded-full shadow-md hover:bg-gray-100"
        >
          選択した類義語で検索する
        </button>
      )}
    </div>
  );
}
