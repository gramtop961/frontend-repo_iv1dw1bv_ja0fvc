import React from 'react'
import { Card, Chip, Button } from './DesignSystem'
import { Gauge, Fuel, Cog, Calendar, GaugeCircle, BadgeCheck } from 'lucide-react'

const MOCK = [
  {
    id: '1',
    title: 'BMW 740d xDrive M Sport',
    image: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=1600&auto=format&fit=crop',
    engine: '3.0L',
    gearbox: 'Automatic',
    year: 2019,
    mileage: '78,000 km',
    fuel: 'Diesel',
    hp: 320,
    price: '€39,900',
    monthly: 'from €585/mo',
  },
  {
    id: '2',
    title: 'Audi A6 45 TFSI Quattro',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1600&auto=format&fit=crop',
    engine: '2.0L',
    gearbox: 'Automatic',
    year: 2020,
    mileage: '62,000 km',
    fuel: 'Petrol',
    hp: 245,
    price: '€29,700',
    monthly: 'from €439/mo',
  },
  {
    id: '3',
    title: 'Mercedes E220d Avantgarde',
    image: 'https://images.unsplash.com/photo-1453491945771-a1e904948959?q=80&w=1600&auto=format&fit=crop',
    engine: '2.0L',
    gearbox: 'Automatic',
    year: 2018,
    mileage: '98,000 km',
    fuel: 'Diesel',
    hp: 194,
    price: '€22,900',
    monthly: 'from €349/mo',
  },
]

export default function Inventory({ onOrderClick, items = MOCK }) {
  const hasItems = items && items.length > 0
  return (
    <section id="inventory" className="mx-auto max-w-[1200px] px-6 sm:px-8 py-16">
      <div className="flex items-center justify-between mb-6">
        <Chip tone="300">Available now</Chip>
        <a href="#inventory" className="text-sm text-[--accent-900] hover:underline">View all</a>
      </div>
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[--text-primary]">Inventory</h2>
      </div>

      {hasItems ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.slice(0, 3).map((car) => (
            <Card key={car.id} className="overflow-hidden">
              <img src={car.image} alt={car.title} className="h-48 w-full object-cover" />
              <div className="p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-[--text-primary]">{car.title}</h3>
                  <div className="flex gap-2">
                    <Chip className="">Inspected</Chip>
                    <Chip className="">Warranty</Chip>
                  </div>
                </div>
                <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-[--text-secondary]">
                  <div className="flex items-center gap-2"><Gauge className="h-4 w-4" /> <dt className="sr-only">Engine</dt><dd>{car.engine}</dd></div>
                  <div className="flex items-center gap-2"><Cog className="h-4 w-4" /> <dt className="sr-only">Gearbox</dt><dd>{car.gearbox}</dd></div>
                  <div className="flex items-center gap-2"><Calendar className="h-4 w-4" /> <dt className="sr-only">Year</dt><dd>{car.year}</dd></div>
                  <div className="flex items-center gap-2"><GaugeCircle className="h-4 w-4" /> <dt className="sr-only">Mileage</dt><dd>{car.mileage}</dd></div>
                  <div className="flex items-center gap-2"><Fuel className="h-4 w-4" /> <dt className="sr-only">Fuel</dt><dd>{car.fuel}</dd></div>
                  <div className="flex items-center gap-2"><BadgeCheck className="h-4 w-4" /> <dt className="sr-only">HP</dt><dd>{car.hp} HP</dd></div>
                </dl>
                <div className="flex items-center justify-between pt-2">
                  <div>
                    <div className="text-xl font-semibold text-[--text-primary]">{car.price}</div>
                    <div className="text-xs text-[--text-secondary]">{car.monthly}</div>
                  </div>
                  <Button variant="secondary">View Details</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="p-8 text-center">
          <p className="text-[--text-secondary]">No cars today? Tell us what you want.</p>
          <div className="mt-4">
            <Button onClick={onOrderClick}>Order a Car</Button>
          </div>
        </Card>
      )}
    </section>
  )
}
