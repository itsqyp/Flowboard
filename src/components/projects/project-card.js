export function renderProjectCard(project) {
  const statusConfig = {
    planning: {
      label: "Planning",
      classes: "bg-blue-50 text-blue-700",
    },
    "in-progress": {
      label: "In Progress",
      classes: "bg-indigo-50 text-indigo-700",
    },
    completed: {
      label: "Completed",
      classes: "bg-green-50 text-green-700",
    },
    "on-hold": {
      label: "On Hold",
      classes: "bg-amber-50 text-amber-700",
    },
  };

  const priorityConfig = {
    low: {
      label: "Low",
      classes: "text-slate-500",
    },
    medium: {
      label: "Medium",
      classes: "text-amber-600",
    },
    high: {
      label: "High",
      classes: "text-red-600",
    },
  };

  const status = statusConfig[project.status] || statusConfig.planning;
  const priority = priorityConfig[project.priority] || priorityConfig.medium;

  const dueDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return `
    <article
      class="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md"
      data-project-id="${project.id}"
    >

      <!-- Top Row -->
      <div class="flex items-start justify-between gap-4">

        <div class="min-w-0">
          <h2 class="truncate text-base font-bold text-slate-900">
            ${project.name}
          </h2>

          <p class="mt-1 text-xs font-medium ${priority.classes}">
            ${priority.label} priority
          </p>
        </div>

        <span
          class="shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${status.classes}"
        >
          ${status.label}
        </span>

      </div>


      <!-- Description -->
      <p class="mt-4 line-clamp-2 text-sm leading-6 text-slate-500">
        ${project.description}
      </p>


      <!-- Progress -->
      <div class="mt-5">

        <div class="flex items-center justify-between">
          <span class="text-xs font-semibold text-slate-600">
            Progress
          </span>

          <span class="text-xs font-bold text-slate-900">
            ${project.progress}%
          </span>
        </div>

        <div class="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
          <div
            class="h-full rounded-full bg-indigo-600 transition-all duration-500"
            style="width: ${project.progress}%"
          ></div>
        </div>

      </div>


      <!-- Project Meta -->
      <div class="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

        <!-- Members -->
        <div class="flex items-center">

          <div class="flex -space-x-2">
            ${project.members
              .slice(0, 4)
              .map(
                (member) => `
                  <div
                    title="${member.name}"
                    class="flex size-8 items-center justify-center rounded-full border-2 border-white bg-slate-200 text-[10px] font-bold text-slate-700"
                  >
                    ${member.initials}
                  </div>
                `,
              )
              .join("")}
          </div>

          ${
            project.members.length > 4
              ? `
                <span class="ml-2 text-xs font-medium text-slate-400">
                  +${project.members.length - 4}
                </span>
              `
              : ""
          }

        </div>


        <!-- Due Date -->
        <div class="flex items-center gap-1.5 text-xs font-medium text-slate-500">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.8"
            stroke="currentColor"
            class="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3.75 9h16.5M5.25 5.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25Z"
            />
          </svg>

          ${dueDate}

        </div>

      </div>


      <!-- Footer -->
      <div class="mt-4 flex items-center justify-between">

        <span class="text-xs text-slate-400">
          ${project.tasks.completed} of ${project.tasks.total} tasks
        </span>

        <button
          type="button"
          class="project-view-btn rounded-lg px-3 py-1.5 text-xs font-semibold text-indigo-600 transition hover:bg-indigo-50 hover:text-indigo-700"
          data-project-id="${project.id}"
        >
          View Project
        </button>

      </div>

    </article>
  `;
}
