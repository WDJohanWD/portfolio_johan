import React from "react";
import { Link } from "react-router-dom";
// Asegúrate de que las rutas a tus componentes de UI sean correctas
import { Button } from "../components/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/Card";
import { Github } from "lucide-react";
import { useTranslation } from 'react-i18next'; // Import useTranslation

// Importar imágenes (rutas relativas dentro de src)
import culturefit from "../assets/culturefit.webp";
import smartsphere from "../assets/smartsphere.webp";
import trivial from "../assets/Trivial.webp";
import shop from "../assets/Shop.webp"; // Assuming shop is correct path for vue project image
import dao from "../assets/DAO.webp";

// Datos de los proyectos (mejor fuera del componente si no cambian)
// Usar 'name' en minúsculas para coincidir con las claves JSON y 'originalName' para la URL
const projectData = [
    { name: "culturefit", image: culturefit, tags: ["Spring Boot", "React", "MySQL", "Docker", "Tailwind CSS"], repoLink: "https://github.com/WDJohanWD/CultureFit", originalName: "CULTUREFIT" },
    { name: "smartsphere", image: smartsphere, tags: ["React", "Tailwind CSS", "JSON Server"], repoLink: "https://github.com/WDJohanWD/proyectoreact", originalName: "SMARTSPHERE" },
    { name: "trivial", image: trivial, tags: ["Python", "JSON"], repoLink: "https://github.com/WDJohanWD/proyecto_poo", originalName: "TRIVIAL" },
    { name: "vue", image: shop, tags: ["Vue.js", "Express", "Pinia", "MongoDB", "Bootstrap"], repoLink: "https://github.com/WDJohanWD/vue_project", originalName: "VUE" }, // Key "vue" matches previous code
    { name: "dao", image: dao, tags: ["Java", "MySQL"], repoLink: "https://github.com/WDJohanWD/Hogwarts", originalName: "DAO" }
];

export function Projects() {
    // Usar el hook useTranslation con el namespace 'projects'
    const { t, ready } = useTranslation("projects"); // Get t and ready state

    // Optional: Render a loading state if translations aren't ready
    // This might be redundant if parent <Suspense> is used correctly
    // but can be a fallback check.
    if (!ready) {
         return <section id="projects" className="py-16 px-4 md:py-24 bg-bg-primary text-center text-primary">
             {t('loading_projects_section', 'Loading Projects...')} {/* Use a translation key for loading */}
         </section>;
    }


    return (
        <section id="projects" className="py-16 px-4 md:py-24 bg-bg-primary">
            <div className="container mx-auto max-w-full">
                {/* Usar t() con la clave del título de la sección */}
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary">
                    {t('projects_sectionTitle')} {/* Translated */}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Mapear sobre los datos del proyecto */}
                    {projectData.map((project) => {
                        // Construir las claves dinámicamente usando el 'name' en minúsculas
                        const titleKey = `projects_${project.name}_title`;
                        const descriptionKey = `projects_${project.name}_description`;

                        return (
                            <ProjectCard
                                key={project.name}
                                // Usar t() con las claves construidas para title y description
                                title={t(titleKey)}         // Translated
                                description={t(descriptionKey)} // Translated
                                image={project.image}
                                tags={project.tags} // Las etiquetas no se traducen
                                repoLink={project.repoLink}
                                name={project.originalName} // Usar el nombre original (mayúsculas) para la URL/Link
                                // Usar t() con la clave del botón
                                codeButtonText={t('projects_codeButton', 'View Code')} // Translated, added default value
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

// Modificar ProjectCard para aceptar y usar codeButtonText
function ProjectCard({ title, description, image, tags, repoLink, name, codeButtonText }) {
    // Usamos el 'name' original (mayúsculas) que pasamos como prop para la URL
    const URL = "/portfolio_johan/project/" + name;

    return (
        <Card className="overflow-hidden h-full flex flex-col hover:-translate-y-3 hover:border-2 hover:border-secondary transition-transform duration-300 ease-in-out ">
            {/* Envuelve la imagen y el encabezado en Link */}
            <Link to={URL}>
                <div className="relative h-60 w-full">
                    <img src={image || "/placeholder.svg"} alt={title} className="object-cover w-full h-full" />
                </div>
                <CardHeader>
                    {/* title y description son props recibidas, ya traducidas */}
                    <CardTitle className="text-secondary">{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                                {tag} {/* Not translated */}
                            </span>
                        ))}
                    </div>
                </CardContent>
            </Link> {/* Cierre del Link */}
            <CardFooter className="mt-auto">
                <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild> {/* Use asChild for the <a> tag */}
                         <a href={repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-secondary">
                           <Github className="mr-2 h-4 w-4 text-secondary" />
                           {/* Usar el texto del botón traducido recibido como prop */}
                           {codeButtonText} {/* Translated */}
                         </a>
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}