import React from 'react'
import "../Style/button.css"
const Button = ({button, background, boxshadow, width}) => {
  return (
    <div>
      <button className={`button px-8 py-3  bg-[${background}] ${boxshadow} text-white w-${width}`}>{button}</button>
    </div>
  )
}

export default Button
