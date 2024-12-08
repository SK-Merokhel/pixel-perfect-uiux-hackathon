import React from "react";


// 🚫 Image Imports (Commented for Now) 🚫
// import extra1 from "../assets/extra1.png";
// import extra2 from "../assets/extra2.png";
// import extra3 from "../assets/extra3.png";
// import extra4 from "../assets/extra4.png";
// import extra5 from "../assets/extra5.png";
// import extra6 from "../assets/extra6.png";

// import experience from "../assets/30year.png";

const Home = () => {
  return (
    <>
      {/* Full Section */}
      <section className="bg-black px-4 sm:px-6 md:px-[135px] py-10 flex flex-col-reverse md:flex-row md:items-center gap-10">
        
        {/* Left Section (Images) */}
        <div className="w-full md:w-[50%]">
          <div className="grid grid-cols-2 grid-rows-3 gap-2">
            <div className="col-span-2 row-span-1">
              {/* <Image 
                src={extra1} 
                alt="Tacos" 
                className="object-cover w-full h-[150px] sm:h-[200px] md:h-[300px] rounded-lg" 
              /> */}
            </div>

            <div className="col-span-1 row-span-1">
              {/* <Image 
                src={extra2} 
                alt="Burger" 
                className="object-cover w-full h-[150px] sm:h-[200px] md:h-[150px] rounded-lg" 
              /> */}
            </div>

            <div className="col-span-1 row-span-1">
              {/* <Image 
                src={extra3} 
                alt="Fried Food" 
                className="object-cover w-full h-[150px] sm:h-[200px] md:h-[150px] rounded-lg" 
              /> */}
            </div>

            <div className="col-span-2 row-span-1">
              {/* <Image 
                src={extra6} 
                alt="Burger and Fries" 
                className="object-cover w-full h-[150px] sm:h-[200px] md:h-[200px] rounded-lg" 
              /> */}
            </div>
          </div>
        </div>

        {/* Right Section (Text) */}
        <div className="w-full md:w-[50%]">
          <h3 className="text-[#FF9F0D] text-xl sm:text-2xl mb-4">
            Why Choose Us
          </h3>

          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6">
            <span className="text-[#FF9F0D]">Ex</span>traordinary Taste
            <br /> And Experience
          </h1>

          <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
          </p>

          <div className="flex flex-wrap justify-start gap-4">
            <div className="bg-yellow-400 text-black text-center py-4 px-6 rounded-lg shadow-md w-[120px] md:w-[150px]">
              Fast Food
            </div>

            <div className="bg-yellow-400 text-black text-center py-4 px-6 rounded-lg shadow-md w-[120px] md:w-[150px]">
              Lunch
            </div>

            <div className="bg-yellow-400 text-black text-center py-4 px-6 rounded-lg shadow-md w-[120px] md:w-[150px]">
              Dinner
            </div>
          </div>

          {/* Experience Image */}
          {/* 
          <Image 
            src={experience} 
            alt="Experience" 
            width={374} 
            height={93} 
            className="mt-10 w-[200px] sm:w-[300px] md:w-[374px]" 
          /> 
          */}
        </div>
      </section>
    </>
  );
};

export default Home;
