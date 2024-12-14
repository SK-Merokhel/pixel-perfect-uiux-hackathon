import React from "react";
import Image from "next/image";
import Link from "next/link";

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
      <div className="flex flex-col md:flex-row justify-between items-center bg-black px-5 md:px-[135px] py-[50px]">
        <div className="text-white md:w-[50%] w-[100%]">
          <h2 className="text-[20px] md:text-[32px] font-semibold">
            <span className="text-[#FF9F0D]">St</span>ill Need Our Support?
          </h2>
          <p className="text-[10px] md:text-[16px] font-normal mt-[17px]">
            Don&#39;t wait make a smart & logical quote here. Its pretty easy.
          </p>
        </div>

        <div className="flex md:mt-0 mt-[20px]">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="bg-[#FF9F0D] text-white py-[5px] px-[10px] md:py-[10px] md:px-[20px] mr-2"
          />
          <button className="text-[#FF9F0D] bg-white py-[5px] md:py-[10px] px-[10px] md:px-[20px]">
            Subscribe Now
          </button>
        </div>
      </div>

      <hr className="my-4 border-[#FF9F0D] mx-5 md:mx-[135px]" />

      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-[135px] py-6 lg:py-8">
          <div>
            <h2 className="mb-6 text-[24px] font-semibold dark:text-white">
              About Us.
            </h2>
            <ul className="text-gray-500 font-medium">
              <li className="mb-4">
                <p className="text-[#FFFFFF] text-[16px] font-normal hover:underline">
                  Corporate clients and leisure travelers have been relying on Groundlink for dependable, safe, and professional chauffeured car service in major cities across the World.
                </p>
              </li>
              <li className="flex gap-[16.5px]">
                <div className="bg-[#FF9F0D] flex justify-center items-center w-[72px] h-[72px]">
                  <PiClockClockwiseBold className="text-white text-[40px]" />
                </div>
                <div className="ml-1">
                  <h2 className="text-[16px] text-[#FFFFFF] font-normal">Opening Hours</h2>
                  <h3 className="text-[10px] font-normal text-[#FFFFFF]">Mon - Sat(8.00 - 6.00)</h3>
                  <h3 className="text-[10px] font-normal text-[#FFFFFF]">Sunday - Closed</h3>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-[24px] font-semibold dark:text-white">
              Useful Links
            </h2>
            <ul className="text-[#FFFFFF] font-medium">
              <li className="mb-4"><Link href="#">About</Link></li>
              <li className="mb-4"><Link href="#">News</Link></li>
              <li className="mb-4"><Link href="#">Partner</Link></li>
              <li className="mb-4"><Link href="#">Team</Link></li>
              <li className="mb-4"><Link href="#">Menu</Link></li>
              <li className="mb-4"><Link href="#">Contact</Link></li>
            </ul>
          </div>

          <div className="mt-10 md:mt-0">
            <h2 className="mb-6 text-[24px] font-semibold dark:text-white">
              Help?
            </h2>
            <ul className="text-[#FFFFFF] font-medium">
              <li className="mb-4"><Link href="#">FAQ</Link></li>
              <li className="mb-4"><Link href="#">Terms & Conditions</Link></li>
              <li className="mb-4"><Link href="#">Reporting</Link></li>
              <li className="mb-4"><Link href="#">Documentation</Link></li>
              <li className="mb-4"><Link href="#">Support Policy</Link></li>
              <li className="mb-4"><Link href="#">Privacy</Link></li>
            </ul>
          </div>

          <div className="mt-10 md:mt-0">
            <h2 className="mb-6 text-[24px] font-semibold dark:text-white">
              Recent Post
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-[14px]">
              {/* Post 1 */}
              <li className="flex gap-[16.5px]">
                <Image src={footer1} alt="Food" />
                <div className="ml-1">
                  <h2 className="text-[16px] text-[#FFFFFF] font-inter font-normal opacity-[.49]">20 Feb 2022</h2>
                  <h3 className="text-[18px] font-normal text-[#FFFFFF]">Keep Your Business</h3>
                </div>
              </li>
              {/* Post 2 */}
              <li className="flex gap-[16.5px]">
                <Image src={footer2} alt="Food" />
                <div className="ml-1">
                  <h2 className="text-[16px] text-[#FFFFFF] font-inter font-normal opacity-[.49]">20 Feb 2022</h2>
                  <h3 className="text-[18px] font-normal text-[#FFFFFF]">Keep Your Business</h3>
                </div>
              </li>
              {/* Post 3 */}
              <li className="flex gap-[16.5px]">
                <Image src={footer3} alt="Food" />
                <div className="ml-1">
                  <h2 className="text-[16px] text-[#FFFFFF] font-inter font-normal opacity-[.49]">20 Feb 2022</h2>
                  <h3 className="text-[18px] font-normal text-[#FFFFFF]">Keep Your Business</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-[100%] px-4 py-6 bg-gray-100 dark:bg-[#FF9F0D] md:flex md:items-center md:justify-between">
          <span className="text-sm text-[#FFFFFF] sm:text-center">
            Copyright @ 2024 by Sufyan Khan. All Rights Reserved.
          </span>

          <div className="flex justify-center gap-[14px] mt-4 md:mt-0">
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded">
              <FaFacebookF className="text-[#4F4F4F] text-[20px]" />
            </div>
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded">
              <FaTwitter className="text-[#4F4F4F] text-[20px]" />
            </div>
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded">
              <FaInstagram className="text-[#4F4F4F] text-[20px]" />
            </div>
            <div className="bg-white w-[36px] h-[34px] flex justify-center items-center rounded">
              <FaYoutube className="text-[#4F4F4F] text-[20px]" />
            </div>
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
