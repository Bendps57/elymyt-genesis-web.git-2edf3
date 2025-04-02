
import { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Adil",
    company: "Gérant, Vitall Sécurité",
    content: "eLimyt a créé un site web qui répond parfaitement à nos besoins. Notre entreprise de sécurité avait besoin d'un site professionnel qui inspire confiance, et c'est exactement ce que nous avons obtenu. Le processus a été simple et rapide, et le résultat est impressionnant.",
    rating: 5
  },
  {
    id: 2,
    name: "Eric",
    company: "Responsable de formation, Centre de Formation Lorraine",
    content: "Nous cherchions à moderniser notre présence en ligne pour mieux présenter nos formations. eLimyt a dépassé nos attentes avec un site intuitif qui a considérablement augmenté nos inscriptions. Leur expertise technique et leur compréhension de nos besoins ont fait toute la différence.",
    rating: 5
  },
  {
    id: 3,
    name: "Céline",
    company: "Gérante, TMLC Services, cabinet comptable",
    content: "Je cherchais un partenaire fiable pour créer le site de mon cabinet comptable, et eLimyt a dépassé toutes mes attentes. Le site est professionnel et j'ai déjà reçu de nombreux compliments de mes clients.",
    rating: 5
  },
  {
    id: 4,
    name: "Pierre Dubois",
    company: "Conseil Immobilier",
    content: "Une équipe professionnelle et réactive qui a su comprendre nos besoins et les traduire en un site web performant. Notre trafic a doublé en trois mois !",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
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
  
  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (isVisible && !isAnimating) {
        handleNext();
      }
    }, 8000);
    
    return () => clearInterval(interval);
  }, [isAnimating, isVisible]);
  
  return (
    <section ref={sectionRef} className="section-padding bg-muted relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-elimyt-blue/5"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-elimyt-purple/5"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ce Que Disent <span className="text-gradient">Nos Clients</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Découvrez les expériences de ceux qui nous ont fait confiance pour leurs projets web
          </p>
        </div>
        
        <div className={`transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl bg-white dark:bg-elimyt-dark/40 shadow-xl">
              <div 
                className="transition-transform duration-500 ease-out flex"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="min-w-full p-8 md:p-12"
                  >
                    <div className="flex flex-col gap-6">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-5 w-5 ${
                                i < testimonial.rating 
                                  ? "text-yellow-400 fill-yellow-400" 
                                  : "text-gray-300"
                              }`} 
                            />
                          ))}
                        </div>
                        <blockquote className="text-lg md:text-xl italic mb-4 text-foreground/90">
                          "{testimonial.content}"
                        </blockquote>
                        <div>
                          <p className="font-bold text-lg">{testimonial.name}</p>
                          <p className="text-foreground/70">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === index 
                      ? "bg-primary w-8" 
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between pointer-events-none">
              <Button
                onClick={handlePrev}
                className="rounded-full bg-white/80 dark:bg-foreground/10 text-foreground shadow-md hover:bg-white dark:hover:bg-foreground/20 pointer-events-auto"
                size="icon"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </Button>
              <Button
                onClick={handleNext}
                className="rounded-full bg-white/80 dark:bg-foreground/10 text-foreground shadow-md hover:bg-white dark:hover:bg-foreground/20 pointer-events-auto"
                size="icon"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
