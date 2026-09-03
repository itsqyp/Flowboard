import { projects } from "../data/projects.js";
import { tasks } from "../data/tasks.js";
import {
  renderTaskModal,
  openTaskModal,
} from "../components/tasks/task-modal.js";

import { showToast } from "../components/toast.js";

export function renderProjectDetails(projectId) {
  const app = document.querySelector("#app");

  if (!app) {
    console.error("App mount point not found.");
    return;
  }

  const project = projects.find((item) => item.id === projectId);
  const projectTasks = tasks.filter((task) => task.projectId === projectId);

  //Dynamic Progress

  const completedTasks = projectTasks.filter(
    (task) => task.status === "completed",
  ).length;

  const totalTasks = projectTasks.length;

  const progress =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  // Dynamic Progress

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
  id="add-task-btn"
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

  <div class="flex items-center justify-between">

    <p class="text-sm font-medium text-slate-500">
      Progress
    </p>

    <span class="text-sm font-bold text-slate-900">
      ${progress}%
    </span>

  </div>

  <div class="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">

    <div
      class="h-full rounded-full bg-indigo-600 transition-all duration-500"
      style="width: ${progress}%"
    ></div>

  </div>

</div>


        <div class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <p class="text-sm font-medium text-slate-500">
            Tasks
          </p>

          <p class="mt-2 text-2xl font-bold text-slate-900">
           ${completedTasks}
<span class="text-base font-medium text-slate-400">
  / ${totalTasks}
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

  <div class="flex flex-col gap-3 border-b border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">

    <div>
      <h2 class="text-base font-bold text-slate-900">
        Project Tasks
      </h2>

      <p class="mt-1 text-sm text-slate-500">
        ${projectTasks.length}
        ${projectTasks.length === 1 ? "task" : "tasks"}
        in this project.
      </p>
    </div>

   <button
  id="add-task-btn-secondary"
  type="button"
  class="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-indigo-700"
>
  Add Task
</button>

  </div>


  ${
    projectTasks.length === 0
      ? `
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
      `
      : `
        <div class="divide-y divide-slate-100">

          ${projectTasks
            .map(
              (task) => `
                <div class="flex flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">

                  <div class="min-w-0">

                    <div class="flex items-center gap-3">

                     <button
  type="button"
  class="task-complete-btn flex size-5 shrink-0 items-center justify-center rounded border transition
    ${
      task.status === "completed"
        ? "border-indigo-600 bg-indigo-600 text-white"
        : "border-slate-300 bg-white hover:border-indigo-500"
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
            d="m5 12 4 4L19 7"
          />
        </svg>
      `
      : ""
  }
</button>

                     <h3
  class="truncate text-sm font-semibold ${
    task.status === "completed"
      ? "text-slate-400 line-through"
      : "text-slate-900"
  }"
>
  ${task.title}
</h3>

                    </div>

                    <p
  class="mt-1 pl-8 text-xs ${
    task.status === "completed" ? "text-slate-400" : "text-slate-500"
  }"
>
  ${task.description}
</p>

                  </div>


                  <div class="flex shrink-0 items-center gap-4 pl-8 sm:pl-0">


 <!-- Status -->
                  <select
  class="task-status-select rounded-full border-0 px-2.5 py-1 text-xs font-semibold outline-none ring-0 transition
    ${
      task.status === "completed"
        ? "bg-green-50 text-green-700"
        : task.status === "in-progress"
          ? "bg-indigo-50 text-indigo-700"
          : "bg-slate-100 text-slate-600"
    }"
  data-task-id="${task.id}"
  aria-label="Change task status"
>
  <option
    value="todo"
    ${task.status === "todo" ? "selected" : ""}
  >
    To Do
  </option>

  <option
    value="in-progress"
    ${task.status === "in-progress" ? "selected" : ""}
  >
    In Progress
  </option>

  <option
    value="completed"
    ${task.status === "completed" ? "selected" : ""}
  >
    Completed
  </option>
</select>

 <!-- Priority -->
                    <span class="rounded-full px-2.5 py-1 text-xs font-semibold
                      ${
                        task.priority === "high"
                          ? "bg-red-50 text-red-700"
                          : task.priority === "medium"
                            ? "bg-amber-50 text-amber-700"
                            : "bg-slate-100 text-slate-600"
                      }
                    ">
                      ${
                        task.priority.charAt(0).toUpperCase() +
                        task.priority.slice(1)
                      }
                    </span>





  <!-- Due Date -->
                    <span class="text-xs font-medium text-slate-500">
                      ${new Date(task.dueDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>

                      <!-- Assignee -->
                    <div
                      class="flex size-7 items-center justify-center rounded-full bg-indigo-100 text-[10px] font-bold text-indigo-700"
                      title="${task.assignee.name}"
                    >
                      ${task.assignee.initials}
                    </div>

                  </div>

                </div>
              `,
            )
            .join("")}

        </div>
      `
  }

</div>

    </div>
   
  `;

  renderTaskModal((newTask) => {
    newTask.projectId = projectId;

    tasks.unshift(newTask);

    renderProjectDetails(projectId);
  });

  const addTaskButton = document.querySelector("#add-task-btn");
  const secondaryAddTaskButton = document.querySelector(
    "#add-task-btn-secondary",
  );
  addTaskButton.addEventListener("click", openTaskModal);
  secondaryAddTaskButton.addEventListener("click", openTaskModal);

  const taskCompleteButtons = document.querySelectorAll(".task-complete-btn");
  taskCompleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const taskId = button.dataset.taskId;

      const task = tasks.find((item) => item.id === taskId);

      if (!task) {
        return;
      }

      task.status = task.status === "completed" ? "todo" : "completed";

      showToast(
        task.status === "completed"
          ? `"${task.title}" completed.`
          : `"${task.title}" marked as incomplete.`,
        "success",
      );

      renderProjectDetails(projectId);
    });
  });
  const taskStatusSelects = document.querySelectorAll(".task-status-select");

  taskStatusSelects.forEach((select) => {
    select.addEventListener("change", () => {
      const taskId = select.dataset.taskId;
      const task = tasks.find((item) => item.id === taskId);

      if (!task) {
        return;
      }

      //   const previousStatus = task.status;

      task.status = select.value;
      showToast(
        `"${task.title}" moved to ${
          task.status === "todo"
            ? "To Do"
            : task.status === "in-progress"
              ? "In Progress"
              : "Completed"
        }.`,
        "success",
      );

      renderProjectDetails(projectId);
    });
  });
}
// this div could be an issue. ??
// this project-details.js could be very shaky
