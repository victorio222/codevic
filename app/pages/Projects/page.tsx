"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import Link from "next/link";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { FaPlay, FaImages } from "react-icons/fa6";

interface ProjectModule {
  id: string;
  title: string;
  type: "Website" | "Web Application" | "Mobile Application" | "Iot / Embedded";
  category: string;
  status: "ACTIVE" | "STABLE" | "DEPLOYED";
  statusColor: string;
  description: string;
  stack: string[];
  imageUrl: string;
  demoUrl?: string;
  videoUrl?: string;
  screenshots?: string[];
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
    imageUrl: "/assets/image/system/smart-farming.png",
    demoUrl: "https://uep-smartfarming.onrender.com/pages/auth/login.html",
    // videoUrl: "/assets/video/ueples-demo.mp4",
    screenshots: [
      "/assets/image/system/uep-smartfarming/image1.png",
      "/assets/image/system/uep-smartfarming/image2.png",
      "/assets/image/system/uep-smartfarming/image3.png",
      "/assets/image/system/uep-smartfarming/image4.png",
      "/assets/image/system/uep-smartfarming/image5.png",
      "/assets/image/system/uep-smartfarming/image6.png",
      "/assets/image/system/uep-smartfarming/image7.png",
      "/assets/image/system/uep-smartfarming/image8.png",
      "/assets/image/system/uep-smartfarming/image9.png",
      "/assets/image/system/uep-smartfarming/image10.png",
      "/assets/image/system/uep-smartfarming/image11.png",
      "/assets/image/system/uep-smartfarming/image12.png",
      "/assets/image/system/uep-smartfarming/image13.png",
      "/assets/image/system/uep-smartfarming/image14.png",
      "/assets/image/system/uep-smartfarming/image15.png",
      "/assets/image/system/uep-smartfarming/image16.png",
      "/assets/image/system/uep-smartfarming/image17.png",
      "/assets/image/system/uep-smartfarming/image18.png",
      "/assets/image/system/uep-smartfarming/image19.png",
    ]
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
    imageUrl: "/assets/image/system/portfolio.png",
    demoUrl: "https://codevic.vercel.app",
    screenshots: [
      "/assets/image/system/portfolio/image1.png",
      "/assets/image/system/portfolio/image2.png",
      "/assets/image/system/portfolio/image3.png",
      "/assets/image/system/portfolio/image4.png",
      "/assets/image/system/portfolio/image5.png",
      "/assets/image/system/portfolio/image6.png",
    ]
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
    imageUrl: "/assets/image/system/project-guard.png",
    demoUrl: "https://project-guard-beta.vercel.app",
    screenshots: [
      "/assets/image/system/project-guard/image1.png",
      "/assets/image/system/project-guard/image2.png",
    ]
  },
  {
    id: "proj-05",
    title: "UEPLES Student Archiving System",
    type: "Web Application",
    category: "School Management System | OJT / Internship Project",
    status: "DEPLOYED",
    statusColor: "text-amber-400 border-amber-500/30 bg-amber-500/5",
    description:
      "Customized a web-based student archiving system using the open-source TailAdmin framework, enabling secure storage, organization, and centralized access to student records with efficient record retrieval and management.",
    stack: [
      "Express.js",
      "Node.js",
      "Tailwind CSS",
      "MySQL",
      "Responsive Design",
    ],
    imageUrl: "/assets/image/system/ueples.png",
    videoUrl: "/assets/video/ueples-demo.mp4",
    screenshots: [
      "/assets/image/system/ueples/image1.png",
      "/assets/image/system/ueples/image2.png",
      "/assets/image/system/ueples/image3.png",
      "/assets/image/system/ueples/image4.png",
      "/assets/image/system/ueples/image5.png",
      "/assets/image/system/ueples/image6.png",
      "/assets/image/system/ueples/image7.png",
      "/assets/image/system/ueples/image8.png",
      "/assets/image/system/ueples/image9.png",
    ]
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  const [activeGalleryImages, setActiveGalleryImages] = useState<string[] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const [expandedProjects, setExpandedProjects] = useState<string[]>([]);

  const toggleExpand = (id: string) => {
    setExpandedProjects((prev) =>
      prev.includes(id)
        ? prev.filter((p) => p !== id)
        : [...prev, id]
    );
  };

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

  useEffect(() => {
    if (activeVideoUrl || activeGalleryImages) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeVideoUrl, activeGalleryImages]);

  const openGallery = (screenshots: string[]) => {
    setActiveGalleryImages(screenshots);
    setCurrentImageIndex(0);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeGalleryImages) {
      setCurrentImageIndex((prev) => (prev + 1) % activeGalleryImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeGalleryImages) {
      setCurrentImageIndex((prev) => (prev - 1 + activeGalleryImages.length) % activeGalleryImages.length);
    }
  };
  return (
    <>
      <section
        id="projects"
        className="bg-[#0e0e0e] scroll-mt-13 flex flex-col justify-center items-center border-t border-b border-gray-500/10 py-20 px-6 sm:px-10 lg:px-40 w-full"
      >
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
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
                viewport={{ amount: 0.08 }}
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
                    <p
                      className={`text-gray-400 text-[13px] leading-relaxed ${expandedProjects.includes(project.id)
                        ? ""
                        : "line-clamp-3"
                        }`}
                    >
                      {project.description}
                    </p>

                    {project.description.length > 120 && (
                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="mt-1 text-xs text-blue-400 hover:text-blue-300"
                      >
                        {expandedProjects.includes(project.id)
                          ? "Show Less"
                          : "See More"}
                      </button>
                    )}
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

                <div className="flex flex-wrap gap-y-2 items-center border-t border-gray-800/80 mx-5 py-3 text-[11px] font-mono uppercase text-white/90">
                  <div className="pr-3">
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 flex gap-1.5 items-center transition-colors"
                      >
                        <span>Visit Project</span>
                        <svg
                          className="w-2.5 h-2.5"
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
                      <span className="italic text-gray-600 normal-case select-none">
                        No link
                      </span>
                    )}
                  </div>

                  {project.screenshots && project.screenshots.length > 0 && (
                    <div className="border-l border-gray-800 px-3">
                      <button
                        onClick={() => openGallery(project.screenshots!)}
                        className="hover:text-blue-400 flex gap-1.5 items-center cursor-pointer bg-transparent border-none outline-hidden transition-colors font-mono uppercase"
                      >
                        <span>Gallery</span>
                        <FaImages size={11} />
                      </button>
                    </div>
                  )}

                  {project.videoUrl && (
                    <div className="border-l border-gray-800 px-3">
                      <button
                        onClick={() => setActiveVideoUrl(project.videoUrl!)}
                        className="hover:text-blue-400 flex gap-1.5 items-center cursor-pointer bg-transparent border-none outline-hidden transition-colors font-mono uppercase"
                      >
                        <span>Watch Demo</span>
                        <FaPlay size={8} />
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div variants={containerVariants} className="mt-12 flex justify-center">
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
        </motion.div>
      </section>

      <AnimatePresence>
        {activeVideoUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideoUrl(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#121824] border border-gray-800 rounded-lg overflow-hidden shadow-2xl"
            >
              <div className="flex justify-end p-3 bg-gray-950/60 border-b border-gray-900">
                <button
                  onClick={() => setActiveVideoUrl(null)}
                  className="text-gray-400 hover:text-white transition-colors duration-200 p-1 rounded-sm hover:bg-gray-800 cursor-pointer"
                  aria-label="Close video"
                >
                  <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
                </button>
              </div>

              <div className="relative aspect-video bg-black">
                <video
                  src={activeVideoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeGalleryImages && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveGalleryImages(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-[#121824] border border-gray-800 rounded-xs overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="flex justify-between items-center px-4 py-3 bg-gray-950/60 border-b border-gray-900">
                <span className="text-xs font-mono text-gray-400">
                  Image {currentImageIndex + 1} of {activeGalleryImages.length}
                </span>
                <button
                  onClick={() => setActiveGalleryImages(null)}
                  className="text-gray-400 hover:text-white transition-colors duration-200 p-1 rounded-sm hover:bg-gray-800 cursor-pointer"
                  aria-label="Close gallery"
                >
                  <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
                </button>
              </div>

              <div className="relative grow aspect-video max-h-[70vh] bg-gray-950 flex items-center justify-center p-2 group">
                <img
                  src={activeGalleryImages[currentImageIndex]}
                  alt={`Screenshot visualization step ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain selection:bg-transparent"
                />

                {activeGalleryImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-gray-300 hover:text-white border border-gray-800/40 flex items-center justify-center cursor-pointer transition-all"
                    >
                      <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-gray-300 hover:text-white border border-gray-800/40 flex items-center justify-center cursor-pointer transition-all"
                    >
                      <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
