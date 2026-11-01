import { Link } from 'react-router-dom'
import { values, stats } from '../data.js'

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="kicker">About Nexora</div>
          <h1>A referral operating system for people who already have a craft.</h1>
          <p>Nexora is an original network. We borrowed the discipline of weekly chapters and exclusive seats — then added public chapter health, listed pricing, and a pipeline you can audit.</p>
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
        <div className="wrap grid-2">
          <div>
            <div className="kicker">Mission</div>
            <h2>Help members grow through introductions they can trust — and numbers they can defend.</h2>
          </div>
          <p style={{ color: 'var(--muted)', fontSize: 18 }}>
            We run local chapters with a global spine. One person per profession in each room. A timed weekly agenda. Referrals that are written down. Leadership that rotates. No politics in the room, no doubled categories, no hidden dues.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="kicker">How we behave</div>
              <h2>Four rules. Everything else is logistics.</h2>
            </div>
          </div>
          <div className="grid-2">
            {values.map((v) => (
              <article className="card" key={v.title}>
                <h3>{v.title}</h3>
                <p style={{ color: 'var(--muted)', marginTop: 8 }}>{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section dark">
        <div className="wrap grid-2">
          <div>
            <div className="kicker">Leadership</div>
            <h2>Operators, not a personality cult.</h2>
             <p className="hero-muted" style={{ marginTop: 12 }}>Nexora is led by chapter presidents who still sit in the room. Regional directors coach forming chapters. Product lives in Bengaluru. HQ is Mumbai.</p>
          </div>
          <div className="card">
            <p className="quote">We will not put a founder’s face on every page. The chapter is the product.</p>
            <p className="person">Nexora charter, 2024</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap cta-band">
          <div>
            <div className="kicker">Visit</div>
            <h2>See a chapter before you believe the copy.</h2>
          </div>
          <Link to="/find-chapter" className="btn btn-gold">Get invited</Link>
        </div>
      </section>
    </>
  )
}
