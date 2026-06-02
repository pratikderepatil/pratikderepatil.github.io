import { motion } from "motion/react";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Globe,
  MapPin,
  Send,
  ArrowUpRight,
} from "lucide-react";
import { PROFILE } from "./data";

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: "Email",
    value: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
    color: "#f59e0b",
    bg: "#2a1a0d",
    border: "#6e3a0d",
  },
  {
    icon: Phone,
    label: "Phone",
    value: PROFILE.phone,
    href: `tel:${PROFILE.phone}`,
    color: "#4ade80",
    bg: "#0d2a1a",
    border: "#14532d",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/pratikderepatil",
    href: PROFILE.linkedin,
    color: "#60a5fa",
    bg: "#0f2655",
    border: "#1e3a6e",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/pratikderepatil",
    href: PROFILE.github,
    color: "#a5b4fc",
    bg: "#1a1055",
    border: "#2e1f6e",
  },
  {
    icon: Globe,
    label: "Portfolio",
    value: "pratikderepatil.github.io",
    href: PROFILE.website,
    color: "#2dd4bf",
    bg: "#0d2a28",
    border: "#0f5350",
  },
  {
    icon: MapPin,
    label: "Location",
    value: PROFILE.location,
    href: undefined,
    color: "#fb7185",
    bg: "#2a0d1a",
    border: "#6e1f2e",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6"
      style={{ background: "#050d1a" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#60a5fa] text-sm uppercase tracking-widest mb-3 font-medium">
            Let's Work Together
          </p>
          <h2
            className="font-bold text-white mb-4"
            style={{ fontSize: "clamp(29px, 4vw, 45px)" }}
          >
            Get In Touch
          </h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] mx-auto mb-6" />
          <p
            className="text-slate-400 max-w-xl mx-auto"
            style={{ fontSize: "15px" }}
          >
            I'm currently open to new opportunities. Whether it's a project, a
            full-time role, or just a tech chat — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact links */}
          <div>
            <div className="grid sm:grid-cols-2 gap-4">
              {CONTACT_LINKS.map(
                ({ icon: Icon, label, value, href, color, bg, border }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                  >
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="flex items-start gap-4 p-5 rounded-2xl border hover:scale-[1.02] transition-all duration-200 group cursor-pointer"
                        style={{
                          background: "#0d1b2e",
                          borderColor: `${color}25`,
                        }}
                      >
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-200"
                          style={{
                            background: bg,
                            border: `1px solid ${border}`,
                          }}
                        >
                          <Icon size={18} style={{ color }} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-slate-400 text-xs mb-0.5">
                            {label}
                          </p>
                          <p className="text-white text-sm font-medium truncate group-hover:text-[#60a5fa] transition-colors">
                            {value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div
                        className="flex items-start gap-4 p-5 rounded-2xl border"
                        style={{
                          background: "#0d1b2e",
                          borderColor: `${color}25`,
                        }}
                      >
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                          style={{
                            background: bg,
                            border: `1px solid ${border}`,
                          }}
                        >
                          <Icon size={18} style={{ color }} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-slate-400 text-xs mb-0.5">
                            {label}
                          </p>
                          <p className="text-white text-sm font-medium truncate">
                            {value}
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )
              )}
            </div>
          </div>

          {/* CTA panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className="rounded-3xl p-8 border border-[#1e3a5f]/60 relative overflow-hidden"
              style={{ background: "#0d1b2e" }}
            >
              {/* Background decoration */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-5 blur-xl"
                style={{ background: "#3b82f6" }}
              />

              <div className="relative z-10">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: "linear-gradient(135deg, #1e40af, #3b82f6)",
                  }}
                >
                  <Send size={22} className="text-white" />
                </div>

                <h3
                  className="text-white font-bold mb-3"
                  style={{ fontSize: "22px" }}
                >
                  Open to Opportunities
                </h3>
                <p
                  className="text-slate-400 leading-relaxed mb-6"
                  style={{ fontSize: "14px" }}
                >
                  I'm actively looking for full-time engineering roles in
                  frontend, full-stack, or platform engineering. I'm also happy
                  to collaborate on interesting projects.
                </p>

                <div className="flex flex-col gap-3 mb-6">
                  {[
                    "Full-Stack Development",
                    "React / Next.js Developer",
                    "Frontend Developer",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-slate-300 text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#60a5fa]" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-white text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                    style={{
                      background: "linear-gradient(135deg, #1e40af, #3b82f6)",
                    }}
                  >
                    <Mail size={15} />
                    Send Email
                  </a>
                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-slate-300 text-sm border border-slate-600 hover:border-[#60a5fa] hover:text-white transition-all duration-200"
                  >
                    <ArrowUpRight size={15} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
