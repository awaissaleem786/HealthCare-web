import React from 'react'
import manpicture from '../images/portrait-smiling-handsome-male-doctor-man-removebg.svg'
const Sections5 = () => {
  return (
    <>
      <div className='w-full mx-auto h-[430px] mt-80  mr-14 bg-[#E8EEFF]'>

         <div className='flex justify-center  gap-14'>
          <div className='image-section relative bottom-20'>
           <img src={manpicture} alt="" className='w-[578px]  h-[512px]' />
          </div>
          <div className='text-section w-96 text-center'>
         <h1 style={{fontSize:"40px",fontWeight:600,lineHeight:"56px",paddingTop:'52px',textAlign:'center',fontFamily:'Inter'}}>Book Free <span className='text-[#86A7FF]'>Recall</span></h1>
         <p style={{fontFamily:'Inter',fontWeight:400,lineHeight:'24px',textAlign:'center',paddingTop:'32px'}} className='text-[#A4A9A7]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing faucibus scelerisque quam scelerisque facilisi. Neque, aliquam condimentum ac pellentesque egestas eu eu non. Etiam pellentesque donec in gravida praesent amet. Risus, quis habitasse mi interdum tellus tempus pellentesque diam.  faucibus scelerisque quam scelerisque facilisi.</p>
         <button className='mt-5 py-5 px-10 rounded-[10px] text-[16px] text-white font-medium leading-4 bg-[#4B66AE]'>Book Now!</button>
          </div>
         </div>
      </div>
    </>
  )
}

export default Sections5;
