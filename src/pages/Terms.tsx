
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Conditions Générales de Vente</h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="lead">
                Dernière mise à jour : {new Date().toLocaleDateString()}
              </p>
              
              <h2>1. Objet</h2>
              <p>
                Les présentes Conditions Générales de Vente (ci-après les "CGV") régissent les relations contractuelles entre eLimyt (ci-après le "Prestataire") et ses clients (ci-après le "Client") dans le cadre de la fourniture de services de création et de développement de sites web et d'applications.
              </p>
              
              <h2>2. Services proposés</h2>
              <p>
                Le Prestataire propose les services suivants :
              </p>
              <ul>
                <li>Création de sites vitrine</li>
                <li>Développement de sites e-commerce</li>
                <li>Refonte de sites web existants</li>
                <li>Optimisation SEO</li>
                <li>Maintenance web</li>
              </ul>
              
              <h2>3. Tarifs et modalités de paiement</h2>
              <p>
                Les tarifs des services sont indiqués en euros et hors taxes. Le Prestataire se réserve le droit de modifier ses tarifs à tout moment, mais les services seront facturés sur la base des tarifs en vigueur au moment de la validation de la commande.
              </p>
              <p>
                Sauf mention contraire, les modalités de paiement sont les suivantes :
              </p>
              <ul>
                <li>Un acompte de 30% à la signature du devis</li>
                <li>Le solde à la livraison du projet</li>
              </ul>
              <p>
                Tout retard de paiement donnera lieu à l'application de pénalités de retard au taux d'intérêt légal en vigueur, majoré de 3 points.
              </p>
              
              <h2>4. Processus de commande et délais</h2>
              <p>
                La commande est validée après acceptation du devis par le Client et réception de l'acompte par le Prestataire. Les délais de livraison indiqués sur le site sont donnés à titre indicatif et peuvent varier en fonction de la complexité du projet.
              </p>
              <p>
                Pour les sites vitrine, la livraison est prévue sous 5 jours ouvrables à compter de la validation de la commande et de la réception de tous les éléments nécessaires à la réalisation du projet.
              </p>
              <p>
                Pour les sites e-commerce, la livraison est prévue sous 2 semaines ouvrables à compter de la validation de la commande et de la réception de tous les éléments nécessaires à la réalisation du projet.
              </p>
              
              <h2>5. Obligations du Client</h2>
              <p>
                Le Client s'engage à :
              </p>
              <ul>
                <li>Fournir tous les éléments nécessaires à la réalisation du projet (textes, images, logo, etc.) dans les délais convenus</li>
                <li>Disposer des droits nécessaires sur les éléments fournis (droits d'auteur, droits à l'image, etc.)</li>
                <li>Collaborer activement avec le Prestataire pour la bonne réalisation du projet</li>
                <li>Valider les différentes étapes du projet dans les délais convenus</li>
              </ul>
              
              <h2>6. Obligations du Prestataire</h2>
              <p>
                Le Prestataire s'engage à :
              </p>
              <ul>
                <li>Réaliser les services conformément au devis accepté par le Client</li>
                <li>Respecter les délais de livraison convenus, sous réserve que le Client ait fourni tous les éléments nécessaires à la réalisation du projet dans les délais impartis</li>
                <li>Informer le Client de toute difficulté rencontrée durant la réalisation du projet</li>
              </ul>
              
              <h2>7. Propriété intellectuelle</h2>
              <p>
                Le Prestataire cède au Client l'ensemble des droits de propriété intellectuelle sur les créations réalisées dans le cadre du projet, après paiement intégral du prix convenu.
              </p>
              <p>
                Le Client autorise le Prestataire à mentionner son nom et à présenter le projet réalisé dans ses références commerciales, sauf mention contraire explicite.
              </p>
              
              <h2>8. Garantie et maintenance</h2>
              <p>
                Le Prestataire garantit le bon fonctionnement des sites et applications livrés pendant une durée de 3 mois à compter de la livraison.
              </p>
              <p>
                Des services de maintenance peuvent être proposés au Client selon des conditions définies dans un contrat spécifique.
              </p>
              
              <h2>9. Limitation de responsabilité</h2>
              <p>
                La responsabilité du Prestataire ne pourra être engagée qu'en cas de faute prouvée et est limitée au montant des sommes effectivement versées par le Client.
              </p>
              <p>
                Le Prestataire ne saurait être tenu responsable des conséquences d'une utilisation non conforme ou frauduleuse des sites et applications livrés.
              </p>
              
              <h2>10. Force majeure</h2>
              <p>
                Le Prestataire ne pourra être tenu responsable d'un retard ou d'une inexécution de ses obligations en cas de force majeure, telle que définie par la jurisprudence française.
              </p>
              
              <h2>11. Droit applicable et juridiction compétente</h2>
              <p>
                Les présentes CGV sont soumises au droit français. En cas de litige, les tribunaux du ressort du siège social du Prestataire seront seuls compétents, sauf disposition légale contraire.
              </p>
              
              <h2>12. Dispositions diverses</h2>
              <p>
                Si l'une quelconque des stipulations des présentes CGV était annulée, cette nullité n'entraînerait pas la nullité des autres stipulations qui demeureront en vigueur entre les parties.
              </p>
              <p>
                Toute tolérance ou renonciation du Prestataire, dans l'application de tout ou partie des engagements prévus dans les présentes CGV, quelles qu'en aient pu être la fréquence et la durée, ne saurait valoir modification des présentes CGV ni générer un droit quelconque.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Terms;
