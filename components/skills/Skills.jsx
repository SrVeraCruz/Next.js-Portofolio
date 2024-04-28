import { motion } from "framer-motion"

const Skill = ({name, x, y, className}) => {
  return (
    <motion.div 
      className={`flex items-center justify-center rounded-full bg-dark text-light font-semibold shadow-dark dark:shadow-light dark:bg-light dark:text-dark py-3 px-6  absolute ${className}`}
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
  return (
    <>
      <h2 className="font-bold text-7xl mt-44 w-full text-center">Skills</h2>
      <div 
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark"
      >
        <Skill name="Web" className="!p-8" />
        <Skill name="HTML" x="-25vw" y="2vw" />
        <Skill name="Css" x="-5vw" y="-10vw" />
        <Skill name="JavaScript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="PHP" x="15vw" y="-12vw" />
        <Skill name="Firebase" x="32vw" y="-4vw" />
        <Skill name="MongoDB" x="0vw" y="-20vw" />
        <Skill name="VueJS" x="-19vw" y="15vw" />
        <Skill name="Tailwind CSS" x="18vw" y="16vw" />
      </div>
    </>
  )
}
