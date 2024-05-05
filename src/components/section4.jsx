import React from 'react';
import abstact from '../images/abstrack.jpg';
import image from "../images/Rectangle 5 (3).svg";
import boximage from '../images/AID BOX.svg'
const Sections4 = () => {
  return (
    <div className="max-[1259px] mx-auto h-[500px] pt-44 pl-[80px] pr-14 flex justify-center items-center">
      <div className="flex gap-[60px] relative items-center mt-20">
        <div className="w-[466px] h-[320px] py-11 relative">
          <h2 style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '40px', lineHeight: '56px', letterSpacing: '0.5%' }}>Lorem <span style={{ color: '#86A7FF' }}>Ipsum</span></h2>
          <p style={{fontFamily:'Inter',fontWeight:400,lineHeight:'24px',color:'#A4A9A7'}}>
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
          <img src={boximage} alt="" className='absolute  top-[350px] -z-10 left-[-80px] w-40 h-40 text-[#E8EEFF]' />

        </div>
        <div className="pt-[56px] relative px-20">
          <div className="absolute -z-50 top-8 right-[0px]">
            <img src={abstact} alt="" />
          </div>
          <div className="z-50 relative left-18">
            <img src={image} alt="" className="w-[651px] h-[408px]" />
          </div>
          <div className="absolute right-[110px] top-32 -z-40">
            <div className="w-[530px] h-[330px] bg-[#E8EEFF] z-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sections4;
