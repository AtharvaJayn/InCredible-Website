import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function NotFound() {
  return <><Navbar/><main className="grid min-h-[65vh] place-items-center bg-[#f8f6fc] px-5 text-center"><div><p className="font-serif text-8xl text-[#7454b3]">404</p><h1 className="mt-4 font-serif text-4xl text-[#211e2c]">This page isn’t part of the story.</h1><Link to="/case-studies" className="mt-7 inline-block rounded-full bg-[#4d2d79] px-6 py-3 text-xs font-bold text-white">Explore case studies</Link></div></main><Footer/></>
}
