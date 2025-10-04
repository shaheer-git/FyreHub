import React, { useEffect, useState } from 'react'
import logo from '../assets/fyreLogo.svg'

export const Navbar = () => {

  return (
    <div className='bg-opacity-10 w-full sticky z-50 top-[5px] mt-[5px] flex items-center justify-center'>
      <div className='flex items-center justify-between border border-[#AFFC41] rounded-[20px] p-[10px] w-4/5 backdrop-blur-lg '>
        <img src={logo} alt="FyreHub" srcSet="" className='cursor-pointer' />
        <div className='flex items-center justify-around gap-5'>
          <div className='text-[#AFFC41] cursor-pointer hover:border-[#AFFC41] hover:border-b-2 hover:text-[#aefc419d]'>Home</div>
          <div className='text-[#AFFC41] cursor-pointer hover:border-[#AFFC41] hover:border-b-2 hover:text-[#aefc419d]'>About Us</div>
          <div className='text-[#AFFC41] cursor-pointer hover:border-[#AFFC41] hover:border-b-2 hover:text-[#aefc419d]'>What We Do</div>
          <div className='text-[#AFFC41] cursor-pointer hover:border-[#AFFC41] hover:border-b-2 hover:text-[#aefc419d]'>Our Works</div>
          <div className='bg-[#AFFC41] cursor-pointer hover:border-[#AFFC41] hover:text-[#25252590] text-[#252525] p-2 rounded-md'>Work With Us</div>
        </div>
      </div>
    </div>
  )
}
