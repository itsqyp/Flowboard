import { renderDashboard } from "./pages/dashboard.js";
import { renderProjects } from "./pages/projects.js";
import { renderTasks } from "./pages/tasks.js";
import { renderCalendar } from "./pages/calendar.js";
import { renderTeam } from "./pages/team.js";
import { renderSettings } from "./pages/settings.js";

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

  const renderPage = routes[path] || renderDashboard;

  renderPage();
}
