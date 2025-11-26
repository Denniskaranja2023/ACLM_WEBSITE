import { Link, useLocation } from "react-router-dom";
import { useState, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import aclmLogo from "../../images/ACLM_LOGO.png";

export function Navbar() {
  const location = useLocation();
  const [showStoryDropdown, setShowStoryDropdown] = useState(false);
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileStoryOpen, setMobileStoryOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

  // Timers for hover-out delays so dropdowns don't disappear immediately
  const projectsTimerRef = useRef(null);
  const storyTimerRef = useRef(null);

  const openProjects = () => {
    if (projectsTimerRef.current) {
      clearTimeout(projectsTimerRef.current);
      projectsTimerRef.current = null;
    }
    setShowProjectsDropdown(true);
  };

  const closeProjects = () => {
    if (projectsTimerRef.current) clearTimeout(projectsTimerRef.current);
    projectsTimerRef.current = setTimeout(() => {
      setShowProjectsDropdown(false);
      projectsTimerRef.current = null;
    }, 300);
  };

  const openStory = () => {
    if (storyTimerRef.current) {
      clearTimeout(storyTimerRef.current);
      storyTimerRef.current = null;
    }
    setShowStoryDropdown(true);
  };

  const closeStory = () => {
    if (storyTimerRef.current) clearTimeout(storyTimerRef.current);
    storyTimerRef.current = setTimeout(() => {
      setShowStoryDropdown(false);
      storyTimerRef.current = null;
    }, 300);
  };
  
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/mission-reports", label: "Mission reports" },
    { path: "/our-team", label: "Our Team" },
    { path: "/contact", label: "Contact" },
    { path: "/support-us", label: "Support us" },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileStoryOpen(false);
    setMobileProjectsOpen(false);
  };
  
  return (
    <nav className="bg-white border-b border-[#f5f5f4] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
            <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden">
              <img src={aclmLogo} alt="ACLM Logo" className="w-14 h-14 object-contain" />
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  location.pathname === link.path
                    ? "text-[#2E652A]"
                    : "text-gray-700 hover:text-[#2E652A]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Projects dropdown */}
            <div 
              className="relative"
              onMouseEnter={openProjects}
              onMouseLeave={closeProjects}
            >
              <button
                className={`flex items-center gap-1 transition-colors ${
                  location.pathname.includes("/projects") 
                    ? "text-[#2E652A]"
                    : "text-gray-700 hover:text-[#2E652A]"
                }`}
              >
                Projects
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {showProjectsDropdown && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                  <Link
                    to="/projects/kenya"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#F6EFE2] hover:text-[#2E652A] transition-colors"
                  >
                    Kenya
                  </Link>
                  <Link
                    to="/projects/uganda"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#F6EFE2] hover:text-[#2E652A] transition-colors"
                  >
                    Uganda
                  </Link>
                  <Link
                    to="/projects/congo"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#F6EFE2] hover:text-[#2E652A] transition-colors"
                  >
                    Congo
                  </Link>
                  <Link
                    to="/projects/mozambique"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#F6EFE2] hover:text-[#2E652A] transition-colors"
                  >
                    Mozambique
                  </Link>
                </div>
              )}
            </div>
            
            {/* Our story dropdown */}
            <div 
              className="relative"
              onMouseEnter={openStory}
              onMouseLeave={closeStory}
            >
              <button
                className={`flex items-center gap-1 transition-colors ${
                  location.pathname.includes("/our-") 
                    ? "text-[#2E652A]"
                    : "text-gray-700 hover:text-[#2E652A]"
                }`}
              >
                Our story
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {showStoryDropdown && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                  <Link
                    to="/our-roots"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#F6EFE2] hover:text-[#2E652A] transition-colors"
                  >
                    Our roots
                  </Link>
                  <Link
                    to="/our-stories"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#F6EFE2] hover:text-[#2E652A] transition-colors"
                  >
                    Our stories
                  </Link>
                </div>
              )}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-[#2E652A] p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#f5f5f4] shadow-lg">
          <div className="px-4 py-3 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMobileMenu}
                className={`block py-2 px-3 rounded-lg transition-colors ${
                  location.pathname === link.path
                    ? "bg-[#F6EFE2] text-[#2E652A]"
                    : "text-gray-700 hover:bg-[#F6EFE2] hover:text-[#2E652A]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Projects Dropdown */}
            <div>
              <button
                onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                className={`w-full flex items-center justify-between py-2 px-3 rounded-lg transition-colors ${
                  location.pathname.includes("/projects")
                    ? "bg-[#F6EFE2] text-[#2E652A]"
                    : "text-gray-700 hover:bg-[#F6EFE2] hover:text-[#2E652A]"
                }`}
              >
                <span>Projects</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileProjectsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {mobileProjectsOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link
                    to="/projects/kenya"
                    onClick={closeMobileMenu}
                    className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-[#F6EFE2] hover:text-[#2E652A] transition-colors"
                  >
                    Kenya
                  </Link>
                  <Link
                    to="/projects/uganda"
                    onClick={closeMobileMenu}
                    className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-[#F6EFE2] hover:text-[#2E652A] transition-colors"
                  >
                    Uganda
                  </Link>
                  <Link
                    to="/projects/congo"
                    onClick={closeMobileMenu}
                    className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-[#F6EFE2] hover:text-[#2E652A] transition-colors"
                  >
                    Congo
                  </Link>
                  <Link
                    to="/projects/mozambique"
                    onClick={closeMobileMenu}
                    className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-[#F6EFE2] hover:text-[#2E652A] transition-colors"
                  >
                    Mozambique
                  </Link>
                </div>
              )}
            </div>
            
            {/* Mobile Our Story Dropdown */}
            <div>
              <button
                onClick={() => setMobileStoryOpen(!mobileStoryOpen)}
                className={`w-full flex items-center justify-between py-2 px-3 rounded-lg transition-colors ${
                  location.pathname.includes("/our-")
                    ? "bg-[#F6EFE2] text-[#2E652A]"
                    : "text-gray-700 hover:bg-[#F6EFE2] hover:text-[#2E652A]"
                }`}
              >
                <span>Our story</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileStoryOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {mobileStoryOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link
                    to="/our-roots"
                    onClick={closeMobileMenu}
                    className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-[#F6EFE2] hover:text-[#2E652A] transition-colors"
                  >
                    Our roots
                  </Link>
                  <Link
                    to="/our-stories"
                    onClick={closeMobileMenu}
                    className="block py-2 px-3 rounded-lg text-gray-700 hover:bg-[#F6EFE2] hover:text-[#2E652A] transition-colors"
                  >
                    Our stories
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}