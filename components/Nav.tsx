'use client'

import Link from 'next/link'
import { useState } from 'react'

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-dark-100/95 backdrop-blur-md border-b border-white/8">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-brand-500/30">
            <span className="text-white font-extrabold text-lg">CL</span>
          </div>
          <span className="font-extrabold text-xl text-white tracking-tight">LISTI</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/dashboard" className="text-sm font-medium text-dark-500 hover:text-white transition-colors">Dashboard</Link>
          <Link href="/listings" className="text-sm font-medium text-dark-500 hover:text-white transition-colors">Listings</Link>
          <Link href="/settings" className="text-sm font-medium text-dark-500 hover:text-white transition-colors">Settings</Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login" className="text-sm font-medium text-dark-500 hover:text-white transition-colors">Sign in</Link>
          <Link href="/signup" className="btn-primary text-sm">Start free trial</Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg bg-dark-200 text-white"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-dark-100 border-t border-white/8 px-4 py-4 flex flex-col gap-3">
          <Link href="/dashboard" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-dark-500 hover:text-white py-2">Dashboard</Link>
          <Link href="/listings" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-dark-500 hover:text-white py-2">Listings</Link>
          <Link href="/settings" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-dark-500 hover:text-white py-2">Settings</Link>
          <div className="flex items-center gap-3 pt-2 border-t border-white/8">
            <Link href="/login" className="btn-secondary flex-1 justify-center">Sign in</Link>
            <Link href="/signup" className="btn-primary flex-1 justify-center">Start free trial</Link>
          </div>
        </div>
      )}
    </header>
  )
}
