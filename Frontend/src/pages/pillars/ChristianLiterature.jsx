import { useEffect, useRef, useState } from "react";
import { PillarSlideShow } from "../../components/ui/PillarSlideShow";
import { LoadingPage } from "../../components/ui/LoadingPage";
import { Card } from "../../components/ui/Card";
import { CardContent } from "../../components/ui/CardContent";
import Cube from "../../images/Evangelism cube.webp"
import AudioBibles from "../../images/Audio-Bible-cropped.webp"
import Literature from "../../images/Discipleship-Literature-Mozambique.webp"
import MenTraining from "../../images/Every-man-a-warrior-mozambique.webp"

const slideshowImages = [
  Literature,
  Cube,
  MenTraining
];

const projects = [
  {
    id: 1,
    title: "Audio Bibles Distribution",
    description: "We believe that the Bible is the most important book in the world and is central in both discipleship and evangelism. We are committed to making the Bible accessible to everyone, everywhere. We distribute Audio Bibles to churches and communities so that people can hear the good news in their language, especially reaching those who cannot read or prefer audio learning.",
    images: [
      { image: AudioBibles, caption: "Our missionary Kennedy Mukono demonstartes the use of the Audio Bible to a local" }
    ]
  },
  {
    id: 2,
    title: "Discipleship Materials",
    description: "We provide comprehensive discipleship materials designed to help new believers grow in their faith and mature Christians deepen their walk with God. These resources cover essential topics such as prayer, Bible study, Christian living, and service. Our materials are contextually relevant and designed specifically for the African church context.",
    images: [
      { image: Literature, caption: "Discipleship literature and training materials for church leaders" }
    ]
  },
  {
    id: 3,
    title: "The Evangelism Cube",
    description: "Our flagship evangelism tool, the Evangelism Cube is a simple yet powerful resource that helps believers share the Gospel clearly and effectively. This visual aid breaks down the core message of salvation in a way that is easy to understand and remember, making it an invaluable tool for both new and experienced evangelists across Africa.",
    images: [
      { image: Cube, caption: "The Evangelism Cube - a powerful tool for sharing the Gospel" }
    ]
  }
];

export function ChristianLiterature() {
  const [isLoading, setIsLoading] = useState(true);
  const [projectSlides, setProjectSlides] = useState(projects.reduce((acc, project) => ({ ...acc, [project.id]: 0 }), {}));
  const [isProjectSectionVisible, setIsProjectSectionVisible] = useState(false);
  const projectSectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1100);
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
      <PillarSlideShow images={slideshowImages} title="Christian Literature" />

      {/* Projects Section */}
      <div ref={projectSectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className={`text-center mb-12 transition-all duration-2000 ease-out ${isProjectSectionVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
          <h2 className="text-[#2E652A] mb-4 text-4xl">Our Literature Resources</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Providing essential resources for effective evangelism, discipleship, and spiritual growth across Africa.
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

      {/* Distribution Section */}
      <div className="bg-[#f5f5f4] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`bg-white p-8 rounded-lg shadow-sm transition-all duration-2000 delay-2000 ${isProjectSectionVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
            <h3 className="text-[#2E652A] mb-6 text-2xl font-bold">Distribution and Access</h3>
            <p className="text-gray-700 mb-4 leading-relaxed text-justify">
              We distribute our literature through churches, training programs, and mission trips across 
              Africa. Our goal is to make these resources accessible to as many believers as possible, 
              especially in areas where quality Christian literature is scarce.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify">
              Many of our resources are available in multiple languages to ensure that believers can access 
              them in their heart language, making the truths of Scripture more accessible and impactful. 
              We work closely with local churches and ministry partners to ensure effective distribution 
              and proper training on how to use these materials effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}