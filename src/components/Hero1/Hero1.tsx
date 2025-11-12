import React from 'react'
import greekG from '../../assets/Elucid-Picture.svg'
import creativeText from '../../assets/Creative-Text.svg'
import designText from '../../assets/Design-Text.svg'
import marketingText from '../../assets/Marketing-Text.svg'
import './Hero1.css'

export const Hero1 = () => {
  return (
    <div className='min-h-screen w-full bg-[#17141b] flex items-center justify-center px-4 md:px-8 lg:px-12 pt-20 md:pt-24'>
      <div className='w-full max-w-7xl'>
        {/* Main Hero Content */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 md:mb-24'>
          {/* Left Side - Text Content */}
          <div className='flex flex-col justify-center'>
            <div className='mb-4'>
              <p className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight'>
                Are You Looking
              </p>
            </div>
            
            <div className='flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mb-4'>
              <p className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight'>
                For a 
              </p>
              <div className="text-container h-16 md:h-20 lg:h-24">
                <div className="text-slide">
                  <img src={creativeText} alt="Creative" className='h-12 md:h-16 lg:h-20' />
                </div>
                <div className="text-slide">
                  <img src={designText} alt="Design" className='h-12 md:h-16 lg:h-20' />
                </div>
                <div className="text-slide">
                  <img src={marketingText} alt="Marketing" className='h-12 md:h-16 lg:h-20' />
                </div>
              </div>
            </div>

            <div className=''>
              <p className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight'>
                Agency
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className='flex justify-center lg:justify-end'>
            <img 
              src={greekG} 
              alt="Creative Agency" 
              className='w-48 sm:w-56 md:w-64 lg:w-80 h-auto object-contain'
            />
          </div>
        </div>

        {/* Stats Bar */}
        <div className='w-full bg-[#AFFC41] rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6'>
            <div className="feature-count bg-[#252525] hover:bg-[#AFFC41] cursor-pointer rounded-lg md:rounded-xl p-4 md:p-6 flex flex-col items-center justify-center transition-colors duration-200 group">
              <div className='text-white group-hover:text-[#252525] text-2xl md:text-3xl lg:text-4xl font-bold'>20+</div>
              <span className='text-white group-hover:text-[#252525] text-xs md:text-sm text-center mt-2'>Completed Projects</span>
            </div>
            
            <div className="feature-count bg-[#252525] hover:bg-[#AFFC41] cursor-pointer rounded-lg md:rounded-xl p-4 md:p-6 flex flex-col items-center justify-center transition-colors duration-200 group">
              <div className='text-white group-hover:text-[#252525] text-2xl md:text-3xl lg:text-4xl font-bold'>8+</div>
              <span className='text-white group-hover:text-[#252525] text-xs md:text-sm text-center mt-2'>Happy Clients</span>
            </div>
            
            <div className="feature-count bg-[#252525] hover:bg-[#AFFC41] cursor-pointer rounded-lg md:rounded-xl p-4 md:p-6 flex flex-col items-center justify-center transition-colors duration-200 group">
              <div className='text-white group-hover:text-[#252525] text-2xl md:text-3xl lg:text-4xl font-bold'>4+</div>
              <span className='text-white group-hover:text-[#252525] text-xs md:text-sm text-center mt-2'>Years Industry</span>
            </div>
            
            <div className="feature-count bg-[#252525] hover:bg-[#AFFC41] cursor-pointer rounded-lg md:rounded-xl p-4 md:p-6 flex flex-col items-center justify-center transition-colors duration-200 group">
              <div className='text-[#AFFC41] group-hover:text-[#252525] text-2xl md:text-3xl lg:text-4xl font-bold'>6+</div>
              <span className='text-[#AFFC41] group-hover:text-[#252525] text-xs md:text-sm text-center mt-2'>Recent Clients</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
