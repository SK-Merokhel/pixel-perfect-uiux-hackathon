import React from 'react';
import Image from 'next/image';
import clients from "../../../public/assets/Clients.png";

function Items() {
  return (
    <>
      <section className="relative bg-black w-[1366px] h-[469px]">

        {/* Content */}
        <div className="relative flex flex-col md:flex-row justify-center items-center gap-5 md:gap-[161px] z-10">
        <div className="relative mt-10">
          <Image 
            src={clients} 
            alt="Clients" 
            className="w-full h-auto" 
          />
        </div>
        </div>
      </section>
    </>
  );
}

export default Items;
