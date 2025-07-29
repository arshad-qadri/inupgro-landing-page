import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import InupgroTransforming from "@/components/InupgroTransforming";
import KeyFeatures from "@/components/KeyFeatures";
import NextStep from "@/components/NextStep";
import StepForStudent from "@/components/StepForStudent";
import WeBuiltInupGro from "@/components/WeBuiltInupGro";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WeBuiltInupGro />
      <StepForStudent />
      <KeyFeatures />
      <InupgroTransforming />
      <NextStep />

      <Footer />
    </>
  );
}
