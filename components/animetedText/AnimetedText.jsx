'use client'

import { motion } from "framer-motion"

const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    }
  }
}
const singleWord = {
  initial: {
    y: 50,
  },
  animate: {
    y: 0,
    transition: {
      duration: 1,
    }
  }
}

export default function AnimetedText({text,className}) {
  return (
    <div className={`w-full mx-auto py-2 flex items-center justify-center
      text-center  overflow-hidden`}
    >
      <motion.h1 
        className={`inline-block w-full text-dark dark:text-light font-bold capitalize text-[5rem]
        ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
      {
        text.split(" ").map((word,index) => 
          <motion.span key={word+'-'+index} variants={singleWord} className="inline-block">
            {word}&nbsp;
          </motion.span>
        )  
      }
      </motion.h1>
    </div>
  )
}


