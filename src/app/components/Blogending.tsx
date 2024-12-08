import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { RiMessage2Line } from "react-icons/ri";
import { FiShare2 } from "react-icons/fi";

function Blogending() {
  const posts = [
    {
      id: 1,
      date: "10 February 2022 ",
      title: "Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis",
      imageSrc: "", // Image source is empty for now
    },
    {
      id: 2,
      date: "10 February 2022 ",
      title: "Morbi Sodales Tellus Elit In Blandit Risus Suscipit A",
      imageSrc: "",
    },
    {
      id: 3,
      date: "10 February 2022 ",
      title: "Curabitur rutrum velit ac congue malesuada",
      imageSrc: "",
    },
  ];

  return (
    <section className="bg-black md:px-[135px] py-[50px]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font whitespace-nowrap font-greatVibes">
          Food Category
        </h1>
        <h1 className="text-[20px] text-white md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
          <span className="text-[#FF9F0D]">Ch</span>oose Food Item
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 flex-grow mt-[59px]">
        {posts.map((post) => (
          <div
            key={post.id}
            className="w-full mb-8 border border-white p-4"
          >
            <div
              className="w-full h-[200px] bg-gray-300 mb-4 flex justify-center items-center text-white text-xl"
              // Placeholder for images
            >
              {post.imageSrc ? (
                <img
                  src={post.imageSrc}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span>No Image Available</span>
              )}
            </div>
            <h2 className="text-[#FF9F0D] text-[16px] font-normal">{post.date}</h2>
            <h2 className="text-white text-[24px] font-bold mt-[16px]">
              {post.title}
            </h2>
            <div className="text-white flex justify-between mt-[16px]">
              <h1>Learn More</h1>
              <div className="flex gap-[8px]">
                <AiOutlineLike />
                <RiMessage2Line />
                <FiShare2 />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blogending;
