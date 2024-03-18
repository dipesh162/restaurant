import React from 'react'
import Logo from './Logo'

function HeroSection() {
  return (
    <div className='-mt-[65px] h-[768px] bg-[#FFDAC9] bg-hero relative'>
      <div className='absolute w-[208px] h-[208px] flex items-center justify-center top-[97px] left-[243px]'>
        <Logo/>
      </div>
      <div className='font-din leading-[1] w-full text-white flex flex-col items-center pt-[323px]'>
        <div className='text-[82px] '>THE BEST FOODIE </div>
        <h1 className='text-[115px]'>EXPERIENCE</h1>
        <h4 className='text-[35px]'>NOW IN LONDON</h4>
      </div>
    </div>
  )
}

export default HeroSection