"use client";

import Image from "next/image";
import Logo from "../../assets/image/logo.png";

export default function Footer() {
  return (
    <footer className="relative w-full bg-black/40 backdrop-blur-md border-t border-blue-950/40 py-5 overflow-hidden mt-10">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-125 h-62.5 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center justify-center">
        <div>
          <Image src={Logo} alt="Logo image" width={220} height={220} />
        </div>

        <div className="w-12 h-px bg-blue-950 my-2"></div>

        <p className="text-[11px] mb-5 text-gray-500 font-bold tracking-widest uppercase">
          © 2026 CODEVIC. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
