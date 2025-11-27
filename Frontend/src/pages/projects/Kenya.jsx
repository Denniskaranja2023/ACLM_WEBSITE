import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/ui/Card";
import { CardContent } from "../../components/ui/CardContent";
import { ExternalLink, Play } from "lucide-react";

const slideshowImages = [
  "https://images.unsplash.com/photo-1691348397911-77ecfd636078?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZW55YSUyMG1pc3Npb24lMjBjb21tdW5pdHl8ZW58MXx8fHwxNzYzNzIyMDEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1751358016973-88b94f5ca474?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZW55YSUyMGxlYWRlcnNoaXAlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjM3MjIwMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1738744655193-706236bd4480?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2h1cmNoJTIwZ2F0aGVyaW5nfGVufDF8fHx8MTc2MzcyMjAxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
];

const projects = [
  {
    id: 1,
    title: "Church Leadership Development Program",
    description: "A comprehensive program that equips pastors and church leaders across Kenya with biblical knowledge and practical ministry skills. We've trained over 500 church leaders in 15 counties, providing them with resources and ongoing mentorship to strengthen their churches and communities.",
    impact: "500+ leaders trained across 15 counties",
    image: "https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkZXJzaGlwJTIwdHJhaW5pbmclMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjM2NzI4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    title: "Evangelism Cube Distribution",
    description: "Distribution of the Evangelism Cube tool to churches and individual evangelists across Kenya. This innovative tool simplifies gospel presentation and has been instrumental in leading thousands to Christ. We've distributed over 10,000 cubes and trained users on effective evangelism techniques.",
    impact: "10,000+ Evangelism Cubes distributed",
    image: "https://images.unsplash.com/photo-1709158990536-0cd97cd00345?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMGJvb2tzJTIwcmVhZGluZ3xlbnwxfHx8fDE3NjM2NzI4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    title: "Rural Church Planting Initiative",
    description: "Supporting the planting of new churches in underserved rural communities across Kenya. We provide initial resources, training, and ongoing support to church planters, helping establish vibrant Christian communities where the gospel had limited reach.",
    impact: "25 new churches planted in rural areas",
    image: "https://images.unsplash.com/photo-1741952094741-e7d3bb84e8fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXNzaW9uJTIwY29tbXVuaXR5JTIwc2VydmljZXxlbnwxfHx8fDE3NjM2NzI4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 4,
    title: "Thingira Initiative",
    description: "The Thingira Initiative is a transformative program focused on empowering young men across Kenya with biblical manhood principles. Through county-wide engagements, mentorship programs, and leadership camps, we're helping the boychild discover their God-given identity and purpose. The initiative addresses critical issues facing young men today and equips them to be godly leaders in their families and communities.",
    impact: "2,000+ young men reached across 10 counties",
    image: "https://images.unsplash.com/photo-1732210038505-34a70d3b45a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1lbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzYzNjcyODgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isThingira: true
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

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
            <Card key={project.id} className={`overflow-hidden ${project.isThingira ? 'border-2 border-[#BEA336]' : ''}`}>
              <div className="grid md:grid-cols-2 gap-0">
                <div className="h-64 md:h-auto">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  {project.isThingira && (
                    <span className="inline-block bg-[#BEA336] text-white px-3 py-1 rounded-full text-sm mb-4 w-fit">
                      Featured Initiative
                    </span>
                  )}
                  <h3 className="text-[#2E652A] mb-4 text-2xl">{project.title}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="bg-[#F6EFE2] p-4 rounded-lg">
                    <p className="text-[#2E652A]">
                      <span className="font-medium">Impact:</span> {project.impact}
                    </p>
                  </div>
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
            <p className="text-gray-600">
              Watch testimonies and highlights from our work across Kenya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div 
                key={video.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                onClick={() => handleVideoClick(video)}
              >
                <div className="relative group">
                  <img 
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#BEA336] flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg">
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs shadow-md flex items-center gap-1">
                    <Play className="w-3 h-3" />
                    YouTube
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-[#2E652A] mb-3">{video.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {video.description}
                  </p>
                  <div className="flex items-center gap-2 text-[#BEA336] hover:text-[#2E652A] text-sm group">
                    <span>Watch Now</span>
                    <Play className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
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