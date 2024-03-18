import React from 'react'
import detail2 from '/images/detail02@2x.png'
import LineThroughText from '../UI/LineThroughText'

function Collaboration() {
  return (
    <div className='bg-[#FFDAC9] relative pt-[82.9px] pl-[146.9px] pr-[145px] overflow-hidden pb-[65px] flex justify-between'>
      <div>
        <div>
          <img src={detail2} width={134} height={98} alt="" className=' absolute right-[418px] top-[8px]'/>
          <div className='leading-[44px] pb-2 mb-[19px] pr-[20px] text-[35px] font-din text-[#333333]'>
            COLLABORATE         
            <LineThroughText
              text='WITH US'
              strikeColor='#FFFFFF' 
              strikeHeight={9}
              strikeWidth='194'
              leftPos='-15px'
            />
          </div>
        </div>
        <div className='w-[322px] gap-[29px] flex flex-col justify-between'>
          <p className='text-[#767676] placeholder:text-[#767676] text-[15px] leading-[20px] font-gillSans tracking-[0.1px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className='text-[#767676] placeholder:text-[#767676] text-[15px] leading-[20px] font-gillSans tracking-[0.1px]'>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          </p>
        </div>
      </div>

      <div className='grid grid-rows-[repeat(3,60px)] gap-x-[25px] gap-y-[20px] grid-cols-[repeat(2,250px)] mt-[38px]'>
        <div className='bg-yellow w-100 flex flex-col gap-[11px] h-[60px]'>
          <h2 className='uppercase h-[25px] flex items-center pb-2 text-[14px] text-[#333333] font-din tracking-[0.1px]'>name</h2>
          <input type="text" placeholder='Name' className="placeholder:text-[#767676] text-[15px] font-gillSans h-[25px] pb-3 w-full border-b bg-[#FFDAC9] bg-bottom border-[#333333] focus:outline-none"/>
        </div>
        <div className='bg-yellow w-100 flex flex-col gap-[11px] h-[60px]'>
          <h2 className='uppercase h-[25px] flex items-center pb-2 text-[14px] text-[#333333] font-din tracking-[0.1px]'>surname</h2>
          <input type="text" placeholder='Surname' className="placeholder:text-[#767676] text-[15px] font-gillSans h-[25px] pb-3 w-full border-b bg-[#FFDAC9] bg-bottom border-[#333333] focus:outline-none"/>
        </div>
        <div className='bg-yellow w-100 flex flex-col gap-[11px] h-[60px]'>
          <h2 className='uppercase h-[25px] flex items-center pb-2 text-[14px] text-[#333333] font-din tracking-[0.1px]'>phone</h2>
          <input type="text" placeholder='Phone' className="placeholder:text-[#767676] text-[15px] font-gillSans h-[25px] pb-3 w-full border-b bg-[#FFDAC9] bg-bottom border-[#333333] focus:outline-none"/>
        </div>
        <div className='bg-yellow w-100 flex flex-col gap-[11px] h-[60px]'>
          <h2 className='uppercase h-[25px] flex items-center pb-2 text-[14px] text-[#333333] font-din tracking-[0.1px]'>email address</h2>
          <input type="email" placeholder='Email' className="placeholder:text-[#767676] text-[15px] font-gillSans h-[25px] pb-3 w-full border-b bg-[#FFDAC9] bg-bottom border-[#333333] focus:outline-none"/>
        </div>
        <div className='bg-yellow w-100 flex flex-col gap-[11px] h-[60px]'>
          <h2 className='uppercase h-[25px] flex items-center pb-2 bg-[#FFDAC9] text-[14px] text-[#333333] font-din tracking-[0.1px]'>experience</h2>
          <select value='Select' className="text-[#767676] text-[15px] pb-1.5 font-gillSans bg-[#FFDAC9] w-full border-b border-[#333333] focus:outline-none">
            <option value="1">Select</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </div>
        <div className='bg-yellow w-100 flex flex-col gap-[11px] h-[60px]'>
          <h2 className='uppercase h-[25px] flex items-center pb-2 bg-[#FFDAC9] text-[14px] text-[#333333] font-din tracking-[0.1px]'>where did you hear about us?</h2>
          <select value='Select' className="text-[#767676] text-[15px] pb-1.5 font-gillSans bg-[#FFDAC9] w-full border-b-[1px] border-[#333333] focus:outline-none">
            <option value="1">Select</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </div>

        <div></div>
        <button className='mt-[25px] justify-self-end uppercase bg-[#333333] font-din tracking-[0.1px] text-[#FFDAC9] h-[30px] w-[64px] flex items-center justify-center'>
          send
        </button>
      </div>
    </div>
  )
}

export default Collaboration