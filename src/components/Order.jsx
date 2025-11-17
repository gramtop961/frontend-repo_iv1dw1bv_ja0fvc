import React, { useEffect, useRef, useState } from 'react'
import { Button, Card, Chip, Input, Textarea } from './DesignSystem'
import { CheckCircle2, Clock4, FileText, Truck } from 'lucide-react'

function useAutosizeTextArea(textAreaRef, value) {
  useEffect(() => {
    const el = textAreaRef.current
    if (!el) return
    el.style.height = '0px'
    const scrollHeight = el.scrollHeight
    el.style.height = Math.min(Math.max(scrollHeight, 120), 240) + 'px'
  }, [textAreaRef, value])
}

export default function Order({ open, onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '', brief: '' })
  const [submitted, setSubmitted] = useState(false)
  const ref = useRef(null)
  useAutosizeTextArea(ref, form.brief)

  useEffect(() => {
    function onKey(e){ if(e.key==='Escape' && open) onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  function handleSubmit(e){
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => onClose(), 1500)
  }

  if(!open) return null

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden />
      <div className="ml-auto h-full w-full sm:w-[520px] bg-[--page] border-l border-[--lines] shadow-xl p-6 sm:p-8 overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <Chip tone="300">Custom import</Chip>
            <h3 className="mt-2 text-2xl font-bold text-[--text-primary]">Order a Car from Europe</h3>
            <p className="text-sm text-[--text-secondary]">Timelines vary by country & car; we confirm after your brief.</p>
          </div>
          <button onClick={onClose} className="text-[--text-secondary] hover:text-[--text-primary]" aria-label="Close">✕</button>
        </div>

        <div className="grid gap-6">
          <Card className="p-5">
            <ol className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-sm text-[--text-secondary]">
              <li className="flex items-center gap-2"><FileText className="h-4 w-4 text-[--accent-700]"/> Brief</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[--accent-700]"/> Sourcing & checks</li>
              <li className="flex items-center gap-2"><Truck className="h-4 w-4 text-[--accent-700]"/> Transport & support</li>
              <li className="flex items-center gap-2"><Clock4 className="h-4 w-4 text-[--accent-700]"/> Delivery & docs</li>
            </ol>
          </Card>

          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input required placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
              <Input required placeholder="Phone" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} />
            </div>
            <Input type="email" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
            <div>
              <div className="flex flex-wrap gap-2 mb-2 text-xs text-[--text-secondary]">
                <Chip>Budget</Chip>
                <Chip>Timing</Chip>
                <Chip>Preferred brands</Chip>
              </div>
              <Textarea ref={ref} rows={3} placeholder="Tell us what you want (budget, timing, brands, spec)..." value={form.brief} onChange={e=>setForm({...form,brief:e.target.value})} />
            </div>
            <div className="flex items-center gap-4">
              <Button type="submit">Send Brief</Button>
              <div className="text-xs text-[--text-secondary]">
                <div>• Costs included • History checks • RAR assistance</div>
              </div>
            </div>
          </form>

          {submitted && (
            <Card className="p-5 bg-[--accent-100]">
              <p className="text-sm text-[--on-accent-light]">Thanks! We received your brief and will contact you shortly.</p>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
