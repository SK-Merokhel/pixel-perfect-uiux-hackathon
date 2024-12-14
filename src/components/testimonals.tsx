import React from "react";

import reviewer_dp from "../../public/assets/reviewer_dp.png"
import star_rating from "../../public/assets/star_rating.png"
import dullstart_rating from "../../public/assets/dullstart_rating.png"
import raing_count from "../../public/assets/raing_count.png"

import Image from "next/image";

function Testimonials() {
  return (
    <>
      <section className="bg-black px-5 md:px-[135px] py-[120px]">
        <div>
          <h2
            className="text-[#FF9F0D] text-[20px] md:text-[32px] whitespace-nowrap md:whitespace-normal
                font-greatVibes font-bold"
          >
            Testimonials
          </h2>
          <h2 className="text-white font-bold text-[25px] md:text-[48px] whitespace-nowrap md:whitespace-normal">
            What our client are saying
          </h2>
        </div>



        <div className="w-[100%]  flex justify-center items-center mt-[122.2px]">
        <div className="bg-white w-[600px]  md:w-[868.47px]  flex flex-col justify-center items-center relative rounded">
  <div className="flex flex-col justify-center items-center w-[100%] md:w-[70%]">
    {/* Div For logo Image */}
    <div className="absolute top-0 transform -translate-y-1/2">
      <Image
        src={reviewer_dp}
        alt="review"
        className="md:w-[132px] md:h-[133px]"
      />
    </div>
    <Image src={raing_count} alt="99" className="mt-[82px]" />
    <h3 className="mt-[20px] text-[10px] md:text-[18px] font-normal text-center text-[#828282]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
      diam pellentesque bibendum non dui volutpat fringilla bibendum.
      Urna, elit augue urna, vitae feugiat pretium donec id elementum.
      Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus
      sit eu velit in consequat.
    </h3>

    {/* Rating */}
    <div className="flex mt-[32.09px]">
      <Image src={star_rating} alt="star" />
      <Image src={star_rating} alt="star" />
      <Image src={star_rating} alt="star" />
      <Image src={star_rating} alt="star" />
      <Image src={dullstart_rating} alt="star" />
    </div>

    <h2 className="mt-[15.9px] text-[14px] md:text-[24px] font-bold">Alamin Hasan</h2>
    <p className="my-[15.9px] text-[10px] md:text-[16px] font-normal text-[#828282]">Food Specialist</p>
  </div>
</div>

        </div>
      </section>
    </>
  );
}

export default Testimonials;