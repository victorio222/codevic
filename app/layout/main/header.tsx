"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/image/logo.png";
interface NavItem {
  name: string;
  targetId: string;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks: NavItem[] = [
    { name: "Home", targetId: "home" },
    { name: "About", targetId: "about" },
    { name: "Skills", targetId: "skills" },
    { name: "Projects", targetId: "projects" },
    { name: "Experience", targetId: "experience" },
    { name: "Certificates", targetId: "certificates" },
    { name: "Contact", targetId: "contact" },
  ];

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
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions,
    );

    navLinks.forEach((link) => {
      const element = document.getElementById(link.targetId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveSection(targetId);

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
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
            ? "py-2 border-b border-blue-950/40 bg-black/80 backdrop-blur-md"
            : "py-4 border-b border-transparent bg-transparent"
          } px-6 md:px-10 lg:px-40`}
      >
        <nav className="flex items-center justify-between text-blue-50 max-w-7xl mx-auto">
          <div className="flex">
            <div>
              <Image src={Logo} alt="Logo image" width={80} height={80} />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-5 text-[14px]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.targetId;
              return (
                <a
                  key={link.targetId}
                  href={`#${link.targetId}`}
                  onClick={(e) => handleScroll(e, link.targetId)}
                  className={`transition-all duration-300 cursor-pointer font-medium relative py-1 ${isActive
                      ? "text-blue-500 font-bold tracking-wide scale-105"
                      : "text-gray-400 hover:text-white"
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 rounded-full animate-fade-in" />
                  )}
                </a>
              );
            })}
          </div>

          <div className="hidden md:block">
            <ul className="flex items-center gap-3 text-lg text-gray-400">
              <Link
                href="https://github.com/victorio222"
                target="_blank"
                className="hover:text-blue-500 cursor-pointer"
              >
                <FontAwesomeIcon icon={faGithub} className="w-7 h-7" />
              </Link>
              <Link
                href="https://linkedin.com/in/victorio-cabatingan-jr-94199737b"
                target="_blank"
                className="hover:text-blue-500 cursor-pointer transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:cabatinganvictorio@gmail.com"
                target="_blank"
                className="hover:text-blue-500 cursor-pointer transition-colors"
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
              </Link>
            </ul>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-400 hover:text-white focus:outline-none p-1"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen
              ? "max-h-100 opacity-100 mt-4"
              : "max-h-0 opacity-0"
            } bg-[#09090b]/95 backdrop-blur-md rounded-lg`}
        >
          <div className="flex flex-col gap-4 pb-4 text-[15px] border-t border-blue-950/50 pt-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.targetId;
              return (
                <a
                  key={link.targetId}
                  href={`#${link.targetId}`}
                  onClick={(e) => handleScroll(e, link.targetId)}
                  className={`transition-colors cursor-pointer pl-2 border-l-2 ${isActive
                      ? "text-blue-500 font-bold border-blue-500 bg-blue-500/5 py-1 rounded-r"
                      : "text-gray-400 hover:text-white border-transparent"
                    }`}
                >
                  {link.name}
                </a>
              );
            })}

            <ul className="flex items-center gap-4 text-[20px] text-gray-500 border-t border-blue-950/30 pt-3">
              <Link
                href="https://github.com/victorio222"
                target="_blank"
                className="hover:text-blue-500 cursor-pointer"
              >
                <FontAwesomeIcon icon={faGithub} className="w-7 h-7" />
              </Link>
              <Link
                href="https://linkedin.com/in/victorio-cabatingan-jr-94199737b"
                target="_blank"
                className="hover:text-blue-500 cursor-pointer transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:cabatinganvictorio@gmail.com"
                target="_blank"
                className="hover:text-blue-500 cursor-pointer transition-colors"
              >
                <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
              </Link>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
