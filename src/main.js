import '@fontsource-variable/dm-sans';
import './style.css';
import { researchContent } from './research.js';
import { awardsContent } from './awards.js';

const portraitUrl = '/images/guneet-kapur.webp';

function arrowIcon(direction) {
  const path = direction === '↘' ? 'M4 4l8 8M4 12h8V4' : 'M4 12l8-8M4 4h8v8';
  return `<svg class="inline-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="${path}"/></svg>`;
}

const sections = {
  about: {
    title: 'About',
    content: `
      <section class="hero section reveal">
        <div class="hero-copy">
          <p class="hero-topics">Robotics <span aria-hidden="true">·</span> Machine Learning <span aria-hidden="true">·</span> Dance <span aria-hidden="true">·</span> Creativity</p>
          <h1 id="about-heading">Guneet<br><span class="serif">Kapur</span></h1>
          <p class="intro">Hi, I’m Guneet! I’m a high school senior interested in computer science, robotics, and all things creative. My passion lies in exploring how dance and technology intersect and <strong>finding connections between disciplines people don’t often think to bring together</strong>. I’m drawn to projects that combine my interests in unexpected ways, and I want to build thoughtful, useful things that make a difference to the people and communities around me.</p>
          <a class="scroll-link" href="#beyond">SCROLL TO GET TO KNOW ME <span>↓</span></a>
        </div>
        <div class="portrait-wrap">
          <div class="portrait-frame">
            <img class="portrait-image" src="${portraitUrl}" alt="Portrait of Guneet Kapur" width="1038" height="1296" fetchpriority="high" decoding="async">
          </div>
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
  awards: { title: 'Awards', content: awardsContent }
};

// Preserve links shared before the portfolio became a single page.
const legacySection = location.pathname.replace(/^\/|\/$/g, '');
if (['about', 'research', 'awards'].includes(legacySection)) {
  history.replaceState(history.state, '', `/${location.search}${location.hash || `#${legacySection}`}`);
}
function normalizeLegacyHash() {
  if (!location.hash.startsWith('#/')) return false;
  history.replaceState(history.state, '', `#${location.hash.slice(2) || 'about'}`);
  return true;
}
normalizeLegacyHash();

document.title = 'Guneet Kapur — Personal Portfolio';
document.querySelector('#app').innerHTML = `
  <div class="scroll-progress"></div>
  <header class="site-header">
    <a href="#about" class="wordmark" aria-label="Guneet Kapur — back to About">Guneet Kapur</a>
    <nav aria-label="Main navigation">${Object.entries(sections).map(([id, section], i) => `<a href="#${id}" ${id === 'about' ? 'aria-current="location"' : ''}><span class="nav-number">0${i + 1}</span>${section.title}<span class="nav-dot"></span></a>`).join('')}</nav>
  </header>
  <main>${Object.entries(sections).map(([id, section]) => `<section id="${id}" class="portfolio-section" aria-labelledby="${id}-heading">${section.content}</section>`).join('')}</main>
  <footer class="section"><a href="#about" class="back-top">BACK TO TOP ↑</a><span class="footer-small">GUNEET KAPUR · PERSONAL PORTFOLIO</span></footer>
`.replace(/[↗↘]/g, arrowIcon);

const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    revealObserver.unobserve(entry.target);
  }
}), { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const header = document.querySelector('.site-header');
const portfolioSections = [...document.querySelectorAll('.portfolio-section')];
const navLinks = [...document.querySelectorAll('nav[aria-label="Main navigation"] a')];
let updateScheduled = false;

function updateScrollState() {
  updateScheduled = false;
  const max = document.documentElement.scrollHeight - innerHeight;
  document.querySelector('.scroll-progress').style.width = `${max > 0 ? scrollY / max * 100 : 0}%`;
  const threshold = header.getBoundingClientRect().height + 32;
  let current = 'about';
  for (const section of portfolioSections) {
    if (section.getBoundingClientRect().top <= threshold) current = section.id;
  }
  for (const link of navLinks) {
    if (link.hash === `#${current}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
}

function scheduleScrollUpdate() {
  if (!updateScheduled) {
    updateScheduled = true;
    requestAnimationFrame(updateScrollState);
  }
}
window.addEventListener('scroll', scheduleScrollUpdate, { passive: true });
window.addEventListener('resize', scheduleScrollUpdate);
window.addEventListener('hashchange', () => {
  if (normalizeLegacyHash()) {
    document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: 'instant' });
  }
  scheduleScrollUpdate();
});
new ResizeObserver(scheduleScrollUpdate).observe(document.querySelector('main'));

// The target sections are inserted by this module, so handle an initial deep link
// after layout; subsequent links and browser history use native anchor behavior.
requestAnimationFrame(() => {
  const target = document.getElementById(location.hash.slice(1));
  if (target) target.scrollIntoView({ behavior: 'instant' });
  updateScrollState();
});
