export default function CardBox({children, className}) {
  return (
    <div 
      className={`w-full flex items-center justify-center rounded-2xl border-2 border-solid border-dark bg-light dark:border-light dark:bg-dark  relative ${className}`}
    >
      <div 
        className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark  dark:bg-light rounded-br-3xl xs:w-full sm:h-[102%] xs:-right-2 xs:rounded-[1.5rem]' 
      />
      {children}
    </div>
  )
}
