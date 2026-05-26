import { motion } from "motion/react";
import { GraduationCap, Award } from "lucide-react";
import { EDUCATION, CERTIFICATIONS } from "./data";

export function EducationCerts() {
  return (
    <section id="education" className="py-24 px-6" style={{ background: "#050d1a" }}>
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
            Academic Background
          </p>
          <h2
            className="font-bold text-white mb-4"
            style={{ fontSize: "clamp(29px, 4vw, 45px)" }}
          >
            Education & Certifications
          </h2>
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "#0f2655" }}
              >
                <GraduationCap size={18} className="text-[#60a5fa]" />
              </div>
              <h3 className="text-white font-semibold" style={{ fontSize: "18px" }}>
                Education
              </h3>
            </motion.div>

            <div className="space-y-4">
              {EDUCATION.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl p-6 border border-[#1e3a5f]/60 hover:border-[#60a5fa]/30 transition-all duration-300"
                  style={{ background: "#0d1b2e" }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                      style={{ background: "#112240" }}
                    >
                      {edu.icon}
                    </div>
                    <div>
                      <h4
                        className="text-white font-bold mb-1 leading-tight"
                        style={{ fontSize: "15px" }}
                      >
                        {edu.degree}
                      </h4>
                      <p className="text-[#60a5fa] font-medium mb-1" style={{ fontSize: "13px" }}>
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-3 text-slate-400 text-xs">
                        <span>{edu.location}</span>
                        <span className="text-slate-600">•</span>
                        <span
                          className="px-2 py-0.5 rounded-full"
                          style={{ background: "#112240", color: "#93c5fd", border: "1px solid #1e3a5f" }}
                        >
                          {edu.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "#1a0f50" }}
              >
                <Award size={18} className="text-[#a5b4fc]" />
              </div>
              <h3 className="text-white font-semibold" style={{ fontSize: "18px" }}>
                Certifications
              </h3>
            </motion.div>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.1 }}
                  className="rounded-2xl p-6 border border-[#2e1f6e]/60 hover:border-[#818cf8]/30 transition-all duration-300"
                  style={{ background: "#0d1b2e" }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                      style={{ background: "#1a1055" }}
                    >
                      {cert.icon}
                    </div>
                    <div>
                      <h4
                        className="text-white font-bold mb-1 leading-tight"
                        style={{ fontSize: "15px" }}
                      >
                        {cert.title}
                      </h4>
                      <p className="text-[#a5b4fc] font-medium mb-1" style={{ fontSize: "13px" }}>
                        {cert.issuer}
                      </p>
                      <span
                        className="inline-block text-xs px-2 py-0.5 rounded-full"
                        style={{ background: "#1a1055", color: "#c4b5fd", border: "1px solid #2e1f6e" }}
                      >
                        {cert.period}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Extra info card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-4 rounded-2xl p-6 border border-[#14532d]/60"
              style={{ background: "#0d2e1a" }}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">🚀</span>
                <div>
                  <p className="text-[#4ade80] font-semibold mb-1" style={{ fontSize: "14px" }}>
                    Continuous Learner
                  </p>
                  <p className="text-slate-400" style={{ fontSize: "12.5px" }}>
                    Constantly upskilling through hands-on projects, open-source contributions, and
                    staying current with the ever-evolving web ecosystem.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
