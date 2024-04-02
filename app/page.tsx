import Image from "next/image";
import Banner from "./components/Banner";
import Packages from "./components/Packages";
import FrequentlyAskQuestions from "./components/FrequentlyAskQuestions";

export default function Home() {
  return (
    <main className="text-white bg-black">
      <Banner/>
      <Packages/>
      <FrequentlyAskQuestions/>
    </main>
  );
}
