import { router, navigateTo } from "./router.js";
import { renderSidebar } from "./components/sidebar.js";

export function setupNavigation() {
  document.addEventListener("click", (event) => {
    const link = event.target.closest("a");

    if (!link) {
      return;
    }

    const href = link.getAttribute("href");

    if (!href || !href.startsWith("/")) {
      return;
    }

    if (href.startsWith("//")) {
      return;
    }

    event.preventDefault();

    navigateTo(href);

    renderSidebar();
  });

  window.addEventListener("popstate", () => {
    router();
    renderSidebar();
  });
}
