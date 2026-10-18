import '@fontsource-variable/dm-sans';
import './style.css';
import { researchContent } from './research.js';
import { awardsContent } from './awards.js';

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
          <div class="eyebrow"><span class="status-dot"></span> A WORK IN PROGRESS. ALWAYS.</div>
          <h1 id="about-heading">Curiosity.<br>Code.<br><span class="serif">Possibility.</span><span class="period">◎</span></h1>
          <p class="intro">Hi, I’m <strong>Guneet Kapur</strong> — a student exploring computer science, engineering, and the things we haven’t figured out yet.</p>
          <a class="button" href="#research">Explore my work <span>↗</span></a>
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
    <a href="#about" class="wordmark" aria-label="Back to About">GK<span>◎</span></a>
    <nav aria-label="Main navigation">${Object.entries(sections).map(([id, section], i) => `<a href="#${id}" ${id === 'about' ? 'aria-current="location"' : ''}><span class="nav-number">0${i + 1}</span>${section.title}<span class="nav-dot"></span></a>`).join('')}</nav>
    <span class="header-note">PERSONAL PORTFOLIO <span>↗</span></span>
  </header>
  <main>${Object.entries(sections).map(([id, section]) => `<section id="${id}" class="portfolio-section" aria-labelledby="${id}-heading">${section.content}</section>`).join('')}</main>
  <footer class="section"><a href="#about" class="wordmark" aria-label="Back to About">GK<span>◎</span></a><p>A curious mind. An open road.</p><a href="#about" class="back-top">BACK TO TOP ↑</a><span class="footer-small">GUNEET KAPUR · PERSONAL PORTFOLIO</span></footer>
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
