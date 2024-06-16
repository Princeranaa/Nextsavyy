import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function ContactForm() {
  const [name, setName] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(true);
  const navigate = useNavigate(); 

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, send data to a server
    console.log('Form submitted:', { name });
    setName(''); // Clear the input field after submission
    navigate('/contactus'); // Navigate to the next page
  };

  const handleClose = () => {
    setIsFormOpen(false);
    navigate(-1); // Navigate back to the previous page
  };

  if (!isFormOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-neutral-950">
      <div className="relative border border-black bg-zinc-900 text-center text-zinc-500 p-8 rounded-md shadow-md flex flex-col items-center w-full max-w-md">
        <button
          className="absolute top-3 right-3 text-zinc-500 hover:text-gray-800 transition duration-300 ease-in-out"
          onClick={handleClose}
          aria-label="Close"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p>Get in Touch With Us</p>
        <p className="mb-6">
          Get free consultation with a professional real estate consultant.
        </p>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <label className="flex text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="border rounded w-full py-2 px-3 text-zinc-900 leading-tight focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="hidden"></button> 
        </form>

        <p className="mt-4 text-sm">
          <Link to="/contactus" className="inline-block text-zinc-100 rounded bg-black border w-[25vw] py-2 px-4 focus:outline-none focus:shadow-outline">
            Next
          </Link>
        </p>
      </div>
    </div>
  );
}

export default ContactForm;
