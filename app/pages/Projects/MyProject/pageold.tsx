// "use client";

// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMicrochip } from "@fortawesome/free-solid-svg-icons/faMicrochip";
// import { faHeartPulse } from "@fortawesome/free-solid-svg-icons/faHeartPulse";
// import { faBoxArchive } from "@fortawesome/free-solid-svg-icons/faBoxArchive";
// import { faTerminal } from "@fortawesome/free-solid-svg-icons/faTerminal";
// import { faCube } from "@fortawesome/free-solid-svg-icons/faCube";

// interface ProjectModule {
//   id: string;
//   title: string;
//   category: string;
//   status: "ACTIVE" | "STABLE" | "DEPLOYED";
//   statusColor: string;
//   accentColor: string;
//   description: string;
//   highlights?: string[];
//   logDump?: string;
//   stack: string[];
//   icon: any;
//   demoUrl?: string;
//   gridClass: string;
// }

// const PROJECTS_REGISTRY: ProjectModule[] = [
//   {
//     id: "mod-01",
//     title: "UEP-Smart Farming: Automated Crop Management and Real-Time Monitoring for Hydroponics System",
//     category: "Full-Stack Health Informatics",
//     status: "ACTIVE",
//     statusColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
//     accentColor: "bg-emerald-500/5 group-hover:bg-emerald-500/10",
//     description:
//       "A centralized cloud registry platform designed to automate clinical nutritional assessments and aggregate comprehensive regional growth metrics. Built specifically to bypass manual recording constraints with instant diagnostic telemetry.",
//     highlights: [
//       "Automates global child growth standard analytics calculations.",
//       "Compiles regional nutritional telemetry matrices dynamically.",
//     ],
//     stack: ["Next.js", "React", "Node.js", "Tailwind CSS", "REST APIs"],
//     icon: faHeartPulse,
//     demoUrl: "https://uep-smartfarming.onrender.com/pages/auth/login.html",
//     gridClass: "md:col-span-1 md:row-span-2",
//   },
//   {
//     id: "mod-02",
//     title: "URDS System",
//     category: "IoT Wearable / Embedded Systems",
//     status: "STABLE",
//     statusColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
//     accentColor: "bg-blue-500/5 group-hover:bg-blue-500/10",
//     description:
//       "An advanced, smart telemetry dog collar syncing real-time geographic coordinate boundaries with continuous physiological health parameter scanning models.",
//     logDump:
//       "# device_logs: Real-time GPS coordinate logging and dynamic critical heart monitoring structures fully stable.",
//     stack: ["ESP32", "Arduino", "MQTT", "C++", "Hardware Architecture"],
//     icon: faMicrochip,
//     demoUrl: "https://urds-system-v2.vercel.app/urds/auth/login",
//     gridClass: "md:col-span-1 md:row-span-2",
//   },
//   {
//     id: "mod-03",
//     title: "UEPLES Student Archiving System",
//     category: "Data Integrity & Information Systems",
//     status: "DEPLOYED",
//     statusColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
//     accentColor: "bg-amber-500/5 group-hover:bg-amber-500/10",
//     description:
//       "A secure electronic portal optimizing historical data retention structures. Integrated rapid indexing arrays that scale retrieval processes cleanly across school systems.",
//     stack: ["React.js", "Express.js", "Node.js", "Tailwind CSS", "Vanilla JS"],
//     icon: faBoxArchive,
//     gridClass: "md:col-span-1 md:row-span-2",
//   },
// ];

// export default function ProjectsBentoConstant() {
//   return (
//     <section
//       id="projects"
//       className="flex flex-col justify-center items-center py-20 px-6 sm:px-10 lg:px-40 w-full"
//     >
//       <h1 className="text-sm mb-3 text-blue-500 font-bold tracking-widest font-mono">
//         [ PROJECTS ]
//       </h1>
//       <h2 className="text-white text-center text-4xl md:text-5xl font-black tracking-tight mb-12">
//         SYSTEM REGISTRY
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full auto-rows-[240px]">
//         {PROJECTS_REGISTRY.map((project) => (
//           <div
//             key={project.id}
//             className={`${project.gridClass} flex flex-col justify-between p-6 bg-gray-500/5 border border-gray-500/20 rounded-xl backdrop-blur-sm shadow-xl group relative overflow-hidden`}
//           >
//             <div
//               className={`absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl transition-all duration-500 pointer-events-none ${project.accentColor}`}
//             ></div>

