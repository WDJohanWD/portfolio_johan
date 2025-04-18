import React, { useState, useMemo } from "react"; // Added useMemo
import { Calendar, Code, Github, Globe, Layers, User } from "lucide-react";
// Asegúrate de que las rutas a tus componentes de UI sean correctas
import { Badge } from "../components/Badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/Tabs";
import { Button } from "../components/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/Card";
import { useParams } from "react-router-dom";
import { useTranslation } from 'react-i18next'; // Import useTranslation

// Data que NO necesita traducción y es común a todos los idiomas
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
    "vue": [ // Changed from "shop" back to "vue" as per the first code provided which used "vue"
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
    "vue": ["Vue.js", "Express", "Pinia", "MongoDB", "Bootstrap"], // Changed key back to "vue"
    "dao": ["Java", "MySQL"]
};

const urlsData = {
    "culturefit": { liveUrl: "", repoUrl: "https://github.com/WDJohanWD/CultureFit" },
    "smartsphere": { liveUrl: "", repoUrl: "https://github.com/WDJohanWD/proyectoreact" },
    "trivial": { liveUrl: "", repoUrl: "https://github.com/WDJohanWD/proyecto_poo" },
    "vue": { liveUrl: "", repoUrl: "https://github.com/WDJohanWD/vue_project" }, // Changed key back to "vue"
    "dao": { liveUrl: "", repoUrl: "https://github.com/WDJohanWD/Hogwarts" }
};

// Define dates separately (Corrected format for specific dates if needed)
const datesData = {
    "culturefit": "Ongoing", // This will be translated below
    "smartsphere": "2025-02-23",
    "trivial": "2025-02-23",
    "vue": "2025-02-23",
    "dao": "2025-02-23"
};


export function Project() {
    const { id } = useParams(); // id will be "CULTUREFIT", "SMARTSPHERE", etc.
    const { t, ready } = useTranslation("projects"); // Use hook and get 'ready' state

    // Normalize ID to lowercase for key construction and data lookup
    const lowerCaseId = id?.toLowerCase();

    // Use useMemo to calculate project details only when id or translations change
    const projectDetailsData = useMemo(() => {
        // Check if i18n is ready AND project data exists for the ID
        if (!ready || !lowerCaseId || !images[lowerCaseId]) {
             // Return null or a specific loading state if not ready or project not found
            return null;
        }

        // Construct keys using the normalized ID and namespace
        const titleKey = `projects_${lowerCaseId}_title`;
        const descriptionKey = `projects_${lowerCaseId}_description`; // Short description
        const roleKey = `projects_${lowerCaseId}_role`;
        const longDescriptionKey = `projects_${lowerCaseId}_longDescription`;
        const challengesKey = `projects_${lowerCaseId}_challenges`;
        const solutionsKey = `projects_${lowerCaseId}_solutions`;
        const featuresCountKey = `projects_${lowerCaseId}_features_count`; // Key for the number of features

        // Translate features based on count
        const featuresCount = parseInt(t(featuresCountKey, '0'), 10); // Get count, default 0 if key missing
        const translatedFeatures = [];
        if (featuresCount > 0) {
             for (let i = 1; i <= featuresCount; i++) {
                 translatedFeatures.push(t(`projects_${lowerCaseId}_feature_${i}`));
             }
        }

        // Translate date if it's the special "Ongoing" status
        const rawDate = datesData[lowerCaseId] || "";
        const displayDate = rawDate === "Ongoing" ? t('projects_status_ongoing') : rawDate;

        // Return the full project details object with translated strings
        return {
            title: t(titleKey),
            description: t(descriptionKey),
            images: images[lowerCaseId] || [""], // Fallback for images
            liveUrl: urlsData[lowerCaseId]?.liveUrl || "",
            repoUrl: urlsData[lowerCaseId]?.repoUrl || "",
            date: displayDate, // Use the translated or raw date
            role: t(roleKey),
            technologies: technologiesData[lowerCaseId] || [], // Technologies are not translated
            longDescription: t(longDescriptionKey),
            features: translatedFeatures, // Array of translated features
            challenges: t(challengesKey),
            solutions: t(solutionsKey),
        };
    }, [id, t, ready]); // Dependencies: re-calculate if id, t function (language change), or ready state changes

    // If i18n is not ready or project data couldn't be computed (e.g., invalid ID), return null
    // The parent <Suspense> will handle the 'not ready' state.
    // If ready but ID is invalid, projectDetailsData will be null.
    if (!projectDetailsData) {
         // Optional: Render a specific 'Not Found' message if ready but projectDetailsData is null
        if(ready) {
             return <div className="container mx-auto px-4 py-8">Project not found.</div>;
        }
        // If not ready, return null so Suspense fallback is shown
        return null;
    }

    // If ready and project data is available, render the details component
    return (
        <div className="container mx-auto px-4 py-8">
            {/* Render ProjectDetails with the fetched and translated data */}
            {/* The ProjectDetails component itself can still use t() for its *own* static labels */}
            <ProjectDetails {...projectDetailsData} />
        </div>
    );
}


