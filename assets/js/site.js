/* NOLA Group Travel — progressive enhancements (no dependencies) */
(function () {
  'use strict';

  /* Mobile navigation toggle */
  var toggle = document.querySelector('.mobile-menu-toggle');
  var header = document.querySelector('.site-header');
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
  }

  /* Guide table of contents — built from h2s in the article */
  var tocBox = document.querySelector('.guide-toc');
  var article = document.querySelector('.guide-content');
  if (tocBox && article) {
    var heads = Array.prototype.slice.call(article.querySelectorAll('h2'));
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
        var y = window.scrollY + 120;
        var current = 0;
        heads.forEach(function (h, i) { if (h.offsetTop <= y) current = i; });
        links.forEach(function (a, i) { a.classList.toggle('current', i === current); });
      };
      window.addEventListener('scroll', setCurrent, { passive: true });
      setCurrent();
    }
  }

  /* Wrap wide guide tables so they scroll instead of breaking layout */
  if (article) {
    article.querySelectorAll('table').forEach(function (t) {
      var wrap = document.createElement('div');
      wrap.className = 'table-wrap';
      t.parentNode.insertBefore(wrap, t);
      wrap.appendChild(t);
    });
  }

  /* Library search — filters .toc-item cards by text */
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
