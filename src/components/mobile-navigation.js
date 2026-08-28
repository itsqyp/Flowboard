export function renderMobileNavigation() {
  const navigation = document.querySelector("#mobile-navigation");

  if (!navigation) {
    console.error("Mobile navigation mount point not found.");
    return;
  }

  navigation.innerHTML = `
        <!-- Backdrop -->
        <div
            id="mobile-navigation-backdrop"
            class="fixed inset-0 z-40 hidden bg-black/40"
        ></div>

        <!-- Drawer -->
        <aside
            id="mobile-navigation-drawer"
            class="fixed inset-y-0 left-0 z-50 flex w-72 -translate-x-full flex-col bg-white shadow-xl transition-transform duration-300"
        >

            <!-- Drawer Header -->
            <div class="flex h-16 items-center justify-between border-b px-4">

                <div class="flex items-center gap-2">

                    <div
                        class="flex size-9 items-center justify-center rounded-lg bg-indigo-600 font-bold text-white"
                    >
                        F
                    </div>

                    <span class="text-lg font-bold tracking-tight">
                        Flowboard
                    </span>

                </div>

                <button
                    type="button"
                    id="mobile-menu-close"
                    class="flex size-10 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                    aria-label="Close navigation menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        class="size-5"
                    >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                    </svg>
                </button>

            </div>

            <!-- Navigation -->
            <nav class="flex-1 overflow-y-auto p-4">

                <div class="space-y-1">

                    <a
                        href="/"
                        class="flex items-center gap-3 rounded-lg bg-indigo-50 px-3 py-2.5 text-sm font-semibold text-indigo-700"
                    >
                        <span>▦</span>
                        Dashboard
                    </a>

                    <a
                        href="#"
                        class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    >
                        <span>▱</span>
                        Projects
                    </a>

                    <a
                        href="#"
                        class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    >
                        <span>✓</span>
                        My Tasks
                    </a>

                    <a
                        href="#"
                        class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    >
                        <span>▣</span>
                        Calendar
                    </a>

                    <a
                        href="#"
                        class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    >
                        <span>♧</span>
                        Team
                    </a>

                </div>

                <div class="mt-8">

                    <p class="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Workspace
                    </p>

                    <div class="mt-2">

                        <a
                            href="#"
                            class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                        >
                            <span>⚙</span>
                            Settings
                        </a>

                    </div>

                </div>

            </nav>

        </aside>
    `;

  setupMobileNavigation();
}
function setupMobileNavigation() {
  const menuButton = document.querySelector("#mobile-menu-button");
  const closeButton = document.querySelector("#mobile-menu-close");
  const backdrop = document.querySelector("#mobile-navigation-backdrop");
  const drawer = document.querySelector("#mobile-navigation-drawer");

  if (!menuButton || !closeButton || !backdrop || !drawer) {
    console.error("Mobile navigation elements not found.");
    return;
  }

  function openMenu() {
    drawer.classList.remove("-translate-x-full");
    backdrop.classList.remove("hidden");

    menuButton.setAttribute("aria-expanded", "true");
    document.body.classList.add("overflow-hidden");
  }

  function closeMenu() {
    drawer.classList.add("-translate-x-full");
    backdrop.classList.add("hidden");

    menuButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("overflow-hidden");
  }

  menuButton.addEventListener("click", openMenu);

  closeButton.addEventListener("click", closeMenu);

  backdrop.addEventListener("click", closeMenu);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}
