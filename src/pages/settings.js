let profileSyncInitialized = false;
const PROFILE_STORAGE_KEY = "flowboard-profile";

const DEFAULT_PROFILE = {
  name: "Abir",
  email: "abir@example.com",
  role: "Admin",
};

const NOTIFICATION_STORAGE_KEY = "flowboard-notifications";

const DEFAULT_NOTIFICATIONS = {
  taskAssignments: true,
  taskUpdates: true,
  projectUpdates: true,
  mentions: true,
  comments: true,
  dueDateReminders: true,
};

const APPEARANCE_STORAGE_KEY = "flowboard-appearance";

const DEFAULT_APPEARANCE = {
  theme: "light",
};

function getNotifications() {
  const storedNotifications = localStorage.getItem(NOTIFICATION_STORAGE_KEY);

  if (!storedNotifications) {
    return DEFAULT_NOTIFICATIONS;
  }

  try {
    return {
      ...DEFAULT_NOTIFICATIONS,
      ...JSON.parse(storedNotifications),
    };
  } catch {
    return DEFAULT_NOTIFICATIONS;
  }
}

function saveNotifications(notifications) {
  localStorage.setItem(NOTIFICATION_STORAGE_KEY, JSON.stringify(notifications));
}

function renderNotificationsSettings(content) {
  const notifications = getNotifications();

  content.innerHTML = `
    <section class="rounded-xl border border-slate-200 bg-white shadow-sm">

      <div class="border-b border-slate-200 px-6 py-5">
        <h2 class="text-base font-semibold text-slate-900">
          Notifications
        </h2>

        <p class="mt-1 text-sm text-slate-500">
          Choose how you want to receive notifications.
        </p>
      </div>

      <form id="notifications-form">

        <!-- Email Notifications -->
        <div class="border-b border-slate-200 p-6">

          <h3 class="text-sm font-semibold text-slate-900">
            Email notifications
          </h3>

          <p class="mt-1 text-sm text-slate-500">
            Receive important updates through email.
          </p>

          <div class="mt-5 space-y-4">

            <label class="flex cursor-pointer items-start justify-between gap-4">
              <div>
                <p class="text-sm font-medium text-slate-900">
                  Task assignments
                </p>

                <p class="mt-0.5 text-xs text-slate-500">
                  Get notified when a task is assigned to you.
                </p>
              </div>

              <input
                type="checkbox"
                name="taskAssignments"
                ${notifications.taskAssignments ? "checked" : ""}
                class="mt-0.5 size-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
              />
            </label>

            <label class="flex cursor-pointer items-start justify-between gap-4">
              <div>
                <p class="text-sm font-medium text-slate-900">
                  Task updates
                </p>

                <p class="mt-0.5 text-xs text-slate-500">
                  Receive updates when tasks assigned to you change.
                </p>
              </div>

              <input
                type="checkbox"
                name="taskUpdates"
                ${notifications.taskUpdates ? "checked" : ""}
                class="mt-0.5 size-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
              />
            </label>

            <label class="flex cursor-pointer items-start justify-between gap-4">
              <div>
                <p class="text-sm font-medium text-slate-900">
                  Project updates
                </p>

                <p class="mt-0.5 text-xs text-slate-500">
                  Receive important updates about your projects.
                </p>
              </div>

              <input
                type="checkbox"
                name="projectUpdates"
                ${notifications.projectUpdates ? "checked" : ""}
                class="mt-0.5 size-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
              />
            </label>

          </div>
        </div>

        <!-- In-App Notifications -->
        <div class="p-6">

          <h3 class="text-sm font-semibold text-slate-900">
            In-app notifications
          </h3>

          <p class="mt-1 text-sm text-slate-500">
            Control which notifications appear inside Flowboard.
          </p>

          <div class="mt-5 space-y-4">

            <label class="flex cursor-pointer items-start justify-between gap-4">
              <div>
                <p class="text-sm font-medium text-slate-900">
                  Mentions
                </p>

                <p class="mt-0.5 text-xs text-slate-500">
                  Get notified when someone mentions you.
                </p>
              </div>

              <input
                type="checkbox"
                name="mentions"
                ${notifications.mentions ? "checked" : ""}
                class="mt-0.5 size-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
              />
            </label>

            <label class="flex cursor-pointer items-start justify-between gap-4">
              <div>
                <p class="text-sm font-medium text-slate-900">
                  Comments
                </p>

                <p class="mt-0.5 text-xs text-slate-500">
                  Get notified when someone comments on your work.
                </p>
              </div>

              <input
                type="checkbox"
                name="comments"
                ${notifications.comments ? "checked" : ""}
                class="mt-0.5 size-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
              />
            </label>

            <label class="flex cursor-pointer items-start justify-between gap-4">
              <div>
                <p class="text-sm font-medium text-slate-900">
                  Due-date reminders
                </p>

                <p class="mt-0.5 text-xs text-slate-500">
                  Receive reminders about upcoming deadlines.
                </p>
              </div>

              <input
                type="checkbox"
                name="dueDateReminders"
                ${notifications.dueDateReminders ? "checked" : ""}
                class="mt-0.5 size-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
              />
            </label>

          </div>
        </div>

        <!-- Save -->
        <div class="flex justify-end border-t border-slate-200 px-6 py-5">

          <button
            type="submit"
            class="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Save preferences
          </button>

        </div>

      </form>

    </section>
  `;

  setupNotificationsForm();
}

