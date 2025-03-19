"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Result() {
  const [searchResult, setSearchResult] = useState<
    { AppName: string; download_URL: string }[]
  >([]);
  const [synonymsResult, setSynonymsResult] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    // 検索結果のデータを取得
    const searchData = sessionStorage.getItem("searchResult");
    if (searchData) {
      setSearchResult(JSON.parse(searchData));
    }

    // 類義語のデータを取得
    const synonymsData = sessionStorage.getItem("synonymsResult");
    if (synonymsData) {
      setSynonymsResult(JSON.parse(synonymsData));
    }
  }, []);

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
                  rel="noopener noreferrer"
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

      {/* 類義語の表示 */}
      <h3 className="text-3xl mt-10">類似語でアイデア検索！</h3>
      <div className="w-4/5 max-w-[1200px] p-4 bg-white rounded-xl">
        {synonymsResult.length > 0 ? (
          <ul className="flex flex-wrap gap-4 justify-center">
            {synonymsResult.map((synonym, index) => (
              <li
                key={index}
                className="flex justify-center items-center w-[140px] h-[50px] text-sm p-3 font-medium bg-gray-100 rounded-xl cursor-pointer hover:bg-gray-200"
                onClick={() => {
                  sessionStorage.setItem("selectedSynonym", synonym);
                  router.push("/");
                }}
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
    </div>
  );
}
