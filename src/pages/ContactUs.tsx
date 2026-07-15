import React, { useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer/Footer'

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Construct the WhatsApp message
    const messageTemplate = `Hello FyreHub! 👋

I'm reaching out from your website.

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone || 'Not provided'}
*Company:* ${formData.company || 'Not provided'}
*Service:* ${formData.service}

*Message:*
${formData.message}`

    const encodedMessage = encodeURIComponent(messageTemplate)
    const whatsappUrl = `https://wa.me/918217760281?text=${encodedMessage}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank')

    setSubmitted(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    })
    setTimeout(() => setSubmitted(false), 3000)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Navbar />
      <div className='min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-16 md:py-24 md:pt-24'>
        <div className='max-w-4xl w-full'>
          {/* Header */}
          <div className='text-center mb-12 md:mb-16 animate-fade-in'>
            <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white mb-4 leading-tight'>
              Get In <span className='text-[#AFFC41] font-bold'>Touch</span>
            </h1>
            <p className='text-base md:text-xl text-[#AFFC41]'>
              Have a project in mind? Let's talk about it. We're excited to help bring your ideas to life.
            </p>
          </div>

          {/* Contact Form and Info */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12'>
            {/* Contact Information */}
            <div className='md:col-span-1 flex flex-col gap-8'>
              {/* Email */}
              <div className='bg-[#2a2630] rounded-2xl p-6 md:p-8 border border-[#AFFC41] border-opacity-30 hover:border-opacity-100 transition-all duration-300 animate-slide-right'>
                <h3 className='text-[#AFFC41] font-bold text-lg mb-2'>Email</h3>
                <a href='mailto:sales.fyrehub@gmail.com' className='text-[#AFFC41] hover:text-white transition-colors'>
                 sales.fyrehub@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className='bg-[#2a2630] rounded-2xl p-6 md:p-8 border border-[#AFFC41] border-opacity-30 hover:border-opacity-100 transition-all duration-300 animate-slide-right' style={{ animationDelay: '0.1s' }}>
                <h3 className='text-[#AFFC41] font-bold text-lg mb-2'>Phone</h3>
                <a href='tel:+918217760281' className='text-[#AFFC41] hover:text-white transition-colors'>
                  +91 82177 60281
                </a>
              </div>

              {/* Address */}
              <div className='bg-[#2a2630] rounded-2xl p-6 md:p-8 border border-[#AFFC41] border-opacity-30 hover:border-opacity-100 transition-all duration-300 animate-slide-right' style={{ animationDelay: '0.2s' }}>
                <h3 className='text-[#AFFC41] font-bold text-lg mb-2'>Location</h3>
                <p className='text-[#AFFC41]'>
                  India<br />
                  <span className='text-sm'>Available for remote collaboration worldwide</span>
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className='md:col-span-2 bg-[#2a2630] rounded-3xl p-8 md:p-10 border border-[#AFFC41] border-opacity-30 animate-slide-left'
            >
              {submitted && (
                <div className='mb-6 bg-[#AFFC41] text-[#252525] p-4 rounded-lg font-semibold animate-fade-in'>
                  ✓ Thank you! We'll get back to you soon.
                </div>
              )}

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                {/* Name */}
                <div>
                  <label className='block text-[#AFFC41] font-semibold mb-2'>Name *</label>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full bg-[#3d3843] text-white rounded-lg px-4 py-3 border border-[#AFFC41] border-opacity-20 focus:border-opacity-100 focus:outline-none transition-all'
                    placeholder='Your Name'
                  />
                </div>

                {/* Email */}
                <div>
                  <label className='block text-[#AFFC41] font-semibold mb-2'>Email *</label>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full bg-[#3d3843] text-white rounded-lg px-4 py-3 border border-[#AFFC41] border-opacity-20 focus:border-opacity-100 focus:outline-none transition-all'
                    placeholder='your@email.com'
                  />
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
                {/* Phone */}
                <div>
                  <label className='block text-[#AFFC41] font-semibold mb-2'>Phone</label>
                  <input
                    type='tel'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    className='w-full bg-[#3d3843] text-white rounded-lg px-4 py-3 border border-[#AFFC41] border-opacity-20 focus:border-opacity-100 focus:outline-none transition-all'
                    placeholder='+91 82177 60281'
                  />
                </div>

                {/* Company */}
                <div>
                  <label className='block text-[#AFFC41] font-semibold mb-2'>Company</label>
                  <input
                    type='text'
                    name='company'
                    value={formData.company}
                    onChange={handleChange}
                    className='w-full bg-[#3d3843] text-white rounded-lg px-4 py-3 border border-[#AFFC41] border-opacity-20 focus:border-opacity-100 focus:outline-none transition-all'
                    placeholder='Your Company'
                  />
                </div>
              </div>

              {/* Service */}
              <div className='mb-6'>
                <label className='block text-[#AFFC41] font-semibold mb-2'>Service Interested In *</label>
                <select
                  name='service'
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className='w-full bg-[#3d3843] text-white rounded-lg px-4 py-3 border border-[#AFFC41] border-opacity-20 focus:border-opacity-100 focus:outline-none transition-all'
                >
                  <option value=''>Select a service</option>
                  <option value='branding'>Branding & Identity</option>
                  <option value='graphic'>Graphic Design</option>
                  <option value='web'>Web Design & Development</option>
                  <option value='social'>Social Media Management</option>
                  <option value='content'>Content Creation</option>
                  <option value='marketing'>Digital Marketing</option>
                  <option value='animation'>Motion Graphics & Animation</option>
                  <option value='photography'>Photography & Videography</option>
                  <option value='consultation'>Creative Consultation</option>
                </select>
              </div>

              {/* Message */}
              <div className='mb-6'>
                <label className='block text-[#AFFC41] font-semibold mb-2'>Message *</label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className='w-full bg-[#3d3843] text-white rounded-lg px-4 py-3 border border-[#AFFC41] border-opacity-20 focus:border-opacity-100 focus:outline-none transition-all resize-none'
                  placeholder='Tell us about your project...'
                />
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                className='w-full bg-[#AFFC41] text-[#252525] font-bold py-3 rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
