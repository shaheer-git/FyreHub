import { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer/Footer'
import cardArrow from '../assets/Card-Arrow.svg'
import branding from '../assets/branding-icon.svg'
import graphicD from '../assets/Graphic-Design-icon.svg'
import webDesignDevIcon from '../assets/wed-design-dev-icon.svg'
import socialMediaIcon from '../assets/social-media-mangt-icon.svg'

export const WhatWeDo = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [tappedCard, setTappedCard] = useState<number | null>(null)

  const services = [
    {
      title: 'Branding & Identity',
      icon: branding,
      tagLine: `More Than a Logo. It's Your Legacy`,
      description: 'Your brand is the immediate emotional response customers have when they hear your name. It is the soul of your business made visible. We move beyond surface-level aesthetics to build brands that breathe, speak, and connect. Whether you are a startup looking for a face or a legacy company seeking a voice, we forge identities that resonate in a crowded marketplace.',
      listHeading: 'What We Deliver:',
      listItems: [
        'Brand Strategy & Positioning: Defining your "Why" and your place in the market',
        'Visual Identity Systems: Logo design, typography, colour palettes, and usage guidelines.',
        'Brand Voice & Messaging: Crafting a consistent verbal personality that speaks to your audience, not at them',
        'Touchpoint Design: Ensuring your brand looks consistent from business cards to billboards.',
      ],
      features: ['Logo Design', 'Brand Guidelines', 'Color Palette', 'Typography'],
      highlighted: true
    },
    {
      title: 'Social Media Management',
      icon: socialMediaIcon,
      tagLine: 'Building Communities, Not Just Followers',
      description: 'In the digital age, social media is your 24/7 storefront. But posting is not enough; you need to perform. We take the guesswork out of social by curating strategies that spark conversation and convert scrolling into sales. We manage the noise so you can focus on your business, turning passive viewers into loyal brand advocates.',
      listHeading: 'What We Deliver:',
      listItems: [
        'Platform Strategy: Identifying where your audience lives (Instagram, LinkedIn, TikTok, X)',
        'Community Management: Real-time engagement, comment moderation, and customer support integration',
        'Content Calendar & Scheduling: Consistent, timely delivery of high-impact posts',
        'Analytics & Reporting: deep-dive metrics to understand engagement rates, reach, and ROI',
      ],
      features: ['Content Creation', 'Community Management', 'Analytics', 'Engagement'],
      highlighted: true
    },
    {
      title: 'Content Creation',
      icon: branding,
      tagLine: 'Storytelling That Sells',
      description: 'Content is the currency of the web, and we are your mint. In a world of infinite scroll, only the most compelling stories stop the thumb. Our team of copywriters, designers, and strategists produce high-value content that educates, entertains, and inspires action. We don\'t just fill space; we fuel your marketing funnel.',
      listHeading: 'What We Deliver:',
      listItems: [
        'Copywriting: SEO-optimized blogs, whitepapers, and website copy',
        'Visual Assets: Infographics, custom illustrations, and social cards',
        'Email Marketing: Newsletters and drip campaigns that nurture leads',
        'Case Studies: Proof of your success, written to persuade',
      ],
      features: ['Blog Writing', 'Video Production', 'Copywriting', 'Photography'],
      highlighted: true
    },
    {
      title: 'Digital Marketing & Advertising',
      icon: branding,
      tagLine: 'Data-Driven Strategies. Measurable Growth',
      description: 'Hope is not a strategy. We rely on hard data and behavioural psychology to put your message in front of the right people at the exact right moment. From search engines to social feeds, we optimize every dollar of your ad spend to ensure maximum return on investment. We don\'t just drive traffic; we drive qualified leads.',
      listHeading: 'What We Deliver:',
      listItems: [
        'PPC (Pay-Per-Click): Google Ads and Bing Ads management',
        'Social Advertising: Targeted campaigns on Meta (Facebook/Instagram), LinkedIn, and TikTok',
        'SEO (Search Engine Optimization): Technical and on-page optimization to own the organic rankings',
        'Retargeting Campaigns: Re-engaging visitors who didn\'t convert the first time',
      ],
      features: ['SEO Strategy', 'PPC Campaigns', 'Email Marketing', 'Analytics'],
      highlighted: true
    },
    {
      title: 'Motion Graphics & Animation',
      icon: graphicD,
      tagLine: 'Simplify the Complex. Captivate the Audience',
      description: `Sometimes, static images aren\'t enough to explain a big idea. Motion graphics bridge the gap between information and entertainment. We transform complex data, abstract concepts, and brand narratives into fluid, dynamic animations that grab attention instantly. It's the perfect medium for the modern, short- attention - span consumer.`,
      listHeading: 'What We Deliver:',
      listItems: [
        'Explainer Videos: Breaking down your product or service in 60 seconds or less',
        'Logo Reveals & Intros: Adding kinetic energy to your brand assets',
        'UI/UX Animation: Prototyping app interactions and web movement',
        'Social Media Shorts: High-energy loops designed for Stories and Reels',
      ],
      features: ['3D Animation', 'Video Animation', 'Explainer Videos', 'Promotional Content'],
      highlighted: true
    },
    {
      title: 'Photography & Videography',
      icon: branding,
      tagLine: 'Visuals That Viscerally Connect',
      description: `In a visual-first world, the quality of your imagery equates to the quality of your brand. We bring cinematic production values to your business. Whether it's a high-gloss product shoot, a corporate documentary, or lifestyle photography, we capture the authentic essence of who you are and what you offer.`,
      listHeading: 'What We Deliver:',
      listItems: [
        'Corporate Filmmaking: Brand documentaries, office tours, and executive interviews',
        'Product Photography: E-commerce and stylized hero shots',
        'Event Coverage: capturing the energy of your launches and conferences',
        'Drone/Aerial Footage: Giving your audience a new perspective',
      ],
      features: ['Product Photography', 'Event Coverage', 'Corporate Videos', 'Testimonials'],
      highlighted: true
    },
    {
      title: 'Creative Consultation',
      icon: branding,
      tagLine: 'Your Outsourced Chief Marketing Officer',
      description: 'You have the vision; we provide the roadmap. Sometimes you don\'t need execution---you need direction. Our consultation services are designed for businesses hitting a plateau or facing a pivot. We analyse your market position, audit your current efforts, and provide a master plan for dominance.',
      listHeading: 'What We Deliver:',
      listItems: [
        `Brand Audits: A ruthless analysis of what's working and what isn't`,
        'Marketing Strategy Workshops: Collaborative sessions to define goals and KPIs',
        'Campaign Ideation: Brainstorming the "Big Idea" for your next launch',
        'Trend Forecasting: Helping you stay ahead of industry shifts',
      ],
      features: ['Brand Audits', 'Strategy Workshops', 'Campaign Planning', 'Consulting'],
      highlighted: true
    },
    {
      title: 'Web Design & Development',
      icon: webDesignDevIcon,
      tagLine: 'Where Aesthetics Meet Architecture',
      description: 'Your website is the hub of your digital universe. If it fails, your marketing fails. We don\'t believe in templates; we build digital experiences. Combining psychological design principles with rock-solid code, we create websites that are as functional as they are beautiful. From intuitive landing pages to complex enterprise platforms, we build for conversion, speed, and scale.',
      listHeading: 'What We Deliver:',
      listItems: [
        'Custom UI/UX Design: Bespoke interfaces tailored to guide your specific user journey',
        'Full-Stack Development: Robust & Secure coding using modern frameworks (React, Angular, WordPress etc...)',
        'E-Commerce Solutions: High-converting online stores designed for friction-free checkout',
        'Performance & SEO Architecture: Ensuring your site loads instantly and is structured for search engine dominance',
      ],
      features: ['Responsive Design', 'UX/UI', 'Development', 'Optimization'],
      highlighted: true
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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className='min-h-screen md:pt-24 flex flex-col justify-center items-center px-4 md:px-8'>
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
        <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-6 leading-tight'>
          What <span className='text-[#AFFC41] font-bold'>We Do</span>
        </h1>

        <div className='w-full max-w-7xl'>
          {/* Desktop Grid */}
          <div className='hidden md:grid grid-cols-1 gap-6 lg:gap-8'>
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`relative group transition-all duration-300 ${service.highlighted
                  ? 'lg:col-span-1 lg:row-span-2'
                  : ''
                  }`}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`h-full rounded-3xl p-6 lg:p-8 flex flex-col items-start justify-center transition-all duration-300 overflow-hidden border-2 ${service.highlighted
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
                  <div className={`w-full h-14 mb-4 flex items-center gap-3 rounded-full transition-all duration-300 bg-[#AFFC41]
                  `}>
                    <img src={service.icon} alt={service.title} className={`w-12 h-12 object-contain transition-all duration-300 brightness-0`} />
                    {/* Service Title */}
                    <h3 className={`text-lg lg:text-xl font-bold text-start transition-colors ${service.highlighted
                      ? 'text-[#252525]'
                      : hoveredCard === idx
                        ? 'text-[#252525]'
                        : 'text-[#AFFC41]'
                      }`}>
                      {service.title}
                    </h3>
                  </div>


                  {/* Service Description - show on hover or highlighted card */}
                  {(hoveredCard === idx || service.highlighted) && (
                    <p className={`text-sm text-start leading-relaxed animate-fade-in ${service.highlighted
                      ? 'text-[#252525]'
                      : hoveredCard === idx
                        ? 'text-[#252525]'
                        : 'text-white'
                      }`}>
                      <p className='italic font-bold'>{service.tagLine}</p>
                      <p>{service.description}</p>
                      <h5 className='font-bold'>{service.listHeading}</h5>
                      <ul>
                        {service.listItems.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </p>
                  )}
                  <div className='flex gap-2 mt-2'>
                    {service.features.map((feature, i) => (
                      <span key={i} className={`text-xs px-2 py-1 rounded ${service.highlighted || tappedCard === idx
                        ? 'bg-[#252525] bg-opacity-20 text-[#252525]'
                        : 'bg-[#AFFC41] bg-opacity-20 text-[#AFFC41]'
                        }`}>
                        {feature}
                      </span>
                    ))}
                  </div>
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
                className={`rounded-2xl p-6 transition-all duration-300 border-2 cursor-pointer ${service.highlighted
                  ? 'bg-[#AFFC41] text-[#252525] border-[#AFFC41]'
                  : tappedCard === idx
                    ? 'bg-[#AFFC41] text-[#252525] border-[#AFFC41]'
                    : 'bg-[#2a2630] text-[#AFFC41] border-[#2a2630] active:bg-[#AFFC41] active:border-[#AFFC41]'
                  }`}
              >
                <div className='flex items-center gap-4 mb-4'>
                  <div className={`w-12 h-12 flex items-center justify-center rounded-lg flex-shrink-0 transition-all duration-300 ${service.highlighted || tappedCard === idx
                    ? 'bg-[#252525] bg-opacity-10'
                    : 'bg-[#AFFC41] bg-opacity-100'
                    }`}>
                    <img src={service.icon} alt={service.title} className={`w-6 h-6 object-contain transition-all duration-300 ${service.highlighted || tappedCard === idx
                      ? 'brightness-0'
                      : ''
                      }`} />
                  </div>
                  <div className='flex-1'>
                    <h3 className={`text-base font-bold mb-1 transition-colors ${service.highlighted || tappedCard === idx
                      ? 'text-[#252525]'
                      : 'text-[#AFFC41]'
                      }`}>
                      {service.title}
                    </h3>
                  </div>
                </div>
                {(tappedCard === idx || service.highlighted) && (
                  <div className='animate-fade-in'>
                    <p className={`text-sm transition-colors mb-3 ${service.highlighted || tappedCard === idx
                      ? 'text-[#252525]'
                      : 'text-[#AFFC41]'
                      }`}>
                      {service.description}
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      {service.features.map((feature, i) => (
                        <span key={i} className={`text-xs px-2 py-1 rounded ${service.highlighted || tappedCard === idx
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
        <div className='mb-12 md:mb-16 text-start'>
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
