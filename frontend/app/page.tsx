import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Stacks } from "@/components/Stacks";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Stacks />
      <Projects />
      <Contact />
    </>
  );
}
