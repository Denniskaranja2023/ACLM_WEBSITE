import { useNavigate } from "react-router-dom";
import { Target, Eye } from "lucide-react";

export function AboutSection() {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-[#f5f5f4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#2E652A] mb-4 text-4xl">About Us</h2>
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[#2E652A] flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-[#BEA336]" />
              </div>
              <h3 className="text-[#2E652A]">Our Mission</h3>
            </div>
            <p className="text-gray-700">
              To equip and empower Christian leaders across Africa through biblical training, 
              discipleship, and mission mobilization, enabling them to transform their communities 
              and fulfill the Great Commission.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[#2E652A] flex items-center justify-center mr-4">
                <Eye className="w-6 h-6 text-[#BEA336]" />
              </div>
              <h3 className="text-[#2E652A]">Our Vision</h3>
            </div>
            <p className="text-gray-700">
              To see a generation of biblically-grounded leaders across Africa who are equipped 
              to disciple nations, plant churches, and impact their communities with the transformative 
              power of the Gospel.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-white p-8 rounded-lg shadow-sm text-center max-w-4xl mx-auto">
          <h3 className="text-[#2E652A] mb-6">Our Story</h3>
          <p className="text-gray-700 mb-6">
            ACLM was an initiative of the parenting fellowship of Parklands Baptist Church, Nairobi Kenya. 
            Our Parenting fellowship's main intentions and efforts was to raise children for God. 
            We realized we can do more than our children so we spread out to the main church. 
            And the vision for the organization was born.
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