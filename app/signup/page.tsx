'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Signup() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Pure demo mode - instant redirect
    setTimeout(() => {
      localStorage.setItem('crosslist_token', 'demo_' + Date.now())
      localStorage.setItem('crosslist_user', JSON.stringify({ 
        email: 'alex@resellpro.com', 
        name: 'Alex Rivera', 
        plan: 'pro'
      }))
      router.push('/dashboard')
    }, 300)
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#0a0f1c', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: 20
    }}>
      <div style={{ width: '100%', maxWidth: 400 }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: 'linear-gradient(135deg, #0ea5e9 0%, #10b981 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(14,165,233,0.3)' }}>
              <span style={{ color: '#fff', fontWeight: 800, fontSize: 20 }}>CL</span>
            </div>
          </div>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: '#f8fafc', marginBottom: 4 }}>CrossList</h1>
          <p style={{ fontSize: 14, color: '#64748b' }}>Create your free account</p>
        </div>

        {/* Demo Banner */}
        <div style={{ 
          background: 'rgba(14,165,233,0.1)', 
          border: '1px solid rgba(14,165,233,0.3)', 
          borderRadius: 12, 
          padding: '10px 14px', 
          marginBottom: 20, 
          fontSize: 13, 
          color: '#0ea5e9',
          textAlign: 'center'
        }}>
          ✅ Demo mode — click Sign Up to explore instantly
        </div>

        {/* Form Card */}
        <div style={{ 
          background: 'rgba(15,23,42,0.8)', 
          borderRadius: 16, 
          padding: 28, 
          border: '1px solid rgba(255,255,255,0.08)'
        }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 18 }}>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#94a3b8', marginBottom: 8 }}>Full Name</label>
              <input
                name="name"
                type="text"
                placeholder="Alex Rivera"
                defaultValue="Alex Rivera"
                style={{ 
                  width: '100%', 
                  padding: '12px 14px', 
                  background: 'rgba(10,15,28,0.8)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 10, 
                  fontSize: 14, 
                  color: '#f8fafc',
                  outline: 'none'
                }}
                required
              />
            </div>

            <div style={{ marginBottom: 18 }}>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#94a3b8', marginBottom: 8 }}>Email</label>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                defaultValue="alex@resellpro.com"
                style={{ 
                  width: '100%', 
                  padding: '12px 14px', 
                  background: 'rgba(10,15,28,0.8)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 10, 
                  fontSize: 14, 
                  color: '#f8fafc',
                  outline: 'none'
                }}
                required
              />
            </div>

            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#94a3b8', marginBottom: 8 }}>Password</label>
              <input
                name="password"
                type="password"
                placeholder="••••••••"
                defaultValue="demo123"
                style={{ 
                  width: '100%', 
                  padding: '12px 14px', 
                  background: 'rgba(10,15,28,0.8)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 10, 
                  fontSize: 14, 
                  color: '#f8fafc',
                  outline: 'none'
                }}
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '14px',
                background: 'linear-gradient(135deg, #0ea5e9 0%, #10b981 100%)',
                color: '#fff',
                border: 'none',
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(14,165,233,0.25)'
              }}
            >
              {loading ? 'Loading...' : 'Create Account'}
            </button>
          </form>

          <div style={{ marginTop: 24, textAlign: 'center', fontSize: 13, color: '#64748b' }}>
            Already have an account?{' '}
            <Link href="/login" style={{ color: '#0ea5e9', fontWeight: 600, textDecoration: 'none' }}>
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
