import React from "react";
import { Button } from "../components/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/Card";
import { ExternalLink, Github } from "lucide-react";
import culturefit from "../assets/culturefit.png";
import smartsphere from "../assets/smartsphere.png";
import trivial from "../assets/Trivial.png";
import shop from "../assets/Shop.png"

export function Projects() {
  return (
    <section id="projects" className="py-16 px-10 md:py-24 bg-bg-primary">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="CultureFit - Gym Management"
            description="A gym management platform with subscriptions, online content, and appointment scheduling."
            image={culturefit}
            tags={["Spring Boot", "React", "MySQL", "Docker", "Tailwind CSS"]}
            demoLink="https://culturefit.com"
            repoLink="https://github.com/WDJohanWD/CultureFit"
          />
          <ProjectCard
            title="SmartSphere - Tecnology shop and admin management"
            description="An online store with product listings, cart functionality, and secure checkout."
            image={smartsphere}
            tags={["React", "Tailwind CSS", "JSON Server"]}
            demoLink="https://example.com"
            repoLink="https://github.com/WDJohanWD/proyectoreact"
          />
          <ProjectCard
            title="Python Trivial Game"
            description="A game in python terminal, with questions and answers."
            image={trivial}
            tags={["Python"]}
            repoLink="https://github.com/WDJohanWD/proyecto_poo"
          />
          <ProjectCard
            title="Shop - Task Manager"
            description="A task manager with user authentication, task creation, cart etc."
            image={shop}
            tags={["Vue.js", "Express", "Pinia", "MongoDB", "Bootstrap"]}
            demoLink="https://example.com"
            repoLink="https://github.com/WDJohanWD/task-manager"
          />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, image, tags, demoLink, repoLink }) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48 w-full">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
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
      <CardFooter className="mt-auto">
        <div className="flex gap-2">
          <Button size="sm" variant="outline">
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </a>
          </Button>
          <Button size="sm" variant="outline">
            <a href={repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
