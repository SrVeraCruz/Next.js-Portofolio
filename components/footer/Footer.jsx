import Layout from "../layout/Layout";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center gap-2">
          Built With 
          <span className="text-primary text-2xl" >&#9825;</span> 
          by&nbsp;<Link href={'/'} target="_blank" className="underline underline-offset-2" >Vera Cruz</Link>
        </div>
        <div>
          <Link href={'/'} target="_blank" className="underline underline-offset-2" >Say Hello</Link>
        </div>
      </Layout>
    </footer>
  )
}
