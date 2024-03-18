import React from 'react'
import instagramBtn from '/images/instagram-btn.svg'

function FoodImage({image}) {
  return (
    <div className="z-[1] h-[250px] w-[250px] bg-white p-[15px] relative shadow-[0px_15px_50px_#0000000F]">
        <img className='top-0 right-0 absolute' src={instagramBtn} alt="" />
        <img src={image} alt="" />
    </div>
  )
}

export default FoodImage