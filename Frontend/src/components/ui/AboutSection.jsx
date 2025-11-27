import { useNavigate } from "react-router-dom";
import { Target, Eye } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function AboutSection() {
  const navigate = useNavigate();
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
    <section ref={sectionRef} className="py-16 bg-[#f5f5f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-2000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isVisible ? 'opacity-100 translate-y-0 scale-100 rotate-0' : 'opacity-0 translate-y-32 scale-70 -rotate-8'}`}>
          <h2 className="text-[#2E652A] mb-4 text-4xl font-black transform transition-all duration-2000 hover:scale-110">About Us</h2>
        </div>

        {/* Video and ACLM Info */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 transition-all duration-2200 delay-800 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-48 scale-75'}`}>
          {/* Video Section */}
          <div className={`bg-white p-6 rounded-lg shadow-sm transition-all duration-1800 delay-1200 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform ${isVisible ? 'opacity-100 translate-y-0 rotate-0 scale-100' : 'opacity-0 translate-y-24 rotate-8 scale-80'}`}>
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/1YrByIPybkY"
                title="ACLM Video"
                className="w-full h-full rounded-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* ACLM Info Section */}
          <div className={`bg-white p-8 rounded-lg shadow-sm transition-all duration-1800 delay-1600 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform ${isVisible ? 'opacity-100 translate-y-0 rotate-0 scale-100' : 'opacity-0 translate-y-24 -rotate-8 scale-80'}`}>
            <h3 className="text-[#2E652A] text-2xl mb-6 font-bold">Africa Center for Leadership and Missions</h3>
            <p className="text-gray-700 leading-relaxed text-justify">
              Our mission is to develop leaders through Christian discipleship (2 Timothy 2:2). 
              We organize and facilitate evangelism and mission training, providing materials for 
              evangelism and discipleship. By God's grace, we have worked in Uganda, Rwanda, 
              Burundi, Congo, and Mozambique, and support missionaries in Mozambique and Cambodia.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4 text-justify">
              We catalyze foreign missions by providing cover for called individuals, skill training 
              in evangelism and discipleship for pastors, and serving as a reference point for mercy 
              initiatives and pioneering work in health, education, food security, and water provision 
              for communities.
            </p>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 transition-all duration-2200 delay-2000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-48 scale-75'}`}>
          <div className={`bg-white p-8 rounded-lg shadow-sm transition-all duration-1600 delay-2400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform ${isVisible ? 'opacity-100 translate-y-0 rotate-0 scale-100' : 'opacity-0 translate-y-28 rotate-6 scale-80'}`}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[#2E652A] flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-[#BEA336]" />
              </div>
              <h3 className="text-[#2E652A] font-bold">Our Mission</h3>
            </div>
            <p className="text-gray-700">
              To develop leaders through Christian discipleship (2 Timothy 2:2)
            </p>
          </div>

          <div className={`bg-white p-8 rounded-lg shadow-sm transition-all duration-1600 delay-2800 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform ${isVisible ? 'opacity-100 translate-y-0 rotate-0 scale-100' : 'opacity-0 translate-y-28 -rotate-6 scale-80'}`}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[#2E652A] flex items-center justify-center mr-4">
                <Eye className="w-6 h-6 text-[#BEA336]" />
              </div>
              <h3 className="text-[#2E652A] font-bold">Our Vision</h3>
            </div>
            <p className="text-gray-700">
              To make leaders through Christian Discipleship
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className={`bg-white p-8 rounded-lg shadow-sm text-center max-w-4xl mx-auto transition-all duration-2000 delay-3200 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform ${isVisible ? 'opacity-100 translate-y-0 scale-100 rotate-0' : 'opacity-0 translate-y-32 scale-75 rotate-4'}`}>
          <h3 className="text-[#2E652A] mb-6 font-bold text-xl">Our Story</h3>
          <p className="text-gray-700 mb-6 text-justify">
            ACLM began in the parenting fellowship of Parklands Baptist Church in Nairobi, 
            where a burden for raising godly children grew into a wider call to serve the African church.
          </p>
          <button
            onClick={() => navigate("/our-roots")}
            className="bg-[#BEA336] hover:bg-[#a08d2d] text-white px-4 py-2 rounded-md transition-colors"
          >
            Get Our Full Story
          </button>
        </div>
      </div>
    </section>
  );
}