"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons/faMicrochip";
import { faLeaf } from "@fortawesome/free-solid-svg-icons/faLeaf";
import { faBoxArchive } from "@fortawesome/free-solid-svg-icons/faBoxArchive";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

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
  hidden: { opacity: 0, y: 5 },
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

export default function ProjectsBento() {
  return (
    <section
      id="projects"
      className="bg-[#0e0e0e] scroll-mt-13 flex flex-col justify-center items-center border-t border-b border-gray-500/10 py-20 px-6 sm:px-10 lg:px-40 w-full"
    >
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full"
      >
        <motion.div
          variants={containerVariants}
          className="flex flex-col items-start mb-16 border-l-2 border-blue-500/40 pl-4"
        >
          <span className="text-xs font-mono tracking-[0.25em] text-blue-500 uppercase mb-2">
            // Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white uppercase">
            <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
              Featured Works
            </span>
          </h2>
        </motion.div>

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
                    <span className="italic text-gray-400 normal-case">No link is provided.</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="mt-12 flex justify-center">
        <Link
          href="/my-projects"
          className="group relative inline-flex items-center justify-center px-6 py-2.5 rounded border border-gray-800 bg-[#121824]/40 font-mono text-xs font-medium text-gray-400 transition-all duration-300 hover:border-blue-500/30 hover:text-blue-400 backdrop-blur-sm"
        >
          <span className="flex items-center gap-2">
            <span className="text-blue-500 group-hover:translate-x-0.5 transition-transform duration-200">
              &gt;_
            </span>
            <span>VIEW ALL PROJECTS</span>
          </span>
        </Link>
      </div>
    </section>
  );
}
