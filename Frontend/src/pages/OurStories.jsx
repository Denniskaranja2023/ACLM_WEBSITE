import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingPage } from "../components/ui/LoadingPage";
import { ExternalLink, Play, Film } from "lucide-react";

const videos = [
  // Congo Videos
  {
    id: 1,
    title: "Ministry to pygmies",
    description: "A company of pygmy men share with a local ACLM missionary about the harrowing effects of the Congo war as he shares the gospel",
    youtubeId: "WiKuxPmXzpI",
    country: "Congo"
  },
  {
    id: 2,
    title: "Evangelism by the Cube",
    description: "Our missionary in Congo shares the gospel with a local using the evangelism cube",
    youtubeId: "t8Qw058Ydso",
    country: "Congo"
  },
  {
    id: 3,
    title: "A time of fellowship",
    description: "Our missionaries enjoying a time of singing with Congolese believers.",
    youtubeId: "ku5NJcsYeoo",
    country: "Congo"
  },
  // Mozambique Videos
  {
    id: 4,
    title: "A walk through the Bush",
    description: "A local believer recounts to our missionary the evils of witchcraft as they walk through the bushes of Mugulama village",
    youtubeId: "LzX0wQLWoxA",
    country: "Mozambique"
  },
  {
    id: 5,
    title: "Rejoice in the Lord",
    description: "Our Missionary, Kennedy, shares a moment of joy with Mozambican believers through joyful singing to the Lord",
    youtubeId: "mkkDZ5_EwHs",
    country: "Mozambique"
  },
  {
    id: 6,
    title: "Discipling the youth",
    description: "Leonard shares a moment with Mozambican church youth.",
    youtubeId: "JS2OvIKMaOY",
    country: "Mozambique"
  }
];

export function OurStories() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#2E652A] via-[#2E652A] to-[#234d21] py-24 overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-[#BEA336] rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border-4 border-[#BEA336] rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 border-4 border-[#BEA336] rounded-full"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#BEA336] mb-6">
            <Film className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-white mb-6 text-4xl md:text-5xl">Stories of Impact</h1>
          <p className="text-[#F6EFE2] text-lg md:text-xl max-w-3xl mx-auto mb-4 leading-relaxed">
            Every story is a testimony. Every testimony is a journey. Every journey transforms lives.
          </p>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-[#F6EFE2] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-[#2E652A] text-xl md:text-2xl italic">
            "The best stories are those written by God through His people"
          </blockquote>
        </div>
      </div>
      
      {/* Video Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-[#2E652A] mb-4 text-3xl">Watch & Be Inspired</h2>
          <p className="text-gray-600">
            Watch our ministry stories from Congo and Mozambique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-[#BEA336] text-white px-2 py-1 rounded">{video.country}</span>
                </div>
                <h3 className="text-[#2E652A] mb-3">{video.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-[#2E652A] to-[#234d21] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4 text-3xl">Want to Be Part of the Story?</h2>
          <p className="text-[#F6EFE2] mb-8 text-lg">
            Your partnership can help write the next chapter of transformation in Africa
          </p>
          <button 
            onClick={() => navigate('/support-us')}
            className="bg-[#BEA336] hover:bg-[#a08d2d] text-white px-8 py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Partner With Us Today
          </button>
        </div>
      </div>

    </div>
  );
}