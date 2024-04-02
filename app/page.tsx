import Image from "next/image";
import Banner from "./components/Banner";
import Packages from "./components/Packages";
import FrequentlyAskQuestions from "./components/FrequentlyAskQuestions";

export default function Home() {
  return (
    <main>
      <Banner/>
      <Packages/>
      <FrequentlyAskQuestions/>
    </main>
  );
}
