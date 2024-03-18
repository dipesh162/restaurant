import React from 'react'

function Footer() {
  return (
    <div className='bg-[#333333] pt-[64px] pl-[136px] pr-[146px] pb-[43px] '>
      <div className='flex mb-[47px] gap-[20px] justify-between'>
        <div className='flex'>
          {[...Array(5)].map((_,i)=>(
            <Sections key={i} index={i}/>
          ))}
        </div>
        <div className='text-[#fff] font-din leading-[1] flex flex-col'>
          <div className='text-[35px]'>THIS IS THE</div>
          <div className='text-[62px] text-right mr-[-2px]'>LOGO</div>
        </div>
      </div>
      <div className='flex justify-between items-center font-gillSans'>
        <p className='text-[#767676] text-[13px]'>2017. Company. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .</p>
        <div className='flex gap-[40px]  items-center'>
          <a href='#'><img src="/images/Footer/facebook-icon.png" className='w-[8px] h-[18px]' alt="" /></a>
          <a href='#'><img src="/images/Footer/twitter-icon.png" className='w-[15px] h-[12px]'  alt="" /></a>
          <a href='#'><img src="/images/Footer/instagram-icon.png" className='w-[16px] h-[16px]'  alt="" /></a>
          <a href='#'><img src="/images/Footer/Linkedin-icon.png" className='w-[14px] h-[14px]'  alt="" /></a>
        </div>
      </div>
    </div>
  )
}

function Sections({index}){
  return(
    <div className='text-[#767676]'>
      <p className='w-[115px] text-[#FFDAC9] uppercase font-din text-[14px] tracking-[0.1px]'>Section {index+1}</p>
      <p className='mt-[15px] text-[13px]'>Subsections</p>
      <p className='mt-[15px] text-[13px]'>Subsections</p>
      <p className='mt-[15px] text-[13px]'>Subsections</p>
      <p className='mt-[15px] text-[13px]'>Subsections</p>
    </div>
  )
}

export default Footer