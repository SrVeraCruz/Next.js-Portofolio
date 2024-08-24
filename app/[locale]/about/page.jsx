'use client'

import AnimetedText from '@/components/animetedText/AnimetedText'
import Layout from '@/components/layout/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../../public/img/profile/developer-pic-2.jpg'
import profilePic2 from '../../../public/img/profile/hero1.jpg'
import { useEffect, useRef, useMemo } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/skills/Skills'
import Experiences from '@/components/experiences/Experiences'
import Education from '@/components/education/Education'
import CardBox from '@/components/cardBox/CardBox'
import TransitionEffect from '@/components/transitionEffect/TransitionEffect'
import { useTranslations } from "next-intl";

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
  const t = useTranslations('About');

  const experienceTime = useMemo(() => {
    const initialYear = new Date('2021-09-15').getFullYear();
    const finalYear = new Date().getFullYear();

    return Math.abs(finalYear - initialYear);
  }, [])

  return (
    <>
      <Head>
        <title>VeraCruz | About Page</title>
        <meta name='description' content="About Page Portofolio" />
      </Head>
      <TransitionEffect />
      <main className='w-full flex flex-col items-center justify-center dark:!text-light'>
        <Layout className='!pt-8'>

          <AnimetedText text={t('title')} className={"mb-16 text-7xl sm:mb-8"} />

          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div 
              className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'
            >
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>{t('biographyTitle')}</h2>
              <p className='font-medium leading-7 xl:leading-6 tracking-wide xs:text-sm'>
                {t('biographyParagraph1_1')} {experienceTime} {t('biographyParagraph1_2')}
              </p>
              <p className='font-medium leading-7 xl:leading-6 tracking-wide xs:text-sm'>
                {t('biographyParagraph2')}
              </p>
              <p className='font-medium leading-7 xl:leading-6 tracking-wide xs:text-sm'>
                {t('biographyParagraph3')}
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
                  <AnimetedNumbers value={100} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 md:text-center md:text-lg sm:text-base xs:text-sm dark:text-light/75'>{t('feedbacks')}</h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl md:text-6xl sm:text-5xl xs:text-4xl font-bold'>
                  <AnimetedNumbers value={20} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 md:text-center md:text-lg sm:text-base xs:text-sm dark:text-light/75'>{t('projects')}</h2>
              </div>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl md:text-6xl sm:text-5xl xs:text-4xl font-bold'>
                  <AnimetedNumbers value={experienceTime} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 md:text-center md:text-lg sm:text-base xs:text-sm dark:text-light/75'>{t('experience')}</h2>
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
