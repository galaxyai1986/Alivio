import { useState } from 'react'
import { professions } from '../data.js'

const path = [
  { n: '01', title: 'Talk to a city lead', body: 'We check open categories nearby and whether a new room is the honest move — or a visit to an existing chapter.' },
  { n: '02', title: 'Hold an interest meeting', body: 'Twelve to twenty professionals. Same agenda as a live chapter, minus the closed-business pass.' },
  { n: '03', title: 'Form the core group', body: 'Lock six exclusive seats, pick a weekly slot, and launch. A director sits with you for the first eight weeks.' },
]

export default function StartChapter() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', city: '', craft: '' })

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="kicker">Start a chapter</div>
          <h1>If your seat is taken, build the next room.</h1>
          <p>New chapters launch when a craft is full nearby or a city has density and no weekly agenda. We do not plant competing rooms on the same street.</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap grid-2">
          <div className="steps" style={{ gridTemplateColumns: '1fr' }}>
            {path.map((s) => (
              <article className="step" key={s.n} style={{ borderRight: 0, borderBottom: '1px solid var(--line)', padding: '18px 0' }}>
                <div className="n">{s.n}</div>
                <h3>{s.title}</h3>
                <p style={{ color: 'var(--muted)', marginTop: 8 }}>{s.body}</p>
              </article>
            ))}
          </div>
          <div className="card">
            {sent ? (
              <div className="ok">
                Thanks {form.name}. A city lead will write to {form.email} within two working days.
              </div>
            ) : (
              <form className="form" onSubmit={submit}>
                <h3>Tell us where to plant.</h3>
                <label>Name
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </label>
                <label>Email
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </label>
                <label>City
                  <input required value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
                </label>
                <label>Your craft
                  <select required value={form.craft} onChange={(e) => setForm({ ...form, craft: e.target.value })}>
                    <option value="">Select</option>
                    {professions.map((p) => <option key={p}>{p}</option>)}
                  </select>
                </label>
                <button className="btn btn-ink" type="submit">Request a conversation</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
