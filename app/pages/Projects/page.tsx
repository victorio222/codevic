"use client";

export default function Projects() {
  return (
    <section className="bg-[#0e0e0e] flex flex-col justify-center items-center border-t border-b border-[#1c1b1b] py-10 px-10 sm:px-10 lg:px-40 md:40">
      <h1 className="text-lg mb-5 text-blue-500 font-bold">[ Projects ]</h1>
      <div className="text-center text-sm space-y-3">
        <p className="text-gray-400 mb-10">
          I’m a full-stack developer who loves building web tools that make
          daily work easier. I look at messy, manual tasks—like paper forms or
          unorganized tracking—and turn them into clean, reliable applications
          that just work. I handle both the frontend and backend, spending most
          of my time with React, Node.js, and MySQL. Whether I am setting up
          secure login systems for different types of users, designing
          responsive dashboards, or writing raw JavaScript to keep code fast, my
          goal is always to build software that is easy to navigate and simple
          to maintain. I enjoy solving real administrative problems and am
          always ready to team up on projects that need solid, practical
          solutions.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <div className="p-8 border border-gray-800 rounded-lg bg-[#002aff09] hover:bg-[#3e5bea10] transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent">
            <h2 className="text-lg font-bold mb-3">Frontend Core</h2>
            <p className="leading-relaxed">
              I build clean, responsive user interfaces using React, Next.js,
              and Tailwind CSS. I focus on making layouts look good on mobile
              and desktop while keeping the user experience straightforward and
              easy to navigate.
            </p>
          </div>
          <div className="p-8 border border-gray-800 rounded-lg bg-[#002aff09] hover:bg-[#3e5bea10] transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent">
            <h2 className="text-lg font-bold mb-3">Backend & Logic</h2>
            <p className="leading-relaxed">
              I handle server-side logic and database structures using Node.js,
              Express, and MySQL. From setting up secure, role-based login
              systems to writing custom APIs, I make sure data moves safely and
              efficiently.
            </p>
          </div>
          <div className="p-8 border border-gray-800 rounded-lg bg-[#002aff09] hover:bg-[#3e5bea10] transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent">
            <h2 className="text-lg font-bold mb-3">Hardware & IoT</h2>
            <p className="leading-relaxed">
              Beyond standard web development, I have hands-on experience
              connecting software to physical hardware. I can build real-time
              web dashboards that read and display live data from sensors and
              embedded systems.
            </p>
          </div>
          <div className="p-8 border border-gray-800 rounded-lg bg-[#002aff09] hover:bg-[#3e5bea10] transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent">
            <h2 className="text-lg font-bold mb-3">Simple & Clean Code</h2>
            <p className="leading-relaxed">
              I believe in writing maintainable, organized code. While I love
              modern frameworks, I am also comfortable writing raw Vanilla
              JavaScript to optimize performance, fix bottlenecks, and keep
              applications lightweight.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
