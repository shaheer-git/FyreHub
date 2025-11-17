import React, { useState } from 'react'
import cardArrow from '../../assets/Card-Arrow.svg'
import branding from '../../assets/branding-icon.svg'
import graphicD from '../../assets/Graphic-Design-icon.svg'
import webDesignDevIcon from '../../assets/wed-design-dev-icon.svg'
import socialMediaIcon from '../../assets/social-media-mangt-icon.svg'
import './Hero2.css'

export const Hero2 = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

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
      highlighted: true
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
    <div className='min-h-screen flex flex-col justify-center items-center py-16 md:py-20 px-4 md:px-8'>
      <div className='mb-12 md:mb-16 text-center'>
        <p className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#AFFC41]'>what we do</p>
      </div>
      
      <div className='w-full max-w-7xl'>
        {/* Desktop Grid */}
        <div className='hidden md:grid grid-cols-3 gap-6 lg:gap-8'>
          {services.map((service, idx) => (
            <div 
              key={idx}
              className={`relative cursor-pointer group transition-all duration-300 ${
                service.highlighted 
                  ? 'lg:col-span-1 lg:row-span-2' 
                  : ''
              }`}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`h-full rounded-3xl p-6 lg:p-8 flex flex-col items-center justify-start transition-all duration-300 overflow-hidden border-2 ${
                service.highlighted
                  ? 'bg-[#AFFC41] text-[#252525] border-[#AFFC41]'
                  : 'bg-[#2a2630] text-[#AFFC41] hover:bg-[#AFFC41] border-[#2a2630] hover:border-[#AFFC41]'
              }`}>
                {/* Arrow Icon */}
                {!service.highlighted && (
                  <img
                    src={cardArrow}
                    alt=""
                    className={`absolute -top-6 -right-6 w-16 h-16 opacity-30 group-hover:opacity-20 transition-opacity ${hoveredCard === idx ? 'opacity-0' : ''}`}
                  />
                )}

                {/* Service Icon */}
                <div className={`w-14 h-14 mb-4 flex items-center justify-center rounded-full transition-all duration-300 ${
                  service.highlighted
                    ? 'bg-[#252525] bg-opacity-10'
                    : hoveredCard === idx
                    ? 'bg-[#252525] bg-opacity-20'
                    : 'bg-[#AFFC41] bg-opacity-20'
                }`}>
                  <img src={service.icon} alt={service.title} className={`w-8 h-8 object-contain transition-all duration-300 ${
                    service.highlighted
                      ? 'brightness-0'
                      : hoveredCard === idx
                      ? 'brightness-0 invert'
                      : ''
                  }`} />
                </div>
                
                {/* Service Title */}
                <h3 className={`text-lg lg:text-xl font-bold mb-3 text-center transition-colors ${
                  service.highlighted 
                    ? 'text-[#252525]'
                    : 'text-[#AFFC41] group-hover:text-white'
                }`}>
                  {service.title}
                </h3>
                
                {/* Service Description - show on hover or highlighted card */}
                {(hoveredCard === idx || service.highlighted) && (
                  <p className={`text-sm text-center leading-relaxed animate-fade-in ${
                    service.highlighted
                      ? 'text-[#252525]'
                      : 'text-white'
                  }`}>
                    {service.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Grid */}
        <div className='md:hidden flex flex-col gap-4'>
          {services.map((service, idx) => (
            <div 
              key={idx}
              className={`rounded-2xl p-6 transition-all duration-300 ${
                service.highlighted
                  ? 'bg-[#AFFC41] text-[#252525]'
                  : 'bg-[#2a2630] text-[#AFFC41]'
              }`}
            >
              <div className='flex items-start gap-4'>
                <img src={service.icon} alt={service.title} className='w-10 h-10 mt-1 flex-shrink-0' />
                <div className='flex-1'>
                  <h3 className={`text-base font-bold mb-2 ${
                    service.highlighted ? 'text-[#252525]' : 'text-[#AFFC41]'
                  }`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm ${
                    service.highlighted ? 'text-[#252525]' : 'text-[#AFFC41]'
                  }`}>
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
