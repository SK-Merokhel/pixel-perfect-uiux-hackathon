import React from "react";

function Ourchefs() {
  return (
    <>
      <section className="bg-black md:px-[135px] py-[50px]">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font-whitespace-nowrap font-greatVibes">
            Chefs
          </h1>
          <h1 className="text-[20px] text-white md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
            <span className="text-[#FF9F0D]">Me</span>et Our Chef
          </h1>
        </div>

        {/* Missing Images Explanation */}
        <div className="text-white text-center mt-6 mb-10">
          <p className="text-lg">
            Due to some technical constraints, the images of our talented chefs
            are currently unavailable. However, we still wanted to introduce you
            to them. Once the images are ready, they will be displayed here. Stay tuned!
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] mt-[50px]">
          {/* Chef 1 */}
          <div className="relative w-[200px] md:w-[305px] md:h-[280px] bg-gray-300 cursor-pointer group">
            {/* Hover effect text */}
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xl font-semibold">Chef 1</p>
            </div>
          </div>

          {/* Chef 2 */}
          <div className="relative w-[200px] md:w-[280px] md:h-[280px] bg-gray-400 cursor-pointer group">
            {/* Hover effect text */}
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xl font-semibold">Chef 2</p>
            </div>
          </div>

          {/* Chef 3 */}
          <div className="relative w-[200px] md:w-[280px] md:h-[280px] bg-gray-500 cursor-pointer group">
            {/* Hover effect text */}
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xl font-semibold">Chef 3</p>
            </div>
          </div>

          {/* Chef 4 */}
          <div className="relative w-[200px] md:w-[280px] md:h-[280px] bg-gray-600 cursor-pointer group">
            {/* Hover effect text */}
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-xl font-semibold">Chef 4</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ourchefs;
