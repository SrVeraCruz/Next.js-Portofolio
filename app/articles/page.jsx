'use client'

import AnimetedText from '@/components/animetedText/AnimetedText'
import Layout from '@/components/layout/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import Article1 from "@/public/img/articles/pagination_component_in_reactjs.jpg"
import Article2 from "@/public/img/articles/What_is_higher_order_component_in_React.jpg"
import { motion, useMotionValue } from 'framer-motion'
import CardBox from '@/components/cardBox/CardBox'
import TransitionEffect from '@/components/transitionEffect/TransitionEffect'

const FramerImage = motion(Image)

const FeaturedArticle = ({img, title, time, summary, link}) => {
  return (
    <li className='col-span-1'>
      <CardBox className="p-4 flex-col !items-start">
        <Link href={link} target='_blank'
          className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
        >
          <FramerImage src={img} alt={title} 
            className='w-full h-auto' 
            whileHover={{scale:1.05}}
            transition={{duration: 0.2}}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </Link>
        <Link href={link} target='_blank'>
          <h2 
            className='capitalize text-2xl font-bold my-2 mt-4 hover:underline hover:underline-offset-2 xs:text-lg'
          >
            {title}
          </h2>
        </Link>
        <p className='text-sm mb-2'>{summary}</p>
        <span className='text-primary dark:text-primaryDark font-semibold xs:text-sm'>{time}</span>
      </CardBox>
    </li>
  )
}

const MovingImg = ({img, title, link}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null)

  const handleMouse = (e) => {
    imgRef.current.style.display = "inline-block"
    x.set(e.pageX - 50)
    y.set(10)
  }

  const handleMouseOver = (e) => {
    imgRef.current.style.display = "none"
    x.set(0)
    y.set(0)
  }

  return (
    <Link href={link} target='_blank' 
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseOver}
    >
      <h2 className='font-semibold text-xl capitalize hover:underline xs:text-lg'>{title}</h2>
      <FramerImage ref={imgRef} src={img} alt={title} 
        style={{x: x, y: y}}
        initial={{opacity: 0}}
        whileInView={{opacity: 1, transition: {duration: 0.2}}}
        className='w-96 h-auto hidden absolute rounded-lg z-10 md:!hidden'
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" 
      />
    </Link>
  )
}

const Article = ({img, title, date, link}) => {
  return (
    <motion.li 
      className='relative w-full p-5 my-4 rounded-xl flex items-center justify-between bg-light border border-solid border-dark dark:bg-dark  dark:border-light first:mt-0 border-r-4 border-b-4 gap-4 sm:gap-2 sm:flex-col'
      initial={{y: 200}}
      whileInView={{y: 0, transition:{duration: 0.5, ease: "easeInOut"}}}
      viewport={{once: true}}
    >
      <MovingImg 
        img={img}
        title={title}
        link={link}
      />
      <span className='text-primary dark:text-primaryDark font-semibold sm:self-start '>{date}</span>
    </motion.li>
  )
}

export default function Articles() {
  return (
    <>
      <Head>
        <title>VeraCruz | Articles Page</title>
        <meta name='description' content="Articles Page Portofolio" />
      </Head>
      <TransitionEffect />
      <main className='w-full flex flex-col items-center justify-center overflow-hidden'>
        <Layout className='pt-8'>
          <AnimetedText text="Words Can Change The World! " className={"mb-16 text-7xl"} />
          <ul className='grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16'>
            <FeaturedArticle 
              img={Article1}
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              time="9 min read"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              link={'/'}
            />
            <FeaturedArticle 
              img={Article1}
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              time="9 min read"
              summary="Learn how to build a custom pagination component in ReactJS from scratch. 
              Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              link={'/'}
            />
          </ul>

          <h2 className='font-bold text-4xl text-center w-full my-16 mt-32 md:my-10 md:mt-24'>All Articles</h2>
          <ul>
            <Article 
              img={Article2}
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              date="November 09, 2023"
              link="/"
            />
            <Article 
              img={Article2}
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              date="November 09, 2023"
              link="/"
            />
            <Article 
              img={Article2}
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              date="November 09, 2023"
              link="/"
            />
            <Article 
              img={Article2}
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              date="November 09, 2023"
              link="/"
            />
            <Article 
              img={Article2}
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              date="November 09, 2023"
              link="/"
            />
            <Article 
              img={Article2}
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              date="November 09, 2023"
              link="/"
            />
          </ul>
        </Layout>
      </main>
    </>
  )
}
