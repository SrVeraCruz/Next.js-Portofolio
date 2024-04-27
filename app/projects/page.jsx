import AnimetedText from "@/components/animetedText/AnimetedText";
import { GithubIcon } from "@/components/icons/Icons";
import Layout from "@/components/layout/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Project1 from "@/public/img/projects/crypto-screener-cover-image.jpg"
import Button from "@/components/button/Button";

const FeaturedProject = ({type, title, summary, img, link, github}) => {
  return (
    <article 
      className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl"
    >
      <div 
        className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl' 
      />
      <Link href={link} className="w-1/2 cursor-pointer overflow-hidden rounded-lg">
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link href={link} target="_blank" 
          className="hover:underline hover:underline-offset-2" 
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex gap-4 items-center">
          <Link href={github} target="_blank" className="w-10" >
            <GithubIcon />
          </Link>
          <Button>
            <Link href={link} target="_blank" >Visit Project</Link>
          </Button>
        </div>
      </div>
    </article>
  )
}

const Project = ({type, title, img, link, github}) => {
  return (
    <article
      className="w-full flex items-center justify-center rounded-2xl border border-solid border-dark shadow-2xl p-6 bg-light relative flex-col"
    >
      <div 
        className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl' 
      />
      <Link href={link} className="w-full cursor-pointer overflow-hidden rounded-lg">
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link href={link} target="_blank" 
          className="hover:underline hover:underline-offset-2" 
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex gap-4 items-center justify-between">
          <Link href={link} target="_blank" className="font-semibold text-lg underline">
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8" >
            <GithubIcon />
          </Link>

        </div>
      </div>
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
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-8">
          <AnimetedText text={"Imagination  Trumps Knowledge!"} className="mb-8" />

          <div className="grid grid-cols-12 gap-24 gap-y-28">
            <div className="col-span-12">
              <FeaturedProject 
                type="Featured Project"
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                img={Project1}
                link="/"
                github="/"
              />
            </div>

            <div className="col-span-6">
              <Project 
                type="Featured Project"
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                img={Project1}
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Project 
                type="Featured Project"
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                img={Project1}
                link="/"
                github="/"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject 
                type="Featured Project"
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                img={Project1}
                link="/"
                github="/"
              />
            </div>

            <div className="col-span-6">
              <Project 
                type="Featured Project"
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                img={Project1}
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Project 
                type="Featured Project"
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                img={Project1}
                link="/"
                github="/"
              />
            </div>
          </div>
          
        </Layout>
      </main>
    </>
  )
}
