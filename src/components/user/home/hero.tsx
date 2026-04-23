import { useState, useRef } from "react";
import { FaArrowRight, FaScroll } from "react-icons/fa";
import SlideCard from "./slideCard";
import { SLIDES } from "../../../constants";
import RulesModal from "./rulesModal";

const mod = (n: number, m: number) => ((n % m) + m) % m;

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [showRules, setShowRules] = useState(false);

  const [cardTypes, setCardTypes] = useState<
    Record<"prev" | "center" | "next", "side" | "center">
  >({
    prev: "side",
    center: "center",
    next: "side",
  });

  const [transforms, setTransforms] = useState<
    Record<"prev" | "center" | "next", string>
  >({
    prev: "translateX(0px)",
    center: "translateX(0px)",
    next: "translateX(0px)",
  });

  const [transitioning, setTransitioning] = useState(false);

  const prevRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  const prev = mod(current - 1, SLIDES.length);
  const next = mod(current + 1, SLIDES.length);

  const slide = (dir: "left" | "right") => {
    if (sliding) return;

    const prevEl = prevRef.current;
    const centerEl = centerRef.current;
    const nextEl = nextRef.current;
    if (!prevEl || !centerEl || !nextEl) return;

    const prevLeft = prevEl.getBoundingClientRect().left;
    const centerLeft = centerEl.getBoundingClientRect().left;
    const nextLeft = nextEl.getBoundingClientRect().left;

    setSliding(true);
    setTransitioning(true);

    if (dir === "right") {
      setTransforms({
        prev: `translateX(${centerLeft - prevLeft}px)`,
        center: `translateX(${nextLeft - centerLeft}px)`,
        next: `translateX(${prevLeft - nextLeft}px)`,
      });
    } else {
      setTransforms({
        prev: `translateX(${nextLeft - prevLeft}px)`,
        center: `translateX(${prevLeft - centerLeft}px)`,
        next: `translateX(${centerLeft - nextLeft}px)`,
      });
    }

    setTimeout(() => {
      setCurrent(dir === "right" ? prev : next);
      setTransforms({
        prev: "translateX(0px)",
        center: "translateX(0px)",
        next: "translateX(0px)",
      });
      setTransitioning(false);
      setCardTypes({
        prev: "side",
        center: "center",
        next: "side",
      });
      setSliding(false);
    }, 420);
  };

  return (
    <>
      <section className="relative overflow-hidden mt-16 sm:mt-20 md:mt-24 px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between md:gap-4 lg:gap-8 xl:gap-12">
          <div className="relative z-10 w-full md:w-1/2 lg:max-w-md xl:max-w-xl text-center md:text-left min-w-0">
            <p className="font-body flex items-center justify-center md:justify-start gap-2 text-yellow-700 font-medium text-sm sm:text-base">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500 inline-block" />
              Welcome to UI/UX Club
            </p>

            <h1 className="font-display text-4xl sm:text-5xl md:text-3xl lg:text-4xl xl:text-6xl font-black text-black leading-none mb-4 mt-2">
              <a href="#">Learn Design.</a>
              <br />
              <a href="#" className="text-yellow-500">
                Build Projects.
              </a>
              <br />
              <span>& </span>
              <a href="#">Grow a Community.</a>
            </h1>

            <p className="font-body mt-3 text-gray-600 text-xs md:text-xs lg:text-sm xl:text-base leading-relaxed max-w-lg">
              Join the club of passionate UI/UX designers, where creativity
              meets innovation, ideas are shared, and designers collaborate to
              craft meaningful and user-centered digital experiences.
            </p>

            <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
              <button
                className="font-body w-full sm:w-auto px-4 lg:px-6 xl:px-8 py-2.5 flex items-center justify-center gap-2 text-black font-semibold rounded-2xl transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-yellow-300/50 text-sm lg:text-base"
                style={{
                  background: "linear-gradient(to right, #FFD700, #FFF176)",
                }}
              >
                Join Club <FaArrowRight />
              </button>

              <button
                onClick={() => setShowRules(true)}
                className="font-body w-full sm:w-auto px-4 lg:px-6 xl:px-8 py-2.5 flex items-center justify-center gap-2 text-black font-semibold rounded-2xl border-2 border-yellow-400 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-yellow-300/40 text-sm lg:text-base"
                style={{
                  background: "linear-gradient(to right, #FFF176, #FFD700)",
                }}
              >
                Club Rules <FaScroll />
              </button>
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6 w-full md:w-1/2 min-w-0 md:scale-[0.72] md:-mx-8 lg:scale-90 lg:mx-0 xl:scale-100 md:origin-center">
            <div className="flex items-center justify-center w-full overflow-visible">
              <div
                ref={prevRef}
                style={{
                  transform: transforms.prev,
                  transition: transitioning
                    ? "transform 420ms cubic-bezier(0.4,0,0.2,1)"
                    : "none",
                  zIndex: sliding ? 10 : 1,
                }}
              >
                <SlideCard
                  slide={SLIDES[prev]}
                  type={cardTypes.prev}
                  onClick={() => slide("right")}
                />
              </div>

              <div
                ref={centerRef}
                style={{
                  transform: transforms.center,
                  transition: transitioning
                    ? "transform 420ms cubic-bezier(0.4,0,0.2,1)"
                    : "none",
                  zIndex: sliding ? 10 : 1,
                }}
              >
                <SlideCard slide={SLIDES[current]} type={cardTypes.center} />
              </div>

              <div
                ref={nextRef}
                style={{
                  transform: transforms.next,
                  transition: transitioning
                    ? "transform 420ms cubic-bezier(0.4,0,0.2,1)"
                    : "none",
                  zIndex: sliding ? 10 : 1,
                }}
              >
                <SlideCard
                  slide={SLIDES[next]}
                  type={cardTypes.next}
                  onClick={() => slide("left")}
                />
              </div>
            </div>

            <div className="flex gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (i === current || sliding) return;
                    slide(i > current ? "left" : "right");
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 sm:w-8 bg-yellow-500"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {showRules && <RulesModal setShowRules={setShowRules} />}
    </>
  );
};

export default Hero;
