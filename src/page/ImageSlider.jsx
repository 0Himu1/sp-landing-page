import React, { useState, useEffect, useRef } from "react";

export default function ImageSlider({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sliderRef = useRef();

  // Handle automatic sliding
  useEffect(() => {
    const maxIndex = images.length;
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex) =>
        currentImageIndex + 1 < maxIndex ? currentImageIndex + 1 : 0
      );
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);

  // Update scroll position when the current image index changes
  useEffect(() => {
    const slider = sliderRef.current;
    const currentScrollPosition = currentImageIndex * slider.offsetWidth;
    slider.scroll({
      left: currentScrollPosition,
      behavior: "smooth",
    });
  }, [currentImageIndex]);

  return (
    <div
      ref={sliderRef}
      className="flex items-center w-full overflow-x-scroll aspect-auto gap-2 snap-mandatory snap-x"
    >
      {images.map((img, index) => (
        <div
          key={index}
          className="w-2/3 md:w-1/3 h-full md:h-auto snap-start flex-shrink-0 slide-in bg-gray-300 overflow-hidden"
        >
          <img
            src={img}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
