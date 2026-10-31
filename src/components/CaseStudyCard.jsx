import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CaseStudyCard({ item, index }) {
  return <article className="group flex min-h-[245px] flex-col justify-between rounded-2xl border border-[#e7e1ef] bg-white/70 p-6 transition duration-500 hover:-translate-y-1 hover:border-[#c9b9e8] hover:bg-white hover:shadow-[0_18px_50px_rgba(61,43,92,0.08)] md:p-7">
    <div><div className="flex items-center justify-between"><span className="text-[9px] font-extrabold tracking-[0.2em] text-[#8b73bb]">{item.eyebrow}</span><span className="font-serif text-2xl text-[#d1c4e8]">0{index + 1}</span></div><h3 className="mt-9 font-serif text-3xl leading-tight tracking-[-0.03em] text-[#282231]">{item.title}</h3><p className="mt-3 max-w-xs text-xs leading-6 text-[#827b8c]">{item.description}</p></div>
    <div className="mt-8 flex items-center justify-between border-t border-[#eee9f4] pt-4"><span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#968da1]">Client story forthcoming</span><span className="grid h-9 w-9 place-items-center rounded-full bg-[#eee8f8] text-[#6b4da7] transition group-hover:bg-[#4d2d79] group-hover:text-white"><ArrowUpRight size={16}/></span></div>
  </article>
}
