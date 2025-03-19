"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/loading";

export default function Home() {
  const [ideaText, setIdeaText] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [isComposing, setIsComposing] = useState(false);

  useEffect(() => {
    // Resultページで選択した類義語を取得
    const selectedSynonym = sessionStorage.getItem("selectedSynonym");
    if (selectedSynonym) {
      setIdeaText((prev) =>
        prev ? `${prev} ${selectedSynonym}` : selectedSynonym
      );
      sessionStorage.removeItem("selectedSynonym");
      handleSearch();
    }
  }, []);

  const handleSearch = async () => {
    if (!ideaText.trim()) return;
    setLoading(true);

    try {
      // search API
      const searchResponse = await fetch(
        "https://djbn-server.onrender.com/search",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: ideaText }),
        }
      );

      if (!searchResponse.ok) {
        throw new Error(`HTTPエラー: ${searchResponse.status}`);
      }

      const searchData = await searchResponse.json();
      console.log("検索結果:", searchData);
      sessionStorage.setItem("searchResult", JSON.stringify(searchData));

      // synonyms API
      const synonymsResponse = await fetch(
        "https://djbn-server.onrender.com/synonyms",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: ideaText }),
        }
      );

      if (!synonymsResponse.ok) {
        throw new Error(`HTTPエラー: ${synonymsResponse.status}`);
      }

      const synonymsData = await synonymsResponse.json();
      console.log("類義語:", synonymsData);
      sessionStorage.setItem("synonymsResult", JSON.stringify(synonymsData));

      router.push("/result");
    } catch (error) {
      console.error("APIリクエストに失敗:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="flex flex-col h-screen items-center justify-center bg-gradient-to-br from-[#84E53E] to-[#23BD99]">
          <>
            <div className="kiwi-maru text-2xl text-white m-6">
              そのアイデア、被ってない？
            </div>
            <div className="flex kiwi-maru w-96 h-15 bg-white rounded-full px-6 mb-8">
              <input
                type="text"
                className="w-full h-full focus:outline-none focus:none"
                placeholder="アイデアを入力..."
                value={ideaText}
                onChange={(e) => setIdeaText(e.target.value)}
                onCompositionStart={() => setIsComposing(true)}
                onCompositionEnd={() => setIsComposing(false)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !isComposing) {
                    e.preventDefault();
                    handleSearch();
                  }
                }}
              />
              <button onClick={handleSearch} className="w-1/10 h-full text-2xl">
                <div>🔍</div>
              </button>
            </div>
            <button className="caveat text-8xl pt-5 text-[#1A9A79] transform rotate-[-5deg]">
              Let&apos;s check it!!
            </button>
          </>
        </div>
      )}
    </>
  );
}
