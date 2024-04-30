export default function Button({children, className}) {
  return (
    <button 
      className={`flex gap-1 items-center bg-dark dark:bg-light p-2 px-6 rounded-lg text-lg font-semibold text-light dark:text-dark hover:bg-light hover:text-dark dark:hover:bg-dark dark:hover:text-light transition  border-2 border-solid border-transparent hover:border-dark dark:hover:border-light md:px-4 md:text-base ${className}`}
    >
      {children}
    </button>
  )
}
