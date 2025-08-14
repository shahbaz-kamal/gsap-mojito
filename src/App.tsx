import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// scrollTriger will alow us to animate while scrolling and split text will help us to break text into individual word or characters for detailing

gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return (
    <main>
      <Navbar></Navbar>
      <section>
        <Hero></Hero>
      </section>
      <div className="h-[100vh] bg-black"></div>
    </main>
  );
};

export default App;
