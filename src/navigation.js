import { navigateTo } from "./router.js";
import { renderSidebar } from "./components/sidebar.js";

export function setupNavigation() {
  document.addEventListener("click", (event) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const link = event.target.closest("a");

    if (!link) {
      return;
    }

    const href = link.getAttribute("href");

    if (!href || !href.startsWith("/") || href.startsWith("//")) {
      return;
    }

    // Ignore links intended for a new browsing context.
    if (link.target === "_blank" || link.hasAttribute("download")) {
      return;
    }

    event.preventDefault();

    navigateTo(href);
    renderSidebar();
  });
}
