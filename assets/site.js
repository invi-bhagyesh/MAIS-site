window.PROB='https://github.com/Math-for-AI-Safety/MAIS/blob/main/open-problems/';
window.TREE='https://github.com/Math-for-AI-Safety/MAIS/tree/main/agendas/';
window.esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
window.stars=n=>'★'.repeat(n);
window.AGN={A1:'Logic and proof cost',A2:'World-models from behavior',A3:'Geometry of superposition',A4:'Training for interpretability',A5:'Which representations form',A6:'Geometric simplicity',A7:'Learning dynamics',A8:'Generalization and goals',A0:'Control'};
window.KEYS=['A1','A2','A3','A4','A5','A6','A7','A8','A0'];
window.keyOf=p=>p.agenda||'A0';
window.renderMath=el=>{try{if(window.renderMathInElement)renderMathInElement(el||document.body,{delimiters:[{left:'$$',right:'$$',display:true},{left:'$',right:'$',display:false}],throwOnError:false})}catch(e){}};
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
document.addEventListener('DOMContentLoaded',()=>{const n=document.querySelector('.notch'),m=n&&n.querySelector('.menu');if(m)m.addEventListener('click',()=>{const o=n.classList.toggle('open');m.setAttribute('aria-expanded',o);m.textContent=o?'Close':'Menu'})});
/* headline that resolves out of noise, letter by letter (Harmonic-style) */
window.scramble=function(el,delay=250,slow=1){const final=[...el.childNodes].map(n=>n.nodeName==='BR'?'\n':n.textContent).join('');if(!el.hasAttribute('aria-label'))el.setAttribute('aria-label',final.replace(/\s+/g,' ').trim());if(RM)return;
 el.textContent='';let i=0;[...final].forEach(c=>{if(c==='\n'){el.appendChild(document.createElement('br'));return}const s=document.createElement('span');s.setAttribute('aria-hidden','true');s.textContent=c===' '?'\u00a0':c;s.style.cssText='opacity:0;transform:translateY(.25em);display:inline-block;transition:opacity .5s ease,transform .6s cubic-bezier(.2,.8,.2,1)';el.appendChild(s);const d=delay+(i++)*28*slow;setTimeout(()=>{s.style.opacity=1;s.style.transform='none'},d)})};
/* home: each section has its own entrance when it scrolls into view, once */
window.revealHome=function(scope){if(!scope||RM||!('IntersectionObserver' in window))return;
 const rv=(el,d)=>{if(!el)return;el.classList.add('rv');el.style.setProperty('--rd',d+'ms')};
 const draw=(svg,d)=>{if(!svg)return;svg.querySelectorAll('path,circle,rect,polygon,line').forEach(e=>{if(e.getAttribute('stroke')==='none'||e.hasAttribute('stroke-dasharray')||e.closest('[stroke-dasharray]')&&e.closest('[stroke-dasharray]')!==svg)return;e.setAttribute('pathLength','1');e.classList.add('draw');e.style.setProperty('--rd',d+'ms')})};
 const secs=[...scope.querySelectorAll('.epi,.ask,.sec:not(.ask),.strip,.cta')];
 secs.forEach(sec=>{sec.classList.add('rv-sec');
  if(sec.classList.contains('epi'))rv(sec.querySelector('figcaption'),850);
  rv(sec.querySelector('.sec-h h2'),0);
  if(sec.classList.contains('ask')){rv(sec.querySelector('.sec-h p'),200);sec.querySelectorAll('.ask-c').forEach((c,i)=>{rv(c,250+i*120);draw(c.querySelector('svg'),420+i*120)})}
  else if(sec.classList.contains('sec')){rv(sec.querySelector('.sec-h p'),200);sec.querySelectorAll('.card').forEach((c,i)=>{const d=(i%4)*90+Math.floor(i/4)*140+250;rv(c,d);draw(c.querySelector('.thumb svg'),d+150)})}
  if(sec.classList.contains('strip'))[...sec.querySelectorAll('.wrap > *')].forEach((e,i)=>rv(e,450+i*120));
  if(sec.classList.contains('cta')){rv(sec.querySelector('h2'),0);rv(sec.querySelector('.pill'),180)}});
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const s=e.target;s.classList.add('in');io.unobserve(s);
  }),{rootMargin:'0px 0px -14% 0px',threshold:.12});
 secs.forEach(s=>io.observe(s))};
