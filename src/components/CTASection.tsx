"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="py-24 bg-dark-navy text-white overflow-hidden relative">

      {/* BG orb effects */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(28,107,244,0.08) 0%, transparent 70%)" }}
      />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(38,181,143,0.07) 0%, transparent 70%)" }}
      />

      {/* Decorative curve */}
      <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
        <svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 200C100 150 200 180 300 100C400 20 400 0 400 0V200H0Z" fill="url(#paint0_linear_cta)"/>
          <defs>
            <linearGradient id="paint0_linear_cta" x1="200" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1C6BF4"/>
              <stop offset="1" stopColor="#26B58F"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Dot grid */}
      <svg className="absolute left-0 top-0 w-[30%] h-full pointer-events-none z-0 opacity-[0.04]"
        viewBox="0 0 400 600">
        {Array.from({ length: 10 }).map((_, row) =>
          Array.from({ length: 8 }).map((_, col) => (
            <circle key={`${row}-${col}`} cx={col * 50 + 25} cy={row * 60 + 25} r="1.5" fill="#ffffff" />
          ))
        )}
      </svg>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left: Heading */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-3xl md:text-5xl font-bold leading-tight mb-4"
          >
            Ready to build with the <br />
            right{" "}
            <span style={{
              background: "linear-gradient(135deg, #1C6BF4, #26B58F, #22C55E)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              support
            </span>{" "}
            behind you?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg"
          >
            Let's build a system that helps your business run smoother and grow faster.
          </motion.p>
        </motion.div>

        {/* Right: Button */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <button
            className="group flex items-center gap-3 px-10 py-4 rounded-full text-white font-black text-lg transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(28,107,244,0.5)] shadow-[0_10px_30px_rgba(28,107,244,0.3)]"
            style={{ background: "linear-gradient(135deg, #1C6BF4, #26B58F, #22C55E)" }}
            data-cal-link="thameem-smta-rey0gp/discovery-call"
            data-cal-config='{"layout":"month_view"}'
          >
            Book a Call
            <ArrowRight size={22} className="transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}