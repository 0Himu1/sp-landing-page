import React from "react";

export default function About() {
  return (
    <div className="flex justify-around w-full items-center py-12 px-4 text-slate-800">
      <div className="container flex flex-col md:flex-row space-x-0 md:space-x-2 space-y-4 md:space-y-0">
        <h2 className="flex-1 md:px-10 text-2xl md:text-4xl font-semibold mb-4">
          About Us
        </h2>
        <div className="flex-1 md:px-10 md:text-right">
          <p className="mb-6">
            Where design meets function. Since 2018, we’ve tailored interiors
            that embody our clients' style and practicality. In Dhaka's dynamic
            market, our expert team crafts sustainable, bespoke spaces for
            living and business. Embrace the art of fine interiors—elegantly
            designed, expertly delivered.
          </p>
          <a
            href="#about"
            className="text-lg font-semibold px-4 py-2 rounded-full border border-slate-800"
          >
            VIEW ALL WORKS →
          </a>
        </div>
      </div>
    </div>
  );
}
