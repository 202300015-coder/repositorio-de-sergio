import './style.css';

const btn = document.getElementById('menuBtn');
const nav = document.getElementById('navMenu');

if(btn && nav){
  btn.addEventListener('click', () => {
    nav.classList.toggle('hidden');
  });
}