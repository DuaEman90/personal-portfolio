import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"; 


function App() {
  return (
    <main className="bg-[#040813]">
      <Navbar />
      <Hero />
      <About/>
   
      {/* Temporary sections */}
      <section id="about" className="min-h-screen bg-[#080d18]" />
      <section id="skills" className="min-h-screen bg-[#040813]" />
      <section id="projects" className="min-h-screen bg-[#080d18]" />
      <section id="experience" className="min-h-screen bg-[#040813]" />
      <section id="testimonials" className="min-h-screen bg-[#080d18]" />
      <section id="contact" className="min-h-screen bg-[#040813]" />
    </main>
  );
}

export default App;