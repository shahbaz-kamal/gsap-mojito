import { useGSAP } from "@gsap/react";
import { cocktailLists, mockTailLists } from "../constants";
import gsap from "gsap";

const Cocktail = () => {
  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });
    parallaxTimeline
      .from("#c-left-leaf", { x: -100, y: 100 }, 0)
      .from("#c-right-leaf", { x: 100, y: 100 }, 0);
  }, []);
  return (
    <section id="cocktails" className="noisy">
      <img src="/images/cocktail-left-leaf.png" alt="" id="c-left-leaf" />
      <img src="/images/cocktail-right-leaf.png" alt="" id="c-right-leaf" />
      <div className="list">
        <div className="popular">
          <h2>Most Popular cocktails</h2>
          <ul>
            {cocktailLists.map((drink) => (
              <li key={drink.name}>
                <div className="md:me-28">
                  <p>
                    {drink.name} | {drink.detail}
                  </p>
                  <span>- {drink.price}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="loved">
          <h2>Most Loved mocktails</h2>
          <ul>
            {mockTailLists.map((drink) => (
              <li key={drink.name}>
                <div className="md:me-28">
                  <p>
                    {drink.name} | {drink.detail}
                  </p>
                  <span>- {drink.price}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktail;
