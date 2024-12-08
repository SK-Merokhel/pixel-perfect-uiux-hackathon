import React from "react";
import Image from "next/image";
import hero_plate from "../../../public/assets/hero_plate.jpeg"

// import hero from "/hero.png";

function Hero() {
  return (
    <section className="bg-black px-3 md:px-[80px] lg:px-[135px] flex flex-col justify-evenly md:flex-row md:items-center py-[50px]">
      {/* Heading */}
      <div className="text-white w-full md:w-[50%]">
        <h1 className="text-[20px] md:text-[28px] lg:text-[32px] font-normal text-[#FF9F0D] whitespace-nowrap text-center md:text-left">
          Its Quick & Amusing!
        </h1>

        <h1 className="text-[24px] md:text-[40px] lg:text-[50px] font-bold whitespace-normal mt-3 text-center md:text-left">
          <span className="text-[#FF9F0D]">Th</span>e Art of Speed Food Quality
        </h1>

        <p className="text-[12px] md:text-[14px] lg:text-[16px] font-normal mt-4 text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-6">
          <button className="bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[160px] md:h-[50px] lg:w-[190px] lg:h-[60px] rounded-[40px] hover:bg-yellow-800">
            See More
          </button>
        </div>
      </div>
{/* image */}
<div className="sm-w-full md:w-[30%] lg:w-[30%] pl-7 justify-center items-center flex flex-row">
  <Image src= {hero_plate} alt="hero_plate" 
  className="w-50 h-auto shadow-md "/>


</div>  
    </section>
  );
}

export default Hero;