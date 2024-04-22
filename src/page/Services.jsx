import React, { useEffect, useState } from "react";
import HeroImage1 from "../image/Hero1.jpg";
import HeroImage2 from "../image/Hero2.jpg";
import HeroImage3 from "../image/Hero3.jpg";
const allServices = [
  {
    id: 1,
    title: "Custom Interior Design",
    description:
      "We are a team of interior designers who specialize in custom interior design services. We offer bespoke interior design services for residential and commercial spaces.",
    image: HeroImage1,
  },
  {
    id: 2,
    title: "Space Optimization",
    description:
      "We are a team of interior designers who specialize in custom interior design services. We offer bespoke interior design services for residential and commercial spaces.",
    image: HeroImage2,
  },
  {
    id: 3,
    title: "3D Visualization Services",
    description:
      "We are a team of interior designers who specialize in custom interior design services. We offer bespoke interior design services for residential and commercial spaces.",
    image: HeroImage3,
  },
];

const Services = () => {
  const [services] = useState(allServices);
  const [currentService, setCurrentService] = useState(null);

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { layerX, layerY } = event;
    setCursorPosition({ x: layerX, y: layerY });
  };

  useEffect(() => {
    // Add event listener to the document
    document.addEventListener("mousemove", handleMouseMove);

    // Remove event listener on cleanup
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleMouseLeave = () => {
    setCurrentService(null);
  };

  return (
    <div
      onMouseLeave={handleMouseLeave}
      className="flex items-center justify-center h-96 bg-white px-4 md:px-8 lg:px-12"
    >
      <div className="space-y-4">
        <h2 className="text-lg font-semibold uppercase tracking-widest text-gray-500">
          Collections
        </h2>
        <p className="text-4xl md:text-6xl font-bold tracking-tight leading-none">
          {services.map((s) => (
            <span
              onMouseEnter={() => setCurrentService(services[s.id - 1])}
              className="text-gray-400 hover:text-black hover:underline hover:decoration-solid transition-all duration-200 cursor-pointer"
            >
              {s.title}{" "}
            </span>
          ))}
        </p>
      </div>
      {currentService && (
        <div
          className={`absolute ml-8`}
          style={{
            top: cursorPosition.y + "px",
            left: cursorPosition.x + "px",
          }}
        >
          <Card cardData={currentService} />
        </div>
      )}
    </div>
  );
};

export default Services;

const Card = ({ cardData }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="object-cover w-full md:w-96 h-28 md:h-auto" src={cardData.image} alt={cardData.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{cardData.title}</div>
        <p className="text-gray-700 text-base">{cardData.description}</p>
      </div>
    </div>
  );
};
