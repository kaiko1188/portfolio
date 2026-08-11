import Link from "next/link";

const technologies = [
  "Flutter",
  "Dart",
  "Firebase",
  "Firebase Authentication",
  "Cloud Firestore",
  "Google Maps",
  "Riverpod",
  "GoRouter",
];

const features = [
  {
    number: "01",
    title: "グループで思い出を共有",
    description:
      "友達グループやカップルなど、特定のメンバーで同じ思い出を共有。最大8人程度のグループで、一緒に旅行したメンバーの思い出を残すことを想定しています。",
  },
  {
    number: "02",
    title: "写真と日記を記録",
    description:
      "旅行先で撮影した写真だけでなく、その時の出来事や感じたことを日記として残します。写真だけでは残りにくい記憶まで振り返ることができます。",
  },
  {
    number: "03",
    title: "日本地図で思い出を可視化",
    description:
      "訪れた都道府県を日本地図上で確認できます。これまでどこへ行ったのかを視覚的に振り返りながら、次の旅行先を考えるきっかけにもつなげます。",
  },
  {
    number: "04",
    title: "県の形に写真を表示",
    description:
      "訪れた都道府県には、その場所で撮影した写真を県の形に合わせて表示します。地図そのものが少しずつ思い出のアルバムになっていくデザインを目指しました。",
  },
];

