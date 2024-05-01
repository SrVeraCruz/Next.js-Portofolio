import { motion } from "framer-motion"

export default function TransitionEffect() {

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-full w-screen h-screen bg-primary z-[53]" 
        initial={{x: "0%", width: "0%"}}
        animate={{x: "0%", width: ["0%","100%","100%","0%"]}}
        transition={{duration: 0.55, ease: "easeInOut"}}
      />
      <motion.div 
        className="fixed top-0 left-0 right-full w-screen h-screen bg-dark dark:bg-light z-[52]" 
        initial={{x: "0%", width: "0%"}}
        animate={{x: "0%", width: ["0%","100%","100%","0%"]}}
        transition={{delay:0.2, duration: 0.55, ease: "easeInOut"}}
      />
      <motion.div 
        className="fixed top-0 left-0 right-full w-screen h-screen bg-light dark:bg-dark z-[51]" 
        initial={{x: "0%", width: "100%"}}
        animate={{x: "0%", width: ["100%","100%","100%","0%"]}}
        transition={{ duration: 0.9, ease: "easeInOut"}}
      />
    </>
  )
}
