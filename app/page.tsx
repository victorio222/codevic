"use client";

import { useState, useEffect } from "react";
import DefaultLayout from "./layout/DefaultLayout";
import About from "./pages/About/page";
import Experience from "./pages/Experience/page";
import Homepage from "./pages/Home/Homepage";
import Projects from "./pages/Projects/page";
import Skills from "./pages/Skills/page";
import Contact from "./pages/Contact/page";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const hasLoadedBefore = sessionStorage.getItem("hasLoadedBefore");

    if (hasLoadedBefore) {
      setIsLoading(false);
      setShouldRender(false);
      return;
    }

    sessionStorage.setItem("hasLoadedBefore" , "true");

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const removeTimer = setTimeout(() => {
      setShouldRender(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      {shouldRender && (
        <div
          className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#09090b] transition-opacity duration-500 ease-in-out ${
            isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-30" />
          
          <div className="relative z-10 flex flex-col items-center space-y-6">
            <div className="relative flex items-center justify-center w-20 h-20 border-2 border-blue-500/30 rounded-xl bg-slate-950/50 backdrop-blur-sm animate-pulse">
              <span className="font-mono text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">
                &lt;/&gt;
              </span>
              <div className="absolute inset-0 border-t-2 border-b-2 border-blue-500 rounded-xl animate-spin [animation-duration:3s]"></div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <p className="font-mono text-sm tracking-widest text-slate-400 uppercase animate-pulse">
                Initializing Environment...
              </p>
              <div className="w-48 h-1 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full bg-linear-to-r from-blue-500 to-indigo-500 rounded-full animate-progress" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={`fixed overflow-x-auto h-screen w-full bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] bg-size-[4rem_4rem] transition-all duration-700 ${
        isLoading ? "blur-md scale-95 opacity-50" : "blur-0 scale-100 opacity-100"
      }`}>
        <DefaultLayout>
          <Homepage />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </DefaultLayout>
      </div>
    </>
  );
}