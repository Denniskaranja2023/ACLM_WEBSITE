import { HeroSlideshow } from "../components/ui/HeroSlideshow";
import { PillarsSection } from "../components/ui/PillarsSection";
import { ValuesSection } from "../components/ui/ValuesSection";
import { AboutSection } from "../components/ui/AboutSection";

export function Home() {
  return (
    <div>
      <HeroSlideshow />
      <PillarsSection />
      <ValuesSection />
      <AboutSection />
    </div>
  );
}   