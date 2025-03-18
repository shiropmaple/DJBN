export default function Home() {
  const dummyData = [
    { title: "Google", url: "https://www.google.com" },
    { title: "YouTube", url: "https://www.youtube.com" },
    { title: "GitHub", url: "https://github.com" },
    { title: "Twitter", url: "https://twitter.com" },
    { title: "Facebook", url: "https://facebook.com" },
    { title: "Instagram", url: "https://www.instagram.com" },
    { title: "Netflix", url: "https://www.netflix.com" },
    { title: "Amazon", url: "https://www.amazon.com" },
    { title: "OpenAI", url: "https://openai.com" },
    { title: "Next.js", url: "https://nextjs.org" },
  ];

  return (
    <div
      className="flex flex-col gap-5 items-center justify-center bg-gradient-to-br from-[#84E53E] to-[#23BD99]"
      style={{ height: "calc(100vh - 70px)" }}
    >
      <h3 className="grandstander text-4xl">Result</h3>
      <div className="w-4/5 h-1/2 bg-white overflow-y-scroll p-4 border border-gray-300 rounded-lg shadow-md">
        <ul className="space-y-2">
          {dummyData.map((item, index) => (
            <li
              key={index}
              className="p-2 border-b last:border-none flex justify-between items-center"
            >
              <span className="text-gray-700">{item.title}</span>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {item.url}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
