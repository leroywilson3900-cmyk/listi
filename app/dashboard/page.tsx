'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Listing {
  id: string
  title: string
  description: string
  price: number
  category: string
  condition: string
  status: string
  platforms: string[]
  images: string[]
  created_at: string
}

interface Stats {
  total_listings: number
  active: number
  sold: number
  draft: number
  total_value: number
  platforms_connected: number
}

export default function DashboardPage() {
  const [user, setUser] = useState<{ name: string } | null>(null)
  const [stats, setStats] = useState<Stats | null>(null)
  const [listings, setListings] = useState<Listing[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Load user from localStorage
    const userData = localStorage.getItem('listi_user')
    if (userData) setUser(JSON.parse(userData))

    // Fetch demo data
    Promise.all([
      fetch('/api/demo/stats').then(r => r.json()),
      fetch('/api/demo/listings').then(r => r.json())
    ]).then(([statsData, listingsData]) => {
      setStats(statsData)
      setListings(listingsData.listings || [])
      setLoading(false)
    }).catch(() => setLoading(false))
  }, [])

  const userName = user?.name?.split('@')[0] || 'there'

  return (
    <div className="min-h-screen bg-[#0a0f1c]">
      {/* Simple Nav */}
      <nav className="px-4 py-4 flex justify-between items-center max-w-6xl mx-auto border-b border-white/5">
        <Link href="/" className="text-xl font-extrabold text-white">LISTI</Link>
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="text-sm text-brand-400 font-medium">Dashboard</Link>
          <Link href="/settings" className="text-sm text-dark-500 hover:text-white">Settings</Link>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white mb-1">Welcome back, {userName} 👋</h1>
            <p className="text-sm text-dark-500">Here&apos;s what&apos;s happening with your listings</p>
          </div>
          <Link href="/listings/new" className="btn-primary shrink-0">
            <span>➕</span> Add New Listing
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 mb-8">
          {loading ? (
            Array(6).fill(0).map((_, i) => (
              <div key={i} className="stat-card animate-pulse">
                <div className="h-6 bg-dark-200 rounded mb-2" />
                <div className="h-4 bg-dark-200 rounded" />
              </div>
            ))
          ) : stats && (
            <>
              <div className="stat-card">
                <div className="text-xl mb-2">📦</div>
                <div className="text-xl font-bold text-white mb-0.5">{stats.total_listings}</div>
                <div className="text-xs text-dark-500">Total Listings</div>
              </div>
              <div className="stat-card">
                <div className="text-xl mb-2">✅</div>
                <div className="text-xl font-bold text-white mb-0.5">{stats.active}</div>
                <div className="text-xs text-dark-500">Active</div>
              </div>
              <div className="stat-card">
                <div className="text-xl mb-2">💰</div>
                <div className="text-xl font-bold text-white mb-0.5">${stats.total_value}</div>
                <div className="text-xs text-dark-500">Total Value</div>
              </div>
              <div className="stat-card">
                <div className="text-xl mb-2">❤️</div>
                <div className="text-xl font-bold text-white mb-0.5">{stats.sold}</div>
                <div className="text-xs text-dark-500">Sold</div>
              </div>
              <div className="stat-card">
                <div className="text-xl mb-2">📝</div>
                <div className="text-xl font-bold text-white mb-0.5">{stats.draft}</div>
                <div className="text-xs text-dark-500">Draft</div>
              </div>
              <div className="stat-card">
                <div className="text-xl mb-2">🌐</div>
                <div className="text-xl font-bold text-white mb-0.5">{stats.platforms_connected}</div>
                <div className="text-xs text-dark-500">Platforms</div>
              </div>
            </>
          )}
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Recent Listings */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-white">Recent Listings</h2>
              <Link href="/listings" className="text-xs text-brand-500 font-semibold hover:text-brand-400 transition-colors">View all →</Link>
            </div>
            <div className="flex flex-col gap-2.5">
              {loading ? (
                Array(3).fill(0).map((_, i) => (
                  <div key={i} className="bg-dark-100/60 rounded-lg p-3.5 animate-pulse">
                    <div className="h-4 bg-dark-200 rounded w-3/4 mb-2" />
                    <div className="h-3 bg-dark-200 rounded w-1/2" />
                  </div>
                ))
              ) : listings.length === 0 ? (
                <div className="text-center py-8 text-dark-500">No listings yet</div>
              ) : (
                listings.slice(0, 5).map((listing) => (
                  <div key={listing.id} className="bg-dark-100/60 rounded-lg p-3.5 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-dark-200 flex items-center justify-center text-lg shrink-0">
                      {listing.category === 'Shoes' ? '👟' : listing.category === 'Clothing' ? '👕' : listing.category === 'Electronics' ? '📱' : '👜'}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-white truncate">{listing.title}</div>
                      <div className="text-xs text-dark-500">${listing.price} · {listing.condition.replace('_', ' ')}</div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <div className="flex gap-1">
                        {listing.platforms.map((p) => (
                          <span key={p} className="platform-badge">{p[0].toUpperCase()}</span>
                        ))}
                      </div>
                      <span className={listing.status === 'listed' ? 'status-active' : listing.status === 'sold' ? 'status-sold' : 'status-draft'}>
                        {listing.status}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Platform Status */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-white">Connected Platforms</h2>
              <Link href="/settings/platforms" className="text-xs text-brand-500 font-semibold hover:text-brand-400 transition-colors">Manage →</Link>
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="bg-dark-100/60 rounded-lg p-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xl">🏪</span>
                  <span className="text-sm font-semibold text-white">eBay</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-dark-500">2 listings</span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-xs text-emerald-400 font-medium">Connected</span>
                  </div>
                </div>
              </div>
              <div className="bg-dark-100/60 rounded-lg p-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xl">👗</span>
                  <span className="text-sm font-semibold text-white">Poshmark</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-dark-500">2 listings</span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-xs text-emerald-400 font-medium">Connected</span>
                  </div>
                </div>
              </div>
              <div className="bg-dark-100/60 rounded-lg p-3.5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xl">📦</span>
                  <span className="text-sm font-semibold text-white">Mercari</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-dark-500">Not connected</span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-dark-300" />
                    <span className="text-xs text-dark-500 font-medium">Connect →</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-4 pt-4 border-t border-white/5">
              <h3 className="text-xs font-semibold text-dark-500 uppercase tracking-wider mb-3">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-2">
                <Link href="/listings/new" className="btn-secondary text-xs justify-center py-2.5">📷 New from photo</Link>
                <Link href="/import" className="btn-secondary text-xs justify-center py-2.5">📥 Import listings</Link>
                <Link href="/scout" className="btn-secondary text-xs justify-center py-2.5">🔍 Scout mode</Link>
                <Link href="/settings" className="btn-secondary text-xs justify-center py-2.5">⚙️ Settings</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scout Mode CTA */}
        <div className="mt-5 card bg-gradient-to-r from-brand-500/10 to-emerald-500/5 border-brand-500/20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-white mb-1">🕵️ Scout Mode</h3>
              <p className="text-sm text-dark-500">Take a photo in any store. See sold prices instantly — not retail prices.</p>
            </div>
            <Link href="/scout" className="btn-primary shrink-0">Try Scout Mode →</Link>
          </div>
        </div>

        {/* Demo Mode Banner */}
        <div className="mt-5 card bg-brand-500/10 border-brand-500/20">
          <div className="flex items-center gap-3">
            <div className="text-xl">🚧</div>
            <div>
              <div className="text-sm font-semibold text-brand-400">Demo Mode</div>
              <div className="text-xs text-dark-500">You&apos;re browsing with mock data. Connect your platform accounts in Settings to go live.</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}