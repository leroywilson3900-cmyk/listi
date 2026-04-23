'use client'

import Link from 'next/link'

const mockStats = {
  totalListings: 24,
  activeListings: 18,
  totalViews: 1284,
  totalSaves: 89,
  revenue: 2340,
  pendingOrders: 3
}

const recentListings = [
  { id: '1', title: 'Nike Air Max Hoodie', size: 'L', price: 48, status: 'active', platforms: ['ebay', 'poshmark'] },
  { id: '2', title: 'Lularoe Leggings', size: 'M', price: 28, status: 'active', platforms: ['mercari'] },
  { id: '3', title: 'Supreme Bogo Hoodie', size: 'L', price: 320, status: 'sold', platforms: ['ebay'] },
]

export default function DashboardPage() {
  return (
    <div style={{ color: '#f8fafc' }}>
      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 'clamp(20px, 5vw, 24px)', fontWeight: 700, color: '#f8fafc', marginBottom: 4 }}>
          Welcome back, Alex 👋
        </h1>
        <p style={{ fontSize: 14, color: '#64748b' }}>Here&apos;s what&apos;s happening with your listings</p>
      </div>

      {/* Quick Add */}
      <Link 
        href="/import" 
        style={{ 
          display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 20px', 
          background: 'linear-gradient(135deg, #0ea5e9 0%, #10b981 100%)', 
          color: '#fff', borderRadius: 10, fontWeight: 600, fontSize: 14, 
          textDecoration: 'none', marginBottom: 24, boxShadow: '0 4px 12px rgba(14,165,233,0.25)'
        }}
      >
        <span style={{ fontSize: 16 }}>➕</span> Add New Listing
      </Link>

      {/* Stats Grid - Mobile First */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, marginBottom: 24 }}>
        {[
          { label: 'Total Listings', value: mockStats.totalListings, icon: '📦' },
          { label: 'Active', value: mockStats.activeListings, icon: '✅' },
          { label: 'Views', value: mockStats.totalViews, icon: '👁️' },
          { label: 'Saves', value: mockStats.totalSaves, icon: '❤️' },
          { label: 'Revenue', value: '$' + mockStats.revenue, icon: '💰' },
          { label: 'Pending Orders', value: mockStats.pendingOrders, icon: '📦' },
        ].map((stat) => (
          <div key={stat.label} style={{ 
            background: 'rgba(30,41,59,0.6)', borderRadius: 14, padding: '16px',
            border: '1px solid rgba(255,255,255,0.06)'
          }}>
            <div style={{ fontSize: 20, marginBottom: 8 }}>{stat.icon}</div>
            <div style={{ fontSize: 'clamp(18px, 4vw, 22px)', fontWeight: 700, color: '#f8fafc', marginBottom: 2 }}>{stat.value}</div>
            <div style={{ fontSize: 11, color: '#64748b' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Recent Listings */}
      <div style={{ 
        background: 'rgba(30,41,59,0.6)', borderRadius: 14, padding: 20, marginBottom: 16,
        border: '1px solid rgba(255,255,255,0.06)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, color: '#f8fafc' }}>Recent Listings</h2>
          <Link href="/listings" style={{ fontSize: 12, color: '#0ea5e9', fontWeight: 600, textDecoration: 'none' }}>View all →</Link>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {recentListings.map((listing) => (
            <div key={listing.id} style={{ 
              background: 'rgba(15,23,42,0.5)', borderRadius: 10, padding: 14,
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12
            }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#f8fafc', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{listing.title}</div>
                <div style={{ fontSize: 12, color: '#64748b' }}>Size {listing.size} · ${listing.price}</div>
              </div>
              <div style={{ display: 'flex', gap: 4, flexShrink: 0 }}>
                {listing.platforms.map((p) => (
                  <span key={p} style={{ fontSize: 10, padding: '2px 6px', background: 'rgba(14,165,233,0.2)', color: '#0ea5e9', borderRadius: 4, fontWeight: 600, textTransform: 'uppercase' }}>{p[0]}</span>
                ))}
              </div>
              <span style={{ 
                fontSize: 10, fontWeight: 600, padding: '3px 8px', borderRadius: 10,
                background: listing.status === 'active' ? 'rgba(16,185,129,0.2)' : 'rgba(239,68,68,0.2)',
                color: listing.status === 'active' ? '#10b981' : '#ef4444'
              }}>
                {listing.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Platform Status */}
      <div style={{ 
        background: 'rgba(30,41,59,0.6)', borderRadius: 14, padding: 20, marginBottom: 16,
        border: '1px solid rgba(255,255,255,0.06)'
      }}>
        <h2 style={{ fontSize: 16, fontWeight: 700, color: '#f8fafc', marginBottom: 16 }}>Platforms</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { name: 'eBay', connected: true, listings: 12 },
            { name: 'Poshmark', connected: true, listings: 8 },
            { name: 'Mercari', connected: true, listings: 6 },
          ].map((platform) => (
            <div key={platform.name} style={{ 
              background: 'rgba(15,23,42,0.5)', borderRadius: 10, padding: 14,
              display: 'flex', alignItems: 'center', justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 20 }}>{platform.name === 'eBay' ? '🏪' : platform.name === 'Poshmark' ? '👗' : '📦'}</span>
                <span style={{ fontSize: 14, fontWeight: 600, color: '#f8fafc' }}>{platform.name}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 12, color: '#64748b' }}>{platform.listings} listings</span>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
