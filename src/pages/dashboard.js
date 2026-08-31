import { renderWelcomeHeader } from "../components/dashboard/welcome-header.js";
import { renderStatCards } from "../components/dashboard/stat-cards.js";
import { renderProjectsOverview } from "../components/dashboard/projects-overview.js";
import { renderMyTasks } from "../components/dashboard/my-tasks.js";
import { renderUpcomingDeadlines } from "../components/dashboard/upcoming-deadlines.js";
import { renderRecentActivity } from "../components/dashboard/recent-activity.js";
import {
  renderProjectModal,
  setupCreateProjectButton,
} from "../components/dashboard/project-modal.js";

export function renderDashboard() {
  const app = document.querySelector("#app");

  if (!app) {
    console.error("App mount point not found.");
    return;
  }

  app.innerHTML = `
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

      <!-- Welcome -->
      <div id="dashboard-welcome"></div>

      <!-- Statistics -->
      <div id="dashboard-stats" class="mt-6"></div>

      <!-- Projects -->
      <div id="dashboard-projects" class="mt-6"></div>

      <!-- Tasks + Deadlines -->
      <div class="mt-6 grid gap-6 lg:grid-cols-3">

        <div
          id="dashboard-tasks"
          class="lg:col-span-2"
        ></div>

        <div id="dashboard-deadlines"></div>

      </div>

      <!-- Recent Activity -->
      <div
        id="dashboard-activity"
        class="mt-6"
      ></div>

    </div>
  `;

  renderWelcomeHeader();
  renderStatCards();
  renderProjectsOverview();
  renderMyTasks();
  renderUpcomingDeadlines();
  renderRecentActivity();
  renderProjectModal();
  setupCreateProjectButton();
}
