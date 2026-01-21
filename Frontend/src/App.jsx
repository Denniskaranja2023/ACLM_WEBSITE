import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./components/ui/NavBar";
import { Footer } from "./components/ui/Footer";
import { WhatsAppButton } from "./components/ui/WhatsappButton";
import { AppStateProvider, useAppState } from "./hooks/useAppState";
import { Home } from "./pages/Home";
import { OurRoots } from "./pages/OurRoots";
import { OurStories } from "./pages/OurStories";
import { MissionReports } from "./pages/MissionReports";
import { OurTeam } from "./pages/OurTeam";
import { Contact } from "./pages/Contact";
import { SupportUs } from "./pages/SupportUs";
import { LeadershipTrainings } from "./pages/pillars/LeadershipTrainings";
import { ChristianLiterature } from "./pages/pillars/ChristianLiterature";
import { MissionMobilization } from "./pages/pillars/MissionMobilization";
import { ThingiraInitiative } from "./pages/pillars/ThingiraInitiative";
import { Kenya } from "./pages/projects/Kenya";
import { Uganda } from "./pages/projects/Uganda";
import { Congo } from "./pages/projects/Congo";
import { Mozambique } from "./pages/projects/Mozambique";

function AppContent() {
  const { setLastVisitedPage } = useAppState();
  const location = useLocation();

  useEffect(() => {
    setLastVisitedPage(location.pathname);
  }, [location.pathname, setLastVisitedPage]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-roots" element={<OurRoots />} />
          <Route path="/our-stories" element={<OurStories />} />
          <Route path="/projects/kenya" element={<Kenya />} />
          <Route path="/projects/uganda" element={<Uganda />} />
          <Route path="/projects/congo" element={<Congo />} />
          <Route path="/projects/mozambique" element={<Mozambique />} />
          <Route path="/mission-reports" element={<MissionReports />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/support-us" element={<SupportUs />} />
          <Route path="/pillars/leadership-trainings" element={<LeadershipTrainings />} />
          <Route path="/pillars/christian-literature" element={<ChristianLiterature />} />
          <Route path="/pillars/mission-mobilization" element={<MissionMobilization />} />
          <Route path="/pillars/thingira-initiative" element={<ThingiraInitiative />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <AppStateProvider>
      <Router>
        <AppContent />
      </Router>
    </AppStateProvider>
  );
}