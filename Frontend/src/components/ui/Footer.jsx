import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, ChevronDown } from "lucide-react";
import aclmLogo from "../../images/ACLM_LOGO.png";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);
  
  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://aclm-website.onrender.com/api/newsletter-subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      });
      
      const result = await response.json();
      
      if (result.success) {
        alert("Thank you for subscribing to our newsletter!");
        setEmail("");
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      alert('Error subscribing to newsletter. Please try again.');
    }
  };
  
  const pageLinks = [
    { path: "/", label: "Home" },
    { path: "/our-stories", label: "Our stories" },
    { path: "/mission-reports", label: "Mission reports" },
    { path: "/our-team", label: "Our Team" },
    { path: "/contact", label: "Contact" },
    { path: "/support-us", label: "Support us" },
  ];

  const projectCountries = [
    { path: "/projects/kenya", label: "Kenya" },
    { path: "/projects/uganda", label: "Uganda" },
    { path: "/projects/mozambique", label: "Mozambique" },
    { path: "/projects/congo", label: "Congo" },
  ];
  
  return (
    <footer className="bg-[#2E652A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <img src={aclmLogo} alt="ACLM Logo" className="h-20 w-auto mb-4 bg-white p-2 rounded" />
            <h3 className="text-[#BEA336] mb-2">ACLM</h3>
            <p className="text-sm">
              Africa Center for Leadership and Missions - Empowering African leaders through 
              Christ-centered training and discipleship to transform communities across the continent.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-[#BEA336] mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {pageLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm hover:text-[#BEA336] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Projects Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowProjectsDropdown(!showProjectsDropdown)}
                  onMouseEnter={() => setShowProjectsDropdown(true)}
                  onMouseLeave={() => setShowProjectsDropdown(false)}
                  className="text-sm hover:text-[#BEA336] transition-colors flex items-center gap-1 w-full text-left"
                >
                  Projects
                  <ChevronDown className={`h-3 w-3 transition-transform ${showProjectsDropdown ? 'rotate-180' : ''}`} />
                </button>
                
                {showProjectsDropdown && (
                  <div 
                    className="absolute bottom-full left-0 mb-2 bg-white text-gray-900 rounded-lg shadow-lg py-2 min-w-[150px] z-50"
                    onMouseEnter={() => setShowProjectsDropdown(true)}
                    onMouseLeave={() => setShowProjectsDropdown(false)}
                  >
                    {projectCountries.map((country) => (
                      <Link
                        key={country.path}
                        to={country.path}
                        className="block px-4 py-2 text-sm hover:bg-[#F6EFE2] hover:text-[#2E652A] transition-colors"
                        onClick={() => setShowProjectsDropdown(false)}
                      >
                        {country.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="md:col-span-1">
            <h4 className="text-[#BEA336] mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://web.facebook.com/aclminternational"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#BEA336] transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/aclm_kenya/?igsh=em01ajJua2R1bnFv#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#BEA336] transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://x.com/ACLM_Kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#BEA336] transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Newsletter */}
          <div className="md:col-span-1">
            <h4 className="text-[#BEA336] mb-4">Newsletter</h4>
            <p className="text-sm mb-4">Stay updated with our latest news and stories.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white text-gray-900 px-4 py-2 rounded-md"
              />
              <button 
                type="submit" 
                className="bg-[#BEA336] hover:bg-[#a08d2d] text-white px-4 py-2 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Tagline */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-[#BEA336]">Developing leaders through Christian discipleship</p>
          <p className="text-sm mt-2">© {new Date().getFullYear()} ACLM. All rights reserved.</p>
          <p className="text-xs mt-1 text-white/70">Proudly created by KarDen Technologies</p>
        </div>
      </div>
    </footer>
  );
}