import { Card, CardContent } from "../components/Card";
import profileImage from "../assets/f2.webp";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation("about")
  return (
    <section id="about" className="py-16 px-4 md:py-24 bg-bg-primary">
      <div className="container mx-auto max-w-full">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary">
          {t("title")}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">

          <div className="flex justify-center">
            <div className="relative w-52 h-52 md:w-80 md:h-80 min-w-[200px] min-h-[200px] rounded-full overflow-hidden border-4 border-primary">
              <img
                style={{ "rotate": "5deg" }}
                src={profileImage || "/placeholder.svg"}
                alt="Profile"
                width={320}
                height={320}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <Card>
            <CardContent className="p-6 md:p-8 space-y-4">
              <p className="text-lg  text-justify">
                {t("description")}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
