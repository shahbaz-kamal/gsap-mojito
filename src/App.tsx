import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

// scrollTriger will alow us to animate while scrolling and split text will help us to break text into individual word or characters for detailing

gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return <div className="bg-red-500">App</div>;
};

export default App;
