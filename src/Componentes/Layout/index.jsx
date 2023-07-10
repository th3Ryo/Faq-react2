import { useState, useEffect } from 'react';
import React from 'react'



const Layout = ({ isMobile, children }) => {

  return (
    <div className='flex justify-center items-center w-full h-screen bg-gradient-to-b from-violet to-blue text-texto'>
      <div 
      className={`flex ${isMobile ===true ? 'flex-col w-10/12 mt-24 ': 'flex-row w-[935px] h-[510px] ' }bg-white rounded-3xl font-kumbh` }
      
      >
          {children}
      </div>
    </div>
  )
}

export {Layout}