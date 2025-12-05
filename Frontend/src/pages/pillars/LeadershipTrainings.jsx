import { useEffect, useRef, useState } from "react";
import { PillarSlideShow } from "../../components/ui/PillarSlideShow";
import { LoadingPage } from "../../components/ui/LoadingPage";
import { Card } from "../../components/ui/Card";
import { CardContent } from "../../components/ui/CardContent";
import Training_1 from "../../images/ACLM 4.jpg"
import Training_2 from "../../images/aclm 5.jpg"
import Training_3 from "../../images/ACLM 2.jpg"
import TrainingImage from "../../images/Evangelism training-mozambique.jpeg"
import SmallGroups from "../../images/small-groups-after-training-mozambique.jpeg"
import MenTraining from "../../images/Every-man-a-warrior-mozambique.jpeg"
import PastorConference from "../../images/Mobilizing-church-seminar.jpeg"

const slideshowImages = [
  Training_1,
  Training_2,
  Training_3
];

const projects = [
  {
    id: 1,
    title: "Evangelism and Discipleship Training",
    description: "We equip church leaders to become effective evangelists and disciple-makers. Through comprehensive training, we provide practical tools for sharing the Gospel clearly and confidently—including methods such as the Evangelism Cube, personal testimony sharing, and structured follow-up strategies. Our programs not only strengthen leaders in their own evangelism and disciple-making, but also empower them to train others, creating a multiplying culture of Gospel impact.",
    images: [
      { image: Training_1, caption: "Evangelism training session with church leaders in Mozambique" }
    ]
  },
  {
    id: 2,
    title: "Leadership Development Programs",
    description: "Our leadership development focuses on cultivating servant leadership qualities and skills for leading God's people effectively.  programs are designed to develop leaders who can multiply their impact by training and mentoring other leaders in their communities.",
    images: [
      { image: PastorConference, caption: "Our missionary, Leonard, ministers in a church leaders seminar in Mocuba" }
    ]
  },
  {
    id: 3,
    title: "Church Planting and Missions Training",
    description: "We train men to embrace and live out their God-given mandate as leaders in the family, the church, and society. Through biblically grounded teaching and practical discipleship, we help men develop the character, integrity, and responsibility required for godly leadership. Our programs equip them to lead their homes with love and wisdom, influence their communities with righteousness, and model Christlike manhood in every sphere of life.",
    images: [
      { image: MenTraining, caption: "Church planting and missions training workshop" }
    ]
  }
];

export function LeadershipTrainings() {
  const [isLoading, setIsLoading] = useState(true);
  const [projectSlides, setProjectSlides] = useState(projects.reduce((acc, project) => ({ ...acc, [project.id]: 0 }), {}));
  const [isProjectSectionVisible, setIsProjectSectionVisible] = useState(false);
  const projectSectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
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
      <PillarSlideShow images={slideshowImages} title="Leadership Trainings" />

      {/* Projects Section */}
      <div ref={projectSectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className={`text-center mb-12 transition-all duration-2000 ease-out ${isProjectSectionVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
          <h2 className="text-[#2E652A] mb-4 text-4xl">Empowering Leaders for the Great Commission</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Equipping evangelists, church leaders, and missionaries with biblical knowledge and practical ministry skills.
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

      {/* Impact Section */}
      <div className="bg-[#f5f5f4] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`bg-white p-8 rounded-lg shadow-sm transition-all duration-2000 delay-2000 ${isProjectSectionVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
            <h3 className="text-[#2E652A] mb-6 text-2xl font-bold">Multiplying Impact Across Africa</h3>
            <p className="text-gray-700 mb-4 leading-relaxed text-justify">
              Through our training programs, we have equipped hundreds of leaders across Africa who are 
              now actively involved in evangelism, church planting, and discipleship in their communities. 
              These trained leaders are multiplying their impact by training others, creating a ripple 
              effect of transformation across the continent.
            </p>
            <p className="text-gray-700 leading-relaxed text-justify">
              Our training methodology emphasizes multiplication - every leader we train is equipped not 
              just to do ministry, but to train others who will train others. This approach ensures 
              sustainable growth and long-term impact in the communities we serve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}