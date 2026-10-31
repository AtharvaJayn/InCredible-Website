export default function SectionHeading({ eyebrow, title, text, light = false }) {
  return <div className="max-w-3xl"><p className={`text-[10px] font-extrabold uppercase tracking-[0.23em] ${light ? 'text-[#bba4ef]' : 'text-[#7657b7]'}`}>{eyebrow}</p><h2 className={`mt-4 font-serif text-4xl leading-[1.02] tracking-[-0.04em] md:text-6xl ${light ? 'text-[#f8f4ff]' : 'text-[#211e2c]'}`}>{title}</h2>{text && <p className={`mt-5 max-w-2xl text-sm leading-7 md:text-base ${light ? 'text-[#c9c0d5]' : 'text-[#716b7b]'}`}>{text}</p>}</div>
}
