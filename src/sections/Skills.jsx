import React from "react";
import { Card, CardContent } from "../components/Card";
import { Code, Database, Server, Wrench, Rocket, Layout } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Skills() {
    
    const { t } = useTranslation("skills")
    return (
        <section id="skills" className="py-16 md:py-24 mb-20 px-10 mx-auto max-w-full">
            <div className="container">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-secondary">
                    {t("title")}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-y-8">
                    <SkillCard
                        icon={<Layout className="h-10 w-10 text-primary" />}
                        title={t("frontend")}
                        skills={["React", "Vue.js", "Tailwind CSS", "Bootstrap"]}
                    />
                    <SkillCard
                        icon={<Server className="h-10 w-10 text-primary" />}
                        title={t("backend")}
                        skills={["Spring Boot", "REST APIs"]}
                    />
                    <SkillCard
                        icon={<Database className="h-10 w-10 text-primary" />}
                        title={t("database")}
                        skills={["MySQL", "MongoDB"]}
                    />
                    <SkillCard
                        icon={<Code className="h-10 w-10 text-primary" />}
                        title={t("languages")}
                        skills={["JavaScript", "Python", "Java"]}
                    />
                    <SkillCard
                        icon={<Wrench className="h-10 w-10 text-primary" />}
                        title={t("deploymentTools")}
                        skills={["Docker", "NGINX", "Apache", "XAMPP"]}
                    />
                    <SkillCard
                        icon={<Rocket className="h-10 w-10 text-primary" />}
                        title={t("other")}
                        skills={["Git", "Postman", "Swagger", "Notion"]}
                    />
                </div>
            </div>
        </section>
    );
}

function SkillCard({ icon, title, skills }) {
    return (
        <Card className="h-full min-h-[200px] ">
            <CardContent className="p-6 flex flex-col items-center text-center justify-between">
                <div className="mb-4">{icon}</div>
                <h3 className="text-xl font-bold mb-4">{title}</h3>
                <ul className="space-y-2">
                    {skills.map((skill, index) => (
                        <li key={index} className="text-muted-foreground">
                            {skill}
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}
