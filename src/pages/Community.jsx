import { useState } from 'react'
import { Link } from 'react-router-dom'
import { countries } from '../data.js'

const regions = ['All', 'Asia', 'Europe', 'Middle East', 'Africa', 'Americas']

export default function Community() {
  const [region, setRegion] = useState('All')
  const list = countries.filter((c) => region === 'All' || c.region === region)

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="kicker">Cities & countries</div>
          <h1>Local rooms. A spine that crosses borders.</h1>
          <p>Demo footprint for the marketing site. Numbers are illustrative. Click through to find a chapter in India first — that is where this build is densest.</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="filters">
            {regions.map((r) => (
              <button key={r} className={`filter ${region === r ? 'on' : ''}`} onClick={() => setRegion(r)}>{r}</button>
            ))}
          </div>
          <div className="grid-3">
            {list.map((c) => (
              <article className="card" key={c.name}>
                <div className="kicker">{c.region}</div>
                <h3 style={{ margin: '8px 0 14px' }}>{c.name}</h3>
                <div className="meta">
                  <span>{c.members} members</span>
                  <span>{c.referrals} referrals</span>
                  <span>{c.business} closed</span>
                </div>
              </article>
            ))}
          </div>
          <div className="cta-band" style={{ marginTop: 48 }}>
            <div>
              <div className="kicker">India first</div>
              <h2>Eight live demo chapters across Mumbai, Delhi, Bengaluru, Pune, Hyderabad, Ahmedabad.</h2>
            </div>
            <Link to="/find-chapter" className="btn btn-gold">Open the map</Link>
          </div>
        </div>
      </section>
    </>
  )
}
