import React, { useState, useMemo } from "react"; // Added useMemo
import { Calendar, Code, Github, Globe, Layers, User } from "lucide-react";
import { Badge } from "../components/Badge"; // Ensure path is correct
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/Tabs"; // Ensure path is correct
import { Button } from "../components/Button"; // Ensure path is correct
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/Card"; // Ensure path is correct
import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next'; // Import useTranslation

// Keep image mapping outside, it doesn't need translation
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
    "vue": [ // Changed from "shop" to "vue" to match name convention
        "/portfolio_johan/shop/Shop.webp"
    ],
    "dao": [
        "/portfolio_johan/dao/DAO.webp"
    ]
};

// Define technologies separately, they don't need translation
const technologiesData = {
    "culturefit": ["Spring Boot", "React", "MySQL", "Docker", "Tailwind CSS"],
    "smartsphere": ["React", "Tailwind CSS", "JSON Server"],
    "trivial": ["Python", "JSON"],
    "vue": ["Vue.js", "Express", "Pinia", "MongoDB", "Bootstrap"],
    "dao": ["Java", "MySQL"]
};

// Define URLs separately
const urlsData = {
    "culturefit": { liveUrl: "", repoUrl: "https://github.com/WDJohanWD/CultureFit" },
    "smartsphere": { liveUrl: "", repoUrl: "https://github.com/WDJohanWD/proyectoreact" },
    "trivial": { liveUrl: "", repoUrl: "https://github.com/WDJohanWD/proyecto_poo" },
    "vue": { liveUrl: "", repoUrl: "https://github.com/WDJohanWD/vue_project" },
    "dao": { liveUrl: "", repoUrl: "https://github.com/WDJohanWD/Hogwarts" }
};

// Define dates separately (Corrected format for specific dates)
const datesData = {
    "culturefit": "Ongoing", // Will be translated
    "smartsphere": "2025-02-23",
    "trivial": "2025-02-23",
    "vue": "2025-02-23",
    "dao": "2025-02-23"
};


export function Project() {
    const { id } = useParams(); // id will be "CULTUREFIT", "SMARTSPHERE", etc.
    const { t } = useTranslation("projects");

    // Normalize ID to lowercase for key construction and lookup
    const lowerCaseId = id?.toLowerCase();

    // Memoize translated data to avoid re-calculating on every render
    const projectDetailsData = useMemo(() => {
        if (!lowerCaseId || !images[lowerCaseId]) {
            return null; // Project not found
        }

        // Construct keys
        const titleKey = `projects_${lowerCaseId}_title`;
        const descriptionKey = `projects_${lowerCaseId}_description`; // Short description
        const roleKey = `projects_${lowerCaseId}_role`;
        const longDescriptionKey = `projects_${lowerCaseId}_longDescription`;
        const challengesKey = `projects_${lowerCaseId}_challenges`;
        const solutionsKey = `projects_${lowerCaseId}_solutions`;
        const featuresCountKey = `projects_${lowerCaseId}_features_count`;

        // Translate features
        const featuresCount = parseInt(t(featuresCountKey, '0'), 10); // Get count, default 0
        const translatedFeatures = [];
        if (featuresCount > 0) {
             for (let i = 1; i <= featuresCount; i++) {
                 translatedFeatures.push(t(`projects_${lowerCaseId}_feature_${i}`));
             }
        }

        // Translate date if needed
        const rawDate = datesData[lowerCaseId] || "";
        const displayDate = rawDate === "Ongoing" ? t('projects_status_ongoing') : rawDate;

        return {
            title: t(titleKey),
            description: t(descriptionKey),
            images: images[lowerCaseId] || [""], // Fallback for images
            liveUrl: urlsData[lowerCaseId]?.liveUrl || "",
            repoUrl: urlsData[lowerCaseId]?.repoUrl || "",
            date: displayDate, // Use translated or raw date
            role: t(roleKey),
            technologies: technologiesData[lowerCaseId] || [],
            longDescription: t(longDescriptionKey),
            features: translatedFeatures,
            challenges: t(challengesKey),
            solutions: t(solutionsKey),
        };
    }, [id, t]); // Dependencies: id and t function

    if (!projectDetailsData) {
        // Optional: Render a 'Not Found' component or message
        return <div className="container mx-auto px-4 py-8">Project not found.</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Render ProjectDetails once with the fetched and translated data */}
            <ProjectDetails {...projectDetailsData} />
        </div>
    );
}


