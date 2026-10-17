import './style.css';
import { researchContent } from './research.js';

const pages = {
  about: {
    title: 'About',
    content: `
      <section class="hero section reveal">
        <div class="hero-copy">
          <div class="eyebrow"><span class="status-dot"></span> A WORK IN PROGRESS. ALWAYS.</div>
          <h1>Curiosity.<br>Code.<br><span class="serif">Possibility.</span><span class="period">◎</span></h1>
          <p class="intro">Hi, I’m <strong>Guneet Kapur</strong> — a student exploring computer science, engineering, and the things we haven’t figured out yet.</p>
          <a class="button" href="/research" data-link>Explore my work <span>↗</span></a>
          <a class="scroll-link" href="#beyond">SCROLL TO GET TO KNOW ME <span>↓</span></a>
        </div>
        <div class="portrait-wrap">
          <div class="portrait-frame">
            <span class="frame-label">FIG. 01 / THE PERSON BEHIND THE PROJECTS</span>
            <div class="portrait-art" role="img" aria-label="Placeholder for your portrait"><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><div class="orbit orbit-three"></div><span class="portrait-star">◎</span><span class="cross cross-one">+</span><span class="cross cross-two">+</span><div class="photo-label"><span>YOUR PHOTO GOES HERE</span><small>A face to put to the ideas.</small></div></div>
            <div class="portrait-caption"><span>[ GUNEET KAPUR ]</span><span>STUDENT · BUILDER · EXPLORER</span></div>
          </div>
          <div class="floating-note"><span>⌘</span> Learning by making.</div>
        </div>
      </section>
      <div class="ticker" aria-label="Curiosity, experimentation, iteration"><div>CURIOSITY <span>◎</span> EXPERIMENTATION <span>◎</span> A LITTLE TRIAL & ERROR <span>◎</span> CURIOSITY <span>◎</span> EXPERIMENTATION <span>◎</span> A LITTLE TRIAL & ERROR <span>◎</span></div></div>
      <section id="beyond" class="section beyond reveal"><div class="section-heading"><div><p class="eyebrow">01 / BEYOND THE SCREEN</p><h2>A few things<br>that make me <em>me.</em></h2></div><p>There’s more to a person than a project list.<br>Here’s what fills the rest of my time.</p></div>
      <div class="interest-grid">${[
        ['01', '⌘', 'Things I build', '[Add your coding, engineering, or creative interests here.]', 'CURIOSITY → CREATION'],
        ['02', '↗', 'Communities I’m part of', '[Add your clubs, teams, volunteering, and leadership roles here.]', 'BETTER, TOGETHER'],
        ['03', '◎', 'Off the clock', '[Add the hobbies, sports, music, or little obsessions you love.]', 'JUST FOR THE JOY OF IT']
      ].map(([n, icon, title, desc, tag]) => `<article class="interest-card"><div class="card-top"><span>${n}</span><span class="interest-icon">${icon}</span></div><h3>${title}</h3><p>${desc}</p><span class="micro">${tag}</span></article>`).join('')}</div></section>
      <section class="section philosophy reveal"><span class="eyebrow">MY OPERATING PRINCIPLE</span><p>Ask a better question.<br>Build something <em>worth answering.</em></p><span class="asterisk">◎</span></section>`
  },
  research: { title: 'Research', content: researchContent },
  awards: {
    title: 'Awards',
    content: `<section class="section page-intro reveal"><p class="eyebrow"><span class="status-dot"></span> 03 / MILESTONES ALONG THE WAY</p><h1>A little recognition.<br><span class="serif">A lot of motivation.</span></h1><p class="intro">A space for the milestones I’m proud of — and the work, people, and persistence behind them.</p></section>
      <section class="section awards-section reveal"><div class="awards-heading"><span>SELECTED HONORS</span><span>THE JOURNEY, SO FAR ↙</span></div>${[
        ['01', '[Award or distinction]', '[Awarding organization]', '[Explain what this award recognizes and the work that earned it.]', 'RESEARCH'],
        ['02', '[Award or distinction]', '[Awarding organization]', '[Add context: your contribution, the scope of the competition, or why it matters to you.]', 'ENGINEERING'],
        ['03', '[Award or distinction]', '[Awarding organization]', '[Share the story behind this milestone.]', 'ACADEMIC'],
        ['04', '[Award or distinction]', '[Awarding organization]', '[Add another achievement, honor, or community recognition.]', 'COMMUNITY']
      ].map(([n, title, org, desc, category]) => `<article class="award-row"><span class="award-index">${n}</span><div><span class="tags"><span>${category}</span></span><h2>${title}</h2><p class="award-org">${org}</p><p>${desc}</p></div><div class="award-year">[YEAR]<span>✧</span></div></article>`).join('')}<p class="placeholder-note">These are placeholders for your achievements. We’ll add the real names, dates, and stories next.</p></section><section class="section closing reveal"><span class="eyebrow">THE BEST PART?</span><h2>There’s still so much<br><em>left to discover.</em> <span>↗</span></h2><a class="button" href="/research" data-link>See the work behind it <span>↗</span></a></section>`
  }
};

function render() {
  const route = location.pathname.replace(/\/$/, '').slice(1) || 'about';
  const key = pages[route] ? route : 'about';
  document.title = `${pages[key].title} — Guneet Kapur`;
  document.querySelector('#app').innerHTML = `<div class="scroll-progress"></div><header class="site-header"><a href="/" class="wordmark" data-link aria-label="Home">GK<span>◎</span></a><nav aria-label="Main navigation">${Object.entries(pages).map(([id, page], i) => `<a href="${id === 'about' ? '/' : '/' + id}" data-link ${key === id ? 'aria-current="page"' : ''}><span class="nav-number">0${i + 1}</span>${page.title}<span class="nav-dot"></span></a>`).join('')}</nav><span class="header-note">PERSONAL PORTFOLIO <span>↗</span></span></header><main>${pages[key].content}</main><footer class="section"><a href="/" class="wordmark" data-link>GK<span>◎</span></a><p>A curious mind. An open road.</p><a href="#" class="back-top">BACK TO TOP ↑</a><span class="footer-small">GUNEET KAPUR · PERSONAL PORTFOLIO</span></footer>`;
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  updateProgress();
}

document.addEventListener('click', e => {
  const anchor = e.target.closest('a[href^="#"]:not([data-link])');
  if (anchor && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && e.button === 0) {
    e.preventDefault();
    const target = anchor.getAttribute('href').slice(1);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!target) window.scrollTo({ top: 0, behavior: reduced ? 'instant' : 'smooth' });
    else document.getElementById(target)?.scrollIntoView({ behavior: reduced ? 'instant' : 'smooth' });
    return;
  }
  const link = e.target.closest('a[data-link]');
  if (!link || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
  e.preventDefault();
  history.pushState({}, '', link.getAttribute('href'));
  render();
  window.scrollTo({ top: 0, behavior: 'instant' });
});
function updateProgress() {
  const max = document.documentElement.scrollHeight - innerHeight;
  const bar = document.querySelector('.scroll-progress');
  if (bar) bar.style.width = `${max > 0 ? scrollY / max * 100 : 0}%`;
}
window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('popstate', () => { render(); window.scrollTo(0, 0); });
render();
