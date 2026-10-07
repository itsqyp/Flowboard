import { openProjectModal } from "../projects/project-modal.js";

const currentDate = new Date();

const formattedDate = currentDate.toLocaleDateString("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
});

const settings = JSON.parse(localStorage.getItem("flowboard-profile")) || {};

const fullName = settings.name || "User";

export function renderWelcomeHeader() {
  const container = document.querySelector("#dashboard-welcome");

  if (!container) {
    console.error("Dashboard welcome mount point not found.");
    return;
  }

  container.innerHTML = `
    <section class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

      <div>

        <p class="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
          ${formattedDate}
        </p>

        <h1 class="mt-1 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
          Good evening, ${fullName}.
        </h1>

        <p class="mt-2 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
          Here's what's happening across your workspace today.
        </p>

      </div>

      <button
        type="button"
        id="create-project-button"
        class="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          class="size-4"
        >
          <path d="M12 5v14"></path>
          <path d="M5 12h14"></path>
        </svg>

        New Project

      </button>

    </section>
  `;

  setupCreateProjectButton();

  const createProjectButton = container.querySelector("#create-project-button");

  if (createProjectButton) {
    createProjectButton.addEventListener("click", openProjectModal);
  }
}

function setupCreateProjectButton() {
  const button = document.querySelector("#create-project-button");

  if (!button) return;

  button.addEventListener("click", () => {
    const modal = document.querySelector("#project-modal");

    if (!modal) {
      console.error("Project modal not found.");
      return;
    }

    modal.classList.remove("hidden");
  });
}
