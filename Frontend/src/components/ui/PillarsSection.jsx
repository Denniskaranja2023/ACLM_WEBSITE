import { useNavigate } from "react-router-dom";
import { Card } from "./Card";
import { CardContent } from "./CardContent";
import { useEffect, useRef, useState } from "react";

const pillars = [
  {
    id: "leadership-trainings",
    title: "Leadership Trainings",
    description: "Equipping evangelists and church leaders for the great commission.",
    image: "https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkZXJzaGlwJTIwdHJhaW5pbmclMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjM2NzI4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "christian-literature",
    title: "Christian Literature",
    description: "Providing essential resources for effective witness and growth.",
    image: "https://images.unsplash.com/photo-1709158990536-0cd97cd00345?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMGJvb2tzJTIwcmVhZGluZ3xlbnwxfHx8fDE3NjM2NzI4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "mission-mobilization",
    title: "Mission Mobilization",
    description: "Connecting people with mission opportunities across Africa.",
    image: "https://images.unsplash.com/photo-1741952094741-e7d3bb84e8fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXNzaW9uJTIwY29tbXVuaXR5JTIwc2VydmljZXxlbnwxfHx8fDE3NjM2NzI4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "thingira-initiative",
    title: "Thingira Initiative",
    description: "Empowering young men with Biblical vision for manhood.",
    image: "https://images.unsplash.com/photo-1732210038505-34a70d3b45a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1lbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzYzNjcyODgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function PillarsSection() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-[#F6EFE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1200 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100 rotate-0' : 'opacity-0 translate-y-12 scale-95 rotate-2'}`}>
          <h2 className="text-[#2E652A] mb-4 text-4xl font-black transform transition-all duration-1200 hover:scale-105">Our Pillars</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our four pillars represent the core of ACLM's mission to develop leaders and transform communities.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1200 delay-400 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-90'}`}>
          {pillars.map((pillar, index) => (
            <div key={pillar.id} className={`group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-800 transform ${isVisible ? 'opacity-100 translate-y-0 rotate-0 scale-100' : 'opacity-0 translate-y-12 rotate-1 scale-95'}`} style={{transitionDelay: `${600 + (index * 200)}ms`}}>
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={pillar.image} 
                  alt={pillar.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[#2E652A] text-xl font-bold mb-3">{pillar.title}</h3>
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {pillar.description}
                </p>
                <button
                  onClick={() => navigate(`/pillars/${pillar.id}`)}
                  className="w-full bg-[#2E652A] hover:bg-[#234d21] text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
