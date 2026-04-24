import { Nav } from '../../components/Nav'
import Link from 'next/link'

const connectedPlatforms = [
  { name: 'eBay', emoji: '🏪', status: 'connected', lastSync: '2 min ago', listings: 12, color: 'border-blue-500/30 bg-blue-500/5' },
  { name: 'Poshmark', emoji: '👗', status: 'connected', lastSync: '5 min ago', listings: 8, color: 'border-pink-500/30 bg-pink-500/5' },
  { name: 'Mercari', emoji: '📦', status: 'connected', lastSync: '1 hour ago', listings: 6, color: 'border-orange-500/30 bg-orange-500/5' },
]

const availablePlatforms = [
  { name: 'Depop', emoji: '👕', reason: 'Coming soon — join waitlist' },
  { name: 'Facebook Marketplace', emoji: '📘', reason: 'Coming soon — join waitlist' },
]

export default function PlatformsPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1c]">
      <Nav />

      <main className="max-w-3xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/settings" className="text-xs text-dark-500 hover:text-white mb-3 inline-block">← Settings</Link>
          <h1 className="text-2xl font-bold text-white">Platform Connections</h1>
          <p className="text-sm text-dark-500 mt-1">Manage your marketplace integrations</p>
        </div>

        {/* Connected */}
        <div className="mb-8">
          <h2 className="text-sm font-bold text-dark-500 uppercase tracking-wider mb-3">Connected</h2>
          <div className="flex flex-col gap-3">
            {connectedPlatforms.map((platform) => (
              <div key={platform.name} className={`card border ${platform.color}`}>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{platform.emoji}</span>
                    <div>
                      <div className="font-semibold text-white">{platform.name}</div>
                      <div className="text-xs text-dark-500">{platform.listings} listings · Synced {platform.lastSync}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="btn-secondary text-xs py-2">Sync now</button>
                    <button className="text-xs text-dark-500 hover:text-red-400 transition-colors">Disconnect</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Available */}
        <div>
          <h2 className="text-sm font-bold text-dark-500 uppercase tracking-wider mb-3">Available</h2>
          <div className="flex flex-col gap-3">
            {availablePlatforms.map((platform) => (
              <div key={platform.name} className="card border border-white/5 opacity-60">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{platform.emoji}</span>
                    <div>
                      <div className="font-semibold text-white">{platform.name}</div>
                      <div className="text-xs text-dark-500">{platform.reason}</div>
                    </div>
                  </div>
                  <button disabled className="btn-secondary text-xs py-2 opacity-50 cursor-not-allowed">Connect</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
