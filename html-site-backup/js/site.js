(function () {
  var D = window.NEXORA
  var file = (location.pathname.split('/').pop() || 'index.html')
  if (!file || file.indexOf('.html') === -1) file = 'index.html'
  var links = [
    { href: 'experience.html', label: 'The room' },
    { href: 'community.html', label: 'Cities' },
    { href: 'stories.html', label: 'Stories' },
    { href: 'benefits.html', label: 'Seat & pricing' },
    { href: 'about.html', label: 'About' },
  ]
  var moreLinks = [
    { href: 'about.html', label: 'About us' },
    { href: 'contact.html', label: 'Contact us' },
    { href: 'blog.html', label: 'Blog' },
    { href: 'privacy.html', label: 'Privacy policy' },
    { href: 'terms.html', label: 'Terms & conditions' },
    { href: 'cookies.html', label: 'Cookies' },
  ]

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('nexora-theme', theme)
    var btn = document.querySelector('[data-theme-toggle]')
    if (btn) btn.textContent = theme === 'dark' ? 'Light' : 'Dark'
  }

  applyTheme(localStorage.getItem('nexora-theme') === 'dark' ? 'dark' : 'light')

  function navLink(l) {
    var on = file === l.href ? ' active' : ''
    return '<a class="' + on.trim() + '" href="' + l.href + '">' + l.label + '</a>'
  }

  var header = document.querySelector('[data-nav]')
  if (header) {
    header.className = 'nav'
    header.innerHTML =
      '<div class="wrap nav-inner">' +
        '<a class="brand" href="index.html"><span class="brand-mark">N</span>NEXORA</a>' +
        '<nav class="nav-links">' +
          links.map(navLink).join('') +
          '<div class="nav-drop" data-drop>' +
            '<button type="button">More</button>' +
            '<div class="drop">' + moreLinks.map(navLink).join('') + '</div>' +
          '</div>' +
        '</nav>' +
        '<div class="nav-cta">' +
          '<a class="btn btn-ghost" href="start-chapter.html">Start a chapter</a>' +
          '<a class="btn btn-ink" href="find-chapter.html">Visit a chapter</a>' +
          '<button class="theme-btn" type="button" data-theme-toggle>Dark</button>' +
          '<button class="menu-btn" type="button" data-menu aria-label="Menu">Menu</button>' +
        '</div>' +
      '</div>' +
      '<div class="wrap mobile-panel" data-mobile>' +
        links.map(navLink).join('') +
        moreLinks.map(navLink).join('') +
        '<a href="start-chapter.html">Start a chapter</a>' +
        '<a href="find-chapter.html">Visit a chapter</a>' +
      '</div>'
  }

  var footer = document.querySelector('[data-footer]')
  if (footer) {
    footer.className = 'footer'
    footer.innerHTML =
      '<div class="wrap">' +
        '<div class="footer-grid">' +
          '<div>' +
            '<div class="brand" style="margin-bottom:14px"><span class="brand-mark">N</span>NEXORA</div>' +
            '<p style="max-width:320px;opacity:.78">A structured referral network. One exclusive seat per profession. Weekly rooms that close real work.</p>' +
          '</div>' +
          '<div>' +
            '<div class="kicker" style="margin-bottom:10px">Explore</div>' +
            '<a href="experience.html">The room</a>' +
            '<a href="find-chapter.html">Find a chapter</a>' +
            '<a href="stories.html">Member stories</a>' +
            '<a href="community.html">Global cities</a>' +
          '</div>' +
          '<div>' +
            '<div class="kicker" style="margin-bottom:10px">Join</div>' +
            '<a href="benefits.html">Seat & pricing</a>' +
            '<a href="start-chapter.html">Start a chapter</a>' +
            '<a href="about.html">About Nexora</a>' +
            '<a href="contact.html">Contact</a>' +
            '<a href="blog.html">Blog</a>' +
            '<a href="privacy.html">Privacy</a>' +
            '<a href="terms.html">Terms</a>' +
          '</div>' +
          '<div>' +
            '<div class="kicker" style="margin-bottom:10px">HQ</div>' +
            '<p style="opacity:.78;font-size:14px">Nexora Collective Pvt. Ltd.<br>14, Nariman Point, Mumbai 400021<br>hello@nexora.network</p>' +
          '</div>' +
        '</div>' +
        '<div class="legal"><span>© 2026 Nexora Collective. Demo marketing site. Not affiliated with any other network.</span><span><a href="privacy.html">Privacy</a> · <a href="terms.html">Terms</a> · <a href="cookies.html">Cookies</a></span></div>' +
      '</div>'
  }

  applyTheme(document.documentElement.getAttribute('data-theme') || 'light')

  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-theme-toggle]')
    if (t) {
      applyTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark')
      return
    }
    if (e.target.closest('[data-menu]')) {
      document.querySelector('[data-mobile]').classList.toggle('open')
      return
    }
    var drop = e.target.closest('[data-drop]')
    if (drop) {
      drop.classList.toggle('open')
      return
    }
    document.querySelectorAll('[data-drop].open').forEach(function (el) { el.classList.remove('open') })
  })

  function countUp() {
    var nodes = document.querySelectorAll('[data-count]')
    nodes.forEach(function (el) {
      if (el.getAttribute('data-counted') === '1') return
      el.setAttribute('data-counted', '1')
      var target = Number(el.getAttribute('data-count'))
      var prefix = el.getAttribute('data-prefix') || ''
      var suffix = el.getAttribute('data-suffix') || ''
      var decimals = Number(el.getAttribute('data-decimals') || 0)
      var duration = 1600
      var start = performance.now()
      el.classList.add('drop')
      function tick(now) {
        var t = Math.min(1, (now - start) / duration)
        var eased = 1 - Math.pow(1 - t, 3)
        var value = target * eased
        var shown = decimals ? value.toFixed(decimals) : Math.round(value).toLocaleString('en-IN')
        el.textContent = prefix + shown + suffix
        if (t < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    })
  }

  function magneticButtons() {
    var radius = 140
    document.addEventListener('mousemove', function (e) {
      document.querySelectorAll('.btn').forEach(function (btn) {
        var r = btn.getBoundingClientRect()
        var cx = r.left + r.width / 2
        var cy = r.top + r.height / 2
        var dx = e.clientX - cx
        var dy = e.clientY - cy
        var dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < radius) {
          var pull = (radius - dist) / radius
          btn.style.transform = 'translate(' + (dx * 0.42 * pull) + 'px,' + (dy * 0.42 * pull) + 'px) scale(1.04)'
        } else {
          btn.style.transform = ''
        }
      })
    })
  }

  countUp()
  magneticButtons()

  var page = document.body.getAttribute('data-page')
  var inr = function (n) { return Number(n).toLocaleString('en-IN') }

  if (page === 'home') {
    var deals = document.getElementById('deals')
    var value = document.getElementById('value')
    var fee = document.getElementById('fee')
    var dealsOut = document.getElementById('deals-out')
    var valueOut = document.getElementById('value-out')
    var closedOut = document.getElementById('closed-out')
    var multiOut = document.getElementById('multi-out')
    function calc() {
      var d = Number(deals.value)
      var v = Number(value.value)
      var f = Number(fee.value)
      dealsOut.textContent = d
      valueOut.textContent = '₹' + inr(v)
      var closed = d * v
      closedOut.textContent = '₹' + inr(closed)
      multiOut.textContent = (closed / f).toFixed(1) + '× the seat fee. Demo math — your chapter’s live averages are on each chapter card.'
    }
    fee.innerHTML = D.pricing.map(function (p) {
      return '<option value="' + p.amount + '">' + p.tier + ' · ' + p.fee + '</option>'
    }).join('')
    ;[deals, value, fee].forEach(function (el) { el.addEventListener('input', calc) })
    calc()
    document.getElementById('ticker').innerHTML = D.stories.concat(D.stories).map(function (s) {
      return '<span class="ticker-item"><b>' + s.name + '</b> · ' + s.role + ', ' + s.city + ' — “' + s.quote.slice(0, 72) + '…”</span>'
    }).join('')
  }

  if (page === 'find') {
    var state = { step: 0, name: '', email: '', phone: '', profession: '', city: '', mode: 'All', picked: null, done: false }
    var root = document.getElementById('wizard')
    var modes = ['All', 'In person', 'Hybrid', 'Online']
    function list() {
      return D.chapters.filter(function (c) {
        var modeOk = state.mode === 'All' || c.mode === state.mode
        var cityOk = !state.city || c.city.toLowerCase().indexOf(state.city.toLowerCase()) !== -1 || c.region.toLowerCase().indexOf(state.city.toLowerCase()) !== -1
        var profOk = !state.profession || c.open.indexOf(state.profession) !== -1 || c.taken.indexOf(state.profession) !== -1
        return modeOk && cityOk && profOk
      })
    }
    function bars() {
      return '<div class="wizard-progress">' + [0, 1, 2, 3, 4].map(function (i) {
        return '<span class="' + (i <= state.step ? 'on' : '') + '"></span>'
      }).join('') + '</div>'
    }
    function render() {
      if (state.done && state.picked) {
        var p = state.picked
        var seat = ''
        if (state.profession) {
          seat = '<p style="margin-top:12px">Your craft: <b>' + state.profession + '</b> — ' + (p.open.indexOf(state.profession) !== -1 ? 'seat is open.' : 'seat is currently taken. Visit anyway or try a nearby room.') + '</p>'
        }
        root.innerHTML =
          '<div class="kicker">You’re on the list</div>' +
          '<h1>See you at ' + p.name + '.</h1>' +
          '<p>' + state.name + ', a chapter host will mail ' + state.email + ' with the ' + p.day + ' ' + p.time + ' details. Add it to your calendar — first two visits are free.</p>' +
          '<div class="card" style="margin-top:24px"><h3>' + p.name + '</h3><p class="meta">' + p.mode + ' · ' + p.day + ' ' + p.time + ' · ' + p.venue + '</p>' + seat + '</div>'
        return
      }
      var title = state.step < 4 ? 'Let’s get you in the room, ' + (state.name || 'friend') + '.' : 'Pick a chapter.'
      var body = bars()
      if (state.step === 0) {
        body += '<form class="form" id="wform"><label>What’s your name?<input name="name" value="' + state.name + '" placeholder="e.g. Ananya Rao" required></label><button class="btn btn-ink" type="submit">Continue</button></form>'
      } else if (state.step === 1) {
        body += '<form class="form" id="wform"><label>Where should we send the invite?<input type="email" name="email" value="' + state.email + '" placeholder="you@studio.com" required></label><p class="person">People trust a named introduction 7× more than an ad. That’s the whole product.</p><div style="display:flex;gap:10px"><button class="btn btn-ghost" type="button" data-back>Back</button><button class="btn btn-ink" type="submit">Continue</button></div></form>'
      } else if (state.step === 2) {
        body += '<form class="form" id="wform"><label>Phone (optional)<input name="phone" value="' + state.phone + '" placeholder="+91 98xxx xxxxx"></label><div style="display:flex;gap:10px"><button class="btn btn-ghost" type="button" data-back>Back</button><button class="btn btn-ink" type="submit">Continue</button></div></form>'
      } else if (state.step === 3) {
        body += '<form class="form" id="wform"><label>What do you do?<select name="profession" required><option value="">Select your craft</option>' +
          D.professions.map(function (p) { return '<option' + (state.profession === p ? ' selected' : '') + '>' + p + '</option>' }).join('') +
          '</select></label><label>City or region<input name="city" value="' + state.city + '" placeholder="Mumbai, Bengaluru, Pan-India…"></label><div style="display:flex;gap:10px"><button class="btn btn-ghost" type="button" data-back>Back</button><button class="btn btn-ink" type="submit">Show chapters</button></div></form>'
      } else {
        var cards = list().map(function (c) {
          var open = state.profession && c.open.indexOf(state.profession) !== -1
          var taken = state.profession && c.taken.indexOf(state.profession) !== -1
          var note = ''
          if (open) note = '<p style="font-size:14px"><b>' + state.profession + ' seat is open.</b></p>'
          if (taken) note = '<p style="font-size:14px"><b>' + state.profession + ' is taken here — visit as a guest or pick another room.</b></p>'
          return '<article class="card">' +
            '<div class="chapter-top"><div><h3>' + c.name + '</h3><p class="meta">' + c.city + ' · ' + c.day + ' ' + c.time + ' · ' + c.venue + '</p></div>' +
            '<span class="badge' + (c.mode === 'Online' ? ' gold' : '') + '">' + c.mode + '</span></div>' +
            '<p class="meta">' + c.members + ' members · ' + c.openSeats + ' open seats · avg deal ' + c.avgDeal + ' · closed ' + c.closedYtd + '</p>' +
            note +
            '<div class="seats">' + c.open.slice(0, 6).map(function (s) { return '<span class="chip open">' + s + '</span>' }).join('') + '</div>' +
            '<button class="btn btn-ink" type="button" data-pick="' + c.id + '">Request this invite</button></article>'
        }).join('') || '<p>No chapters match. Try another city or mode.</p>'
        body += '<div class="filters">' + modes.map(function (m) {
          return '<button type="button" class="filter' + (state.mode === m ? ' on' : '') + '" data-mode="' + m + '">' + m + '</button>'
        }).join('') + '</div><div class="stack">' + cards + '</div><button class="btn btn-ghost" style="margin-top:16px" type="button" data-back>Back</button>'
      }
      root.innerHTML = '<div class="kicker">Find a chapter</div><h1>' + title + '</h1><p>A short wizard. Then live chapter cards — open seats, average deal, next meeting.</p>' + body
    }
    root.addEventListener('submit', function (e) {
      e.preventDefault()
      var fd = new FormData(e.target)
      ;['name', 'email', 'phone', 'profession', 'city'].forEach(function (k) {
        if (fd.has(k)) state[k] = String(fd.get(k) || '')
      })
      if (state.step === 0 && !state.name.trim()) return
      if (state.step === 1 && state.email.indexOf('@') === -1) return
      state.step = Math.min(state.step + 1, 4)
      render()
    })
    root.addEventListener('click', function (e) {
      if (e.target.closest('[data-back]')) {
        state.step = Math.max(state.step - 1, 0)
        render()
        return
      }
      var mode = e.target.closest('[data-mode]')
      if (mode) {
        state.mode = mode.getAttribute('data-mode')
        render()
        return
      }
      var pick = e.target.closest('[data-pick]')
      if (pick) {
        state.picked = D.chapters.find(function (c) { return c.id === pick.getAttribute('data-pick') })
        state.done = true
        render()
      }
    })
    render()
  }

  if (page === 'stories') {
    var role = 'All'
    var country = 'All'
    var roles = ['All'].concat(Array.from(new Set(D.stories.map(function (s) { return s.role }))))
    var countries = ['All'].concat(Array.from(new Set(D.stories.map(function (s) { return s.country }))))
    var roleBar = document.getElementById('roles')
    var countryBar = document.getElementById('countries')
    var grid = document.getElementById('story-grid')
    function draw() {
      roleBar.innerHTML = roles.map(function (r) {
        return '<button type="button" class="filter' + (role === r ? ' on' : '') + '" data-role="' + r + '">' + r + '</button>'
      }).join('')
      countryBar.innerHTML = countries.map(function (c) {
        return '<button type="button" class="filter' + (country === c ? ' on' : '') + '" data-country="' + c + '">' + c + '</button>'
      }).join('')
      grid.innerHTML = D.stories.filter(function (s) {
        return (role === 'All' || s.role === role) && (country === 'All' || s.country === country)
      }).map(function (s) {
        return '<article class="card"><div class="badge">' + s.metric + '</div><p class="quote">“' + s.quote + '”</p><h3>' + s.name + '</h3><p class="person">' + s.role + ' · ' + s.company + ' · ' + s.city + ', ' + s.country + '</p></article>'
      }).join('')
    }
    roleBar.addEventListener('click', function (e) {
      var b = e.target.closest('[data-role]')
      if (!b) return
      role = b.getAttribute('data-role')
      draw()
    })
    countryBar.addEventListener('click', function (e) {
      var b = e.target.closest('[data-country]')
      if (!b) return
      country = b.getAttribute('data-country')
      draw()
    })
    draw()
  }

  if (page === 'community') {
    var region = 'All'
    var regions = ['All', 'Asia', 'Europe', 'Middle East', 'Africa', 'Americas']
    var bar = document.getElementById('regions')
    var grid = document.getElementById('city-grid')
    function draw() {
      bar.innerHTML = regions.map(function (r) {
        return '<button type="button" class="filter' + (region === r ? ' on' : '') + '" data-region="' + r + '">' + r + '</button>'
      }).join('')
      grid.innerHTML = D.countries.filter(function (c) {
        return region === 'All' || c.region === region
      }).map(function (c) {
        return '<article class="card"><div class="kicker">' + c.region + '</div><h3 style="margin:8px 0 14px">' + c.name + '</h3><div class="meta"><span>' + c.members + ' members</span><span>' + c.referrals + ' referrals</span><span>' + c.business + ' closed</span></div></article>'
      }).join('')
    }
    bar.addEventListener('click', function (e) {
      var b = e.target.closest('[data-region]')
      if (!b) return
      region = b.getAttribute('data-region')
      draw()
    })
    draw()
  }

  if (page === 'start') {
    var form = document.getElementById('start-form')
    var sel = form.querySelector('[name="craft"]')
    sel.innerHTML = '<option value="">Select</option>' + D.professions.map(function (p) { return '<option>' + p + '</option>' }).join('')
    form.addEventListener('submit', function (e) {
      e.preventDefault()
      var fd = new FormData(form)
      document.getElementById('start-card').innerHTML = '<div class="ok">Thanks ' + fd.get('name') + '. A city lead will write to ' + fd.get('email') + ' within two working days.</div>'
    })
  }

  if (page === 'contact') {
    document.getElementById('contact-form').addEventListener('submit', function (e) {
      e.preventDefault()
      document.getElementById('contact-card').innerHTML = '<div class="ok">Message noted. In production this would route to hello@nexora.network.</div>'
    })
  }

})()
