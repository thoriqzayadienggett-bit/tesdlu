document.getElementById('year').textContent = new Date().getFullYear();
function submitForm(e){e.preventDefault();alert('Terima kasih! Pesanmu sudah terkirim (demo).');e.target.reset();}
function resetForm(){const f=document.querySelector('.contact-form');if(f)f.reset();}
const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');
toggle&&toggle.addEventListener('click',()=>{if(!nav)return;nav.style.display=nav.style.display==='flex'?'none':'flex';});
