import React from 'react'

function Tag({text,pl,pr}) {
  return (
    <div style={{paddingLeft:`${pl}px`, paddingRight:`${pr}px`}} className={`bg-[#FFDAC9] w-fit text-[#333333] font-bold font-din tracking-[0.1px] py-[1.5px] text-[18px] uppercase`}>{text}</div>
  )
}

export default Tag