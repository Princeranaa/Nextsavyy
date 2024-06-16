import React from "react";

function Pagination() {
  return (
    <div className="flex justify-center space-x-2 mt-8 ">
      <button
        Link
        to={"propertylist"}
        className="border border-black py-2 px-4 rounded mb-2 gap-4"
      >
        1
      </button>
      <button className="border border-black py-2 px-4 rounded mb-2 gap-4">
        2
      </button>
      <button className="border border-black py-2 px-4 rounded mb-2 gap-4">
        3
      </button>
    </div>
  );
}

export default Pagination;
