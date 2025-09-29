import Hero from "@/components/homepage/hero";
import NavBar from "@/components/navBar";
import DiscoverStack, {DiscoverStackItem} from "@/components/homepage/discoverStack";

export default function Home() {
  return (
    <div className="m-0 p-0 overflow-x-hidden bg-linear-to-b from-[#02030A] to-[#02030A]">

      <NavBar />

      <Hero />

      <DiscoverStack/>
    </div>
  );
}
