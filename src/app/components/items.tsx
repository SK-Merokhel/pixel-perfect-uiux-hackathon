import React from 'react';
import Image from 'next/image';

import andaywalaburger from "../../../public/assets/andaywalaburger.jpeg";
import fork from "../../../public/assets/fork.jpeg";
import pizzaaa from "../../../public/assets/pizzaaa.jpeg";
import chefcap from "../../../public/assets/chefcap.jpeg";

function Items() {
  return (
    <>
      <section className="relative bg-black md:px-[135px] px-6 py-10 md:py-[120px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/backgroundwithfork.jpeg')", // Ensure the path is correct
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>

        {/* Content */}
        <div className="relative flex flex-col md:flex-row justify-center items-center gap-5 md:gap-[161px] z-10">
          <div className="w-full sm:w-[218px] md:w-[250px] h-auto text-white flex flex-col justify-center items-center">
            <Image src={chefcap} alt="Chef Cap" className="w-full h-auto" />
            <h2 className="text-[15px] font-bold mt-[24px]">Professional Chefs</h2>
            <h2 className="mt-[20px] text-[30px] md:text-[40px] font-bold">420</h2>
          </div>

          <div className="w-full sm:w-[218px] md:w-[250px] h-auto text-white flex flex-col justify-center items-center">
            <Image src={andaywalaburger} alt="Burger and Drink" className="w-full h-auto" />
            <h2 className="text-[15px] font-bold mt-[24px]">Burger and Drink</h2>
            <h2 className="mt-[20px] text-[30px] md:text-[40px] font-bold">420</h2>
          </div>

          <div className="w-full sm:w-[218px] md:w-[250px] h-auto text-white flex flex-col justify-center items-center">
            <Image src={fork} alt="Fork" className="w-full h-auto" />
            <h2 className="text-[15px] font-bold mt-[24px]">Fork</h2>
            <h2 className="mt-[20px] text-[30px] md:text-[40px] font-bold">420</h2>
          </div>

          <div className="w-full sm:w-[218px] md:w-[250px] h-auto text-white flex flex-col justify-center items-center">
            <Image src={pizzaaa} alt="Pizza Slice" className="w-full h-auto" />
            <h2 className="text-[15px] font-bold mt-[24px]">Pizza Slice</h2>
            <h2 className="mt-[20px] text-[30px] md:text-[40px] font-bold">420</h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default Items;
