"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [result, setResult] = useState<
    { AppName: string; download_URL: string }[]
  >([]);

  useEffect(() => {
    const data = sessionStorage.getItem("searchResult");
    if (data) {
      setResult(JSON.parse(data));
    }
  }, []);

  return (
    <div className="flex flex-col h-screen gap-5 items-center justify-center bg-gradient-to-br from-[#84E53E] to-[#23BD99]">
      <h3 className="grandstander text-4xl">RESULT</h3>
      <div className="w-4/5 max-w-[1200px] h-[250px] bg-white overflow-y-scroll p-4 border border-gray-300 rounded-2xl shadow-md">
        {result.length > 0 ? (
          <ul>
            {result.map((app, index) => (
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
    </div>
  );
}
