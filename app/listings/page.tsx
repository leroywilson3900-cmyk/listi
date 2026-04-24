'use client'

import { Nav } from '../components/Nav'
import Link from 'next/link'
import { useState } from 'react'

const mockListings = [
  { id: '1', title: 'Nike Air Max Hoodie', size: 'L', price: 48, status: 'active', platforms: ['ebay', 'poshmark'], views: 124, saves: 8, source: 'photo' },
  { id: '2', title: 'Lularoe Leggings', size: 'M', price: 28, status: 'active', platforms: ['mercari'], views: 67, saves: 3, source: 'photo' },
  { id: '3', title: 'Supreme Bogo Hoodie', size: 'L', price: 320, status: 'sold', platforms: ['ebay'], views: 445, saves: 42, source: 'manual' },
  { id: '4', title: 'Apple AirPods Pro', size: 'One Size', price: 145, status: 'active', platforms: ['ebay', 'mercari'], views: 203, saves: 19, source: 'manual' },
  { id: '5', title: 'Vintage Levis 501', size: '32x30', price: 75, status: 'draft', platforms: [], views: 0, saves: 0, source: 'import' },
  { id: '6', title: 'North Face Puffer', size: 'M', price: 110, status: 'active', platforms: ['poshmark'], views: 88, saves: 5, source: 'photo' },
]

export default function ListingsPage() {
  const [filter, setFilter] = useState<'all' | 'active' | 'sold' | 'draft'>('all')

  const filtered = filter === 'all' ? mockListings : mockListings.filter(l => l.status === filter)

  return (
    <div className="min-h-screen bg-[#0a0f1c]">
      <Nav />

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">Listings</h1>
            <p className="text-sm text-dark-500">{mockListings.filter(l => l.status === 'active').length} active · {mockListings.filter(l => l.status === 'sold').length} sold</p>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/import" className="btn-secondary text-sm">📥 Import</Link>
            <Link href="/listings/new" className="btn-primary text-sm">➕ New Listing</Link>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-1.5 mb-5 flex-wrap">
          {(['all', 'active', 'sold', 'draft'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${filter === f ? 'bg-brand-500 text-white' : 'bg-dark-200 text-dark-500 hover:text-white'}`}
            >
              {f} {f !== 'all' ? `(${mockListings.filter(l => l.status === f).length})` : ''}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left text-xs font-semibold text-dark-500 uppercase tracking-wider pb-3 pl-2">Item</th>
                  <th className="text-left text-xs font-semibold text-dark-500 uppercase tracking-wider pb-3">Platforms</th>
                  <th className="text-right text-xs font-semibold text-dark-500 uppercase tracking-wider pb-3">Price</th>
                  <th className="text-right text-xs font-semibold text-dark-500 uppercase tracking-wider pb-3">Views</th>
                  <th className="text-right text-xs font-semibold text-dark-500 uppercase tracking-wider pb-3">Saves</th>
                  <th className="text-right text-xs font-semibold text-dark-500 uppercase tracking-wider pb-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filtered.map((listing) => (
                  <tr key={listing.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 pl-2">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-dark-300 flex items-center justify-center text-sm shrink-0">👕</div>
                        <div>
                          <div className="font-semibold text-white">{listing.title}</div>
                          <div className="text-xs text-dark-500">Size {listing.size} · {listing.source}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3">
                      <div className="flex gap-1 flex-wrap">
                        {listing.platforms.length > 0 ? listing.platforms.map(p => (
                          <span key={p} className="platform-badge">{p[0].toUpperCase()}</span>
                        )) : <span className="text-xs text-dark-500">—</span>}
                      </div>
                    </td>
                    <td className="py-3 text-right font-semibold text-white">${listing.price}</td>
                    <td className="py-3 text-right text-dark-500">{listing.views}</td>
                    <td className="py-3 text-right text-dark-500">{listing.saves}</td>
                    <td className="py-3 text-right">
                      <span className={listing.status === 'active' ? 'status-active' : listing.status === 'sold' ? 'status-sold' : 'text-[10px] font-bold px-2 py-0.5 rounded-full bg-dark-300 text-dark-500'}>
                        {listing.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
