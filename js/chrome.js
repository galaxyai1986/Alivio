(function () {
  const THEME_KEY = 'alivio-theme';
  const saved = localStorage.getItem(THEME_KEY) || 'light';
  document.documentElement.setAttribute('data-theme', saved);

  const page = document.body.dataset.page || '';
  const file = (location.pathname.split('/').pop() || 'index.html');
  const header = `
  <div class="cursor" id="cursor"></div>
  <div class="cursor-ring" id="ring"></div>
  <div class="preloader" id="preloader"><div class="loader-mark">Alivio</div></div>
  <header id="header">
    <div class="nav">
      <a class="logo hover-text" href="index.html" data-magnetic>Alivio</a>
      <nav class="nav-pill">
        <a href="experience.html" class="${page==='experience'?'active':''}">The Alivio Experience</a>
        <a href="community.html" class="${page==='community'?'active':''}">Our Global Community</a>
        <a href="stories.html" class="${page==='stories'?'active':''}">My Alivio Story</a>
        <a href="franchise.html" class="${page==='franchise'?'active':''}">Alivio Franchising</a>
        <div class="dropdown" id="aboutDropdown">
          <button type="button" class="nav-drop" id="aboutDrop" aria-haspopup="true" aria-expanded="false">About Alivio ▾</button>
          <div class="dropdown-menu">
            <a href="about.html">About Us</a>
            <a href="leadership.html">Leadership</a>
            <a href="founder.html">Our Founder</a>
            <a href="foundation.html">Alivio Foundation</a>
            <a href="careers.html">Careers</a>
          </div>
        </div>
      </nav>
      <div class="nav-right">
        <a class="mail" href="mailto:support@alivio.com">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/></svg>
          support@alivio.com
        </a>
        <button class="theme-toggle" id="themeToggle" type="button" aria-label="Toggle color theme" title="Toggle light / dark" data-magnetic>
          <svg class="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5z"/></svg>
          <svg class="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
        </button>
        <a class="btn" href="invite.html" data-magnetic>GET INVITED</a>
        <button class="hamburger" id="ham" aria-label="Menu"><span></span><span></span><span></span></button>
      </div>
    </div>
    <div class="mobile-menu" id="mobileMenu">
      <a href="experience.html">The Alivio Experience</a>
      <a href="community.html">Our Global Community</a>
      <a href="stories.html">My Alivio Story</a>
      <a href="franchise.html">Alivio Franchising</a>
      <a href="about.html">About Us</a>
      <a href="invite.html">Get Invited</a>
      <a href="contact.html">Contact</a>
    </div>
  </header>`;

  const footer = `
  <footer id="site-footer">
    <div class="foot">
      <div>
        <div class="logo" style="font-size:28px;margin-bottom:12px">Alivio</div>
        <p class="foot-blurb">A weekly table of operators who trade warm introductions — and stay in the loop until the work is signed.</p>
        <p class="foot-addr">120 Neon Plaza, Suite 400<br>Austin, TX 78701</p>
      </div>
      <div>
        <h4>About Us</h4>
        <a href="about.html">About Us</a>
        <a href="leadership.html">Leadership</a>
        <a href="founder.html">Our Founder</a>
        <a href="foundation.html">Alivio Foundation</a>
      </div>
      <div>
        <h4>The Latest</h4>
        <a href="blog.html">Blog & Insights</a>
        <a href="tips.html">Networking Tips</a>
        <a href="events.html">Global Events</a>
        <a href="careers.html">Careers</a>
      </div>
      <div>
        <h4>Join Alivio</h4>
        <a href="chapters.html">Chapter Map</a>
        <a href="start-chapter.html">Start a Chapter</a>
        <a href="partners.html">Partner Program</a>
        <a href="contact.html">Contact Us</a>
      </div>
      <div>
        <h4>Member Services</h4>
        <a href="benefits.html">Exclusive Benefits</a>
        <a href="connect.html">Alivio Connect</a>
        <a href="academy.html">Alivio Academy</a>
        <a href="store.html">Alivio Store</a>
      </div>
    </div>
    <div class="copy">
      <span>© 2026 Alivio Global, LLC</span>
      <span><a href="cookie.html">Cookie Policy</a> · <a href="privacy.html">Privacy Policy</a> · <a href="terms.html">Terms</a></span>
    </div>
  </footer>
  <button class="chat" id="chatToggle" type="button" aria-label="Open Alivio assistant">
    <svg class="chat-icon" width="24" height="24" viewBox="0 0 24 24"><path d="M4 4h16v12H7l-3 3V4z"/></svg>
    <svg class="chat-close" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M6 6l12 12M18 6L6 18"/></svg>
  </button>
  <div class="chat-widget" id="chatWidget">
    <div class="chat-head">Alivio Assistant</div>
    <div class="chat-split">
      <div class="chat-qs">
        <button type="button" class="chat-q" data-a="Yes. Sit in as a guest this week. You will see a timed agenda and warm intros in the room. Most guests know within one hour if the table is theirs.">Can I visit before I join?</button>
        <button type="button" class="chat-q" data-a="The introducer stays on the thread until work is signed. You leave with a name, a number, and a follow-up this week — not a stack of cards.">Why is Alivio different?</button>
        <button type="button" class="chat-q" data-a="One person per craft. If you take the seat, nobody in that room competes with you. When members hear your trigger, the intro comes only to you.">Is my category exclusive?</button>
        <button type="button" class="chat-q" data-a="Most seats see a useful intro in 30–90 days if you show up, book 1-to-1s, and teach the room who to send you. Tuesday presence closes work.">How soon will I get work?</button>
        <button type="button" class="chat-q" data-a="Studio, hybrid, and online chapters run the same agenda. Travel or screens — you still get the hour, the intros, and Connect.">Can I join online?</button>
        <button type="button" class="chat-q" data-a="A membership circle interviews you, checks references, and votes. We hire slowly. If you are serious about the craft, the room wants you.">How do I get a seat?</button>
        <button type="button" class="chat-q" data-a="Connect is included: log 1-to-1s, pass intros, find operators in 64 countries. Academy trains you to brief the room so members can send you work.">What tools come with the seat?</button>
        <button type="button" class="chat-q" data-a="Use Find a Room. Nearby chapters land in your inbox within a business day. Arrive early, brief who you help, stay after. That is how Alivio starts.">How do I find a chapter?</button>
      </div>
      <div class="chat-reply">
        <div class="chat-answer" id="chatAnswer">Pick a question. We will give you a straight answer.</div>
        <a class="chat-cta" href="contact.html">Contact us to register →</a>
      </div>
    </div>
  </div>
  <nav class="app-tabbar" id="appTabbar">
    <a href="index.html" class="${file==='index.html'||file===''?'active':''}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 11 12 4l8 7"/><path d="M6 10v10h12V10"/></svg>
      <span>Home</span>
    </a>
    <a href="chapters.html" class="${file==='chapters.html'?'active':''}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="8"/><path d="M12 8v8M8 12h8"/></svg>
      <span>Rooms</span>
    </a>
    <a href="invite.html" class="tab-cta ${file==='invite.html'?'active':''}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
      <span>Invite</span>
    </a>
    <a href="stories.html" class="${file==='stories.html'?'active':''}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 4h14v16H5z"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>
      <span>Stories</span>
    </a>
    <button type="button" id="tabMore">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg>
      <span>More</span>
    </button>
  </nav>
  <div class="more-sheet" id="moreSheet">
    <div class="more-sheet-card">
      <div class="more-handle"></div>
      <a href="experience.html">The Alivio Experience</a>
      <a href="community.html">Our Global Community</a>
      <a href="franchise.html">Alivio Franchising</a>
      <a href="about.html">About Us</a>
      <a href="leadership.html">Leadership</a>
      <a href="contact.html">Contact</a>
      <a href="benefits.html">Member Benefits</a>
      <button type="button" id="moreClose">Close</button>
    </div>
  </div>`;

  function injectHeader() {
    if (document.getElementById('header')) return;
    document.body.insertAdjacentHTML('afterbegin', header);
  }

  function injectFooter() {
    if (document.getElementById('site-footer')) return;
    const main = document.querySelector('main');
    if (main) main.insertAdjacentHTML('afterend', footer);
    else document.body.insertAdjacentHTML('beforeend', footer);
  }

  function bindTheme() {
    const btn = document.getElementById('themeToggle');
    if (!btn || btn.dataset.bound) return;
    btn.dataset.bound = '1';
    btn.addEventListener('click', () => {
      const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem(THEME_KEY, next);
    });
  }

  function bindDropdown() {
    const wrap = document.getElementById('aboutDropdown');
    const btn = document.getElementById('aboutDrop');
    if (!wrap || !btn || btn.dataset.bound) return;
    btn.dataset.bound = '1';
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const open = wrap.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    wrap.querySelectorAll('.dropdown-menu a').forEach((a) => {
      a.addEventListener('click', () => { wrap.classList.remove('open'); });
    });
    document.addEventListener('click', (e) => {
      if (!wrap.contains(e.target)) {
        wrap.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  function bindChat() {
    const toggle = document.getElementById('chatToggle');
    const widget = document.getElementById('chatWidget');
    const answer = document.getElementById('chatAnswer');
    if (!toggle || !widget || toggle.dataset.bound) return;
    toggle.dataset.bound = '1';
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = widget.classList.toggle('open');
      toggle.classList.toggle('open', open);
    });
    widget.querySelectorAll('.chat-q').forEach((btn) => {
      btn.addEventListener('click', () => {
        widget.querySelectorAll('.chat-q').forEach((b) => b.classList.remove('on'));
        btn.classList.add('on');
        answer.textContent = btn.dataset.a;
      });
    });
    document.addEventListener('click', (e) => {
      if (!widget.contains(e.target) && e.target !== toggle && !toggle.contains(e.target)) {
        widget.classList.remove('open');
        toggle.classList.remove('open');
      }
    });
  }

  function bindMoreSheet() {
    const more = document.getElementById('tabMore');
    const sheet = document.getElementById('moreSheet');
    const close = document.getElementById('moreClose');
    if (!more || !sheet || more.dataset.bound) return;
    more.dataset.bound = '1';
    const hide = () => sheet.classList.remove('open');
    more.addEventListener('click', (e) => {
      e.stopPropagation();
      sheet.classList.toggle('open');
    });
    if (close) close.addEventListener('click', hide);
    sheet.addEventListener('click', (e) => { if (e.target === sheet) hide(); });
  }

  function mount() {
    injectHeader();
    injectFooter();
    bindTheme();
    bindDropdown();
    bindMoreSheet();
    bindChat();
  }

  injectHeader();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
  window.addEventListener('load', mount);
})();
