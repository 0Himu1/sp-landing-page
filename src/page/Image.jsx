import React from "react";
import kitchen from "../image/Kitchen.jpg";

export default function Image() {
  return (
    <div className="w-full h-auto">
      <img src={kitchen} alt="Kitchen" className="object-cover w-full max-h-96 md:h-auto lg:h-auto" />
    </div>
  );
}
