
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Project } from "@/data/portfolioProjects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onViewDetails: (project: Project) => void;
}

const ProjectCard = ({ project, index, onViewDetails }: ProjectCardProps) => {
  return (
    <div
      className="group relative overflow-hidden rounded-xl shadow-lg card-hover transition-all duration-500"
      style={{ 
        transitionDelay: `${index * 100}ms`,
      }}
      onClick={() => onViewDetails(project)}
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
            onViewDetails(project);
          }}
          variant="outline"
          className="w-full"
        >
          Voir les détails
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
