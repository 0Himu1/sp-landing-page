import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { LuArrowLeftCircle, LuArrowRightCircle } from "react-icons/lu";
// import yourImage from './path-to-your-hero-image.jpg'; // import your hero image
// Import the background images
import HeroImage1 from "../image/Hero1.jpg";
import HeroImage2 from "../image/Hero2.jpg";
import HeroImage3 from "../image/Hero3.jpg";

const heroImages = {
  1: HeroImage1,
  2: HeroImage2,
  3: HeroImage3,
};

const HeroSection = () => {
  const [bgImage, setBgImage] = useState(1);

  const changeBgImage = (action) => {
    if (action === "next") {
      setBgImage(bgImage === 3 ? 1 : bgImage + 1);
    } else {
      setBgImage(bgImage === 1 ? 3 : bgImage - 1);
    }
  };

  return (
    <div
      className="h-screen bg-no-repeat bg-cover bg-center transition-transform duration-500 slide"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(6, 0, 26, 0.7), rgba(0, 0, 0, 0)), url(${heroImages[bgImage]})`,
      }}
    >
      <nav className="sticky flex justify-between items-center px-4 py-2 bg-opacity-50 text-white">
        <div className="flex space-x-4">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#collection" className="hover:underline">
            Collection
          </a>
          <div className="hidden md:flex hover:underline">Online Store ▾</div>
        </div>
      </nav>

      <div className="flex flex-col justify-end items-start h-[90dvh] px-4 md:px-8 lg:px-12">
        <div className="border-b-2 border-b-white w-full">
          <h1 className="text-6xl font-bold text-white mb-4">Boho Style</h1>
        </div>
        <div className="flex justify-between w-full mt-4">
          <p className="text-white max-w-md">
            Boho style interior with wooden chair table and white wall
            background
          </p>
          <div className="text-white flex space-x-2 text-5xl">
            {/* Navigation arrows or dots for the hero carousel */}
            <button onClick={() => changeBgImage("prev")}>
              <FiChevronLeft />
            </button>
            <button onClick={() => changeBgImage("next")}>
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
