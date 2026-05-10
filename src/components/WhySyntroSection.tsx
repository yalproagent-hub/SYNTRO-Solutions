"use client";

import { motion } from "framer-motion";
import { Layers, TrendingUp, Globe } from "lucide-react";

const features = [
  {
    title: "Structured Execution",
    description: "We bring systems and clarity to your operations so everything runs smoothly.",
    icon: Layers,
    gradient: "linear-gradient(135deg, #1C6BF4, #26B58F)",
  },
  {
    title: "Built to Scale",
    description: "Our support grows with you, adapting to your business at every stage.",
    icon: TrendingUp,
    gradient: "linear-gradient(135deg, #26B58F, #22C55E)",
  },
  {
    title: "Global Delivery",
    description: "Talented teams, remote-first delivery, and seamless communication.",
    icon: Globe,
    gradient: "linear-gradient(135deg, #1C6BF4, #22C55E)",
  },
];

export default function WhySyntroSection() {
  return (
    <section id="why-syntro" className="py-24 bg-[#f7fbff] relative overflow-hidden">

      {/* BG orb effects */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(28,107,244,0.06) 0%, transparent 70%)" }}
      />
      <div className="absolute bottom-0 left-[10%] w-[300px] h-[300px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(38,181,143,0.06) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="badge-pill"
            >
              WHY SYNTRO
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-dark-navy mt-4 mb-6 leading-tight"
            >
              More than support. <br />
              We build{" "}
              <span style={{
                background: "linear-gradient(135deg, #1C6BF4, #26B58F, #22C55E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                systems.
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 text-[16px] leading-relaxed max-w-sm"
            >
              Syntro partners with growing businesses to deliver structured, scalable, and results-driven support systems.
            </motion.p>
          </div>

          {/* RIGHT - Feature Cards */}
          <div className="grid grid-cols-1 gap-5">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-6 bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-100 hover:shadow-[0_15px_40px_rgba(28,107,244,0.07)] transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0 transition-transform duration-300 hover:scale-110"
                  style={{ background: feature.gradient }}
                >
                  <feature.icon size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark-navy mb-2">{feature.title}</h3>
                  <p className="text-charcoal/70 text-sm leading-relaxed max-w-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}