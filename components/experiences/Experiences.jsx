import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import LiIcon from "../liIcon/LiIcon"

const Details = ({position, company, companyLink, time, address, work}) => {
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
          {position}&nbsp;
          <a href={companyLink || "#"} target="_blank" className="text-primary capitalize">
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">
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
    <div className="mt-44">
      <h1 className="font-bold text-7xl text-center mb-28 w-full">
        Experiences     
      </h1>

      <div ref={ref} className="w-[75%] mx-auto relative">

        <motion.div 
          className="absolute top-1 left-8 w-[4px] bg-dark h-full origin-top" 
          style={{scaleY: scrollYProgress}}
        />

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