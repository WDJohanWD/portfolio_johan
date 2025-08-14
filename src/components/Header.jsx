import { useState } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"
import { Button } from "./Button"
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../translations/index";
import { LuChevronDown } from "react-icons/lu";
import Flag from "react-world-flags";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const { i18n, t } = useTranslation("navbar");
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const [lng, setLng] = useState(i18n.language);

  const onChangeLang = (code) => {
    i18n.changeLanguage(code);
    setLng(code);
    setIsLangMenuOpen(false);
  };

  const handleNavigation = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/portfolio_johan/", { replace: true });
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const normalizedLang = lng?.split("-")[0];
  const currentLanguage = LANGUAGES.find(lang => lang.code === normalizedLang) || LANGUAGES[0];
  
  return (
    <header className="sticky top-0 z-50 max-w-full mx-auto">
      <div className="absolute inset-0 border-b border-secondary bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60"></div>

      <div className="relative container flex h-16 items-center justify-between px-3 text-secondary">
        <div className="flex items-center gap-2">
          <Link to="/portfolio_johan/" className="font-bold text-xl text-secondary transition-colors hover:text-primary">
            Johan Aponte
          </Link>
        </div>

        <nav className="hidden md:flex gap-8">
          <button 
            onClick={() => handleNavigation("about")} 
            className="text-sm font-medium text-primary transition-all duration-300 hover:text-secondary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all after:duration-300 hover:after:w-full"
          >
            {t("About")}
          </button>
          <button 
            onClick={() => handleNavigation("skills")} 
            className="text-sm font-medium text-primary transition-all duration-300 hover:text-secondary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all after:duration-300 hover:after:w-full"
          >
            {t("Skills")}
          </button>
          <button 
            onClick={() => handleNavigation("projects")} 
            className="text-sm font-medium text-primary transition-all duration-300 hover:text-secondary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all after:duration-300 hover:after:w-full"
          >
            {t("Projects")}
          </button>
          <button 
            onClick={() => handleNavigation("contact")} 
            className="text-sm font-medium text-primary transition-all duration-300 hover:text-secondary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all after:duration-300 hover:after:w-full"
          >
            {t("Contact")}
          </button>
          <div className="relative">
            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center gap-2 p-2 rounded-md hover:bg-secondary/10 transition-all duration-300"
            >
              <Flag code={currentLanguage.label} className="rounded-sm shadow-sm" style={{ width: "20px", height: "15px" }} />
              <LuChevronDown className={`w-4 h-4 transition-transform duration-300 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
            </button>
            {isLangMenuOpen && (
              <div className="absolute right-0 w-24 mt-2 bg-background border border-secondary rounded-md shadow-lg overflow-hidden transition-all duration-300">
                {LANGUAGES.map(({ code, label }) => (
                  <button
                    key={code}
                    onClick={() => onChangeLang(code)}
                    className="w-full p-2 flex items-center justify-center hover:bg-secondary/10 transition-colors duration-300"
                  >
                    <Flag code={label} className="rounded-sm shadow-sm" style={{ width: "20px", height: "15px" }} />
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden hover:bg-secondary/10 transition-colors duration-300" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {isMenuOpen && (
        <div className="relative z-40 md:hidden animate-in slide-in-from-top duration-300">
          <div className="absolute inset-0 border-b border-secondary bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60"></div>

          <nav className="relative container flex flex-col py-4 px-3 text-secondary">
            <button
              onClick={() => {
                handleNavigation("about");
                setIsMenuOpen(false);
              }}
              className="py-3 text-sm font-medium transition-all duration-300 hover:text-primary hover:bg-secondary/5 rounded-md px-2"
            >
              {t("About")}
            </button>
            <button
              onClick={() => {
                handleNavigation("skills");
                setIsMenuOpen(false);
              }}
              className="py-3 text-sm font-medium transition-all duration-300 hover:text-primary hover:bg-secondary/5 rounded-md px-2"
            >
              {t("Skills")}
            </button>
            <button
              onClick={() => {
                handleNavigation("projects");
                setIsMenuOpen(false);
              }}
              className="py-3 text-sm font-medium transition-all duration-300 hover:text-primary hover:bg-secondary/5 rounded-md px-2"
            >
              {t("Projects")}
            </button>
            <button
              onClick={() => {
                handleNavigation("contact");
                setIsMenuOpen(false);
              }}
              className="py-3 text-sm font-medium transition-all duration-300 hover:text-primary hover:bg-secondary/5 rounded-md px-2"
            >
              {t("Contact")}
            </button>
            <div className="flex items-center gap-3 py-3 px-2">
              {LANGUAGES.map(({ code, label }) => (
                <button
                  key={code}
                  onClick={() => onChangeLang(code)}
                  className={`p-2 rounded-md transition-all duration-300 ${
                    lng === code 
                      ? 'bg-secondary/10 ring-2 ring-secondary/20' 
                      : 'hover:bg-secondary/10'
                  }`}
                >
                  <Flag code={label} className="rounded-sm shadow-sm" style={{ width: "20px", height: "15px" }} />
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

