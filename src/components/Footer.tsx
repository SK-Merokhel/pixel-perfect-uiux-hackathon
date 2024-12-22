import React from "react";
import Image from "next/image";
import footer1 from "../../public/assets/footer1.png";
import footer2 from "../../public/assets/footer2.png";
import footer3 from "../../public/assets/footer3.png";
import { PiClockClockwiseBold } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black">
      <div className="flex flex-col md:flex-row justify-between items-center bg-black px-[135px] py-[50px]">
        {/* 
    - flex: Applies flexbox layout to the container.
    - flex-col: Stacks the child elements vertically on smaller screens (default behavior).
    - md:flex-row: Changes the layout to a horizontal row for medium screens and above.
    - justify-between: Distributes space between the child elements, pushing them to the edges.
    - items-center: Vertically centers the child elements within the container.
    - bg-black: Sets the background color of the container to black.
    - px-[135px]: Adds horizontal padding of 135px on both sides.
    - py-[50px]: Adds vertical padding of 50px on top and bottom.
  */}

        <div className="text-white md:w-[50%] w-[100%]">
          {/* 
      - text-white: Sets the text color to white for high contrast on the black background.
      - md:w-[50%]: For medium screens and above, sets the width to 50% of the parent container.
      - w-[100%]: For smaller screens, sets the width to 100% of the parent container.
    */}

          <h2 className="text-[20px] md:text-[32px] font-semibold">
            {/* 
        - text-[20px]: Sets the font size to 20px for small screens.
        - md:text-[32px]: For medium screens and above, sets the font size to 32px.
        - font-semibold: Applies a semi-bold font weight to the heading.
      */}
            <span className="text-[#FF9F0D]">St</span>ill Need Our Support?{" "}
            {/* 
        - text-[#FF9F0D]: Sets the color of "St" to orange (#FF9F0D) for emphasis.
      */}
          </h2>

          <p className="text-[10px] md:text-[16px] font-normal mt-[17px]">
            {/* 
        - text-[10px]: Sets the font size to 10px for small screens.
        - md:text-[16px]: For medium screens and above, sets the font size to 16px.
        - font-normal: Sets the font weight to normal (not bold).
        - mt-[17px]: Adds a margin-top of 17px to space out the paragraph from the heading.
      */}
            Don&#39;t wait make a smart & logical quote here. Its pretty easy.
          </p>
        </div>

        <div className="flex md:mt-0 mt-[20px]">
          {/* 
      - flex: Applies flexbox layout to the input and button container, aligning them horizontally.
      - md:mt-0: For medium screens and above, removes the top margin.
      - mt-[20px]: Adds a margin-top of 20px for smaller screens.
    */}

          <input
            type="text"
            placeholder="Enter Your Email"
            className="bg-[#FF9F0D] text-white py-[5px] px-[10px] md:py-[10px] md:px-[20px] mr-2"
          />
          {/* 
      - bg-[#FF9F0D]: Sets the background color of the input field to orange (#FF9F0D).
      - text-white: Sets the text color to white.
      - py-[5px]: Adds vertical padding of 5px for smaller screens.
      - px-[10px]: Adds horizontal padding of 10px for smaller screens.
      - md:py-[10px]: For medium screens and above, increases the vertical padding to 10px.
      - md:px-[20px]: For medium screens and above, increases the horizontal padding to 20px.
      - mr-2: Adds a margin-right of 2 units to space out the input field from the button.
    */}

          <button className="text-[#FF9F0D] bg-white py-[5px] md:py-[10px] px-[10px] md:px-[20px]">
            {/* 
        - text-[#FF9F0D]: Sets the text color of the button to orange (#FF9F0D).
        - bg-white: Sets the background color of the button to white.
        - py-[5px]: Adds vertical padding of 5px for smaller screens.
        - md:py-[10px]: For medium screens and above, increases the vertical padding to 10px.
        - px-[10px]: Adds horizontal padding of 10px for smaller screens.
        - md:px-[20px]: For medium screens and above, increases the horizontal padding to 20px.
      */}
            Subscribe Now
          </button>
        </div>
      </div>
      <hr className="my-4 border-[#FF9F0D] mx-[135px]" />
      {/* 
  - my-4: Adds vertical margin of 4 units on both top and bottom to give space around the horizontal rule.
  - border-[#FF9F0D]: Sets the border color of the horizontal rule to orange (#FF9F0D).
  - mx-[135px]: Adds horizontal margin of 135px on both left and right sides to center the horizontal rule with equal spacing.
*/}

      <div className="mx-auto w-full max-w-screen-xl ">
        <div className="grid grid-cols-2 md:gap-[50px] px-0 md:px-[135px] py-6 lg:py-8 md:grid-cols-4">
          {/* 
    - grid: Defines the container as a grid layout.
    - grid-cols-2: Specifies a 2-column grid on small screens.
    - md:gap-[50px]: Adds a gap of 50px between grid items for medium screens and larger.
    - px-0: Removes horizontal padding on smaller screens.
    - md:px-[135px]: Adds 135px horizontal padding on medium screens and larger.
    - py-6: Adds vertical padding of 6 units on top and bottom.
    - lg:py-8: Increases vertical padding to 8 units for large screens.
    - md:grid-cols-4: Changes the grid layout to 4 columns on medium screens and larger.
  */}

          {/* About Us Section */}
          <div>
            <h2 className="mb-6 text-[24px] font-semibold dark:text-white">
              About Us.
            </h2>
            {/* 
      - Displays a heading for the "About Us" section with a margin below it (mb-6).
      - text-[24px]: Sets the font size to 24px.
      - font-semibold: Applies a bold font weight.
      - dark:text-white: Applies white color for text in dark mode.
    */}
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                {/* 
          - List item containing a description of the company’s services.
          - mb-4: Adds margin bottom to the list item.
        */}
                <p className="text-[#FFFFFF] text-[16px] font-normal hover:underline">
                  Corporate clients and leisure travelers have been relying on
                  Groundlink for dependable, safe, and professional chauffeured
                  car service in major cities across the world.
                </p>
              </li>
              <li className="flex gap-[16.5px]">
                {/* 
          - Flex container for the opening hours section, using a flex layout with a gap between items.
          - gap-[16.5px]: Adds space between the items.
        */}
                <div className="bg-[#FF9F0D] flex justify-center items-center w-[72px] h-[72px]">
                  <PiClockClockwiseBold className="text-white text-[40px]" />
                </div>
                {/* 
          - Icon representing opening hours, centered within a 72px by 72px square with a yellow background.
          - PiClockClockwiseBold is an icon used for showing time.
        */}
                <div className="ml-1">
                  <h2 className="text-[16px] text-[#FFFFFF] font-normal">
                    Opening Hours
                  </h2>
                  {/* 
            - Displays the heading "Opening Hours" with white text.
          */}
                  <h3 className="text-[10px] font-normal text-[#FFFFFF]">
                    Mon - Sat (8.00 - 6.00)
                  </h3>
                  <h3 className="text-[10px] font-normal text-[#FFFFFF]">
                    Sunday - Closed
                  </h3>
                  {/* 
            - Shows the operating hours: Monday to Saturday from 8:00 AM to 6:00 PM.
            - "Sunday - Closed" indicates the business is closed on Sundays.
          */}
                </div>
              </li>
            </ul>
          </div>

          {/* Useful Links Section */}
          <div>
            <h2 className="mb-6 text-[24px] font-semibold dark:text-white">
              Useful Links
            </h2>
            {/* 
      - Displays a heading for the "Useful Links" section.
    */}
            <ul className="text-[#FFFFFF] font-medium">
              {/* 
        - Each list item represents a link with hover underline effect.
        - mb-4: Adds margin bottom to each list item.
      */}
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  News
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Partner
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Team
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Menu
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="mt-10 md:mt-0">
            <h2 className="mb-6 text-[24px] font-semibold dark:text-white">
              Help?
            </h2>
            {/* 
      - Displays a heading for the "Help?" section.
      - mt-10: Adds margin-top for small screens, while md:mt-0 removes it for medium screens and larger.
    */}
            <ul className="text-[#FFFFFF] font-medium">
              {/* 
        - Each list item represents a help or support link.
        - mb-4: Adds margin-bottom to each item.
      */}
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Reporting
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Documentation
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Support Policy
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Recent Posts Section */}
          <div className="mt-10 md:mt-0">
            <h2 className="mb-6 text-[24px] font-semibold dark:text-white">
              Recent Post
            </h2>
            {/* 
      - Displays a heading for the "Recent Post" section.
    */}
            <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-[14px]">
              {/* 
        - Space between each post is controlled by space-y-[14px] which adds vertical space between the list items.
      */}

              {/* Post 1 */}
              <li className="flex items-center gap-[16.5px]">
                {" "}
                {/* Flexbox layout to align the image and text horizontally, centering vertically */}
                <Image src={footer1} alt="Footer Image 1" />{" "}
                {/* Image component for the footer image */}
                <div className="ml-1">
                  {" "}
                  {/* Adds small left margin to separate the text from the image */}
                  <h2 className="text-[16px] text-[#FFFFFF] font-inter font-normal leading-[24px] opacity-[.49]">
                    {" "}
                    {/* Styling for the date */}
                    20 Feb 2022
                  </h2>
                  <h3 className="font-inter text-[18px] font-normal leading-[26px] text-left text-[#FFFFFF]">
                    {" "}
                    {/* Styling for the heading */}
                    Keep Your Business
                  </h3>
                </div>
              </li>

              {/* Post 2 */}
              <li className="flex items-center gap-[16.5px]">
                {/* Flexbox layout to align the image and text horizontally, centering vertically */}
                {/* 
    - `flex`: Enables flexbox layout to arrange items in a row (horizontally).
    - `items-center`: Vertically centers the items along the cross axis (y-axis).
    - `gap-[16.5px]`: Adds a fixed space of 16.5px between the image and the text container.
  */}

                <Image src={footer2} alt="Footer Image 2" />
                {/* Image component for the footer image */}
                {/* 
    - `src={footer2}`: Provides the source for the image (footer2 is the image path or URL).
    - `alt="Footer Image 2"`: Specifies alternative text for the image, useful for accessibility and SEO.
  */}

                <div className="ml-1">
                  {/* Adds small left margin to separate the text from the image */}
                  {/* 
      - `ml-1`: Applies a small left margin (1 unit) to the text, creating space between the image and text.
    */}

                  <h2 className="text-[16px] text-[#FFFFFF] font-inter font-normal leading-[24px] opacity-[.49]">
                    {/* Styling for the date */}
                    {/* 
        - `text-[16px]`: Sets the font size for the date to 16px.
        - `text-[#FFFFFF]`: Sets the text color to white (`#FFFFFF`).
        - `font-inter`: Uses the Inter font family for the date.
        - `font-normal`: Applies a normal font weight.
        - `leading-[24px]`: Sets the line height to 24px for better readability.
        - `opacity-[.49]`: Applies a reduced opacity (49%), making the text slightly faded.
      */}
                    20 Feb 2022
                  </h2>

                  <h3 className="font-inter text-[18px] font-normal leading-[26px] text-left text-[#FFFFFF]">
                    {/* Styling for the heading */}
                    {/* 
        - `font-inter`: Uses the Inter font family for the heading.
        - `text-[18px]`: Sets the font size for the heading to 18px.
        - `font-normal`: Applies a normal font weight.
        - `leading-[26px]`: Sets the line height to 26px for better readability.
        - `text-left`: Aligns the text to the left.
        - `text-[#FFFFFF]`: Sets the text color to white (`#FFFFFF`).
      */}
                    Keep Your Business
                  </h3>
                </div>
              </li>
              {/* Post 3 */}
              <li className="flex items-center gap-[16.5px]">
                <Image src={footer3} alt="Footer Image 3" />
                <div className="ml-1">
                  <h2 className="text-[16px] text-[#FFFFFF] font-inter font-normal leading-[24px] opacity-[.49]">
                    20 Feb 2022
                  </h2>
                  <h3 className="font-inter text-[18px] font-normal leading-[26px] text-left text-[#FFFFFF]">
                    Keep Your Business
                  </h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[100%] px-4 py-6 bg-gray-100 dark:bg-[#FF9F0D] md:flex md:items-center md:justify-between">
          {/* 
    - w-[100%]: Sets the width of the container to 100% of its parent.
    - px-4: Adds horizontal padding (4 units).
    - py-6: Adds vertical padding (6 units).
    - bg-gray-100: Sets the background color to light gray for light mode.
    - dark:bg-[#FF9F0D]: Sets the background color to yellow for dark mode.
    - md:flex: Applies a flexbox layout for medium screens and larger.
    - md:items-center: Centers the items vertically on medium screens and larger.
    - md:justify-between: Justifies the content with space between items on medium screens and larger.
  */}

          {/* Copyright Text Section */}
          <span className="text-sm text-[#FFFFFF] sm:text-center">
            {/* 
      - text-sm: Sets the text size to small.
      - text-[#FFFFFF]: Sets the text color to white.
      - sm:text-center: Centers the text on small screens and larger.
    */}
            Copyright @ 2024 by Sufyan Khan. All Rights Reserved.
          </span>

          {/* Social Media Icons Section */}
          <div className="flex justify-center gap-[14px]">
            {/* 
      - flex: Applies flexbox layout for the social media icons.
      - justify-center: Centers the icons horizontally.
      - gap-[14px]: Adds a 14px gap between the icons.
    */}

            {/* Facebook Icon */}
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded">
              {/* 
        - bg-white: Sets the background color to white.
        - w-[36px] h-[34px]: Defines the width and height of the icon container.
        - flex: Applies flexbox layout.
        - justify-center: Centers the icon horizontally.
        - items-center: Centers the icon vertically.
        - rounded: Applies rounded corners to the container.
      */}
              <FaFacebookF className="text-[#4F4F4F] text-[20px]" />
              {/* 
        - FaFacebookF: FontAwesome icon for Facebook.
        - text-[#4F4F4F]: Sets the icon color to dark gray.
        - text-[20px]: Sets the icon size to 20px.
      */}
            </div>

            {/* Twitter Icon */}
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded">
              <FaTwitter className="text-[#4F4F4F] text-[20px]" />
            </div>

            {/* Instagram Icon */}
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded">
              <FaInstagram className="text-[#4F4F4F] text-[20px]" />
            </div>

            {/* YouTube Icon */}
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded">
              <FaYoutube className="text-[#4F4F4F] text-[20px]" />
            </div>

            {/* Pinterest Icon */}
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded">
              <FaPinterest className="text-[#4F4F4F] text-[20px]" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
