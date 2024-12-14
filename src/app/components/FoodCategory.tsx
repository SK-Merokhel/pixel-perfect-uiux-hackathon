import React from "react";
import Image from 'next/image';
import choosepic1 from "../../../public/assets/choosepic1.png"
import choosepic2 from "../../../public/assets/choosepic2.png"
import choosepic3 from "../../../public/assets/choosepic3.png"
import choosepic4 from "../../../public/assets/choosepic4.png"


function FoodCategory() {
  return (
    <>
      <section className="bg-black md:px-[135px] px-6 py-[50px]">
        <div className="flex flex-col justify-center items-center">
        <h1 className="font-greatVibes md:text-[32px] text-[24px] font-normal text-[#FF9F0D] whitespace-nowrap">
  Food Category
</h1>

          <h1 className="text-[20px] text-white md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal text-center">
            <span className="text-[#FF9F0D]">Ch</span>oose Food Item
          </h1>
        </div>

        <div className="flex justify-center items-center gap-[20px] mt-[50px] flex-wrap md:flex-nowrap">
          <div className="w-[200px] md:w-[280px] md:h-[280px] rounded-lg">
          <Image src={choosepic1} alt="Food" />
          </div>
          <div className="w-[200px] md:w-[280px] md:h-[280px] rounded-lg cursor-pointer">
          <Image src={choosepic2} alt="Food" />
          </div>
          <div className="w-[200px] md:w-[280px] md:h-[280px] rounded-lg cursor-pointer">
          <Image src={choosepic3} alt="Food" />
          </div>
          <div className="w-[200px] md:w-[280px] md:h-[280px] rounded-lg cursor-pointer">
          <Image src={choosepic4} alt="Food" />
          </div>
        </div>
      </section>
    </>
  );
}

export default FoodCategory;
