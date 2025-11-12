import React from 'react'
import { Navbar } from '../components/Navbar'
import { Hero2 } from '../components/Hero2/Hero2'
import { Footer } from '../components/Footer/Footer'

export const WhatWeDo = () => {
  return (
    <div>
      <Navbar />
      <div className='pt-20 md:pt-24'>
        <Hero2 />
      </div>
      <Footer />
    </div>
  )
}
