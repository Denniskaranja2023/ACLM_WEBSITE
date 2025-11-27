import { useState, useEffect, useRef } from "react";
import { Card } from "../components/ui/Card";
import { Mail, X, ChevronLeft, ChevronRight, Users } from "lucide-react";
import Mwiti from "../images/Mwiti.png"
import Waigwa from "../images/Waigwa_treasurer.png"
import Chris from "../images/Chris_vicetreasurer.png"
import Suji from "../images/Suji_Chair.png"

const teamMembers = [
  {
    id: 1,
    name: "Pastor Samuel Mwiti",
    position: "Secretary-General",
    image: Mwiti,
    bio: "Pastor Mwiti is married to Miriam Mwiti. Born on 25 May 1961, he trained as a Technical Teacher between 1984 and 1988 and went on to teach in several institutions, including Kitui schools, Isiolo Girls' High School, and Isiolo Boys' High School.He brings extensive experience in mercy ministry, having served with Compassion International from 1994 to 1996. In addition, he has served as a missionary in Isiolo and as the Pastor of Faith Baptist Church, Isiolo, from 1997 to 1999.Pastor Mwiti has been serving with Trinity Fellowship since 1999, where he continues to disciple nations for God's glory. Within ACLM, he oversees the day-to-day running of all ministry activities, providing leadership, coordination, and spiritual guidance."
  },
  {
    id: 2,
    name: "Mr.Omeno Suji",
    position: "Chairman",
    image: Suji,
    bio: "Mr. Suji is a seasoned social development expert, entrepreneur, and researcher with over two decades of experience working across the Horn of Africa, East Africa, and Central Africa. He met the Lord in high school and has since served in various capacities within multiple Christian organizations, bringing a rich blend of ministry experience and professional insight.He is the founder and director of Beryl Consult Limited, an MSME consulting firm based in Nairobi, Kenya, where he has led numerous development, research, and enterprise-support initiatives for the past 20 years. Trained initially as a science teacher, Suji began his career in the education sector—first as a teacher and later as an education officer—before transitioning into the international development field.Mr. Suji holds a Master of Arts in Development Communication and a double-major undergraduate degree in Education and Business Administration from Messiah College and Daystar University. He currently resides in the Lukenya area of Machakos County, where he also serves as a bi-vocational pastor at Lukenya Community Church.As the Chairman of ACLM, Mr. Suji provides strategic leadership, governance oversight, and institutional direction. He guides the board in setting vision and policy, strengthens partnerships and networks, supports donor and stakeholder engagement, and ensures that ACLM remains mission-focused and accountable in all its operations.He is married to Helen (née Shonko), and together they are blessed with three grown children—two daughters and one son."
  },
  {
    id: 4,
    name: "Mr Ndiritu Waigwa",
    position: "Treasurer & Resource Mobilizer",
    image: Waigwa,
    bio: "Mr. Ndiritu Waigwa is married to Anne Njambi and is a father of three: Waigwa, Mutugi, and Neema Wakio. He holds a Degree in Economics and Sociology from the University of Nairobi.With a solid background as an insurance professional and businessman, Mr. Ndiritu brings prudent financial judgment, strategic oversight, and sound governance to the ACLM Board. In his role, he is responsible for managing ACLM finances and leading the resource mobilization efforts of the organization, including donor engagement.He also offers extensive experience in church administration, having been ordained and served faithfully as a deacon at Parklands Baptist Church. His blend of professional expertise, ministry experience, and stewardship makes him a valuable asset to ACLM."
  },
  {
    id: 5,
    name: "DR Chris Wanyoike",
    position: "Assistant Treasurer",
    image: Chris, 
    bio: "Dr. Chris Wanyoike is a born-again Christian, a pharmacist, and a public health consultant who brings strong organizational, analytical, and systems-management skills to ACLM. With extensive experience in public health and project management, he has coordinated cross-functional teams and multi-stakeholder partnerships—including government agencies, NGOs, and faith-based networks—to align program goals with strategic priorities.He has successfully managed complete project lifecycles, overseeing budgeting, procurement, monitoring, and evaluation, while ensuring transparent reporting and full donor compliance. Dr. Wanyoike has also implemented digital platforms such as ERP systems and mobile M&E tools to strengthen operational efficiency, enhance data transparency, and support timely decision-making. His commitment to equity is demonstrated through initiatives that integrate community-centered approaches into health and nutrition programs.Within ACLM, Dr. Wanyoike serves as the Assistant Treasurer, supporting the management of financial operations, promoting accountability, strengthening organizational systems, and contributing to strategic planning and program oversight."
  }
];

