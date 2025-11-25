import { useState } from "react";
import { Download, FileText, Calendar } from "lucide-react";

// Import PDF files
import aruReport from "../documents/Aru_05-2010.pdf";
import bukavuReport from "../documents/bukavu_2010 (1).pdf";
import congoReport from "../documents/Congo-DRC-2008_11.pdf";
import kisanganiReport from "../documents/kisangani_08-2009.pdf";

const missionReports = [
  {
    id: 1,
    title: "Aru Mission Report",
    location: "Aru, Democratic Republic of Congo",
    date: "May 2010",
    pdf: aruReport,
    description: "Comprehensive report on our mission work in Aru, DRC, covering leadership training, community outreach, and ministry impact."
  },
  {
    id: 2,
    title: "Bukavu Mission Report",
    location: "Bukavu, Democratic Republic of Congo",
    date: "2010",
    pdf: bukavuReport,
    description: "Detailed account of our mission activities in Bukavu, including church partnerships, discipleship programs, and community transformation."
  },
  {
    id: 3,
    title: "Congo-DRC Mission Report",
    location: "Democratic Republic of Congo",
    date: "November 2008",
    pdf: congoReport,
    description: "Mission report documenting our work across the Democratic Republic of Congo, highlighting training programs and ministry outcomes."
  },
  {
    id: 4,
    title: "Kisangani Mission Report",
    location: "Kisangani, Democratic Republic of Congo",
    date: "August 2009",
    pdf: kisanganiReport,
    description: "Report on our mission trip to Kisangani, featuring leadership development initiatives and community engagement activities."
  }
];

export function MissionReports() {
  const [selectedReport, setSelectedReport] = useState(null);

  const handleDownload = (pdf, title) => {
    const link = document.createElement('a');
    link.href = pdf;
    link.download = `${title.replace(/\s+/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#2E652A] via-[#2E652A] to-[#234d21] py-24 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#BEA336] rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#BEA336] rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4">
            <span className="bg-[#BEA336] text-white px-4 py-2 rounded-full text-sm tracking-wide uppercase">
              Mission Documentation
            </span>
          </div>
          <h1 className="text-white mb-6 text-3xl md:text-5xl">Mission Reports</h1>
          <p className="text-[#F6EFE2] max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Explore our mission reports documenting the impact of our work across Africa. 
            Each report details our ministry activities, training programs, and the transformation 
            happening in communities we serve.
          </p>
        </div>
      </div>

      {/* Reports Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="mb-12 text-center">
          <h2 className="text-[#2E652A] mb-4 text-3xl">Our Mission Reports</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Click on any report to view it in detail. You can scroll through each report and download it for your records.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {missionReports.map((report) => (
            <div
              key={report.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                selectedReport?.id === report.id
                  ? "border-[#BEA336] shadow-2xl"
                  : "border-transparent hover:border-[#2E652A] hover:shadow-xl"
              }`}
              onClick={() => setSelectedReport(report)}
            >
              {/* Report Header */}
              <div className="bg-gradient-to-r from-[#2E652A] to-[#234d21] p-6 text-white">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#BEA336] flex items-center justify-center">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{report.title}</h3>
                      <p className="text-[#F6EFE2] text-sm">{report.location}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-[#F6EFE2]">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{report.date}</span>
                  </div>
                </div>
              </div>

              {/* Report Body */}
              <div className="p-6">
                <p className="text-gray-700 mb-4 leading-relaxed">{report.description}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownload(report.pdf, report.title);
                  }}
                  className="inline-flex items-center gap-2 bg-[#2E652A] hover:bg-[#234d21] text-white px-4 py-2 rounded-lg transition-colors text-sm"
                >
                  <Download className="w-4 h-4" />
                  Download Report
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* PDF Viewer Section */}
        {selectedReport && (
          <div className="mt-12">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-[#BEA336]">
              {/* Viewer Header */}
              <div className="bg-gradient-to-r from-[#2E652A] to-[#234d21] p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{selectedReport.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-[#F6EFE2]">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        <span>{selectedReport.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{selectedReport.date}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedReport(null)}
                    className="text-white hover:text-[#BEA336] transition-colors px-4 py-2 rounded-lg hover:bg-white/10"
                  >
                    Close
                  </button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="relative" style={{ height: "80vh" }}>
                <iframe
                  src={`${selectedReport.pdf}#toolbar=1&navpanes=1&scrollbar=1`}
                  className="w-full h-full border-0"
                  title={selectedReport.title}
                />
                
                {/* Download Button Overlay */}
                <div className="absolute bottom-4 right-4">
                  <button
                    onClick={() => handleDownload(selectedReport.pdf, selectedReport.title)}
                    className="bg-[#BEA336] hover:bg-[#a08d2d] text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-all hover:scale-105"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-16 md:mt-20 bg-gradient-to-r from-[#F6EFE2] to-[#f5f5f4] rounded-2xl p-6 md:p-12 text-center">
          <h2 className="text-[#2E652A] mb-3 text-2xl md:text-3xl">Transparency & Accountability</h2>
          <div className="w-24 h-1 bg-[#BEA336] mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed text-base md:text-lg">
            We believe in transparency and accountability. Our mission reports document the work we do, 
            the impact we make, and the lives we touch. These reports are available for our partners, 
            supporters, and anyone interested in understanding the scope and effectiveness of our ministry.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#2E652A] py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4 text-2xl md:text-3xl">Support Our Mission</h2>
          <p className="text-[#F6EFE2] mb-8 text-base md:text-lg">
            Your partnership helps us continue documenting and expanding our impact across Africa. 
            Join us in developing Christian leaders and transforming communities.
          </p>
          <a 
            href="/support-us"
            className="inline-block bg-[#BEA336] hover:bg-[#a08d2d] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg transition-colors text-base md:text-lg shadow-lg hover:shadow-xl"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </div>
  );
}

