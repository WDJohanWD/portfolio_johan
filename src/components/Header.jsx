import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { Button } from "./Button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 max-w-full mx-auto">
      <div className="absolute inset-0 border-b border-secondary bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60"></div>

      <div className="relative container flex h-16 items-center justify-between px-3 text-secondary">
        <div className="flex items-center gap-2">
          <Link to="/" className="font-bold text-xl text-secondary transition-colors">
            Johan Aponte
          </Link>
        </div>

        <nav className="hidden md:flex gap-6">
          <a href="#about" className="text-sm font-medium text-primary transition-colors">
            About
          </a>
          <a href="#skills" className="text-sm font-medium text-primary transition-colors">
            Skills
          </a>
          <a href="#projects" className="text-sm font-medium text-primary transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-sm font-medium text-primary transition-colors">
            Contact
          </a>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {isMenuOpen && (
        <div className="relative z-40 md:hidden">
          <div className="absolute inset-0 border-b border-secondary bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60"></div>

          <nav className="relative container flex flex-col py-4 px-3 text-secondary">
            <a
              href="#about"
              className="py-2 text-sm font-medium  transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#skills"
              className="py-2 text-sm font-medium  transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="py-2 text-sm font-medium  transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="py-2 text-sm font-medium  transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

