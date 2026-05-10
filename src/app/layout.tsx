import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Syntro Solutions | Build Smarter. Scale Faster.",
  icons: {
    icon: "/Syntro.png",
    apple: "/Syntro.png",
  },
  description: "Syntro helps businesses streamline operations, grow their digital presence, and build high-performing remote teams — all backed by real industry experience.",
  keywords: ["virtual assistant", "business operations", "digital marketing", "remote teams", "business support"],
  openGraph: {
    title: "Syntro Solutions | Build Smarter. Scale Faster.",
    description: "Streamline operations, grow your digital presence, build high-performing remote teams.",
    url: "https://syntrosolutions.co",
    siteName: "Syntro Solutions",
    images: [{ url: "https://syntrosolutions.vercel.app/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syntro Solutions",
    description: "Build smarter operations. Scale without the overhead.",
    images: ["https://syntrosolutions.vercel.app/og-image.png"],
  },
};

declare global {
  interface Window {
    Cal: any;
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-poppins antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        
        <Script
          id="cal-embed"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init"); Cal("init", {origin:"https://cal.com"});`,
          }}
        />
      </body>
    </html>
  );
}
