export function VMGPage() {
  setTimeout(() => {
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, 0);

  return `
    <div class="wrap">

      <header class="masthead">
        <div class="masthead-mark">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <circle cx="11" cy="11" r="10" stroke="#4d6b6a" stroke-width="1"/>
            <circle cx="11" cy="11" r="5.5" stroke="#4d6b6a" stroke-width="1" stroke-dasharray="2 2"/>
          </svg>

          <a href="/home" data-link>Dashboard</a> | Vision, Mission & Goals
        </div>

        <div class="masthead-term">
          Cluster Mind Society
        </div>
      </header>

      <section class="hero">
        <h1>Vision, Mission<br><em>& Goals</em></h1>

        <p>
          Guided by faith, driven by excellence, and committed to service for the
          growth of every Cluster Mind Society member.
        </p>
      </section>

      <main class="vmg">

        <article class="vmg-card" id="vision">
          <span class="vmg-label">Vision</span>

          <h2>A Community of Purpose</h2>

          <p>
            A student community at St. Michael's College of Iligan, Inc.
            where minds are united in faith, strengthened by excellence,
            and guided by service to form responsible leaders for society.
          </p>
        </article>

        <article class="vmg-card" id="mission">
          <span class="vmg-label">Mission</span>

          <h2>Our Commitment</h2>

          <p>
            Cluster Mind Society is an Ignacian-inspired organization of
            college students committed to nurturing faith, developing
            excellence, and promoting service through collaboration,
            leadership, and meaningful student engagement.
          </p>
        </article>

        <article class="vmg-card" id="goals">
          <span class="vmg-label">Goals</span>

          <h2>What We Aim To Achieve</h2>

          <ul class="goal-list">
            <li>Strengthen faith through values formation and spiritual growth.</li>
            <li>Pursue excellence in academics, leadership, and professional development.</li>
            <li>Promote service through meaningful campus and community activities.</li>
            <li>Build collaboration through mentorship, teamwork, and shared initiatives.</li>
            <li>Develop responsible leaders who embody the values of St. Michael's College of Iligan, Inc.</li>
          </ul>
        </article>

      </main>

      <footer class="site-footer">
        <p><strong>Cluster Mind Society</strong> All rights reserved 2026.</p>
      </footer>

    </div>
  `;
} 