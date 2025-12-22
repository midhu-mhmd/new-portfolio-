
export default function ContactPage() {
  return (
    <div className="className={`${oswald.className} relative min-h-screen w-full text-zinc-900 font-sans flex flex-col overflow-hidden selection:bg-black selection:text-[#AAB6A2]">

      {/* --- Main Center Content --- */}
      <main className="grow flex flex-col justify-center items-center z-10 relative mt-10 md:mt-0">
        
        {/* Secondary Nav (Centered above name) */}
        <div className="flex gap-8 md:gap-16 text-[10px] md:text-xs font-medium tracking-widest text-zinc-200 uppercase mb-2 md:mb-6 mix-blend-hard-light">
          {['Home', 'About', 'Skills', 'Projects'].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        {/* Big Name Title */}
        <h1 className="text-[12vw] md:text-[5rem] leading-[0.85] font-bold uppercase tracking-tighter font-['Oswald',sans-serif] transform scale-y-110 text-black">
          midhu_mhmd
        </h1>

        {/* Social Links */}
        <div className="flex gap-8 mt-6 md:mt-8 text-xs md:text-sm font-semibold uppercase tracking-wide">
          {['LinkedIn', 'Telegram', 'WhatsApp'].map((link) => (
            <a 
              key={link} 
              href="#" 
              className="underline decoration-1 underline-offset-4 hover:decoration-2 transition-all"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Email */}
        <div className="mt-6 md:mt-8">
          <a href="mailto:mhmdmidhu@gmail.com" className="text-sm md:text-lg font-bold uppercase tracking-tight hover:opacity-70 transition-opacity">
            Email: mhmdmidhu@gmail.com
          </a>
        </div>
      </main>

      {/* --- Footer Area --- */}
      <div className="w-full z-10 mt-auto">
        
        {/* Massive Footer Text */}
        <div className="w-full overflow-hidden leading-none">
          <h2 className="text-[7vw] font-bold uppercase text-center text-zinc-800/80 tracking-tighter whitespace-nowrap font-['Oswald',sans-serif]">
            Mern Stack Developer
          </h2>
        </div>

        {/* Footer Metadata */}
        <footer className="flex flex-col md:flex-row justify-between items-center px-6 py-6 md:px-10 text-[10px] md:text-[11px] uppercase tracking-wide text-zinc-700 border-t border-zinc-800/5 mt-2">
          
          <div className="mb-2 md:mb-0">
            2025 All right reserved. Midhu_Mhmd
          </div>

          

          {/* "Fnsh" Pill Button */}
          <button className="border border-zinc-800 rounded-full px-4 py-1 hover:bg-zinc-800 hover:text-[#AAB6A2] transition-colors">
            fnsh .
          </button>
        </footer>
      </div>
    </div>
  );
}
