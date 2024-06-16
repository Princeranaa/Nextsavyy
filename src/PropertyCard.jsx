import React from "react";
import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  return (
    <div className="border p-4 rounded-lg shadow-md flex-wrap ">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-48 md:h-64 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{property.name}</h2>
        <p className="text-gray-600">By {property.developer}</p>
        <p className="text-gray-600">{property.location}</p>
        <p className="text-lg font-bold mt-2">{property.price}</p>
        <div className="mt-4 flex justify-center  ">
          <Link
            to={"/contact"}
            className="bg-white w-[25vw] text-center text-black font-semibold py-2 px-4 md:px-8 border border-black rounded-md hover:bg-gray-100 transition duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