function setupNotificationsForm() {
  const form = document.querySelector("#notifications-form");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const notifications = {
      taskAssignments: formData.get("taskAssignments") === "on",
      taskUpdates: formData.get("taskUpdates") === "on",
      projectUpdates: formData.get("projectUpdates") === "on",
      mentions: formData.get("mentions") === "on",
      comments: formData.get("comments") === "on",
      dueDateReminders: formData.get("dueDateReminders") === "on",
    };

    saveNotifications(notifications);

    window.dispatchEvent(new CustomEvent("flowboard:notifications-updated"));

    window.dispatchEvent(
      new CustomEvent("flowboard:toast", {
        detail: {
          message: "Notification preferences saved.",
          type: "success",
        },
      }),
    );
  });
}

function getAppearance() {
  const storedAppearance = localStorage.getItem(APPEARANCE_STORAGE_KEY);

  if (!storedAppearance) {
    return DEFAULT_APPEARANCE;
  }

  try {
    return {
      ...DEFAULT_APPEARANCE,
      ...JSON.parse(storedAppearance),
    };
  } catch {
    return DEFAULT_APPEARANCE;
  }
}

function saveAppearance(appearance) {
  localStorage.setItem(APPEARANCE_STORAGE_KEY, JSON.stringify(appearance));
}

