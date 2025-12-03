import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/ui/Card";
import { CardContent } from "../../components/ui/CardContent";
import { ExternalLink, Play } from "lucide-react";
import TrainingImage from "../../images/Evangelism training-mozambique.jpeg"
import ChurchPlant from "../../images/Church-plant-interior-Mozambique.jpeg"
import SmallGroups from "../../images/small-groups-after-training-mozambique.jpeg"
import AudioBibles from "../../images/Audio-Bible-cropped.png"
import EveryMan from "../../images/every-man-a-warrior-mozambique-2.jpeg"
import DiscipleshipLiterature from "../../images/Discipleship-Literature-Mozambique.jpeg"
import EvangelismTraining2 from "../../images/Evangelism-Training-2.jpeg"
import TrainingSeminar from "../../images/Training-seminar.jpeg"
import MinisteringChurch from "../../images/Training-church-1.jpeg"
import MensSeminar from "../../images/Men-seminar-Mozambique-1.jpeg"
import WomensConference from "../../images/Women-conference-Mozambique.jpeg"
import SundaySchool from "../../images/Sunday-school-teachers-mozambique.jpeg"
import TeachingChildren from "../../images/Teaching-English-as -ministry-Mozambique-2.jpeg"
import ChildrenMinistry from "../../images/Children-Ministry-Mozambique.jpeg"
import MensTraining from "../../images/Men-seminar-Mozambique-2.jpeg"



const slideshowImages = [
  TrainingImage,
  ChurchPlant,
  SmallGroups
];

const projects = [
  {
    id: 1,
    title: "Distribution of Christian Literature",
    description: "At ACLM, we believe that the Bible is the most important book in the world and is central in both discipleship and evangelism. We are committed to making the Bible accessible to everyone, everywhere. We distribute Audio Bibles to churches and communities so that people can hear the good news in their language. We also distribute discipleship tools for use in trainings for example, the Every Man a Warrior manual for training men in Biblical manhood ",
    images: [
      { image: AudioBibles, caption: "Our missionary Kennedy Mukono teaching a local how to use an audio Bible" },
      { image: EveryMan, caption: "Every Man a Warrior manual in use to help raise godly men" },
      { image: DiscipleshipLiterature, caption: "Discipleship literature distributed for discipling Mozambican believers" }
    ]
  },
  {
    id: 2,
    title: "Discipling and supporting Churches",
    description: "Part of our calling is to the churches in the countries we operate in. Through conferences and Sunday service engagements, we endeavour to see the word of God taught for the upbuilding of the church in Africa.",
    images: [
      { image: ChurchPlant, caption: "A visit to a church in the heart of Mocuba" },
      { image: TrainingSeminar, caption: "Equipping church members through evangelism training" },
      { image: MinisteringChurch, caption: "A ministration to a local church in Mocuba" },
      { image: EvangelismTraining2, caption: "Evangelism training session in Mocuba" }
    ]
  },
  {
    id: 3,
    title: "Evangelism & Discipleship Training",
    description: "Equipping Mozambican believers with practical evangelism tools and discipleship methods. Through workshops and ongoing training, we're empowering local Christians to share their faith effectively and make disciples in their communities. This includes training on the Evangelism Cube and other contextually appropriate witnessing methods.",
    images: [
      { image: TrainingImage, caption: "After a discipleship and evangelism training session" },
      { image: SmallGroups, caption: "Group discussions after discipleship and evangelism training" },
      { image: MensSeminar, caption: "Training men in Biblical manhood" }
    ]
  },
  {
    id: 4,
    title: "Family empowerment programmes",
    description: "We believe that the family is God's design and cannot be overlooked in impacting society. We run men empowerment seminars to encourage men to take up the mandate that God has given them to shepherd their families Biblically. We also take part in annual Church conferences empowering women. Our Missionary, Leonard Karanja also runs a weekly children ministry program with his wife to equip the next generation of Mozambicans with the truth of God's word.",
    images: [
      { image: MensTraining, caption: "Men's empowerment seminar in progress" },
      { image: WomensConference, caption: "Women's conference at local church" },
      { image: ChildrenMinistry, caption: "Weekly children's ministry program run by Leonard and his wife"},
      { image: TeachingChildren, caption: "Teaching Children English as a ministry in Mocuba" },
      { image: SundaySchool, caption: "A photo after a Sunday school teachers training in Mocuba" }
    ]
  }
];

const videos = [
  {
    id: 1,
    title: "A walk through the Bush",
    description: "A local believer recounts to our missionary the evils of witchcraft as they walk through the bushes of Mugulama village",
    youtubeId: "LzX0wQLWoxA",
    thumbnail: "https://img.youtube.com/vi/LzX0wQLWoxA/maxresdefault.jpg"
  },
  {
    id: 2,
    title: "Rejoice in the Lord",
    description: "Our Missionary, Kennedy, shares a moment of joy with Mozambican believers through joyful singing to the Lord",
    youtubeId: "mkkDZ5_EwHs",
    thumbnail: "https://img.youtube.com/vi/mkkDZ5_EwHs/maxresdefault.jpg"
  },
  {
    id: 3,
    title: "Discipling the youth",
    description: "Leonard shares a moment with Mozambican church youth.",
    youtubeId: "JS2OvIKMaOY",
    thumbnail: "https://img.youtube.com/vi/JS2OvIKMaOY/maxresdefault.jpg"
  }
];

export function Mozambique() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [projectSlides, setProjectSlides] = useState(projects.reduce((acc, project) => ({ ...acc, [project.id]: 0 }), {}));
  const [isVideoSectionVisible, setIsVideoSectionVisible] = useState(false);
  const videoSectionRef = useRef(null);
  const navigate = useNavigate();

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
  }, []);



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
            Bringing hope and restoration to Mozambique through distribution of Audio Bibles, training of evangelists and discipleship of youth and churches.
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

      {/* Stories from Mozambique Section */}
      <div ref={videoSectionRef} className="bg-[#f5f5f4] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-2000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${isVideoSectionVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-32 scale-70'}`}>
            <h2 className="text-[#2E652A] mb-4 text-4xl">Stories from Mozambique</h2>
            <p className="text-gray-600">
              Watch testimonies and highlights from our work across Mozambique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={video.id} className={`bg-white p-6 rounded-lg shadow-sm transition-all duration-1800 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] transform ${isVideoSectionVisible ? 'opacity-100 translate-y-0 rotate-0 scale-100' : 'opacity-0 translate-y-24 rotate-2 scale-80'}`} style={{ transitionDelay: `${800 + index * 400}ms` }}>
                <div className="aspect-video mb-4">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    className="w-full h-full rounded-lg"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h3 className="text-[#2E652A] mb-3">{video.title}</h3>
                <p className="text-gray-600 text-sm">
                  {video.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}