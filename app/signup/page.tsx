import Link from 'next/link'
import { Nav } from '../components/Nav'

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1c]">
      <Nav />

      <div className="flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-extrabold text-white mb-2">Create your account</h1>
            <p className="text-sm text-dark-500">Start listing everywhere in minutes</p>
          </div>

          <div className="bg-dark-200/60 border border-white/5 rounded-xl p-6">
            <form className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-dark-500 uppercase tracking-wider mb-2">First name</label>
                  <input type="text" placeholder="Alex" className="input-field" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-dark-500 uppercase tracking-wider mb-2">Last name</label>
                  <input type="text" placeholder="Smith" className="input-field" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-dark-500 uppercase tracking-wider mb-2">Email</label>
                <input type="email" placeholder="alex@example.com" className="input-field" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-dark-500 uppercase tracking-wider mb-2">Password</label>
                <input type="password" placeholder="••••••••" className="input-field" />
              </div>

              <div className="flex items-start gap-2 text-xs text-dark-500">
                <input type="checkbox" className="w-3.5 h-3.5 mt-0.5 rounded border-dark-300 bg-dark-100 accent-brand-500 shrink-0" />
                <span>I agree to the{' '}
                  <Link href="/terms" className="text-brand-500 hover:text-brand-400">Terms of Service</Link>
                  {' '}and{' '}
                  <Link href="/privacy" className="text-brand-500 hover:text-brand-400">Privacy Policy</Link>
                </span>
              </div>

              <button type="submit" className="btn-primary w-full justify-center py-3.5 mt-1">
                Create account →
              </button>
            </form>

            {/* Platform Connect */}
            <div className="mt-5 pt-5 border-t border-white/5">
              <p className="text-xs text-dark-500 text-center mb-3">Or connect a platform to get started</p>
              <div className="grid grid-cols-3 gap-2">
                {['🏪 eBay', '👗 Poshmark', '📦 Mercari'].map((platform) => (
                  <button key={platform} className="btn-secondary text-xs justify-center py-2.5">
                    {platform}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-5 border-t border-white/5 text-center">
              <p className="text-xs text-dark-500">
                Already have an account?{' '}
                <Link href="/login" className="text-brand-500 font-semibold hover:text-brand-400 transition-colors">Sign in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