function renderAppearanceSettings(content) {
  const appearance = getAppearance();

  content.innerHTML = `
    <section class="rounded-xl border border-slate-200 bg-white shadow-sm">

      <!-- Header -->
      <div class="border-b border-slate-200 px-6 py-5">
        <h2 class="text-base font-semibold text-slate-900">
          Appearance
        </h2>

        <p class="mt-1 text-sm text-slate-500">
          Customize the look and feel of your workspace.
        </p>
      </div>

      <!-- Theme -->
      <div class="p-6">

        <div>
          <h3 class="text-sm font-semibold text-slate-900">
            Theme
          </h3>

          <p class="mt-1 text-sm text-slate-500">
            Choose how Flowboard should appear.
          </p>
        </div>

        <div class="mt-5 grid gap-4 sm:grid-cols-3">

          <!-- Light -->
          <label
            class="cursor-pointer rounded-xl border p-4 transition
              ${
                appearance.theme === "light"
                  ? "border-indigo-500 bg-indigo-50"
                  : "border-slate-200 hover:border-slate-300"
              }"
          >
            <input
              type="radio"
              name="theme"
              value="light"
              ${appearance.theme === "light" ? "checked" : ""}
              class="sr-only"
            />

            <div class="flex items-center gap-3">

              <div class="flex size-10 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-slate-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-5 text-slate-700"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-6.364-.386 1.591-1.591M3 12h2.25m.386-6.364 1.591 1.591M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              </div>

              <div>
                <p class="text-sm font-semibold text-slate-900">
                  Light
                </p>

                <p class="text-xs text-slate-500">
                  Always use light mode
                </p>
              </div>

            </div>
          </label>

          <!-- Dark -->
          <label
            class="cursor-pointer rounded-xl border p-4 transition
              ${
                appearance.theme === "dark"
                  ? "border-indigo-500 bg-indigo-50"
                  : "border-slate-200 hover:border-slate-300"
              }"
          >
            <input
              type="radio"
              name="theme"
              value="dark"
              ${appearance.theme === "dark" ? "checked" : ""}
              class="sr-only"
            />

            <div class="flex items-center gap-3">

              <div class="flex size-10 items-center justify-center rounded-lg bg-slate-900 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-5 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0 1 18 15.75 9.75 9.75 0 0 1 8.25 6c0-1.34.27-2.616.752-3.752A9.753 9.753 0 1 0 21.752 15.002Z"
                  />
                </svg>
              </div>

              <div>
                <p class="text-sm font-semibold text-slate-900">
                  Dark
                </p>

                <p class="text-xs text-slate-500">
                  Always use dark mode
                </p>
              </div>

            </div>
          </label>

          <!-- System -->
          <label
            class="cursor-pointer rounded-xl border p-4 transition
              ${
                appearance.theme === "system"
                  ? "border-indigo-500 bg-indigo-50"
                  : "border-slate-200 hover:border-slate-300"
              }"
          >
            <input
              type="radio"
              name="theme"
              value="system"
              ${appearance.theme === "system" ? "checked" : ""}
              class="sr-only"
            />

            <div class="flex items-center gap-3">

              <div class="flex size-10 items-center justify-center rounded-lg bg-slate-100 shadow-sm ring-1 ring-slate-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-5 text-slate-700"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.75 17.25h4.5m-7.5 3h10.5M6 3.75h12A1.5 1.5 0 0 1 19.5 5.25v7.5a1.5 1.5 0 0 1-1.5 1.5H6a1.5 1.5 0 0 1-1.5-1.5v-7.5A1.5 1.5 0 0 1 6 3.75Z"
                  />
                </svg>
              </div>

              <div>
                <p class="text-sm font-semibold text-slate-900">
                  System
                </p>

                <p class="text-xs text-slate-500">
                  Follow system preference
                </p>
              </div>

            </div>
          </label>

        </div>

      </div>

    </section>
  `;

  setupAppearanceForm();
}

function setupAppearanceForm() {
  const themeInputs = document.querySelectorAll('input[name="theme"]');

  themeInputs.forEach((input) => {
    input.addEventListener("change", () => {
      const theme = input.value;

      saveAppearance({
        theme,
      });

      applyTheme(theme);

      renderAppearanceSettings(document.querySelector("#settings-content"));

      window.dispatchEvent(new CustomEvent("flowboard:appearance-updated"));

      window.dispatchEvent(
        new CustomEvent("flowboard:toast", {
          detail: {
            message: "Appearance updated.",
            type: "success",
          },
        }),
      );
    });
  });
}

