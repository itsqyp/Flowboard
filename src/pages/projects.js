export function renderProjects() {
  const app = document.querySelector("#app");

  if (!app) {
    console.error("App mount point not found.");
    return;
  }

  app.innerHTML = `
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

      <div>
        <h1 class="text-2xl font-bold tracking-tight text-slate-900">
          Projects
        </h1>

        <p class="mt-1 text-sm text-slate-500">
          Manage and organize your projects.
        </p>
      </div>

    </div>
  `;
}
