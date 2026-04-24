import Link from 'next/link'
import { Nav } from './components/Nav'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0f1c]">
      <Nav />

      {/* Hero */}
      <section className="px-4 pt-20 pb-24 bg-gradient-to-b from-[#0a0f1c] to-[#0f172a]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
            Now in early access
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-5">
            One tap.<br />
            <span className="bg-gradient-to-r from-brand-500 to-emerald-500 bg-clip-text text-transparent">Every platform.</span>
          </h1>

          <p className="text-lg text-dark-500 leading-relaxed max-w-xl mx-auto mb-10">
            List once, sell everywhere. CrossPost to eBay, Poshmark, and Mercari in seconds with AI-powered descriptions and smart pricing.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/signup" className="btn-primary text-base px-8 py-4 shadow-xl shadow-brand-500/20">
              Start free trial →
            </Link>
            <Link href="/login" className="btn-secondary text-base px-8 py-4">
              Sign in
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-20 bg-[#0f172a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">Everything you need to sell more</h2>
          <p className="text-dark-500 text-center mb-12 max-w-lg mx-auto">Stop listing manually on every platform. LISTI does the heavy lifting.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: '📷',
                title: 'Snap & List',
                desc: 'Take a photo. AI extracts details, writes descriptions, and prices your item instantly.',
                color: 'from-brand-500/20 to-brand-500/5 border-brand-500/20'
              },
              {
                icon: '🌐',
                title: 'Post Everywhere',
                desc: 'One tap sends your listing to eBay, Poshmark, and Mercari simultaneously.',
                color: 'from-emerald-500/20 to-emerald-500/5 border-emerald-500/20'
              },
              {
                icon: '💰',
                title: 'See Your Real Profit',
                desc: 'Fee calculator shows exactly what you keep after every platform takes their cut.',
                color: 'from-amber-500/20 to-amber-500/5 border-amber-500/20'
              },
              {
                icon: '🤖',
                title: 'AI Descriptions',
                desc: 'Auto-generated listings that actually sell. No more blank description boxes.',
                color: 'from-violet-500/20 to-violet-500/5 border-violet-500/20'
              },
              {
                icon: '⚡',
                title: 'Duplicate Detection',
                desc: 'Never double-post the same item. We catch duplicates before they go live.',
                color: 'from-rose-500/20 to-rose-500/5 border-rose-500/20'
              },
              {
                icon: '📊',
                title: 'Unified Dashboard',
                desc: 'Manage all your listings, orders, and profit metrics from one place.',
                color: 'from-cyan-500/20 to-cyan-500/5 border-cyan-500/20'
              },
            ].map((feature) => (
              <div key={feature.title} className={`bg-gradient-to-b ${feature.color} border rounded-xl p-5`}>
                <div className="text-2xl mb-3">{feature.icon}</div>
                <h3 className="text-base font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-dark-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-4 py-20 bg-[#0a0f1c]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">Simple, transparent pricing</h2>
          <p className="text-dark-500 text-center mb-12">Start free. Scale when you're ready.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                name: 'Starter',
                price: '$19',
                desc: 'For resellers just getting started.',
                features: ['100 listings/mo', 'eBay + Mercari', 'Duplicate check', 'AI descriptions'],
                highlight: false,
              },
              {
                name: 'Pro',
                price: '$39',
                desc: 'For serious resellers with growing inventory.',
                features: ['500 listings/mo', 'eBay + Mercari', 'Profit calculator', 'Priority AI', 'Bulk import'],
                highlight: true,
              },
              {
                name: 'Scale',
                price: '$79',
                desc: 'For power sellers with 1000+ items.',
                features: ['Unlimited listings', 'All platforms', 'Auto price drop', 'API access', 'Dedicated support'],
                highlight: false,
              },
            ].map((tier) => (
              <div key={tier.name} className={`rounded-xl p-6 border ${tier.highlight ? 'bg-gradient-to-b from-brand-500/10 to-dark-200 border-brand-500/30' : 'bg-dark-200/40 border-white/5'}`}>
                {tier.highlight && <div className="text-[10px] font-bold text-brand-400 uppercase tracking-wider mb-2">Most Popular</div>}
                <h3 className="text-lg font-bold text-white mb-1">{tier.name}</h3>
                <div className="text-3xl font-extrabold text-white mb-1">{tier.price}<span className="text-base font-medium text-dark-500">/mo</span></div>
                <p className="text-sm text-dark-500 mb-5">{tier.desc}</p>
                <ul className="flex flex-col gap-2 mb-6">
                  {tier.features.map((f) => (
                    <li key={f} className="text-sm text-dark-400 flex items-center gap-2">
                      <svg className="w-4 h-4 text-emerald-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/signup" className={tier.highlight ? 'btn-primary w-full justify-center' : 'btn-secondary w-full justify-center'}>
                  Get started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0f1c] border-t border-white/5 px-4 py-8 text-center">
        <p className="text-sm text-dark-500">© 2026 LISTI. All rights reserved.</p>
      </footer>
    </div>
  )
}
