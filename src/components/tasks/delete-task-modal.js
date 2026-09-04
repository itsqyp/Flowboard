import { showToast } from "../toast.js";

let deleteCallback = null;
let taskToDelete = null;

export function renderDeleteTaskModal(callback) {
  deleteCallback = callback;

  const existingModal = document.querySelector("#delete-task-modal");

  if (existingModal) {
    existingModal.remove();
  }

  document.body.insertAdjacentHTML(
    "beforeend",
    `
      <div
        id="delete-task-modal"
        class="fixed inset-0 z-50 hidden items-center justify-center bg-slate-900/40 p-4"
      >
        <div
          class="w-full max-w-md rounded-2xl bg-white shadow-xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="delete-task-modal-title"
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
                  id="delete-task-modal-title"
                  class="text-base font-bold text-slate-900"
                >
                  Delete task?
                </h2>

                <p class="mt-1 text-sm leading-6 text-slate-500">
                  Are you sure you want to delete
                  <span
                    id="delete-task-name"
                    class="font-semibold text-slate-700"
                  ></span>?
                  This action cannot be undone.
                </p>
              </div>
            </div>
          </div>

          <div class="flex justify-end gap-3 border-t border-slate-100 px-5 py-4">
            <button
              id="cancel-delete-task"
              type="button"
              class="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              Cancel
            </button>

            <button
              id="confirm-delete-task"
              type="button"
              class="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Delete Task
            </button>
          </div>
        </div>
      </div>
    `,
  );

  setupDeleteTaskModal();
}

function setupDeleteTaskModal() {
  const modal = document.querySelector("#delete-task-modal");
  const cancelButton = document.querySelector("#cancel-delete-task");
  const confirmButton = document.querySelector("#confirm-delete-task");

  cancelButton.addEventListener("click", closeDeleteTaskModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeDeleteTaskModal();
    }
  });

  confirmButton.addEventListener("click", () => {
    if (!taskToDelete) return;

    if (deleteCallback) {
      deleteCallback(taskToDelete);
    }

    closeDeleteTaskModal();

    showToast("Task deleted successfully.", "success");

    taskToDelete = null;
  });
}

export function openDeleteTaskModal(task) {
  const modal = document.querySelector("#delete-task-modal");
  const taskName = document.querySelector("#delete-task-name");

  if (!modal || !taskName) return;

  taskToDelete = task;

  taskName.textContent = `"${task.title}"`;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

export function closeDeleteTaskModal() {
  const modal = document.querySelector("#delete-task-modal");

  if (!modal) return;

  modal.classList.add("hidden");
  modal.classList.remove("flex");

  taskToDelete = null;
}