//             <div>
//               <div className="flex items-center justify-between mb-4">
//                 <div className="flex items-center gap-2.5">
//                   <div className="w-8 h-8 rounded-lg bg-white/5 border border-gray-500/10 flex items-center justify-center text-gray-300 group-hover:border-blue-500/20 transition-colors">
//                     <FontAwesomeIcon
//                       icon={project.icon}
//                       className="text-sm text-gray-400 group-hover:text-blue-400 transition-colors"
//                     />
//                   </div>
//                   <span className="text-[10px] font-mono tracking-wider text-gray-400 uppercase">
//                     {project.category}
//                   </span>
//                 </div>
//                 <span
//                   className={`text-[10px] px-2 py-0.5 font-mono rounded border font-bold tracking-wider ${project.statusColor} ${project.status === "ACTIVE" ? "animate-pulse" : ""}`}
//                 >
//                   ● {project.status}
//                 </span>
//               </div>

//               <h3 className="text-xl font-extrabold text-white tracking-tight mb-2 group-hover:text-blue-400 transition-colors">
//                 {project.title}
//               </h3>
//               <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4 max-w-2xl">
//                 {project.description}
//               </p>

//               {project.highlights && (
//                 <ul className="hidden sm:flex flex-col gap-1.5 text-[12.5px] text-gray-300 font-mono mb-4">
//                   {project.highlights.map((highlight, idx) => (
//                     <li key={idx} className="flex items-center gap-2">
//                       <span className="text-blue-500">+</span> {highlight}
//                     </li>
//                   ))}
//                 </ul>
//               )}

//               {project.logDump && (
//                 <div className="mt-4 p-2.5 bg-black/20 rounded border border-gray-500/5 text-[11px] font-mono text-gray-400">
//                   <span className="text-blue-400"># status_field:</span>{" "}
//                   {project.logDump}
//                 </div>
//               )}
//             </div>

//             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-gray-500/10">
//               <div className="flex flex-wrap gap-1">
//                 {project.stack.map((tech) => (
//                   <span
//                     key={tech}
//                     className="text-[10px] px-2 py-0.5 bg-black/40 border border-gray-500/10 rounded font-mono text-gray-400"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               {project.demoUrl && (
//                 <a
//                   href={project.demoUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-400 hover:text-blue-300 text-xs font-mono inline-flex items-center gap-1 shrink-0 group/link self-end sm:self-auto"
//                 >
//                   <span>[View Live Site]</span>
//                   <svg
//                     className="w-3 h-3 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2.5"
//                       d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
//                     />
//                   </svg>
//                 </a>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }











"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons/faMicrochip";
import { faLeaf } from "@fortawesome/free-solid-svg-icons/faLeaf";
import { faBoxArchive } from "@fortawesome/free-solid-svg-icons/faBoxArchive";

interface ProjectModule {
  id: string;
  title: string;
  type: "Web Application" | "Mobile Application" | "IoT / Embedded" | "Portfolio";
  category: string;
  status: "ACTIVE" | "STABLE" | "DEPLOYED";
  statusColor: string;
  description: string;
  highlights?: string[];
  logDump?: string;
  stack: string[];
  icon: any;
  demoUrl?: string;
  gridClass: string;
}

