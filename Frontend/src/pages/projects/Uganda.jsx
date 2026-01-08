import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/ui/Card";
import { CardContent } from "../../components/ui/CardContent";
import { LoadingPage } from "../../components/ui/LoadingPage";
import { ExternalLink, Play, ArrowRight } from "lucide-react";
import ACLM1 from "../../images/ACLM 1.webp";
import EvangelismCube from "../../images/Evangelism cube.webp";
import BaptismSession from "../../images/Baptism-in-session-mozambique.webp";
import BaptismPrep from "../../images/Baptism-preparation-Mozambique.webp";
import MercyMinistry from "../../images/Mercy ministry.webp";
import Training from "../../images/ACLM 4.webp"

const slideshowImages = [
  ACLM1,
  Training,
  BaptismPrep
];

const projects = [
  {
    id: 1,
    title: "Church Leadership Development",
    description: "Equipping pastors and church leaders across Uganda with biblical knowledge and practical ministry skills. Through comprehensive training programs, we strengthen local churches and develop godly leadership that can effectively shepherd their congregations and impact their communities for Christ.",
    images: [
      { image: Training, caption: "Church leaders gather for leadership development training" },
    ]
  },
  {
    id: 2,
    title: "Evangelism & Discipleship Training",
    description: "Training believers in effective evangelism methods and discipleship practices. We equip Ugandan Christians with practical tools like the Evangelism Cube and provide ongoing support to help them share their faith confidently and make disciples in their communities.",
    images: [
      { image: EvangelismCube, caption: "We distribute Evangelism Cubes and train on their use for effective gospel presentation" },
    ]
  },
  {
    id: 3,
    title: "New Believer Support",
    description: "Supporting churches in baptism ceremonies and providing follow-up care for new believers. We help establish strong foundations for new converts through baptism preparation classes and ongoing discipleship programs that ensure sustainable spiritual growth.",
    images: [
      { image: BaptismSession, caption: "Baptism ceremony for new believers" },
      { image: BaptismPrep, caption: "Baptism preparation for new believers" }
    ]
  },
  {
    id: 4,
    title: "Community Mercy Ministry",
    description: "Demonstrating Christ's love through practical service to communities in need. Our mercy ministry initiatives address physical and social needs while creating opportunities to share the Gospel and build relationships that lead to spiritual transformation and church growth.",
    images: [
      { image: MercyMinistry, caption: "Community mercy ministry serving those in need" },
    ]
  }
];

const videos = [
  {
    id: 1,
    title: "Pastoral Training in Kampala",
    description: "A powerful week of training with Ugandan pastors, equipping them for greater kingdom impact.",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
  },
  {
    id: 2,
    title: "Bible Distribution Testimony",
    description: "Heartwarming testimonies from Ugandans receiving their first Bible through ACLM's distribution program.",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
  },
  {
    id: 3,
    title: "Youth Conference Highlights",
    description: "Highlights from our annual youth leadership conference in Uganda, inspiring the next generation.",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
  }
];

export function Uganda() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [projectSlides, setProjectSlides] = useState(projects.reduce((acc, project) => ({ ...acc, [project.id]: 0 }), {}));
  const [isVideoSectionVisible, setIsVideoSectionVisible] = useState(false);
  const videoSectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 5000);
    return () => clearInterval(interval);
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
          setIsVideoSectionVisible(entry.isIntersecting);
        },
        { threshold: 0.2 }
      );

      if (videoSectionRef.current) {
        observer.observe(videoSectionRef.current);
      }

      return () => observer.disconnect();
    }
  }, [isLoading]);

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
            ACLM Projects in Uganda
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
          <h2 className="text-[#2E652A] mb-4 text-4xl">Our Projects in Uganda</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Partnering with the Ugandan church to develop leaders, distribute resources, 
            and strengthen the body of Christ across the nation.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={project.id} className="overflow-hidden">
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

      {/* Stories from Uganda Section */}
      <div ref={videoSectionRef} className="bg-[#f5f5f4] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-2000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isVideoSectionVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-32 scale-70'}`}>
            <h2 className="text-[#2E652A] mb-4 text-4xl">Stories from Uganda</h2>
            <p className="text-gray-600 mb-8">
              Discover inspiring testimonies and transformative stories from our work across Uganda
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

    </div>
  );
}