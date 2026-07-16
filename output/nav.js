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
    {id: 's11', href: base + 'sistema11/index.html', icon: '🧭', label: 'Sistema 11 — Como Aprender Inglês', color: '#FB923C'},
    {id: 's12', href: base + 'sistema12/index.html', icon: '🌙', label: 'Sistema 12 — Rotina da Noite', color: '#818CF8'},
    {id: 's13', href: base + 'sistema13/index.html', icon: '📝', label: 'Sistema 13 — Vocabulário A1', color: '#2DD4BF'},
    {id: 's14', href: base + 'sistema14/index.html', icon: '💪', label: 'Sistema 14 — Vida Saudável', color: '#34D399'},
    {id: 's15', href: base + 'sistema15/index.html', icon: '💬', label: 'Sistema 15 — Expressões Idiomáticas', color: '#F59E0B'},
    {id: 's16', href: base + 'sistema16/index.html', icon: '🎬', label: 'Sistema 16 — Inglês com Filmes', color: '#7C3AED'},
    {id: 's17', href: base + 'sistema17/index.html', icon: '📈', label: 'Sistema 17 — Super Sentences', color: '#0EA5E9'},
    {id: 's18', href: base + 'sistema18/index.html', icon: '💬', label: 'Sistema 18 — How Was Your Day?', color: '#10B981'},
    {id: 's19', href: base + 'sistema19/index.html', icon: '🎧', label: 'Sistema 19 — Conversação Diária', color: '#EC4899'},
    {id: 's20', href: base + 'sistema20/index.html', icon: '🗣️', label: 'Sistema 20 — Conversas Reais', color: '#6366F1'},
    {id: 's21', href: base + 'sistema21/index.html', icon: '📖', label: 'Sistema 21 — The Birthday Party', color: '#B45309'},
    {id: 's22', href: base + 'sistema22/index.html', icon: '🗺️', label: 'Sistema 22 — Inglês para Situações Reais', color: '#0F766E'},
    {id: 's23', href: base + 'sistema23/index.html', icon: '🔤', label: 'Sistema 23 — Inglês do Zero', color: '#7C2D12'},
    {id: 's24', href: base + 'sistema24/index.html', icon: '🧠', label: 'Sistema 24 — Pense em Inglês', color: '#BE123C'},
    {id: 's25', href: base + 'sistema25/index.html', icon: '🎯', label: 'Sistema 25 — Super Sentences Vol. 2', color: '#1E40AF'},
    {id: 's26', href: base + 'sistema26/index.html', icon: '💬', label: 'Sistema 26 — Diálogos do Dia a Dia', color: '#6D28D9'},
    {id: 's27', href: base + 'sistema27/index.html', icon: '🎤', label: 'Sistema 27 — Shadowing com Propósito', color: '#047857'},
  ];

  var path = window.location.pathname;
  var activeSystem = null;
  for (var i = 0; i < SYSTEMS.length; i++) {
    var m = SYSTEMS[i].href.match(/sistema(\d+)\/index\.html$/);
    if (m && path.indexOf('/sistema' + m[1] + '/') !== -1) { activeSystem = SYSTEMS[i].id; break; }
  }
  var isJornada = path.indexOf('/jornada/') !== -1;

  // ── PROGRESSO: registrar visita ───────────────────────────────────────────
  // Painel principal (index.html) lê estas chaves para marcar sistemas visitados.
  try {
    if (activeSystem) localStorage.setItem(activeSystem + '_visited', 'true');
    if (isJornada) localStorage.setItem('jornada_visited', 'true');
  } catch (e) {}

  var activeNum = activeSystem ? parseInt(activeSystem.slice(1), 10) : 0;

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
    + '@media(max-width:520px){.site-nav-logo{font-size:.76rem;}.site-nav-menu{left:auto;right:0;min-width:240px;}}'
    // Próximo Passo (prev/next)
    + '.nav-nextstep{max-width:900px;margin:2.75rem auto 3rem;padding:0 1.25rem;position:relative;z-index:1;}'
    + '.nav-nextstep-h{font-family:"Space Grotesk",sans-serif;font-size:.68rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#6a7390;text-align:center;margin-bottom:1rem;}'
    + '.nav-nextstep-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem;}'
    + '.nav-ns-card{display:flex;flex-direction:column;gap:.25rem;padding:1rem 1.2rem;border-radius:.9rem;border:1px solid rgba(255,255,255,.08);background:#0f1621;text-decoration:none;transition:border-color .2s,transform .2s;min-height:64px;justify-content:center;}'
    + '.nav-ns-card:hover{border-color:rgba(255,255,255,.24);transform:translateY(-2px);}'
    + '.nav-ns-card.next{text-align:right;align-items:flex-end;}'
    + '.nav-ns-dir{font-family:"Space Grotesk",sans-serif;font-size:.64rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#6a7390;}'
    + '.nav-ns-name{font-family:"Space Grotesk",sans-serif;font-size:.9rem;font-weight:700;color:#e4ddd4;line-height:1.25;}'
    + '@media(max-width:560px){.nav-nextstep-grid{grid-template-columns:1fr;}.nav-ns-card.next{text-align:left;align-items:flex-start;}}'
    // FAB mobile (jornada)
    + '.nav-fab{display:none;}'
    + '@media(max-width:760px){.nav-fab{display:inline-flex;position:fixed;left:14px;bottom:14px;z-index:1050;align-items:center;gap:.4rem;padding:.7rem 1.05rem;border-radius:2rem;background:rgba(15,22,33,.96);border:1px solid rgba(255,255,255,.16);color:#e4ddd4;text-decoration:none;font-family:"Space Grotesk",sans-serif;font-size:.82rem;font-weight:700;box-shadow:0 6px 20px rgba(0,0,0,.45);min-height:44px;}}';

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

    // ── PRÓXIMO PASSO (prev/next) — apenas em páginas de sistema ──────────────
    if (activeNum && !document.querySelector('.nav-nextstep')) {
      var prevHref, prevName, nextHref, nextName;
      if (activeNum > 1) { prevHref = SYSTEMS[activeNum - 2].href; prevName = SYSTEMS[activeNum - 2].label; }
      else { prevHref = base + 'index.html'; prevName = 'Painel Principal'; }
      if (activeNum < 27) { nextHref = SYSTEMS[activeNum].href; nextName = SYSTEMS[activeNum].label; }
      else { nextHref = base + 'jornada/index.html'; nextName = 'Jornada Completa'; }

      var nsHTML = '<div class="nav-nextstep">'
        + '<div class="nav-nextstep-h">Concluiu este sistema? Continue:</div>'
        + '<div class="nav-nextstep-grid">'
        + '<a class="nav-ns-card prev" href="' + prevHref + '"><span class="nav-ns-dir">← Anterior</span><span class="nav-ns-name">' + prevName + '</span></a>'
        + '<a class="nav-ns-card next" href="' + nextHref + '"><span class="nav-ns-dir">Próximo →</span><span class="nav-ns-name">' + nextName + '</span></a>'
        + '</div></div>';
      document.body.insertAdjacentHTML('beforeend', nsHTML);
    }

    // ── FAB "← Painel" (mobile) — na Jornada ──────────────────────────────────
    if (isJornada && !document.querySelector('.nav-fab')) {
      document.body.insertAdjacentHTML('beforeend', '<a class="nav-fab" href="' + base + 'index.html">← Painel</a>');
    }

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
