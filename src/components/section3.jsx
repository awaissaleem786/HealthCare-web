import React from "react";
import abstact from '../images/abstrack.jpg'
import image from "../images/Rectangle 5 (2).svg";
const Section3 = () => {
  return (
    <>
      <div className="max-[1259px] mx-auto h-[500px] pt-20 pl-14 pr-[102px]">
        <div className=" flex justify-center gap-[60px] relative items-center mt-20 px-16">
          <div className="pt-[56px] relative ">
            <div className="absolute -z-50 top-8 left-[-80px]">
                  <img src={abstact} alt="" />
            </div>
            <div className="z-50">
            <img src={image} alt="" className=" w-[651px] h-[408px]  " />
            </div>
            <div className="absolute left-[-40px]  top-32 -z-40">
              <div className=" w-[530px] h-[330px] bg-[#E8EEFF] z-0"></div>
            </div>
            
          </div>
          <div className="w-[466px] h-[320px] py-11">
            <h2 style={{fontFamily:'Poppins',fontWeight:600,fontSize:'40px',lineHeight:'56px',letterSpacing:'0.5%'}}>Lorem <span style={{color:'#86A7FF'}}>Ipsum</span></h2>
            <p style={{fontFamily:'Inter',fontWeight:400,lineHeight:'24px',color:'#A4A9A7'}} className="leading-4 font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Adipiscing faucibus scelerisque quam scelerisque facilisi. Neque,
              aliquam condimentum ac pellentesque egestas eu eu non. Etiam
              pellentesque donec in gravida praesent amet. Risus, quis habitasse
              mi interdum tellus tempus pellentesque diam. faucibus scelerisque
              quam scelerisque facilisi. Orem ipsum dolor sit amet, consectetur
              adipiscing elit. Adipiscing faucibus scelerisque quam scelerisque
              facilisi. Neque, aliquam condimentum ac pellentesque egestas eu eu
              non.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
