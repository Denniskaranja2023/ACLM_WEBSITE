import { useState, useEffect } from "react";
import { PillarSlideShow } from "../components/ui/PillarSlideShow";
import { LoadingPage } from "../components/ui/LoadingPage";

const slideshowImages = [
  "https://images.unsplash.com/photo-1581592717535-7f3e001bfa7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBmb3VuZGVycyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYzNzE2NjEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1551327420-4b280d52cc68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb21tdW5pdHklMjBwcmF5ZXJ8ZW58MXx8fHwxNzYzNzE2NjEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1638866411154-35bbaf030f55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pc3RyeSUyMGJlZ2lubmluZ3xlbnwxfHx8fDE3NjM3MTY2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
];

export function OurRoots() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div>
       <PillarSlideShow images={slideshowImages} title="Our Roots" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h2 className="text-[#2E652A] mb-6">Where It All Began</h2>
          <p className="text-gray-700 mb-6">
            ACLM was an initiative of the parenting fellowship of Parklands Baptist Church, Nairobi Kenya.
          </p>
          <p className="text-gray-700 mb-6">
            Parenting fellowship's main intentions and efforts were to raise children for God.
          </p>
        </div>

        <div className="bg-[#F6EFE2] p-8 rounded-lg mb-12">
          <h3 className="text-[#2E652A] mb-4">The Turning Point</h3>
          <p className="text-gray-700 mb-4">
            We realized we could do more than just focus on our children, so we spread out to the main church. 
            Some members moved to teach Sunday school, while some of us got opportunities to mentor foreign 
            students who went on to invite us to Burundi.
          </p>
          <p className="text-gray-700">
            After a few missions to Burundi, Rwanda and Uganda, we realized God wanted us to do more for the 
            African church.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg border-2 border-[#2E652A] mb-12">
          <h3 className="text-[#2E652A] mb-4">The Formation of ACLM</h3>
          <p className="text-gray-700 mb-4">
            To be more effective in reaching and mentoring pastors and youth in Africa, we needed to establish 
            an organization to facilitate the above. ACLM was then formed and registered in 2010.
          </p>
          <p className="text-gray-700">
            What started as a small parenting fellowship in one church has grown into a continental movement 
            impacting leaders across Africa through training, literature, mission mobilization, and mentorship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#2E652A] text-white p-6 rounded-lg text-center">
            <div className="text-[#BEA336] mb-2">2010</div>
            <p className="text-sm">Organization Founded & Registered</p>
          </div>
          <div className="bg-[#2E652A] text-white p-6 rounded-lg text-center">
            <div className="text-[#BEA336] mb-2">3 Countries</div>
            <p className="text-sm">Initial Mission Trips (Burundi, Rwanda, Uganda)</p>
          </div>
          <div className="bg-[#2E652A] text-white p-6 rounded-lg text-center">
            <div className="text-[#BEA336] mb-2">1 Fellowship</div>
            <p className="text-sm">Started at Parklands Baptist Church</p>
          </div>
        </div>

        <div className="mt-12 bg-[#BEA336] text-white p-8 rounded-lg text-center">
          <h3 className="mb-4">From Local to Continental</h3>
          <p>
            From a parenting fellowship with a heart for children to an organization impacting leaders 
            across Africa - this is the story of God's faithfulness and the power of saying "yes" to His call.
          </p>
        </div>
      </div>
    </div>
  );
}
