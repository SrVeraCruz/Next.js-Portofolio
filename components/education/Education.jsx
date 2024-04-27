import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import LiIcon from "../liIcon/LiIcon"

const Details = ({type, time, place, info}) => {
  const ref = useRef(null)

  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">

      <LiIcon reference={ref} />

      <motion.div
        initial={{y: 50}}
        whileInView={{y: 0}}
        transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">
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
    <div className="mt-44">
      <h1 className="font-bold text-7xl text-center mb-28 w-full">
        Education     
      </h1>

      <div ref={ref} className="w-[75%] mx-auto relative">

        <motion.div 
          className="absolute top-1 left-8 w-[4px] bg-dark h-full origin-top" 
          style={{scaleY: scrollYProgress}}
        />

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