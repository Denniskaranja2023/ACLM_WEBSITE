import { Heart, MapPin, Award } from "lucide-react";
import { PillarSlideShow } from "../../components/ui/PillarSlideShow";
import ThingiraMain from "../../images/Thingira_main.jpeg"
import DistributingBalls from "../../images/Issuing-balls-thingira.jpeg"
import GraciousFoundation from "../../images/grace_foundation_thingira.jpeg"
import KickOutDrugs from "../../images/Kicking_drugs_out_thingira.jpeg"
import Prematch from "../../images/prematch_thingira.jpeg"
import AllMen from "../../images/All men_Thingira.jpeg"

const slideshowImages = [
  ThingiraMain, AllMen, Prematch, DistributingBalls, GraciousFoundation,KickOutDrugs
];

export function ThingiraInitiative() {
  return (
    <div>
      <PillarSlideShow images={slideshowImages} title="Thingira Initiative" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h2 className="text-[#2E652A] mb-4">Raising Godly Men for This Generation</h2>
          <p className="text-gray-700 mb-6">
            The Thingira Initiative is ACLM's focused ministry to young men across Kenya. Drawing from the 
            traditional Kikuyu concept of the "thingira" - a place where boys were mentored into manhood - 
            we are creating spaces and programs where young men can be discipled in biblical manhood and 
            equipped for godly leadership.
          </p>

          <div className="bg-[#2E652A] text-white p-6 rounded-lg mb-8">
            <h3 className="text-[#BEA336] mb-3">The Need</h3>
            <p>
              In today's society, many young men are growing up without proper guidance and role models. 
              They lack a clear understanding of what it means to be a man according to God's design. The 
              Thingira Initiative addresses this crisis by providing biblical mentorship, practical training, 
              and community support.
            </p>
          </div>

          <h3 className="text-[#2E652A] mb-6">Our Approach:</h3>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#BEA336]">
              <div className="flex items-start">
                <Heart className="w-8 h-8 text-[#2E652A] mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-[#2E652A] mb-2">Biblical Manhood Teaching</h4>
                  <p className="text-gray-700">
                    We ground our teaching in Scripture, exploring God's design for men as leaders, 
                    protectors, providers, and servants. Through Bible studies, discussions, and practical 
                    application, young men learn what it means to be a godly man in today's world.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#BEA336]">
              <div className="flex items-start">
                <MapPin className="w-8 h-8 text-[#2E652A] mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-[#2E652A] mb-2">County-wide Engagements</h4>
                  <p className="text-gray-700">
                    The Thingira Initiative conducts regular engagements across various Kenyan counties. 
                    These events bring together young men for intensive teaching, mentorship, and fellowship. 
                    They provide a safe space for men to be vulnerable, ask questions, and grow together.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#BEA336]">
              <div className="flex items-start">
                <Award className="w-8 h-8 text-[#2E652A] mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-[#2E652A] mb-2">Mentorship and Accountability</h4>
                  <p className="text-gray-700">
                    We pair young men with mature Christian mentors who can guide them in their spiritual 
                    growth, character development, and life decisions. These mentorship relationships provide 
                    ongoing support and accountability long after our events conclude.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-[#2E652A] mb-4">Core Areas of Focus:</h3>
          <div className="bg-[#F6EFE2] p-6 rounded-lg mb-8">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><span className="text-[#2E652A]">Identity in Christ:</span> Understanding who we are as sons of God</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><span className="text-[#2E652A]">Integrity and Character:</span> Building godly character that lasts</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><span className="text-[#2E652A]">Relationships:</span> Navigating friendships, dating, and marriage God's way</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><span className="text-[#2E652A]">Purpose and Calling:</span> Discovering and fulfilling God's purpose for your life</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><span className="text-[#2E652A]">Leadership:</span> Developing servant leadership skills</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span><span className="text-[#2E652A]">Life Skills:</span> Practical training in areas like finances, career, and personal development</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border-2 border-[#2E652A]">
            <h3 className="text-[#2E652A] mb-3">Impact and Vision</h3>
            <p className="text-gray-700 mb-4">
              Through the Thingira Initiative, we are seeing young men transformed by the Gospel and equipped 
              to be leaders in their homes, churches, and communities. Our vision is to see a generation of 
              godly men across Kenya who understand their identity in Christ and are committed to living out 
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