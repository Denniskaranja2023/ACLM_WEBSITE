import { useNavigate } from "react-router-dom";
import { Card } from "./Card";
import { CardContent } from "./CardContent";
import { useEffect, useRef, useState } from "react";
import { Users, BookOpen, Globe, Target, ArrowRight } from "lucide-react";
import IssuingBalls from "../../images/Issuing-balls-thingira.webp"
import Literature from "../../images/Discipleship-Literature-Mozambique.webp"
import TrainingSeminar from "../../images/Training-seminar.webp"
import LeoInMocuba from "../../images/Leonard-in-Mocuba.webp"

const pillars = [
  {
    id: "leadership-trainings",
    title: "Leadership Trainings",
    description: "Equipping evangelists and church leaders for the great commission through comprehensive biblical training programs.",
    image: TrainingSeminar
  },
  {
    id: "christian-literature",
    title: "Christian Literature",
    description: "Providing essential resources for effective witness and spiritual growth across African communities.",
    image: Literature
    },
  {
    id: "mission-mobilization",
    title: "Mission Mobilization",
    description: "Connecting people with mission opportunities and mobilizing the church for evangelism across Africa.",
    image: LeoInMocuba
  },
  {
    id: "thingira-initiative",
    title: "Thingira Initiative",
    description: "Empowering young men with Biblical vision for manhood and godly leadership in their communities.",
    image: IssuingBalls
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-[#F6EFE2] via-white to-[#F6EFE2] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#2E652A] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#BEA336] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#2E652A] rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center mb-16 transition-all duration-2000 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-90'}`}>
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-[#2E652A] to-[#BEA336] bg-clip-text text-transparent text-sm font-semibold tracking-wider uppercase">Foundation of Our Mission</span>
          </div>
          <h2 className="text-[#2E652A] mb-6 text-5xl font-black bg-gradient-to-r from-[#2E652A] to-[#1a3d17] bg-clip-text text-transparent">
            Our Four Pillars
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            These foundational pillars represent the core of ACLM's mission to develop leaders, 
            transform communities, and advance God's kingdom across Africa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => {
            return (
              <div 
                key={pillar.id} 
                className={`group relative transition-all duration-1000 transform hover:-translate-y-4 ${isVisible ? 'opacity-100 translate-y-0 rotate-0 scale-100' : 'opacity-0 translate-y-20 rotate-2 scale-90'}`} 
                style={{transitionDelay: `${400 + (index * 200)}ms`}}
              >
                {/* Card */}
                <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={pillar.image} 
                      alt={pillar.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-[#2E652A] text-xl font-bold mb-3 group-hover:text-[#BEA336] transition-colors duration-300">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-3">
                      {pillar.description}
                    </p>
                    
                    {/* CTA Button */}
                    <button
                      onClick={() => navigate(`/pillars/${pillar.id}`)}
                      className="group/btn w-full bg-gradient-to-r from-[#2E652A] to-[#1a3d17] hover:from-[#BEA336] hover:to-[#a08d2d] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      <span>Explore More</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-[#BEA336]/20 to-transparent rounded-full blur-xl transition-all duration-500 group-hover:scale-150"></div>
                  <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-tr from-[#2E652A]/20 to-transparent rounded-full blur-xl transition-all duration-500 group-hover:scale-150"></div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Bottom CTA Section */}
        <div className={`text-center mt-16 transition-all duration-2000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-[#2E652A] to-[#1a3d17] rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#BEA336]/10 to-transparent"></div>
            <div className="relative">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Involved?</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Join us in transforming lives and communities across Africa through these foundational pillars of ministry.
              </p>
              <button 
                onClick={() => navigate('/support-us')}
                className="bg-[#BEA336] hover:bg-[#a08d2d] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
