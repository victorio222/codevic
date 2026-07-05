// "use client";

// import Link from "next/link";

// export default function Header() {
//   return (
//     <>
//       {/* Changed w-screen to w-full, and fixed py-7.5 to py-[30px] */}
//       <header className="bg-black py-[30px] px-10 lg:px-40 md:px-10 border-b border-blue-950 fixed top-0 left-0 w-full z-[100]">
//         <nav className="flex items-center justify-between text-blue-50">
//           <div>
//             <h1 className="text-blue-500 font-extrabold text-lg">Code<span className="text-white">Vic</span></h1>
//             <p className="text-xs text-gray-400">Ideate | Develop | Deploy</p>
//           </div>
          
//           <div className="flex items-center gap-5 text-[14px] text-gray-400">
//             <Link href="/#" className="nav-link active">Home</Link>
//             <Link href="/#" className="nav-link">About</Link>
//             <Link href="/#" className="nav-link">Skills</Link>
//             <Link href="/#" className="nav-link">Projects</Link>
//             <Link href="/#" className="nav-link">Experience</Link>
//             <Link href="/#" className="nav-link">Contact</Link>
//           </div>
          
//           {/* Swapped the <ul> and <li> elements to make them semantically correct */}
//           <div>
//             <ul className="flex items-center gap-3 text-[13px] text-gray-400">
//               <li className="hover:text-white cursor-pointer">Github</li>
//               <li className="hover:text-white cursor-pointer">LinkedIn</li>
//               <li className="hover:text-white cursor-pointer">Gmail</li>
//             </ul>
//           </div>
//         </nav>
//       </header>
//     </>
//   );
// }









"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-black py-[20px] lg:py-[30px] px-6 md:px-10 lg:px-40 border-b border-blue-950 fixed top-0 left-0 w-full z-[100] backdrop-blur-md bg-black/95">
        <nav className="flex items-center justify-between text-blue-50 max-w-7xl mx-auto">
          {/* LOGO SECTION */}
          <div>
            <h1 className="text-blue-500 font-extrabold text-lg">Code<span className="text-white">Vic</span></h1>
            <p className="text-[10px] md:text-xs text-gray-400">Ideate | Develop | Deploy</p>
          </div>
          
          {/* DESKTOP NAVIGATION LINKS (Hidden on mobile, flex on desktop) */}
          <div className="hidden md:flex items-center gap-5 text-[14px] text-gray-400">
            <Link href="/#" className="nav-link active hover:text-white transition-colors">Home</Link>
            <Link href="/#" className="nav-link hover:text-white transition-colors">About</Link>
            <Link href="/#" className="nav-link hover:text-white transition-colors">Skills</Link>
            <Link href="/#" className="nav-link hover:text-white transition-colors">Projects</Link>
            <Link href="/#" className="nav-link hover:text-white transition-colors">Experience</Link>
            <Link href="/#" className="nav-link hover:text-white transition-colors">Contact</Link>
          </div>
          
          {/* DESKTOP SOCIALS (Hidden on mobile) */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-3 text-[13px] text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">Github</li>
              <li className="hover:text-white cursor-pointer transition-colors">LinkedIn</li>
              <li className="hover:text-white cursor-pointer transition-colors">Gmail</li>
            </ul>
          </div>

          {/* MOBILE HAMBURGER BUTTON (Visible only on mobile) */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-gray-400 hover:text-white focus:outline-none p-1"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* MOBILE DROP-DOWN MENU */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
          <div className="flex flex-col gap-4 pb-4 text-[15px] text-gray-400 border-t border-blue-950/50 pt-4">
            <Link href="/#" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Home</Link>
            <Link href="/#" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">About</Link>
            <Link href="/#" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Skills</Link>
            <Link href="/#" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Projects</Link>
            <Link href="/#" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Experience</Link>
            <Link href="/#" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Contact</Link>
            
            <ul className="flex items-center gap-4 text-[13px] text-gray-500 border-t border-blue-950/30 pt-3 mt-1">
              <li className="hover:text-white cursor-pointer">Github</li>
              <li className="hover:text-white cursor-pointer">LinkedIn</li>
              <li className="hover:text-white cursor-pointer">Gmail</li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}