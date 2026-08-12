import Link from "next/link";
import Image from "next/image";

const technologies = [
  "Flutter",
  "Dart",
  "Firebase",
  "Firebase Authentication",
  "Cloud Firestore",
  "Firebase Storage",
  "Google Maps",
  "Riverpod",
  "GoRouter",
  "Git / GitHub",
];

const features = [
  {
    number: "01",
    title: "グループで思い出を共有",
    description:
      "友達やカップルなど、特定のグループ内で思い出を共有。最大8人程度のグループを想定し、同じ旅行の記録をみんなで残せるようにしました。",
  },
  {
    number: "02",
    title: "写真と日記を記録",
    description:
      "旅行先で撮影した写真だけでなく、そのときの出来事や感情を日記として残せるようにしました。写真だけでは残りにくい記憶も振り返ることができます。",
  },
  {
    number: "03",
    title: "日本地図で思い出を可視化",
    description:
      "訪れた都道府県を日本地図上で確認できるようにしました。どこへ行ったのかを視覚的に振り返り、次の旅行先を考えるきっかけにもつなげます。",
  },
  {
    number: "04",
    title: "県の形に写真を表示",
    description:
      "訪れた都道府県には、その場所で撮影した写真を県の形に合わせて表示。日本地図そのものが思い出のアルバムになっていくUIを自分で考えました。",
  },
];

const challenges = [
  {
    number: "01",
    title: "日本地図の組み込み",
    description:
      "日本地図をアプリへ組み込むだけでなく、各都道府県を個別に扱えるようにする必要がありました。地図データとアプリ側のデータをどのように対応させるかを考えながら実装しました。",
  },
  {
    number: "02",
    title: "写真の登録・表示",
    description:
      "日本地図を組み込んだ後、実際の写真を各都道府県に登録して表示する部分に特に苦労しました。写真アップロード、データ保存、取得、表示までの処理を一つずつ確認しながら実装しました。",
  },
  {
    number: "03",
    title: "県の形への写真切り抜き",
    description:
      "単純に写真を表示するのではなく、都道府県の形に合わせて写真を表示することを目指しました。画像と地図データを組み合わせる必要があり、試行錯誤を重ねました。",
  },
  {
    number: "04",
    title: "グループでの思い出共有",
    description:
      "特定のグループだけで思い出を共有するため、ユーザー・グループ・思い出の関係を考えながらデータ構造を設計しました。個人利用だけではなく、複数人で利用することを前提に設計した点が難しかった部分です。",
  },
];

export default function OmoideMapPage() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#09090b]/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight transition hover:text-gray-300"
          >
            HIDE.
          </Link>

          <Link
            href="/"
            className="text-sm text-gray-400 transition hover:text-white"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-32 pt-40">
        <div className="absolute left-1/2 top-20 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl" />

        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center gap-3 text-sm text-gray-500">
            <span>01</span>
            <span className="h-px w-10 bg-gray-700" />
            <span>Mobile Application</span>
          </div>

          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
            Omoide
            <br />
            <span className="text-gray-500">Map.</span>
          </h1>
       <div className="flex items-center justify-between">
  <div>
    <h3 className="text-xl font-bold">
      思い出マップ
    </h3>
    <p className="text-gray-500">
      写真と思い出を地図上に残せるWebアプリ
    </p>
  </div>

  <a
    href="https://omoidemap.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 transition-all duration-200 hover:border-blue-400 hover:bg-blue-600 hover:text-white"
  >
    <span>View Project</span>
    <span className="transition-transform duration-200 group-hover:translate-x-1">
      →
    </span>
  </a>
