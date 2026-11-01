import { useState } from 'react'
import { offices } from '../data.js'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="kicker">Contact</div>
          <h1>Write to the desk that actually answers.</h1>
          <p>Membership, forming chapters, press, or partnerships. Demo form — nothing leaves this browser.</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap grid-2">
          <div className="card">
            {sent ? (
              <div className="ok">Message noted. In production this would route to hello@nexora.network.</div>
            ) : (
              <form className="form" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
                <label>Name<input required /></label>
                <label>Email<input type="email" required /></label>
                <label>Topic
                  <select defaultValue="Membership">
                    <option>Membership</option>
                    <option>Start a chapter</option>
                    <option>Press</option>
                    <option>Partnerships</option>
                  </select>
                </label>
                <label>Message<textarea required placeholder="What do you need?" /></label>
                <button className="btn btn-ink" type="submit">Send</button>
              </form>
            )}
          </div>
          <div>
            <h3>HQ</h3>
            <p style={{ color: 'var(--muted)', margin: '8px 0 24px' }}>
              14, Nariman Point, Mumbai 400021<br />
              hello@nexora.network<br />
              +91 22 4000 1200
            </p>
            <div className="kicker" style={{ marginBottom: 12 }}>Offices</div>
            <div className="grid-2">
              {offices.map((o) => (
                <article className="card" key={o.city}>
                  <h3>{o.city}</h3>
                  <p className="person">{o.role}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
