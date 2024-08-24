import Layout from "../layout/Layout";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer 
      className="w-full border-t-2 border-solid text-dark border-dark dark:border-light dark:text-light font-medium text-lg lg:text-base md:text-sm"
    >
      <Layout className="py-8 flex items-center justify-between sm:flex-col sm:justify-center sm:gap-2 sm:py-6">
        <span>{new Date().getFullYear()} &copy; {t('copyright')}</span>
        <div className="flex items-center gap-2">
          {t('madeWith')}
          <span className="text-primary dark:text-primaryDark text-2xl" >&#9825;</span> 
          {t('by')}&nbsp;<Link href={'/'} target="_blank" className="underline underline-offset-2" >Vera Cruz</Link>
        </div>
        <div>
          <Link href={'/'} target="_blank" className="underline underline-offset-2" >{t('greeting')}</Link>
        </div>
      </Layout>
    </footer>
  )
}
