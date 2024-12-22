import React from "react";
import Image from "next/image"; // Importing Next.js Image component for optimized image loading
import hero_plate from "../../public/assets/hero_plate.png"; // Importing the hero image used in the section

function Hero() {
  return (
    <section className="bg-black px-3 md:px-[135px] flex flex-col justify-evenly md:flex-row md:items-center py-[50px]">
      {/* Main section container:
        - bg-black: Sets the background color to black.
        - px-3: Adds horizontal padding (space on left and right) on smaller screens.
        - md:px-[135px]: Increases horizontal padding for medium and larger screens (md = min width 768px).
        - flex: Enables Flexbox layout, making items inside this container flexible.
        - flex-col: Stacks items vertically on smaller screens (column layout).
        - justify-evenly: Distributes space evenly between, around, and inside the items.
        - md:flex-row: Changes to horizontal layout on medium screens and larger (row layout).
        - md:items-center: Aligns items vertically at the center for medium and larger screens.
        - py-[50px]: Adds vertical padding (space on top and bottom).
      */}

      {/* Text Content Section */}
      <div className="text-white w-full md:w-[50%]">
        {/* 
          - text-white: Makes all text inside this container white for visibility on a dark background.
          - w-full: Sets the width of this container to 100% of the parent (full width on smaller screens).
          - md:w-[50%]: Reduces width to 50% for medium and larger screens, sharing space with the image.
        */}

        {/* Main Heading */}
        <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font-greatVibes whitespace-nowrap">
          {/* 
            - md:text-[32px]: Sets a larger font size (32px) on medium screens and up.
            - text-[24px]: Default smaller font size (24px) for smaller screens.
            - font-normal: Normal font weight, not bold or italic.
            - text-[#FF9F0D]: Changes text color to a custom orange shade (#FF9F0D).
            - font-greatVibes: Applies a custom font called "Great Vibes" (should be included in your project).
            - whitespace-nowrap: Prevents line breaks; the text stays on a single line.
          */}
          Its Quick & Amusing!
        </h1>

        {/* Subheading */}
        <h1 className="text-[20px] md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
          {/* 
            - text-[20px]: Smaller text size (20px) for smaller screens.
            - md:text-[50px]: Larger text size (50px) for medium and larger screens.
            - font-bold: Bold font weight for emphasis.
            - whitespace-nowrap: Prevents text from wrapping on smaller screens.
            - md:whitespace-normal: Allows normal wrapping for medium and larger screens.
          */}
          <span className="text-[#FF9F0D]">Th</span>e Art of speed food Quality
          {/* 
            - text-[#FF9F0D]: Highlights the "Th" part of the text in orange for visual interest.
          */}
        </h1>

        {/* Description */}
        <p className="text-[10px] md:text-[16px] font-normal">
          {/* 
            - text-[10px]: Small font size for compact content on smaller screens.
            - md:text-[16px]: Larger font size for better readability on medium and larger screens.
            - font-normal: Regular font weight for standard text.
          */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
          pharetra dictum neque massa congue
          {/* Placeholder text for description; replace with real content. */}
        </p>

        {/* Button Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* 
            - flex: Creates a flexbox container for buttons.
            - flex-col: Stacks buttons vertically on smaller screens.
            - md:flex-row: Arranges buttons horizontally for medium and larger screens.
            - items-center: Centers buttons horizontally for smaller screens.
            - md:items-start: Aligns buttons to the start (left) for medium and larger screens.
          */}

          <button className="bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[190px] md:h-[60px] rounded-[40px] mt-[32px] hover:bg-yellow-800">
            {/* 
              - bg-[#FF9F0D]: Sets button background color to orange.
              - text-white: Makes button text white.
              - w-[100px] h-[30px]: Sets width and height for small screens.
              - md:w-[190px] md:h-[60px]: Increases size for medium and larger screens.
              - rounded-[40px]: Adds rounded corners (circular appearance).
              - mt-[32px]: Adds space above the button.
              - hover:bg-yellow-800: Changes background color when hovering.
            */}
            See More
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-[50px] md:mt-0 relative">
        {/* 
          - mt-[50px]: Adds top margin on smaller screens to separate the image from text content.
          - md:mt-0: Removes the margin for medium and larger screens to align with text.
          - relative: Prepares this container for positioning child elements, like overlays (if needed).
        */}
        <Image 
          src={hero_plate} // Image source, imported from local assets.
          alt="Hero Image" // Describes the image for accessibility and SEO.
          className="rounded-lg border-none" // Styling: Rounded corners, no border.
        />
      </div>
    </section>
  );
}

export default Hero; // Exporting the Hero component for use in other parts of the app.
