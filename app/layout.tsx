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
  title: "Midhu's Portfolio",
  description: "MERN Stack Developer & Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="selection:bg-[#111111] selection:text-white">
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
