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
}
