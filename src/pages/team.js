import { teamMembers } from "../data/team.js";
import {
  renderMemberModal,
  openMemberModal,
} from "../components/team/member-modal.js";

import {
  renderEditMemberModal,
  openEditMemberModal,
} from "../components/team/edit-member-modal.js";

export function renderTeam() {
  const app = document.querySelector("#app");

  app.innerHTML = `
    <div class="mx-auto max-w-7xl p-5">
      <!-- Header -->
      <div class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 class="text-2xl font-bold tracking-tight text-slate-900">
            Team
          </h1>

          <p class="mt-1 text-sm text-slate-500">
            Manage your team members and their roles.
          </p>
        </div>

        <button
          id="add-team-member-btn"
          type="button"
          class="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="size-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>

          Add Member
        </button>
      </div>

      <!-- Team Grid -->
      <div
        id="team-grid"
        class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        ${teamMembers.map(renderTeamMemberCard).join("")}
      </div>
    </div>
  `;

  renderMemberModal((newMember) => {
    teamMembers.push(newMember);

    renderTeam();
  });

  renderEditMemberModal((updatedMember) => {
    const memberIndex = teamMembers.findIndex(
      (member) => member.id === updatedMember.id,
    );

    if (memberIndex === -1) return;

    teamMembers[memberIndex] = updatedMember;

    renderTeam();
  });

  setupTeamPage();
}

function renderTeamMemberCard(member) {
  return `
    <article
      class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-3">
          <div
            class="flex size-11 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700"
          >
            ${member.initials}
          </div>

          <div class="min-w-0">
            <h2 class="truncate text-sm font-bold text-slate-900">
              ${member.name}
            </h2>

            <p class="truncate text-xs text-slate-500">
              ${member.email}
            </p>
          </div>
        </div>

       <div class="flex items-center gap-2">
  <span
    class="rounded-full ${
      member.status === "active"
        ? "bg-emerald-50 text-emerald-700"
        : "bg-slate-100 text-slate-500"
    } px-2.5 py-1 text-xs font-semibold"
  >
    ${member.status}
  </span>

  <button
    type="button"
    data-edit-member-id="${member.id}"
    class="edit-member-btn rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
    aria-label="Edit ${member.name}"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      class="size-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M16.862 4.487 19.5 7.125M18.5 2.5a2.121 2.121 0 0 1 3 3L7 20l-4 1 1-4L18.5 2.5Z"
      />
    </svg>
  </button>
</div>
      </div>

      <div class="mt-5 border-t border-slate-100 pt-4">
        <p class="text-xs font-medium uppercase tracking-wide text-slate-400">
          Role
        </p>

        <p class="mt-1 text-sm font-semibold text-slate-700">
          ${member.role}
        </p>
      </div>
    </article>
  `;
}

function setupTeamPage() {
  const addMemberButton = document.querySelector("#add-team-member-btn");

  addMemberButton.addEventListener("click", openMemberModal);

  const teamGrid = document.querySelector("#team-grid");

  teamGrid.addEventListener("click", (event) => {
    const editButton = event.target.closest(".edit-member-btn");

    if (!editButton) return;

    const memberId = Number(editButton.dataset.editMemberId);

    const member = teamMembers.find((item) => item.id === memberId);

    if (!member) return;

    openEditMemberModal(member);
  });
}
