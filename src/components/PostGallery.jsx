import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'

export default function PostGallery({ posts }) {
  const [active, setActive] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const post = posts[active]
  const next = () => setActive((active + 1) % posts.length)
  const prev = () => setActive((active - 1 + posts.length) % posts.length)
  return <div>
    <div className="grid gap-5 lg:grid-cols-[1.08fr_.92fr]">
      <button onClick={() => post.image && setExpanded(true)} className="group relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-2xl bg-[#ebe5f4] p-4 text-left md:min-h-[470px]" aria-label="Expand supplied LinkedIn post screenshot">
        {post.image ? <img src={post.image} alt="Supplied LinkedIn post screenshot about salary structures and a letter to a daughter" className="max-h-[440px] w-auto max-w-full rounded-md object-contain shadow-xl transition duration-500 group-hover:scale-[1.015]"/> : <div className="flex h-full min-h-[300px] w-full flex-col justify-between rounded-xl border border-[#d8cde8] bg-gradient-to-br from-[#f8f5fc] to-[#ddd2ee] p-8"><span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#7657b7]">Content example · original screenshot not supplied separately</span><span className="font-serif text-4xl leading-tight text-[#30263e]">{post.title}</span><span className="text-xs text-[#71657f]">{post.subtitle}</span></div>}
        {post.image && <span className="absolute bottom-4 right-4 rounded-full bg-[#211e2c]/80 px-3 py-2 text-[10px] font-bold text-white opacity-0 transition group-hover:opacity-100">Expand screenshot ↗</span>}
      </button>
      <div className="flex flex-col justify-between rounded-2xl border border-[#e7e1ef] bg-white/70 p-7 md:p-9">
        <div><p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#8064b6]">Featured content · 0{active + 1}</p><h3 className="mt-5 font-serif text-4xl leading-[1.04] tracking-[-0.04em] text-[#211e2c]">{post.title}</h3><p className="mt-3 text-sm text-[#776f81]">{post.subtitle}</p><p className="mt-7 text-xs leading-6 text-[#7d7588]">{post.note}</p></div>
        <div className="mt-10 grid grid-cols-2 gap-3"><div className="rounded-xl bg-[#f3eff9] p-4"><p className="font-serif text-3xl text-[#4d2d79]">{post.metricA}</p><p className="mt-2 text-[10px] leading-4 text-[#7b7188]">{post.labelA}</p></div><div className="rounded-xl bg-[#f3eff9] p-4"><p className="font-serif text-3xl text-[#4d2d79]">{post.metricB}</p><p className="mt-2 text-[10px] leading-4 text-[#7b7188]">{post.labelB}</p></div></div>
      </div>
    </div>
    <div className="mt-5 flex items-center justify-between gap-4"><div className="flex gap-2">{posts.map((item, i) => <button key={item.title} onClick={() => setActive(i)} aria-label={`Show ${item.title}`} className={`h-1.5 rounded-full transition-all ${active === i ? 'w-10 bg-[#65449b]' : 'w-5 bg-[#d8cfe5]'}`}/>)}</div><div className="flex gap-2"><button onClick={prev} className="grid h-10 w-10 place-items-center rounded-full border border-[#ddd4e9] text-[#4d2d79] transition hover:bg-[#eee8f8]" aria-label="Previous post"><ArrowLeft size={16}/></button><button onClick={next} className="grid h-10 w-10 place-items-center rounded-full bg-[#4d2d79] text-white transition hover:bg-[#67479c]" aria-label="Next post"><ArrowRight size={16}/></button></div></div>
    <AnimatePresence>{expanded && post.image && <motion.div className="fixed inset-0 z-[70] flex items-center justify-center bg-[#171321]/90 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setExpanded(false)}><button onClick={() => setExpanded(false)} className="absolute right-5 top-5 rounded-full bg-white p-3 text-[#211e2c]" aria-label="Close expanded image"><X size={20}/></button><motion.img src={post.image} alt="Expanded LinkedIn post screenshot" className="max-h-[88vh] max-w-[94vw] object-contain" initial={{ scale: .96 }} animate={{ scale: 1 }} onClick={(e) => e.stopPropagation()}/></motion.div>}</AnimatePresence>
  </div>
}
