
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
    image: "https://images.unsplash.com/photo-1626175330413-8e3785e01b29?auto=format&fit=crop&w=1200&h=800&q=80",
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
    image: "https://images.unsplash.com/photo-1542751110-9a0b214cdc26?auto=format&fit=crop&w=1200&h=800&q=80",
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
  },
  {
    id: "fitlifepro",
    title: "FitLifePro",
    category: "Site Vitrine",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&h=800&q=80",
    description: "Site pour un coach sportif avec système de réservation de séances intégré.",
    challenge: "FitLifePro avait besoin d'un site vitrine professionnel pour présenter ses services de coaching, mais également d'un système de réservation en ligne pour faciliter la prise de rendez-vous.",
    solution: "Développement d'un site vitrine dynamique avec intégration d'un système de réservation personnalisé, permettant aux clients de réserver et de payer leurs séances en ligne.",
    results: [
      "Acquisition de 50 nouveaux clients par mois",
      "Réduction de 70% du temps consacré à la gestion administrative",
      "Taux de satisfaction client de 98%"
    ],
    technologies: ["WordPress", "Elementor Pro", "WooCommerce Bookings", "PHP"],
    url: "#"
  },
  {
    id: "artisans-marketplace",
    title: "Artisans Marketplace",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?auto=format&fit=crop&w=1200&h=800&q=80",
    description: "Place de marché pour artisans permettant à plusieurs vendeurs de proposer leurs créations.",
    challenge: "Créer une plateforme multi-vendeurs permettant à des artisans de vendre leurs créations, avec un système de commission et une gestion indépendante pour chaque boutique.",
    solution: "Développement d'une marketplace complète avec inscription des vendeurs, gestion des boutiques individuelles, système de paiement multi-vendeurs et fonctionnalités sociales.",
    results: [
      "Plus de 100 artisans inscrits le premier mois",
      "Chiffre d'affaires de 50 000€ après 6 mois",
      "Taux de satisfaction vendeur de 94%"
    ],
    technologies: ["Laravel", "Vue.js", "MySQL", "AWS", "Stripe Connect"],
    url: "#"
  }
];
