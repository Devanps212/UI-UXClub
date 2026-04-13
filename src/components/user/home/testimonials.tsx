"use client";
import { useState, useEffect } from "react";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Rivera",
      role: "UI/UX Developer",
      image: "/avatars/alex.jpg",
      text: "Hey, I'm a UI/UX Developer. Joining this club has been one of the best decisions I've made. The community, feedback sessions, and collaborations have helped me grow tremendously as a designer.",
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

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-[#0A0D1F]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="flex items-center justify-center gap-2 text-[#7A38F0] mb-3">
            <div className="w-3 h-3 rounded-full bg-[#7A38F0]" />
            TESTIMONIALS
          </p>
          <h2 className="text-4xl font-bold text-white">
            What Our Members Say
          </h2>
        </div>

        <div className="relative bg-[#111827] border border-gray-800 rounded-3xl p-10 md:p-16">
          <FaQuoteLeft className="text-6xl text-[#7A38F0]/10 absolute top-8 left-8" />

          <div className="min-h-70 flex flex-col justify-center">
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed text-center mb-10 transition-all duration-500">
              "{testimonials[currentIndex].text}"
            </p>

            <div className="flex items-center justify-center gap-4">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-[#7A38F0]"
              />
              <div className="text-center">
                <h4 className="text-white font-semibold text-lg">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-[#A172F6]">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={goToPrevious}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-[#1F2937] hover:bg-[#7A38F0] p-4 rounded-full text-white transition-all"
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-[#1F2937] hover:bg-[#7A38F0] p-4 rounded-full text-white transition-all"
          >
            <FaArrowRight />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index
                    ? "bg-[#7A38F0] scale-125"
                    : "bg-gray-600 hover:bg-gray-400"
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
