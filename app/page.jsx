import Layout from "../components/layout/Layout";
import Image from "next/image";
import profilePic from '../public/img/profile/developer-pic-1.png'
import lightBub from '../public/img/miscellaneous_icons_1.svg'
import AnimetedText from "../components/animetedText/AnimetedText";
import Link from "next/link";
import { LinkArrow } from "../components/icons/Icons";
import HireMe from "@/components/hireMe/HireMe";
import Head from "next/head";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <>
      <Head>
        <title>VeraCruz | Home Page</title>
        <meta name='description' content="Home Page Portofolio" />
      </Head>
      <main className="flex items-center text-dark dark:text-light w-full min-h-[calc(100vh-5.5rem)]">
        <Layout className="!py-2 md:!pb-7">
          <div className="flex items-center justify-center w-full md:flex-col md:gap-4">
            <div 
              className="w-1/2 max-h-[calc(100vh-5.5rem)] lg:hidden md:inline-block md:w-full"
            >
              <Image src={profilePic} alt="Vera Cruz" priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                className="w-full h-auto object-cover " 
              />
            </div>
            <div 
                className="w-1/2 flex flex-col items-center self-center lg:w-full lg:!text-center"
              >
              <AnimetedText 
                text={"Turning Vision Into Reality With Code And Design."} 
                className={'!text-6xl !text-left xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-4xl xs:!text-3xl lg:!text-center'} 
              />
              <p className="py-4 text-base font-medium md:text-sm xs:text-xs">
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
                Explore my latest projects and articles, showcasing my expertise in 
                React.js and web development.
              </p>
              <div className="flex items-center self-start mt-2 gap-4 lg:self-center">
                <Button>
                  <Link href="/resume/CV-Resume.pdf" target="_blank " download={true}>
                    Resume 
                  </Link>
                  <LinkArrow className={'w-6'} />
                </Button>
                <Link href="mailto:veracruzdudu@gmail.com" target="_blank"
                  className="font-medium text-lg underline text-dark dark:text-light md:text-base"
                  >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />

        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={lightBub} alt="Vera Cruz" className="w-full h-auto" />
        </div>

      </main>
    </>
  );
}
