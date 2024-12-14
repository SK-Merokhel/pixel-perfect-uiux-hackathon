import React from "react";
import Image from "next/image";
import hero_plate from "../../public/assets/hero_plate.png";

function Hero() {
  return (
    <section className="bg-black px-3 md:px-[135px] flex flex-col justify-evenly md:flex-row md:items-center py-[50px]">
      {/* Heading */}
      <div className="text-white w-full md:w-[50%]">
        <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font-greatVibes whitespace-nowrap">
          Its Quick & Amusing!
        </h1>

        <h1 className="text-[20px] md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
          <span className="text-[#FF9F0D]">Th</span>e Art of speed food Quality
        </h1>

        <p className="text-[10px] md:text-[16px] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
          pharetra dictum neque massa congue
        </p>

        <div className="flex flex-col md:flex-row items-center md:items-start">
          <button className="bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[190px] md:h-[60px] rounded-[40px] mt-[32px] hover:bg-yellow-800">
            See More
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="mt-[50px] md:mt-0 relative">
        <Image 
          src={hero_plate} 
          alt="Hero Image" 
          className="rounded-lg border-none"  // Remove any border if there is one and no background
        />
      </div>
    </section>
  );
}

export default Hero;
