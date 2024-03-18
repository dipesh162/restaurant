import React from 'react'

function Navbar() {
  return (
    <div className='z-[1] font-din text-[18px] pt-[23px] pl-[35px] pr-[28px] text-[#333333] uppercase bg-transparent sticky top-0 flex'>
      <ul className='flex items-center'>
        <li className='text-[28px]'><a href="#">logo</a></li>
        <li className='ml-[56px]'><a href="#">about</a></li>
        <li className='ml-[48px]'><a href="#">Community</a></li>
        <li className='ml-[40px]'><a href="#">location</a></li>
        <li className='ml-[44px]'><a href="#">our menu</a></li>
        <li className='ml-[47px]'><a href="#">recipes</a></li>
      </ul>
      <ul className='flex items-center ml-auto gap-[60px]'>
        <li><a href="#">contact</a></li>
        <li className=''><a href="#">login</a></li>
      </ul>
    </div>
  )
}

export default Navbar