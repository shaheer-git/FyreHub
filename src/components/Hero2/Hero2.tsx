import React from 'react'
import cardArrow from '../../assets/Card-Arrow.svg'
import branding from '../../assets/branding-icon.svg'
import graphicD from '../../assets/Graphic-Design-icon.svg'
import webDesignDevIcon from '../../assets/wed-design-dev-icon.svg'
import socialMediaIcon from '../../assets/social-media-mangt-icon.svg'
import './Hero2.css'

export const Hero2 = () => {
  return (
    <div className='h-screen flex flex-col justify-around items-center'>
      <div className='m-28'>
        <p className='text-[#AFFC41] text-9xl'>what we do</p>
      </div>
      <div className='flex w-10/12 gap-16 justify-around flex-wrap service-cards-container h-[100vh]'>
        <div className='relative w-[100vw] flex flex-col flex-wrap'>
          <div className='flex flex-wrap gap-5 justify-around absolute z-30 top-0 w-full'>
            <div className='services-card cursor-pointer relative h-[120px] bg-[#444444] rounded-3xl w-[250px] hover:h-[385px] hover:bg-[#AFFC41] ease-linear duration-150'>
              <img src={cardArrow} alt="" srcSet="" className='absolute -top-8' />
              <div className='flex flex-col items-center justify-center h-full'>
                <img src={branding} alt="" className='hidden card-icon' />
                <p className='text-[#AFFC41] text-2xl m-2'>
                  Branding & Identity
                </p>
                <p className='p-4 text-center hidden card-desc'>We craft memorable brand identities, including logo design, color palettes, and brand guidelines that reflect your company's values, mission, and vision. Build a consistent and lasting impression with your audience.</p>
              </div>
            </div>
            <div className='services-card cursor-pointer relative h-[120px] bg-[#444444] rounded-3xl w-[250px] hover:h-[385px] hover:bg-[#AFFC41] ease-linear duration-150'>
              <img src={cardArrow} alt="" srcSet="" className='absolute -top-8' />
              <div className='flex flex-col items-center justify-center h-full'>
                <img src={graphicD} alt="" className='hidden card-icon' />
                <p className='text-[#AFFC41] text-2xl m-2'>
                  Graphic Design
                </p>
                <p className='p-4 text-center hidden card-desc'>From social media posts to print materials, we design stunning visuals tailored to your brand. Whether it's brochures, posters, or packaging, we ensure every detail communicates your message effectively.</p>
              </div>
            </div>
            <div className='services-card cursor-pointer relative h-[120px] bg-[#444444] rounded-3xl w-[250px] hover:h-[385px] hover:bg-[#AFFC41] ease-linear duration-150'>
              <img src={cardArrow} alt="" srcSet="" className='absolute -top-8' />
              <div className='flex flex-col items-center justify-center h-full'>
                <img src={webDesignDevIcon} alt="" className='hidden card-icon' />
                <p className='text-[#AFFC41] text-2xl m-2 text-wrap text-center'>
                  Web Design & Development
                </p>
                <p className='p-4 text-center hidden card-desc'>Create engaging, user-friendly websites that look great on any device. We handle everything from design to development, ensuring your site drives results and captures your audience.</p>
              </div>
            </div>
          </div>

          <div className='flex flex-wrap gap-5 justify-around absolute z-20 top-40 w-full'>
            <div className='services-card cursor-pointer relative h-[120px] bg-[#444444] rounded-3xl w-[250px] hover:h-[385px] hover:bg-[#AFFC41] ease-linear duration-150'>
              <img src={cardArrow} alt="" srcSet="" className='absolute -top-8' />
              <div className='flex flex-col items-center justify-center h-full'>
                <img src={socialMediaIcon} alt="" className='hidden card-icon' />
                <p className='text-[#AFFC41] text-2xl m-2 text-wrap text-center'>
                  Social Media Management
                </p>
                <p className='p-4 text-center hidden card-desc'>Let us grow your online presence. We create, curate, and manage content that resonates with your target audience across platforms, helping you engage effectively and consistently.</p>
              </div>
            </div>
            <div className='services-card cursor-pointer relative h-[120px] bg-[#444444] rounded-3xl w-[250px] hover:h-[385px] hover:bg-[#AFFC41] ease-linear duration-150'>
              <img src={cardArrow} alt="" srcSet="" className='absolute -top-8' />
              <div className='flex flex-col items-center justify-center h-full'>
                <img src={branding} alt="" className='hidden card-icon' />
                <p className='text-[#AFFC41] text-2xl m-2'>
                  Content Creation
                </p>
                <p className='p-4 text-center hidden card-desc'>We produce captivating content, including blogs, articles, photography, and video production, to elevate your brand's storytelling and establish authority in your industry.</p>
              </div>
            </div>
            <div className='services-card cursor-pointer relative h-[120px] bg-[#444444] rounded-3xl w-[250px] hover:h-[385px] hover:bg-[#AFFC41] ease-linear duration-150'>
              <img src={cardArrow} alt="" srcSet="" className='absolute -top-8' />
              <div className='flex flex-col items-center justify-center h-full'>
                <img src={branding} alt="" className='hidden card-icon' />
                <p className='text-[#AFFC41] text-2xl m-2 text-wrap text-center'>
                  Digital Marketing & Advertising
                </p>
                <p className='p-4 text-center hidden card-desc'>Boost your reach and conversions with data-driven marketing strategies. From Google Ads to influencer campaigns, we tailor solutions to maximize ROI.</p>
              </div>
            </div>
          </div>

          <div className='flex flex-wrap gap-5 justify-around absolute top-80 z-10 w-full'>
            <div className='services-card cursor-pointer relative h-[120px] bg-[#444444] rounded-3xl w-[250px] hover:h-[385px] hover:bg-[#AFFC41] ease-linear duration-150'>
              <img src={cardArrow} alt="" srcSet="" className='absolute -top-8' />
              <div className='flex flex-col items-center justify-center h-full'>
                <img src={branding} alt="" className='hidden card-icon' />
                <p className='text-[#AFFC41] text-2xl m-2 text-center'>
                  Motion Graphics and Animation
                </p>
                <p className='p-4 text-center hidden card-desc'></p>
              </div>
            </div>
            <div className='services-card cursor-pointer relative h-[120px] bg-[#444444] rounded-3xl w-[250px] hover:h-[385px] hover:bg-[#AFFC41] ease-linear duration-150'>
              <img src={cardArrow} alt="" srcSet="" className='absolute -top-8' />
              <div className='flex flex-col items-center justify-center h-full'>
                <img src={branding} alt="" className='hidden card-icon' />
                <p className='text-[#AFFC41] text-2xl m-2 text-center'>
                  Photography and Videography
                </p>
                <p className='p-4 text-center hidden card-desc'>Capture your brands essence through stunning visuals. Whether its product shoots, event coverage, or corporate videos, we’ve got you covered.</p>
              </div>
            </div>
            <div className='services-card cursor-pointer relative h-[120px] bg-[#444444] rounded-3xl w-[250px] hover:h-[385px] hover:bg-[#AFFC41] ease-linear duration-150'>
              <img src={cardArrow} alt="" srcSet="" className='absolute -top-8' />
              <div className='flex flex-col items-center justify-center h-full'>
                <img src={branding} alt="" className='hidden card-icon' />
                <p className='text-[#AFFC41] text-2xl m-2 text-center'>
                  Creative Consultation
                </p>
                <p className='p-4 text-center hidden card-desc'>Need fresh ideas? Our team offers expert insights and strategies to breathe life into your brand or project. Collaborate with us to uncover your next big move.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
