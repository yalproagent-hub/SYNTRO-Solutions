"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Globe } from "lucide-react";
import { Linkedin, Instagram } from "./Icons";
import NewsletterForm from "./NewsletterForm";

const quickLinks = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Why Syntro", href: "#why-syntro" },
  { name: "Process", href: "#process" },
  { name: "About Us", href: "#why-syntro" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-navy text-white pt-20 pb-10 border-t border-white/5 relative overflow-hidden">

      {/* BG orb effects */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(28,107,244,0.07) 0%, transparent 70%)" }}
      />
      <div className="absolute bottom-0 right-[10%] w-[350px] h-[350px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(38,181,143,0.06) 0%, transparent 70%)" }}
      />

      {/* Dot grid */}
      <svg className="absolute right-0 top-0 w-[25%] h-full pointer-events-none z-0 opacity-[0.03]"
        viewBox="0 0 400 600">
        {Array.from({ length: 10 }).map((_, row) =>
          Array.from({ length: 8 }).map((_, col) => (
            <circle key={`${row}-${col}`} cx={col * 50 + 25} cy={row * 60 + 25} r="1.5" fill="#ffffff" />
          ))
        )}
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/Syntro.png"
                alt="Syntro Solutions Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <div className="flex flex-col leading-none">
                <span className="text-xl font-bold tracking-tight">SYNTRO</span>
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
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
              Operational support and digital solutions that help businesses build, scale, and grow.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href="https://www.linkedin.com/company/syntro-solutions"
                target="_blank"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{}}
                onMouseEnter={e => (e.currentTarget.style.background = "linear-gradient(135deg, #1C6BF4, #26B58F)")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
              >
                <Linkedin size={16} />
              </Link>
              <Link
                href="https://www.instagram.com/syntro.solutions"
                target="_blank"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 hover:scale-110"
                onMouseEnter={e => (e.currentTarget.style.background = "linear-gradient(135deg, #26B58F, #22C55E)")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
              >
                <Instagram size={16} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500">Quick Links</h4>
            <div className="grid grid-cols-2 gap-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 text-xs transition-all duration-200 hover:translate-x-1"
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #1C6BF4, #26B58F, #22C55E)";
                    (e.currentTarget as HTMLElement).style.webkitBackgroundClip = "text";
                    (e.currentTarget as HTMLElement).style.webkitTextFillColor = "transparent";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = "none";
                    (e.currentTarget as HTMLElement).style.webkitTextFillColor = "#9ca3af";
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500">Contact Us</h4>
            <div className="flex flex-col gap-4 text-xs text-gray-400">
              <Link
                href="mailto:hello@syntrosolutions.co"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Mail
                  size={16}
                  style={{ color: "#1C6BF4" }}
                />
                hello@syntrosolutions.co
              </Link>
              <div className="flex items-center gap-3">
                <Globe
                  size={16}
                  style={{ color: "#26B58F" }}
                />
                Global | Remote-First
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500">Newsletter</h4>
            <p className="text-gray-400 text-xs">
              Stay updated with insights and tips to grow your business.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom border gradient line */}
        <div
          className="w-full h-px mb-8"
          style={{ background: "linear-gradient(90deg, transparent, #1C6BF4, #26B58F, #22C55E, transparent)", opacity: 0.3 }}
        />

        <div className="text-center">
          <p className="text-gray-500 text-[10px] tracking-widest uppercase">
            © {currentYear} Syntro Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}