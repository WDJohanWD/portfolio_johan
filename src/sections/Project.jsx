import { useState } from "react";
import { Calendar, Code, Github, Globe, Layers, User } from "lucide-react";
import { Badge } from "../components/Badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/Tabs";
import { Button } from "../components/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/Card";
import { useParams } from "react-router-dom";

export function Project() {
    const { id } = useParams();

    const images = {
        "culturefit": [
            "/portfolio_johan/culturefit/culturefit.webp",
            "/portfolio_johan/culturefit/culturefit1.webp",
            "/portfolio_johan/culturefit/culturefit2.webp",
            "/portfolio_johan/culturefit/culturefit3.webp"
        ],
        "smartsphere": [
            "/portfolio_johan/smartsphere/smartsphere.webp",
            "/portfolio_johan/smartsphere/smartsphere1.webp",
            "/portfolio_johan/smartsphere/smartsphere2.webp",
            "/portfolio_johan/smartsphere/smartsphere3.webp"
        ],
        "trivial": [
            "/portfolio_johan/trivial/Trivial.webp"
        ],
        "shop":[
            "/portfolio_johan/shop/Shop.webp"
        ],
        "dao":[
            "/portfolio_johan/dao/DAO.webp"
        ]
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {id === "CULTUREFIT" && (
                <ProjectDetails
                    title="CultureFit"
                    description="A gym management platform with subscriptions, online content, and appointment scheduling."
                    images={images["culturefit"]}
                    liveUrl=""
                    repoUrl="https://github.com/WDJohanWD/CultureFit"
                    date="Ongoing"
                    role="Backend Developer, Project Manager, Optimization Specialist"
                    technologies={["Spring Boot", "React", "MySQL", "Docker", "Tailwind CSS"]}
                    longDescription="This application was developed by a team of three, with each member focusing on different features. My primary contributions were backend development, task management, application optimization, and some frontend components. The platform is designed for gym management, offering key features such as subscriptions, online content, appointment scheduling, and more. Built with Spring Boot, React, MySQL, and Docker, the application is still under development but already has a substantial portion of its core functionality implemented."
                    features={["User authentication", "Subscription management", "Appointment scheduling", "Online content", "Roles"]}
                    challenges="Managing different subscription plans with restricted access, ensuring secure online content distribution, and synchronizing the appointment system with professional availability."
                    solutions="Implemented JWT-based access control for role-based restrictions, secured online content with streaming protection, and built an event-driven scheduling system to prevent double bookings."
                />
            )}

            {id === "SMARTSPHERE" && (
                <ProjectDetails
                    title="SmartSphere"
                    description="An e-commerce platform for technology products, featuring product listings, cart functionality, and secure checkout."
                    images={images["smartsphere"]}
                    liveUrl=""
                    repoUrl="https://github.com/WDJohanWD/proyectoreact"
                    date="2025-23-02"
                    role="Frontent Developer"
                    technologies={["React", "Tailwind CSS"]}
                    longDescription="This application was developed by Johan Fernando Aponte Valencia. It is an online store specializing in technology products, offering a complete shopping experience. The platform includes essential e-commerce functionalities such as product listing, shopping cart, secure checkout, and an admin dashboard for managing users and products. The application is built with React and Tailwind CSS and continues to be actively developed."
                    features={["User authentication", "Product listing", "Cart functionality", "Secure checkout", "Admin dashboard"]}
                    challenges="Ensuring persistent cart functionality,  and maintaining real-time inventory management."
                    solutions="Implemented JSON-SERVER to persist cart data and developed a stock control system that locks items in the cart until checkout is completed."
                />
            )}
            {id === "TRIVIAL" && (
                <ProjectDetails
                    title="Trivia Culture Game"
                    description="A Python terminal-based trivia game with questions and answers, utilizing OOP concepts and JSON for data storage."
                    images={images["trivial"]}
                    liveUrl=""
                    repoUrl="https://github.com/WDJohanWD/proyecto_poo"
                    date="2025-23-02"
                    role="Backend Developer"
                    technologies={["Python", "JSON"]}
                    longDescription="This project is a terminal-based trivia game developed in Python. It leverages Object-Oriented Programming (OOP) principles to manage game logic and uses JSON to store and retrieve questions and answers. The game provides an engaging way to test cultural knowledge with a variety of questions."
                    features={["Question and answer functionality", "Score tracking", "JSON-based question storage", "OOP design for scalability"]}
                    challenges="Designing a flexible question storage system and ensuring smooth user interaction in a terminal-based environment."
                    solutions="Implemented a JSON-based storage system for easy question management and used Python's OOP features to create a modular and maintainable codebase."
                />
            )}
            {id === "VUE" && (
                <ProjectDetails
                    title="Shop - Task Manager"
                    description="A task manager with user authentication, task creation, cart, and more."
                    images={images["shop"]}
                    liveUrl=""
                    repoUrl="https://github.com/WDJohanWD/vue_project"
                    date="2025-23-02"
                    role="Full Stack Developer"
                    technologies={["Vue.js", "Express", "Pinia", "MongoDB", "Bootstrap"]}
                    longDescription="This project is a task manager application developed using Vue.js for the frontend and Express for the backend. It includes features such as user authentication, task creation, and a shopping cart. MongoDB is used for data storage, and Bootstrap is used for styling. The application demonstrates a full-stack implementation with a focus on usability and scalability."
                    features={["User authentication", "Task creation and management", "Shopping cart functionality", "Responsive design"]}
                    challenges="Integrating state management with Pinia and ensuring seamless communication between the frontend and backend."
                    solutions="Used Pinia for efficient state management and implemented RESTful APIs with Express to handle backend operations."
                />
            )}
            {id === "DAO" && (
                <ProjectDetails
                    title="Hogwarts - BD Access"
                    description="A small project to access a database with students and houses of Hogwarts."
                    images={images["dao"]}
                    liveUrl=""
                    repoUrl="https://github.com/WDJohanWD/Hogwarts"
                    date="2025-23-02"
                    role="Backend Developer"
                    technologies={["Java", "MySQL"]}
                    longDescription="This project is a database access application developed in Java. It allows users to interact with a database containing information about students and houses from the Harry Potter universe. The project demonstrates the use of Java for backend development and MySQL for database management."
                    features={["Database access", "CRUD operations", "Student and house management"]}
                    challenges="Designing an efficient database schema and ensuring seamless interaction between the Java application and the MySQL database."
                    solutions="Implemented a normalized database schema and used JDBC for smooth communication between the application and the database."
                />
            )}

        </div>
    );
}


