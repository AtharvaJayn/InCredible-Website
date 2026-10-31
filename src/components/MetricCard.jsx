import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'motion/react'

function Counter({ value, suffix = '' }) {
  const ref = useRef(null)
  const visible = useInView(ref, { once: true, amount: 0.6 })
  const reduce = useReducedMotion()
  const [count, setCount] = useState(0)
  const numeric = Number(String(value).replace(/,/g, ''))
  useEffect(() => {
    if (!visible) return
    if (reduce || !Number.isFinite(numeric)) { setCount(numeric); return }
    let frame
    const start = performance.now()
    const duration = 1200
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setCount(Math.round(numeric * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [visible, numeric, reduce])
  return <span ref={ref}>{Number.isFinite(numeric) ? count.toLocaleString('en-IN') : value}{suffix}</span>
}

export default function MetricCard({ value, label, note, accent = false, suffix = '' }) {
  return <div className={`group rounded-2xl border p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(63,43,99,0.10)] md:p-6 ${accent ? 'border-[#4c2e77] bg-[#34204f] text-white' : 'border-[#e6e0ef] bg-white/75 text-[#211e2c]'}`}>
    <p className={`font-serif text-4xl tracking-[-0.04em] md:text-5xl ${accent ? 'text-[#e4d8ff]' : 'text-[#4d2d79]'}`}><Counter value={value} suffix={suffix}/></p>
    <p className={`mt-3 text-xs font-bold uppercase tracking-[0.1em] ${accent ? 'text-white' : 'text-[#383044]'}`}>{label}</p>
    {note && <p className={`mt-2 text-xs leading-5 ${accent ? 'text-[#cfc2e3]' : 'text-[#81798d]'}`}>{note}</p>}
  </div>
}
