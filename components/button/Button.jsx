export default function Button({children, className}) {
  return (
    <button 
      className={`flex gap-1 items-center bg-dark p-2 px-6 rounded-lg text-lg font-semibold text-light hover:bg-light hover:text-dark transition  border-2 border-solid border-transparent hover:border-dark ${className}`}
    >
      {children}
    </button>
  )
}
