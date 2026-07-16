"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import Link from "next/link";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { FaAward, FaExternalLinkAlt, FaEye, FaImages } from "react-icons/fa";

interface CertificateModule {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  category: "Professional Certification" | "Specialization" | "Course Completion" | "Academic Award" | "Academic Award / Competition";
  status: "ACTIVE" | "LIFETIME" | "EXPIRED";
  statusColor: string;
  description: string;
  skills: string[];
  imageUrl: string;
  gallery?: string[];
  verificationUrl?: string;
}

const CERTIFICATES_REGISTRY: CertificateModule[] = [
  {
    id: "cert-01",
    title: "Best in Computer Programmer",
    issuer: "UEP-CS",
    issueDate: "June 12, 2026",
    category: "Academic Award",
    status: "LIFETIME",
    statusColor: "text-blue-400 border-blue-500/30 bg-blue-500/5",
    description:
      "Awarded outstanding honors as the top computer programmer in the batch. Recognized for demonstrating exceptional skill in software development, algorithmic problem-solving, and clean code implementation across academic and practical projects.",
    skills: ["Software Development", "Data Structures", "Algorithmic Problem Solving", "Full-Stack Programming"],
    imageUrl: "/assets/image/certificates/best-in-computerprogrammer.jpg",
  },
  // {
  //   id: "cert-02",
  //   title: "Meta Front-End Developer Professional Certificate",
  //   issuer: "Meta via Coursera",
  //   issueDate: "July 2024",
  //   category: "Specialization",
  //   status: "LIFETIME",
  //   statusColor: "text-blue-400 border-blue-500/30 bg-blue-500/5",
  //   description:
  //     "A comprehensive, 9-course program covering client-side development, user interfaces, responsive design, and testing. Created production-ready React layouts and worked with API integrations.",
  //   skills: ["React.js", "JavaScript", "HTML5/CSS3", "UX/UI Design", "Git"],
  //   imageUrl: "/assets/image/certificates/student-assistant.jpg",
  //   verificationUrl: "https://www.coursera.org/verify/professional-cert/xyz123",
  // },
  // {
  //     id: "cert-02",
  //     title: "Student Assistant in Web Development",
  //     issuer: "UEP-ICT Department",
  //     issueDate: "June 12, 2026",
  //     category: "Specialization",
  //     status: "LIFETIME",
  //     statusColor: "text-blue-400 border-blue-500/30 bg-blue-500/5",
  //     description:
  //       "Served as a student assistant for the university's ICT department, assisting in the development, optimization, and maintenance of internal web portals and digital school resources while providing technical web support as needed.",
  //     skills: ["Web Development", "UI/UX Design", "System Maintenance", "Technical Support", "Git"],
  //     imageUrl: "/assets/image/certificates/student-assistant.jpg",
  //   },
  {
    id: "cert-03",
    title: "School Management System Resource Person",
    issuer: "UEPLES",
    issueDate: "March 26, 2026",
    category: "Academic Award",
    status: "LIFETIME",
    statusColor: "text-blue-400 border-blue-500/30 bg-blue-500/5",
    description:
      "Served as a key technical speaker and resource person, conducting hands-on training sessions and system walk-throughs for faculty and staff to ensure smooth adoption and operational transition of the student archiving management system.", skills: ["Academic Excellence", "Leadership", "Technical Writing"],
    imageUrl: "/assets/image/certificates/ueples.jpg",
  },
  {
    id: "cert-04",
    title: "rSCENE Hackathon Competition: 7th placer",
    issuer: "UEP-CS",
    issueDate: "June 12, 2026",
    category: "Academic Award",
    status: "LIFETIME",
    statusColor: "text-blue-400 border-blue-500/30 bg-blue-500/5",
    description:
      "Awarded for securing 7th place in the regional-level competion for rSCENE Hackathon Category.",
    skills: ["Academic Excellence", "Leadership", "Technical Writing"],
    imageUrl: "/assets/image/certificates/rscene.jpg",
  },
  {
    id: "cert-05",
    title: "Hack4Gov 2025 - 5th placer",
    issuer: "UEP-CS",
    issueDate: "June 12, 2026 / December 01, 2025",
    category: "Academic Award / Competition",
    status: "LIFETIME",
    statusColor: "text-blue-400 border-blue-500/30 bg-blue-500/5",
    description:
      "Awarded for securing 5th place in the regional-level cybersecurity Capture-the-Flag competition.",
    skills: ["Academic Excellence", "Leadership", "Technical Writing"],
    imageUrl: "/assets/image/certificates/hack4gov-2.jpg",
    gallery: [
      "/assets/image/certificates/hack4gov-2.jpg",
      "/assets/image/certificates/hack4gov.jpg",
    ],
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

export default function CertificatesBento() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCert, setActiveCert] = useState<CertificateModule | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedCertificates, setExpandedCertificates] = useState<string[]>([]);

  const toggleExpand = (id: string) => {
    setExpandedCertificates((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const openLightbox = (cert: CertificateModule, initialIndex = 0) => {
    setActiveCert(cert);
    setCurrentImageIndex(initialIndex);
  };

  const closeLightbox = () => {
    setActiveCert(null);
    setCurrentImageIndex(0);
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!activeCert || !activeCert.gallery) return;
    setCurrentImageIndex((prev) => (prev + 1) % activeCert.gallery!.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!activeCert || !activeCert.gallery) return;
    setCurrentImageIndex((prev) => (prev - 1 + activeCert.gallery!.length) % activeCert.gallery!.length);
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
    if (activeCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeCert]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeCert) return;
      if (e.key === "Escape") closeLightbox();
      if (activeCert.gallery && activeCert.gallery.length > 1) {
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeCert, currentImageIndex]);

  return (
    <>
      <section
        id="certificates"
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
                // Credentials
              </span>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white uppercase">
                <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
                  Certifications
                </span>
              </h2>
            </motion.div>

            {/* <Link
              href="/"
              className="group items-center gap-2 font-mono text-xs text-gray-500 hover:text-blue-400 transition-colors self-start sm:self-center hidden md:block"
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="text-[10px] transition-transform group-hover:-translate-x-1"
              />
              <span>Return to the Homepage</span>
            </Link> */}
          </div>

          <div className="w-full border border-blue-950/40 my-5"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-800/10">
            {CERTIFICATES_REGISTRY.map((cert) => (
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.08 }}
                key={cert.id}
                className="group relative flex flex-col bg-[#121824]/40 border border-gray-800/30 hover:border-gray-700/80 transition-all duration-300 backdrop-blur-md overflow-hidden"
              >
                <div className="relative w-full h-56 bg-gray-950 overflow-hidden border-b border-gray-900">
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                  />

                  {cert.gallery && cert.gallery.length > 1 && (
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md border border-gray-800 text-gray-300 px-2 py-1 rounded text-[10px] font-mono flex items-center gap-1.5 z-10">
                      <FaImages className="text-blue-400" size={11} />
                      <span>{cert.gallery.length} PHOTOS</span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-black/75 backdrop-blur-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-3 z-20">
                    <button
                      onClick={() => openLightbox(cert, 0)}
                      className="px-4 py-2 border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono rounded hover:bg-blue-500/20 hover:text-white transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <span>VIEW FULL</span>
                      <FaEye size={12} />
                    </button>
                    {cert.verificationUrl && (
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-gray-700 bg-gray-800/50 text-gray-300 text-xs font-mono rounded hover:bg-gray-700 hover:text-white transition-all flex items-center gap-2"
                      >
                        <span>VERIFY</span>
                        <FaExternalLinkAlt size={10} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1 justify-between min-h-24 relative">
                  <div>
                    <div className="flex items-center gap-2.5 mb-3.5">
                      <div className="absolute top-3 right-3 z-10">
                        <span
                          className={`text-[9px] px-2 py-0.5 font-mono rounded border backdrop-blur-md ${cert.statusColor} flex items-center gap-1.5`}
                        >
                          <span
                            className={`w-1 h-1 rounded-full bg-current ${cert.status === "ACTIVE" ? "animate-ping" : ""}`}
                          />
                          {cert.status}
                        </span>
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-xs font-bold tracking-wider text-gray-400 uppercase truncate">
                          {cert.issuer}
                        </span>
                        <span className="text-[10px] font-mono text-gray-500 uppercase truncate">
                          {cert.category}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-md font-bold text-white tracking-tight mb-1.5 group-hover:text-blue-500 transition-colors duration-200 line-clamp-2">
                      {cert.title}
                    </h3>

                    <div className="text-[11px] font-mono text-gray-500 mb-2.5 flex flex-wrap gap-x-3 gap-y-1">
                      <span>Issued: {cert.issueDate}</span>
                      {cert.expiryDate && <span>• Expires: {cert.expiryDate}</span>}
                      {cert.credentialId && (
                        <span className="text-blue-500/80">ID: {cert.credentialId}</span>
                      )}
                    </div>

                    <p
                      className={`text-gray-400 text-[13px] leading-relaxed ${expandedCertificates.includes(cert.id) ? "" : "line-clamp-3"
                        }`}
                    >
                      {cert.description}
                    </p>

                    {cert.description.length > 120 && (
                      <button
                        onClick={() => toggleExpand(cert.id)}
                        className="mt-1 text-xs text-blue-400 hover:text-blue-300"
                      >
                        {expandedCertificates.includes(cert.id) ? "Show Less" : "See More"}
                      </button>
                    )}
                  </div>

                  {/* <div className="flex flex-wrap gap-1 pt-4 border-t border-gray-900/60 mt-4">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono px-2 py-0.5 bg-gray-900/60 text-gray-400 rounded border border-gray-800/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div> */}
                </div>

                <div className="flex flex-wrap gap-y-2 items-center border-t border-gray-800/80 mx-5 py-3 text-[11px] font-mono uppercase text-white/90">
                  <div className="pr-3">
                    <button
                      onClick={() => openLightbox(cert, 0)}
                      className="hover:text-blue-400 flex gap-1.5 items-center transition-colors cursor-pointer bg-transparent border-none"
                    >
                      <FaAward size={12} />
                      <span>View Credential</span>
                    </button>
                  </div>

                  {cert.verificationUrl && (
                    <div className="border-l border-gray-800 px-3">
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 flex gap-1.5 items-center transition-colors"
                      >
                        <span>Verify Online</span>
                        <FaExternalLinkAlt size={9} />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* <motion.div variants={containerVariants} className="mt-12 flex justify-center">
          <Link
            href="/credentials"
            className="group relative inline-flex items-center justify-center px-6 py-2.5 rounded border border-gray-800 bg-[#121824]/40 font-mono text-xs font-medium text-gray-400 transition-all duration-300 hover:border-blue-500/30 hover:text-blue-400 backdrop-blur-sm"
          >
            <span className="flex items-center gap-2">
              <span className="text-blue-500 group-hover:translate-x-0.5 transition-transform duration-200">
                &gt;_
              </span>
              <span>VIEW ALL ACHIEVEMENTS</span>
            </span>
          </Link>
        </motion.div> */}
      </section>

      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#121824] border border-gray-800 rounded-lg overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="flex justify-between items-center p-3 bg-gray-950/60 border-b border-gray-900">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-gray-400">Credential Viewer</span>
                  {activeCert.gallery && activeCert.gallery.length > 1 && (
                    <span className="text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 px-1.5 py-0.5 rounded">
                      {currentImageIndex + 1} of {activeCert.gallery.length}
                    </span>
                  )}
                </div>
                <button
                  onClick={closeLightbox}
                  className="text-gray-400 hover:text-white transition-colors duration-200 p-1 rounded-sm hover:bg-gray-800 cursor-pointer"
                  aria-label="Close viewer"
                >
                  <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
                </button>
              </div>

              {/* Main Image Viewport */}
              <div className="relative aspect-[4/3] max-h-[75vh] bg-black flex items-center justify-center p-2 group">
                <img
                  src={activeCert.gallery ? activeCert.gallery[currentImageIndex] : activeCert.imageUrl}
                  alt={`${activeCert.title} - View ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain"
                />

                {activeCert.gallery && activeCert.gallery.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 border border-gray-800 text-gray-400 hover:text-white transition-all cursor-pointer opacity-80 md:opacity-0 group-hover:opacity-100"
                      aria-label="Previous image"
                    >
                      <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 border border-gray-800 text-gray-400 hover:text-white transition-all cursor-pointer opacity-80 md:opacity-0 group-hover:opacity-100"
                      aria-label="Next image"
                    >
                      <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 bg-black/40 backdrop-blur-xs px-2.5 py-1.5 rounded-full">
                      {activeCert.gallery.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-1.5 h-1.5 rounded-full transition-all ${index === currentImageIndex ? "bg-blue-500 scale-110" : "bg-gray-600 hover:bg-gray-400"
                            }`}
                        />
                      ))}
                    </div>
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