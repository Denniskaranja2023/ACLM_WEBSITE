import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Import local hero images so Vite can bundle and optimize them correctly
import heroImage1 from "../../images/ACLM 4.jpg";
import heroImage2 from "../../images/aclm 5.jpg";
import heroImage3 from "../../images/ACLM 1.png";

const slides = [
  {
    image: heroImage1,
    alt: "African community gathering",
  },
  {
    image: heroImage2,
    alt: "Christian leadership training",
  },
  {
    image: heroImage3,
    alt: "Africa mission community",
  },
];

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[85vh] overflow-hidden">
      {/* Slideshow Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl mb-8 max-w-4xl font-black" style={{ fontFamily: "'Playfair Display', serif" }}>
          Developing leaders through Christian discipleship
        </h1>
        <button
          onClick={() => navigate("/support-us")}
          className="bg-[#BEA336] hover:bg-[#a08d2d] text-white px-8 py-3 text-lg rounded-md transition-colors"
        >
          Partner with us
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-[#BEA336]" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}