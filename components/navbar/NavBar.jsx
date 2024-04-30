'use client'

import Link from 'next/link'
import Logo from '../logo/Logo'
import { usePathname, useRouter } from 'next/navigation'
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from '../icons/Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from '../hooks/useThemeSwitcher'
import { useEffect, useState } from 'react'

const CustomLink = ({ href, title, className=""}) => {
  const path = usePathname();

  return (
    <Link 
      className={`${className} relative group ${path === href ? 'font-semibold' : ''}`} href={href}
    >
      {title}
      <span 
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full  transition-[width] ease duration-300 dark:bg-light ${path === href ? 'w-full' : 'w-0'}`}
      >
        &nbsp;
      </span>
    </Link>
  )
}

const CustomMobileLink = ({ href, title, toggle, className=""}) => {
  const path = usePathname();
  const route = useRouter();

  const handleClick = () => {
    toggle();
    route.push(href);
  }

  return (
    <button 
      onClick={handleClick}
      className={`${className} relative group text-light dark:text-dark ${path === href ? 'font-semibold' : ''}`}
    >
      {title}
      <span 
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full  transition-[width] ease duration-300 dark:bg-dark ${path === href ? 'w-full' : 'w-0'}`}
      >
        &nbsp;
      </span>
    </button>
  )
}

const NavBar = () => {
  const [mode,setMode] = useThemeSwitcher()
  const [hasMouted, setHasMounted] = useState(false)
  const [isOpen,setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <header 
      className='w-full px-32 py-8 font-medium flex items-center justify-between z-50 dark:text-light relative lg:px-24 md:px-16 sm:px-8'
    >

      <button 
        className='hidden flex-col items-center justify-center gap-[0.3rem] lg:flex z-50'
        onClick={handleClick}
      >
        <span 
          className={`bg-dark dark:bg-light h-0.5 w-6 rounded-sm transition-all duration-200 ease-out ${isOpen ? "rotate-45 translate-y-[0.45rem]" : "rotate-0 translate-y-0"}`} 
        />
        <span 
          className={`bg-dark dark:bg-light h-0.5 w-6 rounded-sm transition-all duration-200 ease-out ${isOpen ? "opacity-0" : "opacity-100"}`} 
        />
        <span 
          className={`bg-dark dark:bg-light h-0.5 w-6 rounded-sm transition-all duration-200 ease-out ${isOpen ? "-rotate-45 -translate-y-[0.45rem]" : "rotate-0 -translate-y-0"}`} 
        />
      </button>

      <div className="w-full flex items-center justify-between lg:hidden">
        <nav className='flex gap-8 '>
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
            <TwitterIcon className={'!w-[1.5rem]'} />
          </motion.a>
          <motion.a href={'https://twitter.com'} target='_blank' 
            whileHover={{y:-2}} 
            whileTap={{scale: 0.9}}
          >
            <GithubIcon className={'!w-[1.5rem]'} />
          </motion.a>
          <motion.a href={'https://twitter.com'} target='_blank' 
            whileHover={{y:-2}} 
            whileTap={{scale: 0.9}}
          >
            <LinkedInIcon className={'!w-[1.5rem]'} />
          </motion.a>
          <motion.a href={'https://twitter.com'} target='_blank' 
            whileHover={{y:-2}} 
            whileTap={{scale: 0.9}}
          >
            <PinterestIcon className={'!w-[1.5rem] bg-light rounded-full'} />
          </motion.a>
          <motion.a href={'https://twitter.com'} target='_blank' 
            whileHover={{y:-2}} 
            whileTap={{scale: 0.9}}
          >
            <DribbbleIcon className={'!w-[1.5rem]'} />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")} 
            className="ml-3 flex items-center justify-center rounded-full bg-dark text-light dark:bg-light dark:text-dark p-1"
          >
            {hasMouted && mode === "dark"
              ? <SunIcon className="fill-dark" />
              : <MoonIcon className="fill-dark" />
            }
          </button>

        </nav>
      </div>

      {isOpen && (
        <motion.div 
          className={`min-w-[70vw] hidden flex-col gap-6 items-center justify-between fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-dark/90 dark:bg-light/75 rounded-2xl backdrop-blur-md py-28 lg:flex`}
          initial={{scale: 0, opacity: 0, x: "-50%", y: "-50%"}}
          animate={{scale:1, opacity:1}}
        >
          <nav className='flex gap-4 flex-col items-center justify-center'>
            <CustomMobileLink href={'/'} title={'Home'} toggle={handleClick} />
            <CustomMobileLink href={'/about'} title={'About'} toggle={handleClick} />
            <CustomMobileLink href={'/projects'} title={'Projects'} toggle={handleClick} />
            <CustomMobileLink href={'/articles'} title={'Articles'} toggle={handleClick} />
          </nav>

          <nav className='flex items-center justify-center flex-wrap z-50 gap-4 sm:gap-2'>
            <motion.a href={'https://twitter.com'} target='_blank' 
              whileHover={{y:-2}} 
              whileTap={{scale: 0.9}}
            >
              <TwitterIcon className={'!w-[1.5rem]'} />
            </motion.a>
            <motion.a href={'https://twitter.com'} target='_blank' 
              whileHover={{y:-2}} 
              whileTap={{scale: 0.9}}
              >
              <GithubIcon className={'!w-[1.5rem] dark:bg-dark bg-light text-dark dark:text-light rounded-full'} />
            </motion.a>
            <motion.a href={'https://twitter.com'} target='_blank' 
              whileHover={{y:-2}} 
              whileTap={{scale: 0.9}}
              >
              <LinkedInIcon className={'!w-[1.5rem]'} />
            </motion.a>
            <motion.a href={'https://twitter.com'} target='_blank' 
              whileHover={{y:-2}} 
              whileTap={{scale: 0.9}}
              >
              <PinterestIcon className={'!w-[1.5rem] bg-light rounded-full'} />
            </motion.a>
            <motion.a href={'https://twitter.com'} target='_blank' 
              whileHover={{y:-2}} 
              whileTap={{scale: 0.9}}
              >
              <DribbbleIcon className={'!w-[1.5rem]'} />
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")} 
              className="ml-3 flex items-center justify-center rounded-full bg-dark text-light dark:bg-light dark:text-dark p-1"
              >
              {hasMouted && mode === "dark"
                ? <SunIcon className="fill-dark" />
                : <MoonIcon className="fill-dark" />
              }
            </button>

          </nav>


        </motion.div>
      )}
      
      <div className='absolute left-[50%] top-2 translate-x-[-50%] z-49'>
        <Logo />
      </div>
      
      {isOpen && (
        <motion.button 
          className='absolute top-0 left-0 w-full h-screen z-20 bg-dark/55' 
          initial={{opacity: 0}}
          animate={{opacity:1}}
          onClick={handleClick}
        />
      )}

    </header>
  )
}

export default NavBar
