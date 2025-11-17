import React, { useState } from 'react'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Inventory from './components/Inventory'
import Bento from './components/Bento'
import AboutFaqContact from './components/AboutFaqContact'
import StickyDock from './components/StickyDock'

function App() {
  const [orderOpen, setOrderOpen] = useState(false)

  // Lazy import of Order slide-over to keep bundle light
  const Order = React.useMemo(() => React.lazy(() => import('./components/Order')), [])

  return (
    <div className="min-h-screen bg-[--page]">
      <Header onOrderClick={() => setOrderOpen(true)} />
      <main>
        <Hero onOrderClick={() => setOrderOpen(true)} />
        <TrustBar />
        <Inventory onOrderClick={() => setOrderOpen(true)} />
        <Bento />
        <AboutFaqContact onOrderClick={() => setOrderOpen(true)} />
      </main>
      <StickyDock onOrderClick={() => setOrderOpen(true)} />

      <React.Suspense fallback={null}>
        <Order open={orderOpen} onClose={() => setOrderOpen(false)} />
      </React.Suspense>
    </div>
  )
}

function Header({ onOrderClick }) {
  const nav = ['Inventory', 'Order a Car', 'Finance/Trade-in', 'Warranty', 'About', 'FAQs', 'Contact']
  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-[--lines]">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-[--text-primary] font-bold tracking-wide">
          <span className="text-xl">LZR</span>
          <span className="hidden sm:inline">AUTOMOTION</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((item) => (
            <a key={item} href={`#${item.split(' ')[0].toLowerCase()}`} className="text-[--text-secondary] hover:text-[--accent-900] hover:underline">
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={onOrderClick} className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[--accent-500] bg-[--accent-900] text-[--on-accent-dark] hover:bg-[--accent-800] active:bg-[--accent-950]">
            Order a Car
          </button>
        </div>
      </div>
    </header>
  )
}

export default App
