"use client"

import { useState } from 'react'
import { TranslateIcon } from '../icons/Icons'
import { useRouter, usePathname } from '../../navigation';
import { motion } from 'framer-motion'
import { useParams } from "next/navigation";

export default function Translate({className}) {
  const [isOpen, setIsOpen] = useState(false)
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
            absolute top-[120%] right-0 text-left w-32 text-sm
            p-1 rounded-sm shadow-lg dark:bg-light bg-dark
            border-[.01rem] border-dark/25 
          "
          initial={{scale: 0, opacity: 0}}
          animate={{scale:1, opacity:1}}
        >
          <p 
            onClick={() => router.push(pathname, {locale: 'en'})}
            className={`cursor-pointer hover:bg-dark/10 dark:text-dark text-light p-1 rounded-sm ${params.locale === 'en' ? 'bg-dark/10' : ''}`}
          >
            English
          </p>
          <p
            onClick={() => router.push(pathname, {locale: 'pt'})}
            className={`cursor-pointer hover:bg-dark/10 dark:text-dark text-light p-1 rounded-sm ${params.locale === 'pt' ? 'bg-dark/10' : ''}`}
          >
            Portuguese
          </p>
        </motion.div>
      )}
    </button>
  )
}


