"use client";

import { motion } from "framer-motion";
import { User, Settings, Send } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Understand Your Needs",
    description: "We learn about your business, challenges, and goals.",
    icon: User,
    gradient: "linear-gradient(135deg, #1C6BF4, #26B58F)",
  },
  {
    number: "2",
    title: "Build Your Support System",
    description: "We design a tailored system and assign the right support.",
    icon: Settings,
    gradient: "linear-gradient(135deg, #26B58F, #22C55E)",
  },
  {
    number: "3",
    title: "Execute & Optimise",
    description: "We execute, monitor, and continuously improve results.",
    icon: Send,
    gradient: "linear-gradient(135deg, #1C6BF4, #22C55E)",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="process" className="py-24 bg-[#f7fbff] relative overflow-hidden">

      {/* BG orb effects */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(28,107,244,0.06) 0%, transparent 70%)" }}
      />
      <div className="absolute bottom-0 right-[10%] w-[300px] h-[300px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(38,181,143,0.06) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge-pill mx-auto"
          >
            OUR PROCESS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-dark-navy mt-4"
          >
            How we{" "}
            <span style={{
              background: "linear-gradient(135deg, #1C6BF4, #26B58F, #22C55E)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              work.
            </span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Connector line desktop */}
          <div className="absolute top-[48px] left-[16%] w-[68%] h-[2px] hidden lg:block z-0"
            style={{ background: "linear-gradient(90deg, #1C6BF4, #26B58F, #22C55E)", opacity: 0.2 }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-8">
                  {/* Step Number */}
                  <div
                    className="absolute -top-2 -left-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold z-20 shadow-md"
                    style={{ background: step.gradient }}
                  >
                    {step.number}
                  </div>

                  {/* Icon Circle */}
                  <div
                    className="w-24 h-24 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_10px_40px_rgba(28,107,244,0.15)] group-hover:scale-105"
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-500"
                      style={{ background: step.gradient }}
                    >
                      <step.icon size={24} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-dark-navy mb-4">
                  {step.title}
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed max-w-[280px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}