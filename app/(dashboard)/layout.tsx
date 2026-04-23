'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: '📊' },
  { name: 'Listings', href: '/listings', icon: '📦' },
  { name: 'Import', href: '/import', icon: '📥' },
  { name: 'Platforms', href: '/platforms', icon: '🏪' },
  { name: 'Scout', href: '/scout', icon: '🔍' },
  { name: 'Billing', href: '/billing', icon: '💳' },
  { name: 'Settings', href: '/settings', icon: '⚙️' },
]

export default function DashboardGroupLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isDemo, setIsDemo] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('crosslist_token')
    setIsDemo(token && token.startsWith('demo_'))
  }, [])

  useEffect(() => {
    setSidebarOpen(false)
  }, [pathname])

  return (
    <div style={{ minHeight: '100vh', background: '#0a0f1c', color: '#f8fafc' }}>
      {/* Mobile Top Bar */}
      <header style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding: '12px 16px',
        background: 'rgba(15,23,42,0.98)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        position: 'sticky',
        top: 0,
        zIndex: 60
      }}>
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          style={{ 
            background: 'none', 
            border: 'none', 
            fontSize: 20, 
            cursor: 'pointer', 
            padding: 8,
            color: '#f8fafc',
            minWidth: 44,
            minHeight: 44,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {sidebarOpen ? '✕' : '☰'}
        </button>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg, #0ea5e9 0%, #10b981 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#fff', fontWeight: 800, fontSize: 12 }}>CL</span>
          </div>
          <span style={{ fontWeight: 700, fontSize: 16, color: '#f8fafc' }}>CrossList</span>
        </div>
        
        <button style={{ background: 'none', border: 'none', fontSize: 18, cursor: 'pointer', padding: 8, color: '#64748b' }}>
          🔔
        </button>
      </header>

      {/* Demo Banner */}
      {isDemo && (
        <div style={{ background: 'linear-gradient(90deg, #0ea5e9 0%, #10b981 100%)', padding: '8px 16px', textAlign: 'center' }}>
          <span style={{ fontSize: 12, color: '#fff', fontWeight: 600 }}>
            🎉 Demo Mode — Exploring CrossList!
          </span>
        </div>
      )}

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex' }}>
          <div 
            onClick={() => setSidebarOpen(false)}
            style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)' }}
          />
          
          <aside style={{ 
            position: 'relative', 
            width: '80%', 
            maxWidth: 280,
            background: '#0f172a', 
            height: '100vh',
            overflowY: 'auto',
            boxShadow: '4px 0 20px rgba(0,0,0,0.3)'
          }}>
            <div style={{ padding: '16px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #0ea5e9 0%, #10b981 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#fff', fontWeight: 800, fontSize: 14 }}>CL</span>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: '#f8fafc' }}>CrossList</div>
                <div style={{ fontSize: 11, color: '#64748b' }}>Alex Rivera</div>
              </div>
            </div>
            
            <nav style={{ padding: '12px 8px' }}>
              {navItems.map((item) => {
                const active = pathname === item.href || pathname.startsWith(item.href + '/')
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      padding: '14px 16px',
                      borderRadius: 10,
                      marginBottom: 4,
                      color: active ? '#0ea5e9' : '#94a3b8',
                      background: active ? 'rgba(14,165,233,0.1)' : 'transparent',
                      fontWeight: active ? 600 : 500,
                      fontSize: 15,
                      textDecoration: 'none',
                      minHeight: 48
                    }}
                  >
                    <span style={{ fontSize: 18 }}>{item.icon}</span>
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </aside>
        </div>
      )}

      {/* Page Content */}
      <main style={{ padding: 16, maxWidth: 1400, margin: '0 auto' }}>
        {children}
      </main>
    </div>
  )
}
