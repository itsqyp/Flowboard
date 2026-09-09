import { showToast } from "../toast.js";
import { teamMembers } from "../../data/team.js";

let editCallback = null;
let editingProjectId = null;
// let editingProjectMemberIds = [];

export function renderEditProjectModal(callback) {
  editCallback = callback;

  const existingModal = document.querySelector("#edit-project-modal");

  if (existingModal) {
    existingModal.remove();
  }

  document.body.insertAdjacentHTML(
    "beforeend",
    `
      <div
        id="edit-project-modal"
        class="fixed inset-0 z-50 hidden items-center justify-center bg-slate-900/40 p-4"
      >
        <div
          class="w-full max-w-lg rounded-2xl bg-white shadow-xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="edit-project-modal-title"
        >
          <div class="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <div>
              <h2
                id="edit-project-modal-title"
                class="text-base font-bold text-slate-900"
              >
                Edit Project
              </h2>

              <p class="mt-1 text-sm text-slate-500">
                Update the project details.
              </p>
            </div>

            <button
              id="close-edit-project-modal"
              type="button"
              class="flex size-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              aria-label="Close edit project modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <form id="edit-project-form">
            <div class="space-y-4 px-5 py-5">

              <div>
                <label
                  for="edit-project-name"
                  class="mb-1.5 block text-sm font-semibold text-slate-700"
                >
                  Project name
                </label>

                <input
                  id="edit-project-name"
                  name="name"
                  type="text"
                  required
                  class="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                  placeholder="Enter project name"
                />
              </div>

              <div>
                <label
                  for="edit-project-description"
                  class="mb-1.5 block text-sm font-semibold text-slate-700"
                >
                  Description
                </label>

                <textarea
                  id="edit-project-description"
                  name="description"
                  rows="4"
                  class="w-full resize-none rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                  placeholder="Describe the project"
                ></textarea>
              </div>

              <div class="grid gap-4 sm:grid-cols-2">

                <div>
                  <label
                    for="edit-project-status"
                    class="mb-1.5 block text-sm font-semibold text-slate-700"
                  >
                    Status
                  </label>

                  <select
                    id="edit-project-status"
                    name="status"
                    class="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                  >
                    <option value="planning">Planning</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                    <option value="on-hold">On Hold</option>
                  </select>
                </div>

                <div>
                  <label
                    for="edit-project-priority"
                    class="mb-1.5 block text-sm font-semibold text-slate-700"
                  >
                    Priority
                  </label>

                  <select
                    id="edit-project-priority"
                    name="priority"
                    class="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                  >
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>

              </div>

              <div>
                <label
                  for="edit-project-due-date"
                  class="mb-1.5 block text-sm font-semibold text-slate-700"
                >
                  Due date
                </label>

                <input
                  id="edit-project-due-date"
                  name="dueDate"
                  type="date"
                  required
                  class="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>

              <!-- Project Members -->
<div>
  <label
    class="mb-1.5 block text-sm font-semibold text-slate-700"
  >
    Project Members
  </label>

  <div
    class="mt-2 max-h-40 space-y-2 overflow-y-auto rounded-lg border border-slate-200 p-3"
  >
    ${teamMembers
      .map(
        (member) => `
          <label
            class="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 transition hover:bg-slate-50"
          >
            <input
              type="checkbox"
              name="memberIds"
              value="${member.id}"
              class="edit-project-member size-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
            />

            <div
              class="flex size-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-700"
            >
              ${member.initials}
            </div>

            <div class="min-w-0">
              <p class="truncate text-sm font-semibold text-slate-800">
                ${member.name}
              </p>

              <p class="truncate text-xs text-slate-500">
                ${member.role}
              </p>
            </div>
          </label>
        `,
      )
      .join("")}
  </div>

  <p class="mt-1.5 text-xs text-slate-500">
    Select the members who will work on this project.
  </p>
</div>

            </div>

            <div class="flex justify-end gap-3 border-t border-slate-100 px-5 py-4">
              <button
                id="cancel-edit-project"
                type="button"
                class="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                class="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    `,
  );

  setupEditProjectModal();
}
function setupEditProjectModal() {
  const modal = document.querySelector("#edit-project-modal");
  const form = document.querySelector("#edit-project-form");
  const closeButton = document.querySelector("#close-edit-project-modal");
  const cancelButton = document.querySelector("#cancel-edit-project");

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
    const memberIds = formData.getAll("memberIds").map((id) => Number(id));

    const updatedProject = {
      id: editingProjectId,
      name: formData.get("name").trim(),
      description:
        formData.get("description").trim() || "No description provided.",
      status: formData.get("status"),
      priority: formData.get("priority"),
      dueDate: formData.get("dueDate"),
      memberIds,
    };

    if (!updatedProject.name || !updatedProject.dueDate) {
      showToast("Please fill in all required fields.", "error");
      return;
    }

    if (memberIds.length === 0) {
      showToast("Please select at least one project member.", "warning");
      return;
    }

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

  document.querySelector("#edit-project-name").value = project.name;

  document.querySelector("#edit-project-description").value =
    project.description || "";

  document.querySelector("#edit-project-status").value = project.status;

  document.querySelector("#edit-project-priority").value = project.priority;

  document.querySelector("#edit-project-due-date").value = project.dueDate;

  document.querySelectorAll(".edit-project-member").forEach((checkbox) => {
    checkbox.checked = existingMemberIds.includes(Number(checkbox.value));
  });

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
