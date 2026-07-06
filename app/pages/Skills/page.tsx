"use client";

import { faBootstrap } from "@fortawesome/free-brands-svg-icons/faBootstrap";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons/faCss3Alt";
import { faHtml5,  } from "@fortawesome/free-brands-svg-icons/faHtml5";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons/faNodeJs";
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons/faSquareJs";
import { faTailwindCss } from "@fortawesome/free-brands-svg-icons/faTailwindCss";
import { faTypescript } from "@fortawesome/free-brands-svg-icons/faTypescript";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Skills() {
  return (
    <section className="flex flex-col justify-center items-center py-10 px-10 sm:px-10 lg:px-40 md:40">
      <h1 className="text-lg mb-5 text-blue-500 font-bold">[ Skills ]</h1>
      <div className="text-left text-sm space-y-3 w-full">
        <h2 className="text-white text-center text-5xl font-bold mb-10">
          TECH STACK
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
          <div className="flex flex-col w-full bg-gray-500/10 border overflow-hidden border-gray-500/35 rounded-lg gap-2">
            <div className="bg-black/40 w-full p-2 flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              <p className="text-xs pl-5">frontend development ~ $</p>
            </div>
            <div className="flex flex-col gap-0.5 px-3 pb-2.5 text-white text-[13px]">
              <div className="flex items-center gap-1 before:content-['$'] before:mr-2">
                <FontAwesomeIcon icon={faHtml5} className="text-orange-500 text-3xl" />
                <span>HTML5</span>
              </div>
              <div className="flex items-center gap-1 before:content-['$'] before:mr-2">
                <FontAwesomeIcon icon={faCss3Alt} className="text-blue-500 text-3xl" />
                <span>CSS3</span>
              </div>
              <div className="flex items-center gap-1 before:content-['$'] before:mr-2">
                <FontAwesomeIcon icon={faSquareJs} className="text-yellow-500 text-3xl" />
                <span>JavaScript (ES6+)</span>
              </div>
              <div className="flex items-center gap-1 before:content-['$'] before:mr-2">
                <FontAwesomeIcon icon={faTailwindCss} className="text-blue-500 text-3xl" />
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-1 before:content-['$'] before:mr-2">
                <FontAwesomeIcon icon={faBootstrap} className="text-purple-500 text-3xl" />
                <span>Bootstrap</span>
              </div>
              <div className="flex items-center gap-1 before:content-['$'] before:mr-2">
                <FontAwesomeIcon icon={faReact} className="text-blue-500 text-3xl" />
                <span>React</span>
              </div>
              <div className="flex items-center gap-1 before:content-['$'] before:mr-2">
                <FontAwesomeIcon icon={faTypescript} className="text-blue-500 text-3xl" />
                <span>Typescript</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full bg-gray-500/10 border overflow-hidden border-gray-500/35 rounded-lg gap-2">
            <div className="bg-black/40 w-full p-2 flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              <p className="text-xs pl-5">backend & database ~ $</p>
            </div>
            <div className="flex flex-col gap-0.5 px-3 pb-2.5 text-white text-[13px]">
              <div className="flex items-center gap-1 before:content-['$'] before:mr-2">
                <FontAwesomeIcon icon={faNodeJs} className="text-green-500 text-3xl" />
                <span>Node.js</span>
              </div>
              {/* <div className="flex items-center gap-1 before:content-['$'] before:mr-2">
                <FontAwesomeIcon icon={fa} className="text-yellow-500 text-3xl" />
                <span>Express.js</span>
              </div> */}
              <div className="flex items-center gap-1 before:content-['$'] before:mr-2">
                <FontAwesomeIcon icon={faSquareJs} className="text-yellow-500 text-3xl" />
                <span>MySQL</span>
              </div>
              <div className="flex items-center gap-1 before:content-['$'] before:mr-2">
                <FontAwesomeIcon icon={faTailwindCss} className="text-blue-500 text-3xl" />
                <span>MongoDB</span>
              </div>
              <div className="flex items-center gap-1 before:content-['$'] before:mr-2">
                <FontAwesomeIcon icon={faTailwindCss} className="text-blue-500 text-3xl" />
                <span>Supabase</span>
              </div>
              <div className="flex items-center gap-1 before:content-['$'] before:mr-2">
                <FontAwesomeIcon icon={faBootstrap} className="text-purple-500 text-3xl" />
                <span>REST APIs</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col w-full bg-gray-500/10 border overflow-hidden border-gray-500/35 rounded-lg gap-2">
            <div className="bg-black/40 w-full p-2 flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              <p className="text-xs pl-5">backend & database ~ $</p>
            </div>
            <div className="flex flex-col gap-0.5 px-3 pb-2.5 text-white text-[13px]">
              <div className="flex items-center gap-1 before:content-['$'] before:mr-2">
                <FontAwesomeIcon icon={faNodeJs} className="text-green-500 text-3xl" />
                <span>Node.js</span>
              </div>
              {/* <div className="flex items-center gap-1 before:content-['$'] before:mr-2">
                <FontAwesomeIcon icon={fa} className="text-yellow-500 text-3xl" />
                <span>Express.js</span>
              </div> */}
              <div className="flex items-center gap-1 before:content-['$'] before:mr-2">
                <FontAwesomeIcon icon={faSquareJs} className="text-yellow-500 text-3xl" />
                <span>MySQL</span>
              </div>
              <div className="flex items-center gap-1 before:content-['$'] before:mr-2">
                <FontAwesomeIcon icon={faTailwindCss} className="text-blue-500 text-3xl" />
                <span>MongoDB</span>
              </div>
              <div className="flex items-center gap-1 before:content-['$'] before:mr-2">
                <FontAwesomeIcon icon={faTailwindCss} className="text-blue-500 text-3xl" />
                <span>Supabase</span>
              </div>
              <div className="flex items-center gap-1 before:content-['$'] before:mr-2">
                <FontAwesomeIcon icon={faBootstrap} className="text-purple-500 text-3xl" />
                <span>REST APIs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
