import { render } from "./routing/router.js";

function normalizePath(path) {
  // Remove trailing slash (except for "/")
  if (path.length > 1 && path.endsWith("/")) {
    path = path.slice(0, -1);
  }

  // Treat index.html as the home page
  if (path === "/" || path.endsWith("/index.html")) {
    return "/home";
  }

  return path;
}

function navigate(path) {
  path = normalizePath(path);

  history.pushState({}, "", path);
  render(path);
}

// Intercept clicks
document.addEventListener("click", (e) => {
  const link = e.target.closest("a[data-link]");
  if (!link) return;

  e.preventDefault();
  navigate(link.getAttribute("href"));
});

// Handle back/forward
window.addEventListener("popstate", () => {
  render(normalizePath(location.pathname));
});

// Initial render
const initialPath = normalizePath(location.pathname);

if (initialPath !== location.pathname) {
  history.replaceState({}, "", initialPath);
}

render(initialPath);