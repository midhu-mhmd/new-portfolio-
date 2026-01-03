import type { Metadata } from "next";
import { Inter, Bebas_Neue, Oswald } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import SmoothScrollWrapper from "@/components/SmoothScrollWrapper";

// 1. Font Configurations
const oswald = Oswald({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-oswald',
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
});

const font = Inter({
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: {
    template: "%s | Midhu — Full Stack Developer",
    default: "Midhu | MERN Stack Developer",
  },

  description: "A passionate MERN Stack Developer crafting high-performance web applications. Specializing in scalable backend logic, interactive React interfaces, and modern web experiences.",

  keywords: [
    "MERN Stack Developer",
    "Full Stack Web Developer",
    "React.js Developer",
    "Node.js Backend",
    "Next.js Portfolio",
    "Web Application Development",
    "Creative Coder",
    "JavaScript Enthusiast"
  ],


  openGraph: {
    title: "Midhu | MERN Stack Developer",
    description: "Building the next generation of web apps with Node, React, and Mongo.",
    url: "https://your-domain.com",
    siteName: "Midhu Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="selection:bg-[#111111] overflow-hidden selection:text-white">
      <body
        className={`
          ${font.className} 
          ${bebas.variable} 
          ${oswald.variable} 
          antialiased 
          bg-[#E2E2E2] 
          text-[#111111]
        `}
      >
        {/* The Wrapper makes everything inside it scroll smoothly */}
        <SmoothScrollWrapper>
          <ResponsiveNav />
          <main>
            {children}
          </main>
        </SmoothScrollWrapper>
      </body>
    </html>
  );
}
