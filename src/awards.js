// Accolades from the supplied résumé and subsequent personal updates.
// Only the award details are included; the résumé itself is not published.
export const awardGroups = [
  {
    id: 'science', title: 'Science & research', number: '01', color: 'pink',
    description: 'Exploring ideas, asking questions, and sharing what I discover.',
    awards: [
      { organization: 'Terra North Jersey STEM Fair', title: 'TNJSF — First Place in Engineering & ISEF Grand Trip Contender', date: 'March 2026', detail: 'A Motion-Capture Driven Humanoid Hand for Dance and Cultural Preservation.', file: 'tnjsf-certificate.pdf', link: 'View award certificate ↗', relatedFile: 'tnjsf-judging.pdf', relatedLink: 'View ISEF Grand Prize Judging List ↗' },
      { organization: 'JSHS', title: 'Student Recognition Award & Abstract Publication', date: 'August 2026', detail: '2025–2026 Student Research Recognition Program · $550 Entry Award and abstract publication.', file: 'jshs-recognition.pdf', link: 'View JSHS recognition notification ↗' },
      { organization: 'Robofest Exhibition', title: 'First Place & Advancement to the World Championships', date: 'March 2026', detail: 'Senior Exhibition · Robotic replication of cultural dance hand gestures.', file: 'robofest-award.pdf', link: 'View trophy & certificate ↗' },
      { organization: 'Scholastic Art & Writing Awards', title: 'Silver Key', date: 'January 2026', detail: '“Preserving Traditions through Robotics” · Conceptual, Installation & Participatory Art.', file: 'silver-key-certificate.pdf', link: 'View Silver Key certificate ↗' },
      { organization: 'New Jersey Science League', title: 'Top 6 in Honors Chemistry', date: 'January 2026' }
    ]
  },
  {
    id: 'robotics', title: 'Robotics & engineering', teamLabel: 'Team 7405M VEX', number: '02', color: 'purple',
    description: 'Building, iterating, and learning through competition.',
    awards: [
      { organization: 'VEX World Championships', title: 'Top 120', date: '2026', detail: 'Team 7405M' },
      { organization: 'VEX Robotics V5 High Stakes · NJ State Championship', title: 'Second Place', date: 'March 2026' },
      { organization: 'Seton Hall University VEX Robotics Competition', title: 'First Place & Innovate Award', date: 'February 2026' },
      { organization: 'Cedar Grove VEX Robotics Competition', title: 'First Place', date: 'January 2026' },
      { organization: 'VEX World Championships', title: 'Attended the World Championships', date: '2025', detail: 'Team 7405M' },
      { organization: 'Millburn VEX Robotics Competition', title: 'Semifinalist', date: 'December 2025' },
      { organization: 'Cherry Hill VEXTRAVAGANZA', title: 'Finalist & Excellence Award', date: 'December 2025' },
      { organization: 'Toshiba ExploraVision', title: 'Honorable Mention', date: 'May 2025' },
      { organization: 'South Brunswick VEX Robotics Competition', title: 'First Place', date: 'February 2025' },
      { organization: 'NJIT VEX Robotics Competition', title: 'Semifinalist', date: 'March 2024' }
    ]
  },
  {
    id: 'community', title: 'Community & dance', number: '03', color: 'blue',
    description: 'Making room for service, expression, and everything beyond the screen.',
    awards: [
      { organization: 'Congressional Award', title: 'Silver Medal & STEM Star Award', date: 'August 2026' },
      { organization: 'Shiamak Dance Competition', title: 'First Place', date: 'December 2024' }
    ]
  }
];

function awardDateTime(date) {
  if (/^\d{4}$/.test(date)) return date;
  const parsed = new Date(date);
  return `${parsed.getFullYear()}-${String(parsed.getMonth() + 1).padStart(2, '0')}`;
}

export const awardsContent = `
  <section class="section page-intro honors-intro reveal">
    <p class="eyebrow"><span class="status-dot"></span> Awards & distinctions · 2024–2026</p>
    <h2 id="awards-heading" class="page-title">Milestones<br><span class="serif">along the way.</span></h2>
    <p class="intro">From the research lab to the robotics field and the dance floor — moments of recognition across the things I love.</p>
    <nav class="honors-chapters" aria-label="Award categories">${awardGroups.map(group => `<a class="chapter-link ${group.color}" href="#${group.id}"><span class="chapter-number">${group.number}</span><span>${group.title}</span><span aria-hidden="true">↘</span></a>`).join('')}</nav>
  </section>
  ${awardGroups.map(group => `<section id="${group.id}" class="section honors-chapter ${group.color}" aria-labelledby="${group.id}-heading">
    <div class="honors-chapter-heading reveal"><div><p class="eyebrow">Chapter ${group.number}</p><h2 id="${group.id}-heading">${group.title}${group.teamLabel ? ` <span class="team-label">(${group.teamLabel})</span>` : ''}</h2></div><p>${group.description}</p></div>
    <div class="honors-grid">${group.awards.map((award, i) => `<article class="honor-card reveal">
      <div class="honor-card-top"><span class="honor-organization">${award.organization}</span><span class="honor-sequence" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span></div>
        <h3>${award.title}</h3>${award.detail ? `<p class="honor-detail">${award.detail}</p>` : ''}
        <div class="honor-card-bottom"><time datetime="${awardDateTime(award.date)}">${award.date}</time>${award.file ? `<div class="honor-document-links"><a href="/research/${award.file}" target="_blank" rel="noopener">${award.link}</a>${award.relatedFile ? `<a href="/research/${award.relatedFile}" target="_blank" rel="noopener">${award.relatedLink}</a>` : ''}</div>` : '<span class="honor-ring" aria-hidden="true">◎</span>'}</div>
    </article>`).join('')}</div>
  </section>`).join('')}
  <section id="contact" class="section closing honors-closing contact-box reveal" aria-labelledby="contact-heading">
    <h2 id="contact-heading">Contact Me!</h2>
    <address class="contact-details">
      <a href="tel:+19087391570"><span class="contact-label">Phone</span><span class="contact-value">908-739-1570</span></a>
      <a href="mailto:guneet@kapurs.ws"><span class="contact-label">Email</span><span class="contact-value">guneet@kapurs.ws</span></a>
    </address>
  </section>`;
