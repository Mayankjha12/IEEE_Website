import { BlueBgWrapper } from "@/components/includes/BlueBgWraper";
import LoadingWrapper from "@/components/includes/LoadingWrapper";
import AlumniSection from "@/components/sections/AlumniSection";
import ChaptersSection from "@/components/sections/ChaptersSection";
import FAQASection from "@/components/sections/FAQASection";
import HeroBanner from "@/components/sections/HeroBanner";
import LatestEventsSection from "@/components/sections/LatestEventsSection";
import PastEvents from "@/components/sections/PastEventCard";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import WordsOfWisdom from "@/components/sections/WordsOfWisdom";

export default async function Page() {
  return (
    <LoadingWrapper>
      <div className="flex flex-col items-center justify-center min-h-screen mx-auto overflow-hidden bg-black ">
        <HeroBanner />
        <PastEvents />
        <WhyChooseUs />
        <ChaptersSection />
        <LatestEventsSection />
        <BlueBgWrapper>
          <WordsOfWisdom />
          <AlumniSection />
        </BlueBgWrapper>
        <FAQASection />
      </div>
    </LoadingWrapper>
  );
}
