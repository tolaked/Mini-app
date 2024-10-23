import React from "react";
import Logo from "../assets/confas-logo.png"

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <img src={Logo} alt="" />
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="hover:text-purple-400">
                About
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-purple-400">
                Pricing
              </a>
            </li>
            <li>
              <a href="#speakers" className="hover:text-purple-400">
                Speakers
              </a>
            </li>
            <li>
              <a href="#schedule" className="hover:text-purple-400">
                Schedule
              </a>
            </li>
            <li>
              <a href="#partners" className="hover:text-purple-400">
                Become a partner
              </a>
            </li>
            <li>
              <a href="#partners" className="hover:text-purple-400">
                Call for papers
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-purple-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <button className="bg-black-600 hover:bg-purple-700 text-white py-2 px-4 rounded  border border-white">
            Login
          </button>
          <button className="ml-4 bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded">
            Register
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
