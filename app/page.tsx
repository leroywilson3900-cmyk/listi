'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0f1c', fontFamily: "'Inter', sans-serif" }}>
      {/* Nav */}
      <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(10,15,28,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #0ea5e9 0%, #10b981 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(14,165,233,0.35)' }}>
              <span style={{ color: '#fff', fontWeight: 800, fontSize: 17 }}>CL</span>
            </div>
            <span style={{ fontWeight: 800, fontSize: 19, color: '#f8fafc', letterSpacing: '-0.4px' }}>CrossList</span>
          </div>
          <nav style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <Link href="/login" style={{ fontSize: 14, fontWeight: 500, color: '#94a3b8', textDecoration: 'none' }}>Sign in</Link>
            <Link href="/signup" style={{ padding: '9px 20px', background: '#0ea5e9', color: '#fff', borderRadius: 8, fontSize: 14, fontWeight: 600, textDecoration: 'none', boxShadow: '0 4px 12px rgba(14,165,233,0.25)' }}>
              Start free trial
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{ padding: '80px 20px', background: 'linear-gradient(180deg, #0a0f1c 0%, #0f172a 100%)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(28px, 6vw, 48px)', fontWeight: 800, color: '#f8fafc', lineHeight: 1.2, letterSpacing: '-1px', marginBottom: 16 }}>
            One tap.<br />
            <span style={{ background: 'linear-gradient(135deg, #0ea5e9 0%, #10b981 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Every platform.</span>
          </h1>
          <p style={{ fontSize: 'clamp(15px, 3vw, 18px)', color: '#94a3b8', lineHeight: 1.7, maxWidth: 550, margin: '0 auto 32px' }}>
            List once, sell everywhere. CrossPost to eBay, Poshmark, and Mercari in seconds.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/signup" style={{ padding: '14px 32px', background: '#0ea5e9', color: '#fff', borderRadius: 10, fontSize: 15, fontWeight: 600, textDecoration: 'none', boxShadow: '0 4px 16px rgba(14,165,233,0.3)' }}>
              Start free trial →
            </Link>
            <Link href="/login" style={{ padding: '14px 32px', background: 'rgba(30,41,59,0.8)', color: '#f8fafc', borderRadius: 10, fontSize: 15, fontWeight: 600, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)' }}>
              Sign in
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: '60px 20px', background: '#0f172a' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px, 4vw, 28px)', fontWeight: 700, color: '#f8fafc', textAlign: 'center', marginBottom: 40 }}>How it works</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {[
              { step: '1', title: 'Snap a photo', desc: 'Take a picture of your item. Our AI extracts the details.', icon: '📷' },
              { step: '2', title: 'We do the work', desc: 'AI writes your listing, finds the right price, picks the best platforms.', icon: '✨' },
              { step: '3', title: 'Post everywhere', desc: 'One tap sends your listing to eBay, Poshmark, and Mercari at once.', icon: '🌐' },
            ].map((item) => (
              <div key={item.step} style={{ background: 'rgba(30,41,59,0.5)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: 24, textAlign: 'center' }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{item.icon}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#0ea5e9', marginBottom: 8 }}>STEP {item.step}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#f8fafc', marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#0a0f1c', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '32px 20px', textAlign: 'center' }}>
        <p style={{ fontSize: 13, color: '#475569' }}>© 2026 CrossList. All rights reserved.</p>
      </footer>
    </div>
  )
}