const PROJECTS_REGISTRY: ProjectModule[] = [
  {
    id: "mod-01",
    title: "UEP-Smart Farming: Automated Crop Management and Real-Time Monitoring for Hydroponics System",
    type: "Web Application",
    category: "AgriTech & Automation Systems",
    status: "ACTIVE",
    statusColor: "text-emerald-400 border-emerald-500/30 bg-emerald-500/5",
    description:
      "A cloud-connected automated farming dashboard built to supervise nutrient film techniques, track water EC/pH tolerances, and execute real-time climate management routines dynamically.",
    highlights: [
      "Automates telemetry tracking loops for ambient heat and crop nutrition indices.",
      "Streams granular environmental adjustments straight to a centralized management interface.",
    ],
    stack: ["Next.js", "React", "Node.js", "Tailwind CSS", "REST APIs"],
    icon: faLeaf,
    demoUrl: "https://uep-smartfarming.onrender.com/pages/auth/login.html",
    gridClass: "md:col-span-2 md:row-span-2", // Large primary feature card
  },
  {
    id: "mod-02",
    title: "URDS System",
    type: "IoT / Embedded",
    category: "Remote Sensor Arrays & Networks",
    status: "STABLE",
    statusColor: "text-blue-400 border-blue-500/30 bg-blue-500/5",
    description:
      "An advanced wireless radio telemetry system architecture syncing real-time geographic spatial coordinates alongside continuous hardware device logging frames.",
    logDump: "sys_mon: [OK] Radio node response inside acceptable latency bounds (<45ms).",
    stack: ["ESP32", "Arduino", "MQTT", "C++", "Hardware Arch"],
    icon: faMicrochip,
    demoUrl: "https://urds-system-v2.vercel.app/urds/auth/login",
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: "mod-03",
    title: "UEPLES Student Archiving System",
    type: "Web Application",
    category: "Data Integrity & Institutional Storage",
    status: "DEPLOYED",
    statusColor: "text-amber-400 border-amber-500/30 bg-amber-500/5",
    description:
      "A secure storage framework purpose-built to preserve and process institutional files cleanly. Features optimized searching algorithms designed to streamline retrieval pipelines.",
    stack: ["React.js", "Express.js", "Node.js", "Tailwind CSS", "Vanilla JS"],
    icon: faBoxArchive,
    gridClass: "md:col-span-1 md:row-span-1",
  },
];

export default function ProjectsBento() {
  return (
    <section id="projects" className="bg-[#0B0F19] text-gray-100 py-24 px-6 sm:px-12 lg:px-32 w-full font-sans">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col items-start mb-16 border-l-2 border-blue-500/40 pl-4">
          <span className="text-xs font-mono tracking-[0.25em] text-blue-500 uppercase mb-2">
            // Registry Index
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white uppercase">
            System <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Deployments</span>
          </h2>
        </div>

        {/* Asymmetric Bento Structure layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[250px]">
          {PROJECTS_REGISTRY.map((project) => (
            <div
              key={project.id}
              className={`${project.gridClass} group relative flex flex-col justify-between p-6 bg-[#121824]/60 border border-gray-800/80 rounded-lg hover:border-gray-700/80 transition-all duration-300 backdrop-blur-md`}
            >
              {/* Subtle visual accent line rendered natively on hover */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/40 transition-all duration-500" />

              <div>
                {/* Header Metadata block */}
                <div className="flex items-start justify-between mb-4 gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 group-hover:text-blue-400 group-hover:border-blue-500/20 transition-all shrink-0">
                      <FontAwesomeIcon icon={project.icon} className="text-xs" />
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
                  <span className={`text-[9px] px-2 py-0.5 font-mono rounded border shrink-0 ${project.statusColor} flex items-center gap-1.5`}>
                    <span className={`w-1 h-1 rounded-full bg-current ${project.status === "ACTIVE" ? "animate-ping" : ""}`} />
                    {project.status}
                  </span>
                </div>

                {/* Information Layer */}
                <h3 className="text-base font-bold text-white tracking-tight mb-2 group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed max-w-xl line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  {project.description}
                </p>

                {/* Conditional Features rendering contextually per layout space */}
                {project.highlights && (
                  <ul className="mt-4 hidden sm:flex flex-col gap-1.5 text-[11px] text-gray-400 font-mono">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-500/70 select-none">→</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {project.logDump && (
                  <div className="mt-3 p-2 bg-black/40 rounded border border-gray-900 text-[10px] font-mono text-gray-400 overflow-hidden text-ellipsis whitespace-nowrap">
                    <span className="text-blue-500">sys_out$</span> {project.logDump}
                  </div>
                )}
              </div>

              {/* Badges footer layer */}
              <div className="flex items-center justify-between gap-3 pt-4 border-t border-gray-900 mt-4">
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
                    <span>[Launch]</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}