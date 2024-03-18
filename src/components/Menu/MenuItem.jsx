import React from 'react'
import Price from './Price'

function MenuItem({item}) {
  return (
    <div className='mt-[45px] w-fit'>
        <h3 className='mb-2 text-[#333333] text-[14px] font-din tracking-[0.1px]'>{item.title}</h3>
        <p className='text-[#767676] w-[192px] text-[15px] leading-[20px] mb-[11px] font-gillSans'>{item.desc}</p>
        <Price
            price={item.price}
        />
    </div>
  )
}

export default MenuItem