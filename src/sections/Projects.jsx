import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/Card";
import { Github } from "lucide-react";
import { useTranslation } from 'react-i18next'; 
import culturefit from "../assets/culturefit.webp";
import smartsphere from "../assets/smartsphere.webp";
import trivial from "../assets/Trivial.webp";
import shop from "../assets/Shop.webp";import dao from "../assets/DAO.webp";


const projectData = [
    { name: "culturefit", image: culturefit, tags: ["Spring Boot", "React", "MySQL", "Docker", "Tailwind CSS"], repoLink: "https://github.com/WDJohanWD/CultureFit", originalName: "CULTUREFIT" },
    { name: "smartsphere", image: smartsphere, tags: ["React", "Tailwind CSS", "JSON Server"], repoLink: "https://github.com/WDJohanWD/proyectoreact", originalName: "SMARTSPHERE" },
    { name: "trivial", image: trivial, tags: ["Python", "JSON"], repoLink: "https://github.com/WDJohanWD/proyecto_poo", originalName: "TRIVIAL" },
    { name: "vue", image: shop, tags: ["Vue.js", "Express", "Pinia", "MongoDB", "Bootstrap"], repoLink: "https://github.com/WDJohanWD/vue_project", originalName: "VUE" }, // Key "vue" matches previous code
    { name: "dao", image: dao, tags: ["Java", "MySQL"], repoLink: "https://github.com/WDJohanWD/Hogwarts", originalName: "DAO" }
];

export function Projects() {
    const { t, ready } = useTranslation("projects"); 

    if (!ready) {
         return <section id="projects" className="py-16 px-4 md:py-24 bg-bg-primary text-center text-primary">
             {t('loading_projects_section', 'Loading Projects...')} 
         </section>;
    }


    return (
        <section id="projects" className="py-16 px-4 md:py-24 bg-bg-primary">
            <div className="container mx-auto max-w-full">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary">
                    {t('projects_sectionTitle')}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectData.map((project) => {
                        const titleKey = `projects_${project.name}_title`;
                        const descriptionKey = `projects_${project.name}_description`;

                        return (
                            <ProjectCard
                                key={project.name}
                                title={t(titleKey)} 
                                description={t(descriptionKey)}
                                image={project.image}
                                tags={project.tags} 
                                repoLink={project.repoLink}
                                name={project.originalName} 
                                codeButtonText={t('projects_codeButton', 'View Code')}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ title, description, image, tags, repoLink, name, codeButtonText }) {
    const URL = "/portfolio_johan/project/" + name;

    return (
        <Card className="overflow-hidden h-full flex flex-col hover:-translate-y-3 hover:border-2 hover:border-secondary transition-transform duration-300 ease-in-out ">
            <Link to={URL}>
                <div className="relative h-60 w-full">
                    <img src={image || "/placeholder.svg"} alt={title} className="object-cover w-full h-full" />
                </div>
                <CardHeader>
                    <CardTitle className="text-secondary">{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                                {tag} 
                            </span>
                        ))}
                    </div>
                </CardContent>
            </Link> 
            <CardFooter className="mt-auto">
                <div className="flex gap-2">
                    <Button size="sm" variant="outline" aschild="true"> 
                         <a href={repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-secondary">
                           <Github className="mr-2 h-4 w-4 text-secondary" />
                           {codeButtonText} 
                         </a>
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}