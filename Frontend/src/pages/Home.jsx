import { AboutSection } from "../components/ui/AboutSection";
import { HeroSlideshow } from "../components/ui/HeroSlideshow";
import { PillarsSection } from "../components/ui/PillarsSection";
import { ValuesSection } from "../components/ui/ValuesSection";

export function Home() {
  return (
    <div>
      <HeroSlideshow />
      <AboutSection />
      <PillarsSection />
      <ValuesSection />
    </div>
  );
}   