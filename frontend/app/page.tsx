import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Stacks } from "@/components/Stacks";

export default function Home() {
  return (
    <main id="conteudo">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Stacks />
      <Contact />
    </main>
  );
}
