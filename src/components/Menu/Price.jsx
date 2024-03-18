import React from 'react'

function Price({price}) {
  return (
    <div className='w-[53px] text-[14px] h-[28px] gap-[0.5px] border-[#FFDAC9] border-[2px] flex items-center justify-center font-din'><span>&pound;</span><span>{price}</span></div>
  )
}

export default Price