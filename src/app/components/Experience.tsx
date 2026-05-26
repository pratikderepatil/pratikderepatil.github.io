import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { EXPERIENCE } from "./data";

export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6" style={{ background: "#0d1b2e" }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#60a5fa] text-sm uppercase tracking-widest mb-3 font-medium">
            Where I've Worked
          </p>
          <h2
            className="font-bold text-white mb-4"
            style={{ fontSize: "clamp(29px, 4vw, 45px)" }}
          >
            Work Experience
          </h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, #1e3a5f, #1e3a5f00)" }}
          />

          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-16 mb-8 last:mb-0"
            >
              {/* Timeline dot */}
              <div
                className="absolute left-0 top-6 w-12 h-12 rounded-xl flex items-center justify-center border-2 text-white font-bold text-xs z-10"
                style={{
                  background: `${exp.color}22`,
                  borderColor: `${exp.color}66`,
                  color: exp.color,
                  fontSize: "9px",
                  letterSpacing: "0.5px",
                }}
              >
                {exp.companyInitials}
              </div>

              {/* Card */}
              <div
                className="rounded-2xl border border-[#1e3a5f]/60 overflow-hidden hover:border-[#60a5fa]/30 transition-all duration-300"
                style={{ background: "#112240" }}
              >
                {/* Card Header */}
                <button
                  className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left"
                  onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <h3 className="text-white font-bold" style={{ fontSize: "16px" }}>
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span
                          className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium"
                          style={{ background: "#0d2e1a", color: "#4ade80", border: "1px solid #14532d" }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>
                    <p className="font-semibold mb-2" style={{ fontSize: "14px", color: exp.color }}>
                      {exp.company}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-slate-400">
                      <span className="flex items-center gap-1.5 text-xs">
                        <MapPin size={11} />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs">
                        <Calendar size={11} />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  <div className="text-slate-500 shrink-0 mt-1">
                    {expandedIndex === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>

                {/* Tags */}
                <div className="px-6 pb-3 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                      style={{
                        background: `${exp.color}15`,
                        color: exp.color,
                        border: `1px solid ${exp.color}30`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Expandable bullets */}
                <AnimatePresence>
                  {expandedIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div
                        className="px-6 py-5 border-t border-[#1e3a5f]/60"
                        style={{ background: "#0d1b2e" }}
                      >
                        <ul className="space-y-3">
                          {exp.bullets.map((b, bi) => (
                            <motion.li
                              key={bi}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: bi * 0.06 }}
                              className="flex gap-3 items-start"
                            >
                              <div
                                className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                                style={{ background: exp.color }}
                              />
                              <span className="text-slate-300 leading-relaxed" style={{ fontSize: "13.5px" }}>
                                {b}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
