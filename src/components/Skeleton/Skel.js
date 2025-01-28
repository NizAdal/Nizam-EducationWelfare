import React from "react";

const Skel = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 mx-5  md:grid-cols-4 gap-6 pb-10 mt-10">
      {Array(8).fill().map((_, idx) => (
        <div key={idx} className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)] bg-slate-400 animate-pulse">
          <div className="w-10 h-10 rounded-lg bg-slate-500"></div>
          <p className="font-semibold h-4 bg-slate-500 rounded-sm"></p>
          <p className="text-sm text-gray-500 h-4 bg-slate-500 rounded-sm"></p>
        </div>
      ))}
    </div>
  );
}

export default Skel;
