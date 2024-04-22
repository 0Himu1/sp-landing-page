import React from "react";
import LeadForm from "./LeadForm";

export default function Lead() {
  return (
    <div className="flex justify-around w-full items-center py-12 px-4 text-slate-800">
      <div className="container flex flex-col md:flex-row space-x-0 md:space-x-2 space-y-4 md:space-y-0">
        <h2 className="flex-1 md:px-10 text-2xl md:text-4xl font-semibold mb-4">
          Get Quotation
        </h2>
        <div className="flex-1 w-full">
          <LeadForm />
        </div>
      </div>
    </div>
  );
}