export function ProjectDetails({
    title,
    description,
    images,
    liveUrl,
    repoUrl,
    date,
    role,
    technologies,
    longDescription,
    features,
    challenges,
    solutions,
}) {
    const [currentImage, setCurrentImage] = useState(0);

    return (
        <Card className="mx-35 my-5">
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-muted">
                <img
                    src={images[currentImage] || "/placeholder.svg"}
                    alt={`${title} screenshot ${currentImage + 1}`}
                    className="object-cover w-full h-full"
                />
                {images.length > 1 && (
                    <div className="absolute inset-0 flex items-center justify-between p-4">
                        <Button

                            variant="secondary"
                            size="icon"
                            className="bg-primary rounded-full opacity-80 hover:opacity-100"
                            onClick={() =>
                                setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
                            }
                        >
                            <span className="sr-only ">Previous</span>
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
                            className="bg-primary rounded-full opacity-80 hover:opacity-100"
                            onClick={() =>
                                setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
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


                {images.length > 1 && (
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2.5 h-2.5 rounded-full ${currentImage === index ? "bg-primary" : "bg-primary/30"}`}
                                onClick={() => setCurrentImage(index)}
                            >
                                <span className="sr-only">Image {index + 1}</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>


            <CardContent className="p-6 md:p-8 bg-bg-primary">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-secondary">{title}</h2>
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
                        <h3 className="text-xl font-bold text-primary">Challenges</h3>
                        {challenges && <p className="mb-6 text-muted-foreground">{challenges}</p>}
                        <h3 className="text-xl font-bold text-primary">Solutions</h3>
                        {solutions && <p className="text-muted-foreground">{solutions}</p>}
                    </TabsContent>
                </Tabs>


            </CardContent>
        </Card>
    );
}
