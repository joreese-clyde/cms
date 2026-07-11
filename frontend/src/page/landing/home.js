import { initializeEventFilter } from "./events.js";

export function HomePage() {
  setTimeout(() => {
    initializeEventFilter();

    const hamburger = document.getElementById("ham");
    const mobileMenu = document.getElementById("mobile-menu");

    if (hamburger && mobileMenu) {
      hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        mobileMenu.classList.toggle("active");
      });

      const menuLinks = mobileMenu.querySelectorAll("a");

      menuLinks.forEach(link => {
        link.addEventListener("click", () => {
          hamburger.classList.remove("active");
          mobileMenu.classList.remove("active");
        });
      });
    }
  }, 0);

  return `
    <header id="navbar">
      <div class="nav-inner">
        <a href="#" class="nav-logo">
          <div class="logo-circle">
          <img src="assets/images/logo/cms3.png" alt="Cluster Mind Society Logo" class="logo-img">
          </div>
          <span class="logo-text">Cluster Mind Society</span>
        </a>
        <nav class="nav-links">
          <a href="#vmg">Vision</a>
          <a href="#vmg">Mission</a>
          <a href="#vmg">Goals</a>
          <a href="#events">Events</a>
          <a href="/officers" data-link>Officers</a>
          <a href="https://forms.gle/4AHmdi6G95mVqG6J6" class="btn-join">Join Us</a>
        </nav>
        <button class="hamburger" id="ham" aria-label="Menu">
          <span id="h1"></span><span id="h2"></span><span id="h3"></span>
        </button>
      </div>
      <div class="mobile-menu" id="mobile-menu">
        <a href="#vmg">Vision</a>
        <a href="#vmg">Mission</a>
        <a href="#vmg">Goals</a>
        <a href="#events">Events</a>
        <a href="/officers" data-link onclick="closeMobile()">Officers</a>
        <a href="https://forms.gle/4AHmdi6G95mVqG6J6" class="btn-join" onclick="closeMobile()">Join Us</a>
      </div>
    </header>
    <section id="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div style="max-width:760px">
          <div class="hero-tag">
            <span class="hero-tag-dot"></span>
            <span>One byte at a time</span>
          </div>
          <h1 class="hero-h1">
            Where great<br>
            <em>minds</em> cluster<br>
            and thrive.
          </h1>
          <p class="hero-sub">
            Cluster Mind Society is a growing community where knowledge, collaboration, and innovation intersect — shaping leaders and thinkers of tomorrow.
          </p>
          <div class="hero-btns">
            <a href="#vmg" class="btn-primary">Discover Our Mission</a>
            <a href="#events" class="btn-outline">View Events</a>
            <a href="/officers" data-link class="btn-outline">Meet Our Officers</a>
          </div>
        </div>
        <div class="hero-stats">
          <div><div class="stat-val">200+</div><div class="stat-lbl">Members</div></div>
          <div><div class="stat-val">48</div><div class="stat-lbl">Dean's Lister</div></div>
          <!--<div><div class="stat-val">12</div><div class="stat-lbl"></div></div>-->
          <!--<div><div class="stat-val">5</div><div class="stat-lbl">Years of Impact</div></div>-->
        </div>
      </div>
    </section>
   <section id="vmg">
    <div class="section-inner">
      <div class="section-header">
        <div>
          <p class="section-eyebrow">Who Are We</p>
          <h2 class="section-title">
            Centered in grace,<br>
            <em>active in love.</em>
          </h2>
        </div>
        <p class="section-desc">
          Our community is a body of companions, united in stillness to discern our shared purpose and sent forth to labor together for the greater good.
        </p>
      </div>
    <div class="vmg-grid">
      <div class="vmg-card">
        <div class="vmg-icon">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="5" stroke="#66b2b2" stroke-width="1.5"/>
            <path d="M14 2v4M14 22v4M2 14h4M22 14h4" stroke="#66b2b2" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M5.5 5.5l2.8 2.8M19.7 19.7l2.8 2.8M5.5 22.5l2.8-2.8M19.7 8.3l2.8-2.8" stroke="#66b2b2" stroke-width="1.2" stroke-linecap="round" opacity=".5"/>
          </svg>
        </div>

        <div>
          <h3 class="vmg-title">Vision</h3>
          <p class="vmg-body">
            Building a community of innovative students who embrace excellence,
            leadership, collaboration, and Ignacian values.
          </p>
        </div>

        <a href="/vmg#vision" data-link>
          Learn more
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
      <div class="vmg-card featured">
        <div class="vmg-icon">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M14 4C8.477 4 4 8.477 4 14s4.477 10 10 10 10-4.477 10-10S19.523 4 14 4z" stroke="#66b2b2" stroke-width="1.5"/>
            <path d="M14 9v5l3 3" stroke="#66b2b2" stroke-width="1.5" stroke-linecap="round"/>
            <circle cx="14" cy="14" r="1.5" fill="#66b2b2"/>
          </svg>
        </div>

        <div>
          <h3 class="vmg-title">Mission</h3>
          <p class="vmg-body">
            Developing students' academic, technical, and leadership skills
            through technology-driven programs and collaborative learning.
          </p>
        </div>

        <a href="/vmg#mission" data-link>
          Learn more
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
      <div class="vmg-card">
        <div class="vmg-icon">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M6 22L12 12l4 6 4-10 4 8"
              stroke="#66b2b2"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"/>
            <circle cx="22" cy="26" r="2" fill="#66b2b2" opacity=".4"/>
          </svg>
        </div>
          <div>
            <h3 class="vmg-title">Goals</h3>
          <p class="vmg-body">
            Equipping members with the knowledge, values, and experience needed
            to become responsible digital citizens and future technology professionals.
          </p>
        </div>

        <a href="/vmg#goals" data-link>
          Learn more
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </div>


    </div>
  </section>
    <section id="events">
      <div class="section-inner">
        <div class="events-header">
          <div>
            <p class="section-eyebrow">What We Do</p>
            <h2 class="section-title">Events we&apos;re<br><em>part of.</em></h2>
          </div>

          <div class="filter-bar" id="filter-bar">
            <button class="filter-btn active" data-filter="All">All</button>
            <button class="filter-btn" data-filter="Conference">Conference</button>
            <button class="filter-btn" data-filter="Workshop">Workshop</button>
            <button class="filter-btn" data-filter="Symposium">Symposium</button>
          </div>
        </div>
        <div class="featured-event">
            <div class="featured-content">
                <div class="badges">
                    <span class="badge badge-solid">Featured</span>
                    <span class="badge badge-outline">Conference</span>
                </div>
                <h3 class="featured-title">CAMPUS DEVCON 2025</h3>
                <p class="featured-desc">
                    We are grateful for this opportunity.
                    This event has been instrumental in shaping
                    our work, allowing us to connect with many
                    people and discover new perspectives.
                </p>
                <div class="meta-row">
                    <span class="meta-item">📅 October 28, 2025</span>
                    <span class="meta-item">📍 MSU-IIT</span>
                </div>
            </div>
            <div class="featured-pics">
                <img
                    src="assets/images/events/devcon.jpg"
                    class="featured-pic"
                    alt="Campus DevCon 2025"
                >
            </div>
        </div>


        <div class="event-grid" id="event-grid"></div>
      </div>
    </section>
    <footer>
      <div class="footer-inner">
        <div class="footer-grid">
          <div>
            <div class="footer-brand-logo">
              <div class="logo-circle">
                <img src="assets/images/logo/cms3.png" alt="Cluster Mind Society Logo" class="logo-img" />
              </div>
              <span class="logo-text">Cluster Mind Society</span>
            </div>
            <p class="footer-brand-desc">A community of forward-thinking individuals building connections, knowledge, and impact across disciplines and borders.</p>
            <div class="socials">
              <a href="https://www.facebook.com/clustermindsociety"
                class="social-btn"
                aria-label="Facebook"
                target="_blank">
                <img src="assets/images/logo/fb.jpg" alt="Facebook Logo" class="social-icon">
              </a>
              <a href="https://smciligan.edu.ph/"
                class="social-btn"
                aria-label="SMC"
                target="_blank">
                <img src="assets/images/logo/smcLogo.png" alt="SMC Logo" class="social-icon">
              </a>
            </div>
          </div>
          <div>
            <p class="footer-col-title">Organization</p>
            <ul class="footer-links">
              <li><a href="#vmg">Vision</a></li>
              <li><a href="#mission">Mission</a></li>
              <li><a href="#goals">Goals</a></li>
            </ul>
          </div>
          <div>
            <p class="footer-col-title">Community</p>
            <ul class="footer-links">
              <li><a href="#events">Events</a></li>
              <li><a href="https://forms.gle/4AHmdi6G95mVqG6J6">Membership</a></li>
              <!-- <li>
                <a href="https://smciligan.edu.ph/" target="_blank" rel="noopener noreferrer">
                  St. Michael's College of Iligan, Inc.
                </a> 
              </li> -->
            </ul>
          </div>
          <div>
            <p class="footer-col-title">Connect</p>
            <p class="footer-col-desc">Have questions or want to get involved? Reach out to us!</p>
            <a href="mailto:clustermindsociety@gmail.com" class="btn-outline">Email Us</a>
          </div>
        </div>

        <div class="footer-bottom">
          <p class="footer-copy">
            © 2026 Cluster Mind Society. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  `;
}