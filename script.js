'use strict';
const menu=document.getElementById('menu'),nav=document.getElementById('nav');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','فتح القائمة');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';nav.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'إغلاق القائمة':'فتح القائمة');});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus();}});
document.addEventListener('click',e=>{if(!nav.contains(e.target)&&!menu.contains(e.target))closeMenu();});
window.matchMedia('(min-width:761px)').addEventListener('change',closeMenu);
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('brief').addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('name'),service=document.getElementById('service'),message=document.getElementById('message');if(!name.value.trim()){name.setCustomValidity('اكتب اسمك أو اسم المشروع');name.reportValidity();return;}name.setCustomValidity('');const text=['مرحبًا أفيني، أرغب في مناقشة مشروع جديد.','الاسم / المشروع: '+name.value.trim(),'الخدمة: '+service.value,message.value.trim()?'نبذة: '+message.value.trim():''].filter(Boolean).join('\n');window.location.href='https://wa.me/966591825649?text='+encodeURIComponent(text);});
document.getElementById('name').addEventListener('input',e=>e.target.setCustomValidity(''));
