import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

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
          className={`${isNavOpen ? "translate-x-0" : "-translate-x-full"} 
          transition-transform duration-300 ease-in-out bg-red-700 text-white w-full md:w-64 fixed h-screen z-40`}
          style={{ position: "absolute" }}
        >
          <nav className="flex flex-col h-full pt-20 w-full">
            <div className="text-3xl font-bold mb-10">introduction</div>

            <div className="text-3xl font-bold mb-10">Skills</div>

            <div className="experience-container-mobile">
              <div className="text-3xl font-bold pb-2">experiences</div>
              <div className="nav-content-mobile pl-24 space-y-2">
                <div className="text-xl">Ascend</div>
                <div className="text-xl">CP Axtra</div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