// --- ProjectDetails Component ---
// Receives already translated props for project-specific content
// Translates its own static UI text
export function ProjectDetails({
    title,          // Already translated
    description,    // Already translated
    images,
    liveUrl,
    repoUrl,
    date,           // Already translated if 'Ongoing'
    role,           // Already translated
    technologies,   // Not translated
    longDescription,// Already translated
    features,       // Array of already translated strings
    challenges,     // Already translated
    solutions,      // Already translated
}) {
    const { t } = useTranslation("projects"); // Hook for translating UI elements
    const [currentImage, setCurrentImage] = useState(0);

    return (
        <Card className="mx-auto my-5 max-w-4xl"> {/* Adjusted max-width */}
            {/* Image Carousel */}
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-muted overflow-hidden"> {/* Added overflow hidden */}
                <img
                    src={images[currentImage] || "/placeholder.svg"}
                    // Interpolated alt text
                    alt={t('projects_details_imageAlt', { title: title, number: currentImage + 1 })}
                    className="object-contain w-full h-full" // Changed to object-contain
                />
                {images.length > 1 && (
                    <>
                        {/* Prev/Next Buttons */}
                        <div className="absolute inset-0 flex items-center justify-between p-4">
                             <Button
                                variant="secondary"
                                size="icon"
                                className="bg-primary rounded-full opacity-80 hover:opacity-100 text-primary-foreground" // Added text color
                                onClick={() =>
                                    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
                                }
                            >
                                <span className="sr-only">{t('projects_details_previous')}</span>
                                <svg /* ... chevron left svg ... */ className="h-5 w-5" /* ... */ > <path d="m15 18-6-6 6-6" /> </svg>
                            </Button>
                            <Button
                                variant="secondary"
                                size="icon"
                                className="bg-primary rounded-full opacity-80 hover:opacity-100 text-primary-foreground" // Added text color
                                onClick={() =>
                                    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
                                }
                            >
                                <span className="sr-only">{t('projects_details_next')}</span>
                                 <svg /* ... chevron right svg ... */ className="h-5 w-5" /* ... */ > <path d="m9 18 6-6-6-6" /> </svg>
                            </Button>
                        </div>
                        {/* Image Indicators */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-2.5 h-2.5 rounded-full transition-colors ${currentImage === index ? "bg-primary" : "bg-primary/30 hover:bg-primary/50"}`}
                                    onClick={() => setCurrentImage(index)}
                                >
                                    {/* Interpolated screen-reader text */}
                                    <span className="sr-only">{t('projects_details_imageIndicatorAlt', { number: index + 1 })}</span>
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </div>

            {/* Content Area */}
            <CardContent className="p-6 md:p-8 bg-bg-primary">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-secondary">{title}</h2>
                        <p className="text-muted-foreground">{description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 md:justify-end shrink-0"> {/* Added shrink-0 */}
                        {liveUrl && (
                            <Button asChild size="sm"> {/* Added size */}
                                <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                    <Globe className="mr-2 h-4 w-4" />
                                    {t('projects_details_liveDemo')} {/* Translated */}
                                </a>
                            </Button>
                        )}
                        {repoUrl && (
                            <Button variant="outline" asChild size="sm"> {/* Added size */}
                                <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                    <Github className="mr-2 h-4 w-4" />
                                    {t('projects_details_viewCode')} {/* Translated */}
                                </a>
                            </Button>
                        )}
                    </div>
                </div>

                {/* Meta Info Section */}
                <div className="grid md:grid-cols-3 gap-6 mb-8 border-t border-b border-border py-4"> {/* Added borders and padding */}
                     {date && (
                        <div className="flex items-center gap-2">
                            <Calendar className="h-5 w-5 text-primary shrink-0" /> {/* Added shrink-0 */}
                            <div>
                                <h3 className="font-medium">{t('projects_details_dateLabel')}</h3> {/* Translated */}
                                <p className="text-sm text-muted-foreground">{date}</p> {/* Already translated if 'Ongoing' */}
                            </div>
                        </div>
                    )}
                    {role && (
                        <div className="flex items-center gap-2">
                            <User className="h-5 w-5 text-primary shrink-0" /> {/* Added shrink-0 */}
                            <div>
                                <h3 className="font-medium">{t('projects_details_roleLabel')}</h3> {/* Translated */}
                                <p className="text-sm text-muted-foreground">{role}</p> {/* Already translated */}
                            </div>
                        </div>
                    )}
                     <div className="flex items-center gap-2">
                         <Code className="h-5 w-5 text-primary shrink-0" /> {/* Added shrink-0 */}
                        <div>
                            <h3 className="font-medium">{t('projects_details_technologiesLabel')}</h3> {/* Translated */}
                            <div className="flex flex-wrap gap-1 mt-1">
                                {technologies.map((tech, index) => (
                                    <Badge key={index} variant="secondary" className="text-xs">
                                        {tech} {/* Not translated */}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs Section */}
                <Tabs defaultValue="overview" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-4"> {/* Added margin bottom */}
                        <TabsTrigger value="overview">{t('projects_details_tabOverview')}</TabsTrigger> {/* Translated */}
                        <TabsTrigger value="features">{t('projects_details_tabFeatures')}</TabsTrigger> {/* Translated */}
                        <TabsTrigger value="challenges">{t('projects_details_tabChallenges')}</TabsTrigger> {/* Translated */}
                    </TabsList>
                    <TabsContent value="overview" className="pt-6 text-muted-foreground prose prose-sm max-w-none"> {/* Added prose styles */}
                        {/* Use long description if available, otherwise short description */}
                        <p>{longDescription || description}</p> {/* Already translated */}
                    </TabsContent>
                    <TabsContent value="features" className="pt-6 prose prose-sm max-w-none"> {/* Added prose styles */}
                        <h3 className="text-lg font-medium mb-4 flex items-center gap-2 text-primary"> {/* Adjusted styling */}
                             <Layers className="h-5 w-5" /> {/* Icon before text */}
                             {t('projects_details_featuresTitle')} {/* Translated */}
                        </h3>
                        <ul className="space-y-2 list-none p-0"> {/* Removed list style */}
                             {features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                                    <span className="text-green-500 mt-1">✓</span> {/* Checkmark */}
                                    <span>{feature}</span> {/* Already translated */}
                                </li>
                            ))}
                        </ul>
                    </TabsContent>
                     <TabsContent value="challenges" className="pt-6 prose prose-sm max-w-none"> {/* Added prose styles */}
                         <h3 className="text-lg font-medium mb-2 text-primary">{t('projects_details_challengesTitle')}</h3> {/* Translated */}
                         {challenges && <p className="mb-6 text-muted-foreground">{challenges}</p>} {/* Already translated */}

                         <h3 className="text-lg font-medium mb-2 text-primary">{t('projects_details_solutionsTitle')}</h3> {/* Translated */}
                         {solutions && <p className="text-muted-foreground">{solutions}</p>} {/* Already translated */}
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    );
}