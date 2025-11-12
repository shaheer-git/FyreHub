import React from 'react'
import './Testimonials.css'

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Smith',
      company: 'Web Design & Development',
      rating: 5,
      feedback: 'FyreHub transformed our digital presence. Their innovative approach and attention to detail elevated our brand beyond expectations. Highly recommend!'
    },
    {
      name: 'Sarah Johnson',
      company: 'Logo Design - Fashion Brand',
      rating: 5,
      feedback: 'The team at FyreHub understood our vision perfectly. They delivered a logo that captures our brand\'s essence beautifully. Outstanding work!'
    },
    {
      name: 'David Martinez',
      company: 'Digital Marketing - E-commerce',
      rating: 5,
      feedback: 'Working with FyreHub was a game-changer for our online sales. Their strategic approach and creative campaigns boosted our revenue significantly.'
    }
  ]

  return (
    <div className='min-h-screen flex flex-col justify-center items-center py-12 px-4'>
      <div className='mb-8 md:mb-12 text-center'>
        <p className='text-4xl md:text-6xl lg:text-8xl font-bold text-[#AFFC41]'>testimonials</p>
      </div>

      <div className='w-full max-w-6xl'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx}
              className='bg-white rounded-2xl p-6 md:p-8 border-2 border-[#AFFC41] shadow-lg hover:shadow-xl transition-shadow'
            >
              <div className='flex flex-col h-full'>
                {/* Header with name and company */}
                <div className='mb-4'>
                  <h3 className='text-[#252525] font-bold text-lg md:text-xl mb-1'>
                    {testimonial.name}
                  </h3>
                  <p className='text-[#AFFC41] text-sm font-semibold'>
                    {testimonial.company}
                  </p>
                </div>

                {/* Stars */}
                <div className='flex gap-1 mb-4'>
                  {Array(testimonial.rating).fill(null).map((_, i) => (
                    <svg 
                      key={i}
                      className='w-5 h-5 text-[#AFFC41] fill-current'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'/>
                    </svg>
                  ))}
                </div>

                {/* Feedback text */}
                <p className='text-[#252525] text-sm md:text-base flex-grow'>
                  "{testimonial.feedback}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
