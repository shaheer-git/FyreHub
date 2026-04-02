import { Navbar } from '../components/Navbar'
import { Hero1 } from '../components/Hero1/Hero1'
import { Hero2 } from '../components/Hero2/Hero2'
import { Hero3 } from '../components/Hero3/Hero3'
import { Testimonials } from '../components/Testimonials/Testimonials'
import { Footer } from '../components/Footer/Footer'
import { useEffect } from 'react'

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='h-auto'>
      <Navbar />
      <Hero1 />
      <Hero2 />
      <Hero3 isPreview={true} />
      <Testimonials />
      <Footer />
    </div>
  )
}
