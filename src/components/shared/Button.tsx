import React from 'react'
import Down from "../../assets/down-logo.png";

const Button = () => {
  return (
    <div className="flex justify-center items-center mt-5">
        <button className="flex items-center justify-between border border-[#753BBD] px-3 py-2 rounded-md">
          <span className="mr-2 text-[#753BBD]">See more</span>
          <img src={Down} alt="See more icon" />
        </button>
      </div>
  )
}

export default Button
