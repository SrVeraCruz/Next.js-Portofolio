'use client'

import Link from 'next/link'
import Logo from '../logo/Logo'
import { usePathname } from 'next/navigation'
import { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from '../icons/Icons'
import { motion } from 'framer-motion'

const CustomLink = ({ href, title, className=""}) => {
  const path = usePathname();

  return (
    <Link 
      className={`${className} relative group ${path === href ? 'font-semibold' : ''}`} href={href}
    >
      {title}
      <span 
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full  transition-[width] ease duration-300 ${path === href ? 'w-full' : 'w-0'}`}
      >
        &nbsp;
      </span>
    </Link>
  )
}

const NavBar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between z-50'>

      <nav className='flex gap-8'>
        <CustomLink href={'/'} title={'Home'} />
        <CustomLink href={'/about'} title={'About'} />
        <CustomLink href={'/projects'} title={'Projects'} />
        <CustomLink href={'/articles'} title={'Articles'} />
      </nav>
      
      <nav className='flex items-center justify-center flex-wrap gap-4'>
        <motion.a href={'https://twitter.com'} target='_blank' 
          whileHover={{y:-2}} 
          whileTap={{scale: 0.9}}
        >
          <TwitterIcon className={'w-[1.5rem]'} />
        </motion.a>
        <motion.a href={'https://twitter.com'} target='_blank' 
          whileHover={{y:-2}} 
          whileTap={{scale: 0.9}}
        >
          <GithubIcon className={'w-[1.5rem]'} />
        </motion.a>
        <motion.a href={'https://twitter.com'} target='_blank' 
          whileHover={{y:-2}} 
          whileTap={{scale: 0.9}}
        >
          <LinkedInIcon className={'w-[1.5rem]'} />
        </motion.a>
        <motion.a href={'https://twitter.com'} target='_blank' 
          whileHover={{y:-2}} 
          whileTap={{scale: 0.9}}
        >
          <PinterestIcon className={'w-[1.5rem]'} />
        </motion.a>
        <motion.a href={'https://twitter.com'} target='_blank' 
          whileHover={{y:-2}} 
          whileTap={{scale: 0.9}}
        >
          <DribbbleIcon className={'w-[1.5rem]'} />
        </motion.a>
      </nav>
      
      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
      
    </header>
  )
}

export default NavBar
