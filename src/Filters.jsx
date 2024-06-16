import React from 'react';

function Filters() {
  return (
    <div className="flex justify-center items-center space-x-4 w-screen lg:justify-center lg:items-center my-12">
      <div className="border rounded p-2">
        <label className="block text-center mb-1">Developer</label>
        <select className="border  p-2 rounded w-full">
          <option>Residential</option>
          <option>Commercial</option>
        </select>
      </div>
      <div className="border rounded p-2">
        <label className="block text-center mb-1">Type</label>
        <select className="border p-2 rounded w-full">
          <option>Apartments</option>
          <option>Villas</option>
          <option>Townhouses</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;
