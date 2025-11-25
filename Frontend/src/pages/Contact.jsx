import { useState } from "react";
import { Card } from "../components/ui/Card";
import { CardContent } from "../components/ui/CardContent";
import { MapPin, Phone, Mail, Clock, Send, Building2, Navigation, Mailbox } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const openGoogleMaps = () => {
    // Trinity Fellowship, Garden Estate coordinates (approximate)
    const address = "Trinity Fellowship, Garden Estate, Nairobi";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <div>
      {/* Hero Section with Background Image */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1703669020883-66f3e77ae929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwb2ZmaWNlJTIwcGhvbmV8ZW58MXx8fHwxNzYzNzIzMjU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2E652A]/90 to-[#2E652A]/70" />
        
        <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#BEA336] mb-6 shadow-xl">
            <Mail className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl mb-4 font-black" style={{ fontFamily: "'Playfair Display', serif" }}>
            Contact Us
          </h1>
          <p className="text-[#F6EFE2] max-w-2xl text-lg md:text-xl">
            We'd love to hear from you. Get in touch with ACLM today.
          </p>
        </div>
      </div>

      {/* Physical Address Section */}
      <div className="bg-[#f5f5f4] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#2E652A] mb-4 text-3xl">Visit Our Office</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Come and visit us at our physical location. We're always happy to welcome visitors and partners.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto overflow-hidden shadow-2xl border-t-4 border-[#BEA336]">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Address Info */}
                <div className="bg-gradient-to-br from-[#2E652A] to-[#234d21] p-8 md:p-10 text-white">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-[#BEA336] flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Building2 className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">Physical Address</h3>
                      <p className="text-[#F6EFE2] text-sm mb-1">Trinity Fellowship</p>
                      <p className="text-[#F6EFE2] text-sm mb-1">Next to Faith Ventures School</p>
                      <p className="text-[#F6EFE2] text-sm">Garden Estate, Nairobi</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-[#BEA336] flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Mailbox className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">Postal Address</h3>
                      <p className="text-[#F6EFE2] text-sm">P O Box 4964 – 00200</p>
                      <p className="text-[#F6EFE2] text-sm">City Square, Nairobi</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[#BEA336] mt-1 flex-shrink-0" />
                      <div className="text-[#F6EFE2]">
                        <p className="mb-1">+254 722 778 872</p>
                        <p className="mb-1">+254 727 355 791</p>
                        <p>+254 722 458 513</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-[#BEA336] mt-1 flex-shrink-0" />
                      <div className="text-[#F6EFE2]">
                        <p className="mb-1">samuelmwiti@aclmkenya.org</p>
                        <p>director@aclmkenya.org</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#BEA336] mt-1 flex-shrink-0" />
                      <div className="text-[#F6EFE2]">
                        <p className="mb-1">Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p>Saturday: 10:00 AM - 2:00 PM</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={openGoogleMaps}
                    className="w-full bg-[#BEA336] hover:bg-[#a08d2d] text-white py-3 text-base shadow-lg hover:shadow-xl transition-all group rounded-md flex items-center justify-center"
                  >
                    <Navigation className="w-5 h-5 mr-2 group-hover:rotate-45 transition-transform" />
                    Get Directions on Google Maps
                  </button>
                </div>

                {/* Map Visualization */}
                <div 
                  className="relative h-96 md:h-auto bg-cover bg-center cursor-pointer group"
                  onClick={openGoogleMaps}
                  style={{ 
                    backgroundImage: `url(https://images.unsplash.com/photo-1524661135-423995f22d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXAlMjBsb2NhdGlvbiUyMHBpbnxlbnwxfHx8fDE3NjM3MjMyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)` 
                  }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                  
                  {/* Pin Icon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full">
                    <div className="relative">
                      <MapPin className="w-16 h-16 text-[#BEA336] drop-shadow-2xl animate-bounce" fill="#BEA336" />
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-black/30 rounded-full blur-sm"></div>
                    </div>
                  </div>

                  {/* Overlay Text */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#2E652A]/80">
                    <div className="text-center text-white">
                      <Navigation className="w-12 h-12 mx-auto mb-3" />
                      <p className="text-lg">Click to open in Google Maps</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#2E652A] mb-6 text-3xl">Send Us a Message</h2>
            <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
              Have a question, want to partner with us, or need more information about our programs? 
              Fill out the form and we'll get back to you as soon as possible.
            </p>
          </div>

          <Card className="shadow-xl border-t-4 border-[#2E652A]">
            <CardContent className="p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#2E652A] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E652A] focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#2E652A] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E652A] focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[#2E652A] mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E652A] focus:border-transparent transition-all"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#2E652A] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E652A] focus:border-transparent transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#BEA336] hover:bg-[#a08d2d] text-white py-3 text-base shadow-lg hover:shadow-xl transition-all group rounded-md flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}