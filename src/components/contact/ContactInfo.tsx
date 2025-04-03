
import { Mail, MessageSquare, MapPin } from "lucide-react";

export const contactInfoData = [
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

interface ContactInfoProps {
  className?: string;
}

const ContactInfo = ({ className }: ContactInfoProps) => {
  return (
    <div className={`bg-muted p-8 rounded-2xl shadow-lg mb-8 ${className}`}>
      <h3 className="text-2xl font-bold mb-6">
        Informations de contact
      </h3>
      <div className="space-y-6">
        {contactInfoData.map((item, index) => (
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
  );
};

export default ContactInfo;
