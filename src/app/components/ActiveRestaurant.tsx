import React from "react";
import { CiPlay1 } from "react-icons/ci";

function ActiveRestaurant() {
  return (
    <section className="relative bg-black md:px-[135px] md:py-[120px] h-[80vh]">
      {/* Background Section */}
      <div
        className="absolute inset-0 bg-gray-300" // Fallback background color if image is unavailable
        style={{
          backgroundImage: "url('/RestaurantActiveProcess.png')", // Image path
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="z-10 flex flex-col justify-center items-center w-full h-full text-white">
          <h1 className="text-[#FF9F0D] md:text-[32px] text-[20px] font-bold text-center md:text-right">
            Restaurant Active Process
          </h1>
          <h1 className="text-[25px] md:text-[48px] font-bold md:w-[60%] text-center mt-[20px] md:mt-0 md:text-right">
            <span className="text-[#FF9F0D]">We</span> Document Every Food Bean Process until it is saved
          </h1>
          <h3 className="w-[80%] md:w-[60%] text-base text-center md:text-left mt-[20px] md:mt-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna,
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-[24px] mt-[33px]">
            <button className="border border-[#FF9F0D] w-[100px] h-[30px] md:w-[190px] md:h-[60px] rounded-[30px]">
              Read More
            </button>
            <div className="w-[60px] h-[60px] rounded-full bg-[#FF9F0D] flex justify-center items-center">
              <CiPlay1 className="h-[24px] w-[24px]" />
            </div>
            <h2 className="font-semibold text-base">Play Video</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ActiveRestaurant;
