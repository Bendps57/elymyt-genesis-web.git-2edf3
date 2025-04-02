
import { Project } from "@/data/portfolioProjects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
}

const ProjectDetails = ({ project, onClose }: ProjectDetailsProps) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 overscroll-contain">
      <div className="bg-white dark:bg-elimyt-dark/95 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-t-xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </svg>
          </button>
          <div className="absolute bottom-4 left-4">
            <Badge className="bg-primary text-white">
              {project.category}
            </Badge>
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Le Challenge</h3>
            <p className="text-foreground/70 mb-4">{project.challenge}</p>
            
            <h3 className="text-lg font-medium mb-2">Notre Solution</h3>
            <p className="text-foreground/70 mb-4">{project.solution}</p>
            
            <h3 className="text-lg font-medium mb-2">Résultats</h3>
            <ul className="space-y-2 mb-4">
              {project.results.map((result, index) => (
                <li key={index} className="flex">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-foreground/70">{result}</span>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-medium mb-2">Technologies Utilisées</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
            
            <div className="flex gap-4 mt-6">
              <Button asChild className="bg-gradient">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  Visiter le site
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
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
  );
};

export default ProjectDetails;
