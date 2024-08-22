'use client'

import AnimetedText from "@/components/animetedText/AnimetedText";
import { GithubIcon } from "@/components/icons/Icons";
import Layout from "@/components/layout/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button/Button";
import { motion } from "framer-motion";
import CardBox from "@/components/cardBox/CardBox";
import TransitionEffect from "@/components/transitionEffect/TransitionEffect";

import FeaturedThumb from "@/public/img/projects/featuredThumb.png"
import DisneyThumb from "@/public/img/projects/disneyThumb.png"
import RealtimeChatThumb from "@/public/img/projects/realtimeChat.png"
import TwitterXThumb from "@/public/img/projects/twitterX.png"
import EcommerceAdminThumb from "@/public/img/projects/ecommerceAdmin.png"
import EcommerceFontThumb from "@/public/img/projects/ecommerceFont.png"
import EstFesAdminThumb from "@/public/img/projects/estFesAdmin.png"
import EstFesFrontThumb from "@/public/img/projects/estFesFront.png"

const FramerImage = motion(Image)

const FeaturedProject = ({type, title, summary, img, link, github}) => {
  return (
    <article>
      <CardBox 
        className="rounded-3xl rounded-br-2xl flex items-center p-12 lg:flex-col lg:p-8 gap-6"
      >
        <Link href={link} className="w-1/2 lg:w-full xs:rounded-2xl xs:rounded-br-3xl xs:p-4 cursor-pointer overflow-hidden rounded-lg">
          <FramerImage src={img} alt={title}
            className="w-full h-auto" 
            whileHover={{scale: 1.05}}
            transition={{duration: 0.2}}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </Link>
        <div className="w-1/2 lg:w-full flex flex-col items-start justify-between">
          <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">{type}</span>
          <Link href={link} target="_blank" 
            className="hover:underline hover:underline-offset-2" 
            >
            <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-2xl">{title}</h2>
          </Link>
          <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
          <div className="mt-2 flex gap-4 items-center">
            <Link href={github} target="_blank" className="w-10" >
              <GithubIcon />
            </Link>
            <Button>
              <Link href={link} target="_blank" >Visit Project</Link>
            </Button>
          </div>
        </div>
      </CardBox>
    </article>
  )
}

const Project = ({type, title, img, link, github}) => {
  return (
    <article className="h-full">
      <CardBox className="h-full flex-col justify-center p-6 shadow-2xl xs:p-4">
        <Link href={link} className="w-full cursor-pointer overflow-hidden rounded-lg">
          <FramerImage src={img} alt={title} 
            className="w-full h-auto" 
            whileHover={{scale: 1.05}}
            transition={{duration: 0.2}}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
           />
        </Link>
        <div className="w-full flex flex-col items-start justify-between mt-4">
          <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">{type}</span>
          <Link href={link} target="_blank" 
            className="hover:underline hover:underline-offset-2" 
            >
            <h2 className="my-2 w-full text-left text-3xl font-bold sm:text-2xl">{title}</h2>
          </Link>
          <div className="w-full mt-2 flex gap-4 items-center justify-between">
            <Link href={link} target="_blank" className="font-semibold text-lg underline md:text-base">
              Visit
            </Link>
            <Link href={github} target="_blank" className="w-8 md:w-6" >
              <GithubIcon />
            </Link>

          </div>
        </div>
      </CardBox>
    </article>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>VeraCruz | Projects Page</title>
        <meta name='description' content="Projects Page Portofolio" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 xs:mb-8 flex flex-col items-center justify-center">
        <Layout className="pt-8">
          <AnimetedText text={"Imagination  Trumps Knowledge!"} className="mb-8" />

          <div className="grid grid-cols-12 gap-24 gap-y-28 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-y-20 sm:gap-x-0">

            <div className="col-span-12">
              <FeaturedProject 
                type="Featured Project"
                title="Portofolio"
                summary="A feature-rich Modern Portofolio App using Next.js, Tailwind Css and Framer Motion. 
                It shows everything you need to know about me."
                img={FeaturedThumb}
                link="/"
                github="https://github.com/SrVeraCruz/Next.js-Portofolio"
              />
            </div>

            {/* <div className="col-span-6 sm:col-span-12">
              <Project 
                type="Project"
                title="YouCine Movies"
                img={YouCineThumb}
                link="https://you-cine.vercel.app/"
                github="https://github.com/SrVeraCruz/React.js-youCine"
              />
            </div> */}

            <div className="col-span-6 sm:col-span-12">
              <Project 
                type="Project"
                title="Real-Time Chat"
                img={RealtimeChatThumb}
                link="https://messenger-app-weld.vercel.app/"
                github="https://github.com/SrVeraCruz/Next.js-Messenger_mongo-tailwind-prisma-Ts"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project 
                type="Project"
                title="Twitter X"
                img={TwitterXThumb}
                link="https://twitter-app-smoky.vercel.app/"
                github="https://github.com/SrVeraCruz/Next.js-Twitter_mongo-tailwind"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project 
                type="Project"
                title="E-Commerce Dashboard"
                img={EcommerceAdminThumb}
                link="https://next-js-ecommerce-admin-eight.vercel.app/"
                github="https://github.com/SrVeraCruz/Next.js-ecommerce_admin"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project 
                type="Project"
                title="E-Commerce Client"
                img={EcommerceFontThumb}
                link="https://next-js-ecommerce-front.vercel.app/"
                github="https://github.com/SrVeraCruz/Next.js-ecommerce_front"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project 
                type="Project"
                title="University website Dashboard"
                img={EstFesAdminThumb}
                link="https://admin-est-usmba-ac-ma.up.railway.app"
                github="https://github.com/SrVeraCruz/PHP-Est_Fes_Admin"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project 
                type="Project"
                title="University website Student Side"
                img={EstFesFrontThumb}
                link="https://est-usmba-ac-ma.up.railway.app"
                github="https://github.com/SrVeraCruz/PHP-Est_Fes-Front"
              />
            </div>
            
          </div>
          
        </Layout>
      </main>
    </>
  )
}
