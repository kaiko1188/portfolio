import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

/**
 * SwapMind 紹介ページ（app/projects/dex/page.tsx）
 * - 画像は public/images/ に置きます（アイコン: public/images/swapmind-icon.png）
 * - スタイルはこのファイル内で完結しています
 * - SCREENSHOT に画像パスを入れると、アプリ画面の枠が画像に変わります（1枚）
 */

const ICON_SRC = "/images/swapmind-icon.png";
const GITHUB_URL = "https://github.com/kaiko1188/DEX";
const BACK_URL = "/";
const SCREENSHOT = "/images/dex.png"; 

const ACCENT = "#35c2d3";

const TECH_TAGS = [
  "Django",
  "Web3.py",
  "Ethereum (Sepolia)",
  "MetaMask",
  "CoinMarketCap API",
];

const FEATURES = [
  {
    title: "リアルタイムな価格反映",
    body: "CoinMarketCap APIと連携し、常に最新の市場価格（ETH/USDなど）をもとに交換レートを提示します。「いくら送ると、いくら手に入るか」を即座に確認できます。",
  },
  {
    title: "直感的なフロントエンドUI",
    body: "MetaMaskとの連携により、わずか数クリックでウォレット接続からスワップ処理まで完結します。複雑なブロックチェーンの操作を感じさせない、洗練されたユーザー体験を目指しました。",
  },
  {
    title: "信頼性の高いオンチェーン処理",
    body: "トランザクション処理はWeb3.pyを通じて、Ethereum（Sepoliaテストネット）上のスマートコントラクトで実行されます。ブロックチェーン上で自動化されているため、不透明な手数料の徴収や第三者による不正の心配がありません。",
  },
];

const STEPS = [
  { title: "ウォレット接続", body: "MetaMaskを連携して、自分のウォレットをアプリに接続します。" },
  { title: "トークン・数量入力", body: "「ETHからUSDCへ」など、交換したいトークンと数量を入力します。" },
  { title: "レート確認", body: "現在の市場価格に基づいた予想獲得量が、リアルタイムで表示されます。" },
  { title: "スワップ実行", body: "実行ボタンを押すとブロックチェーンへ処理が送信され、交換が完了します。" },
];

const TOKENS = [
  { symbol: "ETH", note: "イーサリアム" },
  { symbol: "USDC", note: "USD Coin / ステーブルコイン" },
  { symbol: "USDT", note: "Tether / ステーブルコイン" },
];

const TECH_STACK = [
  "Python / Django",
  "Web3.py",
  "Ethereum (Sepolia Testnet)",
  "Smart Contract",
  "MetaMask",
  "CoinMarketCap API",
];

/* ---------- styles ---------- */

const css = `
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap");
.sm-root{--accent:${ACCENT};background:#0a0a0c;color:#fff;font-family:"Noto Sans JP",system-ui,sans-serif;line-height:1.8;overflow-x:hidden;min-height:100vh}
.sm-root *{box-sizing:border-box}
.sm-root a{color:#a7b0c0;text-decoration:none}
.sm-root a:hover{color:#fff}
.sm-root .sm-btn{display:inline-block;padding:14px 32px;border-radius:999px;background:#fff;color:#0a0a0c;font-size:16px;font-weight:500}
.sm-root .sm-btn:hover{color:#0a0a0c;opacity:.85}
`;

const grotesk = "'Space Grotesk', sans-serif";

const wrap: CSSProperties = { maxWidth: 1040, margin: "0 auto" };
const section: CSSProperties = { borderTop: "1px solid #1a1a22", padding: "112px 24px" };
const col40: CSSProperties = { ...wrap, display: "flex", flexDirection: "column", gap: 40 };
const card: CSSProperties = {
  border: "1px solid #1c1c24",
  borderRadius: 22,
  background: "#0f0f14",
};
const bigTitle: CSSProperties = {
  margin: 0,
  fontFamily: grotesk,
  fontSize: "clamp(36px, 6vw, 68px)",
  fontWeight: 700,
  lineHeight: 1.1,
  letterSpacing: "-0.02em",
};
const bodyText: CSSProperties = { margin: 0, maxWidth: 760, fontSize: 17, color: "#a7b0c0", lineHeight: 2 };

/* ---------- parts ---------- */

function Label({ no, children }: { no: string; children: ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#667085", fontSize: 13, letterSpacing: "0.3em" }}>
      <span>{no}</span>
      <span style={{ width: 56, height: 1, background: "#3a4252" }} />
      <span>{children}</span>
    </div>
  );
}

function TwoLineTitle({ top, bottom }: { top: string; bottom: string }) {
  return (
    <h2 style={bigTitle}>
      <span style={{ color: "#fff" }}>{top}</span>
      <br />
      <span style={{ color: "#667085" }}>{bottom}</span>
    </h2>
  );
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        padding: "8px 20px",
        border: "1px solid #23232c",
        borderRadius: 999,
        background: "#0f0f14",
        fontSize: 14,
        color: "#a7b0c0",
      }}
    >
      {children}
    </span>
  );
}

