import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer/Footer'

export const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly')
  const [selectedPlan, setSelectedPlan] = useState(null)

  const plans = [
    {
      name: 'Starter',
      monthlyPrice: 15000,
      yearlyPrice: 150000,
      description: 'Perfect for small businesses and freelancers',
      features: [
        'Logo Design',
        'Brand Color Palette',
        'Social Media Graphics (5)',
        'Basic Website (5 pages)',
        'Email Support',
        '1 Month Revisions'
      ],
      cta: 'Get Started',
      highlighted: false
    },
    {
      name: 'Professional',
      monthlyPrice: 45000,
      yearlyPrice: 450000,
      description: 'Ideal for growing businesses',
      features: [
        'Everything in Starter',
        'Complete Brand Identity',
        'Advanced Website (20 pages)',
        'E-commerce Setup',
        'Social Media Management',
        'Monthly Content Creation (8 posts)',
        'Basic SEO Optimization',
        'Priority Support',
        '3 Months Revisions'
      ],
      cta: 'Most Popular',
      highlighted: true,
      badge: 'Recommended'
    },
    {
      name: 'Enterprise',
      monthlyPrice: 100000,
      yearlyPrice: 1000000,
      description: 'Complete branding & digital solutions',
      features: [
        'Everything in Professional',
        'Custom Web Application',
        'Full Digital Marketing Strategy',
        'Professional Photoshoot/Videography',
        'Advanced Analytics & Reporting',
        'Dedicated Account Manager',
        'Custom Integrations',
        'Unlimited Revisions',
        'Quarterly Strategy Sessions',
        '24/7 Premium Support'
      ],
      cta: 'Contact Sales',
      highlighted: false
    }
  ]

  const getPrice = (monthlyPrice: number) => {
    return billingCycle === 'monthly' ? monthlyPrice : monthlyPrice * 10
  }

  const getSavings = (monthlyPrice: number) => {
    return ((monthlyPrice - (monthlyPrice * 12) / 12) / monthlyPrice * 100).toFixed(0)
  }

  return (
    <div>
      <Navbar />
      <div className='min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-16 md:py-24 pt-20 md:pt-24'>
        <div className='max-w-7xl w-full'>
          {/* Header */}
          <div className='text-center mb-12 md:mb-16 animate-fade-in'>
            <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-4 leading-tight'>
              Simple <span className='text-[#AFFC41] font-bold'>Transparent</span> Pricing
            </h1>
            <p className='text-base md:text-xl text-[#AFFC41] mb-8'>
              Tailored packages for businesses of all sizes in the Indian market
            </p>

            {/* Billing Cycle Toggle */}
            <div className='inline-flex items-center bg-[#2a2630] rounded-full p-1 border border-[#AFFC41] border-opacity-30'>
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-[#AFFC41] text-[#252525]'
                    : 'text-[#AFFC41]'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold transition-all ${
                  billingCycle === 'yearly'
                    ? 'bg-[#AFFC41] text-[#252525]'
                    : 'text-[#AFFC41]'
                }`}
              >
                Yearly
                <span className='text-xs ml-2 text-[#AFFC41]'>Save 17%</span>
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16'>
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative rounded-3xl transition-all duration-300 transform hover:scale-105 ${
                  plan.highlighted
                    ? 'md:scale-105 bg-gradient-to-br from-[#AFFC41] to-[#9cda2a] text-[#252525] p-8 md:p-10 border-2 border-[#AFFC41] shadow-2xl'
                    : 'bg-[#2a2630] text-[#AFFC41] p-8 md:p-10 border border-[#AFFC41] border-opacity-30 hover:border-opacity-100'
                }`}
                style={{
                  animation: `slideUp 0.6s ease-out ${idx * 0.15}s both`
                }}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                    <span className='bg-[#252525] text-[#AFFC41] px-4 py-1 rounded-full text-xs md:text-sm font-bold'>
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Plan Name */}
                <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${
                  plan.highlighted ? 'text-[#252525]' : 'text-[#AFFC41]'
                }`}>
                  {plan.name}
                </h3>

                {/* Description */}
                <p className={`text-sm md:text-base mb-6 ${
                  plan.highlighted ? 'text-[#252525] opacity-90' : 'text-[#AFFC41] opacity-80'
                }`}>
                  {plan.description}
                </p>

                {/* Price */}
                <div className='mb-8'>
                  <div className='flex items-baseline gap-1'>
                    <span className={`text-4xl md:text-5xl font-bold ${
                      plan.highlighted ? 'text-[#252525]' : 'text-[#AFFC41]'
                    }`}>
                      ₹{getPrice(plan.monthlyPrice).toLocaleString()}
                    </span>
                    <span className={`text-sm ${
                      plan.highlighted ? 'text-[#252525]' : 'text-[#AFFC41]'
                    } opacity-75`}>
                      / {billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  {billingCycle === 'yearly' && (
                    <p className={`text-xs mt-2 ${
                      plan.highlighted ? 'text-[#252525]' : 'text-[#AFFC41]'
                    }`}>
                      Save ₹{((plan.monthlyPrice * 12) - getPrice(plan.monthlyPrice)).toLocaleString()}
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => setSelectedPlan(plan)}
                  className={`w-full py-3 md:py-4 rounded-lg font-bold mb-8 transition-all transform hover:scale-105 ${
                  plan.highlighted
                    ? 'bg-[#252525] text-[#AFFC41] hover:bg-white'
                    : 'bg-[#AFFC41] text-[#252525] hover:bg-white'
                }`}>
                  {plan.cta}
                </button>

                {/* Features List */}
                <div className='space-y-3'>
                  {plan.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className='flex items-start gap-3'>
                      <svg
                        className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          plan.highlighted ? 'text-[#252525]' : 'text-[#AFFC41]'
                        }`}
                        fill='currentColor'
                        viewBox='0 0 20 20'
                      >
                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                      </svg>
                      <span className={`text-sm md:text-base ${
                        plan.highlighted ? 'text-[#252525]' : 'text-[#AFFC41]'
                      }`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className='mt-20 bg-[#2a2630] rounded-3xl p-8 md:p-12 border border-[#AFFC41] border-opacity-30'>
            <h2 className='text-3xl md:text-4xl font-bold text-[#AFFC41] mb-8 text-center'>FAQs</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              {[
                {
                  q: 'Can I change my plan anytime?',
                  a: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
                },
                {
                  q: 'Do you offer custom packages?',
                  a: 'Absolutely! For unique requirements, we offer tailored solutions. Contact our sales team for a custom quote.'
                },
                {
                  q: 'What payment methods do you accept?',
                  a: 'We accept all major payment methods including credit cards, bank transfers, and digital wallets in India.'
                },
                {
                  q: 'Is there a setup fee?',
                  a: 'No hidden fees! The price you see is what you pay. Some custom projects may have a one-time setup fee.'
                }
              ].map((faq, idx) => (
                <div key={idx} className='border-l-4 border-[#AFFC41] pl-6'>
                  <h4 className='text-[#AFFC41] font-bold mb-2 text-lg'>{faq.q}</h4>
                  <p className='text-[#AFFC41] opacity-80 text-sm md:text-base'>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
