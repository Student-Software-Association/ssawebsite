import Hero from "@/components/homepage/hero";
import NavBar from "@/components/navBar";
export default function Home() {
  return (
    <div className="m-0 p-0 overflow-x-hidden">
      <NavBar/>
      <Hero />
      {/* Placeholder for additional content to enable scrolling */}
      <p>  
        <span style={{ display: 'inline-block', width: '100%', minHeight: '200vh' }}>
          Scroll down to see more content.
        </span>
      </p>
    </div>
  );
}
