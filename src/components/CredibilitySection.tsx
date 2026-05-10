"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    name: "James Carter",
    role: "CEO, Carter Logistics",
    quote: "Syntro Solutions has transformed how we manage operations. Their support is reliable, proactive, and top-quality.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sarah Mitchell",
    role: "Founder, Scale Well",
    quote: "The team is professional, fast, and always one step ahead. Highly recommended!",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Daniel Reyes",
    role: "Co-Founder, BrightPath",
    quote: "Their systems and support helped us save time and scale faster than we expected.",
    img: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    name: "Aisha Patel",
    role: "Operations Head, NovaCorp",
    quote: "Working with Syntro has been a game-changer. They understand our needs and deliver beyond expectations.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Marcus Liu",
    role: "Director, FinEdge",
    quote: "Exceptional service and deep expertise. Syntro is the partner every growing business needs.",
    img: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Priya Nair",
    role: "CEO, LaunchBase",
    quote: "From day one, Syntro felt like an extension of our own team. Truly remarkable results.",
    img: "https://randomuser.me/api/portraits/women/90.jpg",
  },
];

const doubled = [...testimonials, ...testimonials];

export default function CredibilitySection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame: number;
    let pos = 0;

    const step = () => {
      if (!paused) {
        pos += 0.5;
        const half = track.scrollWidth / 2;
        if (pos >= half) pos = 0;
        track.style.transform = `translateX(-${pos}px)`;
      }
      frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [paused]);

  return (
    <section className="py-24 bg-[#f7fbff] overflow-hidden relative">

      {/* BG orb effects */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(28,107,244,0.06) 0%, transparent 70%)" }}
      />
      <div className="absolute bottom-0 right-[10%] w-[300px] h-[300px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(38,181,143,0.06) 0%, transparent 70%)" }}
      />

      {/* Heading */}
      <div className="container mx-auto px-6 mb-16 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge-pill mx-auto"
          >
            TRUSTED BY BUSINESSES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-dark-navy mt-4 mb-6 leading-tight"
          >
            Built on trust. <br />
            Focused on{" "}
            <span style={{
              background: "linear-gradient(135deg, #1C6BF4, #26B58F, #22C55E)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              results.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-[16px] leading-relaxed"
          >
            We partner with businesses worldwide to deliver high-quality support and create real impact.
          </motion.p>
        </div>
      </div>

      {/* Carousel */}
      <div
        className="relative w-full"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Left fade */}
        <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #f7fbff, transparent)" }}
        />
        {/* Right fade */}
        <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #f7fbff, transparent)" }}
        />

        <div
          className="flex"
          ref={trackRef}
          style={{ willChange: "transform", width: "max-content" }}
        >
          {doubled.map((item, index) => (
            <div
              key={index}
              className="bg-white mx-3 p-7 rounded-3xl border border-gray-100 hover:border-blue-100 hover:shadow-[0_15px_40px_rgba(28,107,244,0.07)] transition-all duration-300 flex flex-col justify-between"
              style={{ width: "320px", flexShrink: 0 }}
            >
              <div>
                {/* Quote icon gradient */}
                <div className="mb-5">
                  <Quote
                    size={28}
                    style={{
                      color: "#1C6BF4",
                      opacity: 0.2,
                    }}
                  />
                </div>
                <p className="text-charcoal/80 text-sm leading-relaxed italic mb-7">
                  "{item.quote}"
                </p>
              </div>
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover shadow-sm ring-2 ring-blue-50"
                />
                <div>
                  <h4 className="text-sm font-bold text-dark-navy">{item.name}</h4>
                  <p className="text-[10px] text-charcoal/50 uppercase font-semibold tracking-wider">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}