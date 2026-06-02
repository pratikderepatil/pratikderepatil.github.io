import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ArrowDown,
  ExternalLink,
} from "lucide-react";
import { PROFILE } from "./data";

const TYPED_ROLES = PROFILE.roles;

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TYPED_ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        80
      );
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % TYPED_ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #050d1a 0%, #0d1b2e 50%, #050d1a 100%)",
      }}
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(96,165,250,1) 1px, transparent 1px), linear-gradient(90deg, rgba(96,165,250,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing orbs - reduced blur for performance */}
      <div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-10 blur-xl"
        style={{ background: "radial-gradient(circle, #3b82f6, transparent)" }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-8 blur-xl"
        style={{ background: "radial-gradient(circle, #8b5cf6, transparent)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-16">
        {/* Left content */}
        <div className="flex-1 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 mb-5"
          >
            <div className="w-8 h-[2px] bg-[#60a5fa]" />
            <span className="text-[#60a5fa] text-sm tracking-widest uppercase font-medium">
              Hello, I'm
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-bold leading-tight mb-3"
            style={{
              fontSize: "clamp(40px, 6vw, 72px)",
              letterSpacing: "-0.02em",
            }}
          >
            <span
              style={{
                background:
                  "linear-gradient(135deg, #ffffff 30%, #93c5fd 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Pratik
            </span>
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #60a5fa 0%, #818cf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Derepatil
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex items-center gap-2 mb-6 h-9"
          >
            <span className="text-slate-300 text-xl font-medium">
              {displayed}
            </span>
            <span
              className="inline-block w-0.5 h-6 bg-[#60a5fa] animate-pulse"
              style={{ animationDuration: "0.8s" }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-slate-400 leading-relaxed mb-8 max-w-lg"
            style={{ fontSize: "15px" }}
          >
            Full-Stack Software Developer with 3.5 years of experience building
            scalable web applications using{" "}
            <span className="text-[#60a5fa]">React.js</span>,{" "}
            <span className="text-[#60a5fa]">Next.js</span>, and{" "}
            <span className="text-[#60a5fa]">Node.js</span>. Skilled in
            developing{" "}
            <span className="text-[#60a5fa]">reusable UI components</span>,
            configurable UI systems. Experienced in collaborating with
            cross-functional teams, optimizing application performance, and
            delivering production-ready solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <button
              onClick={() => scrollTo("experience")}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              style={{
                background: "linear-gradient(135deg, #1e40af, #3b82f6)",
              }}
            >
              View Experience
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-slate-300 text-sm border border-slate-600 hover:border-[#60a5fa] hover:text-white hover:bg-[#60a5fa]/5 transition-all duration-200"
            >
              Get In Touch
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex items-center gap-4"
          >
            {[
              { icon: Github, href: PROFILE.github, label: "GitHub" },
              { icon: Linkedin, href: PROFILE.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${PROFILE.email}`, label: "Email" },
              { icon: Phone, href: `tel:${PROFILE.phone}`, label: "Phone" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                title={label}
                className="w-10 h-10 rounded-lg flex items-center justify-center text-slate-400 border border-slate-700 hover:text-[#60a5fa] hover:border-[#60a5fa]/50 hover:bg-[#60a5fa]/5 transition-all duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
            <span className="h-px w-12 bg-slate-700" />
            <a
              href={PROFILE.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-400 hover:text-[#60a5fa] text-sm transition-colors duration-200"
            >
              Portfolio
              <ExternalLink size={12} />
            </a>
          </motion.div>
        </div>

        {/* Right: Code card visual */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:block flex-shrink-0"
          style={{ width: 340 }}
        >
          {/* Code window */}
          <div
            className="rounded-2xl overflow-hidden border border-[#1e3a5f]/80"
            style={{ background: "#0d1b2e" }}
          >
            {/* Window bar */}
            <div
              className="flex items-center gap-2 px-4 py-3 border-b border-[#1e3a5f]/60"
              style={{ background: "#0a1628" }}
            >
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-slate-500 text-xs">pratik.tsx</span>
            </div>
            {/* Code content */}
            <div
              className="p-5 font-mono"
              style={{ fontSize: "12px", lineHeight: "1.8" }}
            >
              <div>
                <span className="text-[#c792ea]">const</span>
                <span className="text-white"> pratik </span>
                <span className="text-[#89ddff]">= </span>
                <span className="text-[#c792ea]">{"{"}</span>
              </div>
              <div className="ml-4">
                <span className="text-[#80cbc4]">name</span>
                <span className="text-[#89ddff]">: </span>
                <span className="text-[#c3e88d]">"Pratik Derepatil"</span>
                <span className="text-slate-500">,</span>
              </div>
              <div className="ml-4">
                <span className="text-[#80cbc4]">role</span>
                <span className="text-[#89ddff]">: </span>
                <span className="text-[#c3e88d]">"Software Engineer"</span>
                <span className="text-slate-500">,</span>
              </div>
              <div className="ml-4">
                <span className="text-[#80cbc4]">experience</span>
                <span className="text-[#89ddff]">: </span>
                <span className="text-[#f78c6c]">3</span>
                <span className="text-slate-500">,</span>
              </div>
              <div className="ml-4">
                <span className="text-[#80cbc4]">stack</span>
                <span className="text-[#89ddff]">: </span>
                <span className="text-[#c792ea]">[</span>
              </div>
              {["React.js", "Next.js", "TypeScript", "Nest.js"].map((s) => (
                <div key={s} className="ml-8">
                  <span className="text-[#c3e88d]">"{s}"</span>
                  <span className="text-slate-500">,</span>
                </div>
              ))}
              <div className="ml-4">
                <span className="text-[#c792ea]">]</span>
                <span className="text-slate-500">,</span>
              </div>
              <div className="ml-4">
                <span className="text-[#80cbc4]">passion</span>
                <span className="text-[#89ddff]">: </span>
                <span className="text-[#c3e88d]">
                  "Building great products"
                </span>
              </div>
              <div>
                <span className="text-[#c792ea]">{"}"}</span>
                <span className="text-slate-500">;</span>
              </div>
              <div className="mt-3">
                <span className="text-slate-500">// Currently at</span>
              </div>
              <div>
                <span className="text-[#c792ea]">export default </span>
                <span className="text-[#82aaff]">RahiPlatformTech</span>
                <span className="text-slate-500">;</span>
              </div>
            </div>
          </div>

          {/* Stats below the card */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            {[
              { v: "3+", l: "Years" },
              { v: "30+", l: "Components" },
              { v: "90%", l: "Docker size ↓" },
              { v: "95%", l: "Lighthouse ↑" },
            ].map(({ v, l }) => (
              <div
                key={l}
                className="rounded-xl p-4 text-center border border-[#1e3a5f]/50"
                style={{ background: "#0d1b2e" }}
              >
                <p
                  className="font-bold text-[#60a5fa]"
                  style={{ fontSize: "20px" }}
                >
                  {v}
                </p>
                <p className="text-slate-400 text-xs mt-0.5">{l}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo("about")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && scrollTo("about")}
        aria-label="Scroll to about section"
      >
        <span className="text-slate-400 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} className="text-slate-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
