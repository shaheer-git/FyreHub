import { Navbar } from '../components/Navbar'
import { Hero3 } from '../components/Hero3/Hero3'
import { Footer } from '../components/Footer/Footer'
import { useEffect } from 'react'

export const OurWork = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <Navbar />
      <div className='md:pt-24'>
        <Hero3 />
      </div>
      <Footer />
    </div>
  )
}
