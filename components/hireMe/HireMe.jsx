import { useTranslations } from "next-intl";
import { CircularText } from "../icons/Icons";
import Link from "next/link";

export default function HireMe({className}) {
  const t = useTranslations('Home');

  return (
    <div 
      className={`fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:absolute md:top-0 md:right-6 sm:right-0 md:bottom-auto md:left-auto z-50 ${className}`}
    >
      <div className="w-36 md:w-24 h-auto flex items-center justify-center relative">

        <CircularText className="fill-dark animate-spin-slow dark:fill-light" />
        <Link href={'mailto:veracruzdudu@gmail.com'}
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark dark:bg-light text-light dark:text-dark shadow-md w-16 h-16 md:w-12 md:h-12 rounded-full text-sm text-center md:text-[0.65rem] border border-solid border-dark dark:hover:border-light hover:bg-light dark:hover:bg-dark hover:text-dark dark:hover:text-light transition font-semibold leading-3"
        >
          {t('hireme')} 
        </Link>

      </div>
    </div>
  )
}
