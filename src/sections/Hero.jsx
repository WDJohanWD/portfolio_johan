import { Button } from "../components/Button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center py-24">
      <div className="container">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          <span className="block text-secondary">Hi, I'm </span>
          <span className="block text-primary">Johan Aponte</span>
        </h1>
        <p className="mt-6 max-w-[42rem] text-muted-foreground text-xl mx-auto">
          A passionate full-stack developer specializing in building exceptional digital experiences.
        </p>

        {/* Botones principales */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button className="hover:bg-secondary/80 hover:text-bg-primary">
            <a href="#projects" className="flex items-center">
              My Work <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" className="hover:bg-secondary/80 hover:text-bg-primary">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>

        {/* Botones de redes sociales */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button variant="ghost" size="icon">
            <a href="https://github.com/wdjohanwd" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-secondary" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon">
            <a href="https://linkedin.com/in/johan-aponte-6b74a8329" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-secondary" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon">
            <a href="mailto:wdjohanwd@gmail.com">
              <Mail className="h-5 w-5 text-secondary" />
              <span className="sr-only">Email</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
