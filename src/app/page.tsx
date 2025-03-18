import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#84E53E] to-[#23BD99]">
      <div className="kiwi-maru text-2xl text-white m-6">
        そのアイデア、被ってない？
      </div>
      <div className="flex caveat w-96 h-15 bg-white rounded-full px-6 mb-8">
        <input
          type="text"
          className="w-full h-full"
          placeholder="アイデアを入力..."
        />
        <button className="w-1/10 h-full text-2xl">
          <Link href="/result">🔍</Link>
        </button>
      </div>
      <button className="caveat text-8xl pt-5 text-[#1A9A79] transform rotate-[-5deg]">
        Let&apos;s check it!!
      </button>
    </div>
  );
}
