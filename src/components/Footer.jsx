import { ArrowUpRight, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return <footer className="overflow-hidden bg-[#171321] text-[#f5f1fb]">
    <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:px-10 md:py-20 xl:px-16">
      <div><div className="font-serif text-4xl tracking-[-0.05em]">Incredible<span className="text-[#a88be3]">.</span></div><p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#b7a9ca]">Building Visibility, Keeping Credibility</p><p className="mt-8 max-w-sm text-sm leading-7 text-[#bcb4c8]">We turn professional expertise into a recognisable personal brand through positioning, strategic storytelling and consistent execution.</p></div>
      <div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a88be3]">Explore</p><div className="mt-5 flex flex-col gap-3 text-sm text-[#d8d1e1]"><Link to="/case-studies" className="hover:text-white">Case Studies</Link><Link to="/contact" className="hover:text-white">Services</Link><Link to="/contact" className="hover:text-white">About</Link></div></div>
      <div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a88be3]">Start a conversation</p><Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-lg font-semibold hover:text-[#c7b9e8]">Let’s talk <ArrowUpRight size={17}/></Link><p className="mt-3 text-xs text-[#8f879d]">Contact destination and social profile links to be confirmed.</p><span className="mt-6 inline-flex items-center gap-2 text-xs text-[#c8bfd4]"><Linkedin size={15}/> LinkedIn · link to be added</span></div>
    </div>
    <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-3 border-t border-white/10 px-5 py-5 text-[10px] text-[#82798f] sm:flex-row md:px-10 xl:px-16"><span>© {new Date().getFullYear()} Incredible Corporate Communications.</span><span>Building Visibility, Keeping Credibility.</span></div>
  </footer>
}
