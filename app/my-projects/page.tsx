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
import { motion, Variants } from "framer-motion";
import Footer from "../layout/main/footer";
import Image from "next/image";
import Logo from "../assets/image/logo.png";

interface ProjectModule {
  id: string;
  title: string;
  type: "Website" | "Web Application" | "Mobile Application" | "Iot / Embedded";
  category: string;
  status: "ACTIVE" | "STABLE" | "DEPLOYED";
  statusColor: string;
  description: string;
  stack: string[];
  // icon: any;
  imageUrl: string;
  demoUrl?: string;
}

const PROJECTS_REGISTRY: ProjectModule[] = [
  {
    id: "proj-01",
    title:
      "UEP-Smart Farming: Automated Crop Management and Real-Time Monitoring for Hydroponics System",
    type: "Web Application",
    category: "Capstone Project | IoT / Arduino-based System",
    status: "ACTIVE",
    statusColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5",
    description:
      "Designed and developed an IoT-based hydroponics monitoring system with real-time sensor monitoring, automated pump control, and a web dashboard for efficient crop management.",
    stack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Vanilla.js",
      "Node.js",
      "MySQL",
      "Arduino",
      "ESP32 Microcontroller",
    ],
    // icon: faLeaf,
    imageUrl: "/assets/image/system/smart-farming.png",
    demoUrl: "https://uep-smartfarming.onrender.com/pages/auth/login.html",
  },
  {
    id: "proj-02",
    title: "Personal Portfolio Website",
    type: "Website",
    category: "Portfolio",
    status: "DEPLOYED",
    statusColor: "text-amber-400 border-amber-500/30 bg-amber-500/5",
    description:
      "A web platform built to store and show my project history and work experience clearly. Features a simple interface designed to showcase my coding skills and project milestones easily.",
    stack: ["Node.js", "Tailwind CSS", "Responsive Design"],
    // icon: faBoxArchive,
    imageUrl: "/assets/image/system/portfolio.png",
    demoUrl: "https://codevic.vercel.app",
  },
  {
    id: "proj-03",
    title: "URDS System",
    type: "Web Application",
    category: "School Project-based",
    status: "STABLE",
    statusColor: "text-blue-400 border-blue-500/30 bg-blue-500/5",
    description:
      "A web-based research management system that streamlines research submissions, manages documents, and tracks manuscript approvals through a centralized platform.",
    stack: ["Next.js", "React", "Node.js", "MySQL"],
    // icon: faMicrochip,
    imageUrl: "/assets/image/system/urds.png",
    demoUrl: "https://urds-system-v2.vercel.app/urds/auth/login",
  },
  {
    id: "proj-04",
    title: "Project GUARD",
    type: "Website",
    category:
      "Animal Monitoring & Tracking | IoT / Arduino-based System | Commission-based",
    status: "STABLE",
    statusColor: "text-blue-400 border-blue-500/30 bg-blue-500/5",
    description:
      "A simple web platform built to track and monitor dog locations and health data clearly. Features an automated interface integrated with an ESP32 microcontroller to display real-time animal updates easily.",
    stack: [
      "Next.js",
      "React",
      "Node.js",
      "MySQL",
      "Arduino",
      "ESP32 Microcontroller",
    ],
    // icon: faMicrochip,
    imageUrl: "/assets/image/system/project-guard.png",
    demoUrl: "https://project-guard-beta.vercel.app",
  },
  {
    id: "proj-05",
    title: "UEPLES Student Archiving System",
    type: "Web Application",
    category: "School Management System | OJT / Internship Project",
    status: "DEPLOYED",
    statusColor: "text-amber-400 border-amber-500/30 bg-amber-500/5",
    description:
      "Created a web-based  student archiving system that securely stores, organizes, and manages student records, providing fast access to academic information through a centralized platform.",
    stack: [
      "Express.js",
      "Node.js",
      "Tailwind CSS",
      "MySQL",
      "Responsive Design",
    ],
    // icon: faBoxArchive,
    imageUrl: "/assets/image/system/ueples.png",
  },
  {
    id: "proj-06",
    title: "UEP eServices Portal",
    type: "Web Application",
    category: "University Web Portal | UEP-ICT Team Project",
    status: "DEPLOYED",
    statusColor: "text-amber-400 border-amber-500/30 bg-amber-500/5",
    description:
      "Served as a Student Assistant with the UEP-ICT Team, collaborating with the main developer to build the UEP eServices Portal, a centralized platform for accessing university services and digital transactions through a secure and user-friendly interface.",
    stack: [
      "React.js",
      "Express.js",
      "Node.js",
      "Tailwind CSS",
      "MySQL",
      "Responsive Design",
    ],
    // icon: faBoxArchive,
    imageUrl: "/assets/image/system/uephris.png",
    demoUrl: "https://uephris.vercel.app",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 15,
    },
  },
};

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
          <div className="flex">
            <div>
              <Image src={Logo} alt="Logo image" width={80} height={80} />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="group relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded border border-gray-800 bg-[#121824]/40 font-mono text-xs font-medium text-gray-400 transition-all duration-300 hover:border-blue-500/30 hover:text-blue-400"
            >
              <span className="text-blue-500 group-hover:-translate-x-0.5 transition-transform duration-200">
                &lt;
              </span>
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

      <main className="grow pt-30">
        <section
          id="projects"
          className="flex flex-col justify-center items-center py-6 px-6 sm:px-10 lg:px-40 w-full"
        >
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-l-2 border-blue-500/40 pl-4 gap-4">
              <motion.div variants={containerVariants}>
                <span className="text-xs font-mono tracking-[0.25em] text-blue-500 uppercase mb-2">
                  // Projects
                </span>
                <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white uppercase">
                  <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
                    Featured Works
                  </span>
                </h2>
              </motion.div>

              <Link
                href="/"
                className="group items-center gap-2 font-mono text-xs text-gray-500 hover:text-blue-400 transition-colors self-start sm:self-center hidden md:block"
              >
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="text-[10px] transition-transform group-hover:-translate-x-1"
                />
                <span>Return to the Homepage</span>
              </Link>
            </div>

            <div className="w-full border border-blue-950/40 my-5"></div>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {PROJECTS_REGISTRY.map((project) => (
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ amount: 0.3 }}
                  key={project.id}
                  className="group relative flex flex-col bg-[#121824]/40 border border-gray-800/30 hover:border-gray-700/80 transition-all duration-300 backdrop-blur-md overflow-hidden"
                >
                  <div className="relative w-full h-68 bg-gray-950 overflow-hidden border-b border-gray-900">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/70 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.demoUrl ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono rounded hover:bg-blue-500/20 hover:text-white transition-all transform translate-y-2 group-hover:translate-y-0 duration-300 flex items-center gap-2"
                        >
                          <span>VIEW PROJECT</span>
                          <svg
                            className="w-3 h-3"
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
                      ) : (
                        <span className="px-4 py-2 border border-gray-700 bg-gray-800/50 text-gray-400 text-xs font-mono rounded select-none">
                          INTERNAL SYSTEM
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-1 justify-between min-h-24 relative">
                    <div>
                      <div className="flex items-center gap-2.5 mb-3.5">
                        {/* <div className="w-6 h-6 rounded bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 group-hover:text-blue-400 transition-colors shrink-0">
                                  <FontAwesomeIcon
                                    icon={project.icon}
                                    className="text-[10px]"
                                  />
                                </div> */}

                        <div className="absolute top-3 right-3 z-10">
                          <span
                            className={`text-[9px] px-2 py-0.5 font-mono rounded border backdrop-blur-md ${project.statusColor} flex items-center gap-1.5`}
                          >
                            <span
                              className={`w-1 h-1 rounded-full bg-current ${project.status === "ACTIVE" ? "animate-ping" : ""}`}
                            />
                            {project.status}
                          </span>
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-xs font-bold tracking-wider text-gray-400 uppercase truncate">
                            {project.type}
                          </span>
                          <span className="text-[10px] font-mono text-gray-500 uppercase truncate">
                            {project.category}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-md font-bold text-white tracking-tight mb-2 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-[13px] leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1 pt-4 border-t border-gray-900/60 mt-4">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2 py-0.5 bg-gray-900/60 text-gray-400 rounded border border-gray-800/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="border-t border-gray-700 mx-6 -mt-2">
                    <div className="py-1.5 mt-2 pb-6 text-white text-[12px] uppercase transition-all flex items-center">
                      {project.demoUrl ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:border-b border-white flex gap-2 items-center"
                        >
                          <span>Visit Project</span>
                          <svg
                            className="w-3 h-3"
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
                      ) : (
                        <span className="italic text-gray-400 normal-case">
                          No link is provided.
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
