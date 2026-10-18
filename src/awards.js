// Accolades transcribed from page two of the supplied résumé.
// Only the award details are included; the résumé itself is not published.
export const awardGroups = [
  {
    id: 'science', title: 'Science & research', number: '01', color: 'pink',
    description: 'Exploring ideas, asking questions, and sharing what I discover.',
    awards: [
      { organization: 'Terra North Jersey STEM Fair', title: 'First Place in Engineering & ISEF Grand Trip Finalist', date: 'March 2026', detail: 'A Motion-Capture Driven Humanoid Hand for Dance and Cultural Preservation.', file: 'tnjsf-certificate.pdf', link: 'View award certificate ↗' },
      { organization: 'JSHS', title: 'Student Recognition Award & Abstract Publication', date: 'August 2026' },
      { organization: 'Robofest Exhibition', title: 'First Place & Advancement to the World Championships', date: 'March 2026', detail: 'Senior Exhibition · Robotic replication of cultural dance hand gestures.', file: 'robofest-award.pdf', link: 'View trophy & certificate ↗' },
      { organization: 'Scholastic Art & Writing Awards', title: 'Silver Key', date: 'January 2026', detail: '“Preserving Traditions through Robotics” · Conceptual, Installation & Participatory Art.', file: 'silver-key-certificate.pdf', link: 'View Silver Key certificate ↗' },
      { organization: 'New Jersey Science League', title: 'Top 6 in Honors Chemistry', date: 'January 2026' }
    ]
  },
  {
    id: 'robotics', title: 'Robotics & engineering', number: '02', color: 'purple',
    description: 'Building, iterating, and learning through competition.',
    awards: [
      { organization: 'VEX Robotics V5 High Stakes · NJ State Championship', title: 'Second Place', date: 'March 2026' },
      { organization: 'Toshiba ExploraVision', title: 'Honorable Mention', date: 'May 2025' },
      { organization: 'Cedar Grove VEX Robotics Competition', title: 'First Place', date: 'January 2026' },
      { organization: 'South Brunswick Robotics Competitions', title: 'First Place', date: 'February 2025' },
      { organization: 'Seton Hall University VEX Robotics Competition', title: 'First Place & Innovate Award', date: 'February 2026' },
      { organization: 'Millburn Robotics Competitions', title: 'Semifinalist', date: 'December 2025' },
      { organization: 'NJIT Robotics Competition', title: 'Semifinalist', date: 'March 2024' },
      { organization: 'Cherry Hill VEXTRAVAGANZA', title: 'Finalist & Excellence Award', date: 'December 2025' }
    ]
  },
  {
    id: 'community', title: 'Community & dance', number: '03', color: 'blue',
    description: 'Making room for service, expression, and everything beyond the screen.',
    awards: [
      { organization: 'Congressional Award', title: 'Silver Medal', date: 'August 2026' },
      { organization: 'Shiamak Dance Competition', title: 'First Place', date: 'December 2024' }
    ]
  }
];

export const awardsContent = `
  <section class="section page-intro honors-intro reveal">
    <p class="eyebrow"><span class="status-dot"></span> Awards & distinctions · 2024–2026</p>
    <h2 id="awards-heading" class="page-title">Milestones<br><span class="serif">along the way.</span></h2>
    <p class="intro">From the research lab to the robotics field and the dance floor — moments of recognition across the things I love.</p>
    <nav class="honors-chapters" aria-label="Award categories">${awardGroups.map(group => `<a class="chapter-link ${group.color}" href="#${group.id}"><span class="chapter-number">${group.number}</span><span>${group.title}</span><span aria-hidden="true">↘</span></a>`).join('')}</nav>
  </section>
  ${awardGroups.map(group => `<section id="${group.id}" class="section honors-chapter ${group.color}" aria-labelledby="${group.id}-heading">
    <div class="honors-chapter-heading reveal"><div><p class="eyebrow">Chapter ${group.number}</p><h2 id="${group.id}-heading">${group.title}</h2></div><p>${group.description}</p></div>
    <div class="honors-timeline">${group.awards.map((award, i) => `<article class="honor-entry ${i % 2 ? 'right' : 'left'} reveal">
      <span class="honor-node" aria-hidden="true"><span></span></span>
      <div class="honor-card"><div class="honor-card-top"><span class="honor-organization">${award.organization}</span><span class="honor-sequence" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span></div>
        <h3>${award.title}</h3>${award.detail ? `<p class="honor-detail">${award.detail}</p>` : ''}
        <div class="honor-card-bottom"><time datetime="${new Date(award.date).getFullYear()}-${String(new Date(award.date).getMonth() + 1).padStart(2, '0')}">${award.date}</time>${award.file ? `<a href="/research/${award.file}" target="_blank" rel="noopener">${award.link}</a>` : '<span class="honor-ring" aria-hidden="true">◎</span>'}</div>
      </div>
    </article>`).join('')}</div>
  </section>`).join('')}
  <section class="section closing honors-closing reveal"><span class="eyebrow">Still curious. Still building.</span><h2>Every milestone opens<br>another possibility.</h2><a class="button" href="#research">Explore my research <span>↗</span></a></section>`;
