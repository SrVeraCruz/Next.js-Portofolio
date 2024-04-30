import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import LiIcon from "../liIcon/LiIcon"
import ProgressBar from "../progressBar/ProgressBar"

const Details = ({type, time, place, info}) => {
  const ref = useRef(null)

  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-center justify-between">

      <LiIcon reference={ref} />

      <motion.div
        initial={{y: 50}}
        whileInView={{y: 0}}
        transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium dark:text-light/75 text-dark/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">
          {info}
        </p>
      </motion.div>
    </li>
  )
}

export default function Education() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  })

  return (
    <div className="mt-44 xl:mt-36 lg:mt-32 sm:mt-28">
      <h1 className="font-bold text-7xl md:text-6xl xs:text-4xl text-center mb-28 md:mb-20 sm:mb-16 w-full">
        Education     
      </h1>

      <div ref={ref} className="w-[75%] lg:w-[90%] md:w-full mx-auto relative">

      <ProgressBar scrollYProgress={scrollYProgress} />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type={"Bachelor Of Science And Technology"}
            time={"2017-2020"}
            place={"National High School-Sao Tome and Principe"}
            info={"Completed course in advanced topics such as Reinforcement Learning, Computer Vision, and Machine Learning Engineering."} 
          />
          <Details
            type={"TUD in Computer Engineering School"}
            time={"2023-Present"}
            place={"Higher School of Technologies-Fez "}
            info={"Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Data Base."} 
          />
        </ul>

      </div>
    </div>
  )
}