import { motion } from "motion/react";
import { Trophy } from "lucide-react";
import { ACHIEVEMENTS } from "./data";

export function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6" style={{ background: "#0d1b2e" }}>
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
            Recognition
          </p>
          <h2
            className="font-bold text-white mb-4"
            style={{ fontSize: "clamp(29px, 4vw, 45px)" }}
          >
            Achievements
          </h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {ACHIEVEMENTS.map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative rounded-2xl p-7 border overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
              style={{
                background: "#112240",
                borderColor: `${ach.color}30`,
              }}
            >
              {/* Background glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-5 blur-2xl group-hover:opacity-10 transition-opacity duration-300"
                style={{ background: ach.color }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{ background: `${ach.color}15`, border: `1px solid ${ach.color}30` }}
                >
                  <Trophy size={24} style={{ color: ach.color }} />
                </div>

                {/* Content */}
                <h3
                  className="font-bold text-white mb-1"
                  style={{ fontSize: "20px" }}
                >
                  {ach.title}
                </h3>
                <p
                  className="font-medium mb-4"
                  style={{ fontSize: "13px", color: ach.color }}
                >
                  {ach.subtitle}
                </p>
                <p className="text-slate-400 leading-relaxed" style={{ fontSize: "13.5px" }}>
                  {ach.description}
                </p>

                {/* Decorative */}
                <div
                  className="mt-5 h-1 w-12 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${ach.color}, transparent)` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rahi Platform quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 max-w-2xl mx-auto rounded-2xl p-8 border border-[#1e3a5f]/50 text-center"
          style={{ background: "#112240" }}
        >
          <p className="text-slate-300 leading-relaxed mb-4 italic" style={{ fontSize: "15px" }}>
            "Translated complex Figma designs into pixel-perfect, responsive interfaces with
            proactive UI/UX enhancements — awarded for the most accurate frontend implementation
            seen by the UI/UX team."
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs"
              style={{ background: "linear-gradient(135deg, #1e40af, #3b82f6)" }}>
              RPT
            </div>
            <span className="text-[#60a5fa] text-sm font-medium">Rahi Platform Technologies</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
