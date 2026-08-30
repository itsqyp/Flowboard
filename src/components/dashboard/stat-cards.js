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
              class="rounded-xl border bg-white p-5 shadow-sm"
            >

              <div class="flex items-start justify-between">

                <p class="text-sm font-medium text-slate-500">
                  ${stat.label}
                </p>

                <div class="flex size-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                  <span class="text-xs font-bold">
                    ${getStatInitial(stat.label)}
                  </span>
                </div>

              </div>

              <div class="mt-4 flex items-end gap-2">

                <p class="text-2xl font-bold tracking-tight text-slate-900">
                  ${stat.value}
                </p>

                <span class="mb-0.5 inline-flex items-center gap-1 text-xs font-semibold text-emerald-600">
                  ↑ ${stat.change}
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

function getStatInitial(label) {
  return label.charAt(0);
}
