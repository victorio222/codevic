"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons/faMicrochip";
import { faLeaf } from "@fortawesome/free-solid-svg-icons/faLeaf";
import { faBoxArchive } from "@fortawesome/free-solid-svg-icons/faBoxArchive";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

interface ProjectModule {
  id: string;
  title: string;
  type: "Web Application" | "Mobile Application" | "IoT / Embedded" | "Portfolio";
  category: string;
  status: "ACTIVE" | "STABLE" | "DEPLOYED" | "UNDER DEVELOPMENT";
  statusColor: string;
  description: string;
  highlights?: string[];
  logDump?: string;
  stack: string[];
  icon: any;
  demoUrl?: string;
}

const PROJECTS_REGISTRY: ProjectModule[] = [
  {
    id: "mod-01",
    title: "UEP-Smart Farming: Automated Crop Management and Real-Time Monitoring for Hydroponics System",
    type: "Web Application",
    category: "AgriTech & Automation Systems",
    status: "ACTIVE",
    statusColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5",
    description: "A cloud-connected automated farming dashboard built to supervise nutrient film techniques, track water EC/pH tolerances, and execute real-time climate management routines dynamically.",
    stack: ["Next.js", "React", "Node.js", "Tailwind CSS", "REST APIs"],
    icon: faLeaf,
    demoUrl: "https://uep-smartfarming.onrender.com/pages/auth/login.html",
  },
  {
    id: "mod-02",
    title: "URDS System",
    type: "Web Application",
    category: "Research Management System",
    status: "STABLE",
    statusColor: "text-blue-400 border-blue-500/30 bg-blue-500/5",
    description: "A centralized management platform engineered to streamline institutional research flow submissions, automate documentation workflows, and track submitted manuscripts through approval lifecycle pipelines.",
    stack: ["Next.js", "React", "Node.js", "Tailwind CSS", "PostgreSQL"],
    icon: faMicrochip,
    demoUrl: "https://urds-system-v2.vercel.app/urds/auth/login",
  },
  {
    id: "mod-03",
    title: "UEPLES Student Archiving System",
    type: "Web Application",
    category: "School Management System",
    status: "UNDER DEVELOPMENT",
    statusColor: "text-amber-400 border-amber-500/30 bg-amber-500/5",
    description: "A secure storage framework purpose-built to preserve and process institutional files cleanly. Features optimized searching algorithms designed to streamline retrieval pipelines.",
    stack: ["React.js", "Express.js", "Node.js", "Tailwind CSS", "Vanilla JS"],
    icon: faBoxArchive,
  },
];

