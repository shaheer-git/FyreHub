import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import cardArrow from '../../assets/Card-Arrow.svg'
import branding from '../../assets/branding-icon.svg'
import graphicD from '../../assets/Graphic-Design-icon.svg'
import webDesignDevIcon from '../../assets/wed-design-dev-icon.svg'
import socialMediaIcon from '../../assets/social-media-mangt-icon.svg'
import './Hero2.css'
import { Link } from 'react-router-dom'

export const Hero2 = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const services = [
    {
      title: 'Branding & Identity',
      icon: branding,
      description: 'We craft memorable brand identities that reflect your company\'s values and vision.'
    },
    {
      title: 'Graphic Design',
      icon: graphicD,
      description: 'From social media posts to print materials, we design stunning visuals tailored to your brand.'
    },
    {
      title: 'Web Design & Development',
      icon: webDesignDevIcon,
      description: 'Create engaging, user-friendly websites that look great on any device. We handle everything from design to development.',
      highlighted: false
    },
    {
      title: 'Social Media Management',
      icon: socialMediaIcon,
      description: 'Let us grow your online presence with content that resonates with your audience.'
    },
    {
      title: 'Content Creation',
      icon: branding,
      description: 'We produce captivating content including blogs, articles, and videos for your brand.'
    },
    {
      title: 'Digital Marketing & Advertising',
      icon: branding,
      description: 'Boost your reach with data-driven marketing strategies tailored to your goals.'
    },
    {
      title: 'Motion Graphics & Animation',
      icon: branding,
      description: 'Bring your ideas to life with stunning animations and motion graphics.'
    },
    {
      title: 'Photography & Videography',
      icon: branding,
      description: 'Capture your brand\'s essence through professional visual content.'
    },
    {
      title: 'Creative Consultation',
      icon: branding,
      description: 'Expert insights and strategies to breathe life into your brand.'
    }
  ]

  return (
    <div className='min-h-screen flex flex-col justify-center items-center py-16 md:py-20 px-4 md:px-8 mt-0 md:mt-5'>
      <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-6 leading-tight'>
        What <span className='text-[#AFFC41] font-bold'>We Do</span>
      </h1>

      <div className='w-full max-w-7xl'>
        {/* Desktop Grid */}
        <div className='hidden md:grid grid-cols-3 gap-6 lg:gap-8'>
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`relative cursor-pointer group transition-all duration-300 ${service.highlighted
                ? 'lg:col-span-1 lg:row-span-2'
                : ''
                }`}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`h-full rounded-3xl p-6 lg:p-8 flex flex-col items-center justify-start transition-all duration-300 overflow-hidden border-2 ${service.highlighted
                ? 'bg-[#AFFC41] text-[#252525] border-[#AFFC41]'
                : 'bg-[#2a2630] text-[#AFFC41] border border-[#AFFC41] hover:bg-[#AFFC41] hover:text-[#252525] hover:border-[#AFFC41]'
                }`}>
                {/* Arrow Icon */}
                {!service.highlighted && (
                  <img
                    src={cardArrow}
                    alt=""
                    className={`absolute -top-6 -right-6 w-16 h-16 opacity-30 group-hover:opacity-20 group-hover:rotate-[-90deg] transition-all duration-300 ${hoveredCard === idx ? 'opacity-0' : ''}`}
                  />
                )}

                {/* Service Icon */}
                <div className={`w-14 h-14 mb-4 flex items-center justify-center rounded-full transition-all duration-300 bg-[#AFFC41]
                  `}>
                  <img src={service.icon} alt={service.title} className={`w-8 h-8 object-contain transition-all duration-300 brightness-0`} />
                </div>

                {/* Service Title */}
                <h3 className={`text-lg lg:text-xl font-bold mb-3 text-center transition-colors ${service.highlighted
                  ? 'text-[#252525]'
                  : hoveredCard === idx
                    ? 'text-[#252525]'
                    : 'text-[#AFFC41]'
                  }`}>
                  {service.title}
                </h3>

                {/* Service Description - smoothly animated on hover or highlighted */}
                <AnimatePresence>
                  {(hoveredCard === idx || service.highlighted) && (
                    <motion.div
                      key="desc"
                      initial={{ opacity: 0, height: 0, y: 8 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      exit={{ opacity: 0, height: 0, y: 8 }}
                      transition={{ duration: 0.32, ease: [0.23, 1, 0.32, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p className={`text-sm text-center leading-relaxed ${
                        service.highlighted
                          ? 'text-[#252525]'
                          : hoveredCard === idx
                            ? 'text-[#252525]'
                            : 'text-white'
                      }`}>
                        {service.description}
                      </p>
                      <div className='flex items-center justify-center mt-3'>
                        <Link
                          to='/services'
                          className='opacity-90 bg-[#252525] cursor-pointer hover:bg-[#252525] text-[#AFFC41] px-3 py-2 rounded-md text-sm lg:text-base font-semibold transition-colors text-center'
                        >
                          View Services
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Grid */}
        <div className='md:hidden flex flex-col gap-4'>
          {services.slice(0, 3).map((service, idx) => (
            <div
              key={idx}
              className={`opacity-90 rounded-2xl p-6 transition-all duration-300 border bg-[#2a2630] text-[#AFFC41] border-[#AFFC41]
                `}
            >
              <div className='flex items-start gap-4'>
                <div className={`w-12 h-12 flex items-center justify-center rounded-lg flex-shrink-0 transition-all duration-300 bg-[#AFFC41] group-hover:bg-[#252525] group-hover:bg-opacity-20
                  `}>
                  <img src={service.icon} alt={service.title} className={`w-6 h-6 object-contain transition-all duration-300 brightness-0`} />
                </div>
                <div className='flex-1'>
                  <h3 className={`text-base font-bold mb-2 transition-colors text-[#AFFC41]`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm transition-colors text-[#AFFC41]`}>
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className='flex items-center justify-center'>
            <Link
              to='/services'
              className='opacity-90 bg-[#AFFC41] cursor-pointer hover:bg-[#aefc419d] text-[#252525] px-3 py-2 rounded-md text-sm lg:text-base font-semibold transition-colors text-center w-1/2'
            >
              See All
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
