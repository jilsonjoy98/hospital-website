import React from "react";
import shield from "../../assets/whoWeAre/shield.jpg";
import check from "../../assets/whoWeAre/check.png";

function Banner() {
  const features = [
    {
      label: "Hybrid Ambulatory Structure",
      icon: check,
    },
    {
      label: "Anytime Solution",
      icon: check,
    },
    {
      label: "Years of Software Expertise",
      icon: check,
    },
    {
      label: "End-to-End Automation",
      icon: check,
    },
  ];

  return (
    <div className="w-full min-h-screen py-16 ">
      <div className="w-full">
        <h2 className="text-[60px] font-overpass font-medium">
          Where Innovation <br /> Meets{" "}
          <span className="text-[#88338B]">Health Informatics</span>
        </h2>
      </div>
      <div className="w-full flex gap-2.5 ">
        <div className="w-1/2 flex items-center justify-start">
          <p className="font-normal text-[18px] leading-[29.25px] tracking-normal w-[75%] text-[#4A5565]">
            Grapes delivers a next-generation health informatics platform
            designed to unify clinical, operational, and financial intelligence
            into a single digital ecosystem. Our solutions leverage advanced
            analytics, automation, and scalable architecture to enable data
            driven decision making across hospitals. Built on deep domain
            expertise and industry compliance, we simplify complexity while
            enhancing care delivery. Empowering healthcare organizations to
            innovate, adapt, and lead in the digital era. .
          </p>
        </div>
        <div className="w-1/2 flex items-end justify-end">
          <div className="max-w-133 max-h-76 flex items-end justify-end  ">
            <img
              src={shield}
              alt=""
              className="w-full h-full object-cover rounded-[46px] overflow-hidden"
            />
          </div>
        </div>
      </div>
      <div className="w-full mt-10">
        <div className="grid grid-cols-2 gap-4 justify-center w-[50%]">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <img src={feature.icon} alt="" className="w-6 h-6" />
              <span className="text-lg font-overpass">{feature.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <button className="bg-[#101828] text-white px-6 py-3 rounded-full cursor-pointer mt-10 ">
          Schedule a Demo
        </button>
      </div>
    </div>
  );
}

export default Banner;
