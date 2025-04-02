
export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  url: string;
}

export const projects: Project[] = [
  {
    id: "vitall-securite",
    title: "Vitall Sécurité",
    category: "Site Vitrine",
    image: "https://www.wewatchsecurity.be/wp-content/uploads/2023/11/agents-de-gardiennage-1041x625.jpg",
    description: "Site vitrine pour une entreprise de sécurité et de vidéosurveillance.",
    challenge: "Vitall Sécurité avait besoin d'un site professionnel pour présenter ses services de sécurité et de vidéosurveillance, tout en générant de nouveaux prospects.",
    solution: "Création d'un site vitrine moderne avec une structure claire mettant en avant les différents services, ainsi qu'un formulaire de contact optimisé pour la conversion.",
    results: [
      "Amélioration de la visibilité en ligne",
      "Augmentation du nombre de demandes de devis",
      "Meilleur positionnement sur les moteurs de recherche"
    ],
    technologies: ["WordPress", "CSS personnalisé", "PHP", "JavaScript"],
    url: "https://www.vitallsecurite.fr"
  },
  {
    id: "centre-formation-lorraine",
    title: "Centre de Formation Lorraine",
    category: "Site Vitrine",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&h=800&q=80",
    description: "Plateforme dédiée à la formation professionnelle en Lorraine.",
    challenge: "Le Centre de Formation Lorraine avait besoin d'un site permettant de présenter leur catalogue de formations et de faciliter les inscriptions en ligne.",
    solution: "Développement d'une plateforme intuitive avec présentation détaillée des formations proposées et intégration d'un système d'inscription en ligne.",
    results: [
      "Augmentation des inscriptions aux formations",
      "Réduction du temps consacré à la gestion administrative",
      "Meilleure visibilité de l'offre de formation"
    ],
    technologies: ["WordPress", "Elementor", "PHP", "Formulaires personnalisés"],
    url: "https://www.centredeformationlorraine.fr"
  },
  {
    id: "pulsar-esport",
    title: "Pulsar eSport",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&h=800&q=80",
    description: "Site e-commerce et plateforme communautaire pour une équipe d'eSport professionnelle.",
    challenge: "Pulsar eSport avait besoin d'une plateforme complète intégrant à la fois un site communautaire pour leurs fans et une boutique en ligne pour leurs produits dérivés.",
    solution: "Création d'un site multi-fonctionnel avec un espace communautaire, un blog d'actualités, et une boutique e-commerce complète avec système de paiement sécurisé.",
    results: [
      "Forte augmentation de l'engagement des fans",
      "Croissance de 40% des ventes de produits dérivés",
      "Centralisation efficace de la présence en ligne de l'équipe"
    ],
    technologies: ["WordPress", "WooCommerce", "BuddyPress", "JavaScript", "PHP"],
    url: "https://pulsar-esport.fr"
  },
  {
    id: "squad-esports",
    title: "Squad eSports",
    category: "Blog",
    image: "https://i0.wp.com/squadesports.com/wp-content/uploads/2025/03/Squad-Arena.png?w=640&quality=36&ssl=1",
    description: "Plateforme d'actualités et de contenu sur l'univers du gaming et des compétitions eSport.",
    challenge: "Squad eSports cherchait à créer un média en ligne dédié aux actualités eSport avec un système de gestion de contenu efficace et une interface attrayante pour les lecteurs.",
    solution: "Développement d'une plateforme de blog optimisée pour le référencement avec catégorisation avancée, système de commentaires, et intégration de médias sociaux.",
    results: [
      "12,000 visiteurs mensuels atteints en 6 mois",
      "Position de référence dans l'actualité eSport francophone",
      "Monétisation efficace via des partenariats stratégiques"
    ],
    technologies: ["WordPress", "Gutenberg", "Advanced Custom Fields", "SEO Yoast", "Google Analytics"],
    url: "https://squadesports.com"
  }
];
