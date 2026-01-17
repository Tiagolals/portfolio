import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
