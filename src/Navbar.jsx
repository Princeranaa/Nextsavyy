import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-black text-white w-screen p-4  flex justify-between items-center sticky  top-0">
      <div className="text-2xl font-bold">Dev.</div>
      <div className="flex space-x-4">
        <a href="/">Home</a>
        <a href="/listing">Listing</a>
        <a href="/about">About Us</a>
      </div>
      <Link to={"/contact"} className="border  border-white mr-6 py-2 px-4 rounded">Contact</Link>
    </nav>
  );
}

export default Navbar;