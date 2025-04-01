
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  results: string;
  url?: string;
}

const projects: Project[] = [
  {
    id: "vitall-securite",
    title: "Vitall Sécurité",
    category: "Site Vitrine",
    image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?auto=format&fit=crop&w=600&h=400&q=80",
    description: "Site vitrine pour une entreprise de sécurité et de vidéosurveillance.",
    results: "Amélioration de la visibilité en ligne et acquisition de nouveaux clients",
    url: "https://www.vitallsecurite.fr"
  },
  {
    id: "centre-formation-lorraine",
    title: "Centre de Formation Lorraine",
    category: "Site Vitrine",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&h=400&q=80",
    description: "Plateforme dédiée à la formation professionnelle en Lorraine.",
    results: "Augmentation des inscriptions aux formations et meilleure visibilité",
    url: "https://www.centredeformationlorraine.fr"
  },
  {
    id: "eco-shop",
    title: "Eco-Shop",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&h=400&q=80",
    description: "Création d'une boutique en ligne spécialisée dans les produits écologiques.",
    results: "Taux de conversion amélioré de 25%"
  },
  {
    id: "travelwise",
    title: "TravelWise",
    category: "Blog",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&h=400&q=80",
    description: "Blog de voyage avec intégration de systèmes de réservation et de conseils personnalisés.",
    results: "12,000 visiteurs mensuels en 6 mois"
  }
];

const categories = ["Tous", "Site Vitrine", "E-commerce", "Blog"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
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
  
  return (
    <section id="portfolio" ref={sectionRef} className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nos <span className="text-gradient">Réalisations</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Découvrez quelques-uns de nos projets récents et les résultats obtenus
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
        
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 transition-opacity duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-xl card-hover transition-all duration-500"
              style={{ 
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-sm font-medium text-white/70 bg-primary/80 rounded-full px-3 py-1 inline-block w-fit mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/90 mb-2">{project.description}</p>
                <div className="bg-white/20 rounded-lg px-3 py-2 text-white text-sm mb-4 w-fit">
                  <span className="font-bold">Résultats:</span> {project.results}
                </div>
                <div className="flex items-center gap-2">
                  <Link to={`/portfolio/${project.id}`} className="text-white hover:text-white/90 inline-flex items-center font-medium">
                    Voir le projet <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/90 inline-flex items-center font-medium ml-4">
                      Visiter le site <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="btn-primary">
            <Link to="/portfolio">
              Voir tous nos projets
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
