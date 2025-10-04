import React from 'react'
import { Navbar } from '../components/Navbar'
import { Hero1 } from '../components/Hero1/Hero1'
import { Hero2 } from '../components/Hero2/Hero2'
import { Hero3 } from '../components/Hero3/Hero3'

export const Home = () => {
  return (
    <div className='h-auto'>
      <Navbar />
      <Hero1 />
      <Hero2 />
      <Hero3 />
    </div>
  )
}
