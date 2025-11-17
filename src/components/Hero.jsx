import React from 'react'
import { Button, Chip } from './DesignSystem'
import { ArrowRight, Car, Sparkles } from 'lucide-react'
import Spline from '@splinetool/react-spline'

export default function Hero({ onOrderClick }) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6 sm:px-8 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <svg className="h-8 w-auto text-[--accent-900]" viewBox="0 0 200 40" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M10 30 L30 10 L10 10 L30 30 M60 10 L40 30 L80 30 M100 30 L120 10 L140 30 L160 10" />
            </svg>
            <Chip>EU-sourced</Chip>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[--text-primary]">
            Used cars, real emotions.
          </h1>
          <p className="text-lg text-[--text-secondary] max-w-prose">EU-sourced, inspected with warranty.</p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button onClick={onOrderClick}>Order a Car</Button>
            <Button variant="secondary" as="a" href="#inventory">View Available Cars</Button>
          </div>
        </div>
        <div className="lg:col-span-6 relative min-h-[360px] lg:min-h-[520px]">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 flex items-end justify-center">
              <span className="text-[18vw] lg:text-[12rem] font-black tracking-[0.2em] text-black/10 select-none leading-none">AUTOMOTION</span>
            </div>
          </div>
          <div className="relative h-full w-full rounded-2xl"></div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.06),transparent_35%),linear-gradient(to_bottom,rgba(255,237,213,0.5),transparent_30%)]" />
    </section>
  )
}
