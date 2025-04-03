
interface LocationMapProps {
  className?: string;
}

const LocationMap = ({ className }: LocationMapProps) => {
  return (
    <div className={`relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg ${className}`}>
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
  );
};

export default LocationMap;
