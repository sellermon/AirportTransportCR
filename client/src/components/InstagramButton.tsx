import { SiInstagram } from "react-icons/si";

export default function InstagramButton() {
  const handleInstagramClick = () => {
    const url = "https://www.instagram.com/gocr_transport";
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleInstagramClick}
      className="fixed bottom-36 right-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
      data-testid="instagram-float-button"
      title="Seguir en Instagram"
    >
      <SiInstagram className="w-6 h-6" />
    </button>
  );
}