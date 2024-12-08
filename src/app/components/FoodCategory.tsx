import React from "react";

function FoodCategory() {
  return (
    <>
      <section className="bg-black md:px-[135px] px-6 py-[50px]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font-whitespace-nowrap font-greatVibes">
            Food Category
          </h1>
          <h1 className="text-[20px] text-white md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal text-center">
            <span className="text-[#FF9F0D]">Ch</span>oose Food Item
          </h1>
        </div>

        <div className="flex justify-center items-center gap-[20px] mt-[50px] flex-wrap md:flex-nowrap">
          <div className="w-[200px] md:w-[280px] md:h-[280px] bg-gray-400 rounded-lg">
            {/* Placeholder for food1 */}
          </div>
          <div className="w-[200px] md:w-[280px] md:h-[280px] bg-gray-500 rounded-lg cursor-pointer">
            {/* Placeholder for food2 */}
          </div>
          <div className="w-[200px] md:w-[280px] md:h-[280px] bg-gray-600 rounded-lg cursor-pointer">
            {/* Placeholder for food3 */}
          </div>
          <div className="w-[200px] md:w-[280px] md:h-[280px] bg-gray-700 rounded-lg cursor-pointer">
            {/* Placeholder for food4 */}
          </div>
        </div>
      </section>
    </>
  );
}

export default FoodCategory;
