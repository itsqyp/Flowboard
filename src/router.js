import { renderDashboard } from "./pages/dashboard.js";
import { renderProjects } from "./pages/projects.js";
import { renderTasks } from "./pages/tasks.js";
import { renderCalendar } from "./pages/calendar.js";
import { renderTeam } from "./pages/team.js";
import { renderSettings } from "./pages/settings.js";
import { renderProjectDetails } from "./pages/project-details.js";

const routes = {
  "/": renderDashboard,
  "/dashboard": renderDashboard,
  "/projects": renderProjects,
  "/tasks": renderTasks,
  "/calendar": renderCalendar,
  "/team": renderTeam,
  "/settings": renderSettings,
};

// export function router() {
//   const path = window.location.pathname;

//   const renderPage = routes[path] || renderDashboard;

//   renderPage();
// }

export function router() {
  const path = window.location.pathname;

  if (path.startsWith("/projects/")) {
    const projectId = path.split("/")[2];

    renderProjectDetails(projectId);

    return;
  }

  const renderPage = routes[path] || renderDashboard;

  renderPage();
}

export function navigateTo(path) {
  window.history.pushState({}, "", path);

  router();
}
