import { Globe, Users, DollarSign } from "lucide-react";
import { PillarSlideShow } from "../../components/ui/PillarSlideShow";

const slideshowImages = [
  "https://images.unsplash.com/photo-1741952094741-e7d3bb84e8fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXNzaW9uJTIwY29tbXVuaXR5JTIwc2VydmljZXxlbnwxfHx8fDE3NjM2NzI4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1700934956852-749efbc8c092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXNzaW9uJTIwd29yayUyMGFmcmljYXxlbnwxfHx8fDE3NjM3MTY2MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBvdXRyZWFjaHxlbnwxfHx8fDE3NjM3MTY2MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
];

export function MissionMobilization() {
  return (
    <div>
      <PillarSlideShow images={slideshowImages} title="Mission Mobilization" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h2 className="text-[#2E652A] mb-4">Mobilizing the Church for Global Missions</h2>
          <p className="text-gray-700 mb-8">
            Mission Mobilization is at the heart of ACLM's calling. We believe that every believer has a 
            role to play in fulfilling the Great Commission. Our mission mobilization efforts focus on 
            identifying, connecting, and supporting those called to missionary work across Africa and beyond.
          </p>

          <h3 className="text-[#2E652A] mb-6">How We Mobilize for Missions:</h3>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#2E652A] flex items-center justify-center mr-4 flex-shrink-0">
                  <Users className="w-6 h-6 text-[#BEA336]" />
                </div>
                <div>
                  <h4 className="text-[#2E652A] mb-2">Identifying Called Workers</h4>
                  <p className="text-gray-700">
                    We work with churches and individuals to help identify those who have a calling to 
                    missions. Through prayer, assessment, and counseling, we help believers discern God's 
                    call on their lives for missionary work.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#2E652A] flex items-center justify-center mr-4 flex-shrink-0">
                  <Globe className="w-6 h-6 text-[#BEA336]" />
                </div>
                <div>
                  <h4 className="text-[#2E652A] mb-2">Connecting with Opportunities</h4>
                  <p className="text-gray-700">
                    We maintain relationships with mission organizations, churches, and ministries across 
                    Africa and globally. This network allows us to connect aspiring missionaries with the 
                    right opportunities that match their calling, gifts, and circumstances.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-[#2E652A] flex items-center justify-center mr-4 flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-[#BEA336]" />
                </div>
                <div>
                  <h4 className="text-[#2E652A] mb-2">Raising Support and Resources</h4>
                  <p className="text-gray-700">
                    One of the biggest challenges in missions is financial and resource support. We assist 
                    missionaries in raising the necessary support by connecting them with potential donors, 
                    churches, and organizations. We also provide training in support raising and financial 
                    stewardship.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F6EFE2] p-6 rounded-lg mb-8">
            <h3 className="text-[#2E652A] mb-3">Our Approach</h3>
            <p className="text-gray-700 mb-4">
              We believe in a holistic approach to mission mobilization that doesn't just send people out 
              but ensures they are properly prepared, connected, and supported. This includes:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Pre-field training and orientation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Ongoing mentorship and support</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Connection with local churches and ministries</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Regular communication and accountability</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Member care and pastoral support</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg border-2 border-[#BEA336]">
            <h3 className="text-[#2E652A] mb-3">Join the Movement</h3>
            <p className="text-gray-700">
              Whether you feel called to go, pray, give, or send, there is a place for you in God's mission. 
              Contact us to learn more about how you can be involved in mission mobilization through ACLM.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}