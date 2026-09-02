import { mainNavigation, workspaceNavigation } from "../data/navigation.js";

export function renderSidebar() {
  const sidebar = document.querySelector("#sidebar");

  if (!sidebar) {
    console.error("Sidebar mount point not found.");
    return;
  }

  const currentPath = window.location.pathname;

  sidebar.innerHTML = `
    <aside class="hidden md:flex w-64 shrink-0 border-r bg-white">
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
                        ? "bg-indigo-50 font-semibold text-indigo-700"
                        : "font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900"
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

            <p class="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
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
                          ? "bg-indigo-50 font-semibold text-indigo-700"
                          : "font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900"
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

        <!-- Sidebar Footer -->
        <div class="border-t p-4">

          <div class="rounded-lg bg-slate-50 p-3">

            <p class="text-xs font-semibold text-slate-700">
              Free Plan
            </p>

            <p class="mt-1 text-xs text-slate-500">
              3 of 5 projects used
            </p>

            <div class="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-200">
              <div class="h-full w-3/5 rounded-full bg-indigo-600"></div>
            </div>

            <button
              type="button"
              class="mt-3 text-xs font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Upgrade plan
            </button>

          </div>

        </div>

      </div>
    </aside>
  `;
}
