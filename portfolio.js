'use strict';
const dialog = document.getElementById('photo-dialog');
document.querySelectorAll('[data-image]').forEach(button => button.addEventListener('click', () => {
  document.getElementById('dialog-image').src = button.dataset.image;
  document.getElementById('dialog-image').alt = button.dataset.caption;
  document.getElementById('dialog-caption').textContent = button.dataset.caption;
  dialog.showModal();
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) document.querySelectorAll('.masthead nav a').forEach(a => a.classList.toggle('active', a.hash === '#'+entry.target.id)); }); }, {rootMargin:'-15% 0px -65% 0px'});
  document.querySelectorAll('main>section[id]').forEach(section => observer.observe(section));
}
