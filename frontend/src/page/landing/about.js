export function AboutPage() {
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
          About the Site
        </div>
        <div class="masthead-term">
          Cluster Mind Society
        </div>
      </header>
      <section class="hero">
        <h1>About<br><em>Us</em></h1>
        <p>
          Get to know Cluster Mind Society — who we are, what we stand for,
          and the people behind this platform.
        </p>
      </section>
      <main class="description">
        <article class="description-card">
          <span class="description-label">Who We Are</span>
          <h2>Cluster Mind Society</h2>
          <p>
            Cluster Mind Society is the official student organization of the
            College of Computer Studies at St. Michael's College of Iligan, Inc.,
            dedicated to empowering future technology leaders through innovation,
            collaboration, service, and Ignacian values.
          </p>
        </article>

        <article class="description-card" id="developers">
          <span class="description-label">Developers</span>
          <h2>Built By</h2>
          <p>
            This platform was designed and developed by members of Cluster Mind
            Society as part of our commitment to practical, technology-driven
            learning.
          </p>
          <div class="dev-grid">
            <div class="dev-item">
              <span class="dev-name">Joreese Clyde R. Manginsay</span>
              <span class="dev-role">Head Developer</span>
            </div>
            <div class="dev-item">
              <span class="dev-name">Daniel Vance S. Candole</span>
              <span class="dev-role">Assistant Developer</span>
            </div>
          </div>
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