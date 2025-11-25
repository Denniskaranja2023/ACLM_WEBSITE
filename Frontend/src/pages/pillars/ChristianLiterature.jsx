import { Book, FileText, Bookmark } from "lucide-react";
import { PillarSlideShow } from "../../components/ui/PillarSlideShow";

const slideshowImages = [
  "https://images.unsplash.com/photo-1709158990536-0cd97cd00345?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMGJvb2tzJTIwcmVhZGluZ3xlbnwxfHx8fDE3NjM2NzI4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1581832098756-5b29318b542e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHJpc3RpYW4lMjBib29rcyUyMGxpYnJhcnl8ZW58MXx8fHwxNzYzNzE2NjExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1759420164008-138f2d458885?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFkaW5nJTIwc2NyaXB0dXJlfGVufDF8fHx8MTc2MzcxNjYxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
];

export function ChristianLiterature() {
  return (
    <div>
      <PillarSlideShow images={slideshowImages} title="Christian Literature" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h2 className="text-[#2E652A] mb-4">Providing Essential Resources for Ministry</h2>
          <p className="text-gray-700 mb-8">
            ACLM is committed to providing quality Christian literature and resources that equip believers 
            for effective evangelism, discipleship, and spiritual growth. We believe that well-crafted 
            biblical resources are essential tools for spreading the Gospel and building up the body of Christ.
          </p>

          <h3 className="text-[#2E652A] mb-6">Our Literature Resources:</h3>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#2E652A]">
              <div className="flex items-start">
                <Book className="w-8 h-8 text-[#BEA336] mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-[#2E652A] mb-2">The Evangelism Cube</h4>
                  <p className="text-gray-700">
                    Our flagship evangelism tool, the Evangelism Cube is a simple yet powerful resource that 
                    helps believers share the Gospel clearly and effectively. This visual aid breaks down the 
                    core message of salvation in a way that is easy to understand and remember, making it an 
                    invaluable tool for both new and experienced evangelists.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#2E652A]">
              <div className="flex items-start">
                <FileText className="w-8 h-8 text-[#BEA336] mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-[#2E652A] mb-2">Discipleship Materials</h4>
                  <p className="text-gray-700">
                    We provide comprehensive discipleship materials designed to help new believers grow in 
                    their faith and mature Christians deepen their walk with God. These resources cover 
                    essential topics such as prayer, Bible study, Christian living, and service.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#2E652A]">
              <div className="flex items-start">
                <Bookmark className="w-8 h-8 text-[#BEA336] mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-[#2E652A] mb-2">Training Manuals</h4>
                  <p className="text-gray-700">
                    Our training manuals provide practical guidance for ministry leaders in various areas 
                    including evangelism, discipleship, leadership development, and church planting. These 
                    resources are designed to be accessible and applicable to the African context.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F6EFE2] p-6 rounded-lg">
            <h3 className="text-[#2E652A] mb-3">Distribution and Access</h3>
            <p className="text-gray-700 mb-4">
              We distribute our literature through churches, training programs, and mission trips across 
              Africa. Our goal is to make these resources accessible to as many believers as possible, 
              especially in areas where quality Christian literature is scarce.
            </p>
            <p className="text-gray-700">
              Many of our resources are available in multiple languages to ensure that believers can access 
              them in their heart language, making the truths of Scripture more accessible and impactful.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}