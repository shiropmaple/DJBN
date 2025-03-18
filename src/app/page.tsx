"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [ideaText, setIdeaText] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [isComposing, setIsComposing] = useState(false);

  const handleSearch = async () => {
    if (!ideaText.trim()) return;
    setLoading(true);

    try {
      const response = await fetch("https://djbn-server.onrender.com/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: ideaText }),
      });
      if (!response.ok) {
        throw new Error(`HTTPエラー: ${response.status}`);
      }
      const jsondata = await response.json();
      console.log("レスポンスデータ:", jsondata);
      sessionStorage.setItem("searchResult", JSON.stringify(jsondata));
      router.push("/result");
    } catch (error) {
      console.error("APIリクエストに失敗:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-gradient-to-br from-[#84E53E] to-[#23BD99]">
      {loading ? (
        <div className="flex justify-center" aria-label="読み込み中">
          <div className="animate-spin h-8 w-8 bg-white rounded-xl"></div>
        </div>
      ) : (
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
      )}
    </div>
  );
}
