"use client";
import { useState, useEffect } from "react";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Rivera",
      role: "UI/UX Developer",
      image: "/avatars/alex.jpg",
      text: "Joining this club has been one of the best decisions I've made. The community, feedback sessions, and collaborations have helped me grow tremendously as a designer.",
    },
    {
      name: "Sarah Chen",
      role: "UI/UX Designer @ Stripe",
      image: "/avatars/sarah.jpg",
      text: "Being part of this club has been a game-changer. I've improved my skills, made amazing connections, and even landed my dream job through the network here.",
    },
    {
      name: "Marcus Okoro",
      role: "Product Designer @ Paystack",
      image: "/avatars/marcus.jpg",
      text: "The feedback I receive on my designs is incredibly valuable. This community genuinely cares about growth and helping each other create better user experiences.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrevious = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  const goToNext = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const goToSlide = (index: number) => setCurrentIndex(index);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black">
            What Our Members Say
          </h2>
        </div>

        <div className="relative bg-yellow-50 border border-yellow-300 rounded-2xl sm:rounded-3xl px-10 py-8 sm:px-12 sm:py-10 md:px-16 md:py-16">
          <FaQuoteLeft className="text-4xl sm:text-6xl text-yellow-400/20 absolute top-6 left-6 sm:top-8 sm:left-8" />

          <div className="min-h-65 sm:min-h-60 flex flex-col justify-center">
            <p className="text-base sm:text-xl md:text-2xl text-gray-800 leading-relaxed text-center mb-8 sm:mb-10 transition-all duration-500">
              "{testimonials[currentIndex].text}"
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-yellow-400"
              />
              <div className="text-center sm:text-left">
                <h4 className="text-black font-semibold text-base sm:text-lg">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-yellow-600 text-sm sm:text-base">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-yellow-400 p-2 sm:p-4 rounded-full text-gray-700 hover:text-yellow-900 transition-all"
          >
            <FaArrowLeft className="text-sm sm:text-base" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-yellow-400 p-2 sm:p-4 rounded-full text-gray-700 hover:text-yellow-900 transition-all"
          >
            <FaArrowRight className="text-sm sm:text-base" />
          </button>

          <div className="flex justify-center gap-3 mt-8 sm:mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all ${
                  currentIndex === index
                    ? "bg-yellow-400 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
