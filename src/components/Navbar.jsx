import { Link, NavLink } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [{ label: 'Case Studies', to: '/case-studies' }, { label: 'Services', to: '/contact' }, { label: 'About', to: '/contact' }]
  return (
    <header className="sticky top-0 z-50 border-b border-[#e7e1f0]/80 bg-[#f8f6fc]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 md:px-10 xl:px-16">
        <Link to="/case-studies" className="group flex items-center gap-3" aria-label="Incredible Corporate Communications home">
          <span className="font-serif text-[27px] leading-none tracking-[-0.06em] text-[#211e2c]">Incredible<span className="text-[#7760c8]">.</span></span>
          <span className="hidden border-l border-[#c9bfdc] pl-3 text-[9px] font-bold uppercase leading-[1.25] tracking-[0.14em] text-[#51475f] sm:block">Corporate<br/>Communications</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => <NavLink key={link.label} to={link.to} className={({ isActive }) => `text-[11px] font-semibold transition-colors ${isActive && link.label === 'Case Studies' ? 'text-[#6847b5]' : 'text-[#4d4658] hover:text-[#6847b5]'}`}>{link.label}</NavLink>)}
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#4d2d79] px-5 py-3 text-[11px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#65429a]">Let’s Talk <ArrowUpRight size={14}/></Link>
        </nav>
        <button className="rounded-full border border-[#ded6eb] p-2 text-[#30263e] md:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X size={19}/> : <Menu size={19}/>}</button>
      </div>
      {open && <nav className="border-t border-[#e7e1f0] bg-[#f8f6fc] px-5 py-5 md:hidden">{links.map((link) => <Link onClick={() => setOpen(false)} key={link.label} to={link.to} className="block border-b border-[#e9e3f0] py-3 text-sm font-semibold text-[#30263e]">{link.label}</Link>)}<Link to="/contact" onClick={() => setOpen(false)} className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#4d2d79] px-5 py-3 text-sm font-bold text-white">Let’s Talk <ArrowUpRight size={15}/></Link></nav>}
    </header>
  )
}
