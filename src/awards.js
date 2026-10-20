// Accolades from the supplied résumé and subsequent personal updates.
// Only the award details are included; the résumé itself is not published.
export const awardGroups = [
  {
    id: 'science', title: 'Science & research', number: '01', color: 'pink',
    awards: [
      { organization: 'Terra North Jersey STEM Fair', title: 'TNJSF — First Place in Engineering & ISEF Grand Trip Contender', date: 'March 2026', detail: 'A Motion-Capture Driven Humanoid Hand for Dance and Cultural Preservation.', file: 'tnjsf-certificate.pdf', link: 'View award certificate ↗', relatedFile: 'tnjsf-judging.pdf', relatedLink: 'View the New Jersey ISEF Grand Trip Contender List ↗' },
      { organization: 'JSHS', title: 'Student Recognition Award & Abstract Publication', date: 'August 2026', detail: '2025–2026 Student Research Recognition Program · $550 Entry Award and abstract publication.', file: 'jshs-recognition.pdf', link: 'View JSHS recognition notification ↗' },
      { organization: 'Robofest Exhibition', title: 'First Place & Advancement to the World Championships', date: 'March 2026', detail: 'Senior Exhibition · Robotic replication of cultural dance hand gestures.', file: 'robofest-award.pdf', link: 'View trophy & certificate ↗' },
      { organization: 'Scholastic Art & Writing Awards', title: 'Silver Key', date: 'January 2026', detail: '“Preserving Traditions through Robotics” · Conceptual, Installation & Participatory Art.', file: 'silver-key-certificate.pdf', link: 'View Silver Key certificate ↗' },
      { organization: 'New Jersey Science League', title: 'Top 6 in Honors Chemistry', date: 'January 2026', file: 'nj-science-league-2026.pdf', link: 'View medal & certificate ↗' },
      { organization: 'National Merit Scholarship Program', title: 'Letter of Commendation', date: '2026', detail: 'For outstanding performance on the 2025 PSAT/NMSQT.', file: 'national-merit-commendation.pdf', link: 'View Letter of Commendation ↗' }
    ]
  },
  {
    id: 'robotics', title: 'Robotics & engineering', teamLabel: 'Team 7405M VEX', number: '02', color: 'purple',
    awards: [
      { organization: 'VEX World Championships', title: 'R16 of Technology Division - Top 160', date: '2026', detail: 'Team 7405M', externalLinks: [{ label: 'View Worlds results ↗', url: 'https://events.vex.com/robot-competitions/vex-robotics-competition/RE-V5RC-26-4025.html#results-' }, { label: 'Read the team news article ↗', url: 'https://www.tapinto.net/towns/millburn-slash-short-hills/sections/education/articles/millburn-robotics-team-claims-five-spots-for-the-world-championship' }] },
      { organization: 'VEX Robotics V5 High Stakes · NJ State Championship', title: 'Finalist & 3rd in Skills & Think Award (exceptional coding)', date: 'March 2026', file: 'nj-senate-vex-2026.pdf', link: 'View New Jersey Senate letter ↗', externalLinks: [{ label: 'View competition results ↗', url: 'https://events.vex.com/vi/robot-competitions/vex-robotics-competition/RE-V5RC-25-2959.html#k%E1%BA%BFt-qu%E1%BA%A3-' }] },
      { organization: 'Seton Hall University VEX Robotics Competition', title: 'First Place & Innovate Award', date: 'February 2026', externalLinks: [{ label: 'View competition awards ↗', url: 'https://events.vex.com/lt/robot-competitions/vex-robotics-competition/RE-V5RC-25-3194.html#apdovanojimai' }] },
      { organization: 'Cedar Grove VEX Robotics Competition', title: 'First Place', date: 'January 2026', externalLinks: [{ label: 'View competition awards ↗', url: 'https://events.vex.com/robot-competitions/vex-robotics-competition/RE-V5RC-25-1334.html#awards' }] },
      { organization: 'VEX World Championships', title: 'Attended the World Championships', date: '2025', detail: 'Team 7405M', externalLinks: [{ label: 'View Worlds teams ↗', url: 'https://events.vex.com/robot-competitions/vex-robotics-competition/RE-V5RC-24-8909.html#teams' }] },
      { organization: 'Millburn VEX Robotics Competition', title: 'Semifinalist', date: 'December 2025' },
      { organization: 'Cherry Hill VEXTRAVAGANZA', title: 'Finalist & Excellence Award', date: 'December 2025', externalLinks: [{ label: 'View competition awards ↗', url: 'https://events.vex.com/lv/robot-competitions/vex-robotics-competition/RE-V5RC-25-3597.html#apbalvojumi' }] },
      { organization: 'Toshiba ExploraVision', title: 'Honorable Mention', date: 'May 2025', file: 'toshiba-exploravision.pdf', link: 'View Honorable Mention certificate ↗' },
      { organization: 'South Brunswick VEX Robotics Competition', title: 'First Place', date: 'February 2025', externalLinks: [{ label: 'View competition results ↗', url: 'https://robotstatistics.com/event/57128' }] },
    ]
  },
  {
    id: 'community', title: 'Community & dance', number: '03', color: 'blue',
    awards: [
      { organization: 'Congressional Award', title: 'Silver Medal & STEM Star Award', date: 'August 2026', file: 'congressional-award-silver.pdf', link: 'View Silver Medal letter & STEM Star certificate ↗' },
      { organization: 'Shiamak Dance Competition', title: 'First Place', date: 'December 2024' }
    ]
  }
];

