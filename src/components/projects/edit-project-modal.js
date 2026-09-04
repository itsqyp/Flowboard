import { showToast } from "../toast.js";

let editCallback = null;
let editingProjectId = null;

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
                  class="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />
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

    const updatedProject = {
      id: editingProjectId,
      name: formData.get("name").trim(),
      description:
        formData.get("description").trim() || "No description provided.",
      status: formData.get("status"),
      priority: formData.get("priority"),
      dueDate: formData.get("dueDate"),
    };

    if (!updatedProject.name || !updatedProject.dueDate) {
      showToast("Please fill in all required fields.", "error");
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

  document.querySelector("#edit-project-name").value = project.name;
  document.querySelector("#edit-project-description").value =
    project.description || "";
  document.querySelector("#edit-project-status").value = project.status;
  document.querySelector("#edit-project-priority").value = project.priority;
  document.querySelector("#edit-project-due-date").value = project.dueDate;

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
