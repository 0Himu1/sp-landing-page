import React from "react";

const WorkSection = () => {
  return (
    <>
      <div className="flex justify-around w-full items-center py-12 px-4 text-slate-800">
        <div className="container flex flex-col md:flex-row space-x-0 md:space-x-2 space-y-4 md:space-y-0">
          <h2 className="flex-1 md:px-10 text-2xl md:text-4xl font-semibold mb-4">
            Beautiful interior where people live, work and learn
          </h2>
          <div className="flex-1 md:px-10 md:text-right">
            <p className="mb-6">
              Light awakens your dreams, crystallizing time, if only for a
              moment. We bring this phenomenon into living spaces. The light
              turns on and with eyes wide open it feels like magic, like being
              children again.
            </p>
            <a href="#about" className="text-lg font-semibold px-4 py-2 rounded-full border border-slate-800">
              VIEW ALL WORKS →
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkSection;
