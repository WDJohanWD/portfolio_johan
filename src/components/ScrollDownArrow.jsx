import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";

export default function ScrollDown({ targetId, className }) {
  const { t } = useTranslation("hero")
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center text-primary cursor-pointer transition-opacity hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${className || ""}`}
      aria-label="Scroll down"
    >
      <span className="text-sm font-medium mb-2 text-center">{t("scrollDown")}</span>
      <ChevronDown className="w-10 h-10 animate-bounce mx-auto" />
    </button>
  );
}
