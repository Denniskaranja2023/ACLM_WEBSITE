import { Shield, BookOpen, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We uphold honesty and strong moral principles in all our work."
  },
  {
    icon: BookOpen,
    title: "Bible-centered",
    description: "Scripture is our foundation and guide in everything we do."
  },
  {
    icon: Users,
    title: "People-driven",
    description: "We prioritize people and their development above all else."
  }
];

export function ValuesSection() {
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
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1200 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100 rotate-0' : 'opacity-0 translate-y-12 scale-95 -rotate-2'}`}>
          <h2 className="text-[#2E652A] mb-4 text-4xl font-black transform transition-all duration-1200 hover:scale-105">Our Core Values</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our core values define our character and guide our mission.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1200 delay-400 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-90'}`}>
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className={`text-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0 rotate-0 scale-100' : 'opacity-0 translate-y-12 rotate-2 scale-95'}`} style={{transitionDelay: `${600 + (index * 300)}ms`}}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#2E652A] mb-4">
                  <Icon className="w-8 h-8 text-[#BEA336]" />
                </div>
                <h3 className="text-[#2E652A] mb-2 font-bold">{value.title}</h3>
                <p className="text-gray-700 text-sm">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}