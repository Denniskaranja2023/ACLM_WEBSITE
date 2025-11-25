import { CheckCircle } from "lucide-react";
import { PillarSlideShow } from "../../components/ui/PillarSlideShow";

const slideshowImages = [
  "https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkZXJzaGlwJTIwdHJhaW5pbmclMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjM2NzI4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1717201611909-0f75ee9b0b1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjB0cmFpbmluZyUyMGFmcmljYXxlbnwxfHx8fDE3NjM3MTY2MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1529070538774-1843cb3265df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMHN0dWR5JTIwZ3JvdXB8ZW58MXx8fHwxNzYzNjM4Njc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1594142117505-c70dcd31087c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0b3IlMjB0ZWFjaGluZ3xlbnwxfHx8fDE3NjM3MTY2MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
];

export function LeadershipTrainings() {
  return (
    <div>
      <PillarSlideShow images={slideshowImages} title="Leadership Trainings" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h2 className="text-[#2E652A] mb-4">Empowering Leaders for the Great Commission</h2>
          <p className="text-gray-700 mb-6">
            At ACLM, we believe that effective Christian leadership is rooted in biblical truth and 
            practical ministry skills. Our leadership training programs are designed to equip evangelists, 
            church leaders, and missionaries with the knowledge and tools they need to fulfill the Great 
            Commission in their communities and beyond.
          </p>

          <h3 className="text-[#2E652A] mb-4">Our Training Programs Include:</h3>
          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-[#2E652A] mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-[#2E652A] mb-2">Biblical Foundations</h4>
                <p className="text-gray-700">
                  In-depth study of Scripture to establish a solid theological foundation for ministry.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-[#2E652A] mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-[#2E652A] mb-2">Evangelism and Discipleship</h4>
                <p className="text-gray-700">
                  Practical training in sharing the Gospel effectively and making disciples who make disciples.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-[#2E652A] mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-[#2E652A] mb-2">Leadership Development</h4>
                <p className="text-gray-700">
                  Cultivating servant leadership qualities and skills for leading God's people effectively.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-[#2E652A] mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-[#2E652A] mb-2">Church Planting</h4>
                <p className="text-gray-700">
                  Strategies and methodologies for establishing healthy, multiplying churches.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 text-[#2E652A] mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-[#2E652A] mb-2">Missions Training</h4>
                <p className="text-gray-700">
                  Preparing missionaries for cross-cultural ministry and the challenges of mission work.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#F6EFE2] p-6 rounded-lg">
            <h3 className="text-[#2E652A] mb-3">Impact</h3>
            <p className="text-gray-700">
              Through our training programs, we have equipped hundreds of leaders across Africa who are 
              now actively involved in evangelism, church planting, and discipleship in their communities. 
              These trained leaders are multiplying their impact by training others, creating a ripple 
              effect of transformation across the continent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}