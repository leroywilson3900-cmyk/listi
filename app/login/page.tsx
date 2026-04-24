'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    const form = e.currentTarget
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    const password = (form.elements.namedItem('password') as HTMLInputElement).value

    try {
      const res = await fetch('/api/demo/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name: email.split('@')[0] })
      })
      const data = await res.json()
      
      if (data.success) {
        localStorage.setItem('listi_user', JSON.stringify(data.user))
        localStorage.setItem('listi_token', data.token)
        router.push('/dashboard')
      } else {
        setError('Invalid credentials')
      }
    } catch (err) {
      setError('Connection error. Using demo mode.')
      // Fallback to demo mode
      localStorage.setItem('listi_user', JSON.stringify({ id: 'demo-001', name: 'Demo Lister', email }))
      localStorage.setItem('listi_token', 'demo-token')
      router.push('/dashboard')
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0f1c]">
      <nav className="px-4 py-4 flex justify-between items-center max-w-3xl mx-auto">
        <Link href="/" className="text-xl font-extrabold text-white">LISTI</Link>
        <Link href="/signup" className="text-sm text-brand-500 hover:text-brand-400">Sign up</Link>
      </nav>

      <div className="flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-extrabold text-white mb-2">Welcome back</h1>
            <p className="text-sm text-dark-500">Sign in to your LISTI account</p>
          </div>

          <div className="bg-dark-200/60 border border-white/5 rounded-xl p-6">
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold text-dark-500 uppercase tracking-wider mb-2">Email</label>
                <input name="email" type="email" defaultValue="demo@listi.app" placeholder="alex@example.com" className="input-field" required />
              </div>

              <div>
                <label className="block text-xs font-semibold text-dark-500 uppercase tracking-wider mb-2">Password</label>
                <input name="password" type="password" defaultValue="demo123" placeholder="••••••••" className="input-field" required />
              </div>

              {error && <p className="text-xs text-red-400">{error}</p>}

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-xs text-dark-500 cursor-pointer">
                  <input type="checkbox" className="w-3.5 h-3.5 rounded border-dark-300 bg-dark-100 accent-brand-500" />
                  Remember me
                </label>
                <Link href="/forgot-password" className="text-xs text-brand-500 hover:text-brand-400 transition-colors">Forgot password?</Link>
              </div>

              <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-3.5 mt-1">
                {loading ? 'Signing in...' : 'Sign in →'}
              </button>
            </form>

            <div className="mt-5 pt-5 border-t border-white/5 text-center">
              <p className="text-xs text-dark-500">
                Don&apos;t have an account?{' '}
                <Link href="/signup" className="text-brand-500 font-semibold hover:text-brand-400 transition-colors">Start free trial</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}