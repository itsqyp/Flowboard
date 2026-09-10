import { showToast } from "../toast.js";
import { projects } from "../../data/projects.js";
import { teamMembers } from "../../data/team.js";

let modal = null;

export function renderProjectModal() {
  if (document.querySelector("#project-modal")) {
    return;
  }

  const container = document.createElement("div");

  container.id = "project-modal";

  container.innerHTML = `
    <div
      id="project-modal-backdrop"
      class="fixed inset-0 z-90 hidden bg-black/40 p-4 backdrop-blur-sm"
    >

      <div class="flex min-h-full items-center justify-center">

        <div
          id="project-modal-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          class="w-full max-w-lg rounded-2xl bg-white shadow-2xl"
        >

          <!-- Header -->
          <div class="flex items-start justify-between border-b px-5 py-4 sm:px-6">

            <div>
              <h2
                id="project-modal-title"
                class="text-lg font-bold text-slate-900"
              >
                Create New Project
              </h2>

              <p class="mt-1 text-sm text-slate-500">
                Create a project to start organizing your work.
              </p>
            </div>

            <button
              type="button"
              id="project-modal-close"
              class="flex size-9 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
              aria-label="Close project modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-5"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>

          </div>

          <!-- Form -->
          <form id="project-form" class="p-5 sm:p-6">

            <!-- Project Name -->
            <div>
              <label
                for="project-name"
                class="block text-sm font-semibold text-slate-700"
              >
                Project name
              </label>

              <input
                id="project-name"
                name="projectName"
                type="text"
                placeholder="e.g. Website Redesign"
                autocomplete="off"
                class="mt-2 block w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />

              <p
                id="project-name-error"
                class="mt-1.5 hidden text-xs font-medium text-red-600"
              ></p>
            </div>

            <!-- Description -->
            <div class="mt-5">

              <label
                for="project-description"
                class="block text-sm font-semibold text-slate-700"
              >
                Description
              </label>

              <textarea
                id="project-description"
                name="projectDescription"
                rows="3"
                placeholder="What is this project about?"
                class="mt-2 block w-full resize-none rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              ></textarea>

              <p
                id="project-description-error"
                class="mt-1.5 hidden text-xs font-medium text-red-600"
              ></p>

            </div>

            <!-- Due Date -->
            <div class="mt-5">

              <label
                for="project-due-date"
                class="block text-sm font-semibold text-slate-700"
              >
                Due date
              </label>

              <input
                id="project-due-date"
                name="projectDueDate"
                type="date"
                class="mt-2 block w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />

              <p
                id="project-due-date-error"
                class="mt-1.5 hidden text-xs font-medium text-red-600"
              ></p>

            </div>



<!-- Project Members -->
<div class="mt-5">
  <p class="block text-sm font-semibold text-slate-700">
    Project members
  </p>

  <div class="mt-2 max-h-52 space-y-2 overflow-y-auto pr-1">
    ${teamMembers
      .map(
        (member) => `
          <label
            class="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 px-3 py-2.5 transition hover:bg-slate-50"
          >
            <input
              type="checkbox"
              name="memberIds"
              value="${member.id}"
              class="size-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
              ${member.id === 1 ? "checked" : ""}
            />

            <div class="flex size-8 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700">
              ${member.initials}
            </div>

            <div>
              <p class="text-sm font-semibold text-slate-800">
                ${member.name}
              </p>

              <p class="text-xs text-slate-500">
                ${member.role}
              </p>
            </div>
          </label>
        `,
      )
      .join("")}
  </div>

  <p
    id="project-members-error"
    class="mt-1.5 hidden text-xs font-medium text-red-600"
  ></p>
</div>





            <!-- Actions -->
            <div class="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

              <button
                type="button"
                id="project-modal-cancel"
                class="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                class="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Create Project
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  `;

  document.body.appendChild(container);

  modal = {
    container,
    backdrop: container.querySelector("#project-modal-backdrop"),
    dialog: container.querySelector("#project-modal-dialog"),
    form: container.querySelector("#project-form"),
    closeButton: container.querySelector("#project-modal-close"),
    cancelButton: container.querySelector("#project-modal-cancel"),
    nameInput: container.querySelector("#project-name"),
    descriptionInput: container.querySelector("#project-description"),
    dueDateInput: container.querySelector("#project-due-date"),
  };

  setupProjectModal();
}

function setupProjectModal() {
  modal.closeButton.addEventListener("click", closeProjectModal);

  modal.cancelButton.addEventListener("click", closeProjectModal);

  modal.backdrop.addEventListener("click", (event) => {
    if (event.target === modal.backdrop) {
      closeProjectModal();
    }
  });

  modal.dialog.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  modal.form.addEventListener("submit", handleProjectSubmit);

  document.addEventListener("keydown", handleEscape);
}

function openProjectModal() {
  if (!modal) {
    renderProjectModal();
  }

  modal.backdrop.classList.remove("hidden");

  requestAnimationFrame(() => {
    modal.dialog.classList.add("scale-100");
  });

  document.body.classList.add("overflow-hidden");

  modal.nameInput.focus();
}

function closeProjectModal() {
  if (!modal) {
    return;
  }

  modal.backdrop.classList.add("hidden");

  document.body.classList.remove("overflow-hidden");

  modal.form.reset();

  clearErrors();
}

function handleEscape(event) {
  if (event.key === "Escape") {
    if (!modal?.backdrop.classList.contains("hidden")) {
      closeProjectModal();
    }
  }
}

function handleProjectSubmit(event) {
  event.preventDefault();

  const name = modal.nameInput.value.trim();
  const description = modal.descriptionInput.value.trim();
  const dueDate = modal.dueDateInput.value;

  const formData = new FormData(modal.form);

  const memberIds = formData.getAll("memberIds").map((id) => Number(id));

  clearErrors();

  let isValid = true;

  if (!name) {
    showFieldError("project-name-error", "Project name is required.");

    isValid = false;
  } else if (name.length < 3) {
    showFieldError(
      "project-name-error",
      "Project name must be at least 3 characters.",
    );

    isValid = false;
  }

  if (!description) {
    showFieldError(
      "project-description-error",
      "Project description is required.",
    );

    isValid = false;
  }

  if (!dueDate) {
    showFieldError("project-due-date-error", "Please select a due date.");

    isValid = false;
  }

  if (memberIds.length === 0) {
    showFieldError(
      "project-members-error",
      "Please select at least one project member.",
    );

    isValid = false;
  }

  if (!isValid) {
    return;
  }

  const newProject = {
    id: `project-${Date.now()}`,
    name,
    description,
    status: "planning",
    priority: "medium",
    progress: 0,
    dueDate,
    memberIds,
    tasks: {
      total: 0,
      completed: 0,
    },
    createdAt: new Date().toISOString().split("T")[0],
  };

  projects.unshift(newProject);

  closeProjectModal();

  showToast(`"${name}" has been created successfully.`, "success");
}

function showFieldError(elementId, message) {
  const element = document.querySelector(`#${elementId}`);

  if (!element) {
    return;
  }

  element.textContent = message;
  element.classList.remove("hidden");
}

function clearErrors() {
  const errors = document.querySelectorAll("#project-modal .text-red-600");

  errors.forEach((error) => {
    error.textContent = "";
    error.classList.add("hidden");
  });
}

function formatDate(dateString) {
  const date = new Date(`${dateString}T00:00:00`);

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function setupCreateProjectButton() {
  const button = document.querySelector("#create-project-button");

  if (!button) {
    console.error("Create project button not found.");
    return;
  }

  button.addEventListener("click", openProjectModal);
}
