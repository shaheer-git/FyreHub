import React from 'react'
import { Navbar } from '../components/Navbar'
import { Hero3 } from '../components/Hero3/Hero3'
import { Footer } from '../components/Footer/Footer'

export const OurWork = () => {
  return (
    <div>
      <Navbar />
      <div className='pt-20 md:pt-24'>
        <Hero3 />
      </div>
      <Footer />
    </div>
  )
}
