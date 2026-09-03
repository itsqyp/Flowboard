import { projects } from "../data/projects.js";
import { renderProjectCard } from "../components/projects/project-card.js";

import {
  renderProjectModal,
  openProjectModal,
} from "../components/projects/project-modal.js";

export function renderProjects() {
  const app = document.querySelector("#app");

  if (!app) {
    console.error("App mount point not found.");
    return;
  }

  app.innerHTML = `
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

      <!-- Page Header -->
      <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <h1 class="text-2xl font-bold tracking-tight text-slate-900">
            Projects
          </h1>

          <p class="mt-1 text-sm text-slate-500">
            Manage and track all your projects in one place.
          </p>
        </div>

        <button
          id="create-project-btn"
          type="button"
          class="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>

          New Project
        </button>

      </div>


      <!-- Toolbar -->
      <div class="mt-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">

        <div class="flex flex-col gap-3 lg:flex-row lg:items-center">

          <!-- Search -->
          <div class="relative flex-1">

            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.8"
                stroke="currentColor"
                class="size-5 text-slate-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-4.5-4.5m2-5.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
                />
              </svg>
            </div>

            <input
              id="project-search"
              type="search"
              placeholder="Search projects..."
              class="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
            />

          </div>


          <!-- Status Filter -->
          <select
            id="project-status-filter"
            class="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
          >
            <option value="all">All Statuses</option>
            <option value="planning">Planning</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="on-hold">On Hold</option>
          </select>


          <!-- Sort -->
          <select
            id="project-sort"
            class="rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
          >
            <option value="recent">Recently Created</option>
            <option value="name-asc">Name: A → Z</option>
            <option value="name-desc">Name: Z → A</option>
            <option value="due-soon">Due Date: Soonest</option>
            <option value="progress-high">Progress: Highest</option>
            <option value="progress-low">Progress: Lowest</option>
          </select>

        </div>

      </div>


      <!-- Project Count -->
      <div class="mt-6">
        <p
          id="project-count"
          class="text-sm font-medium text-slate-500"
        >
          5 projects
        </p>
      </div>


      <!-- Projects Grid -->
      <div
        id="projects-grid"
        class="mt-3 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
      </div>

    </div>
  `;

  const projectsGrid = document.querySelector("#projects-grid");
  const searchInput = document.querySelector("#project-search");
  const statusFilter = document.querySelector("#project-status-filter");
  const sortSelect = document.querySelector("#project-sort");
  const projectCount = document.querySelector("#project-count");

  function updateProjects() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const selectedStatus = statusFilter.value;
    const selectedSort = sortSelect.value;

    let filteredProjects = projects.filter((project) => {
      const matchesSearch =
        project.name.toLowerCase().includes(searchTerm) ||
        project.description.toLowerCase().includes(searchTerm);

      const matchesStatus =
        selectedStatus === "all" || project.status === selectedStatus;

      return matchesSearch && matchesStatus;
    });

    filteredProjects.sort((a, b) => {
      switch (selectedSort) {
        case "name-asc":
          return a.name.localeCompare(b.name);

        case "name-desc":
          return b.name.localeCompare(a.name);

        case "due-soon":
          return new Date(a.dueDate) - new Date(b.dueDate);

        case "progress-high":
          return b.progress - a.progress;

        case "progress-low":
          return a.progress - b.progress;

        case "recent":
        default:
          return new Date(b.createdAt) - new Date(a.createdAt);
      }
    });

    projectCount.textContent =
      `${filteredProjects.length} ` +
      `${filteredProjects.length === 1 ? "project" : "projects"}`;

    if (filteredProjects.length === 0) {
      projectsGrid.innerHTML = `
      <div class="col-span-full rounded-xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
        
        <div class="mx-auto flex size-12 items-center justify-center rounded-full bg-slate-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.8"
            stroke="currentColor"
            class="size-6 text-slate-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-4.5-4.5m2-5.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
            />
          </svg>
        </div>

        <h2 class="mt-4 text-sm font-semibold text-slate-900">
          No projects found
        </h2>

        <p class="mx-auto mt-1 max-w-sm text-sm text-slate-500">
          Try changing your search or status filter to find what you're looking for.
        </p>

      </div>
    `;

      return;
    }

    projectsGrid.innerHTML = filteredProjects
      .map((project) => renderProjectCard(project))
      .join("");
  }

  renderProjectModal((newProject) => {
    projects.unshift(newProject);
    updateProjects();
  });

  updateProjects();

  searchInput.addEventListener("input", updateProjects);
  statusFilter.addEventListener("change", updateProjects);
  sortSelect.addEventListener("change", updateProjects);

  const createProjectButton = document.querySelector("#create-project-btn");
  createProjectButton.addEventListener("click", openProjectModal);
}
