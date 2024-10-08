import { motion, useScroll } from "framer-motion"

export default function LiIcon({reference}) {
  const { scrollYProgress } = useScroll({
    target: reference, layoutEffect: false,
    offset: ["center end","center"]
  })

  return (
    <figure className='absolute -left-1 md:-left-3.5 stroke-dark dark:stroke-light'>
      <svg className="-rotate-90 md:w-[4rem] md:h-[4rem] xs:w-[3rem] xs:h-[3rem]" width="75" height="75" viewBox='0 0 100 100'>
        <circle cx="75" cy="50" r="20" className='stroke-primary dark:stroke-primaryDark stroke-1 fill-none' />
        <motion.circle 
          cx="75" cy="50" r="20" className='stroke-[5px] fill-light dark:fill-dark' 
          style={{pathLength: scrollYProgress}}
        />
        <circle cx="75" cy="50" r="10" className='animate-pulse stroke-1 fill-primary dark:fill-primaryDark' />
      </svg>
    </figure>
  )
}
