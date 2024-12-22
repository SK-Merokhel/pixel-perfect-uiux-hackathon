import React from "react"; // Importing React to enable JSX syntax and component functionality.
import Image from "next/image"; // Importing the Image component from Next.js for optimized image loading.

// Importing the experience image for later use
import experience from "../assets/30year.png";

const Home = () => {
  return (
    <>
      {/* Left Section (currently commented out) */}
      <section className="flex flex-row bg-black px-[135px]">
        {/* 
          - flex: Applies flexbox layout to the section, arranging its children (currently left and right sections) in a row.
          - bg-black: Sets the background color of the section to black.
          - px-[135px]: Adds horizontal padding of 135px on both sides to provide spacing.
        */}
        
        {/* The commented out grid system with images could be used for a gallery or another section with a 3x4 grid layout. 
          - This section uses Tailwind's grid classes like grid-rows-3, grid-cols-4, and col-span for arranging the images.
        */}
        
        {/* Right Section */}
        <div className="bg-black">
          {/* Container for the content on the right */}
          <div className="mt-[50px]">
            {/* Title and Subtitle */}
            <h3 className="text-[#FF9F0D] text-2xl mb-[35px]">
              {/* 
                - text-[#FF9F0D]: Sets the text color to the orange color.
                - text-2xl: Sets the font size to 2xl.
                - mb-[35px]: Adds a margin-bottom of 35px to space the elements below.
              */}
              Why Choose us
            </h3>
            <h1 className="text-white text-6xl font-bold mb-7">
              {/* 
                - text-white: Sets the text color to white.
                - text-6xl: Sets the font size to 6xl.
                - font-bold: Applies bold font weight.
                - mb-7: Adds a margin-bottom of 7 units to space the paragraph below.
              */}
              <span className="text-[#FF9F0D]">Ex</span>tra ordinary taste
              <br /> And Experienced{" "}
            </h1>
            <p className="text-gray-200 mb-14 text-xl">
              {/* 
                - text-gray-200: Sets the text color to a light gray.
                - mb-14: Adds a margin-bottom of 14 units to space the next section below.
                - text-xl: Sets the font size to xl.
              */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam
              <br /> pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit <br /> augue urna, vitae feugiat pretium donec id
              elementum. Ultrices mattis <br /> sed vitae mus risus. Lacus nisi,
              et ac dapibus sit eu velit in <br /> consequat.
            </p>

            <div className="gap-10 flex mb-5">
              {/* 
                - gap-10: Adds a gap of 10 units between the flex items.
                - flex: Uses flexbox to arrange the child elements in a row by default.
                - mb-5: Adds a margin-bottom of 5 units to space the next section below.
              */}

              {/* Food Categories */}
              <section className="bg-yellow-400 text-white p-12">
                {/* 
                  - bg-yellow-400: Sets the background color of the section to yellow.
                  - text-white: Sets the text color to white for contrast with the yellow background.
                  - p-12: Adds padding of 12 units on all sides of the section.
                */}
                Fast Food
              </section>
              <section className="bg-yellow-400 text-white p-12">
                {/* Lunch category */}
                Lunch
              </section>
              <section className="bg-yellow-400 text-white p-12">
                {/* Dinner category */}
                Dinner
              </section>
            </div>

            {/* Displaying the Experience image */}
            <Image
              src={experience} // Uses the imported experience image for displaying.
              alt="experience" // Provides an alt text for accessibility.
              width={374} // Specifies the width of the image in pixels.
              height={93} // Specifies the height of the image in pixels.
            ></Image>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
