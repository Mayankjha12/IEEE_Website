import CoreSection from "@/components/sections/CoreSection";
import WebsiteTeam from "@/components/sections/WebsiteTeam";

export default function Page() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen  bg-black mt-16 md:mt-20"
      id="team"
    >
      <CoreSection />
      <WebsiteTeam />
    </div>
  );
}
