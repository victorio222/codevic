"use client";

import React, { useState, useTransition } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { FaLinkedin } from "react-icons/fa6";
import { sendContactEmail } from "@/app/components/contact/actions";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("idle");

    const targetFormData = new FormData(e.currentTarget);

    startTransition(async () => {
      const result = await sendContactEmail(targetFormData);
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    });
  };

  return (
    <section
      id="contact"
      className="bg-[#0e0e0e] scroll-mt-10 flex flex-col justify-center items-center border-t border-b border-gray-500/10 py-20 px-6 sm:px-10 lg:px-40 w-full"
    >
      <h1 className="text-sm mb-3 text-blue-500 font-bold tracking-widest font-mono">
        [ CONTACT ]
      </h1>
      <div className="text-left text-sm space-y-3 w-full max-w-7xl">
        <h2 className="text-white text-center text-4xl md:text-5xl font-black tracking-tight mb-12">
          GET IN TOUCH
        </h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 items-start">
          <div className="lg:col-span-2 flex flex-col gap-4 w-full">
            <p className="text-gray-400 text-base max-w-md mb-2">
              Have a project in mind, a position to fill, or just want to talk
              software architecture? Drop me a message.
            </p>

            <a
              href="mailto:cabatinganvictorio@gmail.com"
              className="flex items-center gap-4 p-4 bg-gray-500/5 border border-gray-500/20 rounded-lg hover:border-blue-500/50 transition-all group"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-blue-500/10 rounded-md group-hover:bg-blue-500/20 transition-colors">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-blue-400 text-xl"
                />
              </div>
              <div>
                <p className="text-xs font-mono text-gray-400">Email Direct</p>
                <p className="text-white font-medium text-sm sm:text-base tracking-wide">
                  cabatinganvictorio@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/victorio-cabatingan-jr-94199737b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-500/5 border border-gray-500/20 rounded-lg hover:border-sky-500/50 transition-all group"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-sky-500/10 rounded-md group-hover:bg-sky-500/20 transition-colors">
                <FaLinkedin className="text-sky-400 text-xl" />
              </div>
              <div>
                <p className="text-xs font-mono text-gray-400">LinkedIn</p>
                <p className="text-white font-medium text-sm sm:text-base tracking-wide">
                  linkedin.com/in/victorio-cabatingan-jr-94199737b
                </p>
              </div>
            </a>

            <a
              href="https://github.com/victorio222"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-500/5 border border-gray-500/20 rounded-lg hover:border-white/30 transition-all group"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-md group-hover:bg-white/10 transition-colors">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-white text-xl"
                />
              </div>
              <div>
                <p className="text-xs font-mono text-gray-400">
                  GitHub Profile
                </p>
                <p className="text-white font-medium text-sm sm:text-base tracking-wide">
                  github.com/victorio
                </p>
              </div>
            </a>
          </div>

          <div className="lg:col-span-3 flex flex-col w-full bg-gray-500/5 border overflow-hidden border-gray-500/20 rounded-lg backdrop-blur-sm">
            <div className="bg-black/40 w-full p-3 flex items-center gap-2 border-b border-gray-500/10">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              <p className="text-xs font-mono text-gray-400 pl-4">
                send-message.sh ~ $
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
              <div>
                <label className="block text-xs font-mono text-blue-400 mb-1.5 font-bold uppercase tracking-wider">
                  $ print(your_name)
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="John Doe"
                  className="w-full bg-black/30 border border-gray-500/20 rounded px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/60 font-medium transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-blue-400 mb-1.5 font-bold uppercase tracking-wider">
                  $ print(your_email)
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="john@example.com"
                  className="w-full bg-black/30 border border-gray-500/20 rounded px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/60 font-medium transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-blue-400 mb-1.5 font-bold uppercase tracking-wider">
                  $ cat &lt;&lt;EOF &gt; message.txt
                </label>
                <textarea
                  rows={4}
                  name="message"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Hey, let's build something awesome together..."
                  className="w-full bg-black/30 border border-gray-500/20 rounded px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/60 font-medium transition-colors resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2 w-full">
                <div className="h-6 text-xs font-mono min-w-37.5">
                  {isPending && (
                    <span className="text-yellow-400 animate-pulse">
                      Executing system transmission...
                    </span>
                  )}
                  {status === "success" && (
                    <span className="text-green-400">
                      ✓ Message transmitted successfully!
                    </span>
                  )}
                  {status === "error" && (
                    <span className="text-red-400">
                      ✗ Transmission error. Please try again.
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-mono text-xs font-bold rounded flex items-center justify-center gap-2 cursor-pointer transition-all uppercase tracking-wider active:scale-95"
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="text-xs" />
                  Execute Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
