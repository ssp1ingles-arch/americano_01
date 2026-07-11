(function () {
  'use strict';

  var scriptEl = document.currentScript;
  var rawSrc = scriptEl ? scriptEl.getAttribute('src') : 'nav.js';
  var base = rawSrc.replace(/nav\.js(\?.*)?$/, ''); // e.g. '../' or '../../'

  var SYSTEMS = [
    {id: 's1', href: base + 'sistema1/index.html', icon: '⚡', label: 'Sistema 1 — Base Completa', color: '#64DFDF'},
    {id: 's2', href: base + 'sistema2/index.html', icon: '💡', label: 'Sistema 2 — Inglês Real', color: '#F5C518'},
    {id: 's3', href: base + 'sistema3/index.html', icon: '⚡', label: 'Sistema 3 — Gramática Viva', color: '#A78BFA'},
    {id: 's4', href: base + 'sistema4/index.html', icon: '🎬', label: 'Sistema 4 — Inglês em Cena', color: '#FF6B6B'},
    {id: 's5', href: base + 'sistema5/index.html', icon: '⚡', label: 'Sistema 5 — Frases Relâmpago', color: '#10B981'},
    {id: 's6', href: base + 'sistema6/index.html', icon: '💬', label: 'Sistema 6 — Conversas do Dia a Dia', color: '#0EA5E9'},
    {id: 's7', href: base + 'sistema7/index.html', icon: '🔗', label: 'Sistema 7 — Colocações Naturais', color: '#D946EF'},
    {id: 's8', href: base + 'sistema8/index.html', icon: '🧱', label: 'Sistema 8 — Estruturas Fixas', color: '#F97316'},
    {id: 's9', href: base + 'sistema9/index.html', icon: '⏱️', label: 'Sistema 9 — Went ou Gone?', color: '#06B6D4'},
    {id: 's10', href: base + 'sistema10/index.html', icon: '📊', label: 'Sistema 10 — Teste seu Nível', color: '#84CC16'},
  ];

  var path = window.location.pathname;
  var activeSystem = null;
  for (var i = 0; i < SYSTEMS.length; i++) {
    var m = SYSTEMS[i].href.match(/sistema(\d+)\/index\.html$/);
    if (m && path.indexOf('/sistema' + m[1] + '/') !== -1) { activeSystem = SYSTEMS[i].id; break; }
  }
  var isJornada = path.indexOf('/jornada/') !== -1;

  // ── CSS ───────────────────────────────────────────────────────────────────
  var css = ''
    + '.site-nav{position:fixed;top:0;left:0;right:0;z-index:1000;height:48px;background:#080c14;border-bottom:1px solid rgba(255,255,255,0.07);display:flex;align-items:center;padding:0 1.25rem;gap:.6rem;}'
    + '.site-nav-logo{font-family:"Space Grotesk",sans-serif;font-size:.88rem;font-weight:700;color:#fff;text-decoration:none;display:flex;align-items:center;gap:.45rem;margin-right:auto;flex-shrink:0;}'
    + '.site-nav-logo span{opacity:.55;font-size:1rem;}'
    + '.site-nav-dd{position:relative;flex-shrink:0;}'
    + '.site-nav-trigger{font-family:"Space Grotesk",sans-serif;font-size:.74rem;font-weight:700;padding:.32rem .85rem;border-radius:.4rem;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.04);color:#cbd3e6;cursor:pointer;transition:all .18s;display:flex;align-items:center;gap:.4rem;}'
    + '.site-nav-trigger:hover{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.22);}'
    + '.site-nav-trigger.open,.site-nav-trigger.has-active{border-color:rgba(255,255,255,.3);background:rgba(255,255,255,.08);}'
    + '.site-nav-trigger .dd-arrow{font-size:.6rem;transition:transform .18s;opacity:.7;}'
    + '.site-nav-trigger.open .dd-arrow{transform:rotate(180deg);}'
    + '.site-nav-menu{position:absolute;top:calc(100% + 8px);left:0;min-width:270px;background:#0f1621;border:1px solid rgba(255,255,255,.1);border-radius:.7rem;padding:.4rem;box-shadow:0 16px 40px rgba(0,0,0,.5);display:none;flex-direction:column;gap:.15rem;}'
    + '.site-nav-menu.open{display:flex;}'
    + '.site-nav-item{display:flex;align-items:center;gap:.55rem;padding:.55rem .7rem;border-radius:.5rem;text-decoration:none;font-family:"Space Grotesk",sans-serif;font-size:.78rem;font-weight:600;color:#cbd3e6;transition:background .15s;border-left:3px solid transparent;}'
    + '.site-nav-item:hover{background:rgba(255,255,255,.06);}'
    + '.site-nav-item.active{background:rgba(255,255,255,.05);}'
    + '.site-nav-jornada{font-family:"Space Grotesk",sans-serif;font-size:.74rem;font-weight:700;text-decoration:none;padding:.32rem .85rem;border-radius:.4rem;border:1px solid rgba(255,255,255,.18);color:#fff;background:linear-gradient(135deg,rgba(100,223,223,.12),rgba(245,197,24,.08),rgba(167,139,250,.12));transition:all .18s;flex-shrink:0;white-space:nowrap;}'
    + '.site-nav-jornada:hover,.site-nav-jornada.active{border-color:rgba(255,255,255,.32);background:linear-gradient(135deg,rgba(100,223,223,.18),rgba(245,197,24,.13),rgba(167,139,250,.18));}'
    + '@media(max-width:520px){.site-nav-logo{font-size:.76rem;}.site-nav-menu{left:auto;right:0;min-width:240px;}}';

  var styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // ── HTML ──────────────────────────────────────────────────────────────────
  var itemsHTML = SYSTEMS.map(function (s) {
    var activeCls = s.id === activeSystem ? ' active' : '';
    return '<a href="' + s.href + '" class="site-nav-item' + activeCls + '" style="border-left-color:' + s.color + '">'
      + '<span>' + s.icon + '</span><span>' + s.label + '</span></a>';
  }).join('');

  var triggerCls = 'site-nav-trigger' + (activeSystem ? ' has-active' : '');

  var navHTML = ''
    + '<nav class="site-nav" id="siteNav">'
    + '<a href="' + base + 'index.html" class="site-nav-logo"><span>◈</span> Inglês para Brasileiros</a>'
    + '<div class="site-nav-dd">'
    + '<button class="' + triggerCls + '" id="siteNavTrigger" type="button" aria-haspopup="true" aria-expanded="false">Sistemas <span class="dd-arrow">▾</span></button>'
    + '<div class="site-nav-menu" id="siteNavMenu">' + itemsHTML + '</div>'
    + '</div>'
    + '<a href="' + base + 'jornada/index.html" class="site-nav-jornada' + (isJornada ? ' active' : '') + '">🗺 Jornada</a>'
    + '</nav>';

  function mount() {
    var old = document.querySelector('nav.gnav');
    if (old) old.outerHTML = navHTML;
    else document.body.insertAdjacentHTML('afterbegin', navHTML);

    // Ensure page content isn't hidden under the fixed 48px nav bar.
    // Pages that already reserve space for it (padding-top >= 48px) are left untouched.
    var currentPad = parseFloat(window.getComputedStyle(document.body).paddingTop) || 0;
    if (currentPad < 48) document.body.style.paddingTop = '48px';

    var trigger = document.getElementById('siteNavTrigger');
    var menu = document.getElementById('siteNavMenu');
    if (!trigger || !menu) return;

    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = menu.classList.toggle('open');
      trigger.classList.toggle('open', isOpen);
      trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    document.addEventListener('click', function (e) {
      if (!menu.classList.contains('open')) return;
      if (menu.contains(e.target) || e.target === trigger) return;
      menu.classList.remove('open');
      trigger.classList.remove('open');
      trigger.setAttribute('aria-expanded', 'false');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) {
        menu.classList.remove('open');
        trigger.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
