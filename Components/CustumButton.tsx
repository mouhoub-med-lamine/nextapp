// import React from 'react'

// const CustumButton = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default CustumButton


"use client";

import { CustomButtonProps } from "@/types";
import Image from "next/image";


const Button = ({ isDisabled, btnType, containerStyles, textStyles, title, rightIcon, handleClick }: CustomButtonProps) => (
  

  <button
    disabled={isDisabled}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
  >
    <span className={`flex-1 ${textStyles}`}>{title}</span>
    {rightIcon && (
      <div className="relative w-6 h-6">
        <Image
          src={rightIcon}
          alt="arrow_left"
          fill
          className="object-contain"
        />
      </div>
    )}
  </button>
);

export default Button;