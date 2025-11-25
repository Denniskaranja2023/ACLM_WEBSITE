import { ExternalLink, Play, Film } from "lucide-react";

const videos = [
  {
    id: 1,
    title: "ACLM Leadership Training Impact",
    description: "Watch how our leadership training programs have transformed pastors and church leaders across Kenya and East Africa.",
    youtubeId: "dQw4w9WgXcQ", // Placeholder YouTube video ID
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
  },
  {
    id: 2,
    title: "Thingira Initiative - Empowering Young Men",
    description: "A glimpse into our Thingira Initiative and how we're helping young men discover biblical manhood.",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
  },
  {
    id: 3,
    title: "Mission Trip to Burundi 2023",
    description: "Join us on our recent mission trip to Burundi where we trained church leaders and distributed Christian literature.",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
  },
  {
    id: 4,
    title: "Evangelism Cube Distribution",
    description: "See how the Evangelism Cube is being used across Africa to share the Gospel effectively.",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
  },
  {
    id: 5,
    title: "Partnership Stories - Supporting Missionaries",
    description: "Hear testimonies from missionaries we've supported through our mission mobilization efforts.",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
  },
  {
    id: 6,
    title: "ACLM 10 Year Anniversary Celebration",
    description: "Celebrating a decade of developing leaders through Christian discipleship across Africa.",
    youtubeId: "dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg"
  }
];

export function OurStories() {
  const openYouTubeVideo = (youtubeId) => {
    window.open(`https://www.youtube.com/watch?v=${youtubeId}`, '_blank');
  };

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
          <p className="text-white/90 max-w-2xl mx-auto leading-relaxed">
            Witness the power of God at work through ACLM's ministry across Africa. From leadership trainings 
            that ignite passion, to mission trips that spread hope, to lives transformed by discipleship—these 
            are the stories that fuel our mission.
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
            Click any video to watch on YouTube
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div 
              key={video.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-[#BEA336]"
              onClick={() => openYouTubeVideo(video.youtubeId)}
            >
              <div className="relative group">
                <img 
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                {/* Play Button Overlay */}
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
                <h3 className="text-[#2E652A] mb-3 group-hover:text-[#BEA336] transition-colors">{video.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
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

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-[#2E652A] to-[#234d21] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4 text-3xl">Want to Be Part of the Story?</h2>
          <p className="text-[#F6EFE2] mb-8 text-lg">
            Your partnership can help write the next chapter of transformation in Africa
          </p>
          <button 
            onClick={() => window.location.href = '/support-us'}
            className="bg-[#BEA336] hover:bg-[#a08d2d] text-white px-8 py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Partner With Us Today
          </button>
        </div>
      </div>
    </div>
  );
}