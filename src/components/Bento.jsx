import React, { useMemo, useState } from 'react'
import { Card, Button, Chip, Input } from './DesignSystem'
import { Calculator, Percent, Landmark, CarFront, ShieldCheck, FileCheck2 } from 'lucide-react'

export default function Bento() {
  // Simple finance estimate state
  const [price, setPrice] = useState(30000)
  const [down, setDown] = useState(6000)
  const [apr, setApr] = useState(8.5)
  const months = 60

  const monthly = useMemo(() => {
    const principal = Math.max(price - down, 0)
    const r = apr / 100 / 12
    if (r === 0) return principal / months
    const m = (principal * r) / (1 - Math.pow(1 + r, -months))
    return isFinite(m) ? m : 0
  }, [price, down, apr])

  return (
    <section className="mx-auto max-w-[1200px] px-6 sm:px-8 py-16">
      <div className="mb-8">
        <Chip tone="300">Finance, Trade-in & Warranty</Chip>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[--text-primary]">Make the deal work for you</h2>
        <p className="text-[--text-secondary] max-w-prose">Flexible options to fit your budget and timeline.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <Calculator className="h-5 w-5 text-[--accent-700]" />
            <h3 className="font-semibold text-[--text-primary]">Finance estimate</h3>
          </div>
          <div className="grid grid-cols-1 gap-3">
            <label className="text-sm text-[--text-secondary]">Price (€)
              <Input type="number" value={price} onChange={e=>setPrice(Number(e.target.value))} />
            </label>
            <label className="text-sm text-[--text-secondary]">Down payment (€)
              <Input type="number" value={down} onChange={e=>setDown(Number(e.target.value))} />
            </label>
            <label className="text-sm text-[--text-secondary]">APR (%)
              <Input type="number" step="0.1" value={apr} onChange={e=>setApr(Number(e.target.value))} />
            </label>
          </div>
          <div className="mt-4 p-4 rounded-2xl bg-[--section] border border-[--lines]">
            <div className="text-sm text-[--text-secondary]">Estimated monthly</div>
            <div className="text-2xl font-semibold text-[--text-primary]">€{monthly.toFixed(0)}/mo</div>
            <div className="text-xs text-[--text-secondary] mt-1">Estimate only; subject to credit approval.</div>
          </div>
          <div className="mt-4 flex gap-2 opacity-80">
            <img src="https://dummyimage.com/80x28/eee/aaa&text=BT" alt="Partner BT" className="h-7 w-auto" />
            <img src="https://dummyimage.com/80x28/eee/aaa&text=BRD" alt="Partner BRD" className="h-7 w-auto" />
            <img src="https://dummyimage.com/80x28/eee/aaa&text=ING" alt="Partner ING" className="h-7 w-auto" />
          </div>
        </Card>

        <Card className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <CarFront className="h-5 w-5 text-[--accent-700]" />
            <h3 className="font-semibold text-[--text-primary]">Trade-in</h3>
          </div>
          <ul className="list-disc pl-5 text-sm text-[--text-secondary] space-y-2">
            <li>High-quality photos of your car</li>
            <li>Registration documents (talon, carte)</li>
            <li>Service history if available</li>
          </ul>
          <Button className="mt-4">Value My Car</Button>
        </Card>

        <Card className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="h-5 w-5 text-[--accent-700]" />
            <h3 className="font-semibold text-[--text-primary]">Warranty</h3>
          </div>
          <ul className="list-disc pl-5 text-sm text-[--text-secondary] space-y-2">
            <li>12-month legal conformity warranty</li>
            <li>Coverage for defects; normal wear excluded</li>
            <li>Easy claims, transparent process</li>
          </ul>
          <Button variant="secondary" className="mt-4">Warranty Details</Button>
        </Card>
      </div>
    </section>
  )
}
