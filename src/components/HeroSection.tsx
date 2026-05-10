"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center bg-[#f7fbff] overflow-hidden pt-10 pb-16">
      
      {/* EFFECT 1: Large soft gradient orb - top left */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(28,107,244,0.08) 0%, transparent 70%)" }}
      />
      
      {/* EFFECT 2: Smaller teal orb - bottom left */}
      <div className="absolute bottom-0 left-[20%] w-[350px] h-[350px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(38,181,143,0.07) 0%, transparent 70%)" }}
      />

      {/* EFFECT 3: Elegant curved SVG lines - left side (like mockup) */}
      <svg className="absolute left-0 top-0 w-[55%] h-full pointer-events-none z-0" 
        viewBox="0 0 700 600" preserveAspectRatio="xMinYMid meet">
        <path d="M -100 500 Q 150 350 300 400 Q 450 450 600 300" 
          stroke="#1C6BF4" strokeWidth="1.5" fill="none" opacity="0.12"/>
        <path d="M -100 580 Q 200 420 380 460 Q 520 490 700 380" 
          stroke="#26B58F" strokeWidth="1" fill="none" opacity="0.1"/>
        <path d="M -50 450 Q 180 300 350 360 Q 500 410 680 280" 
          stroke="#1C6BF4" strokeWidth="0.8" fill="none" opacity="0.07"/>
      </svg>

      {/* EFFECT 4: Subtle dot grid - right background */}
      <svg className="absolute right-0 top-0 w-[50%] h-full pointer-events-none z-0 opacity-[0.035]"
        viewBox="0 0 600 600">
        {Array.from({ length: 12 }).map((_, row) =>
          Array.from({ length: 12 }).map((_, col) => (
            <circle key={`${row}-${col}`} cx={col * 50 + 25} cy={row * 50 + 25} r="1.5" fill="#1C6BF4" />
          ))
        )}
      </svg>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center">
        
        {/* LEFT COLUMN */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
          className="flex flex-col items-start lg:w-[48%] py-12 lg:py-16 lg:pl-8"
        >
          <motion.div
            variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }}
            className="badge-pill mb-8"
          >
            BUILD. SCALE. GROW.
          </motion.div>

          <motion.h1
            variants={{ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } }}
            className="text-[48px] md:text-[68px] lg:text-[74px] font-black text-dark-navy leading-[1.05] tracking-tighter mb-8"
          >
            Build Smarter.<br />
            Scale <span style={{ background: "linear-gradient(135deg, #1C6BF4, #26B58F, #22C55E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Faster.</span>
          </motion.h1>

          <motion.p
            variants={{ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } }}
            className="text-[18px] text-slate-500 leading-[1.8] max-w-md mb-10 font-medium"
          >
            Syntro helps businesses streamline operations, grow their digital presence, and build high-performing remote teams — all backed by real industry experience.
          </motion.p>

          <motion.div
            variants={{ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } }}
            className="flex flex-wrap gap-5 mb-14"
          >
            <button 
              className="group relative px-10 py-4.5 text-white rounded-full font-black transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(28,107,244,0.35)] flex items-center gap-3 shadow-[0_10px_30px_rgba(28,107,244,0.25)]"
style={{ background: "linear-gradient(135deg, #1C6BF4, #26B58F, #22C55E)" }}              data-cal-link="thameem-smta-rey0gp/discovery-call"
              data-cal-config='{"layout":"month_view"}'
            >
              Book a Call
              <ArrowRight size={22} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button 
              onClick={scrollToServices}
              className="group px-10 py-4.5 bg-white border border-gray-200 text-dark-navy rounded-xl font-black transition-all duration-300 hover:border-primary-blue hover:bg-slate-50 shadow-sm flex items-center gap-3"
            >
              Explore Services
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1 text-slate-400" />
            </button>
          </motion.div>

          {/* Avatar Stack */}
          <motion.div
            variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }}
            className="flex items-center gap-5"
          >
            <div className="flex -space-x-3">
              {["/avatar1.png", "/avatar2.png", "/avatar3.png"].map((src, i) => (
                <div key={i} className="w-11 h-11 rounded-full border-2 border-white shadow-lg overflow-hidden relative">
                  <Image src={src} alt="Trusted Executive" fill className="object-cover" priority />
                </div>
              ))}
              <div className="w-11 h-11 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center text-white font-black text-[10px] shadow-lg relative z-10">
                +12
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-dark-navy font-black text-sm tracking-tight leading-none">500+ businesses scaled</span>
              <span className="text-slate-400 text-[11px] font-bold uppercase tracking-widest mt-1.5">Trusted globally</span>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: IMAGE */}
        <div className="relative w-full lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[55%] h-[450px] lg:h-[90%] z-0 flex items-center justify-end pointer-events-none select-none overflow-visible">
          <div className="relative w-full h-full max-w-[800px]">
            <Image
              src="/hero-laptop-v3.png"
              alt="Syntro Dashboard Mockup"
              fill
              priority
              className="object-contain object-right"
            />
          </div>
        </div>

      </div>
    </section>
  );
}