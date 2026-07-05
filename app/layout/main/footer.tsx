"use client";

export default function Footer() {
  return (
    <footer className="relative w-full bg-black/40 backdrop-blur-md border-t border-blue-950/40 py-24 overflow-hidden mt-20">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-125 h-62.5 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center justify-center space-y-4">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white select-none">
          Code<span className="bg-linear-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Vic</span>
        </h1>
        
        <p className="text-sm text-gray-400 font-medium tracking-wide">
          Ideate • Develop • Deploy
        </p>

        <div className="w-12 h-px bg-blue-950 my-2"></div>

        <p className="text-[11px] text-gray-500 font-bold tracking-widest uppercase">
          © 2026 CODEVIC. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}