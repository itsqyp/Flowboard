import { getState } from "../store/store.js";
import { navigateTo } from "../router.js";

let searchInitialized = false;

function escapeHTML(value) {
  const entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };

  return String(value ?? "").replace(/[&<>"']/g, (character) => {
    return entities[character];
  });
}

function getSearchResults(query) {
  const { projects, tasks, teamMembers } = getState();

  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return {
      projects: [],
      tasks: [],
      teamMembers: [],
    };
  }

  const matchingProjects = projects
    .filter((project) => {
      return [
        project.name,
        project.description,
        project.status,
        project.priority,
      ].some((value) =>
        String(value ?? "")
          .toLowerCase()
          .includes(normalizedQuery),
      );
    })
    .slice(0, 5);

  const matchingTasks = tasks
    .filter((task) => {
      const project = projects.find(
        (item) => String(item.id) === String(task.projectId),
      );

      const assignee = teamMembers.find(
        (member) => String(member.id) === String(task.assigneeId),
      );

      return [
        task.title,
        task.description,
        task.status,
        task.priority,
        project?.name,
        assignee?.name,
      ].some((value) =>
        String(value ?? "")
          .toLowerCase()
          .includes(normalizedQuery),
      );
    })
    .slice(0, 5);

  const matchingTeamMembers = teamMembers
    .filter((member) => {
      return [member.name, member.email, member.role].some((value) =>
        String(value ?? "")
          .toLowerCase()
          .includes(normalizedQuery),
      );
    })
    .slice(0, 5);

  return {
    projects: matchingProjects,
    tasks: matchingTasks,
    teamMembers: matchingTeamMembers,
  };
}

function getResultIcon(type) {
  const icons = {
    project: `
      <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="1.8"
        class="size-5" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3"></rect>
        <path d="M9 3v18"></path>
      </svg>
    `,

    task: `
      <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="1.8"
        class="size-5" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3"></rect>
        <path d="m8 12 3 3 5-6"></path>
      </svg>
    `,

    person: `
      <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="1.8"
        class="size-5" aria-hidden="true">
        <circle cx="12" cy="8" r="4"></circle>
        <path d="M4 21a8 8 0 0 1 16 0"></path>
      </svg>
    `,
  };

  return icons[type] ?? "";
}

function renderResult(result) {
  const { type, title, subtitle, path, id } = result;

  return `
    <button
      type="button"
      class="global-search-result flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors hover:bg-slate-100 focus:bg-slate-100 focus:outline-none dark:hover:bg-slate-800 dark:focus:bg-slate-800"
      data-result-type="${escapeHTML(type)}"
      data-result-id="${escapeHTML(id)}"
      data-result-path="${escapeHTML(path)}"
      role="option"
    >
      <span
        class="flex size-10 shrink-0 items-center justify-center rounded-lg
          ${
            type === "project"
              ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-300"
              : type === "task"
                ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300"
                : "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-300"
          }"
      >
        ${getResultIcon(type === "person" ? "person" : type)}
      </span>

      <span class="min-w-0 flex-1">
        <span class="block truncate text-sm font-semibold text-slate-900 dark:text-white">
          ${escapeHTML(title)}
        </span>

        <span class="mt-0.5 block truncate text-xs text-slate-500 dark:text-slate-400">
          ${escapeHTML(subtitle)}
        </span>
      </span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        class="size-4 shrink-0 text-slate-400"
        aria-hidden="true"
      >
        <path d="M7 17 17 7"></path>
        <path d="M7 7h10v10"></path>
      </svg>
    </button>
  `;
}

function renderResultGroup(title, results) {
  if (!results.length) {
    return "";
  }

  return `
    <section class="px-2 py-2">
      <h3 class="px-3 pb-2 pt-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
        ${escapeHTML(title)}
      </h3>

      <div class="space-y-1">
        ${results.map(renderResult).join("")}
      </div>
    </section>
  `;
}

function renderResults(query) {
  const resultsContainer = document.querySelector("#global-search-results");

  if (!resultsContainer) {
    return;
  }

  const normalizedQuery = query.trim();

  if (!normalizedQuery) {
    resultsContainer.innerHTML = `
      <div class="px-6 py-12 text-center">
        <div class="mx-auto flex size-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-300">
          ${getResultIcon("project")}
        </div>

        <p class="mt-4 text-sm font-semibold text-slate-900 dark:text-white">
          Search Flowboard
        </p>

        <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Find projects, tasks, and team members.
        </p>
      </div>
    `;

    return;
  }

  const matches = getSearchResults(normalizedQuery);

  const totalResults =
    matches.projects.length + matches.tasks.length + matches.teamMembers.length;

  if (totalResults === 0) {
    resultsContainer.innerHTML = `
      <div class="px-6 py-12 text-center">
        <p class="text-sm font-semibold text-slate-900 dark:text-white">
          No results found
        </p>

        <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Try a different search term.
        </p>
      </div>
    `;

    return;
  }

  const projectResults = matches.projects.map((project) => ({
    type: "project",
    id: project.id,
    title: project.name,
    subtitle: project.description || "Project",
    path: `/projects/${project.id}`,
  }));

  const taskResults = matches.tasks.map((task) => {
    const project = getState().projects.find(
      (item) => String(item.id) === String(task.projectId),
    );

    return {
      type: "task",
      id: task.id,
      title: task.title,
      subtitle: project ? `Task · ${project.name}` : "Task",
      path: "/tasks",
    };
  });

  const teamResults = matches.teamMembers.map((member) => ({
    type: "person",
    id: member.id,
    title: member.name,
    subtitle: `${member.role} · ${member.email}`,
    path: "/team",
  }));

  resultsContainer.innerHTML = `
    ${renderResultGroup("Projects", projectResults)}
    ${renderResultGroup("Tasks", taskResults)}
    ${renderResultGroup("People", teamResults)}
  `;
}

