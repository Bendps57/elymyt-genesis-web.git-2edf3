import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  url?: string;
}

const projects: Project[] = [
  {
    id: "vitall-securite",
    title: "Vitall Sécurité",
    category: "Site Vitrine",
    image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?auto=format&fit=crop&w=1200&h=800&q=80",
    description: "Site vitrine pour une entreprise de sécurité et de vidéosurveillance.",
    challenge: "Vitall Sécurité avait besoin d'un site professionnel pour présenter ses services de sécurité et de vidéosurveillance, tout en générant de nouveaux prospects.",
    solution: "Création d'un site vitrine moderne avec une structure claire mettant en avant les différents services, ainsi qu'un formulaire de contact optimisé pour la conversion.",
    results: [
      "Amélioration de la visibilité en ligne",
      "Augmentation du nombre de demandes de devis",
      "Meilleur positionnement sur les moteurs de recherche"
    ],
    technologies: ["WordPress", "CSS personnalisé", "PHP", "JavaScript"],
    url: "https://www.vitallsecurite.fr"
  },
  {
    id: "centre-formation-lorraine",
    title: "Centre de Formation Lorraine",
    category: "Site Vitrine",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&h=800&q=80",
    description: "Plateforme dédiée à la formation professionnelle en Lorraine.",
    challenge: "Le Centre de Formation Lorraine avait besoin d'un site permettant de présenter leur catalogue de formations et de faciliter les inscriptions en ligne.",
    solution: "Développement d'une plateforme intuitive avec présentation détaillée des formations proposées et intégration d'un système d'inscription en ligne.",
    results: [
      "Augmentation des inscriptions aux formations",
      "Réduction du temps consacré à la gestion administrative",
      "Meilleure visibilité de l'offre de formation"
    ],
    technologies: ["WordPress", "Elementor", "PHP", "Formulaires personnalisés"],
    url: "https://www.centredeformationlorraine.fr"
  },
  {
    id: "eco-shop",
    title: "Eco-Shop",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&h=800&q=80",
    description: "Création d'une boutique en ligne spécialisée dans les produits écologiques et durables.",
    challenge: "Eco-Shop avait besoin d'une plateforme e-commerce reflétant leurs valeurs écologiques, tout en offrant une expérience d'achat fluide et un système de gestion des stocks efficace.",
    solution: "Développement d'une boutique en ligne sur mesure avec une interface utilisateur intuitive, un système de paiement sécurisé et un back-office complet pour la gestion des produits et des commandes.",
    results: [
      "Taux de conversion amélioré de 25%",
      "Panier moyen augmenté de 35%",
      "Réduction du taux d'abandon de panier de 40%"
    ],
    technologies: ["WooCommerce", "WordPress", "PHP", "MySQL", "Stripe"],
    url: ""
  },
  {
    id: "travelwise",
    title: "TravelWise",
    category: "Blog",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&h=800&q=80",
    description: "Blog de voyage avec intégration de systèmes de réservation et de conseils personnalisés.",
    challenge: "TravelWise souhaitait créer une plateforme de contenu riche autour du voyage, tout en intégrant des fonctionnalités de monétisation et de recommandation personnalisée.",
    solution: "Création d'un blog moderne avec un système de catégorisation avancé, une architecture de contenu optimisée pour le SEO, et l'intégration d'APIs de réservation de voyages.",
    results: [
      "12,000 visiteurs mensuels en 6 mois",
      "Taux d'engagement de 4 minutes en moyenne par visite",
      "Revenus d'affiliation multipliés par 3"
    ],
    technologies: ["Gatsby", "React", "GraphQL", "Netlify CMS", "APIs externes"],
    url: ""
  },
  {
    id: "fitlifepro",
    title: "FitLifePro",
    category: "Site Vitrine",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&h=800&q=80",
    description: "Site pour un coach sportif avec système de réservation de séances intégré.",
    challenge: "FitLifePro avait besoin d'un site vitrine professionnel pour présenter ses services de coaching, mais également d'un système de réservation en ligne pour faciliter la prise de rendez-vous.",
    solution: "Développement d'un site vitrine dynamique avec intégration d'un système de réservation personnalisé, permettant aux clients de réserver et de payer leurs séances en ligne.",
    results: [
      "Acquisition de 50 nouveaux clients par mois",
      "Réduction de 70% du temps consacré à la gestion administrative",
      "Taux de satisfaction client de 98%"
    ],
    technologies: ["WordPress", "Elementor Pro", "WooCommerce Bookings", "PHP"],
    url: "#"
  },
  {
    id: "tech-solutions",
    title: "Tech Solutions",
    category: "Application Web",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&h=800&q=80",
    description: "Plateforme de gestion de projets IT pour une entreprise de services numériques.",
    challenge: "Tech Solutions avait besoin d'une application web sur mesure pour gérer leurs projets, ressources et clients, tout en offrant un tableau de bord analytique pour suivre la performance.",
    solution: "Création d'une application web complète avec gestion des utilisateurs, des projets, des tâches et des ressources, accompagnée d'un tableau de bord analytique personnalisable.",
    results: [
      "Productivité interne augmentée de 35%",
      "Réduction des délais de livraison de 25%",
      "Amélioration de la satisfaction client de 40%"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "JWT"],
    url: "#"
  },
  {
    id: "artisans-marketplace",
    title: "Artisans Marketplace",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?auto=format&fit=crop&w=1200&h=800&q=80",
    description: "Place de marché pour artisans permettant à plusieurs vendeurs de proposer leurs créations.",
    challenge: "Créer une plateforme multi-vendeurs permettant à des artisans de vendre leurs créations, avec un système de commission et une gestion indépendante pour chaque boutique.",
    solution: "Développement d'une marketplace complète avec inscription des vendeurs, gestion des boutiques individuelles, système de paiement multi-vendeurs et fonctionnalités sociales.",
    results: [
      "Plus de 100 artisans inscrits le premier mois",
      "Chiffre d'affaires de 50 000€ après 6 mois",
      "Taux de satisfaction vendeur de 94%"
    ],
    technologies: ["Laravel", "Vue.js", "MySQL", "AWS", "Stripe Connect"],
    url: "#"
  }
];

