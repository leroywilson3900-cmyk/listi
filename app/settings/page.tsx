import { Nav } from '../components/Nav'
import Link from 'next/link'

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1c]">
      <Nav />

      <main className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white">Settings</h1>
          <p className="text-sm text-dark-500 mt-1">Manage your account and preferences</p>
        </div>

        <div className="flex flex-col gap-5">
          {/* Profile */}
          <div className="card">
            <h2 className="text-sm font-bold text-dark-500 uppercase tracking-wider mb-4">Profile</h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-500 to-emerald-500 flex items-center justify-center text-xl font-bold text-white shrink-0">A</div>
                <div className="flex-1">
                  <div className="font-semibold text-white">Alex Smith</div>
                  <div className="text-sm text-dark-500">alex@example.com</div>
                </div>
                <button className="btn-secondary text-xs py-2">Edit</button>
              </div>
            </div>
          </div>

          {/* Connected Platforms */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold text-dark-500 uppercase tracking-wider">Connected Platforms</h2>
              <Link href="/settings/platforms" className="text-xs text-brand-500 font-semibold hover:text-brand-400">Manage →</Link>
            </div>
            <div className="flex flex-col gap-2">
              {[
                { name: 'eBay', emoji: '🏪', connected: true },
                { name: 'Poshmark', emoji: '👗', connected: true },
                { name: 'Mercari', emoji: '📦', connected: true },
              ].map((p) => (
                <div key={p.name} className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2 text-sm text-dark-400">
                    <span>{p.emoji}</span> {p.name}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-xs text-emerald-400">Connected</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Subscription */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold text-dark-500 uppercase tracking-wider">Subscription</h2>
              <Link href="/settings/billing" className="text-xs text-brand-500 font-semibold hover:text-brand-400">Manage →</Link>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-white">Pro Plan</div>
                <div className="text-xs text-dark-500">500 listings/mo · $39/mo</div>
              </div>
              <span className="status-active">Active</span>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="card border border-red-500/10">
            <h2 className="text-sm font-bold text-red-400 uppercase tracking-wider mb-4">Danger Zone</h2>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-white">Delete Account</div>
                <div className="text-xs text-dark-500">Permanently remove your account and all data</div>
              </div>
              <button className="px-3 py-1.5 rounded-lg text-xs font-semibold border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-colors">Delete</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
