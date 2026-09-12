import { tasks } from "../data/tasks.js";
import { projects } from "../data/projects.js";
import { teamMembers } from "../data/team.js";
import {
  renderTaskModal,
  openTaskModal,
} from "../components/tasks/task-modal.js";

export function renderTasks() {
  const app = document.querySelector("#app");

  if (!app) {
    console.error("App mount point not found.");
    return;
  }

  app.innerHTML = `
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <h1 class="text-2xl font-bold tracking-tight text-slate-900">
            Tasks
          </h1>

          <p class="mt-1 text-sm text-slate-500">
            Manage all tasks across your projects.
          </p>
        </div>

        <button
          id="add-task-btn"
          type="button"
          class="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>

          Add Task
        </button>

      </div>


      <!-- Task Summary -->
      <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <div class="rounded-xl border border-slate-200 bg-white p-5">
          <p class="text-sm font-medium text-slate-500">
            Total Tasks
          </p>

          <p class="mt-2 text-2xl font-bold text-slate-900">
            ${tasks.length}
          </p>
        </div>

        <div class="rounded-xl border border-slate-200 bg-white p-5">
          <p class="text-sm font-medium text-slate-500">
            To Do
          </p>

          <p class="mt-2 text-2xl font-bold text-slate-900">
            ${tasks.filter((task) => task.status === "todo").length}
          </p>
        </div>

        <div class="rounded-xl border border-slate-200 bg-white p-5">
          <p class="text-sm font-medium text-slate-500">
            In Progress
          </p>

          <p class="mt-2 text-2xl font-bold text-slate-900">
            ${tasks.filter((task) => task.status === "in-progress").length}
          </p>
        </div>

        <div class="rounded-xl border border-slate-200 bg-white p-5">
          <p class="text-sm font-medium text-slate-500">
            Completed
          </p>

          <p class="mt-2 text-2xl font-bold text-slate-900">
            ${tasks.filter((task) => task.status === "completed").length}
          </p>
        </div>

      </div>


      <!-- Task List -->
      <div class="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white">

        <div class="border-b border-slate-200 px-5 py-4">
          <h2 class="text-sm font-bold text-slate-900">
            All Tasks
          </h2>

          <p class="mt-1 text-xs text-slate-500">
            ${tasks.length} tasks across ${projects.length} projects
          </p>
        </div>


        <div class="divide-y divide-slate-100">

          ${
            tasks.length === 0
              ? `
                <div class="px-5 py-12 text-center">
                  <p class="text-sm font-medium text-slate-900">
                    No tasks found
                  </p>

                  <p class="mt-1 text-sm text-slate-500">
                    Create your first task to get started.
                  </p>
                </div>
              `
              : tasks
                  .map((task) => {
                    const project = projects.find(
                      (item) => item.id === task.projectId,
                    );

                    const assignee = teamMembers.find(
                      (member) => member.id === task.assigneeId,
                    );

                    return `
                      <div
                        class="flex flex-col gap-4 px-5 py-4 transition hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between"
                      >

                        <!-- Task Info -->
                        <div class="min-w-0 flex-1">

                          <div class="flex items-start gap-3">

                            <!-- Completion -->
                            <button
                              type="button"
                              class="task-complete-btn mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md border transition ${
                                task.status === "completed"
                                  ? "border-indigo-600 bg-indigo-600 text-white"
                                  : "border-slate-300 bg-white text-transparent hover:border-indigo-400"
                              }"
                              data-task-id="${task.id}"
                              aria-label="${
                                task.status === "completed"
                                  ? "Mark task as incomplete"
                                  : "Mark task as complete"
                              }"
                            >
                              ${
                                task.status === "completed"
                                  ? `
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="2.5"
                                      stroke="currentColor"
                                      class="size-3.5"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="m5 12 4 4L19 6"
                                      />
                                    </svg>
                                  `
                                  : ""
                              }
                            </button>


                            <div class="min-w-0">

                              <h3
                                class="truncate text-sm font-semibold ${
                                  task.status === "completed"
                                    ? "text-slate-400 line-through"
                                    : "text-slate-900"
                                }"
                              >
                                ${task.title}
                              </h3>

                              <p class="mt-1 line-clamp-2 text-sm text-slate-500">
                                ${task.description}
                              </p>


                              <!-- Meta -->
                              <div class="mt-3 flex flex-wrap items-center gap-2">

                                ${
                                  project
                                    ? `
                                      <span class="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
                                        ${project.name}
                                      </span>
                                    `
                                    : ""
                                }

                                <span
                                  class="rounded-md px-2 py-1 text-xs font-medium ${
                                    task.priority === "high"
                                      ? "bg-red-50 text-red-700"
                                      : task.priority === "medium"
                                        ? "bg-amber-50 text-amber-700"
                                        : "bg-slate-100 text-slate-600"
                                  }"
                                >
                                  ${
                                    task.priority.charAt(0).toUpperCase() +
                                    task.priority.slice(1)
                                  }
                                </span>

                                <span
                                  class="rounded-md px-2 py-1 text-xs font-medium ${
                                    task.status === "completed"
                                      ? "bg-green-50 text-green-700"
                                      : task.status === "in-progress"
                                        ? "bg-indigo-50 text-indigo-700"
                                        : "bg-slate-100 text-slate-600"
                                  }"
                                >
                                  ${
                                    task.status === "in-progress"
                                      ? "In Progress"
                                      : task.status === "completed"
                                        ? "Completed"
                                        : "To Do"
                                  }
                                </span>

                                <span class="text-xs text-slate-400">
                                  Due ${task.dueDate}
                                </span>

                              </div>

                            </div>

                          </div>

                        </div>


                        <!-- Assignee -->
                        ${
                          assignee
                            ? `
                              <div class="flex shrink-0 items-center gap-2">
                                <div
                                  class="flex size-8 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700"
                                  title="${assignee.name}"
                                >
                                  ${assignee.initials}
                                </div>

                                <span class="text-sm font-medium text-slate-600">
                                  ${assignee.name}
                                </span>
                              </div>
                            `
                            : ""
                        }

                      </div>
                    `;
                  })
                  .join("")
          }

        </div>

      </div>

    </div>
  `;

  renderTaskModal((newTask) => {
    tasks.unshift(newTask);
    renderTasks();
  });

  const addTaskButton = document.querySelector("#add-task-btn");

  addTaskButton?.addEventListener("click", openTaskModal);
}
