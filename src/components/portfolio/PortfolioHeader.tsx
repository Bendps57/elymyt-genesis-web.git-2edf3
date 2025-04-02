
import { useRef, useEffect, useState } from "react";

interface PortfolioHeaderProps {
  isVisible: boolean;
}

const PortfolioHeader = ({ isVisible }: PortfolioHeaderProps) => {
  return (
    <div 
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
  );
};

export default PortfolioHeader;
