"use client"

import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import Script from "next/script";
import { usePathname } from "next/navigation";
import Head from "next/head";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const path = usePathname()

  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>VeraCruz | Home</title>
        <meta name='description' content="Home Page Portofolio" />
      </Head>
      <body 
        className={montserrat.className+' bg-light dark:bg-dark dark:text-light w-full min-h-screen'}
      >
        <Script id="theme-switcher" strategy="beforeInteractive">
        {`
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
        `}
        </Script>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
