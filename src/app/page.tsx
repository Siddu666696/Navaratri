import { NavHeader } from "@/components/navigation/NavHeader";
import { HeroScene } from "@/components/scenes/HeroScene";
import { TempleRevealScene } from "@/components/scenes/TempleRevealScene";
import { InvocationScene } from "@/components/scenes/InvocationScene";
import { FestivalIntroScene } from "@/components/scenes/FestivalIntroScene";
import { DailyScheduleSection } from "@/components/schedule/DailyScheduleSection";
import { VisitSection } from "@/components/scenes/VisitSection";
import { DonationSection } from "@/components/donation/DonationSection";
import { ClosingScene } from "@/components/scenes/ClosingScene";

export default function Page() {
  return (
    <>
      <NavHeader />
      <main>
        <HeroScene />
        <TempleRevealScene />
        <InvocationScene />
        <FestivalIntroScene />
        <DailyScheduleSection />
        <VisitSection />
        <DonationSection />
        <ClosingScene />
      </main>
    </>
  );
}
