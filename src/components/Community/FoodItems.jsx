import React from 'react'
import FoodImage from './FoodImage'
import FoodContent from './FoodContent'

function FoodItems({flex,content,image,name,likes, comments}) {
  return (
    <div style={{flexDirection: flex}} className={`z-[1] flex flex-row-reverse gap-[25px]`}>
        <FoodImage
            image={image}
        />
        <FoodContent
            name={name}
            content={content}
            likes={likes}
            comments={comments}
        />
    </div>
  )
}

export default FoodItems