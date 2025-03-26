import { Button } from "./Button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import {Link} from "react-router-dom"

export function Footer() {
  return (
    <footer className="border-t py-8 md:py-12 text-secondary ">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Johan Fernando Aponte Valencia. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link to="https://github.com/wdjohanwd" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link to="https://www.linkedin.com/in/johan-aponte-6b74a8329/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          
          <Button variant="ghost" size="icon" asChild>
            <Link to="mailto:wdjohanwd@gmail.com">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}

