import React, { useState } from 'react'
import { Card, Chip, Button } from './DesignSystem'
import { HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react'

export default function AboutFaqContact({ onOrderClick }) {
  const [open, setOpen] = useState(0)
  const faqs = [
    { q: 'How does the import process work?', a: 'We start with your brief, source cars across the EU, perform checks, and handle transport and registration support.' },
    { q: 'What checks are performed?', a: 'We review service records, run history checks, verify mileage, and inspect the car before purchase.' },
    { q: 'Typical timeline?', a: 'Usually 10–21 days depending on country, paperwork, and transport slots.' },
    { q: 'Warranty coverage?', a: 'Minimum 12-month legal conformity warranty. Wear items are excluded.' },
    { q: 'Financing imported cars?', a: 'We partner with lenders; approvals subject to credit. We provide necessary documents.' },
    { q: 'How to start if not in stock?', a: 'Send your brief via the Order form — we will propose options quickly.' },
  ]

  return (
    <div>
      <section className="mx-auto max-w-[1200px] px-6 sm:px-8 py-16 grid lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[--text-primary]">About LZR AUTOMOTION</h2>
          <p className="mt-4 text-[--text-secondary] max-w-prose">30+ years of experience in the field. We source across the EU, apply strict verification standards, and promise fast response times.</p>
          <div className="mt-6 rounded-2xl overflow-hidden border border-[--lines]">
            <div className="h-48 bg-[--accent-100]" />
          </div>
        </div>
        <div>
          <Chip>FAQs</Chip>
          <h3 className="mt-3 text-2xl font-semibold text-[--text-primary]">Good to know</h3>
          <div className="mt-4 divide-y divide-[--lines] border border-[--lines] rounded-2xl">
            {faqs.map((f, i) => (
              <details key={i} open={open===i} onClick={(e)=>{ e.preventDefault(); setOpen(open===i?-1:i) }}>
                <summary className="list-none cursor-pointer p-4 flex items-center justify-between">
                  <span className="text-[--text-primary] font-medium">{f.q}</span>
                  <HelpCircle className="h-5 w-5 text-[--accent-700]" />
                </summary>
                {open===i && <div className="px-4 pb-4 text-[--text-secondary] text-sm">{f.a}</div>}
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[--section] border-y border-[--lines]">
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8 py-12 grid sm:grid-cols-3 gap-6">
          <Card className="p-5 text-center">
            <Phone className="h-6 w-6 mx-auto text-[--accent-700]" />
            <div className="mt-2 font-medium text-[--text-primary]">Phone</div>
            <div className="text-sm text-[--text-secondary]">Mon–Sat 09:00–19:00</div>
            <Button variant="secondary" className="mt-3">Call Now</Button>
          </Card>
          <Card className="p-5 text-center">
            <MessageCircle className="h-6 w-6 mx-auto text-[--accent-700]" />
            <div className="mt-2 font-medium text-[--text-primary]">WhatsApp</div>
            <div className="text-sm text-[--text-secondary]">Quick replies</div>
            <Button className="mt-3">WhatsApp</Button>
          </Card>
          <Card className="p-5 text-center">
            <Mail className="h-6 w-6 mx-auto text-[--accent-700]" />
            <div className="mt-2 font-medium text-[--text-primary]">Email</div>
            <div className="text-sm text-[--text-secondary]">Within 24 hours</div>
            <Button variant="secondary" className="mt-3">Send Email</Button>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 sm:px-8 py-16">
        <Card className="p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between bg-[--section]">
          <div>
            <h3 className="text-2xl font-semibold text-[--text-primary]">Tell us what you’re looking for.</h3>
            <p className="text-[--text-secondary]">We’ll source, check, and deliver with warranty.</p>
          </div>
          <Button className="mt-4 sm:mt-0" onClick={onOrderClick}>Send Your Brief</Button>
        </Card>
      </section>
    </div>
  )
}
