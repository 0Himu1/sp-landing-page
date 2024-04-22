import React, { useEffect } from "react";
import { useState } from "react";

import HeroImage1 from "../image/Hero1.jpg";
import HeroImage2 from "../image/Hero2.jpg";
import HeroImage3 from "../image/Hero3.jpg";

const images = [HeroImage1, HeroImage2, HeroImage3];

const imagesdata = [
  {
    id: 1,
    title: "Apartment",
    view: "Drawing Room",
    image: HeroImage1,
  },
  {
    id: 2,
    title: "Apartment",
    view: "Living room",
    image: HeroImage2,
  },
  {
    id: 3,
    title: "Apartment",
    view: "Kitchen",
    image: HeroImage3,
  },
];

const ImageGallery = ({ imagePosition }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(
    imagesdata[currentImageIndex]
  );

  useEffect(() => {
    setCurrentImage(imagesdata[currentImageIndex]);
  }, [currentImageIndex]);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  console.log(currentImageIndex);

  return (
    <div
      className={`flex flex-col w-full md:px-8 lg:px-12 ${
        imagePosition === "right" ? "md:flex-row-reverse" : "md:flex-row"
      }  md:justify-around `}
    >
      <div className="w-full md:w-2/3 border">
        <img
          src={images[currentImageIndex]}
          alt="Interior"
          className="w-full h-96 md:h-[600px] lg:h-[800px] object-cover p-2 md:p-4"
        />
      </div>
      <div className="flex flex-col w-full md:w-1/3 py-8 space-y-4 border">
        <div className="py-2 px-2 md:px-4 w-full border-b">
          <h1 className="text-4xl font-bold mb-2">{currentImage.title}</h1>
        </div>
        <div className="py-2 px-2 md:px-4 w-full border-b border-gray-300">
          <h2 className="text-lg">View</h2>
          <p className="font-semibold">{currentImage.view}</p>
        </div>
        <p className="text-gray-600 px-2 md:px-4">
          IMAGES {currentImageIndex + 1} / {images.length}
        </p>{" "}
        <div className="flex w-full space-x-2 px-2 md:px-4">
          <button
            onClick={goToPrevious}
            className="text-gray-600 hover:text-black px-3 py-1 rounded-full border"
          >
            {"< PREV"}
          </button>
          <button
            onClick={goToNext}
            className="text-gray-600 hover:text-black px-3 py-1 rounded-full border"
          >
            {"NEXT >"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