// --- ProjectDetails Component ---
// This component receives the project-specific text ALREADY TRANSLATED as props.
// It uses useTranslation ONLY for its own static UI labels (like tab titles, button text, etc.).
export function ProjectDetails({
    title,          // Received already translated
    description,    // Received already translated
    images,
    liveUrl,
    repoUrl,
    date,           // Received already translated (if 'Ongoing')
    role,           // Received already translated
    technologies,   // Not translated
    longDescription,// Received already translated
    features,       // Array of already translated strings
    challenges,     // Received already translated
    solutions,      // Received already translated
}) {
    // useTranslation here is for UI elements *inside* this component
    const { t } = useTranslation("projects"); // Use the same namespace

    const [currentImage, setCurrentImage] = useState(0);

    return (
        // Ajusta el margen si es necesario, mx-35 parece alto. Quizás mx-auto o mx-4.
        <Card className="mx-auto my-5 max-w-4xl"> {/* Adjusted max-width and margin */}
            {/* Image Carousel */}
            {/* Added overflow hidden to the container */}
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] bg-muted overflow-hidden">
                <img
                    src={images[currentImage] || "/placeholder.svg"}
                    // Use t() for interpolated alt text, passing variables
                    alt={t('projects_details_imageAlt', { title: title, number: currentImage + 1 })}
                    className="object-contain w-full h-full" // Changed to object-contain to prevent stretching
                />
                {images.length > 1 && (
                    <>
                        {/* Prev/Next Buttons */}
                        <div className="absolute inset-0 flex items-center justify-between p-4">
                            <Button
                                variant="secondary" // Assuming secondary variant is visible on dark bg
                                size="icon"
                                // Adjusted button styling for better visibility and hover
                                className="bg-primary rounded-full opacity-80 hover:opacity-100 text-primary-foreground"
                                onClick={() =>
                                    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
                                }
                            >
                                {/* Use t() for screen reader text */}
                                <span className="sr-only">{t('projects_details_previous')}</span>
                                {/* SVG for chevron left */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="m15 18-6-6 6-6" /></svg>
                            </Button>
                            <Button
                                variant="secondary"
                                size="icon"
                                // Adjusted button styling
                                className="bg-primary rounded-full opacity-80 hover:opacity-100 text-primary-foreground"
                                onClick={() =>
                                    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
                                }
                            >
                                {/* Use t() for screen reader text */}
                                <span className="sr-only">{t('projects_details_next')}</span>
                                {/* SVG for chevron right */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="m9 18 6-6-6-6" /></svg>
                            </Button>
                        </div>
                        {/* Image Indicators */}
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    // Adjusted indicator styling for better contrast/hover
                                    className={`w-2.5 h-2.5 rounded-full transition-colors ${currentImage === index ? "bg-primary" : "bg-primary/30 hover:bg-primary/50"}`}
                                    onClick={() => setCurrentImage(index)}
                                >
                                    {/* Use t() for interpolated screen reader text */}
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
                        {/* title and description are already translated props */}
                        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-secondary">{title}</h2>
                        <p className="text-muted-foreground">{description}</p>
                    </div>
                    {/* Added shrink-0 to buttons container to prevent wrapping prematurely */}
                    <div className="flex flex-wrap gap-2 md:justify-end shrink-0">
                        {liveUrl && (
                            // Use t() for button text
                            <Button asChild size="sm"> {/* Added size */}
                                <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                    <Globe className="mr-2 h-4 w-4" />
                                    {t('projects_details_liveDemo')} {/* Translated */}
                                </a>
                            </Button>
                        )}
                        {repoUrl && (
                             // Use t() for button text
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
                 {/* Added borders and padding */}
                <div className="grid md:grid-cols-3 gap-6 mb-8 border-t border-b border-border py-4">
                    {date && (
                        // Use t() for label
                        <div className="flex items-center gap-2">
                             {/* Added shrink-0 */}
                            <Calendar className="h-5 w-5 text-primary shrink-0" />
                            <div>
                                <h3 className="font-medium">{t('projects_details_dateLabel')}</h3> {/* Translated */}
                                {/* date prop is already translated if 'Ongoing' */}
                                <p className="text-sm text-muted-foreground">{date}</p>
                            </div>
                        </div>
                    )}
                    {role && (
                        // Use t() for label
                        <div className="flex items-center gap-2">
                             {/* Added shrink-0 */}
                            <User className="h-5 w-5 text-primary shrink-0" />
                            <div>
                                <h3 className="font-medium">{t('projects_details_roleLabel')}</h3> {/* Translated */}
                                {/* role prop is already translated */}
                                <p className="text-sm text-muted-foreground">{role}</p>
                            </div>
                        </div>
                    )}
                    <div className="flex items-center gap-2">
                         {/* Use t() for label */}
                         {/* Added shrink-0 */}
                        <Code className="h-5 w-5 text-primary shrink-0" />
                        <div>
                            <h3 className="font-medium">{t('projects_details_technologiesLabel')}</h3> {/* Translated */}
                            <div className="flex flex-wrap gap-1 mt-1">
                                {/* technologies array is NOT translated */}
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
                    {/* Use t() for tab triggers */}
                     {/* Added margin bottom */}
                    <TabsList className="grid w-full grid-cols-3 mb-4">
                        <TabsTrigger value="overview">{t('projects_details_tabOverview')}</TabsTrigger> {/* Translated */}
                        <TabsTrigger value="features">{t('projects_details_tabFeatures')}</TabsTrigger> {/* Translated */}
                        <TabsTrigger value="challenges">{t('projects_details_tabChallenges')}</TabsTrigger> {/* Translated */}
                    </TabsList>
                    {/* Added prose styles for better typography */}
                    <TabsContent value="overview" className="pt-6 text-muted-foreground prose prose-sm max-w-none">
                        {/* longDescription and description props are already translated */}
                        <p>{longDescription || description}</p>
                    </TabsContent>
                     {/* Added prose styles */}
                    <TabsContent value="features" className="pt-6 prose prose-sm max-w-none">
                         {/* Use t() for section title */}
                         {/* Adjusted styling and added icon */}
                         <h3 className="text-lg font-medium mb-4 flex items-center gap-2 text-primary">
                             <Layers className="h-5 w-5" /> {/* Icon before text */}
                             {t('projects_details_featuresTitle')} {/* Translated */}
                         </h3>
                         {/* Removed list style and adjusted item styling */}
                         <ul className="space-y-2 list-none p-0">
                             {/* features array contains already translated strings */}
                             {features.map((feature, index) => (
                                 <li key={index} className="flex items-start gap-2 text-muted-foreground">
                                     {/* Checkmark icon */}
                                     <span className="text-green-500 mt-1">✓</span>
                                     <span>{feature}</span> {/* Already translated */}
                                 </li>
                             ))}
                         </ul>
                    </TabsContent>
                     {/* Added prose styles */}
                    <TabsContent value="challenges" className="pt-6 prose prose-sm max-w-none">
                         {/* Use t() for section titles */}
                         <h3 className="text-lg font-medium mb-2 text-primary">{t('projects_details_challengesTitle')}</h3> {/* Translated */}
                         {/* challenges prop is already translated */}
                         {challenges && <p className="mb-6 text-muted-foreground">{challenges}</p>}

                         <h3 className="text-lg font-medium mb-2 text-primary">{t('projects_details_solutionsTitle')}</h3> {/* Translated */}
                         {/* solutions prop is already translated */}
                         {solutions && <p className="text-muted-foreground">{solutions}</p>}
                    </TabsContent>
                </Tabs>

            </CardContent>
        </Card>
    );
}