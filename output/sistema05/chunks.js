/* Sistema 05 — Situar a Frase. Lista de itens (accordion) a partir de
   window.MOD_DATA (./data.js). Modo autoteste: esconder a coluna Português.
   Progresso por item (localStorage s05_progress). */
(function(){
  const M=window.MOD_DATA;
  if(!M){document.body.innerHTML='<p style="padding:6rem 2rem">Dados não carregados.</p>';return;}
  const PKEY='s05_progress';
  const esc=t=>(t||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const prog=()=>{try{return JSON.parse(localStorage.getItem(PKEY)||'{}');}catch(e){return {};}};
  const save=p=>{try{localStorage.setItem(PKEY,JSON.stringify(p));}catch(e){}};
  const key=w=>M.slug+'|'+w;

  document.getElementById('mhead-icon').textContent=M.icon;
  document.getElementById('mhead-title').textContent='Módulo '+M.id+' — '+M.title;
  document.getElementById('mhead-sub').textContent=M.sub;
  document.getElementById('nav-title').textContent='S05 · '+M.title;
  document.title='Sistema 05 · '+M.title;

  function noteClass(n){
    if(/RESUMO/.test(n))return 'sum';
    if(/🔴|❌|ERRO|CONFUS|nunca/.test(n))return 'err';
    if(/⚠/.test(n))return 'warn';
    return 'tip';
  }
  function cidx(header){
    let en=-1,pt=-1;
    header.forEach((h,i)=>{const H=h.toLowerCase();if(H.startsWith('ingl'))en=i;if(H.startsWith('portug'))pt=i;});
    return {en,pt};
  }
  function boldWord(en,word){
    const first=word.split('/')[0].trim().split(' ')[0].toLowerCase();
    if(!first)return esc(en);
    return esc(en).replace(new RegExp('\\b('+first.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+"\\w*)\\b",'i'),'<b>$1</b>');
  }

  const list=document.getElementById('list');
  function render(filter){
    list.innerHTML='';
    const p=prog();const f=(filter||'').trim().toLowerCase();
    const items=M.items.filter(it=>!f||it.word.toLowerCase().includes(f)||(it.pt||'').toLowerCase().includes(f));
    if(!items.length){list.innerHTML='<div class="empty">Nada encontrado.</div>';return;}
    items.forEach(it=>{
      const done=!!p[key(it.word)];
      const card=document.createElement('div');
      card.className='ccard'+(done?' done':'');
      let usosH='';
      it.usos.forEach(u=>{
        const ci=cidx(u.header);
        const th=u.header.map(h=>`<th>${esc(h)}</th>`).join('');
        const rows=u.rows.map(r=>{
          const tds=r.map((c,i)=>{
            let cls=i===0?'c0':(i===ci.en?'en':(i===ci.pt?'pt':''));
            let val=i===ci.en?boldWord(c,it.word):esc(c);
            return `<td class="${cls}">${val}</td>`;
          }).join('');
          return `<tr>${tds}</tr>`;
        }).join('');
        const un=(u.notes||[]).map(n=>`<div class="note ${noteClass(n)}">${esc(n)}</div>`).join('');
        usosH+=`<div class="uso"><div class="uso-t">${esc(u.title)}</div>
          <table class="utable"><tr>${th}</tr>${rows}</table>
          ${un?`<div class="notes">${un}</div>`:''}</div>`;
      });
      const cnotes=(it.notes||[]).map(n=>`<div class="note ${noteClass(n)}">${esc(n)}</div>`).join('');
      card.innerHTML=`
        <div class="cc-head">
          <span class="cc-word">${esc(it.word)}</span>
          <span class="cc-pt">${it.pt?'= '+esc(it.pt):''}</span>
          <span class="cc-meta">${done?'<span class="cc-check">✓</span>':''}
            <span class="cc-badge">${it.usos.length} usos</span><span class="cc-chev">▸</span></span>
        </div>
        <div class="cc-body">
          ${it.desc?`<div class="cc-desc">${esc(it.desc)}</div>`:''}
          ${usosH}
          ${cnotes?`<div class="notes">${cnotes}</div>`:''}
          <div class="cc-foot"><button class="btn-done${done?' done':''}">${done?'✓ Dominado':'✓ Marcar como dominado'}</button></div>
        </div>`;
      card.querySelector('.cc-head').onclick=()=>card.classList.toggle('open');
      card.querySelector('.btn-done').onclick=e=>{
        e.stopPropagation();const pp=prog();const k=key(it.word);
        if(pp[k])delete pp[k];else pp[k]=true;save(pp);render(filter);updateBar();
      };
      list.appendChild(card);
    });
  }
  function updateBar(){
    const p=prog();const t=M.items.length;
    const d=M.items.filter(it=>p[key(it.word)]).length;
    document.getElementById('nav-prog-fill').style.width=(t?d/t*100:0)+'%';
    document.getElementById('nav-prog-txt').textContent=d+'/'+t;
  }
  document.getElementById('search').addEventListener('input',e=>render(e.target.value));
  const tg=document.getElementById('toggle-pt');
  tg.onclick=()=>{list.classList.toggle('hide-pt');tg.classList.toggle('on');
    tg.textContent=list.classList.contains('hide-pt')?'👁 Mostrar PT':'🙈 Esconder PT';};
  render('');updateBar();
  if(location.hash){
    const t=decodeURIComponent(location.hash.slice(1)).toUpperCase();
    document.querySelectorAll('.ccard').forEach(c=>{if(c.querySelector('.cc-word').textContent.trim().toUpperCase().startsWith(t))c.classList.add('open');});
  }
})();
