import { useState, useEffect } from "react";
import { Card } from "../components/ui/Card";
import { CardContent } from "../components/ui/CardContent";
import { LoadingPage } from "../components/ui/LoadingPage";
import Donate from "../images/Donate.webp"
import Volunteer from "../images/Volunteer.jpg"
import { Heart, HandHeart, DollarSign, CreditCard, Smartphone, Users, Target, Lightbulb, Send, CheckCircle } from "lucide-react";

export function SupportUs() {
  const [isLoading, setIsLoading] = useState(true);
  const [volunteerForm, setVolunteerForm] = useState({
    name: "",
    email: "",
    contact: "",
    howToVolunteer: ""
  });

  const [donationAmount, setDonationAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [mpesaNumber, setMpesaNumber] = useState("");
  const [selectedMethod, setSelectedMethod] = useState("paypal");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1100);
    return () => clearTimeout(timer);
  }, []);

const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    console.log("Volunteer form submitted:", volunteerForm);
    alert("Thank you for your interest in volunteering with ACLM! We'll be in touch soon.");
    setVolunteerForm({ name: "", email: "", contact: "", howToVolunteer: "" });
  };

  const handleVolunteerChange = (e) => {
    setVolunteerForm({
      ...volunteerForm,
      [e.target.name]: e.target.value
    });
  };

  const handleDonation = async (method) => {
    setSelectedMethod(method);
    const amount = donationAmount === "custom" ? customAmount : donationAmount;
    
    if (!amount) {
      alert("Please select or enter a donation amount");
      return;
    }

    if (method === "mpesa") {
      if (!mpesaNumber) {
        alert("Please enter your M-Pesa number");
        return;
      }
      
      try {
        const orderId = `ACLM${Date.now().toString().slice(-6)}${Math.random().toString(36).substr(2, 4)}`;
        const response = await fetch('/api/pay-mpesa', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            phone: mpesaNumber,
            amount: amount,
            orderId: orderId
          })
        });
        
        const result = await response.json();
        
        if (result.success) {
          alert(`Donation initiated successfully! Please check your phone ${mpesaNumber} for the payment prompt. Order ID: ${orderId}`);
        } else {
          alert(`Payment failed: ${result.message}`);
        }
      } catch (error) {
        console.error('Payment error:', error);
        alert(`Error initiating payment: ${error.message}`);
      }
    } else {
      alert(`Redirecting to PayPal to process your donation of $${amount}...`);
      // In production, this would redirect to PayPal
      // window.location.href = `https://www.paypal.com/donate?amount=${amount}&...`;
    }
  };

  const predefinedAmounts = ["500", "1000", "2500", "5000", "10000"];

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[450px] md:h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1763050234301-b623bdf88749?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBzdXBwb3J0JTIwYWZyaWNhfGVufDF8fHx8MTc2MzcyNDk1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2E652A]/95 via-[#2E652A]/85 to-[#2E652A]/90" />
        
        <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#BEA336] mb-8 shadow-2xl">
            <Heart className="w-12 h-12 text-white fill-white" />
          </div>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl mb-6 font-black" style={{ fontFamily: "'Playfair Display', serif" }}>
            Partner With Us
          </h1>
          <p className="text-[#F6EFE2] max-w-3xl text-lg md:text-xl leading-relaxed mb-4">
            Join us in developing Christian leaders across Africa through your generous support
          </p>
          <p className="text-[#BEA336] text-2xl italic">
            "Developing leaders through Christian discipleship"
          </p>
        </div>
      </div>

      {/* Impact Statement */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#2E652A] mb-6 text-3xl">Your Support Makes A Difference</h2>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-lg">
              Every contribution and volunteer hour helps us equip and empower Christian leaders 
              who are transforming communities across Kenya, Uganda, Congo, and Mozambique. 
              Your partnership enables us to continue our mission of developing godly leaders.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-8 hover:shadow-xl transition-shadow border-t-4 border-[#BEA336]">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F6EFE2] mb-4">
                <Users className="w-8 h-8 text-[#2E652A]" />
              </div>
              <h3 className="text-[#2E652A] mb-2 text-xl">500+ Leaders</h3>
              <p className="text-gray-600">Trained and equipped for ministry across Africa</p>
            </Card>
            <Card className="text-center p-8 hover:shadow-xl transition-shadow border-t-4 border-[#BEA336]">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F6EFE2] mb-4">
                <Target className="w-8 h-8 text-[#2E652A]" />
              </div>
              <h3 className="text-[#2E652A] mb-2 text-xl">4 Countries</h3>
              <p className="text-gray-600">Active missions and leadership programs</p>
            </Card>
            <Card className="text-center p-8 hover:shadow-xl transition-shadow border-t-4 border-[#BEA336]">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F6EFE2] mb-4">
                <Lightbulb className="w-8 h-8 text-[#2E652A]" />
              </div>
              <h3 className="text-[#2E652A] mb-2 text-xl">4 Pillars</h3>
              <p className="text-gray-600">Comprehensive leadership development approach</p>
            </Card>
          </div>
        </div>
      </div>

      {/* Ways to Support Section */}
      <div className="bg-[#f5f5f4] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#2E652A] mb-4 text-4xl">Ways to Support ACLM</h2>
            <p className="text-gray-600 text-lg">Choose how you'd like to make an impact</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Volunteer Section */}
            <div>
              <Card className="h-full shadow-2xl border-t-4 border-[#2E652A] overflow-hidden">
                <div className="relative h-64 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${Volunteer})` 
                  }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="inline-flex items-center gap-2 bg-[#BEA336] text-white px-4 py-2 rounded-full mb-2">
                      <HandHeart className="w-5 h-5" />
                      <span>Volunteer</span>
                    </div>
                    <h3 className="text-white text-2xl">Share Your Time & Talents</h3>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Join our mission by volunteering your skills, time, and passion. Whether in 
                    leadership training, missions, administration, or other areas, your contribution 
                    matters.
                  </p>

                  <form onSubmit={handleVolunteerSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="v-name" className="block text-[#2E652A] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="v-name"
                        name="name"
                        required
                        value={volunteerForm.name}
                        onChange={handleVolunteerChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E652A] focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="v-email" className="block text-[#2E652A] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="v-email"
                        name="email"
                        required
                        value={volunteerForm.email}
                        onChange={handleVolunteerChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E652A] focus:border-transparent transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="v-contact" className="block text-[#2E652A] mb-2">
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        id="v-contact"
                        name="contact"
                        required
                        value={volunteerForm.contact}
                        onChange={handleVolunteerChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E652A] focus:border-transparent transition-all"
                        placeholder="+254 700 000 000"
                      />
                    </div>

                    <div>
                      <label htmlFor="v-how" className="block text-[#2E652A] mb-2">
                        How would you like to volunteer? *
                      </label>
                      <textarea
                        id="v-how"
                        name="howToVolunteer"
                        required
                        value={volunteerForm.howToVolunteer}
                        onChange={handleVolunteerChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E652A] focus:border-transparent transition-all resize-none"
                        placeholder="Tell us about your skills, interests, and how you'd like to contribute..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#2E652A] hover:bg-[#234d21] text-white py-3 text-base shadow-lg hover:shadow-xl transition-all group rounded-md flex items-center justify-center"
                    >
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                      Submit Volunteer Application
                    </button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Donation Section */}
            <div>
              <Card className="h-full shadow-2xl border-t-4 border-[#BEA336] overflow-hidden">
                <div className="relative h-64 bg-cover bg-center"
                  style={{ 
                    backgroundImage: `url(${Donate})` 
                  }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="inline-flex items-center gap-2 bg-[#2E652A] text-white px-4 py-2 rounded-full mb-2">
                      <DollarSign className="w-5 h-5" />
                      <span>Donate</span>
                    </div>
                    <h3 className="text-white text-2xl">Give Financially</h3>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Your financial gift enables us to train leaders, distribute Christian literature, 
                    and expand our mission across Africa. Every donation makes a lasting impact.
                  </p>

                  {/* Amount Selection */}
                  <div className="mb-6">
                    <label className="block text-[#2E652A] mb-3">
                      Select Donation Amount (KES) *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-3">
                      {predefinedAmounts.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => {
                            setDonationAmount(amount);
                            setCustomAmount("");
                          }}
                          className={`py-3 px-4 rounded-lg border-2 transition-all ${
                            donationAmount === amount
                              ? "border-[#BEA336] bg-[#BEA336] text-white"
                              : "border-gray-300 hover:border-[#BEA336] text-gray-700"
                          }`}
                        >
                          KES {amount}
                        </button>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => setDonationAmount("custom")}
                      className={`w-full py-3 px-4 rounded-lg border-2 transition-all ${
                        donationAmount === "custom"
                          ? "border-[#BEA336] bg-[#BEA336] text-white"
                          : "border-gray-300 hover:border-[#BEA336] text-gray-700"
                      }`}
                    >
                      Custom Amount
                    </button>

                    {donationAmount === "custom" && (
                      <input
                        type="number"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        className="w-full mt-3 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BEA336] focus:border-transparent transition-all"
                        placeholder="Enter custom amount (KES)"
                        min="1"
                      />
                    )}
                  </div>

                  {/* Payment Methods */}
                  <div className="mb-6">
                    <label className="block text-[#2E652A] mb-3">
                      Select Payment Method *
                    </label>
                    
                    {/* M-Pesa Option */}
                    <div className="mb-4">
                      <button
                        type="button"
                        onClick={() => setSelectedMethod("mpesa")}
                        className={`w-full flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                          selectedMethod === "mpesa"
                            ? "border-[#2E652A] bg-[#F6EFE2]"
                            : "border-gray-300 hover:border-[#2E652A]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center">
                            <Smartphone className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-left">
                            <div className="text-[#2E652A]">M-Pesa</div>
                            <div className="text-sm text-gray-600">Pay via M-Pesa</div>
                          </div>
                        </div>
                        {selectedMethod === "mpesa" && (
                          <CheckCircle className="w-6 h-6 text-[#2E652A]" />
                        )}
                      </button>

                      {selectedMethod === "mpesa" && (
                        <input
                          type="tel"
                          value={mpesaNumber}
                          onChange={(e) => setMpesaNumber(e.target.value)}
                          className="w-full mt-3 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E652A] focus:border-transparent transition-all"
                          placeholder="Enter M-Pesa number (e.g., 0722000000)"
                        />
                      )}
                    </div>

                    {/* PayPal Option */}
                    <button
                      type="button"
                      onClick={() => setSelectedMethod("paypal")}
                      className={`w-full flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                        selectedMethod === "paypal"
                          ? "border-[#2E652A] bg-[#F6EFE2]"
                          : "border-gray-300 hover:border-[#2E652A]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-[#0070BA] flex items-center justify-center">
                          <CreditCard className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-left">
                          <div className="text-[#2E652A]">PayPal</div>
                          <div className="text-sm text-gray-600">Pay via PayPal</div>
                        </div>
                      </div>
                      {selectedMethod === "paypal" && (
                        <CheckCircle className="w-6 h-6 text-[#2E652A]" />
                      )}
                    </button>
                  </div>

                  {/* Donate Button */}
                  {selectedMethod && (
                    <button
                      onClick={() => handleDonation(selectedMethod)}
                      className="w-full bg-[#BEA336] hover:bg-[#a08d2d] text-white py-3 text-base shadow-lg hover:shadow-xl transition-all group rounded-md flex items-center justify-center"
                    >
                      <Heart className="w-5 h-5 mr-2 fill-white" />
                      Donate {selectedMethod === "mpesa" ? "via M-Pesa" : "via PayPal"}
                    </button>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Why Give Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#2E652A] mb-6 text-3xl">Why Your Support Matters</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#F6EFE2] mb-4">
                <Users className="w-10 h-10 text-[#2E652A]" />
              </div>
              <h3 className="text-[#2E652A] mb-3">Leadership Training</h3>
              <p className="text-gray-600 text-sm">
                Equipping emerging leaders with biblical knowledge and practical ministry skills
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#F6EFE2] mb-4">
                <Target className="w-10 h-10 text-[#2E652A]" />
              </div>
              <h3 className="text-[#2E652A] mb-3">Mission Mobilization</h3>
              <p className="text-gray-600 text-sm">
                Sending and supporting missionaries to unreached areas across Africa
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#F6EFE2] mb-4">
                <Lightbulb className="w-10 h-10 text-[#2E652A]" />
              </div>
              <h3 className="text-[#2E652A] mb-3">Christian Literature</h3>
              <p className="text-gray-600 text-sm">
                Providing essential Christian resources and educational materials
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#F6EFE2] mb-4">
                <HandHeart className="w-10 h-10 text-[#2E652A]" />
              </div>
              <h3 className="text-[#2E652A] mb-3">Community Impact</h3>
              <p className="text-gray-600 text-sm">
                Transforming communities through discipleship and holistic development
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-[#2E652A] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#BEA336] mb-4">
              <Heart className="w-8 h-8 text-white fill-white" />
            </div>
          </div>
          <blockquote className="text-[#F6EFE2] text-xl md:text-2xl mb-6 italic leading-relaxed">
            "Give, and it will be given to you. A good measure, pressed down, shaken together 
            and running over, will be poured into your lap. For with the measure you use, 
            it will be measured to you."
          </blockquote>
          <p className="text-[#BEA336] text-lg">Luke 6:38</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-[#F6EFE2] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-[#2E652A] mb-4 text-2xl">Questions About Giving?</h3>
          <p className="text-gray-700 mb-6">
            We're here to help! Contact us for more information about how you can support our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:giving@aclmkenya.org"
              className="inline-flex items-center justify-center gap-2 bg-[#2E652A] hover:bg-[#234d21] text-white px-6 py-3 rounded-lg transition-colors"
            >
              <Send className="w-5 h-5" />
              giving@aclmkenya.org
            </a>
            <a
              href="tel:+254722778872"
              className="inline-flex items-center justify-center gap-2 bg-[#BEA336] hover:bg-[#a08d2d] text-white px-6 py-3 rounded-lg transition-colors"
            >
              <Smartphone className="w-5 h-5" />
              +254 722 778 872
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}