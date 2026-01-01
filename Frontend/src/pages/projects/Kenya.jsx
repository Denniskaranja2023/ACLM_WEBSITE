import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/ui/Card";
import { CardContent } from "../../components/ui/CardContent";
import { LoadingPage } from "../../components/ui/LoadingPage";
import { ExternalLink, Play, ArrowRight } from "lucide-react";
import ThingiraMain from "../../images/Thingira_main.jpeg";
import AllMen from "../../images/All men_Thingira.jpeg";
import DistributingBalls from "../../images/ISSUING-BALLS-EDITED.jpg";
import Mobilization1 from "../../images/Mission-mobilization-mozambique-1.jpeg";
import Mobilization2 from "../../images/Mission-Mobilization.jpeg";
import Mobilization3 from "../../images/Mobilizing-through-evangelism-training.jpeg";

const slideshowImages = [
  ThingiraMain,
  AllMen,
  DistributingBalls
];

const projects = [
  {
    id: 1,
    title: "Thingira Initiative",
    description: "The Thingira Initiative is a transformative program focused on empowering young men across Kenya with biblical manhood principles. Through county-wide engagements, mentorship programs, and leadership camps, we're helping the boychild discover their God-given identity and purpose. The initiative addresses critical issues facing young men today and equips them to be godly leaders in their families and communities.",
    caption: "Young men gathering for Thingira Initiative mentorship and leadership training",
    image: ThingiraMain,
    isThingira: true,
    pillarPath: "/pillars/thingira-initiative"
  },
  {
    id: 2,
    title: "Mission Mobilization",
    description: "Our Mission Mobilization pillar focuses on identifying, connecting, and supporting those called to missionary work across Africa and beyond. We work with churches and individuals to help identify those who have a calling to missions, connect them with opportunities, and provide ongoing support for their ministry journey.",
    caption: "Training and mobilizing believers for effective ministry",
    image: Mobilization3,
    isMissionMobilization: true,
    pillarPath: "/pillars/mission-mobilization"
  }
];

const videos = [
  {
    id: 1,
    title: "Church Leadership Training in Nairobi",
    description: "Highlights from our recent leadership training conference in Nairobi, where over 200 pastors gathered for intensive biblical training.",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
  },
  {
    id: 2,
    title: "Thingira Initiative Launch - Nakuru",
    description: "The powerful launch of the Thingira Initiative in Nakuru County, bringing together young men for transformation.",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
  },
  {
    id: 3,
    title: "Rural Church Planting Success Story",
    description: "A testimony from a newly planted church in rural Kenya and how ACLM's support made it possible.",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
  }
];

export function Kenya() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div>
      {/* Slideshow Section */}
      <div className="relative h-[600px] overflow-hidden">
        {slideshowImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}

        <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-white text-2xl md:text-3xl lg:text-4xl mb-8 max-w-4xl font-black" style={{ fontFamily: "'Playfair Display', serif" }}>
            ACLM Projects in Kenya
          </h1>
          <button
            onClick={() => navigate("/support-us")}
            className="bg-[#BEA336] hover:bg-[#a08d2d] text-white px-8 py-3 text-lg rounded-md transition-colors"
          >
            Partner with us
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slideshowImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-[#BEA336]" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-[#2E652A] mb-4 text-4xl">Our Projects in Kenya</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Through God's grace, ACLM has been privileged to serve across Kenya, developing leaders, 
            empowering churches, and transforming communities with the Gospel.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project) => (
            <Card key={project.id} className={`overflow-hidden ${project.isThingira ? 'border-2 border-[#BEA336]' : project.isMissionMobilization ? 'border-2 border-[#2E652A]' : ''}`}>
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3">
                    <p className="text-sm italic">{project.caption}</p>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <h3 className="text-[#2E652A] mb-4 text-2xl">{project.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  {project.pillarPath && (
                    <button
                      onClick={() => navigate(project.pillarPath)}
                      className="bg-[#BEA336] hover:bg-[#a08d2d] text-white px-6 py-3 rounded-md transition-colors flex items-center gap-2 w-fit"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Stories from Kenya Section */}
      <div className="bg-[#f5f5f4] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#2E652A] mb-4 text-4xl">Stories from Kenya</h2>
            <p className="text-gray-600 mb-8">
              Discover inspiring testimonies and transformative stories from our work across Kenya
            </p>
            <button
              onClick={() => navigate("/our-stories")}
              className="bg-[#BEA336] hover:bg-[#a08d2d] text-white px-8 py-4 text-lg rounded-md transition-colors inline-flex items-center gap-2"
            >
              Read Our Stories
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={closeVideo}>
          <div className="relative bg-white rounded-lg overflow-hidden max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
            >
              ×
            </button>
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}`}
                title={selectedVideo.title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-[#2E652A] text-xl mb-2">{selectedVideo.title}</h3>
              <p className="text-gray-600">{selectedVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}