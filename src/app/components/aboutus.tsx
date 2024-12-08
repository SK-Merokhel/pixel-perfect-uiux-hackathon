import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

import aboutus1 from "../../../public/assets/aboutus1.jpeg";
import aboutus2 from "../../../public/assets/aboutus2.jpeg";
import aboutus3 from "../../../public/assets/aboutus3.jpeg";

function AboutUs() {
  return (
    <section 
      id="about"
      className="bg-black px-4 sm:px-6 md:px-[135px] py-[50px] flex flex-col md:flex-row md:items-center gap-10"
    >
      {/* Text Section */}
      <div className="text-white w-full md:w-[50%]">
        <h1 className="text-[24px] md:text-[32px] font-normal text-[#FF9F0D] font-greatVibes">
          About Us
        </h1>

        <h1 className="text-[20px] md:text-[40px] lg:text-[50px] font-bold leading-snug">
          <span className="text-[#FF9F0D]">We</span> Create the Best Foody Product
        </h1>

        <p className="text-[12px] sm:text-[14px] md:text-[16px] font-normal mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>

        <ul className="mt-6">
          <li className="flex items-start gap-2 text-[12px] sm:text-[14px] md:text-[16px] font-normal mt-6">
            <FaCheck className="text-[#FF9F0D] mt-1" />
            Lacus nisi, et ac dapibus sit eu velit in consequat.
          </li>
          <li className="flex items-start gap-2 text-[12px] sm:text-[14px] md:text-[16px] font-normal mt-6">
            <FaCheck className="text-[#FF9F0D] mt-1" />
            Quisque diam pellentesque bibendum non dui volutpat fringilla.
          </li>
          <li className="flex items-start gap-2 text-[12px] sm:text-[14px] md:text-[16px] font-normal mt-6">
            <FaCheck className="text-[#FF9F0D] mt-1" />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
        </ul>

        <div className="flex justify-start mt-8">
          <button className="bg-[#FF9F0D] text-white py-2 px-6 sm:py-3 sm:px-8 rounded-full text-sm sm:text-base md:text-lg hover:bg-yellow-800 transition-all">
            See More
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[50%]">
        <Image 
          src={aboutus1} 
          alt="About Us Image 1" 
          className="rounded-lg object-cover w-full h-[250px] sm:h-[350px] md:h-[450px]" 
        />
        
        <div className="grid grid-cols-2 gap-4 mt-6">
          <Image 
            src={aboutus2} 
            alt="About Us Image 2" 
            className="rounded-lg object-cover w-full h-[150px] sm:h-[200px] md:h-[250px]" 
          />
          <Image 
            src={aboutus3} 
            alt="About Us Image 3" 
            className="rounded-lg object-cover w-full h-[150px] sm:h-[200px] md:h-[250px]" 
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
