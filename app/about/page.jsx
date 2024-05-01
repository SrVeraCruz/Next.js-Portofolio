'use client'

import AnimetedText from '@/components/animetedText/AnimetedText'
import Layout from '@/components/layout/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/img/profile/developer-pic-2.jpg'
import profilePic2 from '../../public/img/profile/hero1.jpg'
import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/skills/Skills'
import Experiences from '@/components/experiences/Experiences'
import Education from '@/components/education/Education'
import CardBox from '@/components/cardBox/CardBox'
import TransitionEffect from '@/components/transitionEffect/TransitionEffect'

const AnimetedNumbers = ({value}) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if(isInView) {
      motionValue.set(value)
    }
  }, [motionValue,isInView,value])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if(ref.current && latest.toFixed(0)) {
        ref.current.textContent = latest.toFixed(0);
      }
    })
  }, [springValue, value])

  return (
    <span ref={ref}></span>
  )

}

export default function AboutPage(){
  return (
    <>
      <Head>
        <title>VeraCruz | About Page</title>
        <meta name='description' content="About Page Portofolio" />
      </Head>
      <TransitionEffect />
      <main className='w-full flex flex-col items-center justify-center dark:!text-light'>
        <Layout className='!pt-8'>

          <AnimetedText text={"assion Fuels Purpose! "} className={"mb-16 text-7xl sm:mb-8"} />

          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div 
              className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'
            >
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
              <p className='font-medium leading-7 xl:leading-6 tracking-wide xs:text-sm'>
                Hi, I'm Vera Cruz, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With  2 years of experience in the field. I am always looking for new and innovative ways to bring my clients' visions to life.
              </p>
              <p className='font-medium leading-7 xl:leading-6 tracking-wide xs:text-sm'>
                I believe that design is about more than just making things look pretty - it's about solving problems and creating intuitive, enjoyable experiences for users.
              </p>
              <p className='font-medium leading-7 xl:leading-6 tracking-wide xs:text-sm'>
                Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
              </p>
            </div>

            <CardBox className="col-span-3 h-max  p-8 xl:col-span-4 md:order-1 md:col-span-8">     
              <div className='bg-black'>
                <Image src={profilePic2} alt='Vera Cruz' priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className='w-full h-auto'
                />
              </div>        
            </CardBox>

            <div 
              className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row md:order-3 xl:gap-3'
            >
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl md:text-6xl sm:text-5xl xs:text-4xl font-bold'>
                  <AnimetedNumbers value={20} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 md:text-center md:text-lg sm:text-base xs:text-sm dark:text-light/75'>positive feedbacks</h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl md:text-6xl sm:text-5xl xs:text-4xl font-bold'>
                  <AnimetedNumbers value={15} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 md:text-center md:text-lg sm:text-base xs:text-sm dark:text-light/75'>projects completed</h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl md:text-6xl sm:text-5xl xs:text-4xl font-bold'>
                  <AnimetedNumbers value={2} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 md:text-center md:text-lg sm:text-base xs:text-sm dark:text-light/75'>years of experience</h2>
              </div>
            </div>

          </div>

          <Skills />
          <Experiences />
          <Education />

        </Layout>
      </main>
    </>
  )
}
