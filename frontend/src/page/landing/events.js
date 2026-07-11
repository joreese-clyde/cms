const events = [
  {
    title: "CAMPUS DEVCON 2025",
    type: "Conference",
    date: "October 28, 2025",
    location: "Misamis State University - Iligan Institute of Technology",
    description:
      "Connecting developers, students, and technology enthusiasts.",
    images: [
      "assets/images/events/devcon.jpg",
      "assets/images/events/devcon2.jpg"
    ]
  },

  {
    title: "Canva Design Workshop",
    type: "Workshop",
    date: "October 18, 2025",
    location: "St. Michael's College of Iligan City, Inc. - Computer Lab",
    description:
      "A hands-on workshop about Canva for public school teachers.",
    images: [
      "assets/images/events/canva.jpg",
      "assets/images/events/canva2.jpg"
    ]
  },

  {
    title: "CCS Days",
    type: "Workshop",
    date: "March 17, 2026",
    location: "St. Michael's College of Iligan City, Inc. - MacLab",
    description:
      "Mind over games.",
    images: [
      "assets/images/events/ccsdays.jpg",
      "assets/images/events/ccsdays2.jpg"
    ]
  }
];


let slideIntervals = [];

function displayEvents(filter = "All") {
  const eventGrid = document.getElementById("event-grid");

  if (!eventGrid) return;

  // Stop previous slideshows
  slideIntervals.forEach(interval => clearInterval(interval));
  slideIntervals = [];

  const filteredEvents =
    filter === "All"
      ? events
      : events.filter(event => event.type === filter);

  eventGrid.innerHTML = filteredEvents
    .map(
      event => `
        <article class="event-card">

          <img
            src="${event.images[0]}"
            alt="${event.title}"
            class="event-image"
            data-images='${JSON.stringify(event.images)}'
          >

          <div class="event-content">

            <div class="card-top">
              <span class="badge badge-solid">${event.type}</span>
              <span class="card-date">📅 ${event.date}</span>
            </div>

            <h3 class="card-title">${event.title}</h3>

            <p class="card-desc">
              ${event.description}
            </p>

            <div class="card-footer">
              <div class="card-meta-row">
                <span>📍 ${event.location}</span>
              </div>
            </div>

          </div>

        </article>
      `
    )
    .join("");

  initializeSlideshows();
}

function initializeSlideshows() {
  const images = document.querySelectorAll(".event-image");

  images.forEach(img => {
    const imageList = JSON.parse(img.dataset.images);

    if (imageList.length <= 1) return;

    let current = 0;

    const interval = setInterval(() => {
      current = (current + 1) % imageList.length;

      img.style.opacity = "0";

      setTimeout(() => {
        img.src = imageList[current];
        img.style.opacity = "1";
      }, 300);

    }, 3000);

    slideIntervals.push(interval);
  });
}

export function initializeEventFilter() {
  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      buttons.forEach(btn => btn.classList.remove("active"));

      button.classList.add("active");

      displayEvents(button.dataset.filter);
    });
  });

  displayEvents("All");
}