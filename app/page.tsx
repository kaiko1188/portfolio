import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="text-lg font-semibold">
            HIDE.
          </Link>

          <nav className="hidden gap-8 text-sm text-gray-400 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>

            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>

            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
          </nav>

          <a
            href="https://github.com/kaiko1188"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 px-4 py-2 text-sm transition hover:bg-white hover:text-black"
          >
            GitHub
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="flex min-h-screen items-center px-6 pt-16">
        <div className="mx-auto w-full max-w-6xl">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-gray-500">
            Developer Portfolio
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-7xl">
            Building ideas
            <br />
            into <span className="text-gray-500">products.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Web・Mobile・Web3を中心に、アイデアを実際のプロダクトとして
            形にする開発に取り組んでいます。
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-gray-200"
            >
              View Projects
            </a>

            <a
              href="https://github.com/kaiko1188"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 text-sm transition hover:bg-white hover:text-black"
            >
              GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="scroll-mt-20 border-t border-white/10 px-6 py-32"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-gray-500">
            About
          </p>

          <div className="grid gap-10 md:grid-cols-2">
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
              Ideas are meant
              <br />
              to be built.
            </h2>

            <div className="space-y-5 leading-8 text-gray-400">
              <p>
                情報システム工学を専攻し、Webアプリケーション、
                モバイルアプリ、Web3領域の開発に取り組んでいます。
              </p>

              <p>
                技術を学ぶだけでなく、誰のどんな課題を解決するのかを
                考えながらプロダクトを作ることを大切にしています。
              </p>

              <p>
                自分自身の経験や周囲の人へのヒアリングから課題を見つけ、
                アイデアを実際に動くプロダクトへ落とし込むことを目指しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="scroll-mt-20 border-t border-white/10 px-6 py-32"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-gray-500">
            Skills
          </p>

          <h2 className="mb-12 text-3xl font-semibold">
            Technologies
          </h2>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {[
              "Python",
              "Django",
              "TypeScript",
              "React",
              "Next.js",
              "Flutter",
              "Dart",
              "Firebase",
              "Solidity",
              "Docker",
              "Git / GitHub",
              "MySQL",
              "Tailwind CSS",
              "Web3.py",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-5 text-sm text-gray-300 transition hover:border-white/30"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="scroll-mt-20 border-t border-white/10 px-6 py-32"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-gray-500">
            Selected Work
          </p>

          <h2 className="mb-16 text-3xl font-semibold sm:text-4xl">
            Projects
          </h2>

          <div className="grid gap-6 md:grid-cols-3">

            {/* Omoide Map */}
            <div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Mobile App
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                Omoide Map
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                友達との旅行の思い出を、写真・日記・場所とともに
                記録して共有できるFlutterアプリ。
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Flutter",
                  "Firebase",
                  "Firestore",
                  "Google Maps",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                href="/projects/omoide_map"
                className="mt-auto pt-8 text-sm transition hover:text-gray-400"
              >
                View Project →
              </Link>
            </div>

            {/* DEX */}
            <div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Web3
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                DEX
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                SolidityとDjangoを組み合わせて開発した
                分散型取引アプリケーション。
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Solidity",
                  "Django",
                  "React",
                  "Web3.py",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                href="/projects/dex"
                className="mt-auto pt-8 text-sm transition hover:text-gray-400"
              >
                View Project →
              </Link>
            </div>

            {/* Django Todo */}
            <div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                Web Application
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                Django Todo
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                DjangoとMySQLを用いて開発した
                タスク管理Webアプリケーション。
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Python", "Django", "MySQL"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                href="/projects/django-todo"
                className="mt-auto pt-8 text-sm transition hover:text-gray-400"
              >
                View Project →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-white/10 px-6 py-32">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 sm:p-16">
            <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
              Contact
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">
              Let&apos;s build
              <br />
              something.
            </h2>

            <p className="mt-8 max-w-2xl leading-8 text-gray-400">
              アイデアを形にすることに興味があります。
              開発やプロダクトについて気軽に連絡してください。
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://github.com/kaiko1188"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-gray-200"
              >
                GitHub →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-12">
        <div className="mx-auto flex max-w-6xl items-center justify-between text-sm text-gray-500">
          <p>© 2026 HIDE.</p>

          <a
            href="https://github.com/kaiko1188"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            GitHub →
          </a>
        </div>
      </footer>
    </main>
  );
}