function applyTheme(theme) {
  const root = document.documentElement;

  if (theme === "dark") {
    root.classList.add("dark");
    return;
  }

  if (theme === "light") {
    root.classList.remove("dark");
    return;
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  root.classList.toggle("dark", prefersDark);
}

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

function saveProfile(profile) {
  localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
}

export function renderSettings() {
  const app = document.querySelector("#app");
  const profile = getProfile();
  if (!app) return;

  app.innerHTML = `
    <div class="mx-auto max-w-6xl space-y-6">

      <!-- Page Header -->
      <div>
        <h1 class="text-2xl font-bold tracking-tight text-slate-900">
          Settings
        </h1>

        <p class="mt-1 text-sm text-slate-500">
          Manage your account and workspace preferences.
        </p>
      </div>

      <!-- Settings Layout -->
      <div class="grid gap-6 lg:grid-cols-[220px_1fr]">

        <!-- Settings Navigation -->
        <aside>
          <nav class="space-y-1" aria-label="Settings navigation">

            <button
              type="button"
              data-settings-tab="profile"
              class="settings-tab flex w-full items-center gap-3 rounded-lg bg-indigo-50 px-3 py-2.5 text-left text-sm font-semibold text-indigo-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a8.25 8.25 0 0 1 15 0"
                />
              </svg>

              Profile
            </button>

            <button
              type="button"
              data-settings-tab="notifications"
              class="settings-tab flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 1-5.714 0m9.55-1.996A5.25 5.25 0 0 0 17.25 11V9a5.25 5.25 0 1 0-10.5 0v2a5.25 5.25 0 0 0-1.443 4.086c.02.3.263.532.563.532h12.866c.3 0 .543-.232.563-.532ZM9.75 20.25h4.5"
                />
              </svg>

              Notifications
            </button>

            <button
              type="button"
              data-settings-tab="appearance"
              class="settings-tab flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-6.364-.386 1.591-1.591M3 12h2.25m.386-6.364 1.591 1.591"
                />
              </svg>

              Appearance
            </button>

            <button
              type="button"
              data-settings-tab="workspace"
              class="settings-tab flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12.75h19.5m-18 0v6.75a.75.75 0 0 0 .75.75h15a.75.75 0 0 0 .75-.75v-6.75m-17.25 0V6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75"
                />
              </svg>

              Workspace
            </button>

          </nav>
        </aside>

        <!-- Settings Content -->
        <div id="settings-content">

          <!-- Profile -->
          <section class="rounded-xl border border-slate-200 bg-white shadow-sm">

            <div class="border-b border-slate-200 px-6 py-5">
              <h2 class="text-base font-semibold text-slate-900">
                Profile
              </h2>

              <p class="mt-1 text-sm text-slate-500">
                Update your personal information and account details.
              </p>
            </div>

            <div class="space-y-6 p-6">

              <!-- Avatar -->
              <div class="flex items-center gap-4">

                <div
                  class="flex size-16 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-lg font-semibold text-indigo-700"
                >
                   ${getInitials(profile.name)}
                </div>

                <div>
                  <button
                    type="button"
                    class="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    Change avatar
                  </button>

                  <p class="mt-1 text-xs text-slate-500">
                    JPG, PNG or GIF. Maximum 2MB.
                  </p>
                </div>

              </div>

              <!-- Form -->
              <form id="profile-form" class="space-y-5">

                <div class="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label
                      for="settings-name"
                      class="mb-1.5 block text-sm font-medium text-slate-700"
                    >
                      Full name
                    </label>

                    <input
                      id="settings-name"
                      type="text"
                      value="${profile.name}"
                      class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>

                  <div>
                    <label
                      for="settings-email"
                      class="mb-1.5 block text-sm font-medium text-slate-700"
                    >
                      Email address
                    </label>

                    <input
                      id="settings-email"
                      type="email"
                     value="${profile.email}"
                      class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>

                </div>

                <div>
                  <label
                    for="settings-role"
                    class="mb-1.5 block text-sm font-medium text-slate-700"
                  >
                    Role
                  </label>

                  <input
                    id="settings-role"
                    type="text"
                    value="${profile.role}"
                    class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>

                <div class="flex justify-end border-t border-slate-200 pt-5">

                  <button
                    type="submit"
                    class="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save changes
                  </button>

                </div>

              </form>

            </div>

          </section>

        </div>

      </div>

    </div>
  `;

  setupSettings();
}

function setupSettings() {
  const tabs = document.querySelectorAll(".settings-tab");
  const content = document.querySelector("#settings-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((item) => {
        item.classList.remove(
          "bg-indigo-50",
          "font-semibold",
          "text-indigo-700",
        );

        item.classList.add("font-medium", "text-slate-600");
      });

      tab.classList.add("bg-indigo-50", "font-semibold", "text-indigo-700");

      tab.classList.remove("font-medium", "text-slate-600");

      const selectedTab = tab.dataset.settingsTab;

      if (selectedTab === "profile") {
        renderProfileSettings(content);
      }

      if (selectedTab === "notifications") {
        renderNotificationsSettings(content);
      }

      if (selectedTab === "appearance") {
        renderAppearanceSettings(content);
      }

      if (selectedTab === "workspace") {
        renderComingSoonSettings(
          content,
          "Workspace",
          "Manage your workspace preferences and configuration.",
        );
      }
    });
  });

  setupProfileForm();
  if (!profileSyncInitialized) {
    window.addEventListener("flowboard:profile-updated", () => {
      const activeTab = document.querySelector(
        '[data-settings-tab="profile"].bg-indigo-50',
      );

      if (!activeTab) return;

      const content = document.querySelector("#settings-content");

      if (!content) return;

      renderProfileSettings(content);
    });

    profileSyncInitialized = true;
  }
}

