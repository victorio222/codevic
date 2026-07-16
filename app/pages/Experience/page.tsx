"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";
import { faNetworkWired } from "@fortawesome/free-solid-svg-icons/faNetworkWired";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons/faMicrochip";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons/faChevronUp";
import { motion, Variants } from "framer-motion";
import { faCodeCommit } from "@fortawesome/free-solid-svg-icons";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  icon: any;
  highlights: string[];
  stack: string[];
  link?: string;
}

export default function Experience() {
  const activeExperiences: ExperienceItem[] = [
    {
      id: "exp-1",
      role: "Freelance Full-Stack Developer",
      company: "Self-Employed",
      period: "2024 – Present",
      type: "Freelance",
      icon: faCodeCommit,
      highlights: [
        "Designed and developed custom web applications for multiple clients, transforming project requirements into functional and user-friendly solutions.",
        "Built responsive and accessible user interfaces with a focus on usability, performance, and cross-device compatibility.",
        "Developed RESTful APIs and backend services to support application features, authentication, and data management.",
        "Created interactive dashboards, user portals, and administrative panels tailored to project-specific requirements.",
        "Implemented secure authentication, role-based access control, and database integrations to ensure reliable application performance.",
        "Managed the full development lifecycle, including planning, development, testing, deployment, and post-launch support."
      ],

      stack: [
        "React.js",
        "Tailwind CSS",
        "Express.js",
        "Node.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Next.js",
        "MySQL"
      ]
    },
    {
      id: "exp-2",
      role: "On-the-Job Trainee (Web Development)",
      company: "UEP-ICT",
      period: "Feb 2026 – May 2026",
      type: "Internship",
      icon: faCode,
      // highlights: [
      //   "Developed a centralized School Management System for UEP Laboratory Elementary School to digitize legacy administrative records.",
      //   "Created highly responsive, accessible user interfaces and engineered efficient system logic layers for university-wide digital tools.",
      //   "Optimized frontend components to ensure seamless cross-device compatibility and clean user workflows.",
      // ],
      highlights: [
        "Developed a centralized School Management System for UEP Laboratory Elementary School to digitize legacy administrative records.",
        "Contributed to the development of the University Extension Services Portal System, streamlining extension program management, documentation, and research-related workflows across the university.",
        "Created highly responsive, accessible user interfaces and engineered efficient system logic layers for university-wide digital tools.",
        "Built and integrated frontend and backend features, including authentication, data management, and role-based access controls.",
        "Optimized application performance and ensured seamless cross-device compatibility to enhance user experience."
      ],
      stack: [
        "React.js",
        "Tailwind CSS",
        "Express.js",
        "Node.js",
        "JavaScript",
      ],
    },
    {
      id: "exp-3",
      role: "Web Developer (Student Assistant)",
      company: "UEP-ICT",
      period: "Nov 2024 – Feb 2025",
      type: "Institutional",
      icon: faNetworkWired,
      highlights: [
        "Collaborated closely within a core development team to design, build, and deploy the UEP E-Services System, significantly improving digital accessibility for campus-wide resources.",
        "Engineered dynamic reporting modules for official processing documents, including Personal Data Sheet (PDS) and Individual Performance Commitment & Review (IPCR) forms.",
        "Integrated secure backend APIs to synchronize and map real-time faculty telemetry data.",
        "Enhanced and refined user interfaces across multiple system pages, improving usability, accessibility, and overall user experience.",
        "Developed responsive frontend components and layouts to ensure consistent performance across desktop and mobile devices.",
        "Implemented UI improvements based on user feedback, optimizing navigation flows and reducing friction in key user workflows."
      ],
      stack: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "REST APIs",
        "Node.js",
        "Git",
      ],
      link: "https://uephris.vercel.app/",
    },
  ];

  // const archiveExperiences: ExperienceItem[] = [
  //   {
  //     id: "exp-3",
  //     ...
  //     link: "https://some-other-project.com" // You can add links inside archive items too!
  //   }
  // ];

  const [showArchive, setShowArchive] = useState<boolean>(false);
  const displayedExperiences = showArchive
    ? [...activeExperiences]
    : activeExperiences;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="experience"
      className="scroll-mt-13 flex flex-col justify-center items-center py-20 px-6 sm:px-10 lg:px-40 w-full"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-left text-sm space-y-3 w-full"
      >
        <motion.div
          variants={containerVariants}
          className="flex flex-col items-start mb-16 border-l-2 border-blue-500/40 pl-4"
        >
          <span className="text-xs font-mono tracking-[0.25em] text-blue-500 uppercase mb-2">
            // Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white uppercase">
            <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
              Experience Log
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="flex flex-col w-full bg-gray-500/5 border border-gray-500/20 rounded-lg backdrop-blur-sm shadow-xl"
        >
          <div className="bg-black/40 w-full p-3 flex items-center justify-between border-b border-gray-500/10 shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              <p className="text-xs font-mono text-gray-400 pl-4">
                system_trace --timeline.log ~ $
              </p>
            </div>
            <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider hidden sm:block">
              {displayedExperiences.length} Nodes Loaded
            </div>
          </div>

          <div className="h-130 overflow-y-auto p-6 space-y-8 scrollbar-thin scrollbar-thumb-gray-500/20 scrollbar-track-transparent">
            {displayedExperiences.map((exp, index) => (
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.5 }}
                key={exp.id}
                className={`flex flex-col gap-4 relative ${index !== displayedExperiences.length - 1
                  ? "border-b border-gray-500/10 pb-8"
                  : ""
                  }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <FontAwesomeIcon
                        icon={exp.icon}
                        className="text-blue-400 text-xs shrink-0"
                      />
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                    </div>
                    <p className="text-blue-400 font-medium mt-0.5 text-[14px] flex items-center gap-1 flex-wrap">
                      <span>@</span>
                      {exp.link ? (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline decoration-blue-500/30 hover:decoration-blue-400 hover:text-blue-300 transition-all inline-flex items-center gap-1 group/link"
                        >
                          {exp.company}
                          <svg
                            className="w-3 h-3 text-blue-500/70 group-hover/link:text-blue-400 transition-colors"
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
                        <span>{exp.company}</span>
                      )}
                      <span className="text-xs px-2 py-0.5 ml-1.5 rounded bg-gray-500/10 text-gray-400 border border-gray-500/20 font-mono font-normal uppercase">
                        {exp.type}
                      </span>
                    </p>
                  </div>
                  <div className="text-left sm:text-right font-mono text-xs text-gray-500">
                    {exp.period}
                  </div>
                </div>

                <div className="space-y-2.5 pl-5">
                  {exp.highlights.map((bullet, idx) => (
                    <div
                      key={idx}
                      className="flex gap-3 text-gray-300 text-[14px] leading-relaxed"
                    >
                      <span className="font-mono text-blue-500/60 select-none mt-0.5 shrink-0">
                        &gt;
                      </span>
                      <p>{bullet}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pl-5 pt-1">
                  {exp.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2 py-0.5 bg-black/30 border border-gray-500/10 rounded font-mono text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="p-3 bg-black/20 border-t border-gray-500/10 flex items-center justify-center shrink-0">
            <button
              onClick={() => setShowArchive(!showArchive)}
              className="px-6 py-2 border border-dashed border-gray-500/30 hover:border-blue-500/50 bg-black/40 hover:bg-blue-500/5 rounded text-xs font-mono text-gray-400 hover:text-blue-400 transition-all cursor-pointer flex items-center gap-2"
            >
              <FontAwesomeIcon
                icon={showArchive ? faChevronUp : faChevronDown}
                className="text-[10px]"
              />
              <span>
                {showArchive
                  ? "sys --collapse-archive"
                  : "view --all-history (see more)"}
              </span>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
