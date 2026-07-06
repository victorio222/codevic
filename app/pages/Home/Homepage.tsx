"use client";

import Image from "next/image";
import Profile from "@/app/assets/image/profile/profile.jpg";
import { useState } from "react";
interface NavLink {
  name: string;
  targetId: string;
}

export default function Homepage() {
  const navLinks: NavLink[] = [
    {
      name: "Contact",
      targetId: "contact",
    },
    {
      name: "Projects",
      targetId: "projects",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    setIsOpen(false);

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.pushState(null, "", `#${targetId}`);
    }
  };

  return (
    <section
      id="home"
      className="scroll-mt-30 px-10 py-0 mt-30 sm:px-10 lg:px-40 md:40 sm:py-0 lg:py-10 md:py-10 grid grid-cols-1 gap-15 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr]"
    >
      <div className="space-y-3">
        <h1 className="text-4xl font-semibold sm:text-4xl md:text-6xl">
          Hi, I'm Victorio!
        </h1>
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
              <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>
                View Projects
              </a>
            </ul>
            <ul className="px-6 py-3 text-xs border border-slate-800 rounded-lg bg-black hover:bg-blue-600 hover:cursor-pointer sm:text-xs md:text-sm">
              <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
                Contact Me
              </a>
            </ul>
            <ul className="px-6 py-3 text-xs border border-slate-800 rounded-lg bg-black hover:bg-blue-600 hover:cursor-pointer sm:text-xs md:text-sm">
              <a href="/resume.pdf" download="Victorio_Cabatingan_Resume.pdf">
                Download Resume
              </a>
            </ul>
          </li>
        </nav>
      </div>
      <div className="flex flex-col items-center">
        <div className="border border-blue-500/35 w-80 h-80 rounded-full overflow-hidden relative p-2">
          <Image
            src={Profile}
            alt="My Profile"
            className="w-full h-full object-cover object-center rounded-full border-3 border-blue-700"
            priority
          />
        </div>
        <div className="flex flex-col w-full bg-gray-500/10 border overflow-hidden border-gray-500/35 rounded-lg mt-5 gap-2">
          <div className="bg-black/40 w-full p-2 flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            <p className="text-xs pl-5">codevic-portfolio ~ $</p>
          </div>
          <div className="flex flex-col gap-0.5 px-3 pb-2.5 text-gray-400 text-[13px]">
            <span className="before:content-['$'] before:mr-2">
              Name: Victorio F. Cabatingan, Jr.
            </span>
            <span className="before:content-['$'] before:mr-2">
              Location: Lavezares, Northern Samar
            </span>
            <span className="before:content-['$'] before:mr-2">
              Email: cabatinganvictorio@gmail.com
            </span>
            <span className="before:content-['$'] before:mr-2">
              Contact: +63 963 013 9154
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
