import React from 'react'
import { MessageCircle, Phone, FilePlus2 } from 'lucide-react'
import { Button } from './DesignSystem'

export default function StickyDock({ onOrderClick }) {
  return (
    <>
      <div className="fixed bottom-4 right-4 hidden sm:flex flex-col gap-2 z-40">
        <Button className="shadow-sm" aria-label="WhatsApp"><MessageCircle className="h-4 w-4" /> WhatsApp</Button>
        <Button variant="secondary" className="shadow-sm" aria-label="Call"><Phone className="h-4 w-4" /> Call</Button>
        <Button className="shadow-sm" onClick={onOrderClick} aria-label="Order"><FilePlus2 className="h-4 w-4" /> Order</Button>
      </div>

      <div className="fixed bottom-0 inset-x-0 sm:hidden z-40 bg-[--card] border-t border-[--lines] p-2">
        <div className="grid grid-cols-3 gap-2">
          <Button className="w-full" aria-label="WhatsApp"><MessageCircle className="h-4 w-4" /> Chat</Button>
          <Button variant="secondary" className="w-full" aria-label="Call"><Phone className="h-4 w-4" /> Call</Button>
          <Button className="w-full" onClick={onOrderClick} aria-label="Order"><FilePlus2 className="h-4 w-4" /> Order</Button>
        </div>
      </div>
    </>
  )
}
