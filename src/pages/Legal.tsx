
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Legal = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Mentions Légales</h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>1. Informations légales</h2>
              <p>
                Le site eLimyt est édité par eLimyt, entreprise individuelle dont le siège social est situé au 60 rue de Verdun, 57700 Hayange, France.
              </p>
              <p>
                <strong>Responsable de publication :</strong> Benoit Wemmert<br />
                <strong>Téléphone :</strong> +33 7 89 02 68 90<br />
                <strong>Email :</strong> ben.wemmert@gmail.com
              </p>
              
              <h2>2. Hébergement</h2>
              <p>
                Le site eLimyt est hébergé par HOSTINGER, dont le siège social est situé à HOSTINGER INTERNATIONAL LTD, 61 Lordou Vironos Street, 6023 Larnaca, Chypre.
              </p>
              
              <h2>3. Propriété intellectuelle</h2>
              <p>
                L'ensemble du contenu du site eLimyt (textes, graphismes, logos, images, vidéos, etc.) est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.
              </p>
              <p>
                Toute reproduction totale ou partielle de ce contenu est strictement interdite sans autorisation préalable.
              </p>
              
              <h2>4. Limitation de responsabilité</h2>
              <p>
                eLimyt s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur son site, dont elle se réserve le droit de corriger le contenu à tout moment et sans préavis. eLimyt décline toute responsabilité :
              </p>
              <ul>
                <li>Pour toute interruption du site</li>
                <li>Pour toute survenance de bogues</li>
                <li>Pour tout dommage résultant d'une intrusion frauduleuse d'un tiers</li>
                <li>Et plus généralement pour tout dommage, direct ou indirect, quelles qu'en soient les causes, origines, natures ou conséquences</li>
              </ul>
              
              <h2>5. Liens hypertextes</h2>
              <p>
                Le site eLimyt peut contenir des liens hypertextes vers d'autres sites internet. eLimyt n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
              </p>
              
              <h2>6. Droit applicable et juridiction compétente</h2>
              <p>
                Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Legal;
