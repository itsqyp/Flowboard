import { recentActivity } from "../../data/dashboard.js";

export function renderRecentActivity() {
  const container = document.querySelector("#dashboard-activity");

  if (!container) {
    console.error("Dashboard activity mount point not found.");
    return;
  }

  container.innerHTML = `
    <section class="rounded-xl border bg-white shadow-sm">

      <!-- Header -->
      <div class="flex items-center justify-between border-b px-5 py-4 sm:px-6">

        <div>
          <h2 class="text-base font-bold text-slate-900">
            Recent Activity
          </h2>

          <p class="mt-1 text-xs text-slate-500">
            Recent updates from your workspace.
          </p>
        </div>

        <button
          type="button"
          class="text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-700"
        >
          View all
        </button>

      </div>

      <!-- Activity List -->
      <div class="divide-y">

        ${recentActivity
          .map(
            (activity) => `
              <article class="flex gap-3 px-5 py-4 sm:px-6">

                <!-- Avatar -->
                <div
                  class="flex size-9 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-bold text-indigo-600"
                >
                  ${activity.avatar}
                </div>

                <!-- Activity -->
                <div class="min-w-0 flex-1">

                  <p class="text-sm leading-6 text-slate-600">

                    <span class="font-semibold text-slate-900">
                      ${activity.user}
                    </span>

                    ${activity.action}

                    <span class="font-semibold text-slate-800">
                      ${activity.target}
                    </span>

                  </p>

                  <div class="mt-1 flex flex-wrap items-center gap-x-2 text-xs text-slate-400">

                    <span>
                      ${activity.project}
                    </span>

                    <span>
                      •
                    </span>

                    <span>
                      ${activity.time}
                    </span>

                  </div>

                </div>

              </article>
            `,
          )
          .join("")}

      </div>

    </section>
  `;
}
