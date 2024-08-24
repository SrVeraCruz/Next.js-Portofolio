import { motion } from "framer-motion"
import { useTranslations } from "next-intl";

const Skill = ({name, x, y, className}) => {
  return (
    <motion.div 
      className={`flex items-center justify-center rounded-full bg-dark text-light font-semibold shadow-dark dark:shadow-light dark:bg-light dark:text-dark py-3 px-6 lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold absolute ${className}`}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.9 }}
      initial={{ x:0, y:0 }}
      whileInView={{ x:x, y:y, transition:{ duration: 1.5 }} }
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  )
}

export default function Skills () {
  const t = useTranslations('About');
  
  return (
    <>
      <h2 className="font-bold text-7xl mt-44 sm:mt-36 xs:mt-28 lg:mt-32 md:text-6xl xs:text-4xl w-full text-center">{t('skillsTitle')}</h2>
      <div 
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLighSm sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]"
      >
        <Skill name="Web" 
          className="!p-8 lg:!p-6 md:!p-5 sm:!p-4 xs:!p-2 xs:!bg-dark xs:!text-light xs:dark:!bg-light xs:dark:!text-dark" 
        />
        <Skill name="HTML" x="-25vw" y="5vw" />
        <Skill name="Css" x="-5vw" y="-10vw" />
        <Skill name="JavaScript" x="20vw" y="-8vw" />
        <Skill name="TypeScript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="PHP" x="15vw" y="-16vw" />
        <Skill name="Firebase" x="32vw" y="-1vw" />
        <Skill name="MongoDB" x="0vw" y="-20vw" />
        <Skill name="MySql" x="-19vw" y="14vw" />
        <Skill name="Tailwind CSS" x="20vw" y="16vw" />
        <Skill name="Prisma" x="8vw" y="23vw" />
        <Skill name="Figma" x="-25vw" y="-5vw" />
        <Skill name="Docker" x="-8vw" y="22vw" />
      </div>
    </>
  )
}
