import { dashboardProjects } from "../../data/dashboard.js";

export function renderProjectsOverview() {
  const container = document.querySelector("#dashboard-projects");

  if (!container) {
    console.error("Dashboard projects mount point not found.");
    return;
  }

  container.innerHTML = `
    <section class="rounded-xl border bg-white shadow-sm">

      <!-- Section Header -->
      <div class="flex items-center justify-between border-b px-5 py-4 sm:px-6">

        <div>
          <h2 class="text-base font-bold text-slate-900">
            Projects
          </h2>

          <p class="mt-1 text-xs text-slate-500">
            Track the progress of your active projects.
          </p>
        </div>

        <a
          href="#"
          class="text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-700"
        >
          View all
        </a>

      </div>

      <!-- Project List -->
      <div class="divide-y">

        ${dashboardProjects
          .map(
            (project) => `
              <article class="p-5 transition-colors hover:bg-slate-50 sm:p-6">

                <!-- Project Top -->
                <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">

                  <div class="min-w-0">

                    <div class="flex items-center gap-3">

                      <div
                        class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-sm font-bold text-indigo-600"
                      >
                        ${project.name.charAt(0)}
                      </div>

                      <div class="min-w-0">

                        <h3 class="truncate text-sm font-bold text-slate-900">
                          ${project.name}
                        </h3>

                        <p class="mt-1 text-xs text-slate-500">
                          ${project.description}
                        </p>

                      </div>

                    </div>

                  </div>

                  <div class="flex shrink-0 items-center gap-2">

                    ${getStatusBadge(project)}

                    <span class="text-sm font-bold text-slate-700">
                      ${project.progress}%
                    </span>

                  </div>

                </div>

                <!-- Progress -->
                <div class="mt-5">

                  <div class="h-2 overflow-hidden rounded-full bg-slate-100">

                    <div
                      class="h-full rounded-full bg-indigo-600 transition-all duration-500"
                      style="width: ${project.progress}%"
                    ></div>

                  </div>

                </div>

                <!-- Project Meta -->
                <div class="mt-4 flex flex-col gap-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">

                  <div class="flex items-center gap-4">

                    <span class="inline-flex items-center gap-1.5">

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        class="size-4"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>

                      ${project.members} members

                    </span>

                  </div>

                  <span class="inline-flex items-center gap-1.5">

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      class="size-4"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M16 2v4"></path>
                      <path d="M8 2v4"></path>
                      <path d="M3 10h18"></path>
                    </svg>

                    Due ${project.dueDate}

                  </span>

                </div>

              </article>
            `,
          )
          .join("")}

      </div>

    </section>
  `;
}

function getStatusBadge(project) {
  const styles = {
    progress: "bg-indigo-50 text-indigo-700",
    warning: "bg-amber-50 text-amber-700",
    success: "bg-emerald-50 text-emerald-700",
  };

  return `
    <span
      class="rounded-full px-2.5 py-1 text-xs font-semibold ${styles[project.statusType] || styles.progress}"
    >
      ${project.status}
    </span>
  `;
}
