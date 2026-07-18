import { Link } from 'react-router-dom'
import logo from '../../assets/fyreLogo.svg'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
  ]

  const socialLinks = [
    { name: 'Twitter', href: '#' },
    { name: 'Facebook', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'Instagram', href: '#' },
  ]

  return (
    <footer className='bg-[#1a1620] border-t border-[#AFFC41]'>
      <div className='w-full px-4 py-12 md:py-16'>
        <div className='max-w-7xl mx-auto'>
          {/* Main Footer Content */}
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12'>
            {/* Logo and Company Info */}
            <div className='flex flex-col gap-4'>
              <Link to='/'>
                <img src={logo} alt="FyreHub" className='h-8 md:h-10 cursor-pointer' />
              </Link>
              <p className='text-[#AFFC41] text-sm'>
                Your one-stop solution for all creative and branding needs.
              </p>
            </div>

            {/* Quick Links */}
            <div className='flex flex-col gap-4'>
              <h4 className='text-[#AFFC41] font-bold text-base md:text-lg'>Quick Links</h4>
              <div className='flex flex-col gap-2'>
                {footerLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className='text-[#AFFC41] text-sm hover:text-white transition-colors'
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className='flex flex-col gap-4'>
              <h4 className='text-[#AFFC41] font-bold text-base md:text-lg'>Services</h4>
              <div className='flex flex-col gap-2'>
                <Link to='/services' className='text-[#AFFC41] text-sm hover:text-white transition-colors'>Web Design</Link>
                <Link to='/services' className='text-[#AFFC41] text-sm hover:text-white transition-colors'>Branding</Link>
                <Link to='/services' className='text-[#AFFC41] text-sm hover:text-white transition-colors'>Marketing</Link>
                <Link to='/services' className='text-[#AFFC41] text-sm hover:text-white transition-colors'>Photography</Link>
              </div>
            </div>

            {/* Contact & Social */}
            <div className='flex flex-col gap-4'>
              <h4 className='text-[#AFFC41] font-bold text-base md:text-lg'>Get In Touch</h4>
              <div className='flex flex-col gap-2'>
                <a href='mailto:sales.fyrehub@gmail.com' className='text-[#AFFC41] text-sm hover:text-white transition-colors'>
                  sales.fyrehub@gmail.com
                </a>
                <a href='tel:+918217760281' className='text-[#AFFC41] text-sm hover:text-white transition-colors'>
                  +91 82177 60281
                </a>
              </div>
              <div className='flex gap-4 mt-2'>
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className='text-[#AFFC41] text-xs hover:text-white transition-colors'
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className='border-t border-[#AFFC41] border-opacity-30 my-8 md:my-12'></div>

          {/* Bottom Footer */}
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-[#AFFC41] text-xs md:text-sm text-center md:text-left'>
              &copy; {currentYear} FyreHub. All rights reserved.
            </p>
            <div className='flex gap-6'>
              <a href='https://site.privacy.fyrehub.in/' target='_blank' rel='noopener noreferrer' className='text-[#AFFC41] text-xs hover:text-white transition-colors'>
                Privacy Policy
              </a>
              <a href='https://site.terms.fyrehub.in/' target='_blank' rel='noopener noreferrer' className='text-[#AFFC41] text-xs hover:text-white transition-colors'>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
