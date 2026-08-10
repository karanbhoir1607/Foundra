import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600">
          Foundra
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-700 hover:text-indigo-600">
            Home
          </a>

          <a href="#" className="text-gray-700 hover:text-indigo-600">
            Features
          </a>

          <a href="#" className="text-gray-700 hover:text-indigo-600">
            How It Works
          </a>

          <a href="#" className="text-gray-700 hover:text-indigo-600">
            About
          </a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="px-5 py-2 text-gray-700 hover:text-indigo-600">
            Login
          </button>

          <button className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-gray-700"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-5 space-y-4 border-t border-gray-100">

          <a href="#" className="block pt-4 text-gray-700">
            Home
          </a>

          <a href="#" className="block text-gray-700">
            Features
          </a>

          <a href="#" className="block text-gray-700">
            How It Works
          </a>

          <a href="#" className="block text-gray-700">
            About
          </a>

          <button className="w-full py-2 text-gray-700 border border-gray-300 rounded-lg">
            Login
          </button>

          <button className="w-full py-2 bg-indigo-600 text-white rounded-lg">
            Get Started
          </button>

        </div>
      )}
    </nav>
  );
}

export default Navbar;