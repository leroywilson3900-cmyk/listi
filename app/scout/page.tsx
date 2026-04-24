'use client'

import { Nav } from '../components/Nav'
import Link from 'next/link'
import { useState } from 'react'

export default function ScoutPage() {
  const [scanning, setScanning] = useState(false)
  const [scanned, setScanned] = useState(false)

  const mockResults = [
    { platform: 'eBay', soldPrice: 42, listings: 18, condition: 'Good' },
    { platform: 'Poshmark', soldPrice: 38, listings: 7, condition: 'Good' },
    { platform: 'Mercari', soldPrice: 35, listings: 12, condition: 'Good' },
  ]

  const handleScan = () => {
    setScanning(true)
    setTimeout(() => { setScanning(false); setScanned(true) }, 2000)
  }

  return (
    <div className="min-h-screen bg-[#0a0f1c]">
      <Nav />

      <main className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/dashboard" className="text-xs text-dark-500 hover:text-white mb-3 inline-block">← Back to Dashboard</Link>
          <h1 className="text-2xl font-bold text-white">🕵️ Scout Mode</h1>
          <p className="text-sm text-dark-500 mt-1">Take a photo in any store. See sold prices instantly.</p>
        </div>

        {/* Scanner Area */}
        <div className="card mb-6">
          <div
            onClick={handleScan}
            className={`border-2 border-dashed rounded-xl aspect-square flex flex-col items-center justify-center gap-4 cursor-pointer transition-all ${scanning ? 'border-brand-500 bg-brand-500/5' : 'border-white/10 hover:border-brand-500/50 hover:bg-dark-100/60'}`}
          >
            {scanning ? (
              <>
                <div className="text-4xl animate-spin">🔄</div>
                <p className="text-sm font-semibold text-brand-400">Scanning...</p>
              </>
            ) : scanned ? (
              <>
                <div className="text-4xl">✅</div>
                <p className="text-sm font-semibold text-emerald-400">Scan complete!</p>
              </>
            ) : (
              <>
                <div className="text-4xl">📷</div>
                <p className="text-sm text-dark-500">Tap to scan a photo</p>
                <p className="text-xs text-dark-500">or drag an image</p>
              </>
            )}
          </div>
        </div>

        {/* Results */}
        {scanned && (
          <div className="card">
            <h2 className="text-base font-bold text-white mb-4">Recent Sales (Sold — not retail)</h2>
            <div className="flex flex-col gap-3">
              {mockResults.map((r) => (
                <div key={r.platform} className="flex items-center justify-between bg-dark-100/60 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{r.platform === 'eBay' ? '🏪' : r.platform === 'Poshmark' ? '👗' : '📦'}</span>
                    <div>
                      <div className="font-semibold text-white">{r.platform}</div>
                      <div className="text-xs text-dark-500">{r.listings} sold · Condition: {r.condition}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-emerald-400">${r.soldPrice}</div>
                    <div className="text-xs text-dark-500">sold price</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-brand-500/10 border border-brand-500/20 rounded-lg">
              <p className="text-sm text-brand-400 font-semibold mb-1">💡 Key insight</p>
              <p className="text-sm text-dark-500">List this item between <span className="text-white font-semibold">$35–$42</span> to match market. Our AI will auto-price it for the best sell-through rate.</p>
            </div>
          </div>
        )}

        {!scanned && (
          <div className="text-center">
            <p className="text-sm text-dark-500">Your scan results will appear here with sold price data from eBay, Poshmark, and Mercari.</p>
          </div>
        )}
      </main>
    </div>
  )
}
