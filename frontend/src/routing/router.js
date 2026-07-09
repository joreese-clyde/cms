import { AboutPage } from "../page/landing/about.js";
import { HomePage } from "../page/landing/home.js";
import { OfficersPage } from "../page/landing/officers.js";
import { initializeEventFilter } from "../page/landing/events.js";

const routes = {
  '/': HomePage,
  '/home': HomePage,
  "/index.html": HomePage,
  '/about': AboutPage,
  '/officers': OfficersPage,
  '/events': initializeEventFilter
}



export function render(path) {

  const app = document.getElementById('app');
  const page = routes[path] || (() => `<h1>404</h1>`);
  app.innerHTML = page();
}