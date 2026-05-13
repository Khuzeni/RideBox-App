/* ═══════════════════════════════════════════════════
   RIDEBOX — Shared JavaScript
   Features: Cursor, Curtain, Nav scroll, Reveal, 
             Magnetic, Marquee, Modals, Counters
═══════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── Page Curtain Lift ─────────────────────────── */
  const curtain = document.getElementById('page-curtain');
  if (curtain) {
    requestAnimationFrame(() => {
      setTimeout(() => curtain.classList.add('is-lifted'), 80);
    });
  }

  /* ── Nav Scroll State ──────────────────────────── */
  const nav = document.querySelector('.site-nav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 50) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Active Nav Link ───────────────────────────── */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── Mobile Nav Toggle ─────────────────────────── */
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.nav-mobile');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const open = mobileNav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
    });
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── Scroll Reveal ─────────────────────────────── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll(
    '.fade-up, .fade-in, .clip-reveal, .reveal-line'
  ).forEach(el => observer.observe(el));

  // Trigger animations on initial load for hero section
  setTimeout(() => {
    document.querySelectorAll('.home-hero .fade-up, .home-hero .fade-in, .home-hero .reveal-line').forEach(el => {
      el.classList.add('visible');
    });
  }, 200);

  /* ── Count-Up Animation ────────────────────────── */
  function countUp(el) {
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 1600;
    const start = performance.now();
    const isFloat = String(target).includes('.');

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      el.textContent = prefix + (isFloat ? current.toFixed(1) : Math.round(current)) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        countUp(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-target]').forEach(el => countObserver.observe(el));

  /* ── Magnetic Button Effect ────────────────────── */
  document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * 0.28;
      const dy = (e.clientY - cy) * 0.28;
      btn.style.transform = `translate(${dx}px,${dy}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0,0)';
      btn.style.transition = 'transform .5s cubic-bezier(.16,1,.3,1)';
    });
    btn.addEventListener('mouseenter', () => {
      btn.style.transition = 'transform .15s';
    });
  });

  /* ── Cookie Banner ─────────────────────────────── */
  const banner = document.getElementById('cookieBanner');
  if (banner) {
    try {
      if (localStorage.getItem('rb_consent')) banner.style.display = 'none';
    } catch (e) {}
  }
  window.acceptCookies = function () {
    try { localStorage.setItem('rb_consent', '1'); } catch (e) {}
    if (banner) banner.style.display = 'none';
  };
  window.declineCookies = function () {
    try { localStorage.setItem('rb_consent', '0'); } catch (e) {}
    if (banner) banner.style.display = 'none';
  };

  /* ── Modal System ──────────────────────────────── */
  let lastFocus = null;

  window.openModal = function (id) {
    lastFocus = document.activeElement;
    const m = document.getElementById(id);
    if (!m) return;
    m.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    const closeBtn = m.querySelector('.modal-close');
    if (closeBtn) setTimeout(() => closeBtn.focus(), 50);
    m.addEventListener('keydown', trapFocus);
  };

  window.closeModal = function (id) {
    const m = document.getElementById(id);
    if (!m) return;
    m.style.display = 'none';
    document.body.style.overflow = '';
    m.removeEventListener('keydown', trapFocus);
    if (lastFocus) lastFocus.focus();
  };

  function trapFocus(e) {
    if (e.key === 'Escape') { closeModal(e.currentTarget.id); return; }
    if (e.key !== 'Tab') return;
    const m = e.currentTarget;
    const els = m.querySelectorAll('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])');
    const first = els[0], last = els[els.length - 1];
    if (e.shiftKey) { if (document.activeElement === first) { last.focus(); e.preventDefault(); } }
    else { if (document.activeElement === last) { first.focus(); e.preventDefault(); } }
  }

  window.addEventListener('click', e => {
    if (e.target.classList.contains('modal')) closeModal(e.target.id);
  });

  window.openLegal = function (type) {
    const map = { privacy: 'privacyModal', terms: 'termsModal', popia: 'popiaModal' };
    if (map[type]) openModal(map[type]);
  };

  /* ── FAQ Accordion ─────────────────────────────── */
  window.toggleFaq = function (btn) {
    const answer = btn.nextElementSibling;
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.faq-q').forEach(q => {
      q.setAttribute('aria-expanded', 'false');
      q.nextElementSibling.classList.remove('open');
    });
    if (!expanded) {
      btn.setAttribute('aria-expanded', 'true');
      answer.classList.add('open');
    }
  };

  /* ── Contact Form ──────────────────────────────── */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const status = document.getElementById('statusMsg');
      const submitBtn = contactForm.querySelector('[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'SENDING...';
      if (status) status.style.display = 'none';

      fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { Accept: 'application/json' }
      }).then(res => {
        if (status) {
          status.style.display = 'block';
          if (res.ok) {
            status.className = 'status-msg ok';
            status.textContent = '✓ Message received. We will be in touch shortly.';
            contactForm.reset();
          } else {
            status.className = 'status-msg err';
            status.textContent = '✕ Something went wrong. Please try again.';
          }
        }
      }).catch(() => {
        if (status) {
          status.style.display = 'block';
          status.className = 'status-msg err';
          status.textContent = '✕ Network error. Check your connection.';
        }
      }).finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
      });
    });
  }

  /* ── Team Page Nodes Pattern ───────────────────── */
  const nodesContainer = document.getElementById('nodesContainer');
  if (nodesContainer) {
    const width = nodesContainer.offsetWidth;
    const height = nodesContainer.offsetHeight;
    const nodeCount = Math.floor((width * height) / 2800);
    const nodes = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4
      });
    }

    const nodeEls = [];
    nodes.forEach((node) => {
      const div = document.createElement('div');
      div.className = 'node';
      div.style.left = node.x + 'px';
      div.style.top = node.y + 'px';
      nodesContainer.appendChild(div);
      nodeEls.push(div);
    });

    function animateNodes() {
      nodesContainer.querySelectorAll('.node-connection').forEach(el => el.remove());

      nodes.forEach((node, idx) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
        node.x = Math.max(0, Math.min(width, node.x));
        node.y = Math.max(0, Math.min(height, node.y));

        nodeEls[idx].style.left = node.x + 'px';
        nodeEls[idx].style.top = node.y + 'px';

        nodes.forEach((other, jdx) => {
          if (jdx > idx) {
            const dx = other.x - node.x;
            const dy = other.y - node.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 140) {
              const line = document.createElement('div');
              line.className = 'node-connection';
              line.style.position = 'absolute';
              line.style.left = node.x + 'px';
              line.style.top = node.y + 'px';
              line.style.height = '1px';
              line.style.width = dist + 'px';
              line.style.background = 'var(--white)';
              line.style.transform = `rotate(${Math.atan2(dy, dx)}rad)`;
              line.style.transformOrigin = '0 50%';
              line.style.opacity = '0.2';
              nodesContainer.appendChild(line);
            }
          }
        });
      });
      requestAnimationFrame(animateNodes);
    }
    animateNodes();
  }

})();
