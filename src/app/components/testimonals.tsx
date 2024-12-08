import React from 'react';

function Testimonials() {
  return (
    <>
      <section className="bg-black px-5 md:px-[135px] py-[120px]">
        <div className="text-center mb-8">
          <h2 className="text-[#FF9F0D] text-[20px] md:text-[32px] whitespace-nowrap md:whitespace-normal">
            Testimonials
          </h2>
          <h2 className="text-white font-bold text-[25px] md:text-[48px] whitespace-nowrap md:whitespace-normal">
            What Our Clients Are Saying
          </h2>
        </div>

        {/* Image or Placeholder Section */}
        <div className="w-full flex justify-center items-center mt-[40px]">
          {/* Placeholder if no image is available */}
          <div className="w-full md:w-[800px] h-[500px] bg-gray-300 flex justify-center items-center text-white">
            <p className="text-xl">Image unavailable. Stay tuned for an updated version.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
