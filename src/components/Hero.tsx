
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [titleWords, setTitleWords] = useState<string[]>([]);
  const fullTitle = "Création de Sites Web Innovants et Performants";
  const isMobile = useIsMobile();
  
  useEffect(() => {
    setLoaded(true);
    const words = fullTitle.split(" ");
    let displayedWords: string[] = [];
    
    const typeNextWord = (index: number) => {
      if (index < words.length) {
        displayedWords = [...displayedWords, words[index]];
        setTitleWords([...displayedWords]);
        setTimeout(() => typeNextWord(index + 1), 150);
      }
    };
    
    setTimeout(() => typeNextWord(0), 500);
  }, []);
  
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5 opacity-80"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-br from-elimyt-blue/10 to-elimyt-purple/10 animate-pulse-soft`}
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.1 + Math.random() * 0.2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className={`transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gradient">eLimyt</span>
              <span className="block mt-2 h-[2em] sm:h-auto">
                {titleWords.join(" ")}
                <span className="inline-block w-0.5 h-8 bg-foreground animate-pulse ml-1"></span>
              </span>
            </h1>
            <p className={`text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto transition-all delay-300 duration-700 ${
              isMobile ? "mt-24" : "mt-8"
            } mb-10 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              Sites professionnels à prix mini, livrés en 5 jours. Qualité garantie pour maximiser votre impact en ligne.
            </p>
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all delay-500 duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <Button asChild className="btn-primary group">
                <Link to="/contact">
                  Démarrez votre projet
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="hover-scale">
                <Link to="/portfolio">
                  Voir nos réalisations
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="currentColor"
            fillOpacity="1"
            className="text-background"
            d="M0,160L60,149.3C120,139,240,117,360,128C480,139,600,181,720,186.7C840,192,960,160,1080,149.3C1200,139,1320,149,1380,154.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
