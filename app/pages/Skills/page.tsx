"use client";

import { faBootstrap } from "@fortawesome/free-brands-svg-icons/faBootstrap";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons/faCss3Alt";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons/faHtml5";
import { faLinux } from "@fortawesome/free-brands-svg-icons/faLinux";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons/faNodeJs";
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons/faSquareJs";
import { faTailwindCss } from "@fortawesome/free-brands-svg-icons/faTailwindCss";
import { faTypescript } from "@fortawesome/free-brands-svg-icons/faTypescript";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  SiExpress, 
  SiMongodb, 
  SiNetlify, 
  SiNextdotjs, 
  SiPostman, 
  SiRender, 
  SiSupabase, 
  SiVercel, 
  SiMysql, 
  SiGit,
  SiInsomnia
} from "react-icons/si";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-10 flex flex-col justify-center items-center py-20 px-6 sm:px-10 lg:px-40 w-full">
      <h1 className="text-sm mb-3 text-blue-500 font-bold tracking-widest font-mono">[ SKILLS ]</h1>
      <div className="text-left text-sm space-y-3 w-full max-w-7xl">
        <h2 className="text-white text-center text-4xl md:text-5xl font-black tracking-tight mb-12">
          TECH STACK
        </h2>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          
          <div className="flex flex-col w-full bg-gray-500/5 border overflow-hidden border-gray-500/20 rounded-lg backdrop-blur-sm">
            <div className="bg-black/40 w-full p-3 flex items-center gap-2 border-b border-gray-500/10">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              <p className="text-xs font-mono text-gray-400 pl-4">frontend-dev ~ $</p>
            </div>
            <div className="flex flex-col gap-3 p-4 text-gray-300 text-[14px]">
              <div className="flex items-center gap-3 before:content-['$'] before:font-mono before:text-blue-500/70 before:mr-1">
                <div className="w-7 h-7 flex items-center justify-center"><FontAwesomeIcon icon={faHtml5} className="text-orange-500 text-xl" /></div>
                <span className="font-medium text-white">HTML5</span>
              </div>
              <div className="flex items-center gap-3 before:content-['$'] before:font-mono before:text-blue-500/70 before:mr-1">
                <div className="w-7 h-7 flex items-center justify-center"><FontAwesomeIcon icon={faCss3Alt} className="text-blue-400 text-xl" /></div>
                <span className="font-medium text-white">CSS3</span>
              </div>
              <div className="flex items-center gap-3 before:content-['$'] before:font-mono before:text-blue-500/70 before:mr-1">
                <div className="w-7 h-7 flex items-center justify-center"><FontAwesomeIcon icon={faSquareJs} className="text-yellow-400 text-xl" /></div>
                <span className="font-medium text-white">JavaScript (ES6+)</span>
              </div>
              <div className="flex items-center gap-3 before:content-['$'] before:font-mono before:text-blue-500/70 before:mr-1">
                <div className="w-7 h-7 flex items-center justify-center"><FontAwesomeIcon icon={faTailwindCss} className="text-cyan-400 text-xl" /></div>
                <span className="font-medium text-white">Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-3 before:content-['$'] before:font-mono before:text-blue-500/70 before:mr-1">
                <div className="w-7 h-7 flex items-center justify-center"><FontAwesomeIcon icon={faBootstrap} className="text-purple-500 text-xl" /></div>
                <span className="font-medium text-white">Bootstrap</span>
              </div>
              <div className="flex items-center gap-3 before:content-['$'] before:font-mono before:text-blue-500/70 before:mr-1">
                <div className="w-7 h-7 flex items-center justify-center"><FontAwesomeIcon icon={faReact} className="text-sky-400 text-xl" /></div>
                <span className="font-medium text-white">React</span>
              </div>
              <div className="flex items-center gap-3 before:content-['$'] before:font-mono before:text-blue-500/70 before:mr-1">
                <div className="w-7 h-7 flex items-center justify-center"><FontAwesomeIcon icon={faTypescript} className="text-blue-500 text-xl" /></div>
                <span className="font-medium text-white">TypeScript</span>
              </div>
              <div className="flex items-center gap-3 before:content-['$'] before:font-mono before:text-blue-500/70 before:mr-1">
                <div className="w-7 h-7 flex items-center justify-center"><SiNextdotjs className="text-white text-lg" /></div>
                <span className="font-medium text-white">Next.js</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full bg-gray-500/5 border overflow-hidden border-gray-500/20 rounded-lg backdrop-blur-sm">
            <div className="bg-black/40 w-full p-3 flex items-center gap-2 border-b border-gray-500/10">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              <p className="text-xs font-mono text-gray-400 pl-4">backend-db ~ $</p>
            </div>
            <div className="flex flex-col gap-3 p-4 text-gray-300 text-[14px]">
              <div className="flex items-center gap-3 before:content-['$'] before:font-mono before:text-blue-500/70 before:mr-1">
                <div className="w-7 h-7 flex items-center justify-center"><FontAwesomeIcon icon={faNodeJs} className="text-green-500 text-xl" /></div>
                <span className="font-medium text-white">Node.js</span>
              </div>
              <div className="flex items-center gap-3 before:content-['$'] before:font-mono before:text-blue-500/70 before:mr-1">
                <div className="w-7 h-7 flex items-center justify-center"><SiExpress className="text-gray-100 text-xl" /></div>
                <span className="font-medium text-white">Express.js</span>
              </div>
              <div className="flex items-center gap-3 before:content-['$'] before:font-mono before:text-blue-500/70 before:mr-1">
                <div className="w-7 h-7 flex items-center justify-center"><SiMysql className="text-sky-500 text-2xl" /></div>
                <span className="font-medium text-white">MySQL</span>
              </div>
              <div className="flex items-center gap-3 before:content-['$'] before:font-mono before:text-blue-500/70 before:mr-1">
                <div className="w-7 h-7 flex items-center justify-center"><SiMongodb className="text-green-400 text-xl" /></div>
                <span className="font-medium text-white">MongoDB</span>
              </div>
              <div className="flex items-center gap-3 before:content-['$'] before:font-mono before:text-blue-500/70 before:mr-1">
                <div className="w-7 h-7 flex items-center justify-center"><SiSupabase className="text-emerald-500 text-xl" /></div>
                <span className="font-medium text-white">Supabase</span>
              </div>
              <div className="flex items-center gap-3 before:content-['$'] before:font-mono before:text-blue-500/70 before:mr-1">
                <div className="w-7 h-7 flex items-center justify-center"><SiInsomnia className="text-purple-400 text-xl" /></div>
                <span className="font-medium text-white">REST APIs</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col w-full bg-gray-500/5 border overflow-hidden border-gray-500/20 rounded-lg backdrop-blur-sm sm:col-span-2 md:col-span-1 sm:max-w-sm sm:justify-self-center">
            <div className="bg-black/40 w-full p-3 flex items-center gap-2 border-b border-gray-500/10">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              <p className="text-xs font-mono text-gray-400 pl-4">dev-tools ~ $</p>
            </div>
            <div className="flex flex-col gap-3 p-4 text-gray-300 text-[14px]">
              <div className="flex items-center gap-3 before:content-['$'] before:font-mono before:text-blue-500/70 before:mr-1">
                <div className="w-7 h-7 flex items-center justify-center"><SiGit className="text-orange-500 text-xl" /></div>
                <span className="font-medium text-white">Git</span>
              </div>
              <div className="flex items-center gap-3 before:content-['$'] before:font-mono before:text-blue-500/70 before:mr-1">
                <div className="w-7 h-7 flex items-center justify-center"><FontAwesomeIcon icon={faGithub} className="text-white text-xl" /></div>
                <span className="font-medium text-white">GitHub</span>
              </div>
              <div className="flex items-center gap-3 before:content-['$'] before:font-mono before:text-blue-500/70 before:mr-1">
                <div className="w-7 h-7 flex items-center justify-center"><SiPostman className="text-orange-400 text-xl" /></div>
                <span className="font-medium text-white">Postman</span>
              </div>
              <div className="flex items-center gap-3 before:content-['$'] before:font-mono before:text-blue-500/70 before:mr-1">
                <div className="w-7 h-7 flex items-center justify-center"><SiVercel className="text-white text-base" /></div>
                <span className="font-medium text-white">Vercel</span>
              </div>
              <div className="flex items-center gap-3 before:content-['$'] before:font-mono before:text-blue-500/70 before:mr-1">
                <div className="w-7 h-7 flex items-center justify-center"><SiNetlify className="text-cyan-400 text-xl" /></div>
                <span className="font-medium text-white">Netlify</span>
              </div>
              <div className="flex items-center gap-3 before:content-['$'] before:font-mono before:text-blue-500/70 before:mr-1">
                <div className="w-7 h-7 flex items-center justify-center"><SiRender className="text-white text-base" /></div>
                <span className="font-medium text-white">Render</span>
              </div>
              <div className="flex items-center gap-3 before:content-['$'] before:font-mono before:text-blue-500/70 before:mr-1">
                <div className="w-7 h-7 flex items-center justify-center"><FontAwesomeIcon icon={faLinux} className="text-yellow-500 text-xl" /></div>
                <span className="font-medium text-white">Linux / Bash</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}