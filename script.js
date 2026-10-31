const enter=document.getElementById('enter');
const hero=document.getElementById('hero');
const content=document.getElementById('content');
const input=document.getElementById('file');
const video=document.getElementById('film');
const player=document.getElementById('player');
let objectUrl=null;
enter.addEventListener('click',()=>{hero.classList.add('hidden');content.classList.remove('hidden');window.scrollTo({top:0,behavior:'smooth'});});
input.addEventListener('change',()=>{
 const file=input.files&&input.files[0]; if(!file)return;
 if(!file.type.startsWith('video/')){alert('Please choose a video file.');return;}
 if(objectUrl)URL.revokeObjectURL(objectUrl);
 objectUrl=URL.createObjectURL(file);video.src=objectUrl;player.classList.add('loaded');video.load();
});
document.getElementById('year').textContent=new Date().getFullYear();
