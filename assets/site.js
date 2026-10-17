window.PROB='https://github.com/Math-for-AI-Safety/MAIS/blob/main/open-problems/';
window.TREE='https://github.com/Math-for-AI-Safety/MAIS/tree/main/agendas/';
window.esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
window.stars=n=>'★'.repeat(n);
window.COL=['#6b7280','#2c6fb7','#c2561a','#1e8f6e','#b4478b','#8a6d00','#3f93c9','#6f4bb8','#b83a32'];
window.agCol=a=>COL[a?+a.slice(1):0];
window.ARCH='<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4 31 Q20 2 36 31"/><path d="M4 31H36"/><path d="M12 31V21M20 31V13M28 31V21" stroke-width="1.1"/></svg>';
window.renderMath=el=>{try{if(window.renderMathInElement)renderMathInElement(el||document.body,{delimiters:[{left:'$$',right:'$$',display:true},{left:'$',right:'$',display:false}],throwOnError:false})}catch(e){}};
