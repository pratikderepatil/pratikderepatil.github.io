import { motion } from "motion/react";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import { PROFILE, STATS } from "./data";

function useInView(threshold = 0.2) {
  return { viewport: { once: true, amount: threshold } };
}

export function About() {
  const vp = useInView();

  return (
    <section
      id="about"
      className="py-24 px-6"
      style={{ background: "#0d1b2e" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          {...useInView()}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#60a5fa] text-sm uppercase tracking-widest mb-3 font-medium">
            Get To Know Me
          </p>
          <h2
            className="font-bold text-white mb-4"
            style={{ fontSize: "clamp(29px, 4vw, 45px)" }}
          >
            About Me
          </h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Avatar + quick info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            {...vp}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start gap-6"
          >
            {/* Avatar */}
            <div className="relative">
              <div
                className="w-48 h-48 rounded-3xl flex items-center justify-center text-white border border-[#1e3a5f]"
                style={{
                  background:
                    "linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%)",
                  fontSize: "64px",
                  fontWeight: 700,
                  letterSpacing: "4px",
                }}
              >
                PD
              </div>
              {/* Status badge */}
              <div
                className="absolute -bottom-3 -right-3 flex items-center gap-2 px-4 py-2 rounded-full border border-[#1e3a5f] text-sm font-medium text-white"
                style={{ background: "#0a1628" }}
              >
                <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
                Available to work
              </div>
            </div>

            {/* Contact quick links */}
            <div className="flex flex-col gap-3 w-full max-w-xs">
              {[
                { icon: MapPin, text: PROFILE.location },
                {
                  icon: Mail,
                  text: PROFILE.email,
                  href: `mailto:${PROFILE.email}`,
                },
                {
                  icon: Phone,
                  text: PROFILE.phone,
                  href: `tel:${PROFILE.phone}`,
                },
              ].map(({ icon: Icon, text, href }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 text-slate-400 text-sm"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "#112240" }}
                  >
                    <Icon size={14} className="text-[#60a5fa]" />
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className="hover:text-[#60a5fa] transition-colors duration-200 break-all"
                    >
                      {text}
                    </a>
                  ) : (
                    <span>{text}</span>
                  )}
                </div>
              ))}
              <div className="flex gap-3 mt-2">
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#60a5fa] text-sm hover:underline"
                >
                  LinkedIn <ExternalLink size={11} />
                </a>
                <span className="text-slate-600">•</span>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[#60a5fa] text-sm hover:underline"
                >
                  GitHub <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Summary + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            {...vp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3
              className="font-bold text-white mb-4"
              style={{ fontSize: "22px" }}
            >
              Full-Stack Software Engineer
            </h3>
            <p
              className="text-slate-400 leading-relaxed mb-6"
              style={{ fontSize: "15px" }}
            >
              {PROFILE.summary}
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["FinTech", "API Design"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium text-[#93c5fd] border border-[#1e3a5f]"
                  style={{ background: "#112240" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  {...vp}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="rounded-2xl p-5 border border-[#1e3a5f]/60 text-center"
                  style={{ background: "#112240" }}
                >
                  <p
                    className="font-bold mb-1"
                    style={{
                      fontSize: "28px",
                      background: "linear-gradient(135deg, #60a5fa, #818cf8)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {value}
                  </p>
                  <p className="text-slate-400 text-sm">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