function renderProfileSettings(content) {
  const profile = getProfile();
  content.innerHTML = `
    <section class="rounded-xl border border-slate-200 bg-white shadow-sm">

      <div class="border-b border-slate-200 px-6 py-5">
        <h2 class="text-base font-semibold text-slate-900">
          Profile
        </h2>

        <p class="mt-1 text-sm text-slate-500">
          Update your personal information and account details.
        </p>
      </div>

      <div class="p-6">

      <!-- Avatar -->
  <div class="flex items-center gap-4">

    <div
      class="flex size-16 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-lg font-semibold text-indigo-700"
    >
      ${getInitials(profile.name)}
    </div>

    <div>
      <button
        type="button"
        class="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
      >
        Change avatar
      </button>

      <p class="mt-1 text-xs text-slate-500">
        JPG, PNG or GIF. Maximum 2MB.
      </p>
    </div>

  </div>

        <form id="profile-form" class="space-y-5">

          <div class="grid gap-5 sm:grid-cols-2">

            <div>
              <label
                for="settings-name"
                class="mb-1.5 block text-sm font-medium text-slate-700"
              >
                Full name
              </label>

              <input
                id="settings-name"
                type="text"
                value="${profile.name}"
                class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            <div>
              <label
                for="settings-email"
                class="mb-1.5 block text-sm font-medium text-slate-700"
              >
                Email address
              </label>

              <input
                id="settings-email"
                type="email"
                value="${profile.email}"
                class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

          </div>

          <div>
            <label
              for="settings-role"
              class="mb-1.5 block text-sm font-medium text-slate-700"
            >
              Role
            </label>

            <input
              id="settings-role"
              type="text"
              value="${profile.role}"
              class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>

          <div class="flex justify-end border-t border-slate-200 pt-5">

            <button
              type="submit"
              class="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Save changes
            </button>

          </div>

        </form>

      </div>

    </section>
  `;

  setupProfileForm();
}

function setupProfileForm() {
  const form = document.querySelector("#profile-form");

  form?.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#settings-name")?.value.trim();
    const email = document.querySelector("#settings-email")?.value.trim();
    const role = document.querySelector("#settings-role")?.value.trim();

    if (!name || !email || !role) {
      window.dispatchEvent(
        new CustomEvent("flowboard:toast", {
          detail: {
            message: "Please fill in all profile fields.",
            type: "error",
          },
        }),
      );

      return;
    }
    // console.log("Saving profile:", {
    //   name,
    //   email,
    //   role,
    // });

    saveProfile({
      name,
      email,
      role,
    });
    window.dispatchEvent(new CustomEvent("flowboard:profile-updated"));

    window.dispatchEvent(
      new CustomEvent("flowboard:toast", {
        detail: {
          message: "Profile updated successfully.",
          type: "success",
        },
      }),
    );
  });
}

function renderComingSoonSettings(content, title, description) {
  content.innerHTML = `
    <section class="rounded-xl border border-slate-200 bg-white shadow-sm">

      <div class="border-b border-slate-200 px-6 py-5">
        <h2 class="text-base font-semibold text-slate-900">
          ${title}
        </h2>

        <p class="mt-1 text-sm text-slate-500">
          ${description}
        </p>
      </div>

      <div class="flex min-h-64 items-center justify-center p-6">

        <div class="text-center">

          <div class="mx-auto flex size-12 items-center justify-center rounded-full bg-slate-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 text-slate-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>

          <h3 class="mt-4 text-sm font-semibold text-slate-900">
            Coming soon
          </h3>

          <p class="mx-auto mt-1 max-w-sm text-sm text-slate-500">
            This settings section will be implemented in a future step.
          </p>

        </div>

      </div>

    </section>
  `;
}