function closeSearch() {
  const modal = document.querySelector("#global-search-modal");
  const searchButton = document.querySelector("#global-search-button");
  const input = document.querySelector("#global-search-input");

  if (!modal) {
    return;
  }

  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("overflow-hidden");

  if (searchButton) {
    searchButton.setAttribute("aria-expanded", "false");
    searchButton.focus();
  }

  if (input) {
    input.value = "";
  }
}

function openSearch() {
  const modal = document.querySelector("#global-search-modal");
  const input = document.querySelector("#global-search-input");
  const resultsContainer = document.querySelector("#global-search-results");
  const searchButton = document.querySelector("#global-search-button");

  if (!modal || !input) {
    return;
  }

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("overflow-hidden");

  searchButton?.setAttribute("aria-expanded", "true");

  renderResults("");

  requestAnimationFrame(() => {
    input.focus();
  });

  if (resultsContainer) {
    resultsContainer.scrollTop = 0;
  }
}

function setupSearchEvents() {
  if (searchInitialized) {
    return;
  }

  searchInitialized = true;

  document.addEventListener("click", (event) => {
    const openButton = event.target.closest("#global-search-button");

    if (openButton) {
      openSearch();
      return;
    }

    const closeButton = event.target.closest("[data-close-global-search]");

    if (closeButton) {
      closeSearch();
      return;
    }

    const resultButton = event.target.closest(".global-search-result");

    if (resultButton) {
      const path = resultButton.dataset.resultPath;

      closeSearch();

      if (path) {
        navigateTo(path);
      }

      return;
    }
  });

  document.addEventListener("input", (event) => {
    if (event.target.id === "global-search-input") {
      renderResults(event.target.value);
    }
  });

  document.addEventListener("keydown", (event) => {
    const isMac = navigator.platform.toUpperCase().includes("MAC");
    const shortcutPressed = isMac ? event.metaKey : event.ctrlKey;

    if (shortcutPressed && event.key.toLowerCase() === "k") {
      event.preventDefault();
      openSearch();
      return;
    }

    if (event.key === "Escape") {
      const modal = document.querySelector("#global-search-modal");

      if (modal && !modal.classList.contains("hidden")) {
        closeSearch();
      }
    }
  });
}

export function renderGlobalSearch() {
  const existingModal = document.querySelector("#global-search-modal");

  if (existingModal) {
    setupSearchEvents();
    return;
  }

  document.body.insertAdjacentHTML(
    "beforeend",
    `
      <div
        id="global-search-modal"
        class="fixed inset-0 z-[100] hidden overflow-y-auto bg-slate-950/50 px-4 py-10 backdrop-blur-sm sm:py-20"
        aria-hidden="true"
      >
        <div
          class="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900"
          role="dialog"
          aria-modal="true"
          aria-labelledby="global-search-title"
        >
          <div class="flex items-center gap-3 border-b border-slate-200 px-4 dark:border-slate-700 sm:px-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-5 shrink-0 text-slate-400"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7"></circle>
              <path d="m20 20-3.5-3.5"></path>
            </svg>

            <label for="global-search-input" class="sr-only">
              Search Flowboard
            </label>

            <input
              id="global-search-input"
              type="search"
              autocomplete="off"
              placeholder="Search projects, tasks, people..."
              class="h-16 min-w-0 flex-1 border-0 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:ring-0 dark:text-white"
            />

            <button
              type="button"
              data-close-global-search
              class="rounded-md border border-slate-200 px-2 py-1 text-xs font-medium text-slate-500 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800"
              aria-label="Close search"
            >
              ESC
            </button>
          </div>

          <div class="border-b border-slate-200 px-5 py-3 dark:border-slate-700">
            <h2
              id="global-search-title"
              class="text-xs font-semibold text-slate-500 dark:text-slate-400"
            >
              Search across your workspace
            </h2>
          </div>

          <div
            id="global-search-results"
            class="max-h-[min(60vh,32rem)] overflow-y-auto p-2"
            role="listbox"
            aria-label="Search results"
          ></div>

          <div class="flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 bg-slate-50 px-5 py-3 dark:border-slate-700 dark:bg-slate-950">
            <p class="text-xs text-slate-500 dark:text-slate-400">
              Search projects, tasks, and people
            </p>

            <button
              type="button"
              data-close-global-search
              class="text-xs font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              Close search
            </button>
          </div>
        </div>
      </div>
    `,
  );

  setupSearchEvents();
}