/* engraved thumbnail: the agenda's motif on grid paper with survey contours */
function rng(s){return()=>{s=(s*1664525+1013904223)%4294967296;return s/4294967296}}
const inner=k=>ICON[k].replace(/^<svg[^>]*>/,'').replace(/<\/svg>$/,'');
window.thumbSVG=function(k){const r=rng(31+k.charCodeAt(1)*977),N=14,rad=Array.from({length:N},()=>.86+.26*r());
 const ring=s=>{const pts=rad.map((v,j)=>{const a=j/N*2*Math.PI;return[80+52*s*v*Math.cos(a),60+40*s*v*Math.sin(a)]});let d='M'+pts[0].map(v=>v.toFixed(1)).join(' ');for(let i=0;i<N;i++){const p0=pts[(i-1+N)%N],p1=pts[i],p2=pts[(i+1)%N],p3=pts[(i+2)%N];d+=`C${(p1[0]+(p2[0]-p0[0])/6).toFixed(1)} ${(p1[1]+(p2[1]-p0[1])/6).toFixed(1)} ${(p2[0]-(p3[0]-p1[0])/6).toFixed(1)} ${(p2[1]-(p3[1]-p1[1])/6).toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`}return d+'Z'};
 let rings='';[1.18,1,.82,.64].forEach((s,i)=>rings+=`<path d="${ring(s)}" fill="none" stroke="#9aa0aa" stroke-width="${i==1?.7:.45}" ${i==0?'stroke-dasharray="1 3"':''}/>`);
 return `<svg viewBox="0 0 160 120" aria-hidden="true">${rings}<g transform="translate(52 32) scale(.7)" fill="none" stroke="#121417" stroke-width="1.05" stroke-linecap="round" stroke-linejoin="round" style="color:#121417">${inner(k)}</g></svg>`};
