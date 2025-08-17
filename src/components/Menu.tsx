import { useRef, useState } from "react";
import { allCocktails } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Menu = () => {
  const contentRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(() => {
    gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      ".cocktail img",
      { opacity: 0, xPercent: "-100" },
      { xPercent: 0, opacity: 1, ease: "power1.inOut" }
    );
    gsap.fromTo('.details h2',{yPercent:100,opacity:0},{yPercent:0,opacity:100,ease:'power1.inOut'})
    gsap.fromTo('.details p',{yPercent:100,opacity:0},{yPercent:0,opacity:100,ease:'power1.inOut'})
  }, [currentIndex]);

  const totalCocktails = allCocktails.length;
  const goToSlides = (index: number) => {
    const newIndex = (index + totalCocktails) % totalCocktails;
    setCurrentIndex(newIndex);
  };

  const getCocktailAt = (indexOfSet: number) => {
    return allCocktails[
      (currentIndex + indexOfSet + totalCocktails) % totalCocktails
    ];
  };
  const curentCocktail = getCocktailAt(0);
  const prevCocktail = getCocktailAt(-1);
  const nextCocktail = getCocktailAt(1);

  return (
    <section id="menu" aria-labelledby="menu-heading">
      <img
        src="/images/slider-left-leaf.png"
        alt="left-leaf"
        id="m-left-leaf"
      />
      <img
        src="/images/slider-right-leaf.png"
        alt="right-leaf"
        id="m-right-leaf"
      />
      <h2 id="menu-heading" className="sr-only">
        cocktail menu
      </h2>
      <nav className="cocktail-tabs" aria-label={"Cocktail Navigation"}>
        {allCocktails.map((cocktail, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              onClick={() => {
                goToSlides(index);
              }}
              key={cocktail.id}
              className={`${
                isActive
                  ? "text-white border-white"
                  : "text-white/50 border-white/50"
              }`}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>
      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlides(currentIndex - 1)}
          >
            <span>{prevCocktail.name}</span>
            <img
              src="/images/right-arrow.png"
              alt="right-arrow"
              area-hidden="true"
            />
          </button>
          <button
            className="text-left"
            onClick={() => goToSlides(currentIndex + 1)}
          >
            <span>{nextCocktail.name}</span>
            <img
              src="/images/left-arrow.png"
              alt="left-arrow"
              area-hidden="true"
            />
          </button>
        </div>
        <div className="cocktail">
          <img src={curentCocktail.image} alt="" />
        </div>
        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recioe For</p>
            <p id="title">{curentCocktail.name}</p>
          </div>
          <div className="details">
            <h2>{curentCocktail.title}</h2>
            <p>{curentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
