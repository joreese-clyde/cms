export function VMGPage() {
  setTimeout(() => {
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, 0);
  return `
    <div class="wrap">
      <header class="masthead">
        <div class="masthead-mark">
          <a href="/home" data-link>Dashboard</a>
          <span>/</span>
          Vision, Mission & Goals
        </div>
        <div class="masthead-term">
          Cluster Mind Society
        </div>
      </header>
      <section class="hero">
        <h1>Vision, Mission<br><em>& Goals</em></h1>
        <p>
          Empowering future technology leaders through innovation,
          collaboration, service, and Ignacian values.
        </p>
      </section>
      <main class="vmg">
        <article class="vmg-card" id="vision">
          <span class="vmg-label">Vision</span>
          <h2>A society with a purpose</h2>
          <p>
            Cluster Mind Society envisions a thriving community of empowered
            student leaders who embrace technology, innovation, and collaboration
            to inspire excellence, uphold Ignacian values, and create meaningful
            contributions that positively influence both the academic community
            and society.
          </p>
        </article>

        <article class="vmg-card" id="mission">
          <span class="vmg-label">Mission</span>
          <h2>We guarantee our focus on</h2>
          <p>
            Cluster Mind Society is dedicated to fostering academic growth,
            technical competence, leadership, and ethical responsibility by
            providing technology-driven programs, collaborative learning
            opportunities, and community-centered initiatives that cultivate
            creativity, innovation, and lifelong learning among students.
          </p>
        </article>
        <article class="vmg-card" id="goals">
          <span class="vmg-label">Goals</span>
          <h2>Our Goals</h2>
          <ol class="goal-list">
            <li>Promote academic excellence in Computer Science, Information Technology, and related disciplines.</li>
            <li>Develop members' technical skills through workshops, coding sessions, and technology-driven projects.</li>
            <li>Encourage creativity, innovation, and problem-solving to address real-world challenges.</li>
            <li>Strengthen leadership, teamwork, and communication through collaborative activities.</li>
            <li>Provide opportunities for professional growth through seminars, certifications, and industry engagement.</li>
            <li>Serve the school and community through technology-based outreach and volunteer initiatives.</li>
            <li>Uphold the Ignacian values of faith, excellence, integrity, and service in every endeavor.</li>
          </ol>
        </article>
        <article class="vmg-card" id="objective">
          <span class="vmg-label">Objective</span>

          <h2>Our Objective</h2>
          <p>
            To empower students of St. Michael's College of Iligan, Inc. to become digitally literate, responsible, innovative, and competent users of technology through continuous learning, collaboration, and practical experience.
          </p>
        </article>
      </main>
      <footer class="simple-footer">
        <p>
          © 2026 Cluster Mind Society. All rights reserved.
        </p>
      </footer>
    </div>
  `;
}