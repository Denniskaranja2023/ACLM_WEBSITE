import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  // Replace this with the actual ACLM WhatsApp number
  // Format: country code + number (no + or spaces)
  const whatsappNumber = "254722860888"; // Updated with actual number from contact page
  const message = "Hello ACLM, I would like to know more about your ministry.";
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA59] rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-105 px-4 py-3 md:px-5 md:py-4"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white flex-shrink-0" fill="white" />
      <span className="text-white font-medium text-sm md:text-base">WhatsApp</span>
      
      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
    </button>
  );
}
