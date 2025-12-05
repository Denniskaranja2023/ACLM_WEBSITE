import { useState, useEffect } from "react";
import { AboutSection } from "../components/ui/AboutSection";
import { HeroSlideshow } from "../components/ui/HeroSlideshow";
import { PillarsSection } from "../components/ui/PillarsSection";
import { ValuesSection } from "../components/ui/ValuesSection";
import { LoadingPage } from "../components/ui/LoadingPage";

export function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <HeroSlideshow />
      <AboutSection />
      <PillarsSection />
      <ValuesSection />
    </div>
  );
}   