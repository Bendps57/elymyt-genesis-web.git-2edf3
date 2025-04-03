
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { contactInfoData } from "./ContactInfo";

const ContactFormComponent = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const emailFormRef = useRef<HTMLFormElement>(null);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (emailFormRef.current) {
        // Récupération du formulaire pour l'envoyer directement
        const formData = new FormData(emailFormRef.current);
        
        const response = await fetch('https://formsubmit.co/contact@elimyt.com', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          },
        });
        
        if (response.ok) {
          // Succès
          setFormSubmitted(true);
          toast.success("Votre message a été envoyé avec succès! Nous vous contacterons bientôt.", {
            description: "Merci de nous avoir contacté",
            action: {
              label: "Fermer",
              onClick: () => console.log("Toast closed")
            }
          });
          
          // Reset form
          emailFormRef.current.reset();
        } else {
          throw new Error("Erreur réseau lors de l'envoi");
        }
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du message:", error);
      toast.error("Une erreur est survenue lors de l'envoi de votre message", {
        description: "Veuillez réessayer plus tard ou nous contacter directement par WhatsApp",
        action: {
          label: "Fermer",
          onClick: () => console.log("Toast closed")
        }
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="bg-white dark:bg-elimyt-dark/40 p-8 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold mb-6">
        Envoyez-nous un message
      </h3>
      
      {formSubmitted ? (
        <Alert className="mb-4 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
          <AlertTitle className="text-green-800 dark:text-green-300">Message envoyé avec succès</AlertTitle>
          <AlertDescription className="text-green-700 dark:text-green-400">
            Nous avons bien reçu votre message et vous contacterons dans les plus brefs délais.
            Vous pouvez également nous joindre directement par WhatsApp au {contactInfoData[1].value}.
          </AlertDescription>
        </Alert>
      ) : (
        <form 
          ref={emailFormRef} 
          onSubmit={handleSubmit} 
          className="space-y-5"
          action="https://formsubmit.co/contact@elimyt.com" 
          method="POST"
        >
          {/* Configuration FormSubmit.co */}
          <input type="hidden" name="_subject" value="Nouveau message depuis votre site web" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value={window.location.href} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Nom
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Votre nom"
                required
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="votre@email.com"
                required
                className="w-full"
              />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-1">
              Sujet
            </label>
            <Input
              id="subject"
              name="subject"
              placeholder="Sujet de votre message"
              required
              className="w-full"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Décrivez votre projet ou posez-nous vos questions..."
              rows={5}
              required
              className="w-full resize-none"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gradient hover-scale"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>Envoi en cours...</>
            ) : (
              <>
                Envoyer le message
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
          <p className="text-sm text-muted-foreground text-center">
            Ou contactez-nous directement par WhatsApp au {contactInfoData[1].value}
          </p>
        </form>
      )}
      
      <ContactFormBenefits />
    </div>
  );
};

export default ContactFormComponent;

// Benefits Component
export const ContactFormBenefits = () => {
  return (
    <div className="mt-8 pt-6 border-t">
      <h4 className="font-medium mb-4">Pourquoi nous contacter ?</h4>
      <ul className="space-y-2">
        {[
          "Pour demander un devis gratuit et sans engagement",
          "Pour discuter de votre projet et recevoir des conseils",
          "Pour toute question sur nos services et tarifs"
        ].map((item, index) => (
          <li key={index} className="flex">
            <CheckCircleIcon className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
            <span className="text-foreground/80">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Missing CheckCircle icon import
import { CheckCircle as CheckCircleIcon } from "lucide-react";