</div>
          <div className="mt-10 grid gap-10 md:grid-cols-[1fr_320px] md:items-end">
            <div>
              <p className="text-2xl font-medium tracking-tight text-gray-200 sm:text-3xl">
                思い出を、場所とともに。
              </p>

              <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400">
                友達や大切な人と訪れた場所を、写真や日記とともに記録。
                訪れた都道府県を日本地図に残し、
                「自分たちの思い出で日本地図を埋めていく」ことを目指したアプリです。
              </p>
            </div>

            <div className="border-l border-white/10 pl-6">
              <p className="text-xs uppercase tracking-[0.25em] text-gray-600">
                Development
              </p>
              <p className="mt-3 text-sm text-gray-300">
                Personal Project
              </p>
              <p className="mt-1 text-sm text-gray-500">
                1〜3 months / Solo Development
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {["Flutter", "Firebase", "Firestore", "Google Maps"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-gray-400"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          {/* Hero Image */}
          <div className="mt-20 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02]">
            <Image
              src="/images/思い出マップ.png"
              alt="Omoide Map"
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Why I Built It */}
      <section className="border-t border-white/10 px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <SectionLabel number="01" label="Why I Built It" />

          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">
                友達との思い出を、
                <br />
                <span className="text-gray-500">
                  いつか見返せる形に。
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-gray-400">
              <p>
                友達と過ごす中で、リアルタイムに思い出を共有することが
                少しずつ生活の一部になっていました。
              </p>

              <p>
                自分自身、友達と国内旅行に行くことが多く、
                旅行先で撮影した写真をスマートフォンに残しています。
                しかし、時間が経つにつれて写真が埋もれ、
                「どこに行ったのか」「誰と行ったのか」を
                振り返る機会が少なくなっていました。
              </p>

              <p className="text-gray-200">
                そこで、
                <span className="font-medium">
                  「写真だけではなく、場所や一緒に過ごした人まで含めて思い出を残したい」
                </span>
                と考え、Omoide Mapを開発しました。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-t border-white/10 bg-white/[0.015] px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <SectionLabel number="02" label="Problem" />

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <ProblemCard
              number="01"
              title="写真が埋もれる"
              text="旅行で撮った写真がスマートフォンの中に大量に残り、時間が経つほど思い出を振り返りにくくなる。"
            />

            <ProblemCard
              number="02"
              title="場所が分からなくなる"
              text="写真だけを見ても、どこで撮影したのか分からなくなり、旅行の記憶と写真が結びつかなくなる。"
            />

            <ProblemCard
              number="03"
              title="個人の記録で終わる"
              text="一緒に旅行した友達との思い出を、特定のグループで継続的に共有できる場所がほしい。"
            />
          </div>
        </div>
      </section>

      {/* Idea */}
      <section className="border-t border-white/10 px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <SectionLabel number="03" label="Idea" />

          <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-600">
                The Concept
              </p>

              <h2 className="mt-6 text-4xl font-semibold leading-tight sm:text-6xl">
                自分たちの思い出で、
                <br />
                <span className="text-gray-500">
                  日本地図を埋めていく。
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-base leading-8 text-gray-400">
                「県の形に写真を表示する」というアイデアを自分自身で考え、
                訪れた場所と写真を直感的に結びつけるUIとして実装しました。
              </p>

              <div className="mt-8 inline-flex rounded-full border border-white/10 px-5 py-3 text-sm text-gray-300">
                Original UI Idea
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
              <Image
                src="/images/日本地図.png"
                alt="日本地図を使ったOmoide MapのUI"
                width={1200}
                height={900}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* User Hearing */}
      <section className="border-t border-white/10 px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <SectionLabel number="04" label="User Hearing" />

          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">
                自分だけで考えず、
                <br />
                <span className="text-gray-500">
                  実際に友人へ聞く。
                </span>
              </h2>
            </div>

            <div>
              <p className="leading-8 text-gray-400">
                開発前後に友人へヒアリングを行い、
                実際に使う人の意見を機能へ反映しました。
              </p>

              <div className="mt-8 space-y-4">
                <HearingItem
                  quote="特定のグループで思い出を共有したい"
                  result="グループ共有機能"
                />

                <HearingItem
                  quote="写真だけではなく日記も残したい"
                  result="写真＋日記機能"
                />

                <HearingItem
                  quote="訪れた場所を視覚的に見たい"
                  result="日本地図による可視化"
                />
              </div>
            </div>
          </div>

          <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.025] p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.25em] text-gray-600">
              What I realized
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-300">
              自分一人で考えていると発想に偏りが出ます。
              実際に使う人へ話を聞くことで、自分では想定していなかったニーズや
              改善点を知ることができました。
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-white/10 bg-white/[0.015] px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <SectionLabel number="05" label="Features" />

          <h2 className="mt-10 text-3xl font-semibold sm:text-5xl">
            Designed around
            <br />
            <span className="text-gray-500">shared memories.</span>
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.number}
                className="group rounded-2xl border border-white/10 bg-[#0d0d0f] p-8 transition hover:border-white/20 sm:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm text-gray-600">
                    {feature.number}
                  </span>

                  <span className="text-gray-700 transition group-hover:text-gray-400">
                    ↗
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Screens */}
      <section className="border-t border-white/10 px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <SectionLabel number="06" label="App Screens" />

          <div className="mt-12">
            <h2 className="text-3xl font-semibold sm:text-5xl">
              From design
              <br />
              <span className="text-gray-500">to actual screens.</span>
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-gray-400">
              FigmaでUIを設計した後、Flutterを使って実際のアプリとして
              実装しました。ここでは完成したアプリの画面を紹介します。
            </p>
          </div>

          <div className="mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-4 sm:p-8">
            <Image
              src="/images/画面.png"
              alt="Omoide Mapのアプリ画面"
              width={1600}
              height={1000}
              className="h-auto w-full rounded-2xl object-contain"
            />
          </div>
        </div>
      </section>

      {/* Design */}
      <section className="border-t border-white/10 bg-white/[0.015] px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <SectionLabel number="07" label="Design" />

          <div className="mt-12 grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-semibold sm:text-5xl">
                Figmaで考えてから、
                <br />
                <span className="text-gray-500">コードを書く。</span>
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-gray-400">
                実装を始める前にFigmaを使ってUIや画面構成を設計。
                その後Flutterでアプリとして実装しました。
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
              <Image
                src="/images/思い出マップ.png"
                alt="Omoide Mapのデザイン"
                width={1200}
                height={800}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="border-t border-white/10 px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <SectionLabel number="08" label="Technology" />

          <div className="mt-12 grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-3xl font-semibold sm:text-5xl">
                Built with
                <br />
                <span className="text-gray-500">modern tools.</span>
              </h2>

              <p className="mt-6 leading-8 text-gray-400">
                Figmaで設計し、Flutterでアプリケーションを開発。
                Firebaseをバックエンドとして利用し、認証・データ保存・
                写真データの管理を行いました。
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {technologies.map((tech) => (
                <div
                  key={tech}
                  className="rounded-xl border border-white/10 bg-[#0d0d0f] p-5 text-sm text-gray-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development */}
      <section className="border-t border-white/10 bg-white/[0.015] px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <SectionLabel number="09" label="Development" />

          <div className="mt-12">
            <h2 className="text-3xl font-semibold sm:text-5xl">
              From idea
              <br />
              <span className="text-gray-500">to product.</span>
            </h2>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              <DevelopmentStep
                number="01"
                title="Idea"
                text="自分自身の旅行経験や写真を残す習慣から、思い出を場所とともに残すアイデアを考えました。"
              />

              <DevelopmentStep
                number="02"
                title="Design"
                text="Figmaを使って画面構成やUIを設計。実際の利用シーンを考えながら必要な機能を整理しました。"
              />

              <DevelopmentStep
                number="03"
                title="Development"
                text="FlutterとFirebaseを使い、一人で1〜3か月かけて開発。Git / GitHubでコードを管理しました。"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="border-t border-white/10 px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <SectionLabel number="10" label="Challenges" />

          <div className="mt-12 grid gap-12 md:grid-cols-[0.75fr_1.25fr]">
            <div>
              <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">
                The hard
                <br />
                <span className="text-gray-500">parts.</span>
              </h2>

              <p className="mt-6 leading-8 text-gray-400">
                実際に開発してみると、
                アイデアを形にするために複数の技術を組み合わせる必要がありました。
              </p>
            </div>

            <div className="space-y-4">
              {challenges.map((challenge) => (
                <div
                  key={challenge.number}
                  className="rounded-2xl border border-white/10 bg-[#0d0d0f] p-7 sm:p-8"
                >
                  <div className="flex gap-6">
                    <span className="text-sm text-gray-600">
                      {challenge.number}
                    </span>

                    <div>
                      <h3 className="text-xl font-semibold">
                        {challenge.title}
                      </h3>

                      <p className="mt-4 leading-8 text-gray-400">
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What I Learned */}
      <section className="border-t border-white/10 bg-white/[0.015] px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <SectionLabel number="11" label="What I Learned" />

          <h2 className="mt-10 max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
            技術だけではなく、
            <br />
            <span className="text-gray-500">
              プロダクトの作り方を学んだ。
            </span>
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <LearningCard
              title="Technical"
              text="FlutterやFirebaseを組み合わせた開発を通して、フロントエンドとバックエンドのデータ連携、非同期処理、TypeScriptなどの仕組みへの理解が深まりました。"
            />

            <LearningCard
              title="Product"
              text="機能を実装することだけを目的にするのではなく、「誰が」「なぜ」「どのように使うのか」を考えてプロダクトを設計する重要性を学びました。"
            />

            <LearningCard
              title="User"
              text="自分一人で考えると発想に偏りが出ます。実際に友人へヒアリングすることで、自分では気づけなかったニーズを発見できることを学びました。"
            />
          </div>
        </div>
      </section>

      {/* GitHub */}
      <section className="border-t border-white/10 px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-10 sm:p-16">
            <SectionLabel number="12" label="GitHub" />

            <h2 className="mt-10 text-4xl font-semibold sm:text-6xl">
              Explore the
              <br />
              <span className="text-gray-500">project.</span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-gray-400">
              Omoide Mapのソースコードや開発内容をGitHubで公開しています。
            </p>

            <a
              href="https://github.com/kaiko1188"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-gray-200"
            >
              View GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between text-sm text-gray-600">
          <p>Omoide Map / HIDE.</p>

          <Link
            href="/"
            className="transition hover:text-white"
          >
            Back to Portfolio
          </Link>
        </div>
      </footer>
    </main>
  );
}

/* ---------- Components ---------- */

function SectionLabel({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-gray-500">
      <span>{number}</span>
      <span className="h-px w-8 bg-gray-700" />
      <span>{label}</span>
    </div>
  );
}

function ProblemCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0d0d0f] p-8">
      <span className="text-sm text-gray-600">{number}</span>

      <h3 className="mt-8 text-xl font-semibold">{title}</h3>

      <p className="mt-4 leading-7 text-gray-400">{text}</p>
    </div>
  );
}

function HearingItem({
  quote,
  result,
}: {
  quote: string;
  result: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.025] p-5">
      <p className="text-sm text-gray-300">“{quote}”</p>

      <div className="mt-4 flex items-center gap-3 text-xs">
        <span className="text-gray-600">→</span>
        <span className="text-gray-500">Feature</span>
        <span className="text-gray-300">{result}</span>
      </div>
    </div>
  );
}

function DevelopmentStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-8">
      <span className="text-sm text-gray-600">{number}</span>

      <h3 className="mt-8 text-xl font-semibold">{title}</h3>

      <p className="mt-4 leading-7 text-gray-400">{text}</p>
    </div>
  );
}

function LearningCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-8">
      <p className="text-xs uppercase tracking-[0.25em] text-gray-600">
        {title}
      </p>

      <p className="mt-6 leading-8 text-gray-400">{text}</p>
    </div>
  );
}
