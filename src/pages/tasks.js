import { tasks } from "../data/tasks.js";
import { projects } from "../data/projects.js";
import { teamMembers } from "../data/team.js";
import {
  renderTaskModal,
  openTaskModal,
} from "../components/tasks/task-modal.js";

import {
  renderEditTaskModal,
  openEditTaskModal,
} from "../components/tasks/edit-task-modal.js";

import {
  renderDeleteTaskModal,
  openDeleteTaskModal,
} from "../components/tasks/delete-task-modal.js";

let taskFilters = {
  search: "",
  status: "all",
  priority: "all",
};

export function renderTasks() {
  const app = document.querySelector("#app");
  // const searchInput = document.querySelector("#task-search");
  // const statusFilter = document.querySelector("#task-status-filter");
  // const priorityFilter = document.querySelector("#task-priority-filter");

  if (!app) {
    console.error("App mount point not found.");
    return;
  }
  const filteredTasks = tasks.filter((task) => {
    const searchTerm = taskFilters.search.toLowerCase();

    const matchesSearch =
      task.title.toLowerCase().includes(searchTerm) ||
      task.description.toLowerCase().includes(searchTerm);

    const matchesStatus =
      taskFilters.status === "all" || task.status === taskFilters.status;

    const matchesPriority =
      taskFilters.priority === "all" || task.priority === taskFilters.priority;

    return matchesSearch && matchesStatus && matchesPriority;
  });

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
  <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

    <div>
      <h2 class="text-sm font-bold text-slate-900">
        All Tasks
      </h2>

      <p class="mt-1 text-xs text-slate-500">
        ${tasks.length} tasks across ${projects.length} projects
      </p>
    </div>

    <!-- Filters -->
    <div class="flex flex-col gap-2 sm:flex-row">

      <!-- Search -->
      <div class="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.8"
          stroke="currentColor"
          class="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m21 21-4.35-4.35m1.85-5.15a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
          />
        </svg>

        <input
          id="task-search"
          type="search"
           value="${taskFilters.search}"
          placeholder="Search tasks..."
          class="w-full rounded-lg border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 sm:w-56"
        />
      </div>

      <!-- Status -->
      <select
        id="task-status-filter"
        class="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
      >
        <option value="all" ${taskFilters.status === "all" ? "selected" : ""}>
  All Status
</option>

<option value="todo" ${taskFilters.status === "todo" ? "selected" : ""}>
  To Do
</option>

<option value="in-progress" ${taskFilters.status === "in-progress" ? "selected" : ""}>
  In Progress
</option>

<option value="completed" ${taskFilters.status === "completed" ? "selected" : ""}>
  Completed
</option>
      </select>

      <!-- Priority -->
      <select
        id="task-priority-filter"
        class="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-600 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
      >
       <option value="all" ${taskFilters.priority === "all" ? "selected" : ""}>
  All Priority
</option>

<option value="high" ${taskFilters.priority === "high" ? "selected" : ""}>
  High
</option>

<option value="medium" ${taskFilters.priority === "medium" ? "selected" : ""}>
  Medium
</option>

<option value="low" ${taskFilters.priority === "low" ? "selected" : ""}>
  Low
</option>
      </select>

    </div>
  </div>
</div>


        <div class="divide-y divide-slate-100">

          ${
            filteredTasks.length === 0
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
              : filteredTasks
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


                        <!-- Actions + Assignee -->
<div class="flex shrink-0 items-center gap-4">

  <!-- Assignee -->
  ${
    assignee
      ? `
        <div class="flex items-center gap-2">
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

  <!-- Edit -->
  <button
    type="button"
    class="edit-task-btn rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-indigo-600"
    data-task-id="${task.id}"
    aria-label="Edit task"
    title="Edit task"
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
        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19.5 7.125 16.875 4.5"
      />
    </svg>
  </button>
  <!-- Delete -->
<button
  type="button"
  class="delete-task-btn rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-red-600"
  data-task-id="${task.id}"
  aria-label="Delete task"
  title="Delete task"
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
      d="M6 7.5h12m-10.5 0v10.125A1.875 1.875 0 0 0 9.375 19.5h5.25a1.875 1.875 0 0 0 1.875-1.875V7.5m-6.75 0V5.625A1.125 1.125 0 0 1 10.875 4.5h2.25A1.125 1.125 0 0 1 14.25 5.625V7.5"
    />
  </svg>
</button>

</div>

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
  renderEditTaskModal((updatedTask) => {
    const taskIndex = tasks.findIndex((task) => task.id === updatedTask.id);

    if (taskIndex === -1) {
      return;
    }

    tasks[taskIndex] = updatedTask;

    renderTasks();
  });

  renderDeleteTaskModal((taskToDelete) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskToDelete.id);

    if (taskIndex === -1) {
      return;
    }

    tasks.splice(taskIndex, 1);

    renderTasks();
  });
  const editTaskButtons = document.querySelectorAll(".edit-task-btn");

  editTaskButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const taskId = button.dataset.taskId;

      const task = tasks.find((item) => item.id === taskId);

      if (!task) {
        return;
      }

      openEditTaskModal(task);
    });
  });

  const deleteTaskButtons = document.querySelectorAll(".delete-task-btn");

  deleteTaskButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const taskId = button.dataset.taskId;

      const task = tasks.find((item) => item.id === taskId);

      if (!task) {
        return;
      }

      openDeleteTaskModal(task);
    });
  });

  const addTaskButton = document.querySelector("#add-task-btn");

  addTaskButton?.addEventListener("click", openTaskModal);
  const taskCompleteButtons = document.querySelectorAll(".task-complete-btn");

  taskCompleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const taskId = button.dataset.taskId;

      const task = tasks.find((item) => item.id === taskId);

      if (!task) {
        return;
      }

      task.status = task.status === "completed" ? "todo" : "completed";

      renderTasks();
    });
  });

  const taskSearch = document.querySelector("#task-search");
  const taskStatusFilter = document.querySelector("#task-status-filter");
  const taskPriorityFilter = document.querySelector("#task-priority-filter");
  //  const searchInput = document.querySelector("#task-search");
  // const statusFilter = document.querySelector("#task-status-filter");
  // const priorityFilter = document.querySelector("#task-priority-filter");

  taskSearch?.addEventListener("input", (event) => {
    taskFilters.search = event.target.value;

    renderTasks();

    const newSearchInput = document.querySelector("#task-search");

    if (newSearchInput) {
      newSearchInput.focus();

      newSearchInput.setSelectionRange(
        newSearchInput.value.length,
        newSearchInput.value.length,
      );
    }
  });

  taskStatusFilter?.addEventListener("change", (event) => {
    taskFilters.status = event.target.value;
    renderTasks();
  });

  taskPriorityFilter?.addEventListener("change", (event) => {
    taskFilters.priority = event.target.value;
    renderTasks();
  });
}
