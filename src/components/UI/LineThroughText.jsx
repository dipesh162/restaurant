import React from 'react'

function LineThroughText({text, strikeColor, strikeHeight, strikeWidth, leftPos}) {
  return (
    <div className='relative'>
        <h1 className={`z-[1] w-fit text-[62px] font-din text-[#333333] uppercase relative`}>{text}</h1>
        <div 
        style={{height: `${strikeHeight}px` ,background: `${strikeColor}`, width: `${strikeWidth}px`, left: `${leftPos}px`}} 
        className={`bg-[${strikeColor}] h-[${strikeHeight}px] w-[${strikeWidth}px] absolute top-0 bottom-0 m-auto`}></div>
    </div>

    // <h2 className={`before:content-[''] before:block before:bg-color-[${strikeColor}] before:h-${strikeHeight} before:w-[${strikeWidth}px] z-[1] w-fit absolute text-[62px] font-din text-[#333333] uppercase`}>{text}</h2>
  )
}

export default LineThroughText