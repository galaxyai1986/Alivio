import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { stories } from '../data.js'

export default function Stories() {
  const [role, setRole] = useState('All')
  const [country, setCountry] = useState('All')

  const roles = ['All', ...new Set(stories.map((s) => s.role))]
  const countries = ['All', ...new Set(stories.map((s) => s.country))]

  const list = useMemo(
    () => stories.filter((s) => (role === 'All' || s.role === role) && (country === 'All' || s.country === country)),
    [role, country]
  )

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="kicker">Member stories</div>
          <h1>Closed work. Named people. Real cities.</h1>
          <p>These are demo narratives for the marketing site — written like operator notes, not slogans. Filter by craft or country.</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="filters">
            {roles.map((r) => (
              <button key={r} className={`filter ${role === r ? 'on' : ''}`} onClick={() => setRole(r)}>{r}</button>
            ))}
          </div>
          <div className="filters">
            {countries.map((c) => (
              <button key={c} className={`filter ${country === c ? 'on' : ''}`} onClick={() => setCountry(c)}>{c}</button>
            ))}
          </div>
          <div className="grid-3">
            {list.map((s) => (
              <article className="card" key={s.id}>
                <div className="badge">{s.metric}</div>
                <p className="quote">“{s.quote}”</p>
                <h3>{s.name}</h3>
                <p className="person">{s.role} · {s.company} · {s.city}, {s.country}</p>
              </article>
            ))}
          </div>
          <div className="cta-band" style={{ marginTop: 48 }}>
            <div>
              <div className="kicker">Submit yours</div>
              <h2>When a referral closes, tell the room.</h2>
            </div>
            <Link to="/contact" className="btn btn-gold">Share a story</Link>
          </div>
        </div>
      </section>
    </>
  )
}
