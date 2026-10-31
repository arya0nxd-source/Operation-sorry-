
const enter = document.getElementById('enter');
const hero = document.getElementById('hero');
const content = document.getElementById('content');

enter.addEventListener('click', () => {
  hero.classList.add('hidden');
  content.classList.remove('hidden');

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

document.getElementById('year').textContent =
  new Date().getFullYear();

