(function () {
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('ring');
  if (cursor && ring) {
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    });
    (function loop() {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      requestAnimationFrame(loop);
    })();
    const hoverables = 'a, button, .btn, .step, .stat, .video-card, summary, .t-card, .card, input, select, textarea';
    document.querySelectorAll(hoverables).forEach((el) => {
      el.addEventListener('mouseenter', () => { cursor.classList.add('hover'); ring.classList.add('hover'); });
      el.addEventListener('mouseleave', () => { cursor.classList.remove('hover'); ring.classList.remove('hover'); });
    });
  }

  document.querySelectorAll('[data-magnetic]').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const r = btn.getBoundingClientRect();
      btn.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.22}px, ${(e.clientY - r.top - r.height / 2) * 0.28}px)`;
    });
    btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
  });

  document.querySelectorAll('.hover-text').forEach((el) => {
    const walk = (node) => {
      [...node.childNodes].forEach((child) => {
        if (child.nodeType === 3) {
          const frag = document.createDocumentFragment();
          [...child.textContent].forEach((ch) => {
            if (ch === ' ' || ch === '\n' || ch === '\t') {
              frag.appendChild(document.createTextNode(ch));
            } else {
              const s = document.createElement('span');
              s.className = 'split-letter';
              s.textContent = ch;
              frag.appendChild(s);
            }
          });
          child.replaceWith(frag);
        } else if (child.nodeType === 1 && !child.classList.contains('rainbow-text') && !child.classList.contains('word-swap')) {
          walk(child);
        }
      });
    };
    walk(el);
    el.addEventListener('mouseenter', () => {
      el.classList.add('is-hot');
      el.querySelectorAll('.split-letter').forEach((s, i) => {
        s.style.transitionDelay = i * 16 + 'ms';
        s.style.transform = 'translateY(-4px)';
      });
    });
    el.addEventListener('mouseleave', () => {
      el.classList.remove('is-hot');
      el.querySelectorAll('.split-letter').forEach((s) => {
        s.style.transform = '';
        s.style.transitionDelay = '0ms';
      });
    });
  });

  const swap = document.getElementById('swap');
  if (swap) {
    const words = ['Calendar', 'Pipeline', 'Circle', 'Quarter'];
    let wi = 0;
    setInterval(() => {
      wi = (wi + 1) % words.length;
      swap.innerHTML = `<span class="rainbow-text">${words[wi]}</span>`;
    }, 2400);
  }

  const hero = document.getElementById('heroFrame');
  if (hero) {
    hero.addEventListener('mousemove', (e) => {
      const r = hero.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      hero.style.transform = `perspective(1200px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`;
    });
    hero.addEventListener('mouseleave', () => { hero.style.transform = ''; });
  }

  window.addEventListener('scroll', () => {
    const h = document.getElementById('header');
    if (h) h.classList.toggle('scrolled', window.scrollY > 8);
  });

  document.querySelectorAll('[data-count]').forEach((el) => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const target = parseFloat(el.dataset.count);
        const decimal = String(el.dataset.count).includes('.');
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min(1, (now - start) / 1400);
          const val = target * (1 - Math.pow(1 - p, 3));
          el.textContent = decimal ? val.toFixed(1) : Math.floor(val).toLocaleString();
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      });
    }, { threshold: 0.3 });
    io.observe(el);
  });

  const marquee = document.getElementById('marquee');
  if (marquee) marquee.innerHTML += marquee.innerHTML;

  const modal = document.getElementById('modal');
  const openVideo = document.getElementById('openVideo');
  if (modal && openVideo) {
    const vid = document.getElementById('modalVid');
    openVideo.addEventListener('click', () => {
      modal.classList.add('open');
      if (vid) { vid.currentTime = 0; vid.play(); }
    });
    const close = () => {
      modal.classList.remove('open');
      if (vid) vid.pause();
    };
    const closer = document.getElementById('closeModal');
    if (closer) closer.addEventListener('click', close);
    modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
  }

  window.addEventListener('load', () => {
    const p = document.getElementById('preloader');
    if (p) setTimeout(() => p.classList.add('hide'), 650);
  });

  const ham = document.getElementById('ham');
  const mobile = document.getElementById('mobileMenu');
  if (ham && mobile) {
    ham.addEventListener('click', () => {
      mobile.style.display = mobile.style.display === 'flex' ? 'none' : 'flex';
    });
  }

  document.querySelectorAll('.js-form').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const note = form.querySelector('.form-note');
      if (note) {
        note.textContent = 'Thank you. An Alivio advisor will reach out shortly.';
        note.style.color = '#39ff14';
      }
      form.reset();
    });
  });
})();
