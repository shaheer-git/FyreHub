import greekG from '../../assets/Elucid-Picture.svg'
import creativeText from '../../assets/Creative-Text.svg'
import designText from '../../assets/Design-Text.svg'
import marketingText from '../../assets/Marketing-Text.svg'
import './Hero1.css'

export const Hero1 = () => {
  return (
    <div id="about-us" className='min-h-auto sm:min-h-screen md:h-screen'>
      <div className='h-full'>
        <div className='flex flex-col items-center justify-center relative w-full mt-10'>
          <div className='w-11/12 sm:w-4/6 h-auto sm:h-[330px] flex flex-col justify-center'>
            <div className=''>
              <p className='text-4xl sm:text-4xl md:text-6xl lg:text-8xl font-light text-white leading-tight w-full text-center sm:text-left'>Are You Looking</p>
            </div>
            <div className='flex flex-wrap justify-center sm:justify-start'>
              <p className='text-4xl sm:text-4xl md:text-6xl lg:text-8xl font-light text-white leading-tight'>For a </p>
              <div className="text-container">
                <div className="p-2 text-slide lg:mt-4 ml-2">
                  <img src={creativeText} alt="" srcSet="" className='' />
                </div>
                <div className="p-2 text-slide">
                  <img src={designText} alt="" srcSet="" className='' />
                </div>
                <div className="p-2 text-slide">
                  <img src={marketingText} alt="" srcSet="" className='' />
                </div>
              </div>
            </div>
            <div className=''>
              <p className='text-4xl sm:text-4xl md:text-6xl lg:text-8xl font-light text-white leading-tight text-center sm:text-left'>Agency</p>
            </div>
          </div>
          <div className='fixed left-[-76%] opacity-[0.2] md:opacity-100 md:absolute md:left-1/4 md:top-[5px]'>
            <img src={greekG} alt="one stop solution for brand needs" srcSet="" className='' />
          </div>
          <div className='w-full mt-12 relative z-20 px-4 sm:px-6'>
            <div className='bg-[#AFFC41] rounded-2xl md:rounded-3xl p-4 md:p-5 lg:p-6 xl:p-8'>
              {/* Stats Grid */}
              <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5 xl:gap-6'>

                {/* Stat Card 1 */}
                <div className="group bg-[#252525] hover:bg-[#AFFC41] hover:border-2 hover:border-[#252525] rounded-xl transition-all duration-300 cursor-pointer">
                  <div className='flex flex-col items-center justify-center py-5 px-3 md:py-6 md:px-4 lg:py-8 lg:px-5'>
                    <div className='text-white group-hover:text-[#252525] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1.5 md:mb-2'>
                      20+
                    </div>
                    <span className='text-white group-hover:text-[#252525] text-xs sm:text-sm md:text-base text-center font-medium'>
                      Completed Projects
                    </span>
                  </div>
                </div>

                {/* Stat Card 2 */}
                <div className="group bg-[#252525] hover:bg-[#AFFC41] hover:border-2 hover:border-[#252525] rounded-xl transition-all duration-300 cursor-pointer">
                  <div className='flex flex-col items-center justify-center py-5 px-3 md:py-6 md:px-4 lg:py-8 lg:px-5'>
                    <div className='text-white group-hover:text-[#252525] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1.5 md:mb-2'>
                      8+
                    </div>
                    <span className='text-white group-hover:text-[#252525] text-xs sm:text-sm md:text-base text-center font-medium'>
                      Happy Clients
                    </span>
                  </div>
                </div>

                {/* Stat Card 3 */}
                <div className="group bg-[#252525] hover:bg-[#AFFC41] hover:border-2 hover:border-[#252525] rounded-xl transition-all duration-300 cursor-pointer">
                  <div className='flex flex-col items-center justify-center py-5 px-3 md:py-6 md:px-4 lg:py-8 lg:px-5'>
                    <div className='text-white group-hover:text-[#252525] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1.5 md:mb-2'>
                      4+ Years
                    </div>
                    <span className='text-white group-hover:text-[#252525] text-xs sm:text-sm md:text-base text-center font-medium'>
                      Industry Experience
                    </span>
                  </div>
                </div>

                {/* Stat Card 4 - Highlighted */}
                <div className="group bg-[#252525] hover:bg-[#AFFC41] hover:border-2 hover:border-[#252525] rounded-xl transition-all duration-300 cursor-pointer">
                  <div className='flex flex-col items-center justify-center py-5 px-3 md:py-6 md:px-4 lg:py-8 lg:px-5'>
                    <div className='text-[#AFFC41] group-hover:text-[#252525] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1.5 md:mb-2'>
                      6+
                    </div>
                    <span className='text-[#AFFC41] group-hover:text-[#252525] text-xs sm:text-sm md:text-base text-center font-medium'>
                      Recent Clients
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
