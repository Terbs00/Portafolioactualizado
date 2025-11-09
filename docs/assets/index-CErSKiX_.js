(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d=[{titulo:"Landing Minimal",stack:"Vite + LESS",desc:"Página de aterrizaje ligera, optimizada y accesible.",demo:"https://example.com/",repo:"https://github.com/"},{titulo:"Panel de Reportes",stack:"JS + Charts",desc:"Panel con métricas y visualizaciones interactivas.",demo:"https://example.com/",repo:"https://github.com/"},{titulo:"Catálogo Simple",stack:"HTML + CSS",desc:"Catálogo responsive con cards y filtros básicos.",demo:"https://example.com/",repo:"https://github.com/"},{titulo:"Blog Estático",stack:"Markdown",desc:"Blog estático con posts y navegación por tags.",demo:"https://example.com/",repo:"https://github.com/"}],u="/https://terbs00.github.io/Portafolioactualizado/assets/Sebasti%C3%A1n-BJmrqZbh.png",i=document.getElementById("year");i&&(i.textContent=new Date().getFullYear());const n=document.getElementById("avatar");n&&(n.src=u);const l=document.getElementById("grid-proyectos");l&&(l.innerHTML=d.map(o=>`
    <article class="card">
      <div class="card__head">
        <h3>${o.titulo}</h3>
        <span class="badge">${o.stack}</span>
      </div>
      <p class="muted">${o.desc}</p>
      <div class="card__actions">
        <a class="link" href="${o.demo}" target="_blank" rel="noopener">Demo</a>
        <a class="link" href="${o.repo}" target="_blank" rel="noopener">Código</a>
      </div>
    </article>
  `).join(""));document.querySelectorAll('a[href^="#"]').forEach(o=>{o.addEventListener("click",r=>{r.preventDefault();const s=o.getAttribute("href");document.querySelector(s)?.scrollIntoView({behavior:"smooth"})})});
