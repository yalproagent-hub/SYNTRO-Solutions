"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Why Syntro", href: "#why-syntro" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/Syntro.png"
            alt="Syntro Solutions Logo"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
          />
          <div className="flex flex-col leading-none">
            <span className="text-xl font-bold text-dark-navy tracking-tight">SYNTRO</span>
            <span
              className="text-[10px] font-medium tracking-[0.2em] uppercase"
              style={{
                background: "linear-gradient(135deg, #1C6BF4, #26B58F, #22C55E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-charcoal hover:text-primary-blue transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <button
            className="group flex items-center gap-2 px-6 py-2.5 rounded-full text-white font-black text-sm transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(28,107,244,0.35)] shadow-[0_6px_20px_rgba(28,107,244,0.25)]"
            style={{ background: "linear-gradient(135deg, #1C6BF4, #26B58F, #22C55E)" }}
            data-cal-link="thameem-smta-rey0gp/discovery-call"
            data-cal-config='{"layout":"month_view"}'
          >
            Book a Call
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-dark-navy"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl md:hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-charcoal hover:text-primary-blue transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button
                className="group flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-black text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(28,107,244,0.35)]"
                style={{ background: "linear-gradient(135deg, #1C6BF4, #26B58F, #22C55E)" }}
                data-cal-link="thameem-smta-rey0gp/discovery-call"
                data-cal-config='{"layout":"month_view"}'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Call
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}