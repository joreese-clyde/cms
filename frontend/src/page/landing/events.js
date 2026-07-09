const events = [
  {
    title: "CAMPUS DEVCON 2025",
    type: "Conference",
    date: "October 28, 2025",
    location: "Misamis State University - Iligan Institute of Technology",
    description:
      "Connecting developers, students, and technology enthusiasts."
  },

  {
    title: "Canva Design Workshop",
    type: "Workshop",
    date: "November 15, 2025",
    location: "Saint Michael's College - Computer Lab",
    description:
      "A hands-on workshop about canva for public school teachers."
  },

  {
    title: "AI Research Symposium",
    type: "Symposium",
    date: "December 10, 2025",
    location: "Saint Michael's College - Auditorium",
    description:
      "Exploring innovations in Artificial Intelligence."
  },

  {
    title: "NSTP-2 Workshop",
    type: "Workshop",
    date: "January 20, 2026",
    location: "Cabile Village Elementarty School Brgy. Santiago",
    description:
      "Learning basic internet etiquette."
  },

  {
    title: "CCS Days",
    type: "Workshop",
    date: "February 5, 2026",
    location: "Saint Michael's College",
    description:
      "Mind over games."
  }
];



function displayEvents(filter = "All") {

    const eventGrid = document.getElementById("event-grid");

    if (!eventGrid) return;
    let filteredEvents;
    if(filter === "All"){
        filteredEvents = events;
    }else{
        filteredEvents = events.filter(
            event => event.type === filter
        );
    }
    eventGrid.innerHTML = filteredEvents.map(event => {
        return `
        <article class="event-card">
            <div class="card-top">
                <span class="badge badge-solid">${event.type}</span>
                <span class="card-date">📅 ${event.date}</span>
            </div>
            <h3 class="card-title">${event.title}</h3>
            <p class="card-desc">${event.description}</p>
            <div class="card-footer">
                <div class="card-meta-row">
                    <span>📍 ${event.location}</span>
                </div>
            </div>
        </article>
        `;
    }).join("");
}
export function initializeEventFilter(){
    const buttons = document.querySelectorAll(
        ".filter-btn"
    );
    buttons.forEach(button => {
        button.addEventListener(
            "click",
            ()=>{
                // remove active class
                buttons.forEach(btn=>{
                    btn.classList.remove("active");
                });
                // add active class
                button.classList.add("active");
                const category =
                    button.dataset.filter;

                displayEvents(category);
            }
        );
    });
    displayEvents("All");
}