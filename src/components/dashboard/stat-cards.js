import { dashboardStats } from "../../data/dashboard.js";

export function renderStatCards() {
  const container = document.querySelector("#dashboard-stats");

  if (!container) {
    console.error("Dashboard stats mount point not found.");
    return;
  }

  container.innerHTML = `
    <section
      aria-label="Workspace statistics"
      class="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
    >

      ${dashboardStats
        .map(
          (stat) => `
            <article
              class="rounded-xl border bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
            >

              <div class="flex items-start justify-between">

                <p class="text-sm font-medium text-slate-500">
                  ${stat.label}
                </p>

                <div
                  class="flex size-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600"
                >
                  ${getStatIcon(stat.label)}
                </div>

              </div>

              <div class="mt-4 flex items-end gap-2">

                <p class="text-2xl font-bold tracking-tight text-slate-900">
                  ${stat.value}
                </p>

                <span
                  class="mb-0.5 inline-flex items-center gap-1 text-xs font-semibold text-emerald-600"
                >
                  ${getTrendIcon(stat.trend)}
                  ${stat.change}
                </span>

              </div>

              <p class="mt-1 text-xs text-slate-400">
                ${stat.description}
              </p>

            </article>
          `,
        )
        .join("")}

    </section>
  `;
}

function getStatIcon(label) {
  const icons = {
    "Total Projects": `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        class="size-5"
      >
        <rect width="7" height="7" x="3" y="3" rx="1"></rect>
        <rect width="7" height="7" x="14" y="3" rx="1"></rect>
        <rect width="7" height="7" x="3" y="14" rx="1"></rect>
        <rect width="7" height="7" x="14" y="14" rx="1"></rect>
      </svg>
    `,

    "Active Tasks": `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        class="size-5"
      >
        <path d="M9 11l3 3L22 4"></path>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
      </svg>
    `,

    "Completed Tasks": `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        class="size-5"
      >
        <path d="m9 12 2 2 4-4"></path>
        <circle cx="12" cy="12" r="9"></circle>
      </svg>
    `,

    "Team Members": `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        class="size-5"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    `,
  };

  return icons[label] || "";
}

function getTrendIcon(trend) {
  if (trend === "up") {
    return `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        class="size-3"
      >
        <path d="m5 12 5-5 4 4 5-5"></path>
        <path d="M19 6h-5"></path>
        <path d="M19 6v5"></path>
      </svg>
    `;
  }

  return "";
}
