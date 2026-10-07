import { getState } from "../../store/store.js";

export function renderRecentActivity() {
  const container = document.querySelector("#dashboard-activity");

  if (!container) {
    console.error("Dashboard activity mount point not found.");
    return;
  }

  const { activities, projects } = getState();

  const recentActivity = activities.slice(0, 5);

  function formatActivityTime(createdAt) {
    const activityDate = new Date(createdAt);
    const now = new Date();

    const diffInSeconds = Math.floor(
      (now.getTime() - activityDate.getTime()) / 1000,
    );

    if (diffInSeconds < 60) {
      return "Just now";
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);

    if (diffInMinutes < 60) {
      return `${diffInMinutes} minute${diffInMinutes === 1 ? "" : "s"} ago`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);

    if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours === 1 ? "" : "s"} ago`;
    }

    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInDays === 1) {
      return "Yesterday";
    }

    if (diffInDays < 7) {
      return `${diffInDays} days ago`;
    }

    return activityDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  function getActivityText(activity) {
    switch (activity.type) {
      case "project_created":
        return "created project";

      case "project_updated":
        return "updated project";

      case "project_deleted":
        return "deleted project";

      case "task_created":
        return "created task";
      default:
        return "updated";
    }
  }

  container.innerHTML = `
    <section class="rounded-xl border bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">

      <!-- Header -->
      <div class="border-b px-5 py-4 sm:px-6 dark:border-slate-800">
        <div>
          <h2 class="text-base font-bold text-slate-900 dark:text-white">
            Recent Activity
          </h2>

          <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Recent updates from your workspace.
          </p>
        </div>
      </div>

      <!-- Activity List -->
      <div class="divide-y dark:divide-slate-800">

        ${
          recentActivity.length > 0
            ? recentActivity
                .map(
                  (activity) => `
                    <article class="flex gap-3 px-5 py-4 sm:px-6">

                      <!-- Avatar -->
                      <div
                        class="flex size-9 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-xs font-bold text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"
                      >
                        ${
                          activity.user
                            ? activity.user
                                .split(" ")
                                .map((name) => name[0])
                                .join("")
                                .slice(0, 2)
                                .toUpperCase()
                            : "U"
                        }
                      </div>

                      <!-- Activity -->
                      <div class="min-w-0 flex-1">

                        <p class="text-sm leading-6 text-slate-600 dark:text-slate-300">

                          <span class="font-semibold text-slate-900 dark:text-white">
                            ${activity.user}
                          </span>

                          ${getActivityText(activity)}

                          <span class="font-semibold text-slate-800 dark:text-slate-100">
                            ${activity.target}
                          </span>

                        </p>

                        <div class="mt-1 flex flex-wrap items-center gap-x-2 text-xs text-slate-400 dark:text-slate-500">

                          ${
                            activity.project
                              ? `
                                <span>
                                  ${activity.project}
                                </span>

                                <span>•</span>
                              `
                              : ""
                          }

                          <span>
                            ${formatActivityTime(activity.createdAt)}
                          </span>

                        </div>

                      </div>

                    </article>
                  `,
                )
                .join("")
            : `
              <div class="px-5 py-8 text-center sm:px-6">
                <p class="text-sm text-slate-500 dark:text-slate-400">
                  No recent activity yet.
                </p>
              </div>
            `
        }

      </div>

    </section>
  `;
}
