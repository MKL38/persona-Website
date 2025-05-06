import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const navRef = useRef(null); // Reference to the navbar

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsNavOpen(false); // Close the navbar if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="z-50">
        {/* Navigation Toggle Button (visible on all stages) */}
        <button
          className="fixed top-4 left-4 z-50 bg-red-700 text-white p-2 rounded-md"
          onClick={toggleNav}
        >
          {isNavOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Red Navigation Bar */}
        <div
          ref={navRef} // Attach the ref to the navbar
          className={`${isNavOpen ? "translate-x-0" : "-translate-x-full"} 
          transition-transform duration-300 ease-in-out bg-red-700 text-white w-full md:w-64 fixed top-0 left-0 h-screen z-40`}
        >
          <nav className="flex flex-col h-full pt-20 w-full">
            <div className="text-3xl font-bold mb-10">
              <a href="#introduction-navi">introduction</a>
            </div>

            <div className="text-3xl font-bold mb-10">
              <a href="#skills-navi">Skills</a>
            </div>

            <div className="experience-container-mobile">
              <div className="text-3xl font-bold pb-2">
                <a href="#experience-navi">experiences</a>
              </div>
              <div className="nav-content-mobile pl-24 space-y-2">
                <div className="text-xl">
                  <a href="#project-record">Ascend</a>
                </div>
                <div className="text-xl">
                  <a href="#project-record">CP Axtra</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
