import React from 'react'
import logo from "../../assets/nav/logo.png"

function Navbar() {


    const navButtons = [
        { label: "Who we're", link: "/" },
        { label: "Solutions", link: "/solutions" },
        { label: "Plans & Pricing", link: "/plans-pricing" },
        { label: "Services", link: "/services" },
        { label: "About Grapes", link: "/about" },

    ];

  return (
    <nav className="container mx-auto px-4">
      <div className="flex items-center justify-between">
        <div className="w-30 h-auto">
          <img
            src={logo}
            alt="Hospital Logo"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex gap-x-12">
          {navButtons.map((button, index) => (
            <a
              key={index}
              href={button.link}
              className="text-[#4A5565] hover:text-[#88338B] font-inter font-normal text-[14px] "
            >
              {button.label}
            </a>
          ))}
        </div>
        <div>
          <button className="bg-[linear-gradient(90deg,#F3E8FF_0%,#FAF5FF_100%)]  text-[#88338B] px-4 py-2  hover:text-white hover:bg-none hover:bg-[#88338B] rounded-full transition-all duration-200 ease-in-out curser-pointer hover:shadow-sm active:scale-95 font-normal text-[14px] ">
            Schedule a Demo
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar