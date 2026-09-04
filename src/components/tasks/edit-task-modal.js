import { showToast } from "../toast.js";

let editCallback = null;
let editingTaskId = null;

export function renderEditTaskModal(callback) {
  editCallback = callback;

  const existingModal = document.querySelector("#edit-task-modal");

  if (existingModal) {
    existingModal.remove();
  }

  document.body.insertAdjacentHTML(
    "beforeend",
    `
      <div
        id="edit-task-modal"
        class="fixed inset-0 z-50 hidden items-center justify-center bg-slate-900/40 p-4"
      >
        <div
          class="w-full max-w-lg rounded-2xl bg-white shadow-xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="edit-task-modal-title"
        >
          <div class="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <div>
              <h2
                id="edit-task-modal-title"
                class="text-base font-bold text-slate-900"
              >
                Edit Task
              </h2>

              <p class="mt-1 text-sm text-slate-500">
                Update the task details.
              </p>
            </div>

            <button
              id="close-edit-task-modal"
              type="button"
              class="flex size-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              aria-label="Close edit task modal"
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

          <form id="edit-task-form">
            <div class="space-y-4 px-5 py-5">

              <div>
                <label
                  for="edit-task-title"
                  class="mb-1.5 block text-sm font-semibold text-slate-700"
                >
                  Title
                </label>

                <input
                  id="edit-task-title"
                  name="title"
                  type="text"
                  required
                  class="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                  placeholder="Enter task title"
                />
              </div>

              <div>
                <label
                  for="edit-task-description"
                  class="mb-1.5 block text-sm font-semibold text-slate-700"
                >
                  Description
                </label>

                <textarea
                  id="edit-task-description"
                  name="description"
                  rows="4"
                  class="w-full resize-none rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                  placeholder="Describe the task"
                ></textarea>
              </div>

              <div class="grid gap-4 sm:grid-cols-2">

                <div>
                  <label
                    for="edit-task-status"
                    class="mb-1.5 block text-sm font-semibold text-slate-700"
                  >
                    Status
                  </label>

                  <select
                    id="edit-task-status"
                    name="status"
                    class="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                  >
                    <option value="todo">To Do</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>

                <div>
                  <label
                    for="edit-task-priority"
                    class="mb-1.5 block text-sm font-semibold text-slate-700"
                  >
                    Priority
                  </label>

                  <select
                    id="edit-task-priority"
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
                  for="edit-task-due-date"
                  class="mb-1.5 block text-sm font-semibold text-slate-700"
                >
                  Due date
                </label>

                <input
                  id="edit-task-due-date"
                  name="dueDate"
                  type="date"
                  required
                  class="w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>

            </div>

            <div class="flex justify-end gap-3 border-t border-slate-100 px-5 py-4">
              <button
                id="cancel-edit-task"
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

  setupEditTaskModal();
}

function setupEditTaskModal() {
  const modal = document.querySelector("#edit-task-modal");
  const form = document.querySelector("#edit-task-form");
  const closeButton = document.querySelector("#close-edit-task-modal");
  const cancelButton = document.querySelector("#cancel-edit-task");

  closeButton.addEventListener("click", closeEditTaskModal);
  cancelButton.addEventListener("click", closeEditTaskModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeEditTaskModal();
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const updatedTask = {
      id: editingTaskId,
      title: formData.get("title").trim(),
      description:
        formData.get("description").trim() || "No description provided.",
      status: formData.get("status"),
      priority: formData.get("priority"),
      dueDate: formData.get("dueDate"),
    };

    if (!updatedTask.title || !updatedTask.dueDate) {
      showToast("Please fill in all required fields.", "error");
      return;
    }

    if (editCallback) {
      editCallback(updatedTask);
    }

    closeEditTaskModal();

    showToast("Task updated successfully.", "success");
  });
}

export function openEditTaskModal(task) {
  editingTaskId = task.id;
  const modal = document.querySelector("#edit-task-modal");

  if (!modal) return;

  document.querySelector("#edit-task-title").value = task.title;
  document.querySelector("#edit-task-description").value =
    task.description || "";
  document.querySelector("#edit-task-status").value = task.status;
  document.querySelector("#edit-task-priority").value = task.priority;
  document.querySelector("#edit-task-due-date").value = task.dueDate;

  modal.classList.remove("hidden");
  modal.classList.add("flex");

  document.querySelector("#edit-task-title").focus();
}

export function closeEditTaskModal() {
  const modal = document.querySelector("#edit-task-modal");

  if (!modal) return;

  modal.classList.add("hidden");
  modal.classList.remove("flex");
}
