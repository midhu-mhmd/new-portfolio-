import Hero from "./hero"
import About from "./about"
import Skills from "./skills"
import Projects from "./projects"
import Contact from "./contact"
import Footer from "./footer"
import SpatialSwingWrapper from "./transition"
export default function Page() {
  return (
    <main className="bg-[#E8E8E3]"> {/* Global background color */}
      <Hero />
      
      {/* These sections will now "tilt" into view as you scroll */}
      <SpatialSwingWrapper> 
        <About />
      </SpatialSwingWrapper>

      <SpatialSwingWrapper>
        <Skills />
      </SpatialSwingWrapper>

      <SpatialSwingWrapper>
        <Projects />
      </SpatialSwingWrapper>

      <SpatialSwingWrapper>
        <Contact />
      </SpatialSwingWrapper>

      <Footer />
    </main>
  );
}