/* ---------- page ---------- */

export default function SwapMind() {
  return (
    <div className="sm-root">
      <style>{css}</style>

      {/* Header */}
      <header style={{ borderBottom: "1px solid #1a1a22" }}>
        <div style={{ ...wrap, padding: "28px 24px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <div style={{ fontFamily: grotesk, fontWeight: 700, fontSize: 22, letterSpacing: "0.01em" }}>HIDE.</div>
          <a href={BACK_URL} style={{ fontSize: 15 }}>← Back to Portfolio</a>
        </div>
      </header>

      {/* Hero */}
      <section style={{ padding: "96px 24px 112px" }}>
        <div style={{ ...wrap, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 64 }}>
          <div style={{ flex: "1 1 480px", minWidth: 0, display: "flex", flexDirection: "column", gap: 28 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#8d95a5", fontSize: 15, letterSpacing: "0.04em" }}>
              <span>01</span>
              <span style={{ width: 72, height: 1, background: "#3a4252" }} />
              <span>Web Application</span>
            </div>
            <h1
              style={{
                margin: 0,
                fontFamily: grotesk,
                fontWeight: 700,
                fontSize: "clamp(64px, 13vw, 132px)",
                lineHeight: 0.98,
                letterSpacing: "-0.03em",
              }}
            >
              <span style={{ color: "#fff" }}>Swap</span>
              <br />
              <span style={{ color: "#667085" }}>Mind.</span>
            </h1>
            <div>
              <div style={{ fontSize: 22, fontWeight: 700 }}>Web3 DEXスワップアプリ</div>
              <div style={{ fontSize: 16, color: "#8d95a5" }}>MetaMaskをつなぐだけで、トークンを手軽に交換</div>
            </div>
          </div>
          <div style={{ flex: "0 1 340px", minWidth: 220, display: "flex", justifyContent: "center" }}>
            <Image
              src={ICON_SRC}
              alt="SwapMindのアプリアイコン"
              width={272}
              height={279}
              priority
              style={{
                width: "100%",
                maxWidth: 340,
                height: "auto",
                display: "block",
                filter: "drop-shadow(0 24px 60px rgba(53, 194, 211, 0.28))",
              }}
            />
          </div>
        </div>

        <div style={{ ...wrap, margin: "72px auto 0", display: "flex", flexDirection: "column", gap: 40 }}>
          <h2 style={{ margin: 0, fontSize: "clamp(30px, 4.6vw, 46px)", fontWeight: 500, lineHeight: 1.35, color: "#f2f4f8" }}>
            初心者でも直感的に使える、
            <br />
            Web3時代のトークン交換。
          </h2>
          <p style={bodyText}>
            MetaMask（暗号資産ウォレット）を接続して、ETH・USDC・USDTなどのトークンを手軽に交換（スワップ）できる分散型取引所（DEX）アプリケーションです。銀行や中央集権的な取引所を介さず、ブロックチェーン上のスマートコントラクトで交換を行います。
          </p>
          <div style={{ borderLeft: "1px solid #2a3140", paddingLeft: 28, display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ fontSize: 13, letterSpacing: "0.3em", color: "#667085" }}>DEVELOPMENT</div>
            <div style={{ fontSize: 17 }}>Personal Project</div>
            <div style={{ fontSize: 16, color: "#8d95a5" }}>Solo Development</div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {TECH_TAGS.map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
        </div>
      </section>

      {/* 01 Overview */}
      <section style={section}>
        <div style={col40}>
          <Label no="01">OVERVIEW</Label>
          <h2 style={{ margin: 0, fontSize: "clamp(32px, 5.4vw, 60px)", fontWeight: 700, lineHeight: 1.25 }}>
            <span style={{ color: "#fff" }}>銀行を介さず、</span>
            <br />
            <span style={{ color: "#667085" }}>ブロックチェーン上で交換する。</span>
          </h2>
          <div style={{ maxWidth: 760, display: "flex", flexDirection: "column", gap: 20, fontSize: 17, color: "#a7b0c0", lineHeight: 2 }}>
            <p style={{ margin: 0 }}>
              スマートコントラクト（自動実行プログラム）を利用して、安全かつスピーディに暗号資産の交換を行うことができます。
            </p>
            <p style={{ margin: 0, color: "#fff" }}>
              ブロックチェーンの複雑さを感じさせず、<span style={{ color: "var(--accent)" }}>ウォレットをつなぐだけ</span>でスワップを体験できるアプリを目指しました。
            </p>
          </div>
          <div style={{ ...card, maxWidth: 760, borderRadius: 20, padding: "28px 32px", display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontSize: 13, letterSpacing: "0.3em", color: "#667085" }}>TARGET</div>
            <div style={{ fontSize: 17, color: "#e4e8ef" }}>
              Web3やDeFi（分散型金融）に興味があるユーザー、暗号資産のスワップを試したい方。
            </div>
          </div>
        </div>
      </section>

      {/* 02 Features */}
      <section style={section}>
        <div style={col40}>
          <Label no="02">FEATURES</Label>
          <TwoLineTitle top="Designed for" bottom="simple swaps." />
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {FEATURES.map((f, i) => (
              <div key={f.title} style={{ ...card, padding: "36px 40px", display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ fontFamily: grotesk, fontSize: 15, color: "var(--accent)" }}>{String(i + 1).padStart(2, "0")}</div>
                <h3 style={{ margin: 0, fontSize: 26, fontWeight: 700 }}>{f.title}</h3>
                <p style={{ margin: 0, fontSize: 16, color: "#a7b0c0", lineHeight: 2 }}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 How it works */}
      <section style={section}>
        <div style={col40}>
          <Label no="03">HOW IT WORKS</Label>
          <TwoLineTitle top="Four steps" bottom="to swap." />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
            {STEPS.map((s, i) => (
              <div key={s.title} style={{ ...card, flex: "1 1 220px", minWidth: 0, padding: "32px 28px", display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ fontFamily: grotesk, fontSize: 40, fontWeight: 700, color: "var(--accent)", lineHeight: 1 }}>{i + 1}</div>
                <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>{s.title}</h3>
                <p style={{ margin: 0, fontSize: 15, color: "#a7b0c0", lineHeight: 1.9 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 Supported tokens */}
      <section style={section}>
        <div style={col40}>
          <Label no="04">SUPPORTED TOKENS</Label>
          <TwoLineTitle top="Currently" bottom="supported." />
          <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
            {TOKENS.map((t) => (
              <div key={t.symbol} style={{ ...card, flex: "1 1 260px", minWidth: 0, padding: "32px 36px", display: "flex", flexDirection: "column", gap: 6 }}>
                <div style={{ fontFamily: grotesk, fontSize: 34, fontWeight: 700 }}>{t.symbol}</div>
                <div style={{ fontSize: 15, color: "#8d95a5" }}>{t.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 App screens */}
      <section style={section}>
        <div style={col40}>
          <Label no="05">APP SCREENS</Label>
          <TwoLineTitle top="From wallet" bottom="to swap." />
          <p style={bodyText}>完成したアプリの画面を紹介します。</p>
          {SCREENSHOT ? (
            <div style={{ overflow: "hidden", borderRadius: 32, border: "1px solid #1c1c24", background: "#0d0d12" }}>
              <Image
                src={SCREENSHOT}
                alt="SwapMindのアプリ画面"
                width={1600}
                height={900}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          ) : (
            <div
              style={{
                height: 420,
                border: "1px dashed #2f3645",
                borderRadius: 32,
                background: "#0d0d12",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 6,
                color: "#8d95a5",
                textAlign: "center",
                padding: 24,
              }}
            >
              <div style={{ fontFamily: grotesk, fontSize: 13, letterSpacing: "0.3em" }}>SCREENSHOT</div>
              <div style={{ fontSize: 15 }}>スクリーンショットを追加
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 06 Technology */}
      <section style={section}>
        <div style={col40}>
          <Label no="06">TECHNOLOGY</Label>
          <TwoLineTitle top="Built with" bottom="modern tools." />
          <p style={bodyText}>
            Djangoによる堅牢なバックエンド、Web3.pyによるスマートコントラクトとの連携、リアルタイム価格APIの統合が技術的な見どころです。
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            {TECH_STACK.map((t) => (
              <div key={t} style={{ ...card, flex: "1 1 260px", minWidth: 0, borderRadius: 16, padding: "20px 28px", fontSize: 16 }}>
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 GitHub */}
      <section style={section}>
        <div style={wrap}>
          <div
            style={{
              padding: "64px 48px",
              border: "1px solid #1c1c24",
              borderRadius: 32,
              background: "#101016",
              display: "flex",
              flexDirection: "column",
              gap: 28,
              alignItems: "flex-start",
            }}
          >
            <Label no="07">GITHUB</Label>
            <h2 style={{ ...bigTitle, fontSize: "clamp(40px, 6.5vw, 76px)", lineHeight: 1.05 }}>
              <span style={{ color: "#fff" }}>Explore the</span>
              <br />
              <span style={{ color: "#667085" }}>project.</span>
            </h2>
            <p style={{ margin: 0, fontSize: 17, color: "#a7b0c0" }}>SwapMindのソースコードや開発内容はGitHubで確認できます。</p>
            <a className="sm-btn" href={GITHUB_URL} target="_blank" rel="noreferrer">
              View GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #1a1a22" }}>
        <div style={{ ...wrap, padding: "32px 24px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 12, fontSize: 14, color: "#667085" }}>
          <span>SwapMind / HIDE.</span>
          <a href={BACK_URL}>← Back to Portfolio</a>
        </div>
      </footer>
    </div>
  );
}
