import { Github, Linkedin, Mail, Globe, Heart } from "lucide-react";
import { PROFILE } from "./data";

export function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      className="py-12 px-6 border-t border-[#1e3a5f]/40"
      style={{ background: "#050d1a" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-white text-sm"
              style={{
                background: "linear-gradient(135deg, #1e40af, #3b82f6)",
              }}
            >
              {PROFILE.initials}
            </div>
            <div>
              <p className="text-white font-semibold text-sm">{PROFILE.name}</p>
              <p className="text-slate-500 text-xs">{PROFILE.title}</p>
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: PROFILE.github },
              { icon: Linkedin, href: PROFILE.linkedin },
              { icon: Mail, href: `mailto:${PROFILE.email}` },
              { icon: Globe, href: PROFILE.website },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 border border-slate-800 hover:text-[#60a5fa] hover:border-[#60a5fa]/30 transition-all duration-200"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-[#1e3a5f]/30 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            © {year} {PROFILE.name}. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs flex items-center gap-1">
            Built with{" "}
            <Heart size={10} className="text-[#fb7185]" fill="#fb7185" /> using
            React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
