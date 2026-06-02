import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SKILLS } from "./data";

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  Frontend:       { bg: "#0f2655", text: "#93c5fd", border: "#1e3a6e" },
  Backend:        { bg: "#1a1055", text: "#a5b4fc", border: "#2e1f6e" },
  "DevOps & Cloud": { bg: "#0d2a1a", text: "#6ee7b7", border: "#14532d" },
  Testing:        { bg: "#2a0d1a", text: "#fda4af", border: "#6e1f2e" },
  "Tools & Platforms": { bg: "#1a2a0d", text: "#bef264", border: "#365314" },
  Practices:      { bg: "#2a1a0d", text: "#fcd34d", border: "#6e3a0d" },
};

const CATEGORY_ICONS: Record<string, string> = {
  Frontend: "⚛️",
  Backend: "🔧",
  "DevOps & Cloud": "☁️",
  Testing: "✅",
  "Tools & Platforms": "🛠️",
  Practices: "📋",
};

export function Skills() {
  const categories = Object.keys(SKILLS);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const displayCategories = activeCategory ? [activeCategory] : categories;

  return (
    <section id="skills" className="py-24 px-6" style={{ background: "#050d1a" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#60a5fa] text-sm uppercase tracking-widest mb-3 font-medium">
            What I Work With
          </p>
          <h2
            className="font-bold text-white mb-4"
            style={{ fontSize: "clamp(29px, 4vw, 45px)" }}
          >
            Skills & Technologies
          </h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] mx-auto" />
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeCategory === null
                ? "bg-[#3b82f6] text-white shadow-lg shadow-blue-500/20"
                : "bg-[#112240] text-slate-400 border border-[#1e3a5f] hover:text-white"
            }`}
            aria-pressed={activeCategory === null}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#3b82f6] text-white shadow-lg shadow-blue-500/20"
                  : "bg-[#112240] text-slate-400 border border-[#1e3a5f] hover:text-white"
              }`}
              aria-pressed={activeCategory === cat}
            >
              {CATEGORY_ICONS[cat]} {cat}
            </button>
          ))}
        </motion.div>

        {/* Skill cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory ?? "all"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {displayCategories.map((cat, ci) => {
              const colors = CATEGORY_COLORS[cat] ?? CATEGORY_COLORS.Frontend;
              return (
                <motion.div
                  key={cat}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: ci * 0.08 }}
                  className="rounded-2xl p-6 border border-[#1e3a5f]/50 hover:border-[#60a5fa]/30 transition-all duration-300"
                  style={{ background: "#0d1b2e" }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-xl">{CATEGORY_ICONS[cat]}</span>
                    <h3 className="text-white font-semibold" style={{ fontSize: "14px" }}>
                      {cat}
                    </h3>
                    <span
                      className="ml-auto text-xs px-2 py-0.5 rounded-full"
                      style={{
                        background: colors.bg,
                        color: colors.text,
                        border: `1px solid ${colors.border}`,
                      }}
                    >
                      {(SKILLS as Record<string, string[]>)[cat].length}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {(SKILLS as Record<string, string[]>)[cat].map((skill, si) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: ci * 0.08 + si * 0.04 }}
                        className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 hover:scale-105 cursor-default"
                        style={{
                          background: colors.bg,
                          color: colors.text,
                          border: `1px solid ${colors.border}`,
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
