import { useState, useEffect } from "react";
import { Card } from "../components/ui/Card";
import { Mail, X, ChevronLeft, ChevronRight, Users } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Pastor Sarah Mwangi",
    position: "Secretary-General",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYzNzIzMjU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Pastor Sarah oversees the day-to-day operations of ACLM with excellence and grace. With a background in church administration and development studies, she ensures that ACLM's programs run efficiently and effectively. Her organizational skills and heart for ministry make her invaluable to the team.",
    email: "secretary@aclm.org",
    specialization: "Operations & Program Management",
    experience: [
      "15+ years in church administration and leadership",
      "Masters in Development Studies from University of Nairobi",
      "Former Director of Operations at Nairobi Chapel",
      "Certified Project Management Professional (PMP)",
      "Pioneer of women's leadership programs across Kenya"
    ]
  },
  {
    id: 2,
    name: "Rev. Dr. John Kamau",
    position: "Chairman",
    image: "https://images.unsplash.com/photo-1442118325940-300e8fe327d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBsZWFkZXJ8ZW58MXx8fHwxNzYzNzIzMjU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Dr. Kamau brings over 25 years of ministry experience spanning pastoral work, theological education, and missions leadership. He holds a Doctorate in Missiology and has served in various leadership capacities across East Africa. His passion for developing godly leaders has been instrumental in shaping ACLM's strategic vision.",
    email: "chairman@aclm.org",
    specialization: "Strategic Leadership & Missions",
    experience: [
      "25+ years in pastoral ministry and missions",
      "PhD in Missiology from Trinity Evangelical Divinity School",
      "Senior Pastor at Parklands Baptist Church (2005-2018)",
      "Established 20+ churches across East Africa",
      "Author of 'Leadership in African Context' and 'Discipleship Matters'",
      "Speaker at international missions conferences"
    ]
  },
  {
    id: 3,
    name: "Pastor Samuel Wanjiru",
    position: "Vice-Chairman",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM3MjMyNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Pastor Samuel serves as Vice-Chairman, bringing wisdom and pastoral insight to the leadership team. With over 20 years of church ministry experience and a heart for discipleship, he champions ACLM's mission to develop Christ-centered leaders. His mentorship has impacted countless young leaders across Kenya.",
    email: "vice.chairman@aclm.org",
    specialization: "Leadership Development & Mentorship",
    experience: [
      "20+ years in pastoral ministry and discipleship",
      "Masters in Theological Studies from Nairobi Evangelical Graduate School",
      "Lead Pastor at Trinity Fellowship Church",
      "Mentor to 100+ young ministers across Kenya",
      "Coordinator of ACLM's Leadership Training Programs",
      "Expert in biblical counseling and spiritual formation"
    ]
  },
  {
    id: 4,
    name: "David Omondi",
    position: "Treasurer & Resource Mobilizer",
    image: "https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NjM2Mjc2OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "David is a certified accountant with extensive experience in non-profit financial management and fundraising. His expertise in financial stewardship and donor relations has been crucial in ensuring ACLM's financial sustainability. He combines professional excellence with a deep commitment to kingdom work.",
    email: "treasurer@aclm.org",
    specialization: "Finance & Resource Development",
    experience: [
      "Certified Public Accountant (CPA-K)",
      "MBA in Finance from Strathmore University",
      "12+ years in non-profit financial management",
      "Former Finance Director at World Vision Kenya",
      "Expertise in donor management and grant writing",
      "Successfully raised over $2M for missions work",
      "Member of Institute of Certified Public Accountants of Kenya"
    ]
  },
  {
    id: 5,
    name: "Grace Adhiambo",
    position: "Assistant Treasurer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjB3b21hbnxlbnwxfHx8fDE3NjM3MjMyNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    bio: "Grace supports the treasury department with meticulous attention to detail and unwavering integrity. She holds a degree in Finance and brings valuable experience in bookkeeping and financial reporting. Her dedication to accurate record-keeping ensures transparency and accountability in all financial matters.",
    email: "finance@aclm.org",
    specialization: "Financial Administration",
    experience: [
      "Bachelor's Degree in Finance and Accounting",
      "8+ years in bookkeeping and financial reporting",
      "Certified QuickBooks Professional",
      "Expert in financial compliance and auditing",
      "Former accountant at Samaritan's Purse Kenya",
      "Skilled in budget preparation and financial analysis",
      "Committed to financial transparency and integrity"
    ]
  }
];

export function OurTeam() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleCardClick = (member) => {
    setSelectedMember(member);
    setIsLightboxOpen(true);
  };

  const handleClose = () => {
    setIsLightboxOpen(false);
    // Delay clearing selectedMember to allow fade-out animation
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

  // Handle ESC key to close lightbox
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isLightboxOpen) {
        handleClose();
      }
    };

    if (isLightboxOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent body scroll
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
        {/* Decorative Elements */}
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member) => (
            <Card 
              key={member.id} 
              className="overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
              onClick={() => handleCardClick(member)}
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <h3 className="text-white text-lg md:text-xl mb-2">{member.name}</h3>
                  <span className="inline-block bg-[#BEA336] text-white px-3 py-1 rounded-full text-xs">
                    {member.position}
                  </span>
                </div>
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
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"></div>
          
          {/* Lightbox Content */}
          <div 
            className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all shadow-lg hover:scale-110"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>

            {/* Navigation Buttons */}
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

            <div className="grid md:grid-cols-5 max-h-[90vh] overflow-hidden">
              {/* Image Section */}
              <div className="md:col-span-2 relative h-96 md:h-[90vh]">
                <img 
                  src={selectedMember.image} 
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="md:col-span-3 p-8 md:p-10 max-h-[90vh] overflow-y-auto">
                <div className="mb-6">
                  <span className="inline-block bg-[#BEA336] text-white px-4 py-1 rounded-full text-sm mb-4">
                    {selectedMember.position}
                  </span>
                  <h2 className="text-[#2E652A] mb-2 text-2xl md:text-3xl">{selectedMember.name}</h2>
                  <p className="text-[#BEA336] uppercase tracking-wide text-sm">
                    {selectedMember.specialization}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-[#2E652A] mb-3 font-semibold">About</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedMember.bio}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-[#2E652A] mb-3 font-semibold">Experience & Qualifications</h3>
                  <ul className="space-y-2">
                    {selectedMember.experience.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <span className="text-[#BEA336] mt-1.5 flex-shrink-0">•</span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <a 
                    href={`mailto:${selectedMember.email}`}
                    className="inline-flex items-center gap-2 bg-[#2E652A] hover:bg-[#234d21] text-white px-6 py-3 rounded-lg transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Contact {selectedMember.name.split(' ')[0]}</span>
                  </a>
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