import React from "react"; 
// Importing React to use JSX and functional component syntax.

import Image from "next/image"; 
// Importing Next.js Image component for optimized image rendering.

import Chefcard1 from  "../../public/assets/Chefcard1.png"; 
import Chefcard2 from  "../../public/assets/Chefcard2.png"; 
import Chefcard3 from  "../../public/assets/Chefcard3.png"; 
import Chefcard4 from  "../../public/assets/Chefcard4.png"; 
// Importing the chef images for the chef cards displayed on the page.

function MeetShef() {
  return (
    <>
      <section className="bg-black md:px-[135px] py-[50px]">
        {/* 
          - bg-black: Sets the background color to black for the section.
          - md:px-[135px]: Adds padding of 135px on the left and right sides on medium screens and above.
          - py-[50px]: Adds vertical padding (50px) for top and bottom spacing.
        */}

        {/* HEADER SECTION */}
        <div className="flex flex-col justify-center items-center">
          {/* 
            - flex flex-col: Aligns the header elements in a column.
            - justify-center items-center: Centers the header elements both horizontally and vertically.
          */}
          <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font whitespace-nowrap font-greatVibes">
            {/* 
              - md:text-[32px] text-[24px]: Font size of 32px on medium screens and 24px on smaller screens.
              - text-[#FF9F0D]: Text color is set to orange.
              - font-normal: Applies normal font weight to the heading.
              - font-greatVibes: Applies the custom 'Great Vibes' font.
            */}
            Chefs
          </h1>
          <h1 className="text-[20px] text-white md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
            {/* 
              - text-[20px] md:text-[50px]: Font size of 20px on small screens and 50px on larger screens.
              - text-white: Sets text color to white.
              - font-bold: Makes the text bold.
              - whitespace-nowrap md:whitespace-normal: Prevents text from wrapping on small screens and allows it on larger screens.
            */}
            <span className="text-[#FF9F0D]">Me</span>et Our Chef
          </h1>
        </div>

        {/* CHEF CARDS SECTION */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-[20px] mt-[50px]">
          {/* 
            - flex flex-col: Stacks the chef cards vertically by default.
            - md:flex-row: Arranges the chef cards in a row on medium screens and above.
            - justify-center items-center: Centers the cards horizontally and vertically.
            - gap-[20px]: Adds a 20px gap between the cards for spacing.
            - mt-[50px]: Adds margin-top to create space between the header and the chef cards.
          */}

          {/* CHEF CARD 1 */}
          <Image 
            src={Chefcard1} 
            alt="Chef 1" 
            className="w-[200px] md:w-[305px] md:h-[280px] cursor-pointer"
          />
          {/* 
            - w-[200px]: Sets width of the image to 200px on small screens.
            - md:w-[305px] md:h-[280px]: Adjusts the width and height of the image to 305px and 280px respectively on medium screens and above.
            - cursor-pointer: Changes the cursor to a pointer when hovering over the image, indicating it's clickable.
          */}

          {/* CHEF CARD 2 */}
          <Image 
            src={Chefcard2} 
            alt="Chef 2" 
            className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer" 
          />
          {/* Same styling and functionality as Chefcard1 */}

          {/* CHEF CARD 3 */}
          <Image 
            src={Chefcard3} 
            alt="Chef 3" 
            className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer" 
          />
          {/* Same styling and functionality as Chefcard1 */}

          {/* CHEF CARD 4 */}
          <Image 
            src={Chefcard4} 
            alt="Chef 4" 
            className="w-[200px] md:w-[280px] md:h-[280px] cursor-pointer" 
          />
          {/* Same styling and functionality as Chefcard1 */}
        </div>
      </section>
    </>
  );
}

export default MeetShef;
