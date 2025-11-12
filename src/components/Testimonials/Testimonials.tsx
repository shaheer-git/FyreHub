import React from 'react'
import './Testimonials.css'

export const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Anderson',
      role: 'CEO, Creative Studio',
      feedback: 'Working with FyreHub transformed our brand identity completely. Their attention to detail and creative excellence exceeded our expectations.',
      rating: 5,
      watermark: 'feedback'
    },
    {
      name: 'James Wilson',
      role: 'Marketing Director',
      feedback: 'The team delivered exceptional results on our digital campaign. Their strategic approach and execution were outstanding.',
      rating: 5,
      watermark: 'feedback'
    },
    {
      name: 'Priya Sharma',
      role: 'Business Owner, Tech Startup',
      feedback: 'FyreHub helped us establish a strong online presence. Their web design and marketing strategies drove significant growth.',
      rating: 5,
      watermark: 'feedback'
    }
  ]

  return (
    <div className='min-h-screen flex flex-col justify-center items-center py-16 md:py-20 px-4 md:px-8'>
      <div className='mb-12 md:mb-16 text-center'>
        <p className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#AFFC41]'>testimonials</p>
      </div>

      <div className='w-full max-w-6xl'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx}
              className='testimonial-card relative h-96 bg-gradient-to-br from-[#f5f5f5] to-[#e8e8e8] rounded-3xl p-8 overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-300'
            >
              {/* Watermark text background */}
              <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
                <p className='text-[120px] md:text-[140px] lg:text-[160px] font-bold text-[#AFFC41] opacity-5 select-none'>
                  {testimonial.watermark}
                </p>
              </div>

              {/* Content */}
              <div className='relative h-full flex flex-col justify-between'>
                {/* Top: Stars */}
                <div className='flex gap-1'>
                  {Array(testimonial.rating).fill(null).map((_, i) => (
                    <svg 
                      key={i}
                      className='w-6 h-6 text-[#AFFC41] fill-current'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'/>
                    </svg>
                  ))}
                </div>

                {/* Middle: Feedback text */}
                <div>
                  <p className='text-[#252525] text-base md:text-lg leading-relaxed font-medium'>
                    "{testimonial.feedback}"
                  </p>
                </div>

                {/* Bottom: Client info */}
                <div className='border-t border-[#AFFC41] pt-4'>
                  <h4 className='text-[#252525] font-bold text-base md:text-lg'>
                    {testimonial.name}
                  </h4>
                  <p className='text-[#AFFC41] text-sm font-semibold'>
                    {testimonial.role}
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
