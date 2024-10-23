import React from 'react'


const Input = ({label, placeholder, placeholderColor, font}: any) => {
  return (
    <div className=" flex flex-col w-[40%] text-white mb-2">
    <label htmlFor="username" className={`mb-2 font-light text-${placeholderColor} font-${font} text-xs`}>{label}</label>
      <input type="text"  name="username" placeholder={placeholder} className="border rounded-sm py-2 pl-2 pr-5 focus:outline-none w-[100%] text-xs" />
  </div>
  
  )
}

export default Input
