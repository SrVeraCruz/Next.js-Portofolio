import "./globals.css";
import { Montserrat } from "next/font/google";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import Script from "next/script";
import Head from "next/head";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const montserrat = Montserrat({ subsets: ["latin"] });

export default async function RootLayout({ 
  children,
  params: {locale}
 }) {
  const translations = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
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
        <NextIntlClientProvider messages={translations}>
          <NavBar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
