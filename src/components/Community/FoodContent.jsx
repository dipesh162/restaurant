import React from 'react'
import comment from '/images/comment.svg'
import like from '/images/like.svg'

function FoodContent({name,comments,likes,content}) {
  return (
    <div className='z-[1] h-[250px] tracking-[0.1px] w-[250px] bg-white relative pt-[30px] px-[30px] pb-[50px] shadow-[0px_15px_50px_#0000000F]'>
        <h3 className='mb-4 text-[22px] text-[#333333] font-din'>@${name}</h3>
        <p className='font-gillSans text-[#333333] text-[15px] leading-[20px]'>
            {content}
        </p>
        <div className='flex gap-[15px] absolute bottom-[13px] right-[30px] font-bold'>
            <div className='flex gap-[4.8px] items-center'>
                <img src={comment} width={12} height={13} alt="" />
                <p className='text-[14px] text-[#333333]'>{comments}</p>
            </div>
            <div className='flex gap-[4.8px] items-center'>
                <img src={like} width={13} height={11} alt="" />
                <p className='text-[14px] text-[#333333]'>{likes}</p>
            </div>
        </div>
    </div>
  )
}

export default FoodContent