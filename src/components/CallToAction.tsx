
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const CallToAction = () => {
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
  
  const benefits = [
    "Garantie de satisfaction",
    "Sites web ultra-rapides",
    "Design sur mesure",
    "Support après-vente",
    "Optimisation SEO incluse",
    "Délais respectés"
  ];
  
  return (
    <section 
      ref={sectionRef} 
      className="section-padding bg-gradient text-white relative overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full border border-white/40"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full border border-white/30"></div>
        <div className="absolute top-40 left-20 w-40 h-40 rounded-full border border-white/20"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div 
          className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à Booster Votre Présence En Ligne?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Faites grandir votre entreprise avec un site web moderne, 
            à prix abordable et optimisé pour convertir vos visiteurs en clients.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`flex items-center transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                <span className="text-white/90">{benefit}</span>
              </div>
            ))}
          </div>
          
          <div 
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-medium px-8 py-6 text-lg hover-scale"
            >
              <Link to="/contact">
                Démarrez votre projet maintenant
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="mt-4 text-white/80 text-sm">
              Ou <Link to="/contact" className="underline">contactez-nous</Link> pour discuter de vos besoins spécifiques
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
