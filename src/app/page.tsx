export default function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-around items-center p-4 border-b border-gray-600">
        <a
          href="https://x.com/women_cto"
          className="text-lg md:text-2xl text-gray-200 px-4 py-2 hover:bg-gray-800 rounded-lg focus:ring focus:ring-gray-700"
          aria-label="Visit Women CTO on X"
        >
          X
        </a>
        <a
          href="https://t.me/Womenctoportal"
          className="text-lg md:text-2xl text-gray-200 px-4 py-2 hover:bg-gray-800 rounded-lg focus:ring focus:ring-gray-700"
          aria-label="Visit Women CTO on Telegram"
        >
          Telegram
        </a>
      </nav>

      {/* Hero Section */}
      <div
        className="flex flex-col items-center justify-center bg-cover bg-center text-center gap-4 px-4"
        style={{
          backgroundImage: "url(/wo.png)",
          height: "90vh",
        }}
      >
        <div className="flex flex-col gap-2 bg-black bg-opacity-70 p-8 rounded-xl">
          <p className="text-sm md:text-2xl lg:text-3xl text-gray-300 px-4">
            CA: DPfEwwrcWvc63PobzdcDkDbkY5FgWn7zCxEkXGGHpump
          </p>
          <a
            href="https://dexscreener.com/solana/83bbu7kt3ywt5qfqmjtva8euff3pg2vgywfkueufkdb7"
            className=" md:text-xl lg:text-2xl text-gray-300 px-6 py-3 border border-gray-300 hover:bg-gray-950 rounded-lg hover:text-gray-200 focus:ring focus:ring-gray-700 w-40 mx-auto"
            aria-label="View Chart on Dexscreener"
          >
            Chart
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto  text-gray-400 text-center py-4 text-sm border-t border-gray-700">
        <p>
          Women will cook |{" "}
          <a
            href="https://x.com/women_cto"
            className="hover:text-gray-200 underline"
          >
            Follow us on X
          </a>
        </p>
      </footer>
    </div>
  );
}