/* ---------- survey chart: agendas as hills, problems as survey points ---------- */
const WIDE={A1:[.12,.27],A2:[.35,.2],A3:[.6,.26],A4:[.86,.3],A5:[.2,.73],A6:[.46,.62],A7:[.7,.74],A8:[.9,.78],A0:[.07,.9]};
const TALL={A1:[.28,.07],A2:[.72,.14],A3:[.3,.28],A4:[.72,.36],A5:[.28,.49],A6:[.72,.57],A7:[.3,.7],A8:[.72,.79],A0:[.3,.93]};
window.surveyChart=function(box,P,vis,focus){
 const W=Math.max(320,box.clientWidth||1000),wide=W>=700,L=wide?WIDE:TALL,PAD=wide?58:62,H0=Math.round(wide?W*.6:W*2.3),H=H0+PAD,base=wide?W*.058:W*.12;
 const hills=KEYS.map(k=>{const ps=P.filter(p=>keyOf(p)===k),n=ps.length,s=base*(.62+.38*Math.sqrt(n/14));return{k,ps,n,cx:L[k][0]*W,cy:PAD+L[k][1]*H0,s,a:.55+.45*Math.sqrt(n/14)}}).filter(h=>h.n);
 const pts=[];hills.forEach(h=>h.ps.forEach((p,j)=>{const rr=(h.n>1?h.s*.92*Math.sqrt((j+.6)/h.n):0),th=j*2.39996+h.k.charCodeAt(1);pts.push({p,h,x:h.cx+rr*Math.cos(th),y:h.cy+rr*Math.sin(th)})}));
 const g=Math.max(5,W/190),nx=Math.ceil(W/g)+1,ny=Math.ceil(H/g)+1,F=new Float32Array(nx*ny);
 for(let j=0;j<ny;j++)for(let i=0;i<nx;i++){const x=i*g,y=j*g;let v=.05*Math.sin(x*.011+1.3)*Math.cos(y*.013-.4)+.03*Math.sin((x+y)*.021);
  for(const h of hills){const dx=x-h.cx,dy=y-h.cy;v+=h.a*Math.exp(-(dx*dx+dy*dy)/(2*h.s*h.s))}
  for(const q of pts){const dx=x-q.x,dy=y-q.y,d2=dx*dx+dy*dy,ss=q.h.s*.16;if(d2<ss*ss*9)v+=.07*Math.exp(-d2/(2*ss*ss))}F[j*nx+i]=v}
 const levels=[];for(let v=.1;v<1.25;v+=.075)levels.push(v);
 let iso='',idx='';
 levels.forEach((lv,li)=>{let d='';for(let j=0;j<ny-1;j++)for(let i=0;i<nx-1;i++){const a=F[j*nx+i],b=F[j*nx+i+1],c=F[(j+1)*nx+i+1],e=F[(j+1)*nx+i];
  const code=(a>lv?8:0)|(b>lv?4:0)|(c>lv?2:0)|(e>lv?1:0);if(code===0||code===15)continue;
  const x=i*g,y=j*g,T=[x+g*(lv-a)/(b-a),y],R=[x+g,y+g*(lv-b)/(c-b)],B=[x+g*(lv-e)/(c-e),y+g],Lf=[x,y+g*(lv-a)/(e-a)];
  const seg=(p,q)=>d+=`M${p[0].toFixed(1)} ${p[1].toFixed(1)}L${q[0].toFixed(1)} ${q[1].toFixed(1)}`;
  switch(code){case 1:case 14:seg(Lf,B);break;case 2:case 13:seg(B,R);break;case 3:case 12:seg(Lf,R);break;case 4:case 11:seg(T,R);break;case 6:case 9:seg(T,B);break;case 7:case 8:seg(Lf,T);break;case 5:seg(Lf,T);seg(B,R);break;case 10:seg(T,R);seg(Lf,B);break}}
  if(li%4===2)idx+=d;else iso+=d});
 let out=`<path class="iso" d="${iso}"/><path class="iso idx" d="${idx}"/>`;
 hills.forEach(h=>{const dim=focus&&focus!==h.k;const lx=h.cx,ly=h.cy-h.s*1.55;
  out+=`<g class="hill${dim?' dim':''}"><path class="leader" d="M${lx.toFixed(1)} ${(ly+6).toFixed(1)}V${(h.cy-h.s*1.05).toFixed(1)}"/><text class="hl" x="${lx.toFixed(1)}" y="${(ly-20).toFixed(1)}" text-anchor="middle">${h.k==='A0'?'O9':h.k}  ${h.n} ${h.n>1?'problems':'problem'}</text><text class="ht" x="${lx.toFixed(1)}" y="${(ly).toFixed(1)}" text-anchor="middle">${esc(AGN[h.k])}</text></g>`});
 pts.forEach(q=>{const p=q.p,on=(!vis||vis.has(p.n))&&(!focus||focus===q.h.k),r=p.stars===1?3:p.stars===2?4:5;
  out+=`<g class="mk${p.resolved?' res':''}${on?'':' off'}" tabindex="${on?0:-1}" role="button" data-n="${p.n}" aria-label="${esc(p.id+': '+p.title)}" transform="translate(${q.x.toFixed(1)} ${q.y.toFixed(1)})"><path class="cross" d="M-${r+4} 0H-${r+1}M${r+1} 0H${r+4}M0 -${r+4}V-${r+1}M0 ${r+1}V${r+4}"/>${p.resolved?`<circle r="${r+3}" fill="none" stroke="#121417" stroke-width=".8"/>`:''}<circle class="m" r="${r}"/></g>`});
 box.innerHTML=`<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" class="grid-paper" role="group" aria-label="Survey chart of the open problems">${out}</svg>`};

