import React from "react"; // Importing React to enable JSX syntax and component functionality.
import Image from "next/image"; // Importing the Image component from Next.js for optimized image loading.
import clients from "../../public/assets/Clients.png"; // Importing the image for clients to be displayed in the section.

function Items() {
  return (
    <>
      <section className="relative bg-black w-[1366px] h-[469px]">
        {/* 
          - relative: Positions the section relative to its normal position, allowing for absolute positioning of child elements.
          - bg-black: Sets the background color of the section to black.
          - w-[1366px]: Sets the width of the section to 1366px.
          - h-[469px]: Sets the height of the section to 469px.
        */}

        {/* Content Section */}
        <div className="relative flex flex-col md:flex-row justify-center items-center gap-5 md:gap-[161px] z-10">
          {/* 
            - relative: Applies relative positioning to the container.
            - flex: Applies a flexbox layout to the container.
            - flex-col: Arranges the items in a column on small screens.
            - md:flex-row: Changes the layout to row (horizontal) on medium and larger screens.
            - justify-center: Centers the items horizontally.
            - items-center: Centers the items vertically.
            - gap-5: Adds a 5-unit gap between the elements on small screens.
            - md:gap-[161px]: Increases the gap to 161px on medium and larger screens.
            - z-10: Ensures the content stays above other elements if they overlap.
          */}

          <div className="relative mt-10">
            {/* 
              - relative: Applies relative positioning to this div, allowing for absolute positioning of child elements.
              - mt-10: Adds a margin-top of 10 units to push the content down.
            */}

            <Image
              src={clients} // Sets the source for the image as the 'clients' image.
              alt="Clients" // Provides an alt text for accessibility.
              className="w-full h-auto" // Ensures the image takes the full width of its container and the height adjusts automatically to maintain aspect ratio.
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Items;
