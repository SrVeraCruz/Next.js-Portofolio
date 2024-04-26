import { CircularText } from "../icons/Icons";
import Link from "next/link";

export default function HireMe() {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-36 h-auto flex items-center justify-center relative">

        <CircularText className="fill-dark animate-spin-slow" />
        <Link href={'mailto:veracruzdudu@gmail.com'}
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md w-16 h-16 rounded-full text-sm border border-solid border-dark hover:bg-light hover:text-dark transition font-semibold"
        >
          Hire me
        </Link>

      </div>
    </div>
  )
}
