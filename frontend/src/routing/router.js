import { AboutPage } from "../page/landing/about.js";
import { HomePage } from "../page/landing/home.js";
import { OfficersPage } from "../page/landing/officers.js";
import { VMGPage } from "../page/landing/vmg.js";
import {FAQPage} from "../page/landing/faq.js";


const routes = {

  '/': HomePage,
 '/home': HomePage,
  // "/index.html": HomePage,
  '/about': AboutPage,
  '/officers': OfficersPage,
  '/vmg': VMGPage,
  '/faq': FAQPage

};

export function render(path) {

  const app = document.getElementById('app');
  const pathname = path.split('#')[0].split('?')[0];
  const page = routes[pathname] || (() => `<h1>404</h1>`);
  app.innerHTML = page();
}