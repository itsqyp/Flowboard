import { tasks } from "../../data/tasks.js";
import { projects } from "../../data/projects.js";
import { teamMembers } from "../../data/team.js";

export function renderRecentActivity() {
  const container = document.querySelector("#dashboard-activity");

  if (!container) {
    console.error("Dashboard activity mount point not found.");
    return;
  }
  const recentActivity = tasks
    .map((task) => {
      const project = projects.find((item) => item.id === task.projectId);

      const member = teamMembers.find((item) => item.id === task.assigneeId);

      if (!project || !member) {
        return null;
      }

      return {
        user: member.name,
        action:
          task.status === "completed"
            ? "completed"
            : task.status === "in-progress"
              ? "updated"
              : "created",
        target: task.title,
        project: project.name,
        time: new Date(`${task.createdAt}T00:00:00`).toLocaleDateString(
          "en-US",
          {
            month: "short",
            day: "numeric",
            year: "numeric",
          },
        ),
        avatar: member.initials,
      };
    })
    .filter(Boolean)
    .slice(-4)
    .reverse();
  container.innerHTML = `
    <section class="rounded-xl border bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">

      <!-- Header -->
      <div class="flex items-center justify-between border-b px-5 py-4 sm:px-6 dark:border-slate-800">

        <div>
          <h2 class="text-base font-bold text-slate-900 dark:text-white">
            Recent Activity
          </h2>

          <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Recent updates from your workspace.
          </p>
        </div>

        <button
          type="button"
        class="text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          View all
        </button>

      </div>

      <!-- Activity List -->
     <div class="divide-y dark:divide-slate-800">

        ${recentActivity
          .map(
            (activity) => `
              <article class="flex gap-3 px-5 py-4 sm:px-6">

                <!-- Avatar -->
                <div
                  class="flex size-9 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-bold text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"
                >
                  ${activity.avatar}
                </div>

                <!-- Activity -->
                <div class="min-w-0 flex-1">

                  <p class="text-sm leading-6 text-slate-600 dark:text-slate-300"

                    <span class="font-semibold text-slate-900 dark:text-white">
                      ${activity.user}
                    </span>

                    ${activity.action}

                    <span class="font-semibold text-slate-800 dark:text-slate-100">
                      ${activity.target}
                    </span>

                  </p>

                  <div class="mt-1 flex flex-wrap items-center gap-x-2 text-xs text-slate-400 dark:text-slate-500">

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
