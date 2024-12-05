import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Controls mobile menu
  const [isProgramsOpen, setIsProgramsOpen] = useState(false); // Controls Programs dropdown
  const [isResourcesOpen, setIsResourcesOpen] = useState(false); // Controls Resources dropdown

  enum EImageUri {
    UxmmLogo = "/images/uxmm-logo.png",
  }

  // Toggle Functions
  const toggleProgramsDropdown = () => {
    setIsProgramsOpen(!isProgramsOpen);
    if (isResourcesOpen) setIsResourcesOpen(false);
  };

  const toggleResourcesDropdown = () => {
    setIsResourcesOpen(!isResourcesOpen);
    if (isProgramsOpen) setIsProgramsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg p-6">
      <div className="container mx-auto px-4 md:flex md:items-center md:justify-between">
        {/* Logo */}
        <div className="flex justify-between items-center py-4 md:py-0 md:mr-8">
          <a href="/" className="text-red-500 font-bold text-xl">
            <img
              src={EImageUri.UxmmLogo}
              alt="uxmm"
              className="h-auto max-w-full"
            />
          </a>
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500 md:hidden focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Centered Navigation Links */}
        <div
          className={`flex-1 md:flex md:items-center md:justify-center ${isOpen ? "block" : "hidden"}`}
        >
          <ul className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8 font-poppins text-base font-normal leading-6 text-left">
            <li>
              <a href="/" className="text-red-500 hover:text-red-600">
                Home
              </a>
            </li>
            <li>
              <a href="aboutus" className="text-gray-700 hover:text-red-500">
                About Us
              </a>
            </li>

            {/* Programs Menu Item with Click Dropdown */}
            <li className="relative">
              <button
                onClick={toggleProgramsDropdown}
                className="text-gray-700 hover:text-red-500 flex items-center focus:outline-none"
              >
                Programs
                {!isProgramsOpen ? (
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="ml-1 w-4 h-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
              {isProgramsOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 z-10 font-poppins text-base font-normal leading-6 text-left">
                  <a
                    href="/mentor"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Mentor
                  </a>
                  <a
                    href="/partner"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Partner
                  </a>
                  <a
                    href="/speaker"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Speaker
                  </a>
                  <a
                    href="/volunteer"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Volunteer
                  </a>
                </div>
              )}
            </li>

            {/* Resources Menu Item with Click Dropdown */}
            <li className="relative">
              <button
                onClick={toggleResourcesDropdown}
                className="text-gray-700 hover:text-red-500 flex items-center focus:outline-none"
              >
                Resources
                <svg
                  className="ml-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {isResourcesOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg py-2 z-10">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Guides
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Tutorials
                  </a>
                </div>
              )}
            </li>

            <li>
              <a href="#" className="text-gray-700 hover:text-red-500">
                FAQs
              </a>
            </li>

            {/* Contact Us Button for Mobile */}
            <li className="md:hidden">
              <a
                href="#"
                className="block text-center bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold py-2 px-6 rounded-full mt-4"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Button Desktop - Hidden on Mobile */}
        <div className="mt-4 md:mt-0 md:ml-8 hidden md:inline-block">
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold py-2 px-6 rounded-full"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
