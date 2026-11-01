import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const links = [
  { to: '/experience', label: 'The room' },
  { to: '/community', label: 'Cities' },
  { to: '/stories', label: 'Stories' },
  { to: '/benefits', label: 'Seat & pricing' },
  { to: '/about', label: 'About' },
]

export default function Layout() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('nexora-theme') || 'light')
  const loc = useLocation()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('nexora-theme', theme)
  }, [theme])

  useEffect(() => {
    setOpen(false)
    window.scrollTo(0, 0)
  }, [loc.pathname])

  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <NavLink to="/" className="brand">
            <span className="brand-mark">N</span>
            NEXORA
          </NavLink>
          <nav className="nav-links">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to}>
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="nav-cta">
            <NavLink to="/start-chapter" className="btn btn-ghost">Start a chapter</NavLink>
            <NavLink to="/find-chapter" className="btn btn-ink">Visit a chapter</NavLink>
            <button className="theme-btn" type="button" onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} aria-label="Toggle theme">
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
            <button className="menu-btn" onClick={() => setOpen((v) => !v)} aria-label="Menu">Menu</button>
          </div>
        </div>
        <div className={`wrap mobile-panel ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to}>{l.label}</NavLink>
          ))}
          <NavLink to="/start-chapter">Start a chapter</NavLink>
          <NavLink to="/find-chapter">Visit a chapter</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </header>
      <Outlet />
      <footer className="footer">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <div className="brand" style={{ marginBottom: 14 }}>
                <span className="brand-mark">N</span>
                NEXORA
              </div>
              <p className="muted" style={{ maxWidth: 320 }}>
                A structured referral network. One exclusive seat per profession. Weekly rooms that close real work.
              </p>
            </div>
            <div>
              <div className="kicker" style={{ marginBottom: 10 }}>Explore</div>
              <NavLink to="/experience">The room</NavLink>
              <NavLink to="/find-chapter">Find a chapter</NavLink>
              <NavLink to="/stories">Member stories</NavLink>
              <NavLink to="/community">Global cities</NavLink>
            </div>
            <div>
              <div className="kicker" style={{ marginBottom: 10 }}>Join</div>
              <NavLink to="/benefits">Seat & pricing</NavLink>
              <NavLink to="/start-chapter">Start a chapter</NavLink>
              <NavLink to="/about">About Nexora</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
            <div>
              <div className="kicker" style={{ marginBottom: 10 }}>HQ</div>
              <p className="muted" style={{ fontSize: 14 }}>
                Nexora Collective Pvt. Ltd.<br />
                14, Nariman Point, Mumbai 400021<br />
                hello@nexora.network
              </p>
            </div>
          </div>
          <div className="legal">
            <span>© 2026 Nexora Collective. Demo marketing site. Not affiliated with any other network.</span>
            <span>Privacy · Terms · Cookies</span>
          </div>
        </div>
      </footer>
    </>
  )
}
