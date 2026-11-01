import { Link } from 'react-router-dom'
import { benefits, pricing } from '../data.js'

const tools = [
  { title: 'Nexora Pulse', body: 'Member app for referrals, 1-to-1 notes, attendance, and chapter chat. Demo screens live inside this marketing site’s chapter cards.' },
  { title: 'Nexora Academy', body: 'Pitch labs, trust drills, and recorded feature presentations. Lifelong learning without a second login maze.' },
  { title: 'Chapter health', body: 'Open seats, average closed value, 12-week attendance. Visible to visitors — not locked behind membership.' },
]

export default function Benefits() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="kicker">Seat & pricing</div>
          <h1>Know the fee. See the room. Then decide.</h1>
          <p>Other networks hide dues until after a visit. We publish them. Visitor meetings stay free. The seat is annual.</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap grid-3">
          {pricing.map((p) => (
            <article className="card" key={p.tier} style={{ borderTop: '4px solid var(--gold)' }}>
              <div className="kicker">{p.tier}</div>
              <h2 style={{ margin: '8px 0' }}>{p.fee}</h2>
              <p style={{ color: 'var(--muted)' }}>{p.cities}</p>
              <p className="person" style={{ marginTop: 12 }}>{p.note}</p>
              <Link to="/find-chapter" className="btn btn-ink" style={{ marginTop: 18 }}>Visit this tier</Link>
            </article>
          ))}
        </div>
      </section>
      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="kicker">What the seat includes</div>
              <h2>Tools that live with the chapter, not on five other domains.</h2>
            </div>
          </div>
          <div className="grid-3">
            {benefits.map((b) => (
              <article className="card" key={b.title}>
                <h3>{b.title}</h3>
                <p style={{ color: 'var(--muted)', marginTop: 8 }}>{b.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="kicker">Member stack</div>
              <h2>One product. Not a scavenger hunt.</h2>
            </div>
          </div>
          <div className="grid-3">
            {tools.map((t) => (
              <article className="card" key={t.title}>
                <h3>{t.title}</h3>
                <p style={{ color: 'var(--muted)', marginTop: 8 }}>{t.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
