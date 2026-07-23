export function FAQPage() {
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
          Frequently Asked Questions
        </div>
        <div class="masthead-term">
          Cluster Mind Society
        </div>
      </header>
      <section class="hero">
        <h1>Frequently Asked<br><em>Questions</em></h1>
        <p>
          Everything you need to know about joining, participating in,
          and growing with Cluster Mind Society.
        </p>
      </section>
      <main class="faq">
        <article class="faq-card" id="faq-1">
          <span class="faq-label">Q1</span>
          <h2>What is Cluster Mind Society?</h2>
          <p>
            Cluster Mind Society is the official student organization of the College of Computer Studies at St. Michael's College of Iligan, Inc.,
            committed to empowering future technology leaders through innovation, collaboration, service, and Ignacian values. We inspire students to
            learn, lead, and make a meaningful impact in the ever-evolving world of technology.
          </p>
        </article>

        <article class="faq-card" id="faq-2">
          <span class="faq-label">Q2</span>
          <h2>Who can join the society?</h2>
          <p>
            Any student officially enrolled at St. Michael's College of Iligan, Inc. for School Year 2026–2027 is welcome to join Cluster Mind Society, regardless of college, department, or program. Whether you are from Computer Studies, Business, Education, Engineering, Nursing, or
            any other academic discipline, students who are passionate about technology, innovation, leadership, and
            community service are encouraged to become part of our growing community.
          </p>
        </article>

        <article class="faq-card" id="faq-3">
          <span class="faq-label">Q3</span>
          <h2>How do I become a member?</h2>
          <p>
            Becoming a member is easy! Simply click the <strong>"Join Us"</strong> button on the homepage to access the official membership registration form. After submitting your application,
            you will be invited to attend the orientation session and complete the necessary requirements set by the officers of the society.
          </p>
        </article>

        <article class="faq-card" id="faq-4">
          <span class="faq-label">Q4</span>
          <h2>What activities does the society offer?</h2>
          <p>
            We conduct workshops, coding sessions, seminars, technology-driven
            projects, and community outreach programs to help members grow
            academically, technically, and personally.
          </p>
        </article>

        <article class="faq-card" id="faq-5">
          <span class="faq-label">Q5</span>
          <h2>Are there membership fees?</h2>
          <p>
            Membership fees, if any, are announced at the start of each
            academic term and are used to support the society's programs,
            events, and initiatives.
          </p>
        </article>

        <article class="faq-card" id="faq-6">
          <span class="faq-label">Q6</span>
          <h2>How can I get involved in leadership roles?</h2>
          <p>
            Members who consistently participate in activities and demonstrate
            initiative and leadership may run for officer positions during the
            society's annual election period.
          </p>
        </article>

        <article class="faq-card" id="faq-7">
          <span class="faq-label">Q7</span>
          <h2>Can I join even if I am not into programming?</h2>
          <p>
            Yes. The society welcomes all students, regardless of their programming
            background or experience. You can participate in activities related to
            technology, innovation, creativity, collaboration, and community service.
            Whether you are a beginner or simply interested in learning more about
            technology, you are welcome to be part of the society.
          </p>
        </article>

        <article class="faq-card" id="faq-8">
          <span class="faq-label">Q8</span>
          <h2>What activities and events does the society offer?</h2>
          <p>
            The society offers various learning sessions and activities focused on
            technology, creativity, and collaboration. These include programming
            sessions for students who want to improve their coding skills and digital
            art sessions for aspiring digital artists who want to develop their
            creativity and design skills.
            <br><br>
            Programming sessions are supported by CCS tutors who can provide guidance
            and assistance. If you are having difficulties with programming concepts,
            you can reach out to our tutors and members for help and support.
          </p>
        </article>

        <article class="faq-card" id="faq-9">
          <span class="faq-label">Q9</span>
          <h2>Who do I contact for more information?</h2>
          <p>
            You may reach out to any current officer of Cluster Mind Society
            or visit our official social media pages for updates and inquiries.
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