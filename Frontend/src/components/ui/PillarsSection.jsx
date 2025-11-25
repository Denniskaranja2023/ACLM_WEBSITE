import { useNavigate } from "react-router-dom";
import { Card } from "./Card";
import { CardContent } from "./CardContent";

const pillars = [
  {
    id: "leadership-trainings",
    title: "Leadership Trainings",
    description: "ACLM trains evangelists, church leaders, and missionaries in fulfilling the great commission through comprehensive biblical training and practical ministry skills.",
    image: "https://images.unsplash.com/photo-1646579886135-068c73800308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkZXJzaGlwJTIwdHJhaW5pbmclMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NjM2NzI4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "christian-literature",
    title: "Christian Literature",
    description: "Providing essential Christian literature and resources, including the evangelism cube, to equip believers for effective witness and spiritual growth.",
    image: "https://images.unsplash.com/photo-1709158990536-0cd97cd00345?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWJsZSUyMGJvb2tzJTIwcmVhZGluZ3xlbnwxfHx8fDE3NjM2NzI4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "mission-mobilization",
    title: "Mission Mobilization",
    description: "Mobilizing people for missions by connecting them with the right opportunities and raising support for resourcing missionaries across Africa and beyond.",
    image: "https://images.unsplash.com/photo-1741952094741-e7d3bb84e8fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXNzaW9uJTIwY29tbXVuaXR5JTIwc2VydmljZXxlbnwxfHx8fDE3NjM2NzI4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: "thingira-initiative",
    title: "Thingira Initiative",
    description: "Empowering the boychild and recovering the Biblical vision for manhood through a series of engagements across Kenyan counties, targeting young men.",
    image: "https://images.unsplash.com/photo-1732210038505-34a70d3b45a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMG1lbiUyMG1lZXRpbmd8ZW58MXx8fHwxNzYzNjcyODgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function PillarsSection() {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-[#F6EFE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#2E652A] mb-4 text-4xl">Our Pillars</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our four pillars represent the core of ACLM's mission to develop leaders and transform communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <Card key={pillar.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={pillar.image} 
                  alt={pillar.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-[#2E652A] mb-3">{pillar.title}</h3>
                <p className="text-gray-700 text-sm mb-4">
                  {pillar.description}
                </p>
                <button
                  onClick={() => navigate(`/pillars/${pillar.id}`)}
                  className="w-full bg-[#2E652A] hover:bg-[#234d21] text-white px-4 py-2 rounded-md transition-colors"
                >
                  Learn More
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
