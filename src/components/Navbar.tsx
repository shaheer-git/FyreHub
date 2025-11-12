import React, { useState } from 'react'
import logo from '../assets/fyreLogo.svg'

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#' },
    { label: 'What We Do', href: '#' },
    { label: 'Our Works', href: '#' },
  ]

  return (
    <div className='bg-opacity-10 w-full sticky z-50 top-[5px] mt-[5px] flex items-center justify-center px-2'>
      <div className='flex items-center justify-between border border-[#AFFC41] rounded-[20px] p-[10px] w-full md:w-4/5 backdrop-blur-lg'>
        <img src={logo} alt="FyreHub" className='cursor-pointer h-8 md:h-10' />

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center justify-around gap-5'>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className='text-[#AFFC41] text-sm lg:text-base cursor-pointer hover:border-[#AFFC41] hover:border-b-2 hover:text-[#aefc419d] transition-colors'>
              {item.label}
            </a>
          ))}
          <button className='bg-[#AFFC41] cursor-pointer hover:bg-[#aefc419d] text-[#252525] px-3 py-2 rounded-md text-sm lg:text-base font-semibold transition-colors'>
            Work With Us
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className='md:hidden flex flex-col gap-1 cursor-pointer'
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-[#AFFC41] transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-[#AFFC41] ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-[#AFFC41] transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='absolute top-20 left-0 right-0 bg-[#17141b] border border-[#AFFC41] rounded-lg m-2 p-4 md:hidden'>
          <div className='flex flex-col gap-4'>
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className='text-[#AFFC41] text-sm cursor-pointer hover:text-[#aefc419d] transition-colors' onClick={() => setIsMobileMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <button className='bg-[#AFFC41] cursor-pointer hover:bg-[#aefc419d] text-[#252525] w-full py-2 rounded-md text-sm font-semibold transition-colors'>
              Work With Us
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
