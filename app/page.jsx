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
        <Layout className="!p-0">
          <div className="flex items-center justify-center w-full">
            <div className="w-1/2 max-h-[calc(100vh-5.5rem)]">
              <Image src={profilePic} alt="Vera Cruz" className="w-auto h-full object-cover" />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimetedText 
                text={"Turning Vision Into Reality With Code And Design."} 
                className={'!text-6xl !text-left'} 
                />
              <p className="py-4 text-base font-medium">
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
                Explore my latest projects and articles, showcasing my expertise in 
                React.js and web development.
              </p>
              <div className="flex items-center self-start mt-2 gap-4">
                <Button>
                  <Link href="/resume/CV-Resume.pdf" target="_blank " download={true}>
                    Resume 
                  </Link>
                  <LinkArrow className={'w-6'} />
                </Button>
                <Link href="mailto:veracruzdudu@gmail.com" target="_blank"
                  className="font-medium text-lg underline text-dark dark:text-light"
                  >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />

        <div className="absolute right-8 bottom-8 inline-block w-24">
          <Image src={lightBub} alt="Vera Cruz" className="w-full h-auto" />
        </div>

      </main>
    </>
  );
}
