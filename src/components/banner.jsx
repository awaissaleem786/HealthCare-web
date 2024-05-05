import React from "react";
import { Link } from "react-router-dom";
import bgimage from "../images/image.svg";
import insta from '../images/insta.svg'
import icon from '../images/icon.svg'
// Your component code here

import logo from "../images/Frame.svg";
const Banner = () => {
  return (
    <>
      <div className="max-w-[1400px] h-[690px] bg-[#E8EEFF]">
        <div className="relative h-[108px] flex  items-center px-4  mx-auto max-w-[1236px]">
          {/* Logo */}
          <div className="flex-shrink-0 pl-[102px] pt-[17px] pb-[19px]">
            <img src={logo} alt="Logo" className="w-[75px] h-[71px] " />
          </div>

          {/* Navigation Links */}
          <nav className="flex  pl-[400px] pt-[43px] pb-[43px] gap-12">

          <Link href="#" class="relative text-xl w-fit block after:block after:content-[''] text-lg after:absolute after:h-[1px]  after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Home</Link>
          <Link href="#" class="relative text-xl w-fit block after:block after:content-[''] text-lg after:absolute after:h-[1px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Order Box</Link>
          <Link href="#" class="relative text-xl w-fit block after:block after:content-[''] text-lg after:absolute after:h-[1px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">FAQ</Link>
          <Link href="#" class="relative text-xl w-fit block after:block after:content-[''] text-lg after:absolute after:h-[1px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">Contact</Link>
          </nav>
        </div>
        
      

      <div className="pl-[190px] pt-[10px] pr-[20px] " >
        <img src={bgimage} alt=""  className="bg-center bg-no-repeat bg-cover "/>
        <img src={insta} alt="" className="absolute w-[150px] h-[150px] top-52 left-80 cursor-pointer transition-all duration-300 hover:scale-110 "/>
        <img src={icon} alt=""  className="absolute w-[150px] h-[150px] top-72 right-96 cursor-pointer transition-all duration-300 hover:scale-110"/>
      </div>
      </div>

    </>
  );
};

export default Banner;
