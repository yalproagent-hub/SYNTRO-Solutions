"use client";

import { motion } from "framer-motion";
import { User, Settings, Megaphone, ArrowRight } from "lucide-react";


const services = [
  {
    title: "Virtual Assistants",
    description: "Skilled virtual support for admin, operations, and daily tasks that keep your business moving.",
    icon: User,
    gradient: "linear-gradient(135deg, #1C6BF4, #26B58F)",
    id: "va",
  },
  {
    title: "Operations Support",
    description: "We streamline workflows, manage processes, and bring structure to your business operations.",
    icon: Settings,
    gradient: "linear-gradient(135deg, #26B58F, #22C55E)",
    id: "ops",
  },
  {
    title: "Digital Marketing",
    description: "From content to campaigns, we help you grow your brand and reach the right audience.",
    icon: Megaphone,
    gradient: "linear-gradient(135deg, #1C6BF4, #22C55E)",
    id: "marketing",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge-pill mx-auto"
          >
            WHAT WE DO
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-dark-navy mt-4"
          >
            Solutions that support your growth
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-blue-100 hover:shadow-[0_20px_60px_rgba(28,107,244,0.08)] transition-all duration-300 hover:-translate-y-1"
            >
              <div
  className="w-14 h-14 rounded-xl flex items-center justify-center mb-8 transition-all duration-300 group-hover:scale-110 text-white shadow-lg"
  style={{ background: service.gradient }}
>
  <service.icon size={28} strokeWidth={2} />
</div>
              <h3 className="text-2xl font-bold text-dark-navy mb-4">{service.title}</h3>
              <p className="text-charcoal/70 mb-8 leading-relaxed">
                {service.description}
              </p>
              <button className="flex items-center gap-2 font-bold hover:gap-3 transition-all duration-300"
  style={{ background: "linear-gradient(135deg, #1C6BF4, #26B58F, #22C55E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
>
  Learn more
  <ArrowRight size={18} className="text-primary-blue" />
</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
