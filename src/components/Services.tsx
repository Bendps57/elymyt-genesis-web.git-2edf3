
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Globe,
  ShoppingCart,
  Smartphone,
  BarChart,
  Search,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
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
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div
      ref={cardRef}
      className={`bg-white dark:bg-elimyt-dark/60 rounded-xl p-6 shadow-lg card-hover transition-all duration-700 ${
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      <div className="bg-gradient w-14 h-14 rounded-lg flex items-center justify-center mb-5 text-white">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-foreground/70 mb-4">{description}</p>
      <Link 
        to="/services" 
        className="inline-flex items-center font-medium text-primary hover:text-primary/80 transition-colors"
      >
        En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-7 w-7" />,
      title: "Site Vitrine",
      description: "Présentez votre entreprise avec élégance. Idéal pour les PME et les indépendants.",
      delay: 1
    },
    {
      icon: <ShoppingCart className="h-7 w-7" />,
      title: "E-commerce",
      description: "Lancez votre boutique en ligne et boostez vos ventes avec une expérience d'achat optimale.",
      delay: 2
    },
    {
      icon: <Smartphone className="h-7 w-7" />,
      title: "Sites Responsifs",
      description: "Des sites parfaitement adaptés à tous les écrans, du mobile à l'ordinateur.",
      delay: 3
    },
    {
      icon: <Search className="h-7 w-7" />,
      title: "Référencement SEO",
      description: "Optimisez votre visibilité sur les moteurs de recherche et attirez plus de clients.",
      delay: 4
    },
    {
      icon: <BarChart className="h-7 w-7" />,
      title: "Analytique Web",
      description: "Mesurez votre performance en ligne et prenez des décisions basées sur les données.",
      delay: 5
    },
    {
      icon: <Zap className="h-7 w-7" />,
      title: "Performance",
      description: "Sites rapides et optimisés pour une expérience utilisateur exceptionnelle.",
      delay: 6
    },
  ];

  return (
    <section id="services" className="section-padding bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nos <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Des solutions web sur mesure pour répondre à tous vos besoins digitaux
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild className="btn-primary">
            <Link to="/services">
              Voir tous nos services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
