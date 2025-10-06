import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
    
        <Link to="/" className="text-3xl font-extrabold tracking-wide">
          <span className="text-red-500">Wheelz</span>
        </Link>

       
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li>
            <Link to="/" className="hover:text-red-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/store" className="hover:text-red-400 transition">
              Store
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-red-400 transition">
              Contact
            </Link>
          </li>
        </ul>

      
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

   
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-700">
          <ul className="flex flex-col space-y-3 py-4 px-6 text-lg font-medium">
            <li>
              <Link
                to="/"
                className="hover:text-red-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/store"
                className="hover:text-red-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Store
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-red-400 transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Header;
