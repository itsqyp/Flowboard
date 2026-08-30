import { upcomingDeadlines } from "../../data/dashboard.js";

export function renderUpcomingDeadlines() {
  const container = document.querySelector("#dashboard-deadlines");

  if (!container) {
    console.error("Dashboard deadlines mount point not found.");
    return;
  }

  container.innerHTML = `
    <section class="h-full rounded-xl border bg-white shadow-sm">

      <!-- Header -->
      <div class="border-b px-5 py-4 sm:px-6">

        <h2 class="text-base font-bold text-slate-900">
          Upcoming Deadlines
        </h2>

        <p class="mt-1 text-xs text-slate-500">
          Keep an eye on what's coming up.
        </p>

      </div>

      <!-- Deadline List -->
      <div class="divide-y">

        ${upcomingDeadlines
          .map(
            (deadline) => `
              <article class="p-5 transition-colors hover:bg-slate-50">

                <div class="flex items-start gap-3">

                  <!-- Calendar Icon -->
                  <div
                    class="flex size-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      class="size-4"
                    >
                      <rect
                        width="18"
                        height="18"
                        x="3"
                        y="4"
                        rx="2"
                      ></rect>

                      <path d="M16 2v4"></path>
                      <path d="M8 2v4"></path>
                      <path d="M3 10h18"></path>
                    </svg>
                  </div>

                  <!-- Deadline Content -->
                  <div class="min-w-0 flex-1">

                    <h3 class="truncate text-sm font-semibold text-slate-800">
                      ${deadline.title}
                    </h3>

                    <p class="mt-1 text-xs text-slate-500">
                      ${deadline.date}
                    </p>

                  </div>

                </div>

                <!-- Days Remaining -->
                <div class="mt-4 flex items-center justify-between">

                  <span class="text-xs text-slate-400">
                    Time remaining
                  </span>

                  <span
                    class="text-xs font-semibold ${
                      deadline.daysRemaining <= 7
                        ? "text-red-600"
                        : deadline.daysRemaining <= 14
                          ? "text-amber-600"
                          : "text-emerald-600"
                    }"
                  >
                    ${deadline.daysRemaining} days
                  </span>

                </div>

              </article>
            `,
          )
          .join("")}

      </div>

      <!-- Footer -->
      <div class="border-t p-4">

        <a
          href="#"
          class="flex items-center justify-center gap-1 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-700"
        >
          View calendar

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="size-4"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>

        </a>

      </div>

    </section>
  `;
}
