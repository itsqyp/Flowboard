import { projects } from "../data/projects.js";

export function renderProjectDetails(projectId) {
  const app = document.querySelector("#app");

  if (!app) {
    console.error("App mount point not found.");
    return;
  }

  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    app.innerHTML = `
      <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div class="rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm">

          <div class="mx-auto flex size-12 items-center justify-center rounded-full bg-red-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.8"
              stroke="currentColor"
              class="size-6 text-red-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m0 3h.008v.008H12V15.75ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>

          <h1 class="mt-4 text-lg font-bold text-slate-900">
            Project not found
          </h1>

          <p class="mt-1 text-sm text-slate-500">
            The project you're looking for doesn't exist.
          </p>

          <a
            href="/projects"
            class="mt-5 inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Back to Projects
          </a>

        </div>
      </div>
    `;

    return;
  }

  app.innerHTML = `
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

      <!-- Back -->
      <a
        href="/projects"
        class="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-900"
      >
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
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>

        Back to Projects
      </a>


      <!-- Header -->
      <div class="mt-6 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

        <div class="min-w-0">

          <div class="flex flex-wrap items-center gap-3">

            <h1 class="text-2xl font-bold tracking-tight text-slate-900">
              ${project.name}
            </h1>

            <span class="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700">
              ${project.status === "in-progress" ? "In Progress" : project.status}
            </span>

          </div>

          <p class="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            ${project.description}
          </p>

        </div>


        <div class="flex shrink-0 gap-2">

          <button
            type="button"
            class="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
          >
            Edit Project
          </button>

          <button
            type="button"
            class="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            Add Task
          </button>

        </div>

      </div>


      <!-- Stats -->
      <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <div class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p class="text-sm font-medium text-slate-500">
            Progress
          </p>

          <p class="mt-2 text-2xl font-bold text-slate-900">
            ${project.progress}%
          </p>
        </div>


        <div class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p class="text-sm font-medium text-slate-500">
            Tasks
          </p>

          <p class="mt-2 text-2xl font-bold text-slate-900">
            ${project.tasks.completed}
            <span class="text-base font-medium text-slate-400">
              / ${project.tasks.total}
            </span>
          </p>
        </div>


        <div class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p class="text-sm font-medium text-slate-500">
            Members
          </p>

          <p class="mt-2 text-2xl font-bold text-slate-900">
            ${project.members.length}
          </p>
        </div>


        <div class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p class="text-sm font-medium text-slate-500">
            Due Date
          </p>

          <p class="mt-2 text-2xl font-bold text-slate-900">
            ${new Date(project.dueDate).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>

      </div>


      <!-- Content -->
      <div class="mt-6 rounded-xl border border-slate-200 bg-white shadow-sm">

        <div class="border-b border-slate-100 px-5 py-4">

          <h2 class="text-base font-bold text-slate-900">
            Project Tasks
          </h2>

          <p class="mt-1 text-sm text-slate-500">
            Tasks belonging to this project will appear here.
          </p>

        </div>

        <div class="px-5 py-12 text-center">

          <div class="mx-auto flex size-12 items-center justify-center rounded-full bg-slate-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.8"
              stroke="currentColor"
              class="size-6 text-slate-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5.25h6m-7.5 3h9m-10.5 3h12m-12 3h7.5"
              />
            </svg>
          </div>

          <h3 class="mt-4 text-sm font-semibold text-slate-900">
            No tasks yet
          </h3>

          <p class="mt-1 text-sm text-slate-500">
            Start adding tasks to this project.
          </p>

        </div>

      </div>

    </div>
  `;
}
