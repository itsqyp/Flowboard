export function renderDashboard() {
  const app = document.querySelector("#app");

  if (!app) {
    console.error("App mount point not found.");
    return;
  }

  app.innerHTML = `
        <section class="px-6 py-8">

            <div class="mx-auto max-w-7xl">

                <div>
                    <p class="text-sm font-medium text-indigo-600">
                        Workspace
                    </p>

                    <h1 class="mt-1 text-3xl font-bold tracking-tight text-slate-900">
                        Dashboard
                    </h1>

                    <p class="mt-2 text-sm text-slate-500">
                        Welcome back. Here's what's happening with your projects.
                    </p>
                </div>

                <!-- Temporary content -->
                <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                    <div class="rounded-xl border bg-white p-5">
                        <p class="text-sm text-slate-500">
                            Total Projects
                        </p>

                        <p class="mt-2 text-3xl font-bold text-slate-900">
                            3
                        </p>
                    </div>

                    <div class="rounded-xl border bg-white p-5">
                        <p class="text-sm text-slate-500">
                            Active Tasks
                        </p>

                        <p class="mt-2 text-3xl font-bold text-slate-900">
                            12
                        </p>
                    </div>

                    <div class="rounded-xl border bg-white p-5">
                        <p class="text-sm text-slate-500">
                            Completed
                        </p>

                        <p class="mt-2 text-3xl font-bold text-slate-900">
                            28
                        </p>
                    </div>

                    <div class="rounded-xl border bg-white p-5">
                        <p class="text-sm text-slate-500">
                            Team Members
                        </p>

                        <p class="mt-2 text-3xl font-bold text-slate-900">
                            6
                        </p>
                    </div>

                </div>

            </div>

        </section>
    `;
}
