
import { useRef, useState, useEffect } from "react";
import ContactFormComponent from "./ContactFormComponent";
import ContactInfo from "./ContactInfo";
import LocationMap from "./LocationMap";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  
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
    
    if (formRef.current) {
      observer.observe(formRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contactez <span className="text-gradient">Nous</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Discutons de votre projet et voyons comment nous pouvons vous aider à atteindre vos objectifs
          </p>
        </div>
        
        <div 
          ref={formRef}
          className={`max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <ContactFormComponent />
          
          <div 
            className="lg:mt-12"
            style={{ transitionDelay: "200ms" }}
          >
            <ContactInfo />
            <LocationMap />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