export default function ProjectsRegistryPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScrollState = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScrollState);
    return () => window.removeEventListener("scroll", handleScrollState);
  }, []);

  return (
    <div className="bg-[#0e0e0e] min-h-screen text-gray-100 flex flex-col justify-between selection:bg-blue-500/30 selection:text-blue-200">
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "py-4 border-b border-blue-950/40 bg-black"
            : "py-4 border-b border-blue-950/40 bg-black/45 backdrop-blur-md shadow-lg shadow-black/20"
        } px-6 md:px-10 lg:px-40`}
      >
        <nav className="flex items-center justify-between text-blue-50 max-w-7xl mx-auto">
          <Link href="/" className="group">
            <h1 className="text-blue-500 font-extrabold text-lg transition-transform duration-200 group-hover:scale-[1.02]">
              Code<span className="text-white">Vic</span>
            </h1>
            <p className="text-[10px] md:text-xs text-gray-400">
              Ideate | Develop | Deploy
            </p>
          </Link>

          <div className="flex items-center gap-6">
            <Link 
              href="/"
              className="group relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded border border-gray-800 bg-[#121824]/40 font-mono text-xs font-medium text-gray-400 transition-all duration-300 hover:border-blue-500/30 hover:text-blue-400"
            >
              <span className="text-blue-500 group-hover:-translate-x-0.5 transition-transform duration-200">&lt;</span>
              <span>RETURN HOME</span>
            </Link>

            <div className="hidden sm:flex items-center gap-3 text-lg text-gray-400 border-l border-gray-800 pl-4">
              <Link
                href="https://github.com/victorio222"
                target="_blank"
                className="hover:text-blue-500 cursor-pointer transition-colors"
              >
                <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/victorio-cabatingan-jr-94199737b"
                target="_blank"
                className="hover:text-blue-500 cursor-pointer transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
              </Link>
              <Link
                href="mailto:cabatinganvictorio@gmail.com"
                target="_blank"
                className="hover:text-blue-500 cursor-pointer transition-colors"
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="grow pt-32 pb-12">
        <section
          id="projects"
          className="flex flex-col justify-center items-center py-6 px-6 sm:px-10 lg:px-40 w-full"
        >
          <div className="max-w-6xl mx-auto w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-16 border-l-2 border-blue-500/40 pl-4 gap-4">
              <div>
                <span className="text-xs font-mono tracking-[0.25em] text-blue-500 uppercase mb-2 block">
                  // System Projects
                </span>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white uppercase">
                  All System{" "}
                  <span className="font-bold text-transparent bg-clip-text bg-lineara-to-r from-white to-gray-400">
                    Deployments
                  </span>
                </h2>
              </div>
              
              <Link 
                href="/" 
                className="group inline-flex items-center gap-2 font-mono text-xs text-gray-500 hover:text-blue-400 transition-colors self-start sm:self-center"
              >
                <FontAwesomeIcon icon={faArrowLeft} className="text-[10px] transition-transform group-hover:-translate-x-1" />
                <span>Return to the Homepage</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {PROJECTS_REGISTRY.map((project) => (
                <div
                  key={project.id}
                  className="group relative flex flex-col justify-between p-6 bg-[#121824]/60 border border-gray-800/80 rounded-lg hover:border-gray-700/80 transition-all duration-300 backdrop-blur-md min-h-85"
                >
                  <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/40 transition-all duration-500" />

                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-5 gap-2">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 group-hover:text-blue-400 group-hover:border-blue-500/20 transition-all shrink-0">
                            <FontAwesomeIcon
                              icon={project.icon}
                              className="text-xs"
                            />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-mono tracking-wider text-gray-400 uppercase leading-tight">
                              {project.type}
                            </span>
                            <span className="text-[9px] font-mono text-gray-500 uppercase tracking-tight mt-0.5">
                              {project.category}
                            </span>
                          </div>
                        </div>
                        <span
                          className={`text-[9px] px-2 py-0.5 font-mono rounded border shrink-0 ${project.statusColor} flex items-center gap-1.5`}
                        >
                          <span
                            className={`w-1 h-1 rounded-full bg-current ${project.status === "ACTIVE" ? "animate-ping" : ""}`}
                          />
                          {project.status}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-white tracking-tight mb-2 group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-xs leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-3 pt-4 border-t border-gray-900/60 mt-6">
                      <div className="flex flex-wrap gap-1">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="text-[9px] font-mono px-2 py-0.5 bg-gray-900/80 text-gray-400 rounded border border-gray-800/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white text-[11px] font-mono flex items-center gap-1 transition-colors shrink-0"
                        >
                          <span>[View Live Site]</span>
                          <svg
                            className="w-3 h-3 text-blue-500/70"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2.5"
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="relative w-full bg-black/40 backdrop-blur-md border-t border-blue-950/40 py-16 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-125 h-62.5 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center justify-center space-y-4">
          <h1 className="text-4xl font-black tracking-tight text-white select-none">
            Code
            <span className="bg-linear-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Vic
            </span>
          </h1>

          <p className="text-xs text-gray-400 font-medium tracking-wide">
            Ideate • Develop • Deploy
          </p>

          <div className="w-12 h-px bg-blue-950 my-1" />

          <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">
            © 2026 CODEVIC. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}