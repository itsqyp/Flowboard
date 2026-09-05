import { teamMembers } from "../data/team.js";
import {
  renderMemberModal,
  openMemberModal,
} from "../components/team/member-modal.js";

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

        <span
          class="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700"
        >
          ${member.status}
        </span>
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
}
