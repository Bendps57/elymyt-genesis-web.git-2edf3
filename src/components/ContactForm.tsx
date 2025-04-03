
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Mail, MapPin, Send, MessageSquare } from "lucide-react";
import { toast } from "sonner";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
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
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    
    // Create email content
    const emailContent = `
      Nom: ${name}
      Email: ${email}
      Sujet: ${subject}
      Message: ${message}
    `;
    
    try {
      // Using EmailJS as a simple email service
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "default_service", // You will need to set up EmailJS for this to work
          template_id: "template_default", // And create a template
          user_id: "user_id", // And add your user ID
          template_params: {
            to_email: "contact@elimyt.com",
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
          },
        }),
      });
      
      if (response.status === 200) {
        toast.success("Votre message a été envoyé avec succès! Nous vous contacterons bientôt.", {
          description: "Merci de nous avoir contacté",
          action: {
            label: "Fermer",
            onClick: () => console.log("Toast closed")
          }
        });
        
        // Reset form
        e.currentTarget.reset();
      } else {
        throw new Error("Une erreur est survenue lors de l'envoi");
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
  
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "contact@elimyt.com"
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      label: "WhatsApp",
      value: "+33 7 89 02 68 90"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Adresse",
      value: "rue de verdun 57700 Hayange"
    }
  ];
  
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
          <div className="bg-white dark:bg-elimyt-dark/40 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">
              Envoyez-nous un message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
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
            </form>
            
            <div className="mt-8 pt-6 border-t">
              <h4 className="font-medium mb-4">Pourquoi nous contacter ?</h4>
              <ul className="space-y-2">
                {[
                  "Pour demander un devis gratuit et sans engagement",
                  "Pour discuter de votre projet et recevoir des conseils",
                  "Pour toute question sur nos services et tarifs"
                ].map((item, index) => (
                  <li key={index} className="flex">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div 
            className="lg:mt-12"
            style={{ transitionDelay: "200ms" }}
          >
            <div className="bg-muted p-8 rounded-2xl shadow-lg mb-8">
              <h3 className="text-2xl font-bold mb-6">
                Informations de contact
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-primary/10 rounded-full p-3 mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-foreground/70">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.7147115115424!2d6.070149676773093!3d49.31016457200271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4795230cbdd0cae7%3A0x9c4b022941e4bc97!2s60%20Rue%20de%20Verdun%2C%2057700%20Hayange%2C%20France!5e0!3m2!1sen!2sus!4v1718116287066!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="eLimyt Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
