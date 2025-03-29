import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/Card";
import { Github } from "lucide-react";
import culturefit from "../assets/culturefit.webp";
import smartsphere from "../assets/smartsphere.webp";
import trivial from "../assets/Trivial.webp";
import shop from "../assets/Shop.webp";
import dao from "../assets/DAO.webp";

export function Projects() {
  return (
    <section id="projects" className="py-16 px-10 md:py-24 bg-bg-primary">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-primary">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="CultureFit - Gym Management"
            description="A gym management platform with subscriptions, online content, and appointment scheduling."
            image={culturefit}
            tags={["Spring Boot", "React", "MySQL", "Docker", "Tailwind CSS"]}
            repoLink="https://github.com/WDJohanWD/CultureFit"
            name="CULTUREFIT"

          />
          <ProjectCard
            title="SmartSphere - Tecnology shop and admin management"
            description="An online store with product listings, cart functionality, and secure checkout."
            image={smartsphere}
            tags={["React", "Tailwind CSS", "JSON Server"]}
            repoLink="https://github.com/WDJohanWD/proyectoreact"
            name="SMARTSPHERE"

          />
          <ProjectCard
            title="Trivia culture game"
            description="A game in python terminal, with questions and answers. It is a project with POO concepts. And json to save the questions."
            image={trivial}
            tags={["Python", "JSON"]}
            repoLink="https://github.com/WDJohanWD/proyecto_poo"
            name="TRIVIAL"

          />

          <ProjectCard
            title="Shop - Task Manager"
            description="A task manager with user authentication, task creation, cart etc."
            image={shop}
            tags={["Vue.js", "Express", "Pinia", "MongoDB", "Bootstrap"]}
            repoLink="https://github.com/WDJohanWD/vue_project"
            name="VUE"

          />
          <ProjectCard
            title="Hogwarts - BD access"
            description="A little project to access a BD with students and houses of Hogwarts."
            image={dao}
            tags={["Java", "MySQL"]}
            repoLink="https://github.com/WDJohanWD/Hogwarts"
            name="DAO"
            />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, image, tags,  repoLink, name }) {
  const URL = "/portfolio_johan/project/" + name;
  return (
    <Card className="overflow-hidden h-full flex flex-col hover:-translate-y-3 hover:border-2 hover:border-secondary transition-transform duration-300 ease-in-out ">
      <Link to={URL}> 
      <div className="relative h-60 w-full">
        <img src={image} alt={title} className="object-cover w-full h-full" />
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
          
          <Button size="sm" variant="outline">
            <a href={repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-secondary">
              <Github className="mr-2 h-4 w-4 text-secondary" />
              Code
            </a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
