// TableSkeletonLoader.js
import React from 'react';

const SkelTable = () => {
  return (
    <tbody>
      {Array(10).fill().map((_, idx) => (
        <tr key={idx} className="animate-pulse">
          <td className="pr-10 pl-1 py-2">
            <div className="w-full h-6  bg-slate-400 rounded"></div>
          </td>
          <td className="pr-8 pl-1 py-2">
            <div className="w-full h-6 bg-slate-400 rounded"></div>
          </td>
          <td className="pr-10 pl-1 py-2">
            <div className="w-full h-6 bg-slate-400 rounded"></div>
          </td>
          <td className="pr-10 pl-1 py-2">
            <div className="w-full h-6 bg-slate-400 rounded"></div>
          </td>
          <td className="px-4 pl-1  py-2">
            <div className="w-full h-6 bg-slate-400 rounded"></div>
          </td>
          <td className="px-6 pl-1  py-2">
            <div className="w-full h-6 bg-slate-400 rounded"></div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default SkelTable;
