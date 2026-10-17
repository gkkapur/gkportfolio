const asset = name => `/research/${name}`;

function documentReader(title, file, description, open = false, options = {}) {
  const { award = false, linkLabel = 'Open PDF ↗' } = options;
  const link = `<a class="document-link" href="${asset(file)}" target="_blank" rel="noopener">${linkLabel}</a>`;
  return `<article class="document-card${award ? ' research-award-card' : ''}">
    <div class="document-header"><div><h3>${title}</h3>${award ? link : ''}<p>${description}</p></div>${award ? '' : link}</div>
    <details class="document-reader" ${open ? 'open' : ''}><summary>Read here <span>Expand / collapse ↓</span></summary>
      <object data="${asset(file)}" type="application/pdf" aria-label="${title}"><p>This browser doesn’t support inline PDF reading. <a href="${asset(file)}" target="_blank" rel="noopener">Open the PDF separately ↗</a></p></object>
      <p class="reader-note">Scroll inside the document to read. You can also open the PDF separately above.</p>
    </details>
  </article>`;
}

export const researchContent = `
  <section class="section page-intro reveal">
    <p class="eyebrow"><span class="status-dot"></span> Research & exploration</p>
    <h1>Questions worth<br><span class="serif">chasing.</span></h1>
    <p class="intro">From preserving the language of dance to finding patterns in data — two projects that brought my curiosity into practice.</p>
    <div class="page-index"><a href="#project-01">01 — Robotics & culture ↓</a><a href="#project-02">02 — Machine learning ↓</a></div>
  </section>

  <section id="project-01" class="section project reveal">
    <div class="project-number">01<span>Robotics & cultural preservation</span></div>
    <div class="project-body">
      <div class="tags"><span>Robotics</span><span>Computer vision</span><span>Independent research</span></div>
      <h2>A Motion-Capture Driven Humanoid Hand for Dance and Cultural Preservation</h2>
      <p class="project-summary">An embodied archive of movement: capturing, storing, and reproducing the hand gestures that carry cultural stories.</p>
      <div class="project-showcase">
        <figure class="research-video"><video controls playsinline preload="metadata" aria-label="Demonstration of the motion-capture driven robotic hand"><source src="${asset('robotic-hand.mp4')}" type="video/mp4">Your browser doesn’t support this video. <a href="${asset('robotic-hand.mp4')}">Download the demonstration</a>.</video><figcaption>The robotic hand in motion · Project demonstration</figcaption></figure>
        <div class="abstract-copy"><span class="eyebrow">About the project</span><h3>Preserving tradition,<br>one gesture at a time.</h3>
          <p>Dance passes down stories, values, and traditions through movement. But culturally significant hand gestures can change or be lost over time. I wanted to explore how robotics could help preserve them in a form we can replay and learn from.</p>
          <p>I built a 3D-printed humanoid hand controlled by an Arduino Nano. Using MediaPipe and OpenCV, the system captures live hand movements, translates them into joint angles, and reproduces the gestures physically. Recorded angles are saved in CSV files for consistent playback, with a website database designed to archive and share gestures across cultures.</p>
          <p>I evaluated reproduction using angular deviation and a pose similarity score. The work explores how a robotic hand can become a “living archive” of cultural expression.</p>
          <p class="summary-credit">Summary adapted from my abstract. Read the original below.</p>
        </div>
      </div>
      <div class="research-details"><div><span class="eyebrow">The question</span><p>How accurately can a humanoid robotic hand reproduce recorded dance hand gestures using motion-capture data?</p></div><div><span class="eyebrow">The approach</span><p>3D printing, Arduino, MediaPipe, and OpenCV connect captured joint angles to repeatable physical gestures.</p></div><div><span class="eyebrow">Looking ahead</span><p>A shared cultural gesture archive, with future work exploring wrist movement and testing across more participants.</p></div></div>

      <div class="project-documents"><div class="subsection-heading"><span class="eyebrow">Read the work</span><h3>The research, in full.</h3></div>
        ${documentReader('Research paper', 'robotic-hand-paper.pdf', 'Background, methods, results, and future directions.', true)}
        ${documentReader('Project abstract', 'robotic-hand-abstract.pdf', 'The original overview of the robotic hand project.')}
      </div>
      <div class="research-awards"><div class="subsection-heading"><span class="eyebrow">Project recognition</span><h3>Awards & distinctions</h3></div>
        ${documentReader('TNJSF — First Place in Engineering & ISEF Grand Trip Finalist', 'tnjsf-certificate.pdf', 'Terra North Jersey STEM Fair · 2026', false, { award: true, linkLabel: 'Click here for the Award Certificate.' })}
        <p class="official-awards-link"><a href="https://tnjsf.org/cgi-bin/AwardsList.pl" target="_blank" rel="noopener">View the official TNJSF awards list ↗</a></p>
        ${documentReader('Robofest — First Place Senior Exhibition and Advancement to the World Championships', 'robofest-award.pdf', 'Robotic replication of cultural dance hand gestures · 2026', false, { award: true, linkLabel: 'Click here for Trophy and Certificate.' })}
        ${documentReader('Scholastic Art & Writing Awards — Silver Key', 'silver-key-certificate.pdf', '“Preserving Traditions through Robotics” · Conceptual, Installation & Participatory Art · 2026', false, { award: true, linkLabel: 'Click here for the Silver Key Certificate.' })}
      </div>
    </div>
  </section>

  <section id="project-02" class="section project reveal">
    <div class="project-number">02<span>Machine learning</span></div>
    <div class="project-body"><div class="tags"><span>Machine learning</span><span>Data analysis</span><span>Summer research</span></div>
      <h2>Experimenting with Unsupervised Machine Learning Algorithms</h2>
      <p class="project-summary">Exploring how the choices we make in clustering shape the patterns we see in data.</p>
      <aside class="mentor-note"><span class="eyebrow">A summer of learning</span><h3>With gratitude to Dr. Anasse Bari.</h3><p>I completed this research over the summer under the supervision of Dr. Anasse Bari of New York University. I’m deeply grateful for the opportunity to learn from him and explore machine learning through hands-on research. His guidance made this a meaningful part of my growth as a student and researcher.</p></aside>
      <div class="ml-overview"><h3>Finding structure in the data.</h3><p>My paper examines clustering methods and related machine learning approaches, then applies K-means to a customer segmentation dataset of 200 people. I explored how adding age as a feature, changing the number of clusters, comparing distance measures, and using K-means++ initialization affected the resulting groups.</p><p>Adding age revealed a distinction between younger and older customers that income and spending score alone did not capture. Increasing the number of clusters split existing groups without uncovering clearly different customer types — a reminder that more complexity doesn’t always mean more insight.</p></div>
      <div class="research-details"><div><span class="eyebrow">The question</span><p>How do feature selection and parameter choices affect the patterns identified by clustering?</p></div><div><span class="eyebrow">The approach</span><p>Compare experimental variations against a five-cluster K-means baseline using income and spending score.</p></div><div><span class="eyebrow">What I learned</span><p>Interpretation matters: the meaning of a cluster depends on the features and assumptions behind it.</p></div></div>
      <div class="project-documents">${documentReader('Machine learning research paper', 'machine-learning-paper.pdf', 'Experimenting with Unsupervised Machine Learning Algorithms · Supervised by Dr. Anasse Bari.', true)}</div>
    </div>
  </section>`;
