import { dashboardTasks } from "../../data/dashboard.js";
import { showToast } from "../toast.js";

export function renderMyTasks() {
  const container = document.querySelector("#dashboard-tasks");

  if (!container) {
    console.error("Dashboard tasks mount point not found.");
    return;
  }

  container.innerHTML = `
    <section class="rounded-xl border bg-white shadow-sm">

      <!-- Header -->
      <div class="flex items-center justify-between border-b px-5 py-4 sm:px-6">

        <div>
          <h2 class="text-base font-bold text-slate-900">
            My Tasks
          </h2>

          <p class="mt-1 text-xs text-slate-500">
            Tasks that need your attention.
          </p>
        </div>

        <a
          href="#"
          class="text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-700"
        >
          View all
        </a>

      </div>

      <!-- Task List -->
      <div class="divide-y">

        ${dashboardTasks
          .map(
            (task) => `
              <article
                class="flex gap-3 px-5 py-4 transition-colors hover:bg-slate-50 sm:px-6"
              >

                <!-- Checkbox -->
                <button
                  type="button"
                  class="task-checkbox mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border ${
                    task.completed
                      ? "border-indigo-600 bg-indigo-600 text-white"
                      : "border-slate-300 bg-white hover:border-indigo-500"
                  }"
                  data-task-id="${task.id}"
                  aria-label="${
                    task.completed
                      ? `Mark ${task.title} as incomplete`
                      : `Mark ${task.title} as complete`
                  }"
                >

                  ${
                    task.completed
                      ? `
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="3"
                          class="size-3.5"
                        >
                          <path d="m5 12 4 4L19 6"></path>
                        </svg>
                      `
                      : ""
                  }

                </button>

                <!-- Task Content -->
                <div class="min-w-0 flex-1">

                  <div class="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between">

                    <h3
                      class="truncate text-sm font-semibold ${
                        task.completed
                          ? "text-slate-400 line-through"
                          : "text-slate-800"
                      }"
                    >
                      ${task.title}
                    </h3>

                    ${getPriorityBadge(task)}

                  </div>

                  <div class="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400">

                    <span>
                      ${task.project}
                    </span>

                    <span class="hidden sm:inline">
                      •
                    </span>

                    <span>
                      Due ${task.dueDate}
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

  setupTaskInteractions();
}

function getPriorityBadge(task) {
  const styles = {
    high: "bg-red-50 text-red-600",
    medium: "bg-amber-50 text-amber-600",
    low: "bg-slate-100 text-slate-500",
  };

  return `
    <span
      class="shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${
        styles[task.priorityType] || styles.low
      }"
    >
      ${task.priority}
    </span>
  `;
}

function setupTaskInteractions() {
  const checkboxes = document.querySelectorAll(".task-checkbox");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
      const taskId = Number(checkbox.dataset.taskId);

      const task = dashboardTasks.find((item) => item.id === taskId);

      if (!task) {
        return;
      }

      task.completed = !task.completed;

      renderMyTasks();

      if (task.completed) {
        showToast(`"${task.title}" has been completed.`, "success");
      } else {
        showToast(`"${task.title}" has been marked as incomplete.`, "info");
      }
    });
  });
}