export default function OmoideMapPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight"
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
      <section className="flex min-h-[90vh] items-center px-6 pt-16">
        <div className="mx-auto w-full max-w-6xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
            Mobile Application / Flutter
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
            Omoide Map
          </h1>

          <p className="mt-6 max-w-2xl text-2xl font-medium leading-relaxed text-gray-300">
            思い出を、場所とともに。
          </p>

          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-400">
            友達や大切な人と訪れた場所を、写真や日記とともに残し、
            日本地図に思い出を積み重ねていくアプリです。
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "Flutter",
              "Firebase",
              "Firestore",
              "Google Maps",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-gray-500">
            Problem
          </p>

          <div className="grid gap-12 md:grid-cols-2">
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              大切な思い出を、
              <br />
              もっと残しやすく。
            </h2>

            <div className="space-y-6 leading-8 text-gray-400">
              <p>
                自分自身、友達と国内旅行に行くことが多く、
                私生活でも思い出を写真として残すことが多くあります。
              </p>

              <p>
                しかし、時間が経つにつれて写真がスマートフォンの中に
                埋もれてしまい、どこへ行ったのか、誰と行ったのかを
                振り返る機会が少なくなることに課題を感じました。
              </p>

              <p>
                そこで、現在の思い出をリアルタイムで友達と共有しながら、
                将来、年を重ねたときにも旅行の記憶を振り返ることができる
                仕組みを考えました。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Idea */}
      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-gray-500">
            Idea
          </p>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-16">
            <p className="text-sm text-gray-500">
              THE IDEA
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-tight sm:text-6xl">
              全国を、
              <br />
              思い出で埋めていく。
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
              自分自身の旅行経験をもとに、訪れた場所を写真とともに
              記録できるアプリを考えました。
              特に「都道府県の形に写真を表示する」というアイデアは、
              自分自身で考えたものです。
            </p>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              また、個人だけでなく、特定の友達グループで思い出を
              共有できるようにすることで、「自分だけの旅行記録」ではなく
              「みんなの思い出」として残せることを目指しました。
            </p>
          </div>
        </div>
      </section>

      {/* User Hearing */}
      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-gray-500">
            User Research
          </p>

          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                自分のアイデアを、
                <br />
                他者の視点で磨く。
              </h2>
            </div>

            <div className="space-y-6 leading-8 text-gray-400">
              <p>
                開発前には実際に友人へヒアリングを行い、
                自分だけでは気づけなかったニーズを確認しました。
              </p>

              <p>
                ヒアリングでは、友達同士など特定のグループで
                思い出を共有したいという意見があり、
                グループ共有機能の設計に反映しました。
              </p>

              <p>
                また、写真だけでなく日記も残したいという意見を受け、
                写真と文章の両方から思い出を振り返れるようにしました。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-gray-500">
            Features
          </p>

          <h2 className="mb-16 text-3xl font-semibold sm:text-4xl">
            What can Omoide Map do?
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.number}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-8"
              >
                <p className="text-sm text-gray-500">
                  {feature.number}
                </p>

                <h3 className="mt-4 text-2xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-7 text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-gray-500">
            Technology
          </p>

          <h2 className="mb-12 text-3xl font-semibold sm:text-4xl">
            Built with
          </h2>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-sm text-gray-300"
              >
                {tech}
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 p-8">
              <h3 className="text-xl font-semibold">
                Firebase Authentication
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                ユーザーのログイン・認証機能を実装。
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-8">
              <h3 className="text-xl font-semibold">
                Cloud Firestore
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                ユーザーやグループ、思い出に関するデータを
                クラウド上で管理するために使用。
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-8">
              <h3 className="text-xl font-semibold">
                Riverpod
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                アプリケーション内の状態管理に使用。
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-8">
              <h3 className="text-xl font-semibold">
                GoRouter
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                アプリ内の画面遷移やルーティングを管理。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development */}
      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-gray-500">
            Development
          </p>

          <h2 className="text-3xl font-semibold sm:text-4xl">
            From idea to product.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 p-8">
              <p className="text-sm text-gray-500">
                01
              </p>

              <h3 className="mt-4 text-xl font-semibold">
                Idea & Research
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                自分自身の旅行経験をもとに課題を考え、
                友人へのヒアリングを通して必要な機能を整理しました。
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-8">
              <p className="text-sm text-gray-500">
                02
              </p>

              <h3 className="mt-4 text-xl font-semibold">
                Figma Design
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                実装前にFigmaを使用してUIや画面構成を設計。
                アプリ全体のユーザー体験を整理してから開発に入りました。
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-8">
              <p className="text-sm text-gray-500">
                03
              </p>

              <h3 className="mt-4 text-xl font-semibold">
                Flutter & Firebase
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                FlutterとDartでアプリを開発し、
                Firebaseを利用して認証やデータ管理などの
                バックエンド機能を実装しました。
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
              Development Period
            </p>

            <p className="mt-4 text-2xl font-semibold">
              約2か月
            </p>

            <p className="mt-3 leading-7 text-gray-400">
              個人開発として、企画・設計・実装まで一人で行いました。
              Git / GitHubを利用してソースコードを管理しています。
            </p>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-gray-500">
            Challenges
          </p>

          <h2 className="mb-16 text-3xl font-semibold sm:text-4xl">
            Problems I had to solve.
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 p-8">
              <p className="text-sm text-gray-500">
                Challenge 01
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                友達同士での思い出共有
              </h3>

              <p className="mt-5 leading-7 text-gray-400">
                個人のデータだけではなく、特定のグループで
                思い出を共有できるようにする必要がありました。
                誰がどのグループに所属し、どの思い出を共有できるのかを
                考えながらデータ構造を設計しました。
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-8">
              <p className="text-sm text-gray-500">
                Challenge 02
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                都道府県の形への写真表示
              </h3>

              <p className="mt-5 leading-7 text-gray-400">
                写真を単純に一覧表示するのではなく、
                都道府県そのものの形に合わせて表示する部分に
                特に苦労しました。
                地図上の都道府県と写真データをどのように結びつけるかを
                試行錯誤しながら実装しました。
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-8">
              <p className="text-sm text-gray-500">
                Challenge 03
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                写真アップロード
              </h3>

              <p className="mt-5 leading-7 text-gray-400">
                スマートフォンで撮影した写真をアプリから扱い、
                その写真を思い出のデータと関連付ける部分でも
                実装に苦労しました。
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-8">
              <p className="text-sm text-gray-500">
                Challenge 04
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                都道府県の表示
              </h3>

              <p className="mt-5 leading-7 text-gray-400">
                日本地図上で都道府県を正しく表示し、
                ユーザーが訪れた場所を直感的に把握できるようにする部分も
                開発上の課題となりました。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Learned */}
      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-gray-500">
            What I Learned
          </p>

          <h2 className="mb-16 text-3xl font-semibold sm:text-4xl">
            What this project taught me.
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="text-xl font-semibold">
                技術への理解
              </h3>

              <p className="mt-5 leading-7 text-gray-400">
                FlutterやFirebaseを実際のアプリ開発で使用することで、
                個別の技術を学ぶだけでなく、それぞれを組み合わせて
                一つのプロダクトとして動かすための理解が深まりました。
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="text-xl font-semibold">
                プロダクト開発
              </h3>

              <p className="mt-5 leading-7 text-gray-400">
                自分が作りたい機能を実装するだけではなく、
                誰が使うのか、何を解決したいのかを考えてから
                機能を設計することの重要性を学びました。
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="text-xl font-semibold">
                ユーザーの声
              </h3>

              <p className="mt-5 leading-7 text-gray-400">
                自分一人で考えているとアイデアや機能に偏りが出ます。
                実際に多くの人へ話を聞くことで、自分では気づかなかった
                意見やニーズを知ることができました。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design */}
      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-gray-500">
            Design
          </p>

          <h2 className="text-3xl font-semibold sm:text-4xl">
            Designed with Figma
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-gray-400">
            実際のアプリ開発に入る前に、
            Figmaを用いてUIや画面構成を設計しました。
          </p>

          <div className="mt-12 rounded-2xl border border-dashed border-white/20 bg-white/[0.02] p-12 text-center">
            <p className="text-gray-500">
              Figma Screenshots
            </p>

            <p className="mt-3 text-sm text-gray-600">
              ここにFigmaで作成した画面画像を配置します
            </p>
          </div>
        </div>
      </section>

      {/* GitHub */}
      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center sm:p-16">
            <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
              Source Code
            </p>

            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
              Explore the project.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
              Omoide Mapのソースコードや開発内容をGitHubで確認できます。
            </p>

            <a
              href="https://github.com/kaiko1188"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-gray-200"
            >
              View GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-12">
        <div className="mx-auto flex max-w-6xl justify-between text-sm text-gray-500">
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