import { mainNavigation, workspaceNavigation } from "../data/navigation.js";

export function renderSidebar() {
  const sidebar = document.querySelector("#sidebar");

  if (!sidebar) {
    console.error("Sidebar mount point not found.");
    return;
  }

  const currentPath = window.location.pathname;

  sidebar.innerHTML = `
    <aside class="hidden w-64 shrink-0 border-r border-slate-200 bg-white md:flex dark:border-slate-800 dark:bg-slate-950">
      <div class="flex w-full flex-col">

        <!-- Navigation -->
        <nav class="flex-1 p-4">

          <div class="space-y-1">
            ${mainNavigation
              .map((item) => {
                const isActive =
                  item.href === currentPath ||
                  (item.href === "/" && currentPath === "/dashboard");

                return `
                  <a
                    href="${item.href}"
                    class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm ${
                      isActive
                        ? "bg-indigo-50 font-semibold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
                        : "font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                    } transition-colors"
                  >
                    ${item.icon}
                    ${item.label}
                  </a>
                `;
              })
              .join("")}
          </div>

          <div class="mt-8">

            <p class="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Workspace
            </p>

            <div class="mt-2 space-y-1">
              ${workspaceNavigation
                .map((item) => {
                  const isActive = item.href === currentPath;

                  return `
                    <a
                      href="${item.href}"
                      class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm ${
                        isActive
                          ? "bg-indigo-50 font-semibold text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
                          : "font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                      } transition-colors"
                    >
                      ${item.icon}
                      ${item.label}
                    </a>
                  `;
                })
                .join("")}
            </div>

          </div>

        </nav>

      </div>
    </aside>
  `;
}
