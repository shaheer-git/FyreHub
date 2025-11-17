import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer/Footer'
import cardArrow from '../assets/Card-Arrow.svg'
import branding from '../assets/branding-icon.svg'
import graphicD from '../assets/Graphic-Design-icon.svg'
import webDesignDevIcon from '../assets/wed-design-dev-icon.svg'
import socialMediaIcon from '../assets/social-media-mangt-icon.svg'

export const WhatWeDo = () => {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [tappedCard, setTappedCard] = useState(null)

  const services = [
    {
      title: 'Branding & Identity',
      icon: branding,
      description: 'We craft memorable brand identities that reflect your company\'s values and vision. From logo design to brand guidelines, we ensure consistency across all touchpoints.',
      features: ['Logo Design', 'Brand Guidelines', 'Color Palette', 'Typography'],
      highlighted: false
    },
    {
      title: 'Graphic Design',
      icon: graphicD,
      description: 'From social media posts to print materials, we design stunning visuals tailored to your brand. Our designs captivate audiences and communicate your message effectively.',
      features: ['Social Media Design', 'Print Materials', 'Packaging', 'Illustrations'],
      highlighted: false
    },
    {
      title: 'Web Design & Development',
      icon: webDesignDevIcon,
      description: 'Create engaging, user-friendly websites that look great on any device. We handle everything from design to development, ensuring optimal performance and user experience.',
      features: ['Responsive Design', 'UX/UI', 'Development', 'Optimization'],
      highlighted: true
    },
    {
      title: 'Social Media Management',
      icon: socialMediaIcon,
      description: 'Let us grow your online presence with content that resonates with your audience. We manage everything from content creation to community engagement and analytics.',
      features: ['Content Creation', 'Community Management', 'Analytics', 'Engagement'],
      highlighted: false
    },
    {
      title: 'Digital Marketing',
      icon: branding,
      description: 'Boost your reach with data-driven marketing strategies tailored to your goals. We use analytics and insights to optimize campaigns for maximum ROI.',
      features: ['SEO Strategy', 'PPC Campaigns', 'Email Marketing', 'Analytics'],
      highlighted: false
    },
    {
      title: 'Content Creation',
      icon: branding,
      description: 'We produce captivating content including blogs, articles, and videos for your brand. High-quality content that engages, informs, and converts your audience.',
      features: ['Blog Writing', 'Video Production', 'Copywriting', 'Photography'],
      highlighted: false
    },
    {
      title: 'Motion Graphics',
      icon: branding,
      description: 'Bring your ideas to life with stunning animations and motion graphics. Perfect for explainer videos, promotional content, and brand storytelling.',
      features: ['3D Animation', 'Video Animation', 'Explainer Videos', 'Promotional Content'],
      highlighted: false
    },
    {
      title: 'Photography & Videography',
      icon: branding,
      description: 'Capture your brand\'s essence through professional visual content. High-quality imagery that tells your story and engages your audience.',
      features: ['Product Photography', 'Event Coverage', 'Corporate Videos', 'Testimonials'],
      highlighted: false
    }
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description: 'We start by understanding your business, goals, and target audience. This foundation guides all our creative decisions.'
    },
    {
      number: '02',
      title: 'Concept & Design',
      description: 'Our creative team develops concepts and designs that align with your brand identity and resonate with your audience.'
    },
    {
      number: '03',
      title: 'Development & Testing',
      description: 'We bring designs to life with clean code and rigorous testing to ensure quality and performance across all platforms.'
    },
    {
      number: '04',
      title: 'Launch & Support',
      description: 'We deploy your project and provide ongoing support, ensuring smooth operation and continuous optimization.'
    }
  ]

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className='min-h-screen pt-20 md:pt-24 flex flex-col justify-center items-center px-4 md:px-8'>
        <div className='max-w-4xl text-center mb-12 md:mb-16'>
          <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-6 leading-tight'>
            Our <span className='text-[#AFFC41] font-bold'>Creative Services</span>
          </h1>
          <p className='text-base md:text-lg lg:text-xl text-[#AFFC41] leading-relaxed'>
            From branding to digital marketing, we offer comprehensive creative solutions designed to elevate your brand and drive results.
          </p>
        </div>
      </div>

      {/* Services Grid Section */}
      <div className='min-h-screen flex flex-col justify-center items-center py-16 md:py-20 px-4 md:px-8'>
        <div className='mb-12 md:mb-16 text-center'>
          <p className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#AFFC41]'>what we do</p>
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
                      : hoveredCard === idx
                      ? 'text-[#252525]'
                      : 'text-[#AFFC41]'
                  }`}>
                    {service.title}
                  </h3>

                  {/* Service Description - show on hover or highlighted card */}
                  {(hoveredCard === idx || service.highlighted) && (
                    <div className='animate-fade-in'>
                      <p className={`text-sm text-center leading-relaxed mb-4 ${
                        service.highlighted
                          ? 'text-[#252525]'
                          : hoveredCard === idx
                          ? 'text-[#252525]'
                          : 'text-white'
                      }`}>
                        {service.description}
                      </p>
                      <div className='flex flex-wrap justify-center gap-2'>
                        {service.features.map((feature, i) => (
                          <span key={i} className={`text-xs px-3 py-1 rounded-full ${
                            service.highlighted
                              ? 'bg-[#252525] bg-opacity-20 text-[#252525]'
                              : hoveredCard === idx
                              ? 'bg-[#252525] bg-opacity-20 text-[#252525]'
                              : 'bg-[#AFFC41] bg-opacity-20 text-[#AFFC41]'
                          }`}>
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
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
                onClick={() => setTappedCard(tappedCard === idx ? null : idx)}
                className={`rounded-2xl p-6 transition-all duration-300 border-2 cursor-pointer ${
                  service.highlighted
                    ? 'bg-[#AFFC41] text-[#252525] border-[#AFFC41]'
                    : tappedCard === idx
                    ? 'bg-[#AFFC41] text-[#252525] border-[#AFFC41]'
                    : 'bg-[#2a2630] text-[#AFFC41] border-[#2a2630] active:bg-[#AFFC41] active:border-[#AFFC41]'
                }`}
              >
                <div className='flex items-start gap-4 mb-4'>
                  <div className={`w-12 h-12 flex items-center justify-center rounded-lg flex-shrink-0 transition-all duration-300 ${
                    service.highlighted || tappedCard === idx
                      ? 'bg-[#252525] bg-opacity-10'
                      : 'bg-[#AFFC41] bg-opacity-20'
                  }`}>
                    <img src={service.icon} alt={service.title} className={`w-6 h-6 object-contain transition-all duration-300 ${
                      service.highlighted || tappedCard === idx
                        ? 'brightness-0'
                        : ''
                    }`} />
                  </div>
                  <div className='flex-1'>
                    <h3 className={`text-base font-bold mb-1 transition-colors ${
                      service.highlighted || tappedCard === idx
                        ? 'text-[#252525]'
                        : 'text-[#AFFC41]'
                    }`}>
                      {service.title}
                    </h3>
                  </div>
                </div>
                {(tappedCard === idx || service.highlighted) && (
                  <div className='animate-fade-in'>
                    <p className={`text-sm transition-colors mb-3 ${
                      service.highlighted || tappedCard === idx
                        ? 'text-[#252525]'
                        : 'text-[#AFFC41]'
                    }`}>
                      {service.description}
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      {service.features.map((feature, i) => (
                        <span key={i} className={`text-xs px-2 py-1 rounded ${
                          service.highlighted || tappedCard === idx
                            ? 'bg-[#252525] bg-opacity-20 text-[#252525]'
                            : 'bg-[#AFFC41] bg-opacity-20 text-[#AFFC41]'
                        }`}>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Process Section */}
      <div className='min-h-screen flex flex-col justify-center items-center py-16 md:py-20 px-4 md:px-8 bg-[#0d0a10]'>
        <div className='mb-12 md:mb-16 text-center'>
          <h2 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#AFFC41] mb-4'>our process</h2>
          <p className='text-base md:text-lg text-[#AFFC41] max-w-3xl mx-auto'>
            We follow a strategic and creative process to deliver exceptional results
          </p>
        </div>

        <div className='w-full max-w-6xl'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className='relative group'
              >
                <div className='h-full rounded-3xl p-6 md:p-8 bg-gradient-to-br from-[#2a2630] to-[#3d3843] border-2 border-[#AFFC41] border-opacity-30 hover:border-opacity-100 transition-all duration-300 transform hover:scale-105'>
                  <div className='text-5xl md:text-6xl font-bold text-[#AFFC41] mb-4 opacity-20 group-hover:opacity-100 transition-opacity'>
                    {step.number}
                  </div>
                  <h3 className='text-xl md:text-2xl font-bold text-[#AFFC41] mb-3'>
                    {step.title}
                  </h3>
                  <p className='text-[#AFFC41] text-sm md:text-base leading-relaxed'>
                    {step.description}
                  </p>
                </div>

                {/* Connection line */}
                {idx < processSteps.length - 1 && (
                  <div className='hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#AFFC41] to-transparent'></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className='min-h-screen flex flex-col justify-center items-center py-16 md:py-20 px-4 md:px-8'>
        <div className='max-w-4xl text-center'>
          <h2 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-[#AFFC41] mb-6'>Ready to Transform Your Brand?</h2>
          <p className='text-base md:text-lg text-[#AFFC41] mb-8 leading-relaxed'>
            Let's discuss how our creative services can help your business grow and stand out in the digital landscape. Get in touch with us today to start your transformation.
          </p>
          <a
            href='/contact'
            className='inline-block bg-[#AFFC41] text-[#252525] px-8 md:px-12 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-[#aefc419d] transition-all duration-300 transform hover:scale-105'
          >
            Start Your Project
          </a>
        </div>
      </div>

      <Footer />
    </div>
  )
}
