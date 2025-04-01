
import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Globe,
  ShoppingCart,
  Smartphone,
  Search,
  BarChart,
  Zap,
  Code,
  Database,
  CheckCircle,
  ArrowRight
} from "lucide-react";

interface ServiceProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  price: string;
  features: string[];
  popular?: boolean;
}

const services: ServiceProps[] = [
  {
    id: "vitrine",
    icon: <Globe className="h-10 w-10" />,
    title: "Site Vitrine",
    description: "Présentez votre entreprise avec élégance. Solution idéale pour les PME et les indépendants qui souhaitent établir leur présence en ligne.",
    benefits: [
      "Design responsive sur mesure",
      "Optimisation pour les moteurs de recherche",
      "Intégration de formulaire de contact",
      "Optimisation des performances",
      "Hébergement et nom de domaine (1 an)"
    ],
    price: "À partir de 990€",
    features: [
      "4-6 pages",
      "Design moderne",
      "Responsive mobile",
      "Formulaire de contact",
      "Optimisation SEO de base",
      "Livraison sous 3 semaines"
    ]
  },
  {
    id: "ecommerce",
    icon: <ShoppingCart className="h-10 w-10" />,
    title: "E-commerce",
    description: "Lancez votre boutique en ligne et boostez vos ventes avec une expérience d'achat optimale. Solution complète de vente en ligne.",
    benefits: [
      "Plateforme de vente complète",
      "Paiement sécurisé",
      "Gestion des produits intuitive",
      "Design optimisé pour la conversion",
      "Suivi des commandes et des stocks"
    ],
    price: "À partir de 1990€",
    features: [
      "Catalogue de produits",
      "Panier d'achat",
      "Paiement sécurisé",
      "Gestion des stocks",
      "Dashboard admin",
      "Livraison sous 5 semaines"
    ],
    popular: true
  },
  {
    id: "refonte",
    icon: <Zap className="h-10 w-10" />,
    title: "Refonte de Site",
    description: "Donnez une nouvelle vie à votre site existant. Améliorez son design, ses performances et sa visibilité.",
    benefits: [
      "Analyse de l'existant",
      "Design moderne et ergonomique",
      "Amélioration des performances",
      "Optimisation du référencement",
      "Migration de contenu"
    ],
    price: "À partir de 1490€",
    features: [
      "Audit de l'existant",
      "Nouveau design",
      "Migration du contenu",
      "SEO avancé",
      "Formation à l'utilisation",
      "Livraison sous 4 semaines"
    ]
  }
];

const additionalServices = [
  {
    id: "seo",
    icon: <Search className="h-10 w-10" />,
    title: "Référencement SEO",
    description: "Améliorez votre visibilité sur les moteurs de recherche et attirez plus de visiteurs qualifiés."
  },
  {
    id: "mobile",
    icon: <Smartphone className="h-10 w-10" />,
    title: "Applications Mobiles",
    description: "Développez votre présence sur mobile avec une application native ou hybride adaptée à vos besoins."
  },
  {
    id: "analytics",
    icon: <BarChart className="h-10 w-10" />,
    title: "Analytique Web",
    description: "Mesurez et analysez le comportement de vos utilisateurs pour optimiser votre stratégie digitale."
  },
  {
    id: "maintenance",
    icon: <Code className="h-10 w-10" />,
    title: "Maintenance Web",
    description: "Gardez votre site web à jour, sécurisé et performant avec nos services de maintenance régulière."
  },
  {
    id: "hosting",
    icon: <Database className="h-10 w-10" />,
    title: "Hébergement & Domaine",
    description: "Solutions d'hébergement fiables et performantes, avec gestion de noms de domaine incluse."
  }
];

const ServiceCard = ({ id, icon, title, description, benefits, price, features, popular }: ServiceProps) => {
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
      id={id}
      ref={cardRef}
      className={`relative bg-white dark:bg-elimyt-dark/60 rounded-xl shadow-lg overflow-hidden transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${popular ? "border-2 border-primary" : ""}`}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg font-medium text-sm">
          Le plus demandé
        </div>
      )}
      <div className="p-6">
        <div className="mb-4">
          <div className="bg-gradient w-16 h-16 rounded-lg flex items-center justify-center mb-4 text-white">
            {icon}
          </div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-foreground/70 mb-4">{description}</p>
        </div>
        
        <div className="mb-6">
          <h4 className="font-medium mb-2">Ce que vous obtenez :</h4>
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex">
                <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                <span className="text-foreground/80">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="bg-muted p-6">
        <div className="text-2xl font-bold mb-4">{price}</div>
        <div className="mb-6">
          <h4 className="font-medium mb-2">Caractéristiques :</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-foreground/80">• {feature}</li>
            ))}
          </ul>
        </div>
        <Button asChild className={`w-full ${popular ? "bg-gradient" : ""}`}>
          <Link to="/contact">
            Demander un devis
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

const AdditionalServiceCard = ({ id, icon, title, description }: any) => {
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
      id={id}
      ref={cardRef}
      className={`bg-white dark:bg-elimyt-dark/60 rounded-xl p-6 shadow-lg transition-all duration-700 card-hover ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="bg-gradient w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-foreground/70 mb-4">{description}</p>
      <Link
        to="/contact"
        className="inline-flex items-center font-medium text-primary hover:text-primary/80 transition-colors"
      >
        En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
};

const ServicesPage = () => {
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
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div 
            ref={headerRef}
            className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nos <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg text-foreground/70">
              Des solutions web sur mesure pour répondre à tous vos besoins digitaux. 
              Nous vous accompagnons de la conception à la mise en ligne de votre projet.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Services <span className="text-gradient">Additionnels</span>
            </h2>
            <p className="text-foreground/70">
              Complétez votre projet web avec ces services complémentaires pour maximiser votre présence en ligne.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service) => (
              <AdditionalServiceCard key={service.id} {...service} />
            ))}
          </div>
        </div>
      </section>
      
      <CallToAction />
      <Footer />
    </div>
  );
};

export default ServicesPage;
