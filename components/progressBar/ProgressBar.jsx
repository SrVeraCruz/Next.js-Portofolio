import { motion } from "framer-motion";

export default function ProgressBar({scrollYProgress, className }) {
  return (
    <motion.div 
      className={`absolute top-1 left-8 md:left-4 xs:left-[.55rem] w-[4px] bg-dark dark:bg-light h-full origin-top ${className}`}
      style={{scaleY: scrollYProgress}}
    />
  )
}