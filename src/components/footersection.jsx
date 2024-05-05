import React from "react";
import logo from "../images/Group.svg";
import facekbook from "../images/carbon_logo-facebook.svg";
import linkin from "../images/Vector.svg";
import tiwitter from "../images/Vector (1).svg";
import instagram from "../images/Group (1).svg";
const FooterSection = () => {
  return (
    <>
      <div className="max-w-[1438px] mx-auto h-[739px]">
        <div className="first-ffoter flex justify-between items-center">
          <div className=" pt-14 pl-24">
            <div>
              <img src={logo} alt="" />
            </div>
            <div className="flex items-center pt-8 gap-[10px]">
              <img src={facekbook} alt="" />
              <img src={linkin} alt="" />
              <img src={tiwitter} alt="" />
              <img src={instagram} alt="" />
            </div>
          </div>
          <div
            style={{ fontFamily: "Poppins" }}
            className=" text-right pt-16 pr-24"
          >
            <h1
              className="text-[18px] leading-[18px] font-semibold"
              style={{ fontFamily: "Poppins" }}
            >
              Questions about our plans?
            </h1>
            <p
              className="pt-6 text-[16px] text-[#A4A9A7] leading-4 font-normal"
              style={{ fontFamily: "Inter" }}
            >
              Call us Monday - Friday 9am - 8pm ET
            </p>
            <p
              className="pt-5 text-[16px] text-[#A4A9A7] leading-4 font-normal"
              style={{ fontFamily: "Inter" }}
            >
              For Individual & Family plans, 0-000-000-0000
            </p>
            <p
              className="pt-5 text-[16px] text-[#A4A9A7] leading-4 font-normal"
              style={{ fontFamily: "Inter" }}
            >
              For Medicare plans, 0-000-000-0000 (TTY: 711)
            </p>
            <p
              className="pt-5 text-[16px] text-[#A4A9A7] leading-4 font-normal"
              style={{ fontFamily: "Inter" }}
            >
              For Small Group plans, 0-000-000-0000
            </p>
          </div>
        </div>
        <div className="second-footer pt-[119px]">
          <footer class="  ">
            <div class="container mx-auto px-[80px] ">
              <div class="grid grid-cols-5 gap-20">
                <div class="col-span-1">
                  <h3 class="text-[16px] leading-4 pb-2  font-medium mb-2" style={{fontFamily:'Poppins'}}>About Us</h3>
                  <ul className="flex flex-col  text-[16px] leading-10 font-normal text-[#8B8B8B]" style={{fontFamily:'Inter'}}>
                    <li>Our Story</li>
                    <li>Invertor Relations</li>
                    <li>Press</li>
                    <li>Careers</li>
                    <li>Blog</li>
                  </ul>
                </div>
                <div class="col-span-1">
                  <h3 class="text-[16px] leading-4 pb-2  font-medium mb-2" style={{fontFamily:'Poppins'}}>Our Experience</h3>
                  <ul className="flex flex-col  text-[16px] leading-10 font-normal text-[#8B8B8B]" style={{fontFamily:'Inter'}}>
                    <li>Oscar APP</li>
                    <li>Your Care Team</li>
                    <li>Virtual Urgent Care</li>
                  </ul>
                </div>
                <div class="col-span-1">
                  <h3 class="text-[16px] leading-4 pb-2  font-medium mb-2" style={{fontFamily:'Poppins'}}>For Business</h3>
                  <ul className="flex flex-col  text-[16px] leading-10 font-normal text-[#8B8B8B]" style={{fontFamily:'Inter'}}>
                    <li>Employers</li>
                    <li>Health Plans</li>
                    <li>Consultans</li>
                  </ul>
                </div>
                <div class="col-span-1">
                  <h3 class="text-[16px] leading-4 pb-2  font-medium mb-2" style={{fontFamily:'Poppins'}}>Departments</h3>
                  <ul className="flex flex-col  text-[16px] leading-10 font-normal text-[#8B8B8B]" style={{fontFamily:'Inter'}}>
                    <li>Rehabiliations</li>
                    <li>Liaboratory Analysis</li>
                    <li>Face Lift Surgery</li>
                    <li>Liposuction</li>
                  </ul>
                </div>
                <div class="col-span-1">
                  <h3 class="text-[16px] leading-4 pb-2  font-medium mb-2" style={{fontFamily:'Poppins'}}>Providers</h3>
                  <ul className="flex flex-col  text-[16px] leading-10 font-normal text-[#8B8B8B]"style={{fontFamily:'Inter'}}>
                    <li>Partner with Us</li>
                    <li>Providers Experience</li>
                    <li>Provider Center</li>
                    <li>Frequently Asked</li>
                   <li>Questions</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="text-center pt-12 text-[16px] leading-4 font-normal mt-4 text-[#B4B4B4]" style={{fontFamily:'Inter'}}>
            <p>&copy;2021 Pfledgebox. All rights reserved.</p>
        </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default FooterSection;
