"use client";

import Image from "next/image";
import Profile from "@/app/assets/image/profile/profile.jpg";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { FaCode, FaPhone } from "react-icons/fa6";
import { FaFileDownload } from "react-icons/fa";

interface NavLink {
  name: string;
  targetId: string;
}

interface HomepageProps {
  isLoading: boolean;
}

export default function Homepage({ isLoading }: HomepageProps) {
  const navLinks: NavLink[] = [
    { name: "Contact", targetId: "contact" },
    { name: "Projects", targetId: "projects" },
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const profileVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section
      id="home"
      className="scroll-mt-32 px-10 pt-32 pb-10 sm:px-10 lg:px-40 lg:pt-40 grid grid-cols-1 gap-15 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr]"
    >
      <motion.div
        className="space-y-3"
        variants={containerVariants}
        initial="hidden"
        whileInView={!isLoading ? "visible" : "hidden"}
        viewport={{ once: true }}
      >
        <motion.h1
          className="font-bold text-transparent bg-clip-text bg-linear-to-r from-white to-gray-600 text-3xl sm:text-4xl md:text-6xl"
          variants={itemVariants}
        >
          Hi, I'm Victorio!
        </motion.h1>

        <motion.div className="mb-8" variants={itemVariants}>
          <ul className="flex gap-3 text-[13px] flex-wrap">
            {["Full Stack Developer", "Web Developer", "UI Designer"].map(
              (badge) => (
                <motion.li
                  key={badge}
                  className="px-5 py-1 border-2 border-blue-900 rounded-4xl text-blue-500 hover:border-blue-500 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {badge}
                </motion.li>
              ),
            )}
          </ul>
        </motion.div>

        <motion.h2
          className="text-4xl mb-8 sm:text-5xl md:text-4xl lg:text-6xl font-bold"
          variants={itemVariants}
        >
          Building clean web software to untangle everyday workflows.
        </motion.h2>

        <motion.p className="mb-8 text-gray-400" variants={itemVariants}>
          I am a full-stack developer who enjoys building software that fixes
          real, practical problems. Instead of letting records and data get
          messy, I design straightforward web applications, secure user portals,
          and live dashboards that keep everything organized and running
          smoothly.
        </motion.p>

        <motion.nav variants={itemVariants}>
          <ul className="flex flex-wrap gap-3 uppercase">
            <motion.li
              className="px-6 py-3 flex items-center gap-2 text-xs border border-blue-500 rounded-lg bg-blue-950 hover:cursor-pointer sm:text-xs md:text-sm"
              whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
              whileTap={{ scale: 0.95 }}
            >
              <span>
                <FaCode />
              </span>
              <a href="#projects" onClick={(e) => handleScroll(e, "projects")}>
                View Projects
              </a>
            </motion.li>
            <motion.li
              className="px-6 py-3 flex items-center gap-2 text-xs border border-slate-800 rounded-lg bg-black hover:cursor-pointer sm:text-xs md:text-sm"
              whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
              whileTap={{ scale: 0.95 }}
            >
              <span>
                <FaPhone />
              </span>
              <a href="#contact" onClick={(e) => handleScroll(e, "contact")}>
                Contact Me
              </a>
            </motion.li>
            <motion.li
              className="px-6 py-3 flex items-center gap-2 text-xs border border-slate-800 rounded-lg bg-black hover:cursor-pointer sm:text-xs md:text-sm"
              whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
              whileTap={{ scale: 0.95 }}
            >
              <span>
                <FaFileDownload />
              </span>
              <a href="/resume.pdf" download="Victorio_Cabatingan_Resume.pdf">
                Download Resume
              </a>
            </motion.li>
          </ul>
        </motion.nav>
      </motion.div>

      <motion.div
        className="flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView={!isLoading ? "visible" : "hidden"}
        viewport={{ once: true }}
      >
        <motion.div
          className="border border-blue-500/35 w-80 h-80 rounded-full overflow-hidden relative p-2"
          variants={profileVariants}
          whileHover={{ scale: 1.03 }}
        >
          <Image
            src={Profile}
            alt="My Profile"
            className="w-full h-full object-cover object-center rounded-full border-3 border-blue-700"
            priority
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="flex items-center gap-2 text-[13px] text-blue-500 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400/80 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <p className="font-bold">Open to work</p>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col w-full bg-gray-500/10 border overflow-hidden border-gray-500/35 rounded-lg mt-5 gap-2"
          variants={itemVariants}
        >
          <div className="bg-black/40 w-full p-2 flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            <p className="text-xs pl-5 font-mono">codevic-portfolio ~ $</p>
          </div>
          <div className="flex flex-col gap-2 px-3 pb-2.5 text-gray-400 text-[13px] font-mono">
            <span className="before:content-['$'] before:mr-2 before:text-blue-400">
              Name: Victorio F. Cabatingan, Jr.
            </span>
            <span className="before:content-['$'] before:mr-2 before:text-blue-400">
              Location: Lavezares, Northern Samar
            </span>
            <span className="before:content-['$'] before:mr-2 before:text-blue-400">
              Email: cabatinganvictorio@gmail.com
            </span>
            <span className="before:content-['$'] before:mr-2 before:text-blue-400">
              Contact: +63 963 013 9154
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
