
import { useState, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfoData } from "../contact/ContactInfo";

// Récupération du numéro WhatsApp depuis les données de contact
const whatsappNumber = contactInfoData[1].value.replace(/\s+/g, '');

interface ChatWidgetProps {
  initialMessage?: string;
}

const ChatWidget = ({ initialMessage = "Bonjour, j'aimerais discuter de mon projet..." }: ChatWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(initialMessage);
  const [isVisible, setIsVisible] = useState(false);

  // Animation d'entrée du widget après chargement de la page
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleWhatsApp = () => {
    // Encodage du message pour l'URL
    const encodedMessage = encodeURIComponent(message);
    // Création de l'URL WhatsApp avec le numéro et le message pré-rempli
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      className={`fixed bottom-5 right-5 z-50 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      {!isOpen ? (
        <Button 
          onClick={toggleChat} 
          className="rounded-full p-4 w-16 h-16 bg-gradient hover:scale-110 transition-transform shadow-lg"
          aria-label="Ouvrir le chat"
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
      ) : (
        <div className="bg-white dark:bg-elimyt-dark/80 rounded-2xl shadow-xl w-[320px] sm:w-[360px] overflow-hidden flex flex-col">
          {/* En-tête du chat */}
          <div className="bg-gradient p-4 text-white flex justify-between items-center">
            <div className="flex items-center">
              <MessageCircle className="h-5 w-5 mr-2" />
              <h3 className="font-semibold">Discuter avec nous</h3>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleChat} 
              className="text-white hover:bg-white/20 h-8 w-8"
              aria-label="Fermer le chat"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Corps du chat */}
          <div className="p-4 bg-gray-50 dark:bg-gray-900 flex-grow">
            <p className="text-foreground/80 text-sm mb-4">
              Besoin d'une réponse rapide? Envoyez-nous un message sur WhatsApp et nous vous répondrons dans les plus brefs délais.
            </p>
            
            <div className="bg-white dark:bg-elimyt-dark/40 p-3 rounded-lg shadow-sm mb-3">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-primary/20 p-2 rounded-full">
                  <MessageCircle className="h-4 w-4 text-primary" />
                </div>
                <div className="ml-3">
                  <p className="text-xs text-foreground/60 mb-1">eLimyt Support</p>
                  <p className="text-sm">Bonjour! Comment pouvons-nous vous aider aujourd'hui?</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <label htmlFor="whatsapp-message" className="text-sm font-medium mb-1 block">
                Votre message:
              </label>
              <textarea
                id="whatsapp-message"
                className="w-full p-3 border rounded-lg resize-none dark:bg-elimyt-dark/20 dark:border-gray-700 min-h-[80px]"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tapez votre message ici..."
              />
            </div>
          </div>
          
          {/* Pied du chat */}
          <div className="p-4 border-t dark:border-gray-700">
            <Button 
              className="w-full bg-gradient hover-scale" 
              onClick={handleWhatsApp}
            >
              Continuer sur WhatsApp
              <Send className="ml-2 h-4 w-4" />
            </Button>
            <p className="text-xs text-center mt-2 text-foreground/60">
              Nous répondons généralement en quelques minutes pendant les heures de bureau
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
