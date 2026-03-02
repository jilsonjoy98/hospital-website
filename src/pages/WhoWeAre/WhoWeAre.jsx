import React from "react";
import Banner from "../../components/whoWeAre/Banner";
import Subtract from "../../assets/whoWeAre/Subtract.png";

function WhoWeAre() {
  return (
    <div className="container mx-auto px-4">
      <div className="relative overflow-hidden">
        {/* decorative ring behind the image on the right side */}
        {/* <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-24 h-24 border-4 border-indigo-300 rounded-full z-0" /> */}
        <img
          src={Subtract}
          alt="Subtract"
          className="absolute top-5 left-280 w-200 h-00 object-cover z-10 overflow-hidden"
        />
        <div className="relative z-20">
          <Banner />
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
