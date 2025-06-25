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
    // <main className="w-full  m-auto overflow-auto container ">




    // </main>

    <>

      <div className="w-full max-w-7xl mx-auto px-4 container">
        <Header />
      </div>
      <Hero />
      <CoreValuesSection />
      <StorySection />
      <ValuesSection />
      <ThriveSection />
      <JourneySection />
      <MissionSection />
      <Footer />
    </>
  );
}