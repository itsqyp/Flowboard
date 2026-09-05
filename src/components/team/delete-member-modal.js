import { showToast } from "../toast.js";

let deleteCallback = null;
let memberToDelete = null;

export function renderDeleteMemberModal(callback) {
  deleteCallback = callback;

  const existingModal = document.querySelector("#delete-member-modal");

  if (existingModal) {
    existingModal.remove();
  }

  document.body.insertAdjacentHTML(
    "beforeend",
    `
      <div
        id="delete-member-modal"
        class="fixed inset-0 z-50 hidden items-center justify-center bg-slate-900/40 p-4"
      >
        <div
          class="w-full max-w-md rounded-2xl bg-white shadow-xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="delete-member-modal-title"
        >
          <div class="px-5 py-5">
            <div class="flex items-start gap-4">
              <div
                class="flex size-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600"
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
                    d="M12 9v3.75m9.303 3.376L13.697 4.5a1.969 1.969 0 0 0-3.394 0l-7.606 11.626A1.969 1.969 0 0 0 4.394 19.5h15.212a1.969 1.969 0 0 0 1.697-3.374ZM12 16.5h.007v.007H12V16.5Z"
                  />
                </svg>
              </div>

              <div class="min-w-0">
                <h2
                  id="delete-member-modal-title"
                  class="text-base font-bold text-slate-900"
                >
                  Remove team member?
                </h2>

                <p class="mt-1 text-sm leading-6 text-slate-500">
                  Are you sure you want to remove
                  <span
                    id="delete-member-name"
                    class="font-semibold text-slate-700"
                  ></span>
                  from the team?
                </p>

                <p class="mt-2 text-sm leading-6 text-red-600">
                  This action cannot be undone.
                </p>
              </div>
            </div>
          </div>

          <div
            class="flex justify-end gap-3 border-t border-slate-100 px-5 py-4"
          >
            <button
              id="cancel-delete-member"
              type="button"
              class="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              Cancel
            </button>

            <button
              id="confirm-delete-member"
              type="button"
              class="rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Remove Member
            </button>
          </div>
        </div>
      </div>
    `,
  );

  setupDeleteMemberModal();
}

function setupDeleteMemberModal() {
  const modal = document.querySelector("#delete-member-modal");
  const cancelButton = document.querySelector("#cancel-delete-member");
  const confirmButton = document.querySelector("#confirm-delete-member");

  cancelButton.addEventListener("click", closeDeleteMemberModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeDeleteMemberModal();
    }
  });

  confirmButton.addEventListener("click", () => {
    if (!memberToDelete) return;

    if (deleteCallback) {
      deleteCallback(memberToDelete);
    }

    closeDeleteMemberModal();

    showToast("Team member removed successfully.", "success");

    memberToDelete = null;
  });
}

export function openDeleteMemberModal(member) {
  const modal = document.querySelector("#delete-member-modal");
  const memberName = document.querySelector("#delete-member-name");

  if (!modal || !memberName) return;

  memberToDelete = member;

  memberName.textContent = `"${member.name}"`;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

export function closeDeleteMemberModal() {
  const modal = document.querySelector("#delete-member-modal");

  if (!modal) return;

  modal.classList.add("hidden");
  modal.classList.remove("flex");

  memberToDelete = null;
}
