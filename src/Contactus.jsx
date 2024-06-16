import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
  });

  const navigate = useNavigate(); 

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ email: '', phoneNumber: '' }); // Clear form data after submission
    navigate('/lastform'); // Navigate to the next page after form submission
  };

  // Update form data
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle back button click
  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page 
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-neutral-950">
      <div className="p-8 rounded-lg shadow-lg bg-zinc-900 text-white max-w-md w-full relative">
        <h2 className="text-2xl font-bold mb-4 text-center">CONTACT US</h2>
        <p className="mb-6 text-center">Get free consultation with a professional real estate consultant.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded bg-neutral-800 text-white"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium">Phone Number</label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l bg-neutral-800  text-white">+91</span>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter your phone number"
                className="w-full p-2 rounded-r  bg-neutral-800 text-white"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex justify-between">
            <button type="button" onClick={handleBack} className="px-16 py-2 rounded bg-neutral-800 text-white text-sm font-medium">
              Back
            </button>
            <button type="submit" className="px-16 py-2 rounded bg-black text-white text-sm font-medium focus:outline-none focus:shadow-outline">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
