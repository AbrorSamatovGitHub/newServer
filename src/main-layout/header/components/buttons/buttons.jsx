import React from 'react'

const Buttons = ({img,text,num}) => {
  return (
    <div className='flex flex-col items-center gap-[6px] cursor-pointer relative'>
      <img src={img} alt="" />
      <p>{text}</p>
      <span className={ num ? `w-4 h-4 text-new2 bg-red-600 rounded-[50%] absolute text-white flex justify-center items-center right-3`:``}>{num}</span>
    </div>
  )
}

export default Buttons
