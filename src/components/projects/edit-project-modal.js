import { showToast } from "../toast.js";
import { getState } from "../../store/store.js";

let editCallback = null;
let editingProjectId = null;

function refreshProjectMembers(existingMemberIds = []) {
  const { teamMembers } = getState();

  const container = document.querySelector("#edit-project-members");

  if (!container) return;

  container.innerHTML = teamMembers
    .map(
      (member) => `
        <label
          class="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 transition hover:bg-slate-50 dark:hover:bg-slate-800"
        >
          <input
            type="checkbox"
            name="memberIds"
            value="${member.id}"
            ${existingMemberIds.includes(member.id) ? "checked" : ""}
            class="edit-project-member size-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 dark:border-slate-600"
          />

          <div
            class="flex size-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
          >
            ${member.initials}
          </div>

          <div class="min-w-0">
            <p
              class="truncate text-sm font-semibold text-slate-800 dark:text-slate-100"
            >
              ${member.name}
            </p>

            <p
              class="truncate text-xs text-slate-500 dark:text-slate-400"
            >
              ${member.role}
            </p>
          </div>
        </label>
      `,
    )
    .join("");
}

export function renderEditProjectModal(callback) {
  editCallback = callback;

  const existingModal = document.querySelector("#edit-project-modal");

  if (existingModal) {
    existingModal.remove();
  }

  const modal = document.createElement("div");

  modal.id = "edit-project-modal";

  modal.className =
    "fixed inset-0 z-50 hidden items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm";

  modal.innerHTML = `
    <div
      class="w-full max-w-lg rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900"
    >
      <!-- Header -->
      <div
        class="flex items-center justify-between border-b border-slate-200 px-6 py-4 dark:border-slate-700"
      >
        <div>
          <h2
            class="text-lg font-bold text-slate-900 dark:text-white"
          >
            Edit Project
          </h2>

          <p
            class="mt-1 text-sm text-slate-500 dark:text-slate-400"
          >
            Update your project details.
          </p>
        </div>

        <button
          type="button"
          id="close-edit-project-modal"
          class="flex size-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Form -->
      <form id="edit-project-form" class="space-y-5 p-6">

        <!-- Project Name -->
        <div>
          <label
            for="edit-project-name"
            class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200"
          >
            Project Name
          </label>

          <input
            id="edit-project-name"
            name="name"
            type="text"
            required
            placeholder="Enter project name"
            class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
          />
        </div>

        <!-- Description -->
        <div>
          <label
            for="edit-project-description"
            class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200"
          >
            Description
          </label>

          <textarea
            id="edit-project-description"
            name="description"
            rows="3"
            placeholder="Describe your project..."
            class="w-full resize-none rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:placeholder:text-slate-500"
          ></textarea>
        </div>

        <!-- Status + Priority -->
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">

          <!-- Status -->
          <div>
            <label
              for="edit-project-status"
              class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200"
            >
              Status
            </label>

            <select
              id="edit-project-status"
              name="status"
              required
              class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
            >
              <option value="planning">Planning</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
              <option value="on-hold">On Hold</option>
            </select>
          </div>

          <!-- Priority -->
          <div>
            <label
              for="edit-project-priority"
              class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200"
            >
              Priority
            </label>

            <select
              id="edit-project-priority"
              name="priority"
              required
              class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>

        <!-- Due Date -->
        <div>
          <label
            for="edit-project-due-date"
            class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200"
          >
            Due Date
          </label>

          <input
            id="edit-project-due-date"
            name="dueDate"
            type="date"
            class="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-white"
          />
        </div>

        <!-- Project Members -->
        <div>
          <label
            class="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200"
          >
            Project Members
          </label>

          <div
            id="edit-project-members"
            class="mt-2 max-h-40 space-y-2 overflow-y-auto rounded-lg border border-slate-200 p-3 dark:border-slate-700"
          ></div>

          <p
            class="mt-1.5 text-xs text-slate-500 dark:text-slate-400"
          >
            Select the members who will work on this project.
          </p>
        </div>

        <!-- Actions -->
        <div
          class="flex justify-end gap-3 border-t border-slate-200 pt-5 dark:border-slate-700"
        >
          <button
            type="button"
            id="cancel-edit-project-modal"
            class="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Cancel
          </button>

          <button
            type="submit"
            class="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  `;

  document.body.appendChild(modal);

  const form = modal.querySelector("#edit-project-form");

  const closeButton = modal.querySelector("#close-edit-project-modal");

  const cancelButton = modal.querySelector("#cancel-edit-project-modal");

  closeButton.addEventListener("click", closeEditProjectModal);
  cancelButton.addEventListener("click", closeEditProjectModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeEditProjectModal();
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const name = formData.get("name").trim();
    const description = formData.get("description").trim();
    const status = formData.get("status");
    const priority = formData.get("priority");
    const dueDate = formData.get("dueDate");

    const memberIds = formData.getAll("memberIds").map(Number);

    if (!name) {
      showToast("Project name is required.", "error");
      return;
    }

    const updatedProject = {
      id: editingProjectId,
      name,
      description,
      status,
      priority,
      dueDate,
      memberIds,
    };

    if (editCallback) {
      editCallback(updatedProject);
    }

    closeEditProjectModal();

    showToast("Project updated successfully.", "success");
  });
}

export function openEditProjectModal(project) {
  const modal = document.querySelector("#edit-project-modal");

  if (!modal) return;

  editingProjectId = project.id;

  const existingMemberIds = project.memberIds || [];

  document.querySelector("#edit-project-name").value = project.name || "";

  document.querySelector("#edit-project-description").value =
    project.description || "";

  document.querySelector("#edit-project-status").value =
    project.status || "planning";

  document.querySelector("#edit-project-priority").value =
    project.priority || "medium";

  document.querySelector("#edit-project-due-date").value =
    project.dueDate || "";

  // IMPORTANT:
  // Get the latest team members from the store every time
  // the edit modal is opened.
  refreshProjectMembers(existingMemberIds);

  modal.classList.remove("hidden");
  modal.classList.add("flex");

  document.querySelector("#edit-project-name").focus();
}

export function closeEditProjectModal() {
  const modal = document.querySelector("#edit-project-modal");

  if (!modal) return;

  modal.classList.add("hidden");
  modal.classList.remove("flex");

  editingProjectId = null;
}
