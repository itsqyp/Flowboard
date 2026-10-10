import { getAppearance, saveAppearance, applyTheme } from "../theme.js";
import { setupNotifications } from "./notifications.js";
import { renderGlobalSearch } from "./global-search.js";
let profileSyncInitialized = false;

const PROFILE_STORAGE_KEY = "flowboard-profile";

const DEFAULT_PROFILE = {
  name: "username",
  email: "username@address",
  role: "Admin",
};

function getProfile() {
  const storedProfile = localStorage.getItem(PROFILE_STORAGE_KEY);

  if (!storedProfile) {
    return DEFAULT_PROFILE;
  }

  try {
    return {
      ...DEFAULT_PROFILE,
      ...JSON.parse(storedProfile),
    };
  } catch {
    return DEFAULT_PROFILE;
  }
}

function getInitials(name) {
  return name
    .trim()
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function renderNavbar() {
  const profile = getProfile();
  const initials = getInitials(profile.name);
  const navbar = document.querySelector("#navbar");

  if (!navbar) {
    console.error("Navbar mount point not found.");
    return;
  }

  navbar.innerHTML = `
    <header class="h-16 border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div class="h-full px-4 sm:px-6 flex items-center justify-between">

        <!-- Left Side -->
        <div class="flex items-center gap-2">

          <!-- Mobile Menu Button -->
          <button
            type="button"
            id="mobile-menu-button"
            class="inline-flex size-10 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white md:hidden"
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
              aria-hidden="true"
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

            <span class="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              Flowboard
            </span>
          </a>

        </div>

        <!-- Right Side -->
        <div class="flex items-center gap-2">

          <!-- Search -->
          <button
            type="button"
            id="global-search-button"
            class="size-10 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
            aria-label="Search Flowboard"
              aria-expanded="false"
  aria-controls="global-search-modal"
  title="Search (Ctrl+K)"

          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-5"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7"></circle>
              <path d="m20 20-3.5-3.5"></path>
            </svg>
          </button>

          <!-- Theme Toggle -->
          <button
            type="button"
            id="theme-toggle-btn"
            class="size-10 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
            aria-label="Switch to dark mode"
            title="Switch to dark mode"
          >
            <!-- Moon Icon: Light Mode -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-5 dark:hidden"
              aria-hidden="true"
            >
              <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.463.402.807a6.5 6.5 0 0 0 8.268 8.268c.344-.215.829-.003.803.397Z"></path>
            </svg>

            <!-- Sun Icon: Dark Mode -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="hidden size-5 dark:block"
              aria-hidden="true"
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
          </button>

          <!-- Notifications -->
          <!-- Notifications -->
<div class="relative">

  <button
    type="button"
    id="notifications-button"
    class="relative size-10 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
    aria-label="Notifications"
    aria-expanded="false"
    aria-controls="notifications-panel"
  >
    <!-- Bell Icon -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      class="size-5"
      aria-hidden="true"
    >
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"></path>
      <path d="M10 21h4"></path>
    </svg>

    <!-- Unread Notification Badge -->
    <span
      id="notifications-badge"
      class="absolute -right-0.5 -top-0.5 flex min-w-4 h-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white"
      aria-hidden="true"
    >
      2
    </span>
  </button>

  <!-- Notifications Dropdown -->
  <div
    id="notifications-panel"
    class="absolute right-0 top-full z-50 mt-2 hidden w-[min(24rem,calc(100vw-2rem))] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900"
    role="region"
    aria-label="Notifications"
  >
    <div id="notifications-container"></div>
  </div>

</div>

          <!-- User Menu -->
          <div class="relative">

            <!-- User Menu Button -->
            <button
              type="button"
              id="user-menu-button"
              class="ml-1 flex items-center gap-2 rounded-lg p-1.5 hover:bg-slate-100 transition-colors dark:hover:bg-slate-800"
              aria-label="Open user menu"
              aria-expanded="false"
              aria-haspopup="true"
              aria-controls="user-menu"
            >
              <div
                class="size-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-sm font-bold dark:bg-indigo-500/20 dark:text-indigo-300"
              >
                ${initials}
              </div>

              <span class="hidden sm:block text-sm font-semibold text-slate-700 dark:text-slate-200">
                ${profile.name}
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="hidden sm:block size-4 text-slate-400 transition-transform duration-200 dark:text-slate-500"
                id="user-menu-chevron"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>

            <!-- Dropdown -->
            <div
              id="user-menu"
              class="absolute right-0 top-full z-50 mt-2 hidden w-64 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900"
              role="menu"
            >

              <!-- User Information -->
              <div class="border-b border-slate-200 px-4 py-3 dark:border-slate-700">

                <p class="text-sm font-semibold text-slate-900 dark:text-white">
                  ${profile.name}
                </p>

                <p class="mt-0.5 truncate text-xs text-slate-500 dark:text-slate-400">
                  ${profile.email}
                </p>

              </div>

              <!-- Menu Items -->
              <div class="p-1.5">

                <!-- Profile -->
                <a
                  href="#"
                  class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                  role="menuitem"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="size-4.5 text-slate-500 dark:text-slate-400"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="8" r="4"></circle>
                    <path d="M4 21a8 8 0 0 1 16 0"></path>
                  </svg>

                  Profile
                </a>

                <!-- Settings -->
                <a
                  href="#"
                  class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                  role="menuitem"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="size-4.5 text-slate-500 dark:text-slate-400"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.7 1.7-.06-.06A1.7 1.7 0 0 0 16.16 19a1.7 1.7 0 0 0-1.06 1.55V21h-2.4v-.45A1.7 1.7 0 0 0 11.64 19a1.7 1.7 0 0 0-1.88.34l-.06.06-1.7-1.7.06-.06A1.7 1.7 0 0 0 8.4 15a1.7 1.7 0 0 0-1.55-1.06H6v-2.4h.45A1.7 1.7 0 0 0 8.4 10a1.7 1.7 0 0 0-.34-1.88L8 8.06l1.7-1.7.06.06A1.7 1.7 0 0 0 11.64 6 1.7 1.7 0 0 0 12.7 4.45V4h2.4v.45A1.7 1.7 0 0 0 16.16 6a1.7 1.7 0 0 0 1.88-.34l-.06-.06 1.7 1.7-.06.06A1.7 1.7 0 0 0 19.4 10a1.7 1.7 0 0 0 1.55 1.06H21v2.4h-.45A1.7 1.7 0 0 0 19.4 15Z"></path>
                  </svg>

                  Settings
                </a>

              </div>

              <!-- Logout -->
              <div class="border-t border-slate-200 p-1.5 dark:border-slate-700">

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
                    aria-hidden="true"
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
  setupThemeToggle();
  setupNotifications();
  renderGlobalSearch();

  if (!profileSyncInitialized) {
    window.addEventListener("flowboard:profile-updated", () => {
      renderNavbar();
    });

    profileSyncInitialized = true;
  }
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

function setupThemeToggle() {
  const themeToggleButton = document.querySelector("#theme-toggle-btn");

  if (!themeToggleButton) {
    console.error("Theme toggle button not found.");
    return;
  }

  function updateThemeButton() {
    const isDark = document.documentElement.classList.contains("dark");

    const label = isDark ? "Switch to light mode" : "Switch to dark mode";

    themeToggleButton.setAttribute("aria-label", label);
    themeToggleButton.setAttribute("title", label);
  }

  updateThemeButton();

  themeToggleButton.addEventListener("click", () => {
    const appearance = getAppearance();
    const isDark = document.documentElement.classList.contains("dark");
    const nextTheme = isDark ? "light" : "dark";

    saveAppearance({
      ...appearance,
      theme: nextTheme,
    });

    applyTheme(nextTheme);
    updateThemeButton();
  });
}
