import { Button } from "../components/Button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Link } from "react-router-dom"

export function Hero() {
  return (
    <section className="h-175 relative  pt-24 md:pt-32  ">
      <div className="container flex flex-col items-center text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          <span className="block text-secondary">Hi, I'm </span>
          <span className="block text-primary">Johan Aponte</span>
        </h1>
        <p className="mt-6 max-w-[42rem] text-muted-foreground text-xl">
          A passionate full-stack developer specializing in building exceptional digital experiences.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild className="hover:bg-secondary/80 hover:text-bg-primary">
            <a href="#projects">
              <p>My Work <ArrowRight className="ml-2 h-4 w-4" /></p>
            </a>
          </Button>
          <Button variant="outline" asChild className="hover:bg-secondary/80 hover:text-bg-primary">
            <Link to="#contact">Contact Me</Link>
          </Button>
        </div>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link to="https://github.com/wdjohanwd" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-secondary" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link to="https://linkedin.com/in/johan-aponte-6b74a8329" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-secondary" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link to="mailto:wdjohanwd@gmail.com">
              <Mail className="h-5 w-5 text-secondary" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