export function OurTeam() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleCardClick = (member) => {
    setSelectedMember(member);
    setIsLightboxOpen(true);
  };

  const handleClose = () => {
    setIsLightboxOpen(false);
    setTimeout(() => setSelectedMember(null), 300);
  };

  const handleNext = () => {
    if (selectedMember) {
      const currentIndex = teamMembers.findIndex(m => m.id === selectedMember.id);
      const nextIndex = (currentIndex + 1) % teamMembers.length;
      setSelectedMember(teamMembers[nextIndex]);
    }
  };

  const handlePrevious = () => {
    if (selectedMember) {
      const currentIndex = teamMembers.findIndex(m => m.id === selectedMember.id);
      const previousIndex = (currentIndex - 1 + teamMembers.length) % teamMembers.length;
      setSelectedMember(teamMembers[previousIndex]);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isLightboxOpen) {
        handleClose();
      }
    };

    if (isLightboxOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isLightboxOpen]);

  return (
    <div>
      {/* Header Section */}
      <div className="relative bg-gradient-to-br from-[#2E652A] via-[#2E652A] to-[#234d21] py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#BEA336] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#BEA336] rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center mb-4">
            <span className="bg-[#BEA336] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
              <Users className="w-8 h-8" />
            </span>
          </div>
          <h1 className="text-white mb-6 text-3xl md:text-5xl">Meet Our Team</h1>
          <p className="text-[#F6EFE2] max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            God has assembled a team of passionate, qualified leaders who are committed to 
            developing Christian leaders across Africa. Click on any member to learn more about their experience.
          </p>
        </div>
      </div>

      {/* Team Members Grid */}
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.id} 
              className={`overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-800 cursor-pointer group border border-gray-200 transform ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}
              style={{transitionDelay: `${index * 200}ms`}}
              onClick={() => handleCardClick(member)}
            >
              <div className="relative h-96 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-[#2E652A] text-lg md:text-xl mb-2 font-bold uppercase">{member.name}</h3>
                <p className="text-[#6B7280] text-base font-semibold">
                  {member.position}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 md:mt-20 bg-gradient-to-r from-[#F6EFE2] to-[#f5f5f4] rounded-2xl p-6 md:p-12 text-center">
          <h2 className="text-[#2E652A] mb-3 text-2xl md:text-3xl">Our Leadership Commitment</h2>
          <div className="w-24 h-1 bg-[#BEA336] mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed text-base md:text-lg">
            As a Board of Directors, we are committed to stewarding ACLM's mission with integrity, 
            wisdom, and unwavering dedication to Christ. We believe in servant leadership, 
            accountability, and the power of working together to fulfill God's calling on our lives.
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && selectedMember && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"></div>
          
          <div 
            className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all shadow-lg hover:scale-110"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>

            {teamMembers.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevious();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all shadow-lg hover:scale-110"
                  aria-label="Previous member"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all shadow-lg hover:scale-110"
                  aria-label="Next member"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>
              </>
            )}

            <div className="grid md:grid-cols-2">
              <div className="relative h-[500px] md:h-[600px]">
                <img 
                  src={selectedMember.image} 
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              <div className="p-6 md:p-8 pr-16 md:pr-20">
                <div className="mb-4">
                  <span className="inline-block bg-[#BEA336] text-white px-3 py-1 rounded-full text-sm mb-3">
                    {selectedMember.position}
                  </span>
                  <h2 className="text-[#2E652A] mb-2 text-xl md:text-2xl">{selectedMember.name}</h2>
                </div>

                <div>
                  <h3 className="text-[#2E652A] mb-3 font-semibold">About</h3>
                  <p className="text-gray-700 leading-relaxed text-sm text-justify">
                    {selectedMember.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Join Us CTA */}
      <div className="bg-[#2E652A] py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4 text-2xl md:text-3xl">Partner With Our Mission</h2>
          <p className="text-[#F6EFE2] mb-8 text-base md:text-lg">
            Support our leadership team as we develop Christian leaders across Africa. 
            Your partnership makes our work possible.
          </p>
          <a 
            href="/support-us"
            className="inline-block bg-[#BEA336] hover:bg-[#a08d2d] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg transition-colors text-base md:text-lg"
          >
            Support Our Work
          </a>
        </div>
      </div>
    </div>
  );
}