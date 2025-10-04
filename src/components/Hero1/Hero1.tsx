import React from 'react'
import greekG from '../../assets/Elucid-Picture.svg'
import creativeText from '../../assets/Creative-Text.svg'
import designText from '../../assets/Design-Text.svg'
import marketingText from '../../assets/Marketing-Text.svg'

import './Hero1.css'

export const Hero1 = () => {
  return (
    <div className='h-screen'>
      <div className='h-full'>
        <div className='flex items-center justify-center relative w-full'>
          <div className='w-4/6 h-[532px] flex flex-col justify-center'>
            <div className=''>
              <p className='text-8xl font-light text-white leading-tight w-4/5'>Are You Looking</p>
            </div>
            <div className='flex'>
              <p className='text-8xl font-light text-white leading-tight'>For a </p>
              <div className="text-container">
                <div className="p-2 text-slide mt-4 ml-2">
                  <img src={creativeText} alt="" srcSet="" />
                </div>
                <div className="p-2 text-slide">
                  <img src={designText} alt="" srcSet="" />
                </div>
                <div className="p-2 text-slide">
                  <img src={marketingText} alt="" srcSet="" />
                </div>
              </div>
            </div>
            <div className=''>
              <p className='text-8xl font-light text-white leading-tight'>Agency</p>
            </div>
          </div>
          <div className='absolute left-1/4'>
            <img src={greekG} alt="one stop solution for brand needs" srcSet="" className='' />
          </div>
          <div className='h-full w-full absolute flex items-center justify-center top-[56%]'>
            <div className='h-[38%] w-full bg-[#AFFC41] rounded-3xl flex items-center justify-around m-3'>
              <div className="feature-count bg-[#252525] hover:border hover:border-[#252525] h-3/6 cursor-pointer hover:bg-[#AFFC41] w-1/6 rounded-lg flex items-center justify-center flex-col">
                <div className='text-white text-4xl font-bold'>20+</div>
                <span className='text-white'>Completed Projects</span>
              </div>
              <div className="feature-count bg-[#252525] hover:border hover:border-[#252525] h-3/6 cursor-pointer hover:bg-[#AFFC41] w-1/6 rounded-lg flex items-center justify-center flex-col">
                <div className='text-white text-4xl font-bold'>8+</div>
                <span className='text-white'>Happy Clients</span>
              </div>
              <div className="feature-count bg-[#252525] hover:border hover:border-[#252525] h-3/6 cursor-pointer hover:bg-[#AFFC41] w-1/6 rounded-lg flex items-center justify-center flex-col">
                <div className='text-white text-4xl font-bold'>4+ Years</div>
                <span className='text-white'>Industry Experience</span>
              </div>
              <div className="feature-count bg-[#252525] hover:border hover:border-[#252525] h-3/6 cursor-pointer hover:bg-[#AFFC41] w-1/6 rounded-lg flex items-center justify-center flex-col">
                <div className='text-[#AFFC41] text-4xl font-bold'>6+</div>
                <span className='text-[#AFFC41]'>Recent Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
