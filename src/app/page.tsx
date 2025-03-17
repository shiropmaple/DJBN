import "./globals.css";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-300 to-lime-300">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 tracking-wide">
        DEJABUN
      </h1>
      <div className="text-2xl text-gray-700 mb-6">
        そのアイデア、被ってない？
      </div>
      <input
        type="text"
        className="w-80 h-12 bg-white rounded-full px-6 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-8"
        placeholder="アイデアを入力..."
      />
      <button className="text-3xl text-teal-600 font-semibold tracking-wide">
        Let&apos;s check it!!
      </button>

      <div className="font-my-font">
        text
      </div>
    </div>
  );
}
