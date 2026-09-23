export function renderSettings() {
  const app = document.querySelector("#app");

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
                  AB
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
                      value="Abir"
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
                      value="abir@example.com"
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
                    value="Admin"
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
  const profileForm = document.querySelector("#profile-form");

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
        renderComingSoonSettings(
          content,
          "Notifications",
          "Manage how and when Flowboard notifies you.",
        );
      }

      if (selectedTab === "appearance") {
        renderComingSoonSettings(
          content,
          "Appearance",
          "Customize the look and feel of your workspace.",
        );
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

  profileForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#settings-name")?.value.trim();

    if (!name) return;

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

function renderProfileSettings(content) {
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
                value="Abir"
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
                value="abir@example.com"
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
              value="Admin"
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

    if (!name) return;

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
