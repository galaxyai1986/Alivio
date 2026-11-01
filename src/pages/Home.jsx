import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { stats, pillars, steps, stories, pricing } from '../data.js'

export default function Home() {
  const [deals, setDeals] = useState(8)
  const [value, setValue] = useState(180000)
  const [fee, setFee] = useState(48000)

  const roi = useMemo(() => {
    const closed = deals * value
    const multiple = fee > 0 ? closed / fee : 0
    return { closed, multiple }
  }, [deals, value, fee])

  return (
    <>
      <section className="hero">
        <div className="orb" />
        <div className="wrap hero-grid">
          <div>
            <div className="kicker">Structured referral network</div>
            <h1>The room where your next client already sits.</h1>
            <p className="lede">
              Nexora chapters meet every week. One exclusive seat per profession. Referrals are logged, valued, and followed to close — not lost in a handshake.
            </p>
            <div className="hero-actions">
              <Link to="/find-chapter" className="btn btn-gold">Visit a chapter</Link>
              <Link to="/experience" className="btn btn-ghost">See how a meeting runs</Link>
            </div>
          </div>
          <aside className="hero-card">
            <div>
              <div className="live"><span className="dot" /> Live chapter health</div>
              <h3 className="serif" style={{ fontSize: 32, fontWeight: 400, margin: '14px 0 6px' }}>Bandra West · Wednesday 7:30 AM</h3>
              <p className="hero-muted">34 members · 6 open seats · next meeting in 2 days</p>
            </div>
            <div>
              <div className="row"><span>Closed this year</span><b>₹6.8 Cr</b></div>
              <div className="row"><span>Avg. referred deal</span><b>₹4.2 L</b></div>
              <div className="row"><span>Open categories</span><b>Photographer, Printer, HR</b></div>
              <div className="row"><span>Attendance 12 weeks</span><b>94%</b></div>
            </div>
          </aside>
        </div>
      </section>

      <div className="wrap">
        <div className="stats">
          {stats.map((s) => (
            <article className="stat" key={s.label}>
              <b>{s.value}</b>
              {s.label}
              <span>{s.note}</span>
            </article>
          ))}
        </div>
      </div>

      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="kicker">Why chapters work</div>
              <h2>Not another mixer. A pipeline with rules.</h2>
            </div>
            <p>Weekly discipline, rebuilt for operators who want public numbers, clear pricing, and a seat they can actually own.</p>
          </div>
          <div className="grid-3">
            {pillars.map((p) => (
              <article className="card" key={p.title}>
                <div className="kicker">{p.kicker}</div>
                <h3 style={{ margin: '10px 0 8px' }}>{p.title}</h3>
                <p style={{ color: 'var(--muted)' }}>{p.body}</p>
                <p className="quote">“{p.quote}”</p>
                <p className="person">{p.person}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="kicker">Three steps</div>
              <h2>Visit. Meet. Claim the seat.</h2>
            </div>
            <p>First two meetings are free. You apply only if the room fits and your category is open.</p>
          </div>
          <div className="steps">
            {steps.map((s) => (
              <article className="step" key={s.n}>
                <div className="n">{s.n}</div>
                <h3>{s.title}</h3>
                <p style={{ color: 'var(--muted)', marginTop: 8 }}>{s.body}</p>
              </article>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Link to="/find-chapter" className="btn btn-ink">Get invited</Link>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="kicker">ROI before you pay</div>
              <h2>Run the numbers. Then visit.</h2>
            </div>
            <p>Most members cover the annual seat with a single closed referral. Adjust the sliders to your craft.</p>
          </div>
          <div className="calc">
            <div className="card">
              <label>Closed referred deals / year
                <input type="range" min="1" max="24" value={deals} onChange={(e) => setDeals(Number(e.target.value))} />
                <b>{deals}</b>
              </label>
              <label style={{ marginTop: 16, display: 'block' }}>Average deal value (₹)
                <input type="range" min="25000" max="800000" step="5000" value={value} onChange={(e) => setValue(Number(e.target.value))} />
                <b>₹{value.toLocaleString('en-IN')}</b>
              </label>
              <label style={{ marginTop: 16, display: 'block' }}>Annual seat fee
                <select value={fee} onChange={(e) => setFee(Number(e.target.value))}>
                  {pricing.map((p) => (
                    <option key={p.tier} value={Number(p.fee.replace(/[₹,]/g, ''))}>{p.tier} · {p.fee}</option>
                  ))}
                </select>
              </label>
            </div>
            <div className="calc-out">
              <div className="kicker">Projected referred revenue</div>
              <b>₹{roi.closed.toLocaleString('en-IN')}</b>
              <p style={{ margin: '10px 0 0' }}>
                {roi.multiple.toFixed(1)}× the seat fee. Demo math — your chapter’s live averages are on each chapter card.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="ticker">
        <div className="ticker-track">
          {[...stories, ...stories].map((s, i) => (
            <span className="ticker-item" key={i}>
              <b>{s.name}</b> · {s.role}, {s.city} — “{s.quote.slice(0, 72)}…”
            </span>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="cta-band">
            <div>
              <div className="kicker">Begin</div>
              <h2>Your category might already be open nearby.</h2>
              <p style={{ marginTop: 10 }}>Filter by city, meeting mode, and profession. See open seats before you walk in.</p>
            </div>
            <Link to="/find-chapter" className="btn btn-gold">Find a chapter</Link>
          </div>
        </div>
      </section>
    </>
  )
}
