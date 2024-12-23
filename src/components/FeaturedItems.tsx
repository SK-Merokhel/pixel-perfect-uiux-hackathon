import React from "react"; // Importing React to enable JSX syntax and component functionality.
import Image from "next/image"; // Importing the Image component from Next.js for optimized image loading.
import clients from "../../public/assets/Clients.png"; // Importing the image for clients to be displayed in the section.

function FeaturedItems() {
  return (
    <>
      <section className="relative bg-black w-full h-auto">
        {/* 
          - relative: Positions the section relative to its normal position, allowing for absolute positioning of child elements.
          - bg-black: Sets the background color of the section to black.
          - w-full: Sets the width of the section to 100% of its parent container, making it responsive.
          - h-auto: Adjusts the height of the section automatically based on its content, minimizing extra space.
          - py-8 sm:py-10 md:py-12: Adds padding to the top and bottom for all screen sizes, responsive to different screen sizes.
        */}

        {/* Content Section */}
        <div className="relative flex flex-col md:flex-row justify-center items-center">
          {/* 
            - relative: Applies relative positioning to the container.
            - flex: Applies a flexbox layout to the container.
            - flex-col: Arranges the items in a column on small screens.
            - md:flex-row: Changes the layout to row (horizontal) on medium and larger screens.
            - justify-center: Centers the items horizontally.
            - items-center: Centers the items vertically.
          */}

          <div className="relative">
            {/* 
              - relative: Applies relative positioning to this div, allowing for absolute positioning of child elements.
            */}

            <Image
              src={clients} // Sets the source for the image as the 'clients' image.
              alt="Clients" // Provides an alt text for accessibility.
              className="w-full h-auto object-contain" // Ensures the image takes the full width of its container and the height adjusts automatically to maintain aspect ratio.
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturedItems;
