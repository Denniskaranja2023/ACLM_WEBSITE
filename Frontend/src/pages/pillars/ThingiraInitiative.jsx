import { useEffect, useRef, useState } from "react";
import { PillarSlideShow } from "../../components/ui/PillarSlideShow";
import { LoadingPage } from "../../components/ui/LoadingPage";
import ThingiraMain from "../../images/Thingira_main.jpeg"
import DistributingBalls from "../../images/ISSUING-BALLS-EDITED.jpg"
import GraciousFoundation from "../../images/grace_foundation_thingira.jpeg"
import AllMen from "../../images/All men_Thingira.jpeg"
import MenTraining from "../../images/Men-empowerment-Mozambique.jpeg"

const slideshowImages = [
  ThingiraMain, AllMen, DistributingBalls
];

export function ThingiraInitiative() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVideoSectionVisible, setIsVideoSectionVisible] = useState(false);
  const [isApproachSectionVisible, setIsApproachSectionVisible] = useState(false);
  const [isFocusSectionVisible, setIsFocusSectionVisible] = useState(false);
  const videoSectionRef = useRef(null);
  const approachSectionRef = useRef(null);
  const focusSectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const observers = [
        { ref: videoSectionRef, setter: setIsVideoSectionVisible },
        { ref: approachSectionRef, setter: setIsApproachSectionVisible },
        { ref: focusSectionRef, setter: setIsFocusSectionVisible }
      ];

      const observerInstances = observers.map(({ ref, setter }) => {
        const observer = new IntersectionObserver(
          ([entry]) => setter(entry.isIntersecting),
          { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return observer;
      });

      return () => observerInstances.forEach(observer => observer.disconnect());
    }
  }, [isLoading]);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <PillarSlideShow images={slideshowImages} title="Thingira Initiative" />

      {/* Video and Description Section */}
      <section ref={videoSectionRef} className="py-16 bg-[#f5f5f4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`bg-white p-8 rounded-lg shadow-sm transition-all duration-2000 ease-out ${isVideoSectionVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
            <h2 className={`text-[#2E652A] text-3xl mb-8 font-bold text-center transition-all duration-2200 delay-300 ${isVideoSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Restoring, Discipling, and Empowering Young Men</h2>
            
            {/* Video floating left */}
            <div className={`float-left mr-8 mb-6 w-full md:w-96 transition-all duration-1800 delay-600 ${isVideoSectionVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-20 scale-90'}`}>
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/9G8GpNySm-U"
                  title="Thingira Initiative Video"
                  className="w-full h-full rounded-lg"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            <div className={`transition-all duration-1600 delay-900 ${isVideoSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-gray-700 leading-relaxed text-justify mb-6">
                The Thingira Initiative is ACLM's emerging ministry dedicated to restoring, discipling, and empowering young men across Kenya. Inspired by the traditional Kikuyu thingira—a gathering place where men met for counsel, mentorship, and decision-making—the initiative seeks to reintroduce such life-shaping spaces for today's generation of young men.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-justify mb-8">
                Although still in the pipeline, the groundwork and preparations are well underway. ACLM has already mapped out at least nine counties in the Mt. Kenya region for the pilot phase, including Meru, Tharaka Nithi, Embu, Nyeri, Kirinyaga, Isiolo, Machakos, Kitui, and Murang'a.
              </p>
            </div>
            
            <div className={`transition-all duration-1600 delay-1200 ${isVideoSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-[#2E652A] text-xl font-bold mb-4">The Need</h3>
              <p className="text-gray-700 leading-relaxed text-justify mb-8">
                This initiative emerges from a growing burden: many young men today are navigating life without present fathers, positive role models, or godly guidance. The resulting vacuum has contributed to rising issues such as identity crises, hopelessness, and increasing involvement in drug and substance abuse.
              </p>
            </div>
            
            <div className={`transition-all duration-1600 delay-1500 ${isVideoSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-[#2E652A] text-xl font-bold mb-4">Our Aim</h3>
              <p className="text-gray-700 leading-relaxed text-justify">
                The Thingira Initiative seeks to address this crisis by creating safe, Christ-centered spaces where young men can be discipled in biblical manhood, receive mentorship, and gain practical training for responsible, godly leadership. Through community, teaching, and accountability, we aim to raise a generation of men who fear God, honor their families, and contribute positively to their communities.
              </p>
            </div>
            
            <div className="clear-both"></div>
          </div>
        </div>
      </section>

      <div ref={approachSectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className={`text-center mb-12 transition-all duration-2000 ease-out delay-1000 ${isApproachSectionVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
          <h2 className="text-[#2E652A] mb-4 text-4xl">Our Approach</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Through strategic initiatives and community engagement, we are building a foundation for transforming young men across Kenya.
          </p>
        </div>

        <div className="space-y-12">
          <div className={`overflow-hidden transition-all duration-1800 delay-1500 ${isApproachSectionVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative">
                <img 
                  src={AllMen} 
                  alt="Biblical Manhood Teaching"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-center">
                  <p className="text-sm italic">Young men pose for a photo with older after a teaching session that followed a soccer match</p>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center bg-white">
                <h3 className="text-[#2E652A] mb-4 text-2xl">Biblical Manhood Teaching</h3>
                <p className="text-gray-700 mb-4 leading-relaxed text-justify">
                  We ground our teaching in Scripture, exploring God's design for men as leaders, 
                  protectors, providers, and servants. Through Bible studies, discussions, and practical 
                  application, young men learn what it means to be a godly man in today's world.
                </p>
              </div>
            </div>
          </div>

          <div className={`overflow-hidden transition-all duration-1800 delay-2000 ${isApproachSectionVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
            <div className="grid md:grid-cols-2 gap-0 md:grid-flow-dense">
              <div className="relative md:col-start-2">
                <img 
                  src={DistributingBalls} 
                  alt="County-wide Engagements"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-center">
                  <p className="text-sm italic">Sports equipment distribution during county engagement</p>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center bg-white">
                <h3 className="text-[#2E652A] mb-4 text-2xl">County-wide Soccer tournaments</h3>
                <p className="text-gray-700 mb-4 leading-relaxed text-justify">
                  We believe sports to be a key pillar of reaching out to the young men in our counties. Through organization of soccer tournaments and sponsorship of teams, we aim to see young men brought together, challenged to stay out of drugs and given an oppportunity to enhance their talents. We also see this as a great opportunity to bring along older and respectable men to affirm and advice the young men through such fora..
                </p>
              </div>
            </div>
          </div>

          <div className={`overflow-hidden transition-all duration-1800 delay-2500 ${isApproachSectionVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative">
                <img 
                  src={MenTraining} 
                  alt="Mentorship and Accountability"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-center">
                  <p className="text-sm italic">Men discipleship programmes</p>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center bg-white">
                <h3 className="text-[#2E652A] mb-4 text-2xl">Discipling young men</h3>
                <p className="text-gray-700 mb-4 leading-relaxed text-justify">
                  Just as has been done in other places like Mozambique where we have been involved, we aim to disciple young men through deliberate and well-thought-out programmes. We look to work with churches and other like-minded organization to effect the transformation of the hearts of the young men in our counties through God's word and the power of His Spirit.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div ref={focusSectionRef} className="max-w-4xl mx-auto mt-16">
          <div className={`transition-all duration-2000 ease-out ${isFocusSectionVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
            <h3 className="text-[#2E652A] mb-4 text-2xl">Core Areas of Focus:</h3>
            <div className="bg-[#F6EFE2] p-6 rounded-lg mb-8">
              <ul className="space-y-3 text-gray-700">
                <li className={`flex items-start transition-all duration-1600 delay-1000 ${isFocusSectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <span className="mr-2">•</span>
                  <span><span className="text-[#2E652A]">Identity in Christ:</span> Understanding who we are as sons of God</span>
                </li>
                <li className={`flex items-start transition-all duration-1600 delay-1300 ${isFocusSectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <span className="mr-2">•</span>
                  <span><span className="text-[#2E652A]">Integrity and Character:</span> Building godly character that lasts</span>
                </li>
                <li className={`flex items-start transition-all duration-1600 delay-1600 ${isFocusSectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <span className="mr-2">•</span>
                  <span><span className="text-[#2E652A]">Relationships:</span> Navigating friendships, dating, and marriage God's way</span>
                </li>
                <li className={`flex items-start transition-all duration-1600 delay-1900 ${isFocusSectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <span className="mr-2">•</span>
                  <span><span className="text-[#2E652A]">Purpose and Calling:</span> Discovering and fulfilling God's purpose for your life</span>
                </li>
                <li className={`flex items-start transition-all duration-1600 delay-2200 ${isFocusSectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <span className="mr-2">•</span>
                  <span><span className="text-[#2E652A]">Leadership:</span> Developing servant leadership skills</span>
                </li>
                <li className={`flex items-start transition-all duration-1600 delay-2500 ${isFocusSectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  <span className="mr-2">•</span>
                  <span><span className="text-[#2E652A]">Life Skills:</span> Practical training in areas like finances, career, and personal development</span>
                </li>
              </ul>
            </div>
          </div>

          <div className={`bg-white p-6 rounded-lg border-2 border-[#2E652A] transition-all duration-2000 delay-2800 ${isFocusSectionVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
            <h3 className="text-[#2E652A] mb-3">Impact and Vision</h3>
            <p className="text-gray-700 mb-4">
              Through the Thingira Initiative, we hope to see young men transformed by the Gospel and equipped 
              to be leaders in their homes, churches, and communities. Our vision is to see a generation of 
              godly men across Kenya who are confident about their identity in Christ and are committed to living out 
              biblical manhood.
            </p>
            <p className="text-gray-700">
              We envision these young men becoming the fathers, husbands, church leaders, and community 
              influencers that Kenya and Africa desperately need - men who fear God, love their families, 
              and serve their communities with integrity and compassion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}