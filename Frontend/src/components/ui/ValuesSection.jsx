import { Shield, BookOpen, Users } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We uphold honesty and strong moral principles in all our work."
  },
  {
    icon: BookOpen,
    title: "Bible-centered",
    description: "Scripture is our foundation and guide in everything we do."
  },
  {
    icon: Users,
    title: "People-driven",
    description: "We prioritize people and their development above all else."
  }
];

export function ValuesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#2E652A] mb-4 text-4xl">Our Core Values</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Our core values define our character and guide our mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#2E652A] mb-4">
                  <Icon className="w-8 h-8 text-[#BEA336]" />
                </div>
                <h3 className="text-[#2E652A] mb-2">{value.title}</h3>
                <p className="text-gray-700 text-sm">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}