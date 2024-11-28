import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-around items-center p-4 border-b border-gray-600">
        <a
          href="https://x.com/women_cto"
          className="text-lg md:text-2xl text-gray-200 px-4 py-2 hover:bg-gray-800 rounded-lg focus:ring focus:ring-gray-700"
          aria-label="Visit Women CTO on X"
          target="_blank"
          rel="noopener noreferrer"
        >
          X
        </a>
        <a
          href="https://t.me/Womenctoportal"
          className="text-lg md:text-2xl text-gray-200 px-4 py-2 hover:bg-gray-800 rounded-lg focus:ring focus:ring-gray-700"
          aria-label="Visit Women CTO on Telegram"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
        </a>
      </nav>

      {/* Hero Section */}
      <div
        className="relative flex flex-col items-center justify-center text-center gap-4 px-4"
        style={{ height: "90vh" }}
      >
        {/* Optimized Background Image */}
        <Image
          src="/wo.png"
          alt="Background"
          width={1920}
          height={1080}
          quality={100}
          priority
        />
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-gray-300 font-bold">
          This will cook!
        </h1>
        <div className="flex flex-col gap-2 bg-black bg-opacity-70 p-2 md:p-8 rounded-xl">
          <p className="text-xs md:text-2xl lg:text-3xl text-gray-300 px-4">
            CA: DPfEwwrcWvc63PobzdcDkDbkY5FgWn7zCxEkXGGHpump
          </p>
          <a
            href="https://dexscreener.com/solana/83bbu7kt3ywt5qfqmjtva8euff3pg2vgywfkueufkdb7"
            className=" md:text-xl lg:text-2xl text-gray-300 px-6 py-3 border border-gray-300 hover:bg-gray-950 rounded-lg hover:text-gray-200 focus:ring focus:ring-gray-700 w-40 mx-auto"
            aria-label="View Chart on Dexscreener"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chart
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto text-gray-400 text-center py-4 text-sm border-t border-gray-700">
        <p>
          Women will cook |{" "}
          <a
            href="https://x.com/women_cto"
            className="hover:text-gray-200 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow us on X
          </a>
        </p>
      </footer>
    </div>
  );
}
