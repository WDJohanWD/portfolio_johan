import { Button } from "../components/Button";
import { Github, Linkedin, Mail, FileUser } from "lucide-react";
import ScrollDown from "../components/ScrollDownArrow";
import { useTranslation } from "react-i18next";


export function Hero() {

  const { t } = useTranslation("hero");
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center py-24">
      
      <div className="container mx-auto max-w-full px-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          <span className="block text-secondary italic">{t("title")} </span>
          <span className="block text-primary">{t("name")}</span>
        </h1>
        <p className="mt-6 max-w-[42rem] text-muted-foreground text-xl mx-auto " style={{ "textShadow": 'var(--text-shadow)' }}>
          {t("description")}</p>

        {/* Botones principales */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="#projects" className="flex items-center">
            <Button className="bg-secondary/80 text-bg-primary">
              {t("button1")}
            </Button>
          </a>
          <a href="#contact">
            <Button variant="outline" className="bg-secondary/80 text-bg-primary">
            {t("button2")}
            </Button>
          </a>
        </div>

        {/* Botones de redes sociales */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="https://github.com/wdjohanwd" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" className="bg-bg-primary" size="icon">
              <Github className="h-5 w-5 text-secondary" />
              <span className="sr-only">GitHub</span>
            </Button>
          </a>
          <a href="https://linkedin.com/in/johan-aponte-6b74a8329" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" className="bg-bg-primary" size="icon">
              <Linkedin className="h-5 w-5 text-secondary" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </a>
          <a href="mailto:wdjohanwd@gmail.com">
            <Button variant="ghost" className="bg-bg-primary" size="icon">
              <Mail className="h-5 w-5 text-secondary" />
              <span className="sr-only">Email</span>
            </Button>
          </a>
          <a href="cv.pdf" download={true}>
            <Button variant="ghost" className="bg-bg-primary" size="icon">
              <FileUser className="h-5 w-5 text-secondary" />
              <span className="sr-only">CV</span>
            </Button>
          </a>
        </div>
        <ScrollDown className="hidden md:block" targetId="about" />

      </div>
    </section>
  );
}
