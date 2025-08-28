import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const message = "Hola quiero reservar transporte desde el aeropuerto";
    const phoneNumber = "50661090825"; // Using the first phone number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      data-testid="whatsapp-float-button"
      title="Reservar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
}