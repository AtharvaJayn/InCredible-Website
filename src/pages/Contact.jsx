import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  return <><Navbar/><main className="grid min-h-[70vh] place-items-center bg-[#f8f6fc] px-5 py-20"><div className="max-w-2xl text-center"><p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#7657b7]">Start a conversation</p><h1 className="mt-6 font-serif text-6xl leading-[.95] tracking-[-0.05em] text-[#211e2c] md:text-8xl">Your next chapter<br/><span className="italic text-[#7454b3]">starts here.</span></h1><p className="mx-auto mt-7 max-w-lg text-sm leading-7 text-[#797184]">This contact destination is being prepared. Agency contact details and booking links have not yet been supplied, so no contact information is displayed here.</p><Link to="/case-studies" className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#4d2d79] px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.12em] text-white"><ArrowLeft size={14}/> Return to case studies</Link></div></main><Footer/></>
}
