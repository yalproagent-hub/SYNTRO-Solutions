"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const options = [
  {
    title: "Option 01: We do the work for you",
    subtitle: "Managed support + marketing execution",
    bullets: ["Virtual assistance", "Operations support", "Digital marketing execution"],
    href: "#contact",
    gradient: "linear-gradient(135deg, #1C6BF4, #26B58F)",
  },
  {
    title: "Option 02: We build your team for you",
    subtitle: "Offshore recruitment",
    bullets: ["Talent sourcing & screening", "Role matching", "Hiring support"],
    href: "#contact",
    gradient: "linear-gradient(135deg, #26B58F, #22C55E)",
  },
];

export default function HowWeWorkSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">

      {/* BG orb effects */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(28,107,244,0.06) 0%, transparent 70%)" }}
      />
      <div className="absolute bottom-0 left-[10%] w-[300px] h-[300px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(38,181,143,0.06) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge-pill mx-auto"
          >
            HOW WE WORK
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-dark-navy mt-4 mb-6"
          >
            Two ways to scale{" "}
            <span style={{
              background: "linear-gradient(135deg, #1C6BF4, #26B58F, #22C55E)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              your business
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500"
          >
            Flexible solutions based on your growth stage.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {options.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-10 rounded-3xl border border-gray-100 hover:border-blue-100 hover:shadow-[0_20px_60px_rgba(28,107,244,0.08)] transition-all duration-500 hover:-translate-y-1 group"
            >
              {/* Top gradient bar */}
              <div
                className="w-12 h-1.5 rounded-full mb-6"
                style={{ background: option.gradient }}
              />

              <h3 className="text-2xl font-bold text-dark-navy mb-2">
                {option.title}
              </h3>
              <p
                className="font-semibold mb-8 text-sm"
                style={{
                  background: option.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {option.subtitle}
              </p>

              <ul className="space-y-4 mb-10">
                {option.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-3 text-slate-600 text-sm">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center text-white shrink-0"
                      style={{ background: option.gradient }}
                    >
                      <Check size={12} strokeWidth={3} />
                    </div>
                    {bullet}
                  </li>
                ))}
              </ul>

              <Link
                href={option.href}
                className="inline-flex items-center gap-2 font-bold group/btn text-sm"
                style={{
                  background: option.gradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Learn more
                <ArrowRight size={16} className="text-primary-blue transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}