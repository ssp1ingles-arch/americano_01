/* Sistema 03 — Motor de Verbos por Sentido. Renderiza a interface de 3 colunas
   a partir de window.GRUPO_DATA (definido em ./data.js). Progresso por sentido. */
(function(){
  const G = window.GRUPO_DATA;
  if(!G){document.body.innerHTML='<p style="padding:6rem 2rem">Dados não carregados.</p>';return;}
  const PKEY='s03_progress';
  const TENSES=[["pres","Presente"],["pas","Passado"],["will","Futuro · WILL"],["going","Futuro · GOING TO"]];
  const state={verb:null,sense:0,form:"aff"};

  function prog(){try{return JSON.parse(localStorage.getItem(PKEY)||'{}');}catch(e){return {};}}
  function saveProg(p){try{localStorage.setItem(PKEY,JSON.stringify(p));}catch(e){}}
  function senseKey(v,s){return 'g'+G.id+'|'+v.senses[s].file;}
  function totalSenses(){return G.verbs.reduce((a,v)=>a+v.senses.length,0);}
  function doneCount(){const p=prog();let n=0;G.verbs.forEach(v=>v.senses.forEach((s,i)=>{if(p['g'+G.id+'|'+s.file])n++;}));return n;}

  function esc(t){return (t||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
  function noteClass(n){
    if(/🔴|❌|ERRO|nunca|Nunca/.test(n))return 'err';
    if(/⚠/.test(n))return 'warn';
    return 'tip';
  }

  // ---- header + breadcrumb ----
  document.getElementById('ghead-icon').textContent=G.icon;
  document.getElementById('ghead-title').textContent='Grupo '+G.id+' — '+G.title;
  document.getElementById('ghead-sub').textContent=G.sub;
  document.getElementById('nav-title').textContent='S03 · Grupo '+G.id;
  document.title='Sistema 03 · Grupo '+G.id+' — '+G.title;

  // ---- verb list ----
  const verbList=document.getElementById('verb-list');
  function renderVerbs(filter){
    verbList.innerHTML='';
    const p=prog();
    const f=(filter||'').trim().toUpperCase();
    G.verbs.filter(v=>!f||v.verb.includes(f)||v.senses.some(s=>(s.pt||'').toUpperCase().includes(f)))
    .forEach(v=>{
      const allDone=v.senses.every(s=>p['g'+G.id+'|'+s.file]);
      const el=document.createElement('div');
      el.className='item'+(state.verb===v.verb?' active':'');
      el.innerHTML=`<span class="item-v">${v.verb}</span>
        <span style="display:flex;gap:.35rem;align-items:center">
        ${allDone?'<span class="item-check">✓</span>':''}
        <span class="item-badge">${v.senses.length}</span></span>`;
      el.onclick=()=>{state.verb=v.verb;state.sense=0;renderVerbs(filter);renderSenses();renderPanel();
        document.getElementById('col-senses').scrollIntoView({behavior:'smooth',block:'nearest'});};
      verbList.appendChild(el);
    });
    if(!verbList.children.length)verbList.innerHTML='<div class="empty" style="padding:1.5rem">Nada encontrado.</div>';
  }

  // ---- senses list ----
  const senseList=document.getElementById('sense-list');
  function curVerb(){return G.verbs.find(v=>v.verb===state.verb);}
  function renderSenses(){
    const v=curVerb();senseList.innerHTML='';
    if(!v){senseList.innerHTML='<div class="empty" style="padding:1.5rem;font-size:.8rem">Selecione um verbo</div>';return;}
    const p=prog();
    v.senses.forEach((s,i)=>{
      const done=!!p['g'+G.id+'|'+s.file];
      const el=document.createElement('div');
      el.className='item sense-item'+(state.sense===i?' active':'');
      el.innerHTML=`<div style="display:flex;justify-content:space-between;gap:.4rem;align-items:center">
        <span class="sense-pt">${esc(s.pt)}</span>${done?'<span class="item-check">✓</span>':''}</div>
        ${s.desc?`<div class="sense-desc">${esc(s.desc)}</div>`:''}`;
      el.onclick=()=>{state.sense=i;state.form="aff";renderSenses();renderPanel();
        if(window.innerWidth<=880)document.getElementById('panel').scrollIntoView({behavior:'smooth',block:'start'});};
      senseList.appendChild(el);
    });
  }

  // ---- panel ----
  const panel=document.getElementById('panel');
  function renderPanel(){
    const v=curVerb();
    if(!v){panel.innerHTML='<div class="empty">← Escolha um verbo para começar</div>';return;}
    const s=v.senses[state.sense];
    const p=prog();const done=!!p['g'+G.id+'|'+s.file];
    let ex='';
    if(s.ex){const enH=esc(s.ex).replace(new RegExp('\\b('+v.verb.split(' ')[0].toLowerCase()+'\\w*)\\b','i'),'<b>$1</b>');
      ex=`<div class="p-ex"><div class="p-ex-en">${enH}</div>${s.ex_pt?`<div class="p-ex-pt">${esc(s.ex_pt)}</div>`:''}</div>`;}
    const forms=[["aff","Afirmativo"],["neg","Negativo"],["qst","Pergunta"]]
      .map(([f,l])=>`<button class="fbtn${state.form===f?' on':''}" data-f="${f}">${l}</button>`).join('');
    let tenses='';
    TENSES.forEach(([tk,tl])=>{
      const rows=(s[state.form]&&s[state.form][tk])||[];
      const rowsH=rows.map(r=>`<div class="trow"><div class="tp">${esc(r.pron)}</div>
        <div><div class="te ${state.form}">${esc(r.en)}</div><div class="tpt">${esc(r.pt)}</div></div></div>`).join('');
      tenses+=`<div class="tblock"><div class="tblock-hd">${tl}</div>${rowsH}</div>`;
    });
    const notes=(s.notes||[]).map(n=>`<div class="note ${noteClass(n)}">${esc(n)}</div>`).join('');
    panel.innerHTML=`${ex}
      <div class="p-title">${v.verb} <span class="num">sentido ${s.num}</span></div>
      <div class="p-desc">${esc(s.pt)}${s.desc?' — '+esc(s.desc):''}</div>
      <div class="forms">${forms}</div>
      <div class="tenses">${tenses}</div>
      ${notes?`<div class="notes">${notes}</div>`:''}
      <div class="p-foot">
        <button class="btn-done${done?' done':''}" id="btn-done">${done?'✓ Concluído':'Marcar como concluído'}</button>
      </div>`;
    panel.querySelectorAll('.fbtn').forEach(b=>b.onclick=()=>{state.form=b.dataset.f;renderPanel();});
    document.getElementById('btn-done').onclick=()=>{
      const pp=prog();const k=senseKey(v,state.sense);
      if(pp[k])delete pp[k];else pp[k]=true;saveProg(pp);
      renderVerbs(document.getElementById('search').value);renderSenses();renderPanel();updateBar();
    };
  }

  function updateBar(){
    const t=totalSenses(),d=doneCount();
    document.getElementById('nav-prog-fill').style.width=(t?d/t*100:0)+'%';
    document.getElementById('nav-prog-txt').textContent=d+'/'+t;
  }

  // ---- init ----
  document.getElementById('search').addEventListener('input',e=>renderVerbs(e.target.value));
  state.verb=G.verbs[0]?G.verbs[0].verb:null;
  renderVerbs('');renderSenses();renderPanel();updateBar();
})();
