import React, { useState, useMemo } from "react"; 
import { Calendar, Code, Github, Globe, Layers, User } from "lucide-react";
import { Badge } from "../components/Badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/Tabs";
import { Button } from "../components/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/Card";
import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next'; 

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
    "vue": [ 
        "/portfolio_johan/shop/Shop.webp"
    ],
    "dao": [
        "/portfolio_johan/dao/DAO.webp"
    ]
};

const technologiesData = {
    "culturefit": ["Spring Boot", "React", "MySQL", "Docker", "Tailwind CSS"],
    "smartsphere": ["React", "Tailwind CSS", "JSON Server"],
    "trivial": ["Python", "JSON"],
    "vue": ["Vue.js", "Express", "Pinia", "MongoDB", "Bootstrap"], 
    "dao": ["Java", "MySQL"]
};

const urlsData = {
    "culturefit": { liveUrl: "", repoUrl: "https://github.com/WDJohanWD/CultureFit" },
    "smartsphere": { liveUrl: "", repoUrl: "https://github.com/WDJohanWD/proyectoreact" },
    "trivial": { liveUrl: "", repoUrl: "https://github.com/WDJohanWD/proyecto_poo" },
    "vue": { liveUrl: "", repoUrl: "https://github.com/WDJohanWD/vue_project" }, 
    "dao": { liveUrl: "", repoUrl: "https://github.com/WDJohanWD/Hogwarts" }
};

const datesData = {
    "culturefit": "Ongoing", 
    "smartsphere": "2025-02-23",
    "trivial": "2025-02-23",
    "vue": "2025-02-23",
    "dao": "2025-02-23"
};


