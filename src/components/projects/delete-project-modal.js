import { showToast } from "../toast.js";

let deleteCallback = null;
let projectToDelete = null;

export function renderDeleteProjectModal(callback) {
  deleteCallback = callback;

  const existingModal = document.querySelector("#delete-project-modal");

  if (existingModal) {
    existingModal.remove();
  }

  document.body.insertAdjacentHTML(
    "beforeend",
    `
      <div
        id="delete-project-modal"
        class="fixed inset-0 z-50 hidden items-center justify-center bg-slate-900/40 p-4"
      >
        <div
          class="w-full max-w-md rounded-2xl bg-white shadow-xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="delete-project-modal-title"
        >
          <div class="px-5 py-5">
            <div class="flex items-start gap-4">
              <div class="flex size-10 shrink-0 items-center justify-center rounded-full bg-red-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.8"
                  stroke="currentColor"
                  class="size-5 text-red-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v3.75m0 3.75h.007v.007H12v-.007ZM3.75 18.75h16.5L12 3.75 3.75 18.75Z"
                  />
                </svg>
              </div>

              <div class="min-w-0">
                <h2
                  id="delete-project-modal-title"
                  class="text-base font-bold text-slate-900"
                >
                  Delete project?
                </h2>

                <p class="mt-1 text-sm leading-6 text-slate-500">
                  Are you sure you want to delete
                  <span
                    id="delete-project-name"
                    class="font-semibold text-slate-700"
                  ></span>?
                </p>

                <p class="mt-2 text-sm leading-6 text-red-600">
                  This will also permanently delete all tasks belonging to
                  this project. This action cannot be undone.
                </p>
              </div>
            </div>
          </div>

          <div class="flex justify-end gap-3 border-t border-slate-100 px-5 py-4">
            <button
              id="cancel-delete-project"
              type="button"
              class="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              Cancel
            </button>

            <button
              id="confirm-delete-project"
              type="button"
              class="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Delete Project
            </button>
          </div>
        </div>
      </div>
    `,
  );

  setupDeleteProjectModal();
}

function setupDeleteProjectModal() {
  const modal = document.querySelector("#delete-project-modal");
  const cancelButton = document.querySelector("#cancel-delete-project");
  const confirmButton = document.querySelector("#confirm-delete-project");

  cancelButton.addEventListener("click", closeDeleteProjectModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeDeleteProjectModal();
    }
  });

  confirmButton.addEventListener("click", () => {
    if (!projectToDelete) return;

    if (deleteCallback) {
      deleteCallback(projectToDelete);
    }

    closeDeleteProjectModal();

    showToast("Project deleted successfully.", "success");

    projectToDelete = null;
  });
}

export function openDeleteProjectModal(project) {
  const modal = document.querySelector("#delete-project-modal");
  const projectName = document.querySelector("#delete-project-name");

  if (!modal || !projectName) return;

  projectToDelete = project;

  projectName.textContent = `"${project.name}"`;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

export function closeDeleteProjectModal() {
  const modal = document.querySelector("#delete-project-modal");

  if (!modal) return;

  modal.classList.add("hidden");
  modal.classList.remove("flex");

  projectToDelete = null;
}
