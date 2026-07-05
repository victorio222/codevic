"use client";

export default function Homepage() {
  return (
    <section className="px-10 py-0 mt-30 sm:px-10 lg:px-40 md:40 sm:py-0 lg:py-10 md:py-10">
      <div className="space-y-3">
        <h1 className="text-4xl font-semibold sm:text-4xl md:text-6xl">Victorio F. Cabatingan, Jr.</h1>
        <div className="mb-8">
          <li className="flex gap-3 text-[13px]">
            <ul className="px-5 py-1 border-2 border-blue-900 rounded-4xl text-blue-500">
              Full Stack Developer
            </ul>
            <ul className="px-5 py-1 border-2 border-blue-900 rounded-4xl text-blue-500">
              Web Developer
            </ul>
            <ul className="px-5 py-1 border-2 border-blue-900 rounded-4xl text-blue-500">
              UI Designer
            </ul>
          </li>
        </div>
        <h2 className="text-4xl mb-8 sm:text-5xl md:text-4xl lg:text6xl font-bold">
          Building clean web software to untangle everyday workflows.
        </h2>
        <p className="mb-8 text-gray-400">
          I am a full-stack developer who enjoys building software that fixes
          real, practical problems. Instead of letting records and data get
          messy, I design straightforward web applications, secure user portals,
          and live dashboards that keep everything organized and running
          smoothly.
        </p>
        <nav>
          <li className="flex gap-3 uppercase">
            <ul className="px-6 py-3 text-xs border border-blue-500 rounded-lg bg-blue-950 hover:bg-blue-600 hover:cursor-pointer sm:text-xs md:text-sm">
              <a href="">View Projects</a>
            </ul>
            <ul className="px-6 py-3 text-xs border border-slate-800 rounded-lg bg-black hover:bg-blue-600 hover:cursor-pointer sm:text-xs md:text-sm">
              <a href="">Contact Me</a>
            </ul>
            <ul className="px-6 py-3 text-xs border border-slate-800 rounded-lg bg-black hover:bg-blue-600 hover:cursor-pointer sm:text-xs md:text-sm">
              <a href="">Download Resume</a>
            </ul>
          </li>
        </nav>
      </div>
      <div></div>
    </section>
  );
}
