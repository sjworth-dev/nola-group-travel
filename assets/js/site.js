/* NOLA Group Travel — progressive enhancements (no dependencies) */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------------- theme */
  var themeBtn = document.querySelector('.theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var root = document.documentElement;
      var current = root.getAttribute('data-theme');
      if (!current) {
        var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        current = prefersDark ? 'dark' : 'light';
      }
      var next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('ngt-theme', next); } catch (e) {}
    });
  }

  /* --------------------------------------------------------------- header */
  var header = document.querySelector('.site-header');
  if (header) {
    var onScrollHeader = function () {
      header.classList.toggle('is-stuck', window.scrollY > 12);
    };
    window.addEventListener('scroll', onScrollHeader, { passive: true });
    onScrollHeader();
  }

  /* Mobile navigation toggle */
  var toggle = document.querySelector('.mobile-menu-toggle');
  if (toggle && header) {
    toggle.addEventListener('click', function () {
      header.classList.toggle('nav-open');
    });
    /* On mobile, dropdown triggers expand their menu instead of hover */
    document.querySelectorAll('.nav-dropdown-trigger').forEach(function (btn) {
      btn.addEventListener('click', function () {
        btn.parentElement.classList.toggle('open');
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') header.classList.remove('nav-open');
    });
  }

  /* ------------------------------------------------------- reading progress */
  var progress = document.querySelector('.progress');
  var articleEl = document.querySelector('.guide-content');
  if (progress && articleEl) {
    var updateProgress = function () {
      var rect = articleEl.getBoundingClientRect();
      var start = window.scrollY + rect.top;
      var span = rect.height - window.innerHeight * 0.6;
      var pct = span > 0 ? (window.scrollY - start + window.innerHeight * 0.4) / span : 1;
      progress.style.transform = 'scaleX(' + Math.min(1, Math.max(0, pct)) + ')';
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    updateProgress();
  }

  /* ------------------------------------------------------------------ TOC */
  var tocBox = document.querySelector('.guide-toc');
  if (tocBox && articleEl) {
    var heads = Array.prototype.slice.call(articleEl.querySelectorAll('h2'));
    if (heads.length < 2) {
      tocBox.classList.add('empty');
    } else {
      var ol = tocBox.querySelector('ol');
      heads.forEach(function (h, i) {
        if (!h.id) h.id = 'section-' + (i + 1);
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = '#' + h.id;
        a.textContent = h.textContent;
        li.appendChild(a);
        ol.appendChild(li);
      });
      var links = ol.querySelectorAll('a');
      var setCurrent = function () {
        var y = window.scrollY + 140;
        var current = 0;
        heads.forEach(function (h, i) {
          if (h.getBoundingClientRect().top + window.scrollY <= y) current = i;
        });
        links.forEach(function (a, i) { a.classList.toggle('current', i === current); });
      };
      window.addEventListener('scroll', setCurrent, { passive: true });
      setCurrent();
    }
  }

  /* Wrap wide guide tables so they scroll instead of breaking layout */
  if (articleEl) {
    articleEl.querySelectorAll('table').forEach(function (t) {
      if (t.parentNode && t.parentNode.classList.contains('table-wrap')) return;
      var wrap = document.createElement('div');
      wrap.className = 'table-wrap';
      t.parentNode.insertBefore(wrap, t);
      wrap.appendChild(t);
    });
  }

  /* --------------------------------------------------------- scroll reveal */
  var revealables = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
  if (revealables.length) {
    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealables.forEach(function (el) { el.classList.add('is-in'); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

      var revealInView = function () {
        var stillHidden = false;
        revealables.forEach(function (el) {
          if (el.classList.contains('is-in')) return;
          if (el.getBoundingClientRect().top < window.innerHeight * 0.92) el.classList.add('is-in');
          else stillHidden = true;
        });
        return stillHidden;
      };

      /* anything already on screen at load shows immediately — no flash */
      revealInView();
      revealables.forEach(function (el) { if (!el.classList.contains('is-in')) io.observe(el); });

      /* Belt and braces: observers do not fire in a hidden/prerendered tab, and
         nothing on this site may end up permanently invisible. Re-check on
         scroll, and reveal everything unconditionally after a few seconds. */
      var onScrollReveal = function () {
        if (!revealInView()) window.removeEventListener('scroll', onScrollReveal);
      };
      window.addEventListener('scroll', onScrollReveal, { passive: true });
      setTimeout(function () {
        revealables.forEach(function (el) { el.classList.add('is-in'); });
      }, 3000);
    }
  }

  /* --------------------------------------------------------- library search */
  var search = document.querySelector('[data-guide-search]');
  if (search) {
    var items = Array.prototype.slice.call(document.querySelectorAll('.toc-item'));
    var sections = Array.prototype.slice.call(document.querySelectorAll('.toc-section[data-cat]'));
    var noResults = document.querySelector('.no-results');
    search.addEventListener('input', function () {
      var q = search.value.trim().toLowerCase();
      var shown = 0;
      items.forEach(function (item) {
        var hit = !q || item.textContent.toLowerCase().indexOf(q) !== -1;
        item.style.display = hit ? '' : 'none';
        if (hit) shown++;
      });
      sections.forEach(function (sec) {
        var any = Array.prototype.some.call(sec.querySelectorAll('.toc-item'), function (i) { return i.style.display !== 'none'; });
        sec.style.display = any ? '' : 'none';
      });
      if (noResults) noResults.style.display = shown ? 'none' : 'block';
    });
  }
})();
