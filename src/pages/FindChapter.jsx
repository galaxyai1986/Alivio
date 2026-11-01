import { useMemo, useState } from 'react'
import { chapters, professions } from '../data.js'

const modes = ['All', 'In person', 'Hybrid', 'Online']

export default function FindChapter() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({ name: '', email: '', phone: '', profession: '', city: '' })
  const [mode, setMode] = useState('All')
  const [picked, setPicked] = useState(null)
  const [done, setDone] = useState(false)

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const list = useMemo(() => {
    return chapters.filter((c) => {
      const modeOk = mode === 'All' || c.mode === mode
      const cityOk = !form.city || c.city.toLowerCase().includes(form.city.toLowerCase()) || c.region.toLowerCase().includes(form.city.toLowerCase())
      const profOk = !form.profession || c.open.includes(form.profession) || c.taken.includes(form.profession)
      return modeOk && cityOk && profOk
    })
  }, [mode, form.city, form.profession])

  const next = () => setStep((s) => Math.min(s + 1, 4))
  const back = () => setStep((s) => Math.max(s - 1, 0))

  if (done && picked) {
    return (
      <section className="page-hero">
        <div className="wrap" style={{ maxWidth: 640 }}>
          <div className="kicker">You’re on the list</div>
          <h1>See you at {picked.name}.</h1>
          <p>{form.name}, a chapter host will mail {form.email} with the {picked.day} {picked.time} details. Add it to your calendar — first two visits are free.</p>
          <div className="card" style={{ marginTop: 24 }}>
            <h3>{picked.name}</h3>
            <p className="meta">{picked.mode} · {picked.day} {picked.time} · {picked.venue}</p>
            {form.profession && (
              <p style={{ marginTop: 12 }}>
                Your craft: <b>{form.profession}</b> — {picked.open.includes(form.profession) ? 'seat is open.' : 'seat is currently taken. Visit anyway or try a nearby room.'}
              </p>
            )}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="page-hero">
      <div className="wrap" style={{ maxWidth: 880 }}>
        <div className="kicker">Find a chapter</div>
        <h1>{step < 4 ? `Let’s get you in the room, ${form.name || 'friend'}.` : 'Pick a chapter.'}</h1>
        <p>A short wizard. Then live chapter cards — open seats, average deal, next meeting.</p>
        <div className="wizard-progress">
          {[0, 1, 2, 3, 4].map((i) => <span key={i} className={i <= step ? 'on' : ''} />)}
        </div>

        {step === 0 && (
          <form className="form" onSubmit={(e) => { e.preventDefault(); if (form.name.trim()) next() }}>
            <label>What’s your name?
              <input value={form.name} onChange={(e) => set('name', e.target.value)} placeholder="e.g. Ananya Rao" required />
            </label>
            <button className="btn btn-ink" type="submit">Continue</button>
          </form>
        )}

        {step === 1 && (
          <form className="form" onSubmit={(e) => { e.preventDefault(); if (form.email.includes('@')) next() }}>
            <label>Where should we send the invite?
              <input type="email" value={form.email} onChange={(e) => set('email', e.target.value)} placeholder="you@studio.com" required />
            </label>
            <p className="person">People trust a named introduction 7× more than an ad. That’s the whole product.</p>
            <div style={{ display: 'flex', gap: 10 }}>
              <button className="btn btn-ghost" type="button" onClick={back}>Back</button>
              <button className="btn btn-ink" type="submit">Continue</button>
            </div>
          </form>
        )}

        {step === 2 && (
          <form className="form" onSubmit={(e) => { e.preventDefault(); next() }}>
            <label>Phone (optional)
              <input value={form.phone} onChange={(e) => set('phone', e.target.value)} placeholder="+91 98xxx xxxxx" />
            </label>
            <div style={{ display: 'flex', gap: 10 }}>
              <button className="btn btn-ghost" type="button" onClick={back}>Back</button>
              <button className="btn btn-ink" type="submit">Continue</button>
            </div>
          </form>
        )}

        {step === 3 && (
          <form className="form" onSubmit={(e) => { e.preventDefault(); next() }}>
            <label>What do you do?
              <select value={form.profession} onChange={(e) => set('profession', e.target.value)} required>
                <option value="">Select your craft</option>
                {professions.map((p) => <option key={p}>{p}</option>)}
              </select>
            </label>
            <label>City or region
              <input value={form.city} onChange={(e) => set('city', e.target.value)} placeholder="Mumbai, Bengaluru, Pan-India…" />
            </label>
            <div style={{ display: 'flex', gap: 10 }}>
              <button className="btn btn-ghost" type="button" onClick={back}>Back</button>
              <button className="btn btn-ink" type="submit">Show chapters</button>
            </div>
          </form>
        )}

        {step === 4 && (
          <div>
            <div className="filters">
              {modes.map((m) => (
                <button key={m} className={`filter ${mode === m ? 'on' : ''}`} onClick={() => setMode(m)}>{m}</button>
              ))}
            </div>
            <div style={{ display: 'grid', gap: 14 }}>
              {list.map((c) => {
                const open = form.profession && c.open.includes(form.profession)
                const taken = form.profession && c.taken.includes(form.profession)
                return (
                  <article className="card chapter" key={c.id}>
                    <div className="chapter-top">
                      <div>
                        <h3>{c.name}</h3>
                        <p className="meta">{c.city} · {c.day} {c.time} · {c.venue}</p>
                      </div>
                      <span className={`badge ${c.mode === 'Online' ? 'gold' : ''}`}>{c.mode}</span>
                    </div>
                    <p className="meta">{c.members} members · {c.openSeats} open seats · avg deal {c.avgDeal} · closed {c.closedYtd}</p>
                    {form.profession && (
                      <p style={{ fontSize: 14 }}>
                         {open && <b className="open-seat">{form.profession} seat is open.</b>}
                        {taken && <b>{form.profession} is taken here — visit as a guest or pick another room.</b>}
                      </p>
                    )}
                    <div className="seats">
                      {c.open.slice(0, 6).map((s) => <span className="chip open" key={s}>{s}</span>)}
                    </div>
                    <div>
                      <button className="btn btn-ink" onClick={() => { setPicked(c); setDone(true) }}>Request this invite</button>
                    </div>
                  </article>
                )
              })}
              {list.length === 0 && <p>No chapters match. Try another city or mode.</p>}
            </div>
            <button className="btn btn-ghost" style={{ marginTop: 16 }} onClick={back}>Back</button>
          </div>
        )}
      </div>
    </section>
  )
}