/* selected tab: corner brackets that flow from one tab to the next, leading corner first */
const Tabs=(function(){const n=document.querySelector('.notch');if(!n)return{move(){}};
 const links=[...n.querySelectorAll('a:not(.ver)')];let cur=links.findIndex(a=>a.getAttribute('aria-current')==='page');
 n.insertAdjacentHTML('beforeend','<span class="brk tl" aria-hidden="true"></span><span class="brk br" aria-hidden="true"></span>');
 const tl=n.querySelector('.brk.tl'),br=n.querySelector('.brk.br'),C=7;
 const pos=a=>({tl:[a.offsetLeft,a.offsetTop],br:[a.offsetLeft+a.offsetWidth-C,a.offsetTop+a.offsetHeight-C]});
 const set=(el,[x,y])=>Object.assign(el.style,{left:x+'px',top:y+'px',opacity:1});
 const hide=()=>{tl.style.opacity=br.style.opacity=0};
 function place(){if(cur<0||getComputedStyle(links[cur]).display==='none'){hide();return}const p=pos(links[cur]);set(tl,p.tl);set(br,p.br)}
 function move(to){const from=cur;cur=to;links.forEach((a,i)=>i===to?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current'));
  if(to<0){hide();return}if(from<0||from===to||RM||!tl.animate||getComputedStyle(links[to]).display==='none'){place();return}
  const a=pos(links[from]),b=pos(links[to]),fwd=b.tl[0]>a.tl[0],dir=fwd?1:-1;
  const flow=(el,k,delay,dur)=>{const [x0,y0]=a[k],[x1,y1]=b[k];el.getAnimations().forEach(x=>x.cancel());set(el,[x1,y1]);
   el.animate([{transform:`translate(${x0-x1}px,${y0-y1}px)`},{transform:`translate(${(x0-x1)*.18}px,${y0-y1}px) scaleX(1.9)`,offset:.62},
    {transform:`translate(${dir*-2.5}px,0) scaleX(.85)`,offset:.84},{transform:'none'}],{duration:dur,delay,easing:'cubic-bezier(.55,0,.3,1)',fill:'backwards'})};
  flow(fwd?br:tl,fwd?'br':'tl',0,620);flow(fwd?tl:br,fwd?'tl':'br',110,700)}
 (document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve()).then(place);addEventListener('resize',place);
 return{move,index:h=>links.findIndex(a=>(new URL(a.href,location.href).pathname.split('/').pop()||'index.html')===h)}})();
/* in-place navigation: swap <main>, keep the header, notch and footer */
(function(){
 const pageOf=u=>{const p=new URL(u,location.href).pathname.split('/').pop();return p||'index.html'};
 const cache=new Map(),get=u=>{const k=new URL(u,location.href);k.hash='';k.search='';const key=k.href;if(!cache.has(key))cache.set(key,fetch(key).then(r=>{if(!r.ok)throw new Error(r.status);return r.text()}).catch(e=>{cache.delete(key);throw e}));return cache.get(key)};
 const run=code=>{try{new Function(code)()}catch(e){console.error(e)}};
 const ours=a=>{if(!a||a.classList.contains('ver')||a.target||a.hasAttribute('download'))return false;const u=new URL(a.href,location.href);return u.origin===location.origin&&/(\.html|\/)$/.test(u.pathname)&&location.protocol!=='file:'};
 async function go(url,push){
  let html;try{html=await get(url)}catch(_){location.href=url;return}
  const doc=new DOMParser().parseFromString(html,'text/html'),nm=doc.querySelector('main'),code=doc.querySelector('script[data-page]');
  if(!nm){location.href=url;return}
  if(push)history.pushState({},'',url);
  document.title=doc.title;const md=doc.querySelector('meta[name=description]'),cd=document.querySelector('meta[name=description]');if(md&&cd)cd.content=md.content;
  const m=document.querySelector('main');m.innerHTML=nm.innerHTML;
  Tabs.move(Tabs.index(pageOf(url)));
  const u=new URL(url,location.href);if(!u.hash||/^#O\d+$/.test(u.hash))scrollTo({top:0,behavior:'instant'});
  if(!RM)m.animate([{opacity:0},{opacity:1}],{duration:180,easing:'ease-out'});
  m.setAttribute('tabindex','-1');m.focus({preventScroll:true});
  if(code)run(code.textContent);renderMath(m)}
 document.addEventListener('click',e=>{const a=e.target.closest('a[href]');if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||!ours(a))return;
  const u=new URL(a.href,location.href);if(u.pathname===location.pathname&&u.search===location.search&&u.hash)return;
  e.preventDefault();const n=document.querySelector('.notch');if(n&&n.classList.contains('open')){n.classList.remove('open');const mb=n.querySelector('.menu');if(mb){mb.textContent='Menu';mb.setAttribute('aria-expanded',false)}}
  go(a.href,true)});
 document.addEventListener('pointerover',e=>{const a=e.target.closest&&e.target.closest('a[href]');if(ours(a))get(a.href).catch(()=>{})},{passive:true});
 addEventListener('popstate',()=>go(location.href,false));
 const first=document.querySelector('script[data-page]');if(first)run(first.textContent)})();
/* tap outside the open menu closes it */
document.addEventListener('click',e=>{const n=document.querySelector('.notch.open');if(!n||n.contains(e.target))return;n.classList.remove('open');const b=n.querySelector('.menu');if(b){b.textContent='Menu';b.setAttribute('aria-expanded',false)}});
/* footer curtain: footer stays put underneath, the page lifts away from it */
(function(){const f=document.querySelector('footer.site-foot');if(!f)return;
 const fit=()=>{const h=f.offsetHeight,ok=h<=innerHeight-60&&!matchMedia('(prefers-reduced-motion:reduce)').matches;document.body.classList.toggle('curtain',ok);document.documentElement.style.setProperty('--fh',h+'px')};
 fit();addEventListener('resize',fit);addEventListener('load',fit);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fit)})();
