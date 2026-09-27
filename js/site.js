/* FAQPage JSON-LD built from the visible accordion (one source) */
(function(){const q=[...document.querySelectorAll('.faq details')].map(d=>({"@type":"Question","name":d.querySelector('summary').textContent.trim(),"acceptedAnswer":{"@type":"Answer","text":d.querySelector('.ans').textContent.trim()}}));
if(q.length){const s=document.createElement('script');s.type='application/ld+json';s.textContent=JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":q});document.head.appendChild(s)}})();
/* mobile menu */
const mn=document.getElementById('mnav'),mo=document.getElementById('mopen');
const setM=o=>{mn.classList.toggle('is-open',o);mo.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''};
mo.addEventListener('click',()=>setM(true));document.getElementById('mclose').addEventListener('click',()=>setM(false));
mn.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setM(false)));
/* header state: alabaster masthead once the hero has scrolled */
const hdr=document.getElementById('hdr');const onS=()=>hdr.classList.toggle('is-solid',scrollY>80);addEventListener('scroll',onS,{passive:true});onS();
/* accordions: hover, focus or click opens a panel; otherwise the panels take turns while in view */
const wide=()=>matchMedia('(min-width:861px)').matches;const calm=matchMedia('(prefers-reduced-motion:reduce)').matches;
function accordion(root,sel,every,on){if(!root)return;const items=[...root.querySelectorAll(sel)];let cur=Math.max(0,items.findIndex(x=>x.classList.contains('is-open'))),hold=false,timer=0;
  const openIt=i=>{cur=i;items.forEach((b,k)=>{b.classList.toggle('is-open',k===i);if(b.hasAttribute('aria-expanded'))b.setAttribute('aria-expanded',k===i)});if(on)on(i)};
  const start=()=>{clearInterval(timer);if(!calm)timer=setInterval(()=>{if(!hold&&wide())openIt((cur+1)%items.length)},every)};
  items.forEach((b,i)=>{b.addEventListener('mouseenter',()=>{hold=true;openIt(i)});b.addEventListener('focusin',()=>{hold=true;openIt(i)});
    b.addEventListener('click',e=>{if(wide()&&!b.classList.contains('is-open')){e.preventDefault();hold=true;openIt(i)}})});
  root.addEventListener('mouseleave',()=>{hold=false;start()});root.addEventListener('focusout',e=>{if(!root.contains(e.relatedTarget)){hold=false}});
  new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting?start():clearInterval(timer))).observe(root)}
accordion(document.getElementById('acc'),'.area',3800);
accordion(document.getElementById('svc'),'.svc-pane',4400);
const dat=document.getElementById('datum');if(dat){const phs=[...document.querySelectorAll('.coast-ph')];accordion(dat,'.datum',4600,i=>phs.forEach((p,k)=>p.classList.toggle('is-on',k===i)))}
/* the work slider: arrows, drag, keyboard, a progress rule */
const tr=document.getElementById('track');if(tr){const bar=document.querySelector('.slider-bar i');
  const upd=()=>{const max=tr.scrollWidth-tr.clientWidth,f=tr.clientWidth/tr.scrollWidth;bar.style.width=(f*100)+'%';bar.style.left=(max>0?tr.scrollLeft/max*(100-f*100):0)+'%'};
  tr.addEventListener('scroll',upd,{passive:true});addEventListener('resize',upd);upd();
  document.querySelector('.slider-nav .next').addEventListener('click',()=>tr.scrollBy({left:tr.clientWidth*.7,behavior:'smooth'}));
  document.querySelector('.slider-nav .prev').addEventListener('click',()=>tr.scrollBy({left:-tr.clientWidth*.7,behavior:'smooth'}));
  tr.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){tr.scrollBy({left:360,behavior:'smooth'})}if(e.key==='ArrowLeft'){tr.scrollBy({left:-360,behavior:'smooth'})}});
  let down=false,sx=0,sl=0;tr.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse')return;down=true;sx=e.clientX;sl=tr.scrollLeft;tr.classList.add('is-drag')});
  addEventListener('pointermove',e=>{if(down)tr.scrollLeft=sl-(e.clientX-sx)});addEventListener('pointerup',()=>{down=false;tr.classList.remove('is-drag')})}
/* hero: the towns take turns */
const cyc=document.getElementById('cyc');if(cyc&&!calm){const towns=['Mount Pleasant','Isle of Palms',"Sullivan's Island",'Daniel Island'];let n=0;const b=cyc.firstElementChild;
  setInterval(()=>{b.classList.add('out');setTimeout(()=>{n=(n+1)%towns.length;b.textContent=towns[n];b.classList.remove('out');b.classList.add('in');requestAnimationFrame(()=>requestAnimationFrame(()=>b.classList.remove('in')))},460)},2800)}
/* the window: when a rendered walk-through clip exists (data-src), it replaces the drawn sequence */
const pv=document.querySelector('.pane-video');if(pv&&pv.dataset.src&&!calm){pv.src=pv.dataset.src;pv.addEventListener('canplay',()=>{pv.closest('.pane').classList.add('has-video');pv.play().catch(()=>{})},{once:true});pv.load()}
/* reveals */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px'});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
