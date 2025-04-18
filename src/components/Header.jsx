import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { Button } from "./Button"
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../translations/index";
import { LuChevronDown } from "react-icons/lu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { i18n, t } = useTranslation("navbar");

  const [lng, setLng] = useState(i18n.language);

  const onChangeLang = (e) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
    setLng(lang_code);
  };
  
  return (
    <header className="sticky top-0 z-50 max-w-full mx-auto">
      <div className="absolute inset-0 border-b border-secondary bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60"></div>

      <div className="relative container flex h-16 items-center justify-between px-3 text-secondary">
        <div className="flex items-center gap-2">
          <Link to="/portfolio_johan" className="font-bold text-xl text-secondary transition-colors">
            Johan Aponte
          </Link>
        </div>

        <nav className="hidden md:flex gap-6">
          <a href="#about" className="text-sm font-medium text-primary transition-colors">
            {t("About")}
          </a>
          <a href="#skills" className="text-sm font-medium text-primary transition-colors">
            {t("Skills")}
          </a>
          <a href="#projects" className="text-sm font-medium text-primary transition-colors">
            {t("Projects")}
          </a>
          <a href="#contact" className="text-sm font-medium text-primary transition-colors">
            {t("Contact")}
          </a>
          <div className="flex items-center align-middle justify-center text-primary">
              <label htmlFor="language"></label>
              <select
                id="language"
                value={lng}
                onChange={onChangeLang}
                style={{ cursor: "pointer", appearance: "none" }}
                className="ms-4 pe-4"
              >
                {LANGUAGES.map(({ code, label }) => (
                  <option key={code} value={code} className="text-secondary">
                    {label}
                  </option>
                ))}
              </select>
              <LuChevronDown className="-ms-4" />
            </div>
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
              {t("About")}
            </a>
            <a
              href="#skills"
              className="py-2 text-sm font-medium  transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("Skills")}
            </a>
            <a
              href="#projects"
              className="py-2 text-sm font-medium  transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("Projects")}
            </a>
            <a
              href="#contact"
              className="py-2 text-sm font-medium  transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("Contact")}
            </a>
            <div className="flex items-center">
              <label htmlFor="language"></label>
              <select
                id="language"
                defaultValue={lng}
                onChange={onChangeLang}
                style={{ cursor: "pointer", appearance: "none" }}
                className="ms-4 pe-4"
              >
                {LANGUAGES.map(({ code, label }) => (
                  <option key={code} value={code} className="text-black">
                    {label}
                  </option>
                ))}
              </select>
              <LuChevronDown className="-ms-4" />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

