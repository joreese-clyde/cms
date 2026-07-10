import { officersData } from "./officersData.js";

export function OfficersPage() {
  const createOfficerCard = (person, type) => {
    return `
      <article class="card card--${type}">
        <div class="rank">
          ${person.position}
        </div>
        <div class="seal">
          <span>
            ${person.initials}
          </span>
        </div>
        <h3 class="name">
          ${person.name}
        </h3>
        <p class="position">
          ${person.position}
        </p>

        <p class="blurb">
          ${person.description}
        </p>
      </article>
    `;
  };
  const staffCards = officersData.officers
    .map((person) => createOfficerCard(person, "staff"))
    .join("");
  return `
    <div class="wrap">
      <header class="masthead">
        <div class="masthead-mark">
          <a href="/home" data-link>
            Dashboard
          </a>

          <span>/</span>

          Officers
        </div>
        <div class="masthead-term">
          Academic Year 2026-2027
        </div>
      </header>
      <section class="hero">

        <div class="hero-eyebrow">
        </div>
        <h1>
          Cluster Mind Society
          <br>
          <em>Officers</em>
        </h1>
        <p>
          Meet the official officers responsible for
          leading and serving the organization.
        </p>
      </section>
      <main class="chart">
        <div class="tier">
          ${createOfficerCard(
            officersData.moderator,
            "moderator"
          )}
        </div>

        <div class="spine"></div>

        <div class="tier">
          ${createOfficerCard(
            officersData.mayor,
            "principal"
          )}
        </div>

        <div class="spine"></div>

        <div class="tier">
          ${createOfficerCard(
            officersData.viceMayor,
            "second"
          )}
        </div>

        <div class="spine"></div>

        <div class="tier--five-wrap">
          <div class="tier--five">
            ${staffCards}
          </div>
        </div>
      </main>


      <footer class="simple-footer">
        <p>
          © <span id="year"></span> Cluster Mind Society. All rights reserved.
        </p>
      </footer>

    </div>
  `;
}