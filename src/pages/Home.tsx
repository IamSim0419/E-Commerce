import BestSeller from "../components/BestSeller";
import Hero from "../components/Hero";
import LatestCollections from "../components/LatestCollections";
import NewsLetterbox from "../components/NewsLetterbox";
import OurPolicy from "../components/OurPolicy";

export default function Home() {
  return (
    <>
      <Hero />
      <LatestCollections />
      <BestSeller />
      <OurPolicy />
      <NewsLetterbox />
    </>
  );
}
