import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import LiIcon from "../liIcon/LiIcon"
import ProgressBar from "../progressBar/ProgressBar"

const Details = ({position, company, companyLink, time, address, work}) => {
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
          {position}&nbsp;
          <a href={companyLink || "#"} target="_blank" className="text-primary dark:text-primaryDark capitalize">
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark dark:text-light/75 text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm ">
          {work}
        </p>
      </motion.div>
    </li>
  )
}

export default function Experiences() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  })

  return (
    <div className="mt-44 xl:mt-36 lg:mt-32 md:mt-24">
      <h1 className="font-bold text-7xl md:text-6xl xs:text-4xl text-center mb-28 md:mb-20 sm:mb-16 w-full">
        Experiences     
      </h1>

      <div ref={ref} className="w-[75%] lg:w-[90%] md:w-full mx-auto relative">

        <ProgressBar scrollYProgress={scrollYProgress} />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position={"Software Enginer"}
            company={"Google"}
            companyLink={"https://www.google.com"}
            time={"2024"} 
            address={"Fès Maroc"}
            work={"Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and  relevance of search results and developing new tools for data analysis and visualization."}
          />
          <Details
            position={"Software Enginer"}
            company={"Google"}
            companyLink={"https://www.google.com"}
            time={"2024"} 
            address={"Fès Maroc"}
            work={"Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and  relevance of search results and developing new tools for data analysis and visualization."}
          />
          <Details
            position={"Software Enginer"}
            company={"Google"}
            companyLink={"https://www.google.com"}
            time={"2024"} 
            address={"Fès Maroc"}
            work={"Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and  relevance of search results and developing new tools for data analysis and visualization."}
          />
          <Details
            position={"Software Enginer"}
            company={"Google"}
            companyLink={"https://www.google.com"}
            time={"2024"} 
            address={"Fès Maroc"}
            work={"Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and  relevance of search results and developing new tools for data analysis and visualization."}
          />
        </ul>

      </div>
    </div>
  )
}