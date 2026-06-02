import { lazy, Suspense } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

const About = lazy(() => import("./components/About").then(m => ({ default: m.About })));
const Skills = lazy(() => import("./components/Skills").then(m => ({ default: m.Skills })));
const Experience = lazy(() => import("./components/Experience").then(m => ({ default: m.Experience })));
const EducationCerts = lazy(() => import("./components/EducationCerts").then(m => ({ default: m.EducationCerts })));
const Achievements = lazy(() => import("./components/Achievements").then(m => ({ default: m.Achievements })));
const Contact = lazy(() => import("./components/Contact").then(m => ({ default: m.Contact })));
const Footer = lazy(() => import("./components/Footer").then(m => ({ default: m.Footer })));

function SectionLoader() {
  return <div className="min-h-[200px]" />;
}

export default function App() {
  return (
    <div style={{ background: "#050d1a", minHeight: "100vh" }}>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#3b82f6] focus:text-white focus:rounded-lg"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <About />
          <Skills />
          <Experience />
          <EducationCerts />
          <Achievements />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
