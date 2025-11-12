import React from 'react'
import cardArrow from '../../assets/Card-Arrow.svg'
import branding from '../../assets/branding-icon.svg'
import graphicD from '../../assets/Graphic-Design-icon.svg'
import webDesignDevIcon from '../../assets/wed-design-dev-icon.svg'
import socialMediaIcon from '../../assets/social-media-mangt-icon.svg'
import './Hero2.css'

export const Hero2 = () => {
  const services = [
    {
      title: 'Branding & Identity',
      icon: branding,
      description: 'We craft memorable brand identities, including logo design, color palettes, and brand guidelines that reflect your company\'s values, mission, and vision. Build a consistent and lasting impression with your audience.'
    },
    {
      title: 'Graphic Design',
      icon: graphicD,
      description: 'From social media posts to print materials, we design stunning visuals tailored to your brand. Whether it\'s brochures, posters, or packaging, we ensure every detail communicates your message effectively.'
    },
    {
      title: 'Web Design & Development',
      icon: webDesignDevIcon,
      description: 'Create engaging, user-friendly websites that look great on any device. We handle everything from design to development, ensuring your site drives results and captures your audience.'
    },
    {
      title: 'Social Media Management',
      icon: socialMediaIcon,
      description: 'Let us grow your online presence. We create, curate, and manage content that resonates with your target audience across platforms, helping you engage effectively and consistently.'
    },
    {
      title: 'Content Creation',
      icon: branding,
      description: 'We produce captivating content, including blogs, articles, photography, and video production, to elevate your brand\'s storytelling and establish authority in your industry.'
    },
    {
      title: 'Digital Marketing & Advertising',
      icon: branding,
      description: 'Boost your reach and conversions with data-driven marketing strategies. From Google Ads to influencer campaigns, we tailor solutions to maximize ROI.'
    },
    {
      title: 'Motion Graphics and Animation',
      icon: branding,
      description: 'Bring your ideas to life with stunning animations and motion graphics that engage and captivate your audience.'
    },
    {
      title: 'Photography and Videography',
      icon: branding,
      description: 'Capture your brand\'s essence through stunning visuals. Whether it\'s product shoots, event coverage, or corporate videos, we\'ve got you covered.'
    },
    {
      title: 'Creative Consultation',
      icon: branding,
      description: 'Need fresh ideas? Our team offers expert insights and strategies to breathe life into your brand or project. Collaborate with us to uncover your next big move.'
    }
  ]

  return (
    <div className='min-h-screen flex flex-col justify-center items-center py-12 px-4'>
      <div className='mb-8 md:mb-12 text-center'>
        <p className='text-4xl md:text-6xl lg:text-8xl font-bold text-[#AFFC41]'>what we do</p>
      </div>
      <div className='w-full max-w-7xl'>
        <div className='hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {services.map((service, idx) => (
            <div 
              key={idx}
              className='services-card cursor-pointer relative h-[120px] bg-[#444444] rounded-3xl hover:h-auto hover:bg-[#AFFC41] transition-all ease-linear duration-150 overflow-hidden group'
            >
              <img src={cardArrow} alt="" className='absolute -top-8 group-hover:rotate-[-90deg] transition-transform duration-250' />
              <div className='flex flex-col items-center justify-center h-full p-4'>
                <img src={service.icon} alt="" className='hidden group-hover:block card-icon w-12 h-12' />
                <p className='text-[#AFFC41] group-hover:text-[#252525] text-lg md:text-xl font-semibold m-2 text-center transition-colors'>
                  {service.title}
                </p>
                <p className='p-4 text-center hidden group-hover:block card-desc text-[#252525] text-sm'>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className='md:hidden flex flex-col gap-4'>
          {services.map((service, idx) => (
            <div 
              key={idx}
              className='services-card cursor-pointer relative bg-[#444444] rounded-2xl p-6 active:bg-[#AFFC41] transition-colors'
            >
              <img src={cardArrow} alt="" className='absolute -top-6 left-6 w-6 h-6' />
              <img src={service.icon} alt="" className='w-8 h-8 mb-2' />
              <p className='text-[#AFFC41] text-base font-semibold mb-2'>
                {service.title}
              </p>
              <p className='text-[#AFFC41] text-xs'>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
