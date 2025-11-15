import React from 'react'
import Spline from '@splinetool/react-spline'
import {
  ArrowRight,
  Shield,
  Zap,
  LineChart,
  Cog,
  CheckCircle2,
  CreditCard,
} from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/40">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 text-white font-bold shadow-lg">F</span>
          <span className="text-xl font-semibold tracking-tight text-slate-800">FluxFin</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition">Features</a>
          <a href="#how" className="hover:text-slate-900 transition">How it works</a>
          <a href="#pricing" className="hover:text-slate-900 transition">Pricing</a>
          <a href="#faq" className="hover:text-slate-900 transition">FAQ</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="px-4 py-2 rounded-lg text-slate-700 hover:text-slate-900">Sign in</a>
          <a href="#cta" className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition inline-flex items-center gap-2">
            Start free <ArrowRight size={16} />
          </a>
        </div>
        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-200 text-slate-700">☰</button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 lg:pt-36 bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-1/3 h-72 w-72 bg-gradient-to-br from-indigo-200/60 to-cyan-200/60 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 bg-gradient-to-br from-purple-200/60 to-emerald-200/60 blur-3xl rounded-full pointer-events-none" />
      </div>

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center relative z-10">
        <div className="py-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur border border-slate-200 text-slate-700 shadow-sm mb-4">
            <Shield size={16} className="text-emerald-600" />
            <span className="text-xs font-medium">Bank-grade security • SOC2 ready</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
            Automate your finance ops with clarity and control
          </h1>
          <p className="mt-5 text-lg md:text-xl text-slate-600 leading-relaxed">
            FluxFin is the modern finance automation platform. Reconcile transactions, route approvals, and get real-time insights, all powered by secure workflows and AI assistance.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 text-white px-5 py-3 shadow-lg shadow-slate-900/10 hover:bg-slate-800 transition">
              Start free trial <ArrowRight size={18} />
            </a>
            <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-slate-900 px-5 py-3 border border-slate-200 hover:bg-slate-50 transition">
              Learn more
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-1 text-emerald-600">
              <CheckCircle2 size={18} />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-1 text-emerald-600">
              <CheckCircle2 size={18} />
              <span>Cancel anytime</span>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-xs uppercase tracking-wider text-slate-500 mb-3">Trusted by teams at</p>
            <div className="flex flex-wrap items-center gap-6 opacity-70">
              <Logo text="Arcadia" />
              <Logo text="Nimbus" />
              <Logo text="Helix" />
              <Logo text="Vertex" />
              <Logo text="Pulse" />
            </div>
          </div>
        </div>

        <div className="relative h-[420px] md:h-[520px] lg:h-[620px] rounded-2xl overflow-hidden border border-white/40 shadow-[0_20px_80px_-20px_rgba(2,6,23,0.2)] bg-white/50 backdrop-blur">
          <Spline
            scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}

function Logo({ text }) {
  return (
    <div className="text-slate-500 text-sm font-semibold tracking-wider uppercase bg-white/70 border border-slate-200 rounded-md px-3 py-1 shadow-sm">
      {text}
    </div>
  )
}

function Feature({ icon: Icon, title, description }) {
  return (
    <div className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 text-indigo-600 flex items-center justify-center mb-4">
        <Icon size={22} />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-1">{title}</h3>
      <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Automated workflows',
      description:
        'Remove manual steps with approval routing, smart categorization, and scheduled reconciliations.',
    },
    {
      icon: LineChart,
      title: 'Real-time insights',
      description:
        'Live dashboards for cash flow, burn, and variance—turn data into decisions instantly.',
    },
    {
      icon: Shield,
      title: 'Bank-grade security',
      description:
        'SOC2-ready controls, audit trails, and fine-grained permissions built-in by default.',
    },
    {
      icon: Cog,
      title: 'Plug-and-play integrations',
      description:
        'Connect to banks, ERPs, and cards in minutes with prebuilt integrations and webhooks.',
    },
  ]

  return (
    <section id="features" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wider uppercase text-indigo-600">Features</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Finance automation that scales with you
          </h2>
          <p className="mt-3 text-slate-600">
            Everything you need to run a modern finance org—from transaction to close—in one streamlined hub.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <Feature key={f.title} icon={f.icon} title={f.title} description={f.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    {
      title: 'Connect accounts',
      description: 'Securely link banks, cards, and ledgers with one click.',
      icon: CreditCard,
    },
    {
      title: 'Automate policies',
      description: 'Set approvals, thresholds, and categorization once.',
      icon: Cog,
    },
    {
      title: 'Close with confidence',
      description: 'Reconcile in minutes and share insights in real-time.',
      icon: LineChart,
    },
  ]

  return (
    <section id="how" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium tracking-wider uppercase text-indigo-600">How it works</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Get started in three simple steps
          </h2>
          <p className="mt-3 text-slate-600">
            From first connection to automated close in under an hour.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map((s, idx) => (
            <div key={s.title} className="rounded-xl bg-white p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <s.icon size={20} />
                </div>
                <span className="text-xs font-semibold text-indigo-600">Step {idx + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingCTA() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-10 md:p-14 shadow-[0_20px_80px_-20px_rgba(2,6,23,0.15)] relative overflow-hidden">
          <div className="absolute -top-10 -right-10 h-40 w-40 bg-gradient-to-br from-indigo-200 to-cyan-200 blur-2xl rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-50 via-transparent to-transparent pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
            <div className="max-w-2xl">
              <p className="text-sm font-medium tracking-wider uppercase text-indigo-600">Pricing</p>
              <h3 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                Simple, transparent pricing
              </h3>
              <p className="mt-3 text-slate-600">
                Start free. Upgrade when you’re ready. All plans include unlimited workflows, audit trail, and bank-grade security.
              </p>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={18}/> No setup fees</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={18}/> 14-day free trial</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="text-emerald-600" size={18}/> Cancel anytime</li>
              </ul>
            </div>
            <div className="shrink-0 w-full md:w-auto">
              <a id="cta" href="#" className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 text-white px-6 py-3 shadow-lg hover:bg-slate-800 transition">
                Create your account <ArrowRight size={18} />
              </a>
              <p className="text-xs text-slate-500 mt-2">Free forever for small teams</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="faq" className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 text-white font-bold shadow">F</span>
              <span className="text-lg font-semibold tracking-tight text-slate-800">FluxFin</span>
            </div>
            <p className="text-slate-600 text-sm max-w-sm">
              The modern finance automation platform for high-growth teams.
            </p>
          </div>
          <div className="text-slate-600 text-sm">
            <p className="font-semibold text-slate-800 mb-2">Resources</p>
            <ul className="space-y-1">
              <li><a href="#features" className="hover:text-slate-900">Features</a></li>
              <li><a href="#how" className="hover:text-slate-900">How it works</a></li>
              <li><a href="#pricing" className="hover:text-slate-900">Pricing</a></li>
            </ul>
          </div>
          <div className="text-slate-600 text-sm">
            <p className="font-semibold text-slate-800 mb-2">Legal</p>
            <ul className="space-y-1">
              <li><a href="#" className="hover:text-slate-900">Privacy</a></li>
              <li><a href="#" className="hover:text-slate-900">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-6 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} FluxFin, Inc. All rights reserved.</p>
          <p>Made with care for finance teams.</p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <PricingCTA />
      <Footer />
    </div>
  )
}