function awardLinks(award) {
  const links = [...(award.externalLinks || [])];
  if (award.file) links.unshift({ label: award.link, url: `/research/${award.file}#toolbar=0&navpanes=0` });
  if (award.relatedFile) links.push({ label: award.relatedLink, url: `/research/${award.relatedFile}#toolbar=0&navpanes=0` });
  return links.length
    ? `<div class="honor-document-links">${links.map(link => `<a href="${link.url}" target="_blank" rel="noopener">${link.label}</a>`).join('')}</div>`
    : '<span class="honor-ring" aria-hidden="true">◎</span>';
}

function awardDateTime(date) {
  if (/^\d{4}$/.test(date)) return date;
  const parsed = new Date(date);
  return `${parsed.getFullYear()}-${String(parsed.getMonth() + 1).padStart(2, '0')}`;
}

export const awardsContent = `
  <section class="section page-intro honors-intro reveal">
    <h2 id="awards-heading" class="page-title">My Awards &amp; Distinctions<br><span class="serif">Over The Years</span></h2>
    <nav class="honors-chapters" aria-label="Award categories">${awardGroups.map(group => `<a class="chapter-link ${group.color}" href="#${group.id}"><span class="chapter-number">${group.number}</span><span>${group.title}</span><span aria-hidden="true">↘</span></a>`).join('')}</nav>
  </section>
  ${awardGroups.map(group => `<section id="${group.id}" class="section honors-chapter ${group.color}" aria-labelledby="${group.id}-heading">
    <div class="honors-chapter-heading reveal"><div><p class="eyebrow">Chapter ${group.number}</p><h2 id="${group.id}-heading">${group.title}${group.teamLabel ? ` <span class="team-label">(${group.teamLabel})</span>` : ''}</h2></div></div>
    <div class="honors-grid">${group.awards.map((award, i) => `<article class="honor-card reveal">
      <div class="honor-card-top"><span class="honor-organization">${award.organization}</span><span class="honor-sequence" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span></div>
        <h3>${award.title}</h3>${award.detail ? `<p class="honor-detail">${award.detail}</p>` : ''}
        <div class="honor-card-bottom"><time datetime="${awardDateTime(award.date)}">${award.date}</time>${awardLinks(award)}</div>
    </article>`).join('')}</div>
  </section>`).join('')}
  <section id="contact" class="section closing honors-closing contact-box reveal" aria-labelledby="contact-heading">
    <div class="contact-copy"><h2 id="contact-heading">Contact Me!</h2><p class="contact-intro">Feel free to reach out to talk, I am open to discussions with anyone!</p></div>
    <address class="contact-details">
      <a href="mailto:guneet@kapurs.ws"><span class="contact-label">Email</span><span class="contact-value">guneet@kapurs.ws</span></a>
    </address>
  </section>`;
