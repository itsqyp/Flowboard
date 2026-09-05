import { showToast } from "../toast.js";

let editCallback = null;
let editingMemberId = null;

export function renderEditMemberModal(callback) {
  editCallback = callback;

  const existingModal = document.querySelector("#edit-member-modal");

  if (existingModal) {
    existingModal.remove();
  }

  document.body.insertAdjacentHTML(
    "beforeend",
    `
      <div
        id="edit-member-modal"
        class="fixed inset-0 z-50 hidden items-center justify-center bg-slate-900/40 p-4"
      >
        <div
          class="w-full max-w-md rounded-2xl bg-white shadow-xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="edit-member-modal-title"
        >
          <div class="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <div>
              <h2
                id="edit-member-modal-title"
                class="text-lg font-bold text-slate-900"
              >
                Edit Team Member
              </h2>

              <p class="mt-1 text-sm text-slate-500">
                Update this member's information.
              </p>
            </div>

            <button
              id="close-edit-member-modal"
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

          <form id="edit-member-form">
            <div class="space-y-4 px-5 py-5">

              <div>
                <label
                  for="edit-member-name"
                  class="mb-1.5 block text-sm font-semibold text-slate-700"
                >
                  Name
                </label>

                <input
                  id="edit-member-name"
                  name="name"
                  type="text"
                  required
                  class="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <div>
                <label
                  for="edit-member-email"
                  class="mb-1.5 block text-sm font-semibold text-slate-700"
                >
                  Email
                </label>

                <input
                  id="edit-member-email"
                  name="email"
                  type="email"
                  required
                  class="w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              <div>
                <label
                  for="edit-member-role"
                  class="mb-1.5 block text-sm font-semibold text-slate-700"
                >
                  Role
                </label>

                <select
                  id="edit-member-role"
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

              <div>
                <label
                  for="edit-member-status"
                  class="mb-1.5 block text-sm font-semibold text-slate-700"
                >
                  Status
                </label>

                <select
                  id="edit-member-status"
                  name="status"
                  class="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

            </div>

            <div class="flex justify-end gap-3 border-t border-slate-100 px-5 py-4">
              <button
                id="cancel-edit-member"
                type="button"
                class="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
              >
                Cancel
              </button>

              <button
                type="submit"
                class="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    `,
  );

  setupEditMemberModal();
}

function setupEditMemberModal() {
  const modal = document.querySelector("#edit-member-modal");
  const form = document.querySelector("#edit-member-form");
  const closeButton = document.querySelector("#close-edit-member-modal");
  const cancelButton = document.querySelector("#cancel-edit-member");

  closeButton.addEventListener("click", closeEditMemberModal);
  cancelButton.addEventListener("click", closeEditMemberModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeEditMemberModal();
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (editingMemberId === null) return;

    const formData = new FormData(form);

    const updatedMember = {
      id: editingMemberId,
      name: formData.get("name").trim(),
      email: formData.get("email").trim(),
      role: formData.get("role"),
      status: formData.get("status"),
    };

    updatedMember.initials = getInitials(updatedMember.name);

    if (editCallback) {
      editCallback(updatedMember);
    }

    closeEditMemberModal();

    showToast("Team member updated successfully.", "success");
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

export function openEditMemberModal(member) {
  const modal = document.querySelector("#edit-member-modal");

  if (!modal) return;

  editingMemberId = member.id;

  document.querySelector("#edit-member-name").value = member.name;
  document.querySelector("#edit-member-email").value = member.email;
  document.querySelector("#edit-member-role").value = member.role;
  document.querySelector("#edit-member-status").value = member.status;

  modal.classList.remove("hidden");
  modal.classList.add("flex");

  document.querySelector("#edit-member-name")?.focus();
}

export function closeEditMemberModal() {
  const modal = document.querySelector("#edit-member-modal");

  if (!modal) return;

  modal.classList.add("hidden");
  modal.classList.remove("flex");

  editingMemberId = null;
}
