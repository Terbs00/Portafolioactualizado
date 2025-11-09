import './styles.less';
import { proyectos } from './data.js';
import avatarUrl from './assets/Sebastián.png';

// Año
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Avatar
const avatar = document.getElementById('avatar');
if (avatar) avatar.src = avatarUrl;

// Render proyectos
const grid = document.getElementById('grid-proyectos');
if (grid) {
  grid.innerHTML = proyectos.map(p => `
    <article class="card">
      <div class="card__head">
        <h3>${p.titulo}</h3>
        <span class="badge">${p.stack}</span>
      </div>
      <p class="muted">${p.desc}</p>
      <div class="card__actions">
        <a class="link" href="${p.demo}" target="_blank" rel="noopener">Demo</a>
        <a class="link" href="${p.repo}" target="_blank" rel="noopener">Código</a>
      </div>
    </article>
  `).join('');
}

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const id = a.getAttribute('href');
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  });
});