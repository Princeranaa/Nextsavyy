import React from "react";
import PropertyCard from "./PropertyCard";

const properties = [
  {
    name: "Al Jawhara Residences",
    developer: "Emaar Developers",
    location: "Jumeirah Village Triangle (JVT)",
    price: "AED 1,000,000",
    image:
      "https://media.designcafe.com/wp-content/uploads/2023/07/05120637/modern-furniture-designs.jpg",
  },
  {
    name: "Al Jawhara Residences",
    developer: "Emaar Developers",
    location: "Jumeirah Village Triangle (JVT)",
    price: "AED 1,000,000",
    image:
      "https://media.designcafe.com/wp-content/uploads/2023/07/05120637/modern-furniture-designs.jpg",
  },
  {
    name: "Al Jawhara Residences",
    developer: "Emaar Developers",
    location: "Jumeirah Village Triangle (JVT)",
    price: "AED 1,000,000",
    image:
      "https://media.designcafe.com/wp-content/uploads/2023/07/05120637/modern-furniture-designs.jpg",
  },
  {
    name: "Al Jawhara Residences",
    developer: "Emaar Developers",
    location: "Jumeirah Village Triangle (JVT)",
    price: "AED 1,000,000",
    image:
      "https://media.designcafe.com/wp-content/uploads/2023/07/05120637/modern-furniture-designs.jpg",
  },
  {
    name: "Al Jawhara Residences",
    developer: "Emaar Developers",
    location: "Jumeirah Village Triangle (JVT)",
    price: "AED 1,000,000",
    image:
      "https://media.designcafe.com/wp-content/uploads/2023/07/05120637/modern-furniture-designs.jpg",
  },
  {
    name: "Al Jawhara Residences",
    developer: "Emaar Developers",
    location: "Jumeirah Village Triangle (JVT)",
    price: "AED 1,000,000",
    image:
      "https://media.designcafe.com/wp-content/uploads/2023/07/05120637/modern-furniture-designs.jpg",
  },
  {
    name: "Al Jawhara Residences",
    developer: "Emaar Developers",
    location: "Jumeirah Village Triangle (JVT)",
    price: "AED 1,000,000",
    image:
      "https://media.designcafe.com/wp-content/uploads/2023/07/05120637/modern-furniture-designs.jpg",
  },
  {
    name: "Al Jawhara Residences",
    developer: "Emaar Developers",
    location: "Jumeirah Village Triangle (JVT)",
    price: "AED 1,000,000",
    image:
      "https://media.designcafe.com/wp-content/uploads/2023/07/05120637/modern-furniture-designs.jpg",
  },
  {
    name: "Al Jawhara Residences",
    developer: "Emaar Developers",
    location: "Jumeirah Village Triangle (JVT)",
    price: "AED 1,000,000",
    image:
      "https://media.designcafe.com/wp-content/uploads/2023/07/05120637/modern-furniture-designs.jpg",
  },
];

function PropertyList() {
  return (
    <div>
      <div className="text-center   flex justify-between p-10">
        273 Properties Found
        <div className="text-black">
          <h4>Reset All Filters</h4>
        </div>
      </div>
      <div className="p-1 ">
      <hr className="border-black w-[110%] ml-9 mb-2" />
      </div>
      <div className="grid grid-cols-1 w-screen md:grid-cols-3 p-2 gap-1">
        {properties.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </div>
    </div>
  );
}

export default PropertyList;
