import { Nav } from '../components/Nav'
import Link from 'next/link'

export default function ImportPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1c]">
      <Nav />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/dashboard" className="text-xs text-dark-500 hover:text-white mb-3 inline-block">← Back to Dashboard</Link>
          <h1 className="text-2xl font-bold text-white">📥 Import Listings</h1>
          <p className="text-sm text-dark-500 mt-1">Migrate listings from eBay, Poshmark, or Mercari</p>
        </div>

        {/* Import Options */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { platform: 'eBay', emoji: '🏪', count: 24 },
            { platform: 'Poshmark', emoji: '👗', count: 18 },
            { platform: 'Mercari', emoji: '📦', count: 12 },
          ].map((source) => (
            <button key={source.platform} className="card border border-white/5 hover:border-brand-500/30 transition-all text-left">
              <div className="text-2xl mb-2">{source.emoji}</div>
              <div className="font-semibold text-white mb-1">{source.platform}</div>
              <div className="text-xs text-dark-500">{source.count} listings found</div>
              <div className="mt-3 btn-primary text-xs justify-center py-2">Import →</div>
            </button>
          ))}
        </div>

        {/* Manual Import */}
        <div className="card">
          <h2 className="text-base font-bold text-white mb-4">Manual Import</h2>
          <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center">
            <div className="text-3xl mb-3">📁</div>
            <p className="text-sm text-white font-semibold mb-1">Drop a CSV or JSON file</p>
            <p className="text-xs text-dark-500 mb-4">Import listings in bulk from a spreadsheet export</p>
            <button className="btn-secondary text-sm">Choose file</button>
          </div>
        </div>
      </main>
    </div>
  )
}