const categories = ["Tous", "Site Vitrine", "E-commerce", "Blog", "Application Web"];

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    if (activeCategory === "Tous") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === activeCategory)
      );
    }
  }, [activeCategory]);
  
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      const project = projects.find(p => p.id === hash);
      if (project) {
        setSelectedProject(project);
      }
    }
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div 
            ref={headerRef}
            className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Notre <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-lg text-foreground/70">
              Découvrez nos réalisations récentes et comment nous avons aidé nos clients 
              à atteindre leurs objectifs avec des solutions web sur mesure.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`rounded-full ${
                  activeCategory === category 
                    ? "bg-gradient" 
                    : "hover:border-primary/50"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-xl shadow-lg card-hover transition-all duration-500"
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <Badge variant="outline" className="mb-2">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 mb-4">{project.description}</p>
                  <Button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    variant="outline"
                    className="w-full"
                  >
                    Voir les détails
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overscroll-contain">
          <div className="bg-white dark:bg-elimyt-dark/95 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                </svg>
              </button>
              <div className="absolute bottom-4 left-4">
                <Badge className="bg-primary text-white">
                  {selectedProject.category}
                </Badge>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{selectedProject.title}</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Le Challenge</h3>
                <p className="text-foreground/70 mb-4">{selectedProject.challenge}</p>
                
                <h3 className="text-lg font-medium mb-2">Notre Solution</h3>
                <p className="text-foreground/70 mb-4">{selectedProject.solution}</p>
                
                <h3 className="text-lg font-medium mb-2">Résultats</h3>
                <ul className="space-y-2 mb-4">
                  {selectedProject.results.map((result, index) => (
                    <li key={index} className="flex">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-foreground/70">{result}</span>
                    </li>
                  ))}
                </ul>
                
                <h3 className="text-lg font-medium mb-2">Technologies Utilisées</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-6">
                  {selectedProject.url && (
                    <Button asChild className="bg-gradient">
                      <a href={selectedProject.url} target="_blank" rel="noopener noreferrer">
                        Visiter le site
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  <Button
                    asChild
                    variant="outline"
                  >
                    <Link to="/contact">
                      Démarrer un projet similaire
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <CallToAction />
      <Footer />
    </div>
  );
};

export default PortfolioPage;
