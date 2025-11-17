import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer/Footer'

export const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className='min-h-screen flex flex-col items-center justify-center px-4 md:px-8 pt-20 md:pt-24'>
        <div className='max-w-5xl w-full'>
          {/* Section 1: Intro */}
          <div className='mb-16 md:mb-24 animate-fade-in'>
            <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-6 leading-tight'>
              About <span className='text-[#AFFC41] font-bold'>FyreHub</span>
            </h1>
            <p className='text-base md:text-xl text-[#AFFC41] leading-relaxed mb-6'>
              FyreHub is a creative agency dedicated to transforming brands through innovative design, strategic thinking, and exceptional execution. With over 4 years of industry experience, we've helped businesses of all sizes establish strong digital presences and create lasting impressions.
            </p>
          </div>

          {/* Section 2: Mission & Vision */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-24'>
            <div className='bg-[#2a2630] rounded-3xl p-8 md:p-10 border border-[#AFFC41] border-opacity-30 hover:border-opacity-100 transition-all duration-300 animate-slide-right'>
              <h2 className='text-3xl md:text-4xl font-bold text-[#AFFC41] mb-4'>Our Mission</h2>
              <p className='text-[#AFFC41] leading-relaxed'>
                To empower businesses with creative solutions that drive growth, build stronger connections with their audiences, and establish meaningful brand identities that stand the test of time.
              </p>
            </div>

            <div className='bg-[#2a2630] rounded-3xl p-8 md:p-10 border border-[#AFFC41] border-opacity-30 hover:border-opacity-100 transition-all duration-300 animate-slide-left'>
              <h2 className='text-3xl md:text-4xl font-bold text-[#AFFC41] mb-4'>Our Vision</h2>
              <p className='text-[#AFFC41] leading-relaxed'>
                To be the go-to creative partner for businesses seeking innovative, results-driven solutions that transform ideas into impactful digital and physical experiences.
              </p>
            </div>
          </div>

          {/* Section 3: Why Choose Us */}
          <div className='mb-16 md:mb-24'>
            <h2 className='text-3xl md:text-5xl font-bold text-[#AFFC41] mb-8 md:mb-12 text-center'>Why Choose FyreHub?</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8'>
              {[
                {
                  title: '4+ Years Experience',
                  desc: 'Proven track record in delivering exceptional creative solutions'
                },
                {
                  title: '20+ Projects Delivered',
                  desc: 'Successfully completed diverse projects across various industries'
                },
                {
                  title: '8+ Happy Clients',
                  desc: 'Strong relationships built on trust, quality, and results'
                },
                {
                  title: 'Creative Excellence',
                  desc: 'Award-winning designs and innovative strategies'
                },
                {
                  title: 'Dedicated Team',
                  desc: 'Passionate professionals committed to your success'
                },
                {
                  title: 'Affordable Solutions',
                  desc: 'Premium quality services tailored to your budget'
                }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className='bg-gradient-to-br from-[#2a2630] to-[#3d3843] rounded-2xl p-6 md:p-8 border border-[#AFFC41] border-opacity-20 hover:border-opacity-100 transition-all duration-300 transform hover:scale-105'
                  style={{
                    animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`
                  }}
                >
                  <h3 className='text-xl font-bold text-[#AFFC41] mb-3'>{item.title}</h3>
                  <p className='text-[#AFFC41] text-sm md:text-base'>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Team */}
          <div className='mb-16 md:mb-24'>
            <h2 className='text-3xl md:text-5xl font-bold text-[#AFFC41] mb-8 md:mb-12 text-center'>Our Team</h2>
            <p className='text-[#AFFC41] text-center text-base md:text-lg mb-8 max-w-3xl mx-auto'>
              Our talented team of designers, developers, and strategists work collaboratively to bring your vision to life. We're committed to delivering excellence in every project.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
