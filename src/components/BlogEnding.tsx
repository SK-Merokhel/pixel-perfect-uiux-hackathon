import React from "react"; // Importing React to enable JSX syntax and component functionality.
import Image from "next/image"; // Importing Next.js Image component for optimized image loading.

import { AiOutlineLike } from "react-icons/ai"; // Importing the "Like" icon from React Icons.
import { RiMessage2Line } from "react-icons/ri"; // Importing the "Message" icon from React Icons.
import { FiShare2 } from "react-icons/fi"; // Importing the "Share" icon from React Icons.

function Blogending() {
  // Sample blog post data with date, title, and image source
  const posts = [
    {
      id: 1,
      date: "10 February 2022 ",
      title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
      imageSrc: "/blog1.png", // Path to the blog post image
    },
    {
      id: 2,
      date: "10 February 2022 ",
      title: "Morbi Sodales Tellus Elit In Blandit Risus Suscipit A",
      imageSrc: "/blog2.png", // Path to the second blog post image
    },
    {
      id: 3,
      date: "10 February 2022 ",
      title: "Curabitur rutrum velit ac congue malesuada",
      imageSrc: "/blog3.png", // Path to the third blog post image
    },
  ];

  return (
    <section className="bg-black md:px-[135px] py-[50px]">
      {/* Main Section Styling */}
      {/* 
        - bg-black: Sets the background color of the section to black.
        - md:px-[135px]: Adds horizontal padding of 135px on medium screen sizes and larger.
        - py-[50px]: Adds vertical padding of 50px on top and bottom of the section.
      */}

      <div className="flex flex-col justify-center items-center">
        {/* Title and Subtitle */}
        <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font whitespace-nowrap font-greatVibes">
          {/* 
            - md:text-[32px]: Sets the font size to 32px on medium screens.
            - text-[24px]: Sets the font size to 24px for smaller screens.
            - text-[#FF9F0D]: Applies the orange color to the text.
            - font-greatVibes: Applies a specific font to the text (likely a custom font).
          */}
          Food Category
        </h1>

        <h1 className="text-[20px] text-white md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
          {/* 
            - text-white: Sets the text color to white for the second heading.
            - md:text-[50px]: Sets the font size to 50px on medium screens.
            - font-bold: Makes the font bold.
            - md:whitespace-normal: Allows wrapping of the text on medium screens.
          */}
          <span className="text-[#FF9F0D]">Ch</span>oose Food Item
        </h1>
      </div>

      {/* Blog Post Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 flex-grow mt-[59px]">
        {/* 
          - grid-cols-1: Defines 1 column on smaller screens.
          - sm:grid-cols-3: Defines 3 columns on small screens and above.
          - md:grid-cols-3: Ensures 3 columns on medium screens and above.
          - lg:grid-cols-3: Maintains 3 columns on large screens and above.
          - gap-2: Adds a gap of 2 units between grid items.
          - flex-grow: Allows the grid container to grow and fill available space.
          - mt-[59px]: Adds a margin-top of 59px for spacing above the grid.
        */}

        {posts.map((post) => (
          // Iterating over the posts array and rendering each post
          <div key={post.id} className="w-[100%] mb-8 border border-white">
            {/* Post container */}
            <div>
              {/* Rendering the image for each post */}
              <Image
                src={post.imageSrc} // Image source dynamically passed from post data
                alt={post.title} // Alt text for the image for accessibility
                width={300} // Width of the image
                height={300} // Height of the image
              />
              {/* Post date */}
              <h2 className="text-[#FF9F0D] text-[16px] font-normal mt-[30px] px-[43px]">
                {post.date}
                {/* 
                  - text-[#FF9F0D]: Sets the text color to orange.
                  - text-[16px]: Sets the font size to 16px.
                  - font-normal: Applies normal font weight.
                  - mt-[30px]: Adds a margin-top of 30px.
                  - px-[43px]: Adds horizontal padding of 43px.
                */}
              </h2>

              {/* Post title */}
              <h2 className="text-white text-[24px] font-bold px-[43px] mt-[16px]">
                {post.title}
                {/* 
                  - text-white: Sets the text color to white for the title.
                  - text-[24px]: Sets the font size to 24px.
                  - font-bold: Makes the font bold.
                  - mt-[16px]: Adds a margin-top of 16px.
                  - px-[43px]: Adds horizontal padding of 43px.
                */}
              </h2>

              {/* Action buttons: Learn More, Like, Comment, and Share */}
              <div className="text-white flex justify-between px-[43px] my-[32px]">
                <h1>Learn More</h1>
                <div className="flex gap-[8px]">
                  {/* Like, Message, Share icons */}
                  <AiOutlineLike /> {/* Like icon */}
                  <RiMessage2Line /> {/* Message icon */}
                  <FiShare2 /> {/* Share icon */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blogending;
