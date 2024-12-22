"use client"; 
// Ensures this component is rendered and executed on the client side, allowing interactive features and dynamic rendering.

import React from "react"; // Importing React to use JSX and functional component syntax.
import reviewer_dp from "../../public/assets/reviewer_dp.png"; // Importing the image of the reviewer's display picture.
import star_rating from "../../public/assets/star_rating.png"; // Importing the full star image for rating.
import dullstart_rating from "../../public/assets/dullstart_rating.png"; // Importing the dull (empty) star image for partial ratings.
import raing_count from "../../public/assets/raing_count.png"; // Importing the image displaying the rating count.

import Image from "next/image"; // Importing Next.js Image component for optimized image rendering.

function Testimonials() {
  return (
    <>
      {/* SECTION FOR TESTIMONIALS */}
      <section className="bg-black px-5 md:px-[135px] py-[120px]">
        {/* 
          - bg-black: Sets background color to black.
          - px-5: Adds padding of 5 units on the left and right sides for small screens.
          - md:px-[135px]: Increases the padding to 135px on medium screens and above for better spacing.
          - py-[120px]: Adds padding on the top and bottom for visual separation from other sections.
        */}

        {/* SECTION HEADER */}
        <div>
          <h2
            className="text-[#FF9F0D] text-[20px] md:text-[32px] whitespace-nowrap md:whitespace-normal font-greatVibes font-bold"
          >
            {/* Main Heading: Testimonials with an orange color */}
            Testimonials
          </h2>
          <h2 className="text-white font-bold text-[25px] md:text-[48px] whitespace-nowrap md:whitespace-normal">
            {/* Subtitle: What our clients are saying */}
            What our client are saying
          </h2>
        </div>

        {/* CONTAINER FOR THE TESTIMONIAL CARD */}
        <div className="w-[100%] flex justify-center items-center mt-[122.2px]">
          {/* 
            - w-[100%]: Full width of the container.
            - flex justify-center items-center: Centers the testimonial card horizontally and vertically.
            - mt-[122.2px]: Adds margin-top for spacing between the section header and the card.
          */}

          {/* TESTIMONIAL CARD */}
          <div className="bg-white w-[600px] md:w-[868.47px] flex flex-col justify-center items-center relative rounded">
            {/* 
              - bg-white: Sets the background color of the card to white.
              - w-[600px]: Fixed width of 600px for small screens.
              - md:w-[868.47px]: Adjusted width for medium screens and above.
              - flex flex-col: Uses Flexbox to arrange items in a column.
              - justify-center items-center: Vertically and horizontally centers the content.
              - relative: Allows absolute positioning of elements inside the card, such as the reviewer's image.
              - rounded: Applies rounded corners to the card for a smooth appearance.
            */}

            {/* REVIEWER IMAGE */}
            <div className="absolute top-0 transform -translate-y-1/2">
              {/* 
                - absolute: Positions the image absolutely within the card container.
                - top-0: Aligns the image to the top of the card.
                - transform -translate-y-1/2: Vertically positions the image to float above the content by half its height.
              */}
              <Image
                src={reviewer_dp}
                alt="review"
                className="md:w-[132px] md:h-[133px]" // Adjusts the size of the image for medium screens and above.
              />
            </div>

            {/* RATING COUNT IMAGE */}
            <Image src={raing_count} alt="99" className="mt-[82px]" />
            {/* 
              - mt-[82px]: Adds margin-top to create space between the image and the rating count.
              - Displays the rating count image indicating the number of ratings.
            */}

            {/* REVIEW DESCRIPTION */}
            <h3 className="mt-[20px] text-[10px] md:text-[18px] font-normal text-center text-[#828282]">
              {/* 
                - mt-[20px]: Adds margin-top to the description.
                - text-[10px] md:text-[18px]: Sets the font size for small screens (10px) and medium screens (18px).
                - font-normal: Applies normal font weight to the text.
                - text-center: Centers the text horizontally.
                - text-[#828282]: Sets the text color to a grayish tone for readability.
              */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus
              sit eu velit in consequat.
            </h3>

            {/* STAR RATING */}
            <div className="flex mt-[32.09px]">
              {/* 
                - flex: Aligns the stars horizontally in a row.
                - mt-[32.09px]: Adds margin-top to separate the stars from the testimonial description.
              */}
              <Image src={star_rating} alt="star" />
              <Image src={star_rating} alt="star" />
              <Image src={star_rating} alt="star" />
              <Image src={star_rating} alt="star" />
              <Image src={dullstart_rating} alt="star" />
              {/* 
                - Displays a set of stars with full stars for ratings and a dull star for partial ratings.
                - Each <Image> component represents one star.
              */}
            </div>

            {/* REVIEWER NAME */}
            <h2 className="mt-[15.9px] text-[14px] md:text-[24px] font-bold">
              Alamin Hasan
              {/* 
                - mt-[15.9px]: Adds margin-top for spacing between stars and name.
                - text-[14px] md:text-[24px]: Sets the font size for the name, 14px for small screens and 24px for larger screens.
                - font-bold: Applies bold font weight to make the name stand out.
              */}
            </h2>

            {/* REVIEWER POSITION */}
            <p className="my-[15.9px] text-[10px] md:text-[16px] font-normal text-[#828282]">
              Food Specialist
              {/* 
                - my-[15.9px]: Adds vertical margin for spacing.
                - text-[10px] md:text-[16px]: Font size of 10px for small screens and 16px for larger screens.
                - font-normal: Normal font weight for the position text.
                - text-[#828282]: Sets the text color to gray.
              */}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
