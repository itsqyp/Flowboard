export function renderNavbar() {
  const navbar = document.querySelector("#navbar");

  if (!navbar) {
    console.error("Navbar mount point not found.");
    return;
  }

  navbar.innerHTML = `
        <header class="h-16 border-b bg-white">
            <div class="h-full px-4 sm:px-6 flex items-center justify-between">

                <!-- Logo -->
               <!-- Left side -->
<div class="flex items-center gap-2">

    <!-- Mobile menu button -->
    <button
        type="button"
        id="mobile-menu-button"
        class="inline-flex size-10 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors md:hidden"
        aria-label="Open navigation menu"
        aria-expanded="false"
        aria-controls="mobile-navigation"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="size-5"
        >
            <path d="M4 6h16"></path>
            <path d="M4 12h16"></path>
            <path d="M4 18h16"></path>
        </svg>
    </button>

    <!-- Logo -->
    <a
        href="/"
        class="flex items-center gap-2"
        aria-label="Flowboard home"
    >
        <div
            class="size-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold"
        >
            F
        </div>

        <span class="text-lg font-bold tracking-tight">
            Flowboard
        </span>
    </a>

</div>

                <!-- Right side -->
                <div class="flex items-center gap-2">

                    <!-- Search -->
                    <button
                        type="button"
                        class="size-10 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                        aria-label="Search"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            class="size-5"
                        >
                            <circle cx="11" cy="11" r="7"></circle>
                            <path d="m20 20-3.5-3.5"></path>
                        </svg>
                    </button>

                    <!-- Notifications -->
                    <button
                        type="button"
                        class="relative size-10 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                        aria-label="Notifications"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            class="size-5"
                        >
                            <circle cx="12" cy="12" r="9"></circle>
                            <path d="M12 8v4"></path>
                            <path d="M12 16h.01"></path>
                        </svg>

                        <span
                            class="absolute top-2 right-2 size-2 rounded-full bg-red-500"
                            aria-hidden="true"
                        ></span>
                    </button>

                    <!-- User -->
                   <!-- User Menu -->
<div class="relative">

    <button
        type="button"
        id="user-menu-button"
        class="ml-1 flex items-center gap-2 rounded-lg p-1.5 hover:bg-slate-100 transition-colors"
        aria-label="Open user menu"
        aria-expanded="false"
        aria-haspopup="true"
        aria-controls="user-menu"
    >
        <div
            class="size-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-sm font-bold"
        >
            A
        </div>

        <span class="hidden sm:block text-sm font-semibold text-slate-700">
            Abir
        </span>

        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            class="hidden sm:block size-4 text-slate-400 transition-transform duration-200"
            id="user-menu-chevron"
        >
            <path d="m6 9 6 6 6-6"></path>
        </svg>
    </button>

    <!-- Dropdown -->
    <div
        id="user-menu"
        class="absolute right-0 top-full z-50 mt-2 hidden w-64 overflow-hidden rounded-xl border bg-white shadow-lg"
        role="menu"
    >

        <!-- User Info -->
        <div class="border-b px-4 py-3">

            <p class="text-sm font-semibold text-slate-900">
                Abir
            </p>

            <p class="mt-0.5 truncate text-xs text-slate-500">
                abir@example.com
            </p>

        </div>

        <!-- Menu Items -->
        <div class="p-1.5">

            <a
                href="#"
                class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-100"
                role="menuitem"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="size-4.5 text-slate-500"
                >
                    <circle cx="12" cy="8" r="4"></circle>
                    <path d="M4 21a8 8 0 0 1 16 0"></path>
                </svg>

                Profile
            </a>

            <a
                href="#"
                class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-100"
                role="menuitem"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="size-4.5 text-slate-500"
                >
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.7 1.7-.06-.06A1.7 1.7 0 0 0 16.16 19a1.7 1.7 0 0 0-1.06 1.55V21h-2.4v-.45A1.7 1.7 0 0 0 11.64 19a1.7 1.7 0 0 0-1.88.34l-.06.06-1.7-1.7.06-.06A1.7 1.7 0 0 0 8.4 15a1.7 1.7 0 0 0-1.55-1.06H6v-2.4h.45A1.7 1.7 0 0 0 8.4 10a1.7 1.7 0 0 0-.34-1.88L8 8.06l1.7-1.7.06.06A1.7 1.7 0 0 0 11.64 6 1.7 1.7 0 0 0 12.7 4.45V4h2.4v.45A1.7 1.7 0 0 0 16.16 6a1.7 1.7 0 0 0 1.88-.34l.06-.06 1.7 1.7-.06.06A1.7 1.7 0 0 0 19.4 10a1.7 1.7 0 0 0 1.55 1.06H21v2.4h-.45A1.7 1.7 0 0 0 19.4 15Z"></path>
                </svg>

                Settings
            </a>

            <button
                type="button"
                class="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-100"
                role="menuitem"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="size-4.5 text-slate-500"
                >
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="M12 20v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="M20 12h2"></path>
                    <path d="m6.34 17.66-1.41 1.41"></path>
                    <path d="m19.07 4.93-1.41 1.41"></path>
                </svg>

                Theme
            </button>

        </div>

        <!-- Logout -->
        <div class="border-t p-1.5">

            <button
                type="button"
                id="logout-button"
                class="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-600 hover:bg-red-50"
                role="menuitem"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="size-4.5"
                >
                    <path d="M10 17l5-5-5-5"></path>
                    <path d="M15 12H3"></path>
                    <path d="M21 19V5a2 2 0 0 0-2-2h-6"></path>
                </svg>

                Log out
            </button>

        </div>

    </div>

</div>

                </div>
            </div>
        </header>
    `;
  setupUserMenu();
}

function setupUserMenu() {
  const button = document.querySelector("#user-menu-button");
  const menu = document.querySelector("#user-menu");
  const chevron = document.querySelector("#user-menu-chevron");

  if (!button || !menu || !chevron) {
    console.error("User menu elements not found.");
    return;
  }

  function openMenu() {
    menu.classList.remove("hidden");
    button.setAttribute("aria-expanded", "true");

    chevron.classList.add("rotate-180");
  }

  function closeMenu() {
    menu.classList.add("hidden");
    button.setAttribute("aria-expanded", "false");

    chevron.classList.remove("rotate-180");
  }

  function toggleMenu() {
    const isOpen = button.getAttribute("aria-expanded") === "true";

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  button.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleMenu();
  });

  document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !button.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      button.focus();
    }
  });
}
