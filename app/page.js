import CoreValuesSection from "./components/CoreValuesSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import JourneySection from "./components/JourneySection";
import MissionSection from "./components/MissionSection";
import StorySection from "./components/StorySection";
import ThriveSection from "./components/ThriveSection";
import ValuesSection from "./components/ValuesSection";

export default function Home() {
    console.log("Page component rendered");

  return (
    <main className="overflow-auto">
      <Header />
      <Hero/>
      <CoreValuesSection/>
      <StorySection/>
      <ValuesSection/>
      <ThriveSection/>
      <JourneySection/>
      <MissionSection/>
      <Footer />

    </main>
  );
}