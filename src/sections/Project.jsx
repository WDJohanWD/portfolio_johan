import { useParams } from "react-router-dom";
import { useState } from "react";
import { Calendar, Code, Github, Globe, Layers, User } from "lucide-react";
import { Badge } from "../components/Badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/Tabs";
import { Button } from "../components/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/Card";

export function Project() {
    const { id } = useParams();

    // Definir imágenes como un objeto directamente
    const images = {
        "culturefit": [
            "/portfolio_johan/culturefit/culturefit.webp",
            "../assets/cultureFit/culturefit.webp",
            "../assets/cultureFit/culturefit2.webp",
            "../assets/cultureFit/culturefit3.webp",
        ]
    };

    return (
        <div className="bg-bg-primary">
            {id === "CULTUREFIT" && (
                <ProjectDetails
                    title="CultureFit"
                    description="Gym"
                    images={images["culturefit"]}
                    liveUrl=""
                    repoUrl="https://github.com/WDJohanWD/CultureFit"
                    date="building"
                    role="Backend developer, Project manager, Optimization"
                    technologies={["Spring Boot", "React", "MySQL", "Docker", "Tailwind CSS"]}
                    longDescription="Es una aplicación realizada por tres personas, donde nos fuimos dividiendo el trabajo por 'featers'. Mi parte sobretodo fue backend, administración de tareas, optimización de la aplicación y algunos componentes de frontend. La aplicación es un gimnasio, con todas las características, como suscripciones, contenido online, reservas de citas, etc. La aplicación está hecha con Spring Boot, React, MySQL y Docker. La aplicación está en construcción, pero ya tiene una buena parte de la funcionalidad."
                    features={["User authentication", "Subscription management", "Appointment scheduling", "Online content"]}
                    challenges="Integrating the backend with the frontend, ensuring smooth communication between them."
                    solutions="Utilized RESTful APIs for seamless data exchange and implemented JWT for secure authentication."
                />
            )}
        </div>
    );
}

export function ProjectDetails({
    title, description, images, liveUrl, repoUrl, date, role, technologies, longDescription, features, challenges, solutions
}) {
    const [currentImage, setCurrentImage] = useState(0);

    return (
        <Card className="overflow-hidden border-none shadow-lg bg-bg-primary">
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-muted">
                <img
                    src={images[currentImage] || "/placeholder.svg"}
                    alt={`${title} screenshot ${currentImage + 1}`}
                    className="object-cover w-full h-full" // Asegúrate de que se cubra todo el contenedor
                />

                {/* Botones de navegación si hay varias imágenes */}
                {images.length > 1 && (
                    <div className="absolute inset-0 flex items-center justify-between p-4">
                        <Button
                            variant="secondary"
                            size="icon"
                            className="rounded-full opacity-80 hover:opacity-100"
                            onClick={() =>
                                setCurrentImage(
                                    (prev) => (prev === 0 ? images.length - 1 : prev - 1)
                                )
                            }
                        >
                            <span className="sr-only">Previous</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-5 w-5"
                            >
                                <path d="m15 18-6-6 6-6" />
                            </svg>
                        </Button>
                        <Button
                            variant="secondary"
                            size="icon"
                            className="rounded-full opacity-80 hover:opacity-100"
                            onClick={() =>
                                setCurrentImage(
                                    (prev) => (prev === images.length - 1 ? 0 : prev + 1)
                                )
                            }
                        >
                            <span className="sr-only">Next</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-5 w-5"
                            >
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </Button>
                    </div>
                )}

                {/* Indicadores de imagen */}
                {images.length > 1 && (
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2.5 h-2.5 rounded-full ${currentImage === index ? "bg-primary" : "bg-primary/30"
                                    }`}
                                onClick={() => setCurrentImage(index)}
                            >
                                <span className="sr-only">Image {index + 1}</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <CardContent className="p-6 md:p-8 bg-bg-primary" >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
                        <p className="text-muted-foreground">{description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 md:justify-end">
                        {liveUrl && (
                            <Button aschild="true">
                                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                                    <Globe className="mr-2 h-4 w-4" />
                                    Live Demo
                                </a>
                            </Button>
                        )}
                        {repoUrl && (
                            <Button variant="outline" aschild="true">
                                <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 h-4 w-4" />
                                    View Code
                                </a>
                            </Button>
                        )}
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {date && (
                        <div className="flex items-center gap-2">
                            <Calendar className="h-5 w-5 text-primary" />
                            <div>
                                <h3 className="font-medium">Date</h3>
                                <p className="text-sm text-muted-foreground">{date}</p>
                            </div>
                        </div>
                    )}
                    {role && (
                        <div className="flex items-center gap-2">
                            <User className="h-5 w-5 text-primary" />
                            <div>
                                <h3 className="font-medium">Role</h3>
                                <p className="text-sm text-muted-foreground">{role}</p>
                            </div>
                        </div>
                    )}
                    <div className="flex items-center gap-2">
                        <Code className="h-5 w-5 text-primary" />
                        <div>
                            <h3 className="font-medium">Technologies</h3>
                            <div className="flex flex-wrap gap-1 mt-1">
                                {technologies.map((tech, index) => (
                                    <Badge key={index} variant="secondary" className="text-xs">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="features">Features</TabsTrigger>
                        <TabsTrigger value="challenges">Challenges & Solutions</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview" className="pt-6">
                        <p>{longDescription || description}</p>
                    </TabsContent>
                    <TabsContent value="features" className="pt-6">
                        <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                            <Layers className="h-5 w-5 text-primary" />
                            Key Features
                        </h3>
                        <ul className="space-y-2">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    ✅ {feature}
                                </li>
                            ))}
                        </ul>
                    </TabsContent>
                    <TabsContent value="challenges" className="pt-6">
                        {challenges && <p className="mb-6 text-muted-foreground">{challenges}</p>}
                        {solutions && <p className="text-muted-foreground">{solutions}</p>}
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
}