export function Project() {
    const { id } = useParams(); 
    const { t, ready } = useTranslation("projects"); 

    const lowerCaseId = id?.toLowerCase();


    const projectDetailsData = useMemo(() => {

        if (!ready || !lowerCaseId || !images[lowerCaseId]) {
            return null;
        }

        const titleKey = `projects_${lowerCaseId}_title`;
        const descriptionKey = `projects_${lowerCaseId}_description`; 
        const roleKey = `projects_${lowerCaseId}_role`;
        const longDescriptionKey = `projects_${lowerCaseId}_longDescription`;
        const challengesKey = `projects_${lowerCaseId}_challenges`;
        const solutionsKey = `projects_${lowerCaseId}_solutions`;
        const featuresCountKey = `projects_${lowerCaseId}_features_count`;

        const featuresCount = parseInt(t(featuresCountKey, '0'), 10);
        const translatedFeatures = [];
        if (featuresCount > 0) {
             for (let i = 1; i <= featuresCount; i++) {
                 translatedFeatures.push(t(`projects_${lowerCaseId}_feature_${i}`));
             }
        }

        const rawDate = datesData[lowerCaseId] || "";
        const displayDate = rawDate === "Ongoing" ? t('projects_status_ongoing') : rawDate;

        return {
            title: t(titleKey),
            description: t(descriptionKey),
            images: images[lowerCaseId] || [""], 
            liveUrl: urlsData[lowerCaseId]?.liveUrl || "",
            repoUrl: urlsData[lowerCaseId]?.repoUrl || "",
            date: displayDate, 
            role: t(roleKey),
            technologies: technologiesData[lowerCaseId] || [], 
            longDescription: t(longDescriptionKey),
            features: translatedFeatures, 
            challenges: t(challengesKey),
            solutions: t(solutionsKey),
        };
    }, [id, t, ready]);

    
    if (!projectDetailsData) {
        if(ready) {
             return <div className="container mx-auto px-4 py-8">Project not found.</div>;
        }
        return null;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <ProjectDetails {...projectDetailsData} />
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
    const { t } = useTranslation("projects"); 

    const [currentImage, setCurrentImage] = useState(0);

    return (
        <Card className="mx-auto my-5 max-w-4xl">
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-muted overflow-hidden">
                <img
                    src={images[currentImage] || "/placeholder.svg"}
                    alt={t('projects_details_imageAlt', { title: title, number: currentImage + 1 })}
                    className="object-contain w-full h-full"
                />
                {images.length > 1 && (
                    <>
                        <div className="absolute inset-0 flex items-center justify-between p-4">
                            <Button
                                variant="secondary" 
                                size="icon"
                                className="bg-primary rounded-full opacity-80 hover:opacity-100 text-primary-foreground"
                                onClick={() =>
                                    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
                                }
                            >
                                <span className="sr-only">{t('projects_details_previous')}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="m15 18-6-6 6-6" /></svg>
                            </Button>
                            <Button
                                variant="secondary"
                                size="icon"
                                className="bg-primary rounded-full opacity-80 hover:opacity-100 text-primary-foreground"
                                onClick={() =>
                                    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
                                }
                            >
                                <span className="sr-only">{t('projects_details_next')}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="m9 18 6-6-6-6" /></svg>
                            </Button>
                        </div>
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-2.5 h-2.5 rounded-full transition-colors ${currentImage === index ? "bg-primary" : "bg-primary/30 hover:bg-primary/50"}`}
                                    onClick={() => setCurrentImage(index)}
                                >
                                    <span className="sr-only">{t('projects_details_imageIndicatorAlt', { number: index + 1 })}</span>
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </div>

            <CardContent className="p-6 md:p-8 bg-bg-primary">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-secondary">{title}</h2>
                        <p className="text-muted-foreground">{description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 md:justify-end shrink-0">
                        {liveUrl && (
                            <Button aschild="true" size="sm"> 
                                <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                    <Globe className="mr-2 h-4 w-4" />
                                    {t('projects_details_liveDemo')} 
                                </a>
                            </Button>
                        )}
                        {repoUrl && (
                            <Button variant="outline" aschild="true" size="sm">
                                <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                    <Github className="mr-2 h-4 w-4" />
                                     {t('projects_details_viewCode')} 
                                </a>
                            </Button>
                        )}
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8 border-t border-b border-border py-4">
                    {date && (
                        <div className="flex items-center gap-2">
                            <Calendar className="h-5 w-5 text-primary shrink-0" />
                            <div>
                                <h3 className="font-medium">{t('projects_details_dateLabel')}</h3> 
                                <p className="text-sm text-muted-foreground">{date}</p>
                            </div>
                        </div>
                    )}
                    {role && (
                        <div className="flex items-center gap-2">
                            <User className="h-5 w-5 text-primary shrink-0" />
                            <div>
                                <h3 className="font-medium">{t('projects_details_roleLabel')}</h3>
                                <p className="text-sm text-muted-foreground">{role}</p>
                            </div>
                        </div>
                    )}
                    <div className="flex items-center gap-2">
                        <Code className="h-5 w-5 text-primary shrink-0" />
                        <div>
                            <h3 className="font-medium">{t('projects_details_technologiesLabel')}</h3> 
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
                    <TabsList className="grid w-full grid-cols-3 mb-4">
                        <TabsTrigger value="overview">{t('projects_details_tabOverview')}</TabsTrigger>
                        <TabsTrigger value="features">{t('projects_details_tabFeatures')}</TabsTrigger>
                        <TabsTrigger value="challenges">{t('projects_details_tabChallenges')}</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview" className="pt-6 text-muted-foreground prose prose-sm max-w-none">
                        <p>{longDescription || description}</p>
                    </TabsContent>
                    <TabsContent value="features" className="pt-6 prose prose-sm max-w-none">
                         <h3 className="text-lg font-medium mb-4 flex items-center gap-2 text-primary">
                             <Layers className="h-5 w-5" /> 
                             {t('projects_details_featuresTitle')}
                         </h3>
                         <ul className="space-y-2 list-none p-0">
                             {features.map((feature, index) => (
                                 <li key={index} className="flex items-start gap-2 text-muted-foreground">
                                     <span className="text-green-500 mt-1">✓</span>
                                     <span>{feature}</span> 
                                 </li>
                             ))}
                         </ul>
                    </TabsContent>
                    <TabsContent value="challenges" className="pt-6 prose prose-sm max-w-none">
                         <h3 className="text-lg font-medium mb-2 text-primary">{t('projects_details_challengesTitle')}</h3> 
                         {challenges && <p className="mb-6 text-muted-foreground">{challenges}</p>}

                         <h3 className="text-lg font-medium mb-2 text-primary">{t('projects_details_solutionsTitle')}</h3> 
                         {solutions && <p className="text-muted-foreground">{solutions}</p>}
                    </TabsContent>
                </Tabs>

            </CardContent>
        </Card>
    );
}