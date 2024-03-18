import React from 'react'

function Location() {
  return (
    <div className='relative w-full overflow-hidden'>
      <div className='absolute w-[220px] h-[106px] bg-white text-[#333333] top-[70.9px] left-[128px] pl-[18px] pr-[30px] pb-[15.8px]'>
        <div className='flex flex-col mt-[-38px]'>
          <h1 className='text-[62px] font-din'>LOCATION</h1>
          <h4 className='font-[15px] mt-[-8px] leading-[20px] tracking-[0.1px] w-[172px] font-gillSans'>
            12 Upper St. Martin’s Lane WC2H 9FB, London
          </h4>
        </div>
      </div>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.0367587431438!2d-0.1295107238721677!3d51.51254161032834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604cd07b8f52b%3A0x637fa6323b3a21fe!2s12%20Upper%20St%20Martin&#39;s%20Ln%2C%20London%20WC2H%209FB%2C%20UK!5e0!3m2!1sen!2sin!4v1710759500850!5m2!1sen!2sin" 
        width="100%" 
        height="500" 
        style={{border:0}} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  )
}

export default Location