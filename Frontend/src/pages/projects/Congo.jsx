import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/ui/Card";
import { CardContent } from "../../components/ui/CardContent";
import { LoadingPage } from "../../components/ui/LoadingPage";
import { ExternalLink, Play } from "lucide-react";
import Training1 from "../../images/2014-congo-evangelism-training.webp"
import Training2 from "../../images/Pst-Mwiti-Evangelism-cube.webp"
import EvangelismCubeTraining1 from "../../images/congo-evangelism-cube-training-2.webp"
import EvangelismCubeTraining2 from "../../images/training-many-people-evangelism-cube.webp"
import EvangelismCubeUse from "../../images/evangelism-cube-in-use.webp"


const slideshowImages = [
  Training1, Training2, EvangelismCubeTraining2
];

const projects = [
  {
    id: 1,
    title: "Evangelism Trainings and Workshops",
    description: "Through our partnerships with different churches in Congo, we continue to train and equip believers with the practical knowledge of how to share the gospel and how to walk with converts in discipleship",
    images: [Training1, Training2],
    captions: [
      "Pastor Mwiti training church members in Congo on evangelism",
      "An evangelism training in session"
    ]
  },
  {
    id: 2,
    title: "Distribution of Christian Literature",
    description: "Seeing how important Christian Literature is both for evangelism and discipleship, we endeavour to provide this for the growing church of Congo. We distinctly distribute evangelism cubes which we also train church members to use. The evangelism cube is a clear and graphical way to share the good news of Jesus' death and ressurection",
    images: [EvangelismCubeTraining2, EvangelismCubeUse, EvangelismCubeTraining1],
    captions: [
      "Envangelism cubes in use during a training session",
      "Evangelism cube being used in practical ministry",
      "Evangelism cubes distributed to church members"
    ]
  },
];

const videos = [
  {
    id: 1,
    title: "Ministry to pygmies",
    description: "A company of pygmy men share with a local ACLM missionary about the harrowing effects of the Congo war as he shares the gospel",
    youtubeId: "WiKuxPmXzpI",
    thumbnail: "https://img.youtube.com/vi/WiKuxPmXzpI/maxresdefault.jpg"
  },
  {
    id: 2,
    title: "Evangelism by the Cube",
    description: "Our missionary in Congo shares the gospel with a local using the evangelism cube",
    youtubeId: "t8Qw058Ydso",
    thumbnail: "https://img.youtube.com/vi/t8Qw058Ydso/maxresdefault.jpg"
  },
  {
    id: 3,
    title: "A time of fellowship",
    description: "Our missionaries enjoying a time of singing with Congolese believers.",
    youtubeId: "ku5NJcsYeoo",
    thumbnail: "https://img.youtube.com/vi/ku5NJcsYeoo/maxresdefault.jpg"
  }
];

export function Congo() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [projectSlides, setProjectSlides] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const intervals = {};
    projects.forEach(project => {
      intervals[project.id] = setInterval(() => {
        setProjectSlides(prev => ({
          ...prev,
          [project.id]: ((prev[project.id] || 0) + 1) % project.images.length
        }));
      }, 4000);
    });
    
    return () => {
      Object.values(intervals).forEach(interval => clearInterval(interval));
    };
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div>
      {/* Slideshow Section */}
      <div className="relative h-[800px] overflow-hidden">
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
            ACLM Projects in Congo
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
          <h2 className="text-[#2E652A] mb-4 text-4xl">Our Projects in Congo</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Reaching the Francophone world with the Gospel through strategic partnerships, evangelism and discipleship workshops and through 
            literature distribution.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={project.id} className="overflow-hidden">
              <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                <div className={`relative ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <div className="relative h-96 overflow-hidden">
                    {project.images.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                          imgIndex === (projectSlides[project.id] || 0) ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <img 
                          src={image} 
                          alt={`${project.title} - Image ${imgIndex + 1}`}
                          className={`w-full h-full ${image === EvangelismCubeUse || image === EvangelismCubeTraining1 ? 'object-contain' : 'object-cover'}`}
                        />
                      </div>
                    ))}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3">
                      <p className="text-sm italic">
                        {project.captions[projectSlides[project.id] || 0]}
                      </p>
                    </div>
                    <div className="absolute bottom-4 right-4 flex space-x-1">
                      {project.images.map((_, imgIndex) => (
                        <div
                          key={imgIndex}
                          className={`w-2 h-2 rounded-full ${
                            imgIndex === (projectSlides[project.id] || 0) ? "bg-[#BEA336]" : "bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <h3 className="text-[#2E652A] mb-4 text-2xl">{project.title}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Stories from Congo Section */}
      <div className="bg-[#f5f5f4] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#2E652A] mb-4 text-4xl">Stories from Congo</h2>
            <p className="text-gray-600">
              Watch testimonies and highlights from our work across Congo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <h3 className="text-[#2E652A] mb-3">{video.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}