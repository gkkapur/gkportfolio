const asset = name => `/research/${name}`;

function pdfReader(title, file, open = false, label = 'Read here') {
  return `<details class="document-reader" ${open ? 'open' : ''}><summary>${label} <span>Expand / collapse ↓</span></summary>
      <object data="${asset(file)}" type="application/pdf" aria-label="${title}"><p>This browser doesn’t support inline PDF reading. <a href="${asset(file)}" target="_blank" rel="noopener">Open the PDF separately ↗</a></p></object>
      <p class="reader-note">Scroll inside the document to read. You can also open the PDF separately above.</p>
    </details>`;
}

function documentReader(title, file, description, open = false, options = {}) {
  const { award = false, linkLabel = 'Open PDF ↗', relatedDocument } = options;
  const link = `<a class="document-link" href="${asset(file)}" target="_blank" rel="noopener">${linkLabel}</a>`;
  const relatedLink = relatedDocument ? `<a class="document-link related-document-link" href="${asset(relatedDocument.file)}" target="_blank" rel="noopener">View the ${relatedDocument.title} ↗</a>` : '';
  return `<article class="document-card${award ? ' research-award-card' : ''}">
    <div class="document-header"><div><h3>${title}</h3>${award ? link : ''}${relatedLink}<p>${description}</p></div>${award ? '' : link}</div>
    ${pdfReader(title, file, open)}
    ${relatedDocument ? pdfReader(relatedDocument.title, relatedDocument.file, false, 'Read the judging list here') : ''}
  </article>`;
}

export const researchContent = `
  <section class="section page-intro research-intro reveal">
    <div class="research-intro-layout">
      <div class="research-intro-copy">
        <h2 id="research-heading" class="page-title">My Research<br><span class="serif">Journey</span></h2>
        <p class="intro">From combining my passions in dance and robotics to finding patterns in data with machine learning. The two projects that captivated my interests.</p>
        <div class="page-index"><a href="#project-01">01 — Robotics & culture ↓</a><a href="#project-02">02 — Machine learning ↓</a></div>
      </div>
      <div class="research-photos" aria-label="Photos from the Terra North Jersey STEM Fair">
        <figure class="research-photo presentation"><a href="${asset('tnjsf-award-presentation.webp')}" target="_blank" rel="noopener" aria-label="Open the TNJSF award presentation photo"><img src="${asset('tnjsf-award-presentation.webp')}" alt="A student shaking hands with a presenter on the TNJSF awards stage" width="1070" height="1426" decoding="async"></a></figure>
        <figure class="research-photo display"><a href="${asset('tnjsf-research-display.webp')}" target="_blank" rel="noopener" aria-label="Open the TNJSF research display photo"><img src="${asset('tnjsf-research-display.webp')}" alt="Student beside the motion-capture driven robotic hand research display at TNJSF" width="1169" height="1600" decoding="async"></a></figure>
        <figure class="research-photo ceremony"><a href="${asset('tnjsf-award-ceremony.webp')}" target="_blank" rel="noopener" aria-label="Open the TNJSF awards ceremony photo"><img src="${asset('tnjsf-award-ceremony.webp')}" alt="Students holding certificates at the Terra North Jersey STEM Fair awards ceremony" width="1200" height="935" decoding="async"></a></figure>
      </div>
    </div>
  </section>

  <section id="project-01" class="section project reveal">
    <div class="project-number">01<span>Robotics & cultural preservation</span></div>
    <div class="project-body">
      <div class="tags"><span>Robotics</span><span>Computer vision</span><span>Independent research</span></div>
      <h2>A Motion-Capture Driven Humanoid Hand for Dance and Cultural Preservation</h2>
      <p class="project-summary">An embodied archive of movement: capturing, storing, and reproducing the hand gestures that carry cultural stories.</p>
      <div class="project-showcase">
        <figure class="research-video"><video controls playsinline preload="metadata" aria-label="Demonstration of the motion-capture driven robotic hand"><source src="${asset('robotic-hand.mp4')}" type="video/mp4">Your browser doesn’t support this video. <a href="${asset('robotic-hand.mp4')}">Download the demonstration</a>.</video><figcaption>The robotic hand in motion</figcaption></figure>
        <div class="abstract-copy"><span class="eyebrow">About the project</span><h3>Preserving tradition,<br>one gesture at a time.</h3>
          <p>Dance passes down stories, values, and traditions through movement. But culturally significant hand gestures can change or be lost over time. I wanted to explore how robotics could help preserve them in a form we can replay and learn from.</p>
          <p>I built a 3D-printed humanoid hand controlled by an Arduino Nano. Using MediaPipe and OpenCV, the system captures live hand movements, translates them into joint angles, and reproduces the gestures physically. Recorded angles are saved in CSV files for consistent playback, with a website database designed to archive and share gestures across cultures.</p>
          <p>I evaluated reproduction using angular deviation and a pose similarity score. The work explores how a robotic hand can become a “living archive” of cultural expression.</p>
          <p class="summary-credit">Read the full abstract below</p>
        </div>
      </div>
      <p class="research-question"><strong>My Research Question:</strong> How accurately can a humanoid robotic hand reproduce recorded dance hand gestures using motion-capture data?</p>

      <div class="project-documents"><div class="subsection-heading"><span class="eyebrow">Read the work</span><h3>The research, in full.</h3></div>
        ${documentReader('Research paper', 'robotic-hand-paper.pdf', 'Background, methods, results, and future directions.', true)}
        ${documentReader('Project abstract', 'robotic-hand-abstract.pdf', 'The original overview of the robotic hand project.')}
      </div>
      <div class="research-awards"><div class="subsection-heading"><span class="eyebrow">Project recognition</span><h3>Awards & distinctions</h3></div>
        ${documentReader('TNJSF — First Place in Engineering & ISEF Grand Trip Contender', 'tnjsf-certificate.pdf', 'Terra North Jersey STEM Fair · 2026', false, { award: true, linkLabel: 'Click here for the Award Certificate.', relatedDocument: { title: 'ISEF Grand Prize Judging List', file: 'tnjsf-judging.pdf' } })}
        <p class="official-awards-link"><a href="https://tnjsf.org/cgi-bin/AwardsList.pl" target="_blank" rel="noopener">View the official TNJSF awards list ↗</a></p>
        ${documentReader('Robofest — First Place Senior Exhibition and Advancement to the World Championships', 'robofest-award.pdf', 'Robotic replication of cultural dance hand gestures · 2026', false, { award: true, linkLabel: 'Click here for Trophy and Certificate.' })}
        ${documentReader('Scholastic Art & Writing Awards — Silver Key', 'silver-key-certificate.pdf', '“Preserving Traditions through Robotics” · Conceptual, Installation & Participatory Art · 2026', false, { award: true, linkLabel: 'Click here for the Silver Key Certificate.' })}
        ${documentReader('JSHS — Student Recognition Award & Abstract Publication', 'jshs-recognition.pdf', 'Accepted into the 2025–2026 JSHS Student Research Recognition Program, with a $550 Entry Award and publication of my abstract in the digital JSHS Abstract Book.', false, { award: true, linkLabel: 'Click here for the JSHS Recognition and Award Notification.' })}
      </div>
    </div>
  </section>

  <section id="project-02" class="section project reveal">
    <div class="project-number">02<span>Machine learning</span></div>
    <div class="project-body"><div class="tags"><span>Machine learning</span><span>Data analysis</span><span>Summer research</span></div>
      <h2>Experimenting with Unsupervised Machine Learning Algorithms</h2>
      <p class="project-summary">Exploring how the choices we make in clustering shape the patterns we see in data.</p>
      <aside class="mentor-note"><span class="eyebrow">A summer of learning</span><h3>With gratitude to <a href="https://anassebari.com" target="_blank" rel="noopener">Dr. Anasse Bari</a>.</h3><p>I completed this research over the summer under the supervision of Dr. Anasse Bari of New York University. I’m deeply grateful for the opportunity to learn from him and explore machine learning through hands-on research. His guidance made this a meaningful part of my growth as a student and researcher.</p></aside>
      <div class="ml-overview"><h3>Finding structure in the data.</h3><p>My paper examines clustering methods and related machine learning approaches, then applies K-means to a customer segmentation dataset of 200 people. I explored how adding age as a feature, changing the number of clusters, comparing distance measures, and using K-means++ initialization affected the resulting groups.</p></div>
      <p class="research-question"><strong>My Research Question:</strong> How do feature selection and parameter choices affect the patterns identified by clustering?</p>
      <div class="project-documents">${documentReader('Machine learning research paper', 'machine-learning-paper.pdf', 'Experimenting with Unsupervised Machine Learning Algorithms · Supervised by Dr. Anasse Bari.', true)}</div>
    </div>
  </section>`;
