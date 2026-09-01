export function renderCalendar() {
  const app = document.querySelector("#app");

  if (!app) {
    console.error("App mount point not found.");
    return;
  }

  app.innerHTML = `
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

      <h1 class="text-2xl font-bold tracking-tight text-slate-900">
        Calendar
      </h1>

      <p class="mt-1 text-sm text-slate-500">
        View your upcoming deadlines and events.
      </p>

    </div>
  `;
}
