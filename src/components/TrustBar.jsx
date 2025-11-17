import React from 'react'
import { ShieldCheck, FileText, Handshake } from 'lucide-react'

const items = [
  { icon: ShieldCheck, text: '12-month legal warranty (min.)' },
  { icon: FileText, text: 'Verified history & inspection report' },
  { icon: Handshake, text: 'Finance & trade-in' },
]

export default function TrustBar() {
  return (
    <div className="bg-[--section] border-t border-b border-[--lines]">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 py-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {items.map(({ icon: Icon, text }, i) => (
          <div key={i} className="flex items-center gap-3 text-sm text-[--text-secondary]">
            <span className="relative inline-flex h-5 w-5 items-center justify-center">
              <Icon className="h-4 w-4 text-gray-700" aria-hidden />
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-[--accent-600]" />
            </span>
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
