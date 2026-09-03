import { showToast } from "../toast.js";

let modal = null;
let onCreate = null;

export function renderTaskModal(createCallback) {
  onCreate = createCallback;

  // Prevent duplicate modal creation
  if (document.querySelector("#task-modal")) {
    return;
  }

  modal = document.createElement("div");

  modal.id = "task-modal";
  modal.className =
    "fixed inset-0 z-[90] hidden items-center justify-center p-4";

  modal.innerHTML = `
    <!-- Backdrop -->
    <div
      class="task-modal-backdrop absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
    ></div>


    <!-- Modal -->
    <div
      class="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
      role="dialog"
      aria-modal="true"
      aria-labelledby="task-modal-title"
    >

      <!-- Header -->
      <div class="flex items-start justify-between border-b border-slate-100 px-6 py-5">

        <div>
          <h2
            id="task-modal-title"
            class="text-lg font-bold text-slate-900"
          >
            Add Task
          </h2>

          <p class="mt-1 text-sm text-slate-500">
            Create a new task for this project.
          </p>
        </div>

        <button
          id="close-task-modal"
          type="button"
          class="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.8"
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


      <!-- Form -->
      <form id="task-form">

        <div class="space-y-5 px-6 py-5">

          <!-- Title -->
          <div>
            <label
              for="task-title"
              class="block text-sm font-semibold text-slate-700"
            >
              Task title
            </label>

            <input
              id="task-title"
              name="title"
              type="text"
              placeholder="e.g. Design login page"
              autocomplete="off"
              class="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>


          <!-- Description -->
          <div>
            <label
              for="task-description"
              class="block text-sm font-semibold text-slate-700"
            >
              Description
            </label>

            <textarea
              id="task-description"
              name="description"
              rows="3"
              placeholder="Describe what needs to be done..."
              class="mt-2 w-full resize-none rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            ></textarea>
          </div>


          <!-- Priority + Due Date -->
          <div class="grid gap-5 sm:grid-cols-2">

            <!-- Priority -->
            <div>
              <label
                for="task-priority"
                class="block text-sm font-semibold text-slate-700"
              >
                Priority
              </label>

              <select
                id="task-priority"
                name="priority"
                class="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              >
                <option value="low">Low</option>
                <option value="medium" selected>Medium</option>
                <option value="high">High</option>
              </select>
            </div>


            <!-- Due Date -->
            <div>
              <label
                for="task-due-date"
                class="block text-sm font-semibold text-slate-700"
              >
                Due date
              </label>

              <input
                id="task-due-date"
                name="dueDate"
                type="date"
                class="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

          </div>

        </div>


        <!-- Footer -->
        <div class="flex justify-end gap-2 border-t border-slate-100 bg-slate-50/50 px-6 py-4">

          <button
            id="cancel-task-modal"
            type="button"
            class="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Cancel
          </button>

          <button
            type="submit"
            class="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            Create Task
          </button>

        </div>

      </form>

    </div>
  `;

  document.body.appendChild(modal);

  setupModalEvents();
}

function setupModalEvents() {
  const closeButton = modal.querySelector("#close-task-modal");
  const cancelButton = modal.querySelector("#cancel-task-modal");
  const backdrop = modal.querySelector(".task-modal-backdrop");
  const form = modal.querySelector("#task-form");

  closeButton.addEventListener("click", closeTaskModal);
  cancelButton.addEventListener("click", closeTaskModal);
  backdrop.addEventListener("click", closeTaskModal);

  form.addEventListener("submit", handleSubmit);

  document.addEventListener("keydown", handleEscape);
}

export function openTaskModal() {
  if (!modal) {
    return;
  }

  modal.classList.remove("hidden");
  modal.classList.add("flex");

  document.body.classList.add("overflow-hidden");

  const titleInput = modal.querySelector("#task-title");

  setTimeout(() => {
    titleInput.focus();
  }, 50);
}

export function closeTaskModal() {
  if (!modal) {
    return;
  }

  modal.classList.add("hidden");
  modal.classList.remove("flex");

  document.body.classList.remove("overflow-hidden");

  modal.querySelector("#task-form").reset();
}

function handleEscape(event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeTaskModal();
  }
}

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  const title = formData.get("title").trim();
  const description = formData.get("description").trim();
  const priority = formData.get("priority");
  const dueDate = formData.get("dueDate");

  if (!title) {
    showToast("Please enter a task title.", "warning");
    return;
  }

  if (!dueDate) {
    showToast("Please select a due date.", "warning");
    return;
  }

  const newTask = {
    id: `task-${Date.now()}`,

    title,

    description: description || "No description provided.",

    status: "todo",

    priority,

    dueDate,

    assignee: {
      id: 1,
      name: "Abir",
      initials: "AB",
    },

    createdAt: new Date().toISOString().split("T")[0],
  };

  if (onCreate) {
    onCreate(newTask);
  }

  closeTaskModal();

  showToast(`"${title}" has been created successfully.`, "success");
}
