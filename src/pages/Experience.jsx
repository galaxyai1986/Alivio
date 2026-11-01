import { Link } from 'react-router-dom'
import { meetingTypes, benefits, faqs, stories } from '../data.js'

const agenda = [
  { t: '07:30', item: 'Doors, coffee, name tents' },
  { t: '07:40', item: 'Open, visitor welcome, 60-second pitches' },
  { t: '08:10', item: 'Feature presentation (one member, 10 min)' },
  { t: '08:25', item: 'Referral pass + closed business' },
  { t: '08:45', item: '1-to-1 bookings for the week' },
  { t: '09:00', item: 'Close. Room clears. Pipeline stays.' },
]

export default function Experience() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="kicker">The Nexora room</div>
          <h1>Ninety minutes. A timed agenda. Work that can be counted.</h1>
          <p>Word of mouth still closes more business than ads. Nexora turns that instinct into a weekly operating system — exclusive seats, public numbers, and a meeting you can describe in one breath.</p>
          <div style={{ marginTop: 22 }}>
            <Link to="/find-chapter" className="btn btn-gold">Sit in on a meeting</Link>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap grid-2">
          <div>
            <div className="kicker">Weekly agenda</div>
            <h2>The same clock in every city.</h2>
            <p style={{ color: 'var(--muted)', margin: '12px 0 24px' }}>In person, hybrid, or online — the agenda does not drift. That is why visitors feel the room on the first visit.</p>
            {agenda.map((a) => (
              <div key={a.t} className="row" style={{ display: 'flex', gap: 18, padding: '12px 0', borderTop: '1px solid var(--line)' }}>
                 <b className="agenda-time">{a.t}</b>
                <span>{a.item}</span>
              </div>
            ))}
          </div>
           <div className="card panel-card">
            <div className="kicker">What you walk out with</div>
            <h3 className="serif" style={{ fontSize: 36, fontWeight: 400, margin: '12px 0 18px' }}>Not a stack of cards. A tracked introduction.</h3>
             <p className="hero-muted">Every referral has a giver, a receiver, a client context, and a rupee value when it closes. Your chapter can see the trail.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="kicker">Three ways to meet</div>
              <h2>Pick the room that fits how you work.</h2>
            </div>
          </div>
          <div className="grid-3">
            {meetingTypes.map((m) => (
              <article className="card" key={m.title}>
                <h3>{m.title}</h3>
                <p style={{ color: 'var(--muted)', marginTop: 8 }}>{m.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <div className="section-head">
            <div>
              <div className="kicker">Member advantages</div>
              <h2>Built to beat a brochure network.</h2>
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
        <div className="wrap grid-2">
          <div>
            <div className="kicker">From the room</div>
            <h2>Members, not slogans.</h2>
            <div style={{ display: 'grid', gap: 16, marginTop: 24 }}>
              {stories.slice(0, 3).map((s) => (
                <article className="card" key={s.id}>
                  <p className="quote">“{s.quote}”</p>
                  <p className="person">{s.name} · {s.role} · {s.city}</p>
                </article>
              ))}
            </div>
            <Link to="/stories" className="btn btn-ghost" style={{ marginTop: 18 }}>All stories</Link>
          </div>
          <div className="faq">
            <div className="kicker">FAQ</div>
            <h2 style={{ marginBottom: 12 }}>Straight answers.</h2>
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
