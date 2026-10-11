import { renderDashboard } from "./pages/dashboard.js";
import { renderProjects } from "./pages/projects.js";
import { renderTasks } from "./pages/tasks.js";
import { renderCalendar } from "./pages/calendar.js";
import { renderTeam } from "./pages/team.js";
import { renderSettings } from "./pages/settings.js";
import { renderProjectDetails } from "./pages/project-details.js";
import { renderMobileNavigation } from "./components/mobile-navigation.js";

const routes = {
  "/": renderDashboard,
  "/dashboard": renderDashboard,
  "/projects": renderProjects,
  "/tasks": renderTasks,
  "/calendar": renderCalendar,
  "/team": renderTeam,
  "/settings": renderSettings,
};

export function router() {
  const path = window.location.pathname;

  // Render the correct page.
  if (path.startsWith("/projects/")) {
    const projectId = path.split("/")[2];
    renderProjectDetails(projectId);
  } else {
    const renderPage = routes[path] || renderDashboard;
    renderPage();
  }

  // Update the mobile navigation's active tab.
  renderMobileNavigation();
}

export function navigateTo(path) {
  window.history.pushState({}, "", path);
  router();
}

window.addEventListener("popstate", router);
