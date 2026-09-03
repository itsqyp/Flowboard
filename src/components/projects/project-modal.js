import { showToast } from "../toast.js";

let modal = null;
let onCreate = null;

export function renderProjectModal(createCallback) {
  onCreate = createCallback;

  modal = document.createElement("div");

  modal.id = "project-modal";
  modal.className =
    "fixed inset-0 z-[90] hidden items-center justify-center p-4";

  modal.innerHTML = `
    <!-- Backdrop -->
    <div
      class="project-modal-backdrop absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
    ></div>

    <!-- Modal -->
    <div
      class="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >

      <!-- Header -->
      <div class="flex items-center justify-between border-b border-slate-100 px-6 py-5">

        <div>
          <h2
            id="project-modal-title"
            class="text-lg font-bold text-slate-900"
          >
            Create Project
          </h2>

          <p class="mt-1 text-sm text-slate-500">
            Add a new project to your workspace.
          </p>
        </div>

        <button
          id="close-project-modal"
          type="button"
          class="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
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
      <form id="project-form">

        <div class="space-y-5 px-6 py-6">

          <!-- Name -->
          <div>
            <label
              for="project-name"
              class="block text-sm font-semibold text-slate-700"
            >
              Project Name
            </label>

            <input
              id="project-name"
              name="name"
              type="text"
              required
              maxlength="80"
              placeholder="e.g. Website Redesign"
              class="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>


          <!-- Description -->
          <div>
            <label
              for="project-description"
              class="block text-sm font-semibold text-slate-700"
            >
              Description
            </label>

            <textarea
              id="project-description"
              name="description"
              rows="3"
              maxlength="300"
              placeholder="What is this project about?"
              class="mt-2 w-full resize-none rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            ></textarea>
          </div>


          <!-- Due Date + Priority -->
          <div class="grid gap-5 sm:grid-cols-2">

            <div>
              <label
                for="project-due-date"
                class="block text-sm font-semibold text-slate-700"
              >
                Due Date
              </label>

              <input
                id="project-due-date"
                name="dueDate"
                type="date"
                required
                class="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>


            <div>
              <label
                for="project-priority"
                class="block text-sm font-semibold text-slate-700"
              >
                Priority
              </label>

              <select
                id="project-priority"
                name="priority"
                class="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              >
                <option value="low">Low</option>
                <option value="medium" selected>Medium</option>
                <option value="high">High</option>
              </select>
            </div>

          </div>

        </div>


        <!-- Footer -->
        <div class="flex items-center justify-end gap-3 border-t border-slate-100 bg-slate-50 px-6 py-4">

          <button
            id="cancel-project-modal"
            type="button"
            class="rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-200 hover:text-slate-900"
          >
            Cancel
          </button>

          <button
            type="submit"
            class="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Create Project
          </button>

        </div>

      </form>

    </div>
  `;

  document.body.appendChild(modal);

  setupModalEvents();
}

function setupModalEvents() {
  const closeButton = modal.querySelector("#close-project-modal");
  const cancelButton = modal.querySelector("#cancel-project-modal");
  const backdrop = modal.querySelector(".project-modal-backdrop");
  const form = modal.querySelector("#project-form");

  closeButton.addEventListener("click", closeModal);
  cancelButton.addEventListener("click", closeModal);
  backdrop.addEventListener("click", closeModal);

  form.addEventListener("submit", handleSubmit);

  document.addEventListener("keydown", handleEscape);
}

export function openProjectModal() {
  if (!modal) {
    return;
  }

  modal.classList.remove("hidden");
  modal.classList.add("flex");

  document.body.classList.add("overflow-hidden");

  const nameInput = modal.querySelector("#project-name");

  setTimeout(() => {
    nameInput.focus();
  }, 50);
}

export function closeProjectModal() {
  if (!modal) {
    return;
  }

  modal.classList.add("hidden");
  modal.classList.remove("flex");

  document.body.classList.remove("overflow-hidden");

  modal.querySelector("#project-form").reset();
}

function handleEscape(event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
}

function closeModal() {
  closeProjectModal();
}

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  const name = formData.get("name").trim();
  const description = formData.get("description").trim();
  const dueDate = formData.get("dueDate");
  const priority = formData.get("priority");

  if (!name) {
    showToast("Please enter a project name.", "warning");
    return;
  }

  if (!dueDate) {
    showToast("Please select a due date.", "warning");
    return;
  }

  const newProject = {
    id: `${name.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}`,
    name,
    description: description || "No description provided.",
    status: "planning",
    priority,
    progress: 0,
    dueDate,
    members: [
      {
        id: 1,
        name: "Abir",
        initials: "AB",
      },
    ],
    tasks: {
      total: 0,
      completed: 0,
    },
    createdAt: new Date().toISOString().split("T")[0],
  };

  if (onCreate) {
    onCreate(newProject);
  }

  closeProjectModal();

  showToast(`"${name}" has been created successfully.`, "success");
}
