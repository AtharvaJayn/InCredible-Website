import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CaseStudyCard from '../components/CaseStudyCard'
import { caseStudies } from '../data/caseStudies'

export default function CaseStudies() {
  return <><Navbar/><main className="overflow-hidden bg-[#f8f6fc]">
    <section className="relative mx-auto max-w-[1440px] px-5 pb-16 pt-16 md:px-10 md:pb-24 md:pt-24 xl:px-16">
      <div className="pointer-events-none absolute -right-24 top-0 h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,rgba(199,185,232,0.48),transparent_68%)]"/><div className="pointer-events-none absolute left-[44%] top-24 h-72 w-72 rounded-full border border-[#e6def1]"/>
      <div className="relative grid items-end gap-10 lg:grid-cols-[1.35fr_.65fr]">

<div>
  <p className="mt-8 text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#7657b7]">
    The work · Case studies
  </p>

  <motion.h1
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="
      mt-5
      mb-45 
      max-w-4xl
      font-serif
      text-[clamp(3rem,6.5vw,6.5rem)]
      leading-[0.94]
      tracking-[-0.045em]
      text-[#211e2c]
      sm:text-[clamp(3.5rem,6.5vw,6.5rem)]
    "
  >
    Real professionals.
    <br />
    Measurable{" "}
    <span className="italic text-[#7454b3]">
      visibility.
    </span>
    <br />
    <span className="italic">
      Lasting credibility.
    </span>
  </motion.h1>
</div>
        <div className="max-w-sm border-l border-[#bba9d7] pl-6 pb-2 lg:mb-3"><p className="font-serif text-2xl leading-snug text-[#40364e]">Every expert has a story worth knowing.</p><p className="mt-4 text-sm leading-7 text-[#797184]">We turn professional experience, ideas and personality into a recognisable personal brand on LinkedIn.</p><a href="#featured" className="mt-7 inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#65449b]">Explore the work <ArrowDown size={14}/></a></div>
      </div>
      <div className="mt-16 flex items-center justify-between border-t border-[#e7e1ef] pt-5"><span className="text-[9px] font-extrabold uppercase tracking-[0.22em] text-[#8c8299]">Selected transformations</span><span className="text-[10px] text-[#8c8299]">01 — 05 / Stories</span></div>
    </section>

    <section id="featured" className="mx-auto max-w-[1440px] px-5 pb-24 md:px-10 xl:px-16">
      <Reveal><div className="group relative overflow-hidden rounded-[28px] bg-[#34204f] text-white shadow-[0_30px_80px_rgba(57,36,88,0.16)]"><div className="absolute -right-16 -top-28 h-[480px] w-[480px] rounded-full border border-white/10"/><div className="absolute right-10 top-10 h-[370px] w-[370px] rounded-full bg-[radial-gradient(circle,rgba(166,132,216,0.35),transparent_70%)]"/>
        <div className="relative grid min-h-[500px] items-center gap-8 p-7 md:p-12 lg:grid-cols-[.85fr_1.15fr] lg:p-16">
          <div className="relative order-2 flex items-end justify-center lg:order-1"><div className="absolute bottom-0 h-[320px] w-[320px] rounded-full bg-[#7459a0]/40 md:h-[390px] md:w-[390px]"/><img src="/assets/kamal/kamal-profile-crop.jpg" alt="Kamal Matta profile portrait, cropped from supplied LinkedIn screenshot" className="relative z-10 max-h-[360px] w-auto rounded-[45%_45%_18px_18px] object-cover object-center grayscale-[10%] transition duration-700 group-hover:scale-[1.035] md:max-h-[420px]"/><span className="absolute bottom-4 left-0 z-20 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.16em] backdrop-blur">Featured case study</span></div>
          <div className="relative order-1 lg:order-2"><p className="text-[9px] font-extrabold uppercase tracking-[0.24em] text-[#c7b5e9]">01 / Featured transformation</p><h2 className="mt-6 font-serif text-6xl leading-[.9] tracking-[-0.05em] md:text-7xl">Kamal<br/><span className="italic text-[#c7b5e9]">Matta.</span></h2><p className="mt-5 text-xs font-semibold text-[#e0d7ed]">CA · INSEAD Alumnus · Finance & Wealth Strategist</p><p className="mt-7 max-w-lg font-serif text-2xl leading-snug text-white/90">From conventional finance content to a distinctive personal brand that reached the right people.</p><div className="mt-9 grid grid-cols-3 gap-4 border-y border-white/15 py-6"><div><p className="font-serif text-3xl md:text-4xl">1.5M*</p><p className="mt-2 text-[9px] leading-4 text-[#c5b9d5]">Reported campaign views</p></div><div><p className="font-serif text-3xl md:text-4xl">96%</p><p className="mt-2 text-[9px] leading-4 text-[#c5b9d5]">Out-of-network impressions · 90 days</p></div><div><p className="font-serif text-3xl md:text-4xl">~1K</p><p className="mt-2 text-[9px] leading-4 text-[#c5b9d5]">Followers added in one month</p></div></div><p className="mt-3 text-[9px] text-[#aa9cbd]">*Campaign-level reported views; metric definition pending confirmation.</p><Link to="/case-studies/kamal-matta" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#f5f0fc] px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#382351] transition hover:-translate-y-1 hover:bg-white">Explore the full story <ArrowUpRight size={15}/></Link></div>
        </div></div></Reveal>
    </section>

    <section className="mx-auto max-w-[1440px] px-5 pb-24 md:px-10 xl:px-16"><Reveal><div className="flex flex-col justify-between gap-5 border-b border-[#e7e1ef] pb-8 md:flex-row md:items-end"><SectionHeading eyebrow="More stories" title={<>Every transformation<br/><span className="italic text-[#7454b3]">starts with a story.</span></>} text="A growing collection of professionals building visibility, authority and meaningful opportunities."/><p className="max-w-[190px] text-[10px] leading-5 text-[#948b9f]">New client transformations will be added here as stories are ready to share.</p></div></Reveal><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{caseStudies.map((item, i) => <Reveal key={item.title} delay={i * .06}><CaseStudyCard item={item} index={i}/></Reveal>)}</div></section>

    <section className="px-5 pb-20 md:px-10 xl:px-16"><Reveal><div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#4b2e72] via-[#382154] to-[#20172f] px-7 py-14 text-white md:px-14 md:py-20"><div className="absolute -right-24 -top-40 h-[540px] w-[540px] rounded-full border border-white/10"/><div className="absolute -bottom-40 right-20 h-[450px] w-[450px] rounded-full bg-[radial-gradient(circle,rgba(172,143,220,0.25),transparent_70%)]"/><div className="relative max-w-3xl"><Sparkles className="mb-7 text-[#c7b9e8]" size={22}/><p className="text-[9px] font-extrabold uppercase tracking-[0.23em] text-[#c7b9e8]">Your next chapter</p><h2 className="mt-5 font-serif text-5xl leading-[.98] tracking-[-0.04em] md:text-7xl">Your expertise<br/>deserves to be <span className="italic text-[#c7b9e8]">seen.</span></h2><p className="mt-6 max-w-xl text-sm leading-7 text-[#d5cce2]">Let’s turn your experience into a personal brand people recognise, trust and remember.</p><Link to="/contact" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#f4effa] px-6 py-4 text-[10px] font-extrabold uppercase tracking-[0.13em] text-[#34204f] transition hover:-translate-y-1 hover:bg-white">Let’s build your brand <ArrowUpRight size={15}/></Link></div></div></Reveal></section>
  </main><Footer/></>
}
