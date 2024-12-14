import React from "react";

import Image from "next/image";

import Chefcard1 from  "../../public/assets/Chefcard1.png"
import Chefcard2 from  "../../public/assets/Chefcard2.png"
import Chefcard3 from  "../../public/assets/Chefcard3.png"
import Chefcard4 from  "../../public/assets/Chefcard4.png"

 
function MeetShef() {
  return (
    <>
      <section className="bg-black md:px-[135px]   py-[50px]">

        <div className="flex flex-col justify-center items-center">
      <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font whitespace-nowrap font-greatVibes">
      Chefs
        </h1>
        <h1 className="text-[20px] text-white md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
          <span className="text-[#FF9F0D]">Me</span>et Our Chef
        </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] mt-[50px]">
          <Image src={Chefcard1} alt="" className="w-[200px] md:w-[305px] md:h-[280px] cursor-pointer"/>
          <Image src={Chefcard2} alt="" className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer" />
          <Image src={Chefcard3} alt="" className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer" />
          <Image src={Chefcard4} alt="" className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer" />
        </div>
      </section>
    </>
  );
}

export default MeetShef;