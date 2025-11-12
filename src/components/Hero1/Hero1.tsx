import React from 'react'
import greekG from '../../assets/Elucid-Picture.svg'
import creativeText from '../../assets/Creative-Text.svg'
import designText from '../../assets/Design-Text.svg'
import marketingText from '../../assets/Marketing-Text.svg'

import './Hero1.css'

export const Hero1 = () => {
  return (
    <div className='min-h-screen pt-16 md:pt-20'>
      <div className='h-full'>
        <div className='flex flex-col-reverse md:flex-row items-center justify-center relative w-full px-4 md:px-8 py-8 md:py-0'>
          <div className='w-full md:w-4/6 h-auto md:h-[532px] flex flex-col justify-center'>
            <div className=''>
              <p className='text-4xl md:text-6xl lg:text-8xl font-light text-white leading-tight'>Are You Looking</p>
            </div>
            <div className='flex flex-col md:flex-row items-start md:items-center'>
              <p className='text-4xl md:text-6xl lg:text-8xl font-light text-white leading-tight'>For a </p>
              <div className="text-container">
                <div className="p-2 text-slide mt-4 ml-2">
                  <img src={creativeText} alt="" className='h-12 md:h-16 lg:h-[90px]' />
                </div>
                <div className="p-2 text-slide">
                  <img src={designText} alt="" className='h-12 md:h-16 lg:h-[90px]' />
                </div>
                <div className="p-2 text-slide">
                  <img src={marketingText} alt="" className='h-12 md:h-16 lg:h-[90px]' />
                </div>
              </div>
            </div>
            <div className=''>
              <p className='text-4xl md:text-6xl lg:text-8xl font-light text-white leading-tight'>Agency</p>
            </div>
          </div>
          <div className='relative md:absolute md:left-1/4 mb-8 md:mb-0 w-full md:w-auto flex justify-center'>
            <img src={greekG} alt="one stop solution for brand needs" className='w-48 md:w-64 lg:w-80' />
          </div>
          <div className='h-full w-full absolute flex items-center justify-center top-auto md:top-[56%] px-4'>
            <div className='h-auto md:h-[38%] w-full bg-[#AFFC41] rounded-2xl md:rounded-3xl flex items-center justify-around flex-col md:flex-row gap-4 md:gap-0 m-2 md:m-3 p-4 md:p-0'>
              <div className="feature-count bg-[#252525] hover:border hover:border-[#252525] h-auto md:h-3/6 cursor-pointer hover:bg-[#AFFC41] w-full md:w-1/6 rounded-lg flex items-center justify-center flex-col p-4 md:p-0">
                <div className='text-white text-2xl md:text-3xl lg:text-4xl font-bold'>20+</div>
                <span className='text-white text-xs md:text-sm text-center'>Completed Projects</span>
              </div>
              <div className="feature-count bg-[#252525] hover:border hover:border-[#252525] h-auto md:h-3/6 cursor-pointer hover:bg-[#AFFC41] w-full md:w-1/6 rounded-lg flex items-center justify-center flex-col p-4 md:p-0">
                <div className='text-white text-2xl md:text-3xl lg:text-4xl font-bold'>8+</div>
                <span className='text-white text-xs md:text-sm text-center'>Happy Clients</span>
              </div>
              <div className="feature-count bg-[#252525] hover:border hover:border-[#252525] h-auto md:h-3/6 cursor-pointer hover:bg-[#AFFC41] w-full md:w-1/6 rounded-lg flex items-center justify-center flex-col p-4 md:p-0">
                <div className='text-white text-2xl md:text-3xl lg:text-4xl font-bold'>4+ Years</div>
                <span className='text-white text-xs md:text-sm text-center'>Industry Experience</span>
              </div>
              <div className="feature-count bg-[#252525] hover:border hover:border-[#252525] h-auto md:h-3/6 cursor-pointer hover:bg-[#AFFC41] w-full md:w-1/6 rounded-lg flex items-center justify-center flex-col p-4 md:p-0">
                <div className='text-[#AFFC41] text-2xl md:text-3xl lg:text-4xl font-bold'>6+</div>
                <span className='text-[#AFFC41] text-xs md:text-sm text-center'>Recent Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
