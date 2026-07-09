export function HomePage() {
  return `
    <header id="navbar">
      <div class="nav-inner">
        <a href="#" class="nav-logo">
          <div class="logo-circle">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="3" fill="white"/>
              <circle cx="9" cy="2" r="1.5" fill="white" opacity=".7"/>
              <circle cx="9" cy="16" r="1.5" fill="white" opacity=".7"/>
              <circle cx="2" cy="9" r="1.5" fill="white" opacity=".7"/>
              <circle cx="16" cy="9" r="1.5" fill="white" opacity=".7"/>
              <line x1="9" y1="3.5" x2="9" y2="6" stroke="white" stroke-width="1" opacity=".5"/>
              <line x1="9" y1="12" x2="9" y2="14.5" stroke="white" stroke-width="1" opacity=".5"/>
              <line x1="3.5" y1="9" x2="6" y2="9" stroke="white" stroke-width="1" opacity=".5"/>
              <line x1="12" y1="9" x2="14.5" y2="9" stroke="white" stroke-width="1" opacity=".5"/>
            </svg>
          </div>
          <span class="logo-text">Cluster Mind Society</span>
        </a>

        <nav class="nav-links">
          <a href="#vmg">Vision</a>
          <a href="#vmg">Mission</a>
          <a href="#vmg">Goals</a>
          <a href="#events">Events</a>
          <a href="/officers" data-link>Officers</a>
          <a href="#events" class="btn-join">Join Us</a>
        </nav>

        <button class="hamburger" id="ham" aria-label="Menu">
          <span id="h1"></span><span id="h2"></span><span id="h3"></span>
        </button>
      </div>
      <div class="mobile-menu" id="mobile-menu">
        <a href="#vmg" onclick="closeMobile()">Vision</a>
        <a href="#vmg" onclick="closeMobile()">Mission</a>
        <a href="#vmg" onclick="closeMobile()">Goals</a>
        <a href="#events" onclick="closeMobile()">Events</a>
        <a href="#officers" onclick="closeMobile()">Officers</a>
        <a href="#events" class="btn-join" onclick="closeMobile()">Join Us</a>
      </div>
    </header>

    <!-- ═══════════════════════════════ HERO ═══════════════════════════════ -->
    <section id="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div style="max-width:760px">
          <div class="hero-tag">
            <span class="hero-tag-dot"></span>
            <span>Connecting Minds, Building Futures</span>
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
            <a href="officers.html" class="btn-outline">Meet Our Officers</a>
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

    <!-- ═══════════════════════════ VISION / MISSION / GOALS ═════════════════ -->
    <section id="vmg">
      <div class="section-inner">
        <div class="section-header">
          <div>
            <p class="section-eyebrow">Who Are We</p>
            <h2 class="section-title">Centered in grace,<br><em> active in love.</em></h2>
          </div>
          <p class="section-desc">
            Our community is a body of companions, united in stillness to discern our shared purpose and sent forth to labor together for the greater good.
          </p>
        </div>

        <div class="vmg-grid">
          <!-- Vision -->
          <div class="vmg-card">
            <div class="vmg-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="5" stroke="#66b2b2" stroke-width="1.5"/>
                <path d="M14 2v4M14 22v4M2 14h4M22 14h4" stroke="#66b2b2" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M5.5 5.5l2.8 2.8M19.7 19.7l2.8 2.8M5.5 22.5l2.8-2.8M19.7 8.3l2.8-2.8" stroke="#66b2b2" stroke-width="1.2" stroke-linecap="round" opacity=".5"/>
              </svg>
            </div>
            <div>
              <p class="vmg-tag">01 — Vision</p>
              <h3 class="vmg-title">A world united by collective intelligence.</h3>
                  <!-- <p class="vmg-body">We envision a global network of empowered thinkers who transcend boundaries — cultural, geographic, and disciplinary — to tackle the defining challenges of our era with clarity and conviction.</p>-->
            </div>
            <div class="vmg-more">
              Learn more
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
          </div>

          <!-- Mission (featured) -->
          <div class="vmg-card featured">
            <div class="vmg-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 4C8.477 4 4 8.477 4 14s4.477 10 10 10 10-4.477 10-10S19.523 4 14 4z" stroke="#66b2b2" stroke-width="1.5"/>
                <path d="M14 9v5l3 3" stroke="#66b2b2" stroke-width="1.5" stroke-linecap="round"/>
                <circle cx="14" cy="14" r="1.5" fill="#66b2b2"/>
              </svg>
            </div>
            <div>
              <p class="vmg-tag">02 — Mission</p>
              <h3 class="vmg-title">Cultivate minds. Amplify impact.</h3>
                    <!--<p class="vmg-body">Our mission is to foster a vibrant community of learners and doers — providing the programs, mentorship, and platforms that equip members to lead with insight, collaborate with purpose, and act with integrity.</p>-->
            </div>
            <div class="vmg-more">
              Learn more
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
          </div>

          <!-- Goals -->
          <div class="vmg-card">
            <div class="vmg-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M6 22L12 12l4 6 4-10 4 8" stroke="#66b2b2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="22" cy="26" r="2" fill="#66b2b2" opacity=".4"/>
              </svg>
            </div>
            <div>
              <p class="vmg-tag">03 — Goals</p>
              <h3 class="vmg-title">Build. Connect. Lead. Repeat.</h3>
                    <!--<p class="vmg-body">We set out to grow a diverse membership of 5,000 active contributors by 2027, launch 100 collaborative projects annually, and establish regional hubs across 20 countries — turning ideas into enduring institutions.</p>-->
            </div>
            <div class="vmg-more">
              Learn more
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════ EVENTS ═══════════════════════════════ -->
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

        <!-- Featured -->
        <div class="featured-event" id="featured-event">
          <div>
            <div class="badges">
              <span class="badge badge-solid">Featured</span>
              <span class="badge badge-outline">Conference</span>
            </div>
            <h3 class="featured-title">CAMPUS DEVCON 2025</h3>
            <p class="featured-desc">We are grateful for this opportunity. This event has been instrumental in shaping our work, allowing us to connect with so many people, discover new perspectives, and learn valuable lessons..</p>
            <div class="meta-row">
              <span class="meta-item">📅 October 28, 2025</span>
              <span class="meta-item">📍 Misamis State University - Iligan Institute of Technology</span>
            </div>
          </div>
        </div>

        <!-- Event grid -->
        <div class="event-grid" id="event-grid"></div>
      </div>
    </section>

    <!-- ═══════════════════════════════ FOOTER ═══════════════════════════════ -->
    <footer>
      <div class="footer-inner">
        <div class="footer-grid">
          <div>
            <div class="footer-brand-logo">
              <div class="logo-circle">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="3" fill="white"/>
                  <circle cx="9" cy="2" r="1.5" fill="white" opacity=".7"/>
                  <circle cx="9" cy="16" r="1.5" fill="white" opacity=".7"/>
                  <circle cx="2" cy="9" r="1.5" fill="white" opacity=".7"/>
                  <circle cx="16" cy="9" r="1.5" fill="white" opacity=".7"/>
                  <line x1="9" y1="3.5" x2="9" y2="6" stroke="white" stroke-width="1" opacity=".5"/>
                  <line x1="9" y1="12" x2="9" y2="14.5" stroke="white" stroke-width="1" opacity=".5"/>
                  <line x1="3.5" y1="9" x2="6" y2="9" stroke="white" stroke-width="1" opacity=".5"/>
                  <line x1="12" y1="9" x2="14.5" y2="9" stroke="white" stroke-width="1" opacity=".5"/>
                </svg>
              </div>
              <span class="logo-text">Cluster Mind Society</span>
            </div>
            <p class="footer-brand-desc">A community of forward-thinking individuals building connections, knowledge, and impact across disciplines and borders.</p>
            <div class="socials">
              <a href="#" class="social-btn" aria-label="LinkedIn">Li</a>
              <a href="#" class="social-btn" aria-label="Twitter">Tw</a>
              <a href="#" class="social-btn" aria-label="Instagram">Ig</a>
              <a href="#" class="social-btn" aria-label="YouTube">Yt</a>
            </div>
          </div>
          <div>
            <p class="footer-col-title">Organization</p>
            <ul class="footer-links">
              <li><a href="#">Vision</a></li>
              <li><a href="#">Mission</a></li>
              <li><a href="#">Goals</a></li>
              <li><a href="#">Leadership</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          <div>
            <p class="footer-col-title">Community</p>
            <ul class="footer-links">
              <li><a href="#">Events</a></li>
              <li><a href="#">Membership</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Mentorship</a></li>
              <li><a href="#">Forum</a></li>
            </ul>
          </div>
          <div>
            <p class="footer-col-title">Connect</p>
            <ul class="footer-links">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Partner With Us</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
        </div>

        <div class="newsletter-strip">
          <div>
            <p class="newsletter-title">Stay in the loop.</p>
            <p class="newsletter-sub">Get event updates, insights, and community news every two weeks.</p>
          </div>
          <div class="newsletter-form">
            <input class="newsletter-input" type="email" placeholder="your@email.com" />
            <button class="btn-subscribe">Subscribe</button>
          </div>
        </div>

        <div class="footer-bottom">
          <p class="footer-copy">© <span id="year"></span> Cluster Mind Society. All rights reserved.</p>
          <div class="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}