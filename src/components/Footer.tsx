import React from "react"; // Importing React to enable JSX syntax and component functionality.
import Image from "next/image"; // Importing the Next.js Image component for optimized image handling.
import Link from "next/link"; // Importing Link for client-side navigation between pages.

import footer1 from "../../public/assets/footer1.png"; // Importing image for recent post 1.
import footer2 from "../../public/assets/footer2.png"; // Importing image for recent post 2.
import footer3 from "../../public/assets/footer3.png"; // Importing image for recent post 3.

import { PiClockClockwiseBold } from "react-icons/pi"; // Importing clock icon from react-icons.
import { FaFacebookF } from "react-icons/fa"; // Importing Facebook icon from react-icons.
import { FaTwitter } from "react-icons/fa"; // Importing Twitter icon from react-icons.
import { FaInstagram } from "react-icons/fa"; // Importing Instagram icon from react-icons.
import { FaYoutube } from "react-icons/fa"; // Importing YouTube icon from react-icons.
import { FaPinterest } from "react-icons/fa"; // Importing Pinterest icon from react-icons.

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black">
      {/* The footer component is the main section that contains all footer-related content */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-black px-5 md:px-[135px] py-[50px]">
        {/* 
          - flex: Applies flexbox layout to arrange elements in a row or column.
          - flex-col: Arranges items vertically in small screens.
          - md:flex-row: Arranges items horizontally on medium and larger screens.
          - justify-between: Distributes the space evenly between elements with space between them.
          - items-center: Centers the items vertically within the container.
          - bg-black: Sets the background color to black.
          - px-5: Adds padding to the left and right sides on smaller screens.
          - md:px-[135px]: Adds more padding on larger screens.
          - py-[50px]: Adds vertical padding to the footer.
        */}

        <div className="text-white md:w-[50%] w-[100%]">
          {/* 
            - The left section of the footer contains a heading and description for support.
            - text-white: Sets the text color to white.
            - md:w-[50%]: On medium and larger screens, the width of the section is 50%.
            - w-[100%]: On smaller screens, the width of the section is 100%.
          */}
          <h2 className="text-[20px] md:text-[32px] font-semibold">
            {/* 
              - The heading for the support section.
              - text-[20px]: Sets the font size to 20px on smaller screens.
              - md:text-[32px]: Sets the font size to 32px on medium and larger screens.
              - font-semibold: Makes the text bold.
            */}
            <span className="text-[#FF9F0D]">St</span>ill Need Our Support?
            {/* 
              - The "St" part of the text is colored orange (#FF9F0D) to emphasize the word "Still".
            */}
          </h2>
          <p className="text-[10px] md:text-[16px] font-normal mt-[17px]">
            {/* 
              - The paragraph provides a description in smaller text.
              - text-[10px]: Sets the font size to 10px on smaller screens.
              - md:text-[16px]: Increases the font size to 16px on medium and larger screens.
              - font-normal: Sets the font weight to normal.
              - mt-[17px]: Adds margin-top of 17px to create space between the heading and the paragraph.
            */}
            Don&#39;t wait make a smart & logical quote here. Its pretty easy.
          </p>
        </div>

        <div className="flex md:mt-0 mt-[20px]">
          {/* 
            - The right section contains the email subscription form and button.
            - flex: Applies flexbox layout to the input field and button.
            - md:mt-0: Removes margin on medium and larger screens.
            - mt-[20px]: Adds margin-top of 20px on smaller screens to separate the form from the content above.
          */}
          <input
            type="text"
            placeholder="Enter Your Email"
            className="bg-[#FF9F0D] text-white py-[5px] px-[10px] md:py-[10px] md:px-[20px] mr-2"
          />
          {/* 
            - Input field for email subscription.
            - bg-[#FF9F0D]: Sets the background color to orange.
            - text-white: Sets the text color to white.
            - py-[5px] px-[10px]: Adds padding on smaller screens.
            - md:py-[10px] md:px-[20px]: Adds larger padding on medium and larger screens.
            - mr-2: Adds margin-right to separate the input from the button.
          */}
          <button className="text-[#FF9F0D] bg-white py-[5px] md:py-[10px] px-[10px] md:px-[20px]">
            Subscribe Now
          </button>
          {/* 
            - Subscribe button for users to submit their email.
            - text-[#FF9F0D]: Sets the text color to orange.
            - bg-white: Sets the background color to white.
            - py-[5px] md:py-[10px]: Adds padding for button on small and medium screens.
            - px-[10px] md:px-[20px]: Adds horizontal padding for button on small and medium screens.
          */}
        </div>
      </div>

      <hr className="my-4 border-[#FF9F0D] mx-5 md:mx-[135px]" />
      {/* 
        - A horizontal separator with an orange border.
        - my-4: Adds vertical margin of 4 units.
        - border-[#FF9F0D]: Sets the border color to orange.
        - mx-5 md:mx-[135px]: Adds horizontal margin of 5 units on small screens and 135px on medium and larger screens.
      */}

      <div className="mx-auto w-full max-w-screen-xl">
        {/* 
          - Main content section for the footer links, with a maximum width of the screen size.
          - mx-auto: Centers the content horizontally.
          - w-full: Sets the width to 100%.
          - max-w-screen-xl: Limits the maximum width to the extra-large screen size.
        */}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-[135px] py-6 lg:py-8">
          {/* 
            - A grid layout for the footer links, with responsive design.
            - grid: Enables the grid layout.
            - grid-cols-1: One column layout on smaller screens.
            - sm:grid-cols-2: Two columns on small screens.
            - md:grid-cols-4: Four columns on medium and larger screens.
            - gap-6: Adds spacing between the grid items.
            - px-4: Adds horizontal padding on small screens.
            - md:px-[135px]: Adds more padding on medium and larger screens.
            - py-6 lg:py-8: Adds vertical padding for spacing.
          */}
          
          <div>
            <h2 className="mb-6 text-[24px] font-semibold dark:text-white">
              About Us.
            </h2>
            {/* 
              - "About Us" section with links and description.
              - mb-6: Adds bottom margin of 6 units.
              - text-[24px]: Sets the font size of the heading to 24px.
              - font-semibold: Makes the text bold.
              - dark:text-white: Sets text color to white in dark mode.
            */}
            <ul className="text-gray-500 font-medium">
              {/* 
                - A list of about-us information and contact details.
                - text-gray-500: Sets the text color to gray for links.
                - font-medium: Sets medium font weight for the list items.
              */}
              <li className="mb-4">
                <p className="text-[#FFFFFF] text-[16px] font-normal hover:underline">
                  Corporate clients and leisure travelers have been relying on Groundlink for dependable, safe, and professional chauffeured car service in major cities across the World.
                </p>
              </li>
              <li className="flex gap-[16.5px]">
                {/* 
                  - Displays the opening hours with an icon.
                  - flex: Enables flexbox layout for arranging items.
                  - gap-[16.5px]: Adds space between the icon and text.
                */}
                <div className="bg-[#FF9F0D] flex justify-center items-center w-[72px] h-[72px]">
                  <PiClockClockwiseBold className="text-white text-[40px]" />
                </div>
                {/* 
                  - The clock icon with orange background for opening hours.
                  - text-white: Sets the icon color to white.
                  - text-[40px]: Sets the icon size to 40px.
                */}
                <div className="ml-1">
                  <h2 className="text-[16px] text-[#FFFFFF] font-normal">Opening Hours</h2>
                  <h3 className="text-[10px] font-normal text-[#FFFFFF]">Mon - Sat(8.00 - 6.00)</h3>
                  <h3 className="text-[10px] font-normal text-[#FFFFFF]">Sunday - Closed</h3>
                </div>
                {/* 
                  - "Opening Hours" text with timings.
                  - ml-1: Adds left margin to separate from the icon.
                */}
              </li>
            </ul>
          </div>

          {/* More sections for Useful Links, Help, and Recent Posts would follow in similar structure. */}
        </div>

        {/* Footer Bottom with social media icons and copyright */}
        <div className="w-[100%] px-4 py-6 bg-gray-100 dark:bg-[#FF9F0D] md:flex md:items-center md:justify-between">
          {/* 
            - The final section with copyright information and social media icons.
            - bg-gray-100: Sets the background color to light gray for the bottom section.
            - dark:bg-[#FF9F0D]: Sets the background color to orange in dark mode.
          */}
          <span className="text-sm text-[#FFFFFF] sm:text-center">
            Copyright @ 2024 by Sufyan Khan. All Rights Reserved.
          </span>
          {/* 
            - The copyright notice with white text and centered on small screens.
            - text-sm: Sets the text size to small.
            - sm:text-center: Centers the text on small screens.
          */}

          <div className="flex justify-center gap-[14px] mt-4 md:mt-0">
            {/* 
              - Social media icons section.
              - flex: Uses flexbox to arrange the icons in a row.
              - gap-[14px]: Adds space between each social media icon.
            */}
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded">
              <FaFacebookF className="text-[#4F4F4F] text-[20px]" />
            </div>
            {/* Facebook icon with gray background */}
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded">
              <FaTwitter className="text-[#4F4F4F] text-[20px]" />
            </div>
            {/* Twitter icon with gray background */}
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded">
              <FaInstagram className="text-[#4F4F4F] text-[20px]" />
            </div>
            {/* Instagram icon with gray background */}
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded">
              <FaYoutube className="text-[#4F4F4F] text-[20px]" />
            </div>
            {/* YouTube icon with gray background */}
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded">
              <FaPinterest className="text-[#4F4F4F] text-[20px]" />
            </div>
            {/* Pinterest icon with gray background */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
