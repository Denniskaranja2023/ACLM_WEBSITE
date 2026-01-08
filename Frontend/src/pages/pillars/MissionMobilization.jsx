import { useEffect, useRef, useState } from "react";
import { PillarSlideShow } from "../../components/ui/PillarSlideShow";
import { LoadingPage } from "../../components/ui/LoadingPage";
import { Card } from "../../components/ui/Card";
import { CardContent } from "../../components/ui/CardContent";
import ChurchPlant from "../../images/Church-plant-interior-Mozambique.webp"
import Mobilization1 from "../../images/Mission-mobilization-mozambique-1.webp"
import Mobilization2 from "../../images/Mission-Mobilization.webp"
import Mobilization3 from "../../images/Leadership-training-mozambique-1.webp"
import Mobilization4 from "../../images/Mobilizing-church-seminar.webp"
import Mobilization5 from "../../images/Mobilizing-through-evangelism-training.webp"
import LeoInMocuba from "../../images/Leonard-in-Mocuba.webp"

const slideshowImages = [
  Mobilization5,
  Mobilization3,
  Mobilization2
];

const projects = [
  {
    id: 1,
    title: "Identifying Called Workers",
    description: "We work with churches and individuals to help identify those who have a calling to missions. Through prayer, assessment, and counseling, we help believers discern God's call on their lives for missionary work.",
    images: [
      { image: Mobilization1, caption: "Training students called to missions at Estrella da Manhã missionary training center" }
    ]
  },
  {
    id: 2,
    title: "Connecting with Opportunities",
    description: "We maintain relationships with mission organizations, churches, and ministries across Africa and globally. This network allows us to connect aspiring missionaries with the right opportunities that match their calling, gifts, and circumstances. We facilitate partnerships between missionaries and receiving organizations for effective ministry placement.",
    images: [
      { image: LeoInMocuba, caption: "Through our ties in Mozambique, our brother Leonard and the wife found a fertile ground for ministry" }
    ]
  },
  {
    id: 3,
    title: "Supporting Mission Work",
    description: "One of the biggest challenges in missions is financial and resource support. We support raise for mission work by reaching out to potential donors, churches, and organizations.",
    images: [
      { image: ChurchPlant, caption: "Our various projects and missioanry efforts are in constant need of financial support in order to be effective" }
    ]
  }
];

export function MissionMobilization() {
  const [isLoading, setIsLoading] = useState(true);
  const [projectSlides, setProjectSlides] = useState(projects.reduce((acc, project) => ({ ...acc, [project.id]: 0 }), {}));
  const [isProjectSectionVisible, setIsProjectSectionVisible] = useState(false);
  const projectSectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const intervals = projects.map(project => 
      setInterval(() => {
        setProjectSlides(prev => ({
          ...prev,
          [project.id]: (prev[project.id] + 1) % project.images.length
        }));
      }, 7000)
    );
    return () => intervals.forEach(clearInterval);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsProjectSectionVisible(entry.isIntersecting);
        },
        { threshold: 0.2 }
      );

      if (projectSectionRef.current) {
        observer.observe(projectSectionRef.current);
      }

      return () => observer.disconnect();
    }
  }, [isLoading]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <PillarSlideShow images={slideshowImages} title="Mission Mobilization" />

      {/* Projects Section */}
      <div ref={projectSectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className={`text-center mb-12 transition-all duration-2000 ease-out ${isProjectSectionVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
          <h2 className="text-[#2E652A] mb-4 text-4xl">Mobilizing the Church for Global Missions</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Identifying, connecting, and supporting those called to missionary work across Africa and beyond.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={project.id} className={`overflow-hidden transition-all duration-1800 delay-${400 + index * 600} ${isProjectSectionVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
              <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                <div className={`relative ${index % 2 === 1 ? 'md:col-start-2' : ''} overflow-hidden h-80`}>
                  {project.images.map((imageData, imgIndex) => (
                    <div
                      key={imgIndex}
                      className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
                        imgIndex === projectSlides[project.id] ? "translate-x-0" : 
                        imgIndex < projectSlides[project.id] ? "-translate-x-full" : "translate-x-full"
                      }`}
                    >
                      <img 
                        src={imageData.image} 
                        alt={project.title}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-center">
                        <p className="text-sm italic">{imageData.caption}</p>
                      </div>
                    </div>
                  ))}
                  <div className="absolute top-4 right-4 flex space-x-1">
                    {project.images.map((_, imgIndex) => (
                      <button
                        key={imgIndex}
                        onClick={() => setProjectSlides(prev => ({ ...prev, [project.id]: imgIndex }))}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          imgIndex === projectSlides[project.id] ? "bg-[#BEA336]" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <h3 className="text-[#2E652A] mb-4 text-2xl">{project.title}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed text-justify">
                    {project.description}
                  </p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Approach Section */}
      <div className="bg-[#f5f5f4] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`bg-white p-8 rounded-lg shadow-sm transition-all duration-2000 delay-2000 ${isProjectSectionVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
            <h3 className="text-[#2E652A] mb-6 text-2xl font-bold">Our Holistic Approach</h3>
            <p className="text-gray-700 mb-6 leading-relaxed text-justify">
              We believe in a holistic approach to mission mobilization that doesn't just send people out 
              but ensures they are properly prepared, connected, and supported throughout their ministry journey.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 text-[#BEA336]">•</span>
                <span>Pre-field training programs</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#BEA336]">•</span>
                <span>Ongoing mentorship and pastoral support</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#BEA336]">•</span>
                <span>Connection with local churches and ministries</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#BEA336]">•</span>
                <span>Regular communication and accountability structures</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}