"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";
import { faServer } from "@fortawesome/free-solid-svg-icons/faServer";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons/faMicrochip";
import { faBolt } from "@fortawesome/free-solid-svg-icons/faBolt";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0e0e0e] scroll-mt-13 flex flex-col justify-center items-center border-t border-b border-gray-500/10 py-20 px-6 sm:px-10 lg:px-40 w-full"
    >
      <div className="text-left text-sm space-y-3 w-full max-w-7xl">
        <div className="flex flex-col items-start mb-16 border-l-2 border-blue-500/40 pl-4">
          <span className="text-xs font-mono tracking-[0.25em] text-blue-500 uppercase mb-2">
            // Profile
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-white uppercase">
            <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
              About Me
            </span>
          </h2>
        </div>

        <div className="p-6 md:p-8 bg-gray-500/5 border border-gray-500/20 rounded-xl backdrop-blur-sm mb-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed font-normal">
            Full-stack developer focused on engineering digital tools that
            automate workflow bottlenecks and optimize daily operations.
            Specializes in transforming unorganized, manual tracking
            methods—such as legacy paper forms or fragmented sheets—into
            high-performance, centralized web applications. Proficient across
            both interface layers and server logic, working extensively with
            React, Node.js, and relational databases. Dedicated to implementing
            strict role-based access security protocols, real-time analytics
            dashboards, and lightweight runtime execution architectures to solve
            practical administrative challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 w-full">
          <div className="p-6 border border-gray-500/10 rounded-xl bg-gray-500/5 hover:bg-blue-500/5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 flex flex-col justify-between group">
            <div>
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-105 transition-transform">
                <FontAwesomeIcon icon={faCode} className="text-xs" />
              </div>
              <h3 className="text-white font-mono font-bold text-sm uppercase tracking-wider mb-2">
                Frontend Core
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Constructing highly responsive, accessible user interfaces
                utilizing modern frameworks like React and Next.js combined with
                Tailwind CSS. Prioritizing fluid cross-device viewports and
                intuitive layout flows.
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-gray-500/5 text-[10px] font-mono text-gray-500">
              engine // client_side
            </div>
          </div>

          <div className="p-6 border border-gray-500/10 rounded-xl bg-gray-500/5 hover:bg-blue-500/5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 flex flex-col justify-between group">
            <div>
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-105 transition-transform">
                <FontAwesomeIcon icon={faServer} className="text-xs" />
              </div>
              <h3 className="text-white font-mono font-bold text-sm uppercase tracking-wider mb-2">
                Backend & Logic
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Architecting structural server endpoints and database layers
                using Node.js, Express, and SQL patterns. Experienced in setting
                up multi-tier role routing parameters and secure data
                synchronization pipelines.
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-gray-500/5 text-[10px] font-mono text-gray-500">
              engine // server_side
            </div>
          </div>

          <div className="p-6 border border-gray-500/10 rounded-xl bg-gray-500/5 hover:bg-blue-500/5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 flex flex-col justify-between group">
            <div>
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-105 transition-transform">
                <FontAwesomeIcon icon={faMicrochip} className="text-xs" />
              </div>
              <h3 className="text-white font-mono font-bold text-sm uppercase tracking-wider mb-2">
                Hardware & IoT
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Mapping physical hardware modules directly to cloud telemetry
                networks. Experienced in building streaming dashboards that
                intercept and display hardware sensor feeds.
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-gray-500/5 text-[10px] font-mono text-gray-500">
              engine // embedded_sys
            </div>
          </div>

          <div className="p-6 border border-gray-500/10 rounded-xl bg-gray-500/5 hover:bg-blue-500/5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 flex flex-col justify-between group">
            <div>
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-105 transition-transform">
                <FontAwesomeIcon icon={faBolt} className="text-xs" />
              </div>
              <h3 className="text-white font-mono font-bold text-sm uppercase tracking-wider mb-2">
                Raw Performance
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                Committed to writing high-efficiency, predictable source logic.
                Fluent in raw, native JavaScript to optimize execution stacks,
                bypass framework overhead, and resolve processing bottlenecks.
              </p>
            </div>
            <div className="mt-4 pt-2 border-t border-gray-500/5 text-[10px] font-mono text-gray-500">
              engine // native_runtime
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
