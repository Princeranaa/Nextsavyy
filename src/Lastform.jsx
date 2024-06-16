import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Lastform = () => {
  const navigate = useNavigate();

  const handleExploreMore = () => {
    navigate('/'); // Navigate back to the ContactForm page (assuming '/' is the route for ContactForm)
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-xl mb-4">Thank you for connecting!</h1>
        <p className="mb-2">We appreciate your interest and will be in touch soon.</p>
        <p className="mb-4">In the meantime, feel free to browse our website to learn more about our offerings.</p>
        <button
          onClick={handleExploreMore}
          className="inline-block mt-4 px-4 py-2 border border-white rounded hover:bg-white hover:text-gray-800 transition"
        >
          Explore more
        </button>
      </div>
    </div>
  );
};

export default Lastform;
