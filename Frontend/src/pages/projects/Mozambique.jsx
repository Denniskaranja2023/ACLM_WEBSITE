import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/ui/Card";
import { CardContent } from "../../components/ui/CardContent";
import { ExternalLink, Play } from "lucide-react";

const slideshowImages = [
  "https://images.unsplash.com/photo-1694124087978-de0233d0ead7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3phbWJpcXVlJTIwY29tbXVuaXR5fGVufDF8fHx8MTc2MzcyMjAxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1738744655193-706236bd4480?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2h1cmNoJTIwZ2F0aGVyaW5nfGVufDF8fHx8MTc2MzcyMjAxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1632723188354-7ba967c218bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RpYW4lMjBsZWFkZXJzaGlwJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzYzNjcwNzM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
];

const projects = [
  {
    id: 1,
    title: "Portuguese Bible & Literature Program",
    description: "Providing Portuguese Bibles and Christian literature to churches and communities across Mozambique. As a predominantly Portuguese-speaking nation, having access to Scripture and discipleship materials in their heart language is crucial. We've partnered with local distributors to ensure these resources reach even the most remote areas.",
    impact: "4,000+ Portuguese Bibles distributed in 6 provinces",
    image: "https://images.unsplash.com/photo-1709158990536-0cd97cd00345?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMGJvb2tzJTIwcmVhZGluZ3xlbnwxfHx8fDE3NjM2NzI4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    title: "Post-Conflict Church Rebuilding",
    description: "Supporting churches in regions affected by conflict and natural disasters. We provide resources for rebuilding physical structures, re-establishing ministries, and training leaders to shepherd communities through trauma and toward healing. Our focus is on restoring hope and strengthening the local church's capacity to serve.",
    impact: "8 churches rebuilt and equipped",
    image: "https://images.unsplash.com/photo-1741952094741-e7d3bb84e8fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXNzaW9uJTIwY29tbXVuaXR5JTIwc2VydmljZXxlbnwxfHx8fDE3NjM2NzI4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    title: "Evangelism & Discipleship Training",
    description: "Equipping Mozambican believers with practical evangelism tools and discipleship methods. Through workshops and ongoing training, we're empowering local Christians to share their faith effectively and make disciples in their communities. This includes training on the Evangelism Cube and other contextually appropriate witnessing methods.",
    impact: "200+ evangelists trained across 4 regions",
    image: "https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkZXJzaGlwJTIwdHJhaW5pbmclMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjM2NzI4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

const videos = [
  {
    id: 1,
    title: "Portuguese Bible Distribution Impact",
    description: "See the joy as Mozambicans receive Bibles in Portuguese through ACLM's distribution program.",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
  },
  {
    id: 2,
    title: "Church Rebuilding Project",
    description: "Documenting the journey of rebuilding a church in post-conflict Mozambique.",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
  },
  {
    id: 3,
    title: "Evangelism Training Success Stories",
    description: "Testimonies from trained evangelists sharing the Gospel across Mozambique.",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
  }
];

export function Mozambique() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const openYouTubeVideo = (youtubeId) => {
    window.open(`https://www.youtube.com/watch?v=${youtubeId}`, '_blank');
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
            ACLM Projects in Mozambique
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
          <h2 className="text-[#2E652A] mb-4 text-4xl">Our Projects in Mozambique</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Bringing hope and restoration to Mozambique through Bible distribution, 
            church rebuilding, and evangelism training.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={project.id} className="overflow-hidden">
              <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                <div className={`h-64 md:h-auto ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
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

      {/* Stories from Mozambique Section */}
      <div className="bg-[#f5f5f4] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#2E652A] mb-4 text-4xl">Stories from Mozambique</h2>
            <p className="text-gray-600">
              Watch testimonies and highlights from our work across Mozambique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div 
                key={video.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                onClick={() => openYouTubeVideo(video.youtubeId)}
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
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}