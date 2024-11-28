// File: pages/index.js

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url(/hot-1.jpg)",
        backgroundSize: "contain",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <a href="https://x.com/HotWifePlz" className="text-3xl bg-white p-3">
        X
      </a>
      <a
        href="https://t.me/+DKOt0qiDb9A5MTAx"
        className="text-3xl bg-white p-3"
      >
        Telegram
      </a>
      <p className="text-3xl bg-white p-3">
        CA: 33cWbET7k6Z7dTcYW3CKxVcmrtEh5M3yLTiDCCXdpump
      </p>
      <a
        href="https://pump.fun/coin/33cWbET7k6Z7dTcYW3CKxVcmrtEh5M3yLTiDCCXdpump"
        className="text-3xl bg-white p-3"
      >
        BUY
      </a>
    </div>
  );
}
