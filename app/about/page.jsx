'use client'

import AnimetedText from '@/components/animetedText/AnimetedText'
import Layout from '@/components/layout/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/img/profile/developer-pic-2.jpg'
import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/skills/Skills'
import Experiences from '@/components/experiences/Experiences'
import Education from '@/components/education/Education'

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
      <main className='w-full flex flex-col items-center justify-center'>
        <Layout className='pt-8'>

          <AnimetedText text={"assion Fuels Purpose! "} className={"mb-16 text-7xl"} />

          <div className='grid w-full grid-cols-8 gap-16'>
            <div className='col-span-3 flex flex-col items-start justify-start'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
              <p className='font-medium leading-7 tracking-wide'>
                Hi, I'm Vera Cruz, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With  1 years of experience in the field. I am always looking for new and innovative ways to bring my clients' visions to life.
              </p>
              <p className='font-medium leading-7 tracking-wide'>
                I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.
              </p>
              <p className='font-medium leading-7 tracking-wide'>
                Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
              </p>
            </div>

            <div 
              className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'
            >
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
              <Image src={profilePic} alt='Vera Cruz' />
            </div>

            <div className='col-span-2 flex flex-col items-end justify-between'>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimetedNumbers value={50} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>satisfied clients</h2>
              </div>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimetedNumbers value={40} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>projects completed</h2>
              </div>
              <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                  <AnimetedNumbers value={1} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75'>years of experience</h2>
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
