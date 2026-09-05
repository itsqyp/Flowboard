import { showToast } from "../toast.js";

let createCallback = null;

export function renderMemberModal(callback) {
  createCallback = callback;

  const existingModal = document.querySelector("#member-modal");

  if (existingModal) {
    existingModal.remove();
  }

  document.body.insertAdjacentHTML(
    "beforeend",
    `
      <div
        id="member-modal"
        class="fixed inset-0 z-50 hidden items-center justify-center bg-slate-900/40 p-4"
      >
        <div
          class="w-full max-w-md rounded-2xl bg-white shadow-xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="member-modal-title"
        >
          <div class="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <div>
              <h2
                id="member-modal-title"
                class="text-lg font-bold text-slate-900"
              >
                Add Team Member
              </h2>

              <p class="mt-1 text-sm text-slate-500">
                Add a new member to your workspace.
              </p>
            </div>

            <button
              id="close-member-modal"
              type="button"
              aria-label="Close modal"
              class="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
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

          <form id="member-form">
            <div class="space-y-4 px-5 py-5">

              <div>
                <label
                  for="member-name"
                  class="mb-1.5 block text-sm font-semibold text-slate-700"
                >
                  Name
                </label>

                <input
                  id="member-name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  class="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <div>
                <label
                  for="member-email"
                  class="mb-1.5 block text-sm font-semibold text-slate-700"
                >
                  Email
                </label>

                <input
                  id="member-email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  class="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <div>
                <label
                  for="member-role"
                  class="mb-1.5 block text-sm font-semibold text-slate-700"
                >
                  Role
                </label>

                <select
                  id="member-role"
                  name="role"
                  class="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                >
                  <option value="Developer">Developer</option>
                  <option value="Designer">Designer</option>
                  <option value="Project Manager">Project Manager</option>
                  <option value="Content Writer">Content Writer</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>

            </div>

            <div class="flex justify-end gap-3 border-t border-slate-100 px-5 py-4">
              <button
                id="cancel-member-modal"
                type="button"
                class="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                class="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                Add Member
              </button>
            </div>
          </form>
        </div>
      </div>
    `,
  );

  setupMemberModal();
}

function setupMemberModal() {
  const modal = document.querySelector("#member-modal");
  const form = document.querySelector("#member-form");
  const closeButton = document.querySelector("#close-member-modal");
  const cancelButton = document.querySelector("#cancel-member-modal");

  closeButton.addEventListener("click", closeMemberModal);
  cancelButton.addEventListener("click", closeMemberModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeMemberModal();
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const role = formData.get("role");

    const newMember = {
      id: Date.now(),
      name,
      email,
      role,
      initials: getInitials(name),
      status: "active",
    };

    if (createCallback) {
      createCallback(newMember);
    }

    closeMemberModal();

    showToast("Team member added successfully.", "success");

    form.reset();
  });
}

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function openMemberModal() {
  const modal = document.querySelector("#member-modal");

  if (!modal) return;

  modal.classList.remove("hidden");
  modal.classList.add("flex");

  document.querySelector("#member-name")?.focus();
}

export function closeMemberModal() {
  const modal = document.querySelector("#member-modal");

  if (!modal) return;

  modal.classList.add("hidden");
  modal.classList.remove("flex");
}
