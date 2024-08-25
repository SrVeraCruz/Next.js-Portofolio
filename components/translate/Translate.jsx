"use client"

import { useState } from 'react'
import { TranslateIcon } from '../icons/Icons'
import { useRouter, usePathname } from '../../navigation';
import { motion } from 'framer-motion'
import { useParams } from "next/navigation";
import { useTranslations } from 'next-intl';

export default function Translate({className}) {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations('Languages');
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams()

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={"relative "}
    >
      <TranslateIcon className={className} />
      {isOpen && (
        <motion.div 
          className="
            absolute top-[120%] right-0 text-left w-32 text-xs flex flex-col gap-0.5
            p-1 rounded-sm shadow-lg dark:shadow-light/5 dark:bg-dark bg-light
            border-[.01rem]  dark:border-light/20 dark:text-light text-dark
            lg:dark:bg-light lg:bg-dark lg:dark:text-dark lg:text-light
            lg:dark:shadow-dark/10 lg:shadow-light/10
          "
          initial={{scale: 0, opacity: 0}}
          animate={{scale:1, opacity:1}}
        >
          <p 
            onClick={() => router.push(pathname, {locale: 'en'})}
            className={`
              cursor-pointer hover:bg-dark/10 lg:hover:bg-light/10  
              hover:dark:bg-light/10 lg:hover:dark:bg-dark/10 p-1 rounded-sm 
              ${params.locale === 'en' 
                ? 'bg-dark/5 lg:bg-light/5 dark:bg-light/5 lg:dark:bg-dark/5' 
                : ''
              }
            `}
          >
            {t('english')}
          </p>
          <p
            onClick={() => router.push(pathname, {locale: 'fr'})}
            className={`
              cursor-pointer hover:bg-dark/10 lg:hover:bg-light/10  
              hover:dark:bg-light/10 lg:hover:dark:bg-dark/10 p-1 rounded-sm 
              ${params.locale === 'fr' 
                ? '	bg-dark/5 lg:bg-light/5 dark:bg-light/5 lg:dark:bg-dark/5' 
                : ''
              }
            `}
          >
            {t('french')}
          </p>
          <p
            onClick={() => router.push(pathname, {locale: 'pt'})}
            className={`
              cursor-pointer hover:bg-dark/10 lg:hover:bg-light/10  
              hover:dark:bg-light/10 lg:hover:dark:bg-dark/10 p-1 rounded-sm 
              ${params.locale === 'pt' 
                ? '	bg-dark/5 lg:bg-light/5 dark:bg-light/5 lg:dark:bg-dark/5' 
                : ''
              }
            `}
          >
            {t('portuguese')}
          </p>
        </motion.div>
      )}
    </button>
  )
}


