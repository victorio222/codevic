import DefaultLayout from "./layout/DefaultLayout";
import About from "./pages/About/page";
import Experience from "./pages/Experience/page";
import Homepage from "./pages/Home/Homepage";
import Projects from "./pages/Projects/page";
import Skills from "./pages/Skills/page";
import Contact from "./pages/Contact/page";

export default function Home() {
  return (
    <>
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#020617_80%)]"></div> */}
      <div className="fixed overflow-x-auto h-screen w-full bg-[linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)] bg-size-[4rem_4rem]">
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
