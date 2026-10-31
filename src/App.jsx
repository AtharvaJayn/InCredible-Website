import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import CaseStudies from './pages/CaseStudies'
import KamalMattaCaseStudy from './pages/KamalMattaCaseStudy'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import ScrollToTop from "./components/ScrollToTop";

function AnimatedRoutes() {
  const location = useLocation()
  return <AnimatePresence mode="wait"><motion.div key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .22 }}><Routes location={location}><Route path="/" element={<Navigate to="/case-studies" replace/>}/><Route path="/case-studies" element={<CaseStudies/>}/><Route path="/case-studies/kamal-matta" element={<KamalMattaCaseStudy/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Routes></motion.div></AnimatePresence>
}

export default function App() {
  return <BrowserRouter>
            <ScrollToTop/>
            <AnimatedRoutes/>
          </BrowserRouter>
}
