let footerModalsInitialized = false;

export function renderFooter() {
  const footer = document.querySelector("#footer");

  if (!footer) {
    console.error("Footer mount point not found.");
    return;
  }

  footer.innerHTML = `
    <footer class="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div class="px-6 py-5">
        <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

          <!-- Copyright -->
          <p class="text-sm text-slate-500 dark:text-slate-400">
            © 2026 Flowboard. All rights reserved. Made By
            <span class="animate-abir">Abir Bro</span>.
          </p>

          <!-- Footer Links -->
          <nav class="flex items-center gap-5" aria-label="Footer navigation">

            <button
              type="button"
              data-footer-modal="help"
              class="text-sm text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              Help
            </button>

            <button
              type="button"
              data-footer-modal="privacy"
              class="text-sm text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              Privacy
            </button>

            <button
              type="button"
              data-footer-modal="terms"
              class="text-sm text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            >
              Terms
            </button>

          </nav>
        </div>
      </div>
    </footer>

    <!-- Footer Modals -->
    <div
      id="footer-modal-overlay"
      class="fixed inset-0 z-[100] hidden items-center justify-center overflow-y-auto bg-slate-950/50 p-4 backdrop-blur-sm"
      aria-hidden="true"
    >
      <section
        id="footer-modal"
        class="my-auto w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900"
        role="dialog"
        aria-modal="true"
        aria-labelledby="footer-modal-title"
        aria-describedby="footer-modal-description"
      >

        <!-- Modal Header -->
        <div class="flex items-center justify-between border-b border-slate-200 px-6 py-4 dark:border-slate-700">

          <h2
            id="footer-modal-title"
            class="text-lg font-bold text-slate-900 dark:text-white"
          >
            Help
          </h2>

          <button
            type="button"
            id="footer-modal-close"
            class="flex size-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
            aria-label="Close modal"
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
              <path d="m18 6-12 12"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>

        </div>

        <!-- Modal Content -->
        <div
          id="footer-modal-description"
          class="max-h-[65vh] overflow-y-auto px-6 py-6"
        ></div>

        <!-- Modal Footer -->
        <div class="flex justify-end border-t border-slate-200 px-6 py-4 dark:border-slate-700">

          <button
            type="button"
            id="footer-modal-done"
            class="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
          >
            Done
          </button>

        </div>

      </section>
    </div>
  `;

  setupFooterModals();
}

function setupFooterModals() {
  if (footerModalsInitialized) {
    return;
  }

  footerModalsInitialized = true;

  const overlay = document.querySelector("#footer-modal-overlay");
  const modalTitle = document.querySelector("#footer-modal-title");
  const modalContent = document.querySelector("#footer-modal-description");
  const closeButton = document.querySelector("#footer-modal-close");
  const doneButton = document.querySelector("#footer-modal-done");

  if (!overlay || !modalTitle || !modalContent || !closeButton || !doneButton) {
    console.error("Footer modal elements not found.");
    return;
  }

  let previouslyFocusedElement = null;

  const modalContentMap = {
    help: {
      title: "Help & Contact",
      content: `
        <div class="space-y-5">

          <div>
            <p class="text-sm leading-6 text-slate-600 dark:text-slate-300">
              Need help with Flowboard or have a suggestion? Feel free to reach out through any of the following channels.
            </p>
          </div>

          <!-- GitHub -->
          <a
            href="https://github.com/itsqyp"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition-colors hover:border-indigo-300 hover:bg-slate-50 dark:border-slate-700 dark:hover:border-indigo-500 dark:hover:bg-slate-800"
          >
            <div class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
                aria-hidden="true"
              >
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.13c-3.1.67-3.76-1.31-3.76-1.31-.51-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.77 2.09 3.2 1.6.1-.73.39-1.23.7-1.51-2.48-.28-5.08-1.24-5.08-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.56 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.3-2.6 5.25-5.09 5.53.4.35.75 1.03.75 2.08v3.1c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"/>
              </svg>
            </div>

            <div class="min-w-0 flex-1">
              <p class="text-sm font-semibold text-slate-900 dark:text-white">
                GitHub
              </p>
              <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
                github.com/itsqyp
              </p>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-4 shrink-0 text-slate-400 transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
              aria-hidden="true"
            >
              <path d="M7 17 17 7"></path>
              <path d="M7 7h10v10"></path>
            </svg>
          </a>

          <!-- Facebook -->
          <a
            href="https://www.facebook.com/alan.abir.7/"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition-colors hover:border-indigo-300 hover:bg-slate-50 dark:border-slate-700 dark:hover:border-indigo-500 dark:hover:bg-slate-800"
          >
            <div class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
                aria-hidden="true"
              >
                <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.4c0-3.03 1.79-4.71 4.54-4.71 1.31 0 2.69.24 2.69.24v2.98H15.85c-1.49 0-1.96.93-1.96 1.88v2.28h3.34l-.53 3.49h-2.81V24C19.61 23.1 24 18.1 24 12.07Z"/>
              </svg>
            </div>

            <div class="min-w-0 flex-1">
              <p class="text-sm font-semibold text-slate-900 dark:text-white">
                Facebook
              </p>
              <p class="mt-1 break-all text-sm text-slate-500 dark:text-slate-400">
                facebook.com/alan.abir.7
              </p>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-4 shrink-0 text-slate-400 transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
              aria-hidden="true"
            >
              <path d="M7 17 17 7"></path>
              <path d="M7 7h10v10"></path>
            </svg>
          </a>

          <!-- Email -->
          <a
            href="mailto:abirebnaanowar@gmail.com"
            class="group flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition-colors hover:border-indigo-300 hover:bg-slate-50 dark:border-slate-700 dark:hover:border-indigo-500 dark:hover:bg-slate-800"
          >
            <div class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                class="size-6"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                <path d="m3 7 9 6 9-6"></path>
              </svg>
            </div>

            <div class="min-w-0 flex-1">
              <p class="text-sm font-semibold text-slate-900 dark:text-white">
                Email
              </p>
              <p class="mt-1 break-all text-sm text-slate-500 dark:text-slate-400">
                abirebnaanowar@gmail.com
              </p>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              class="size-4 shrink-0 text-slate-400 transition-colors group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
              aria-hidden="true"
            >
              <path d="M7 17 17 7"></path>
              <path d="M7 7h10v10"></path>
            </svg>
          </a>

        </div>
      `,
    },

    privacy: {
      title: "Privacy Policy",
      content: `
        <div class="space-y-5 text-sm leading-6 text-slate-600 dark:text-slate-300">

          <div>
            <h3 class="font-semibold text-slate-900 dark:text-white">
              1. Information and Storage
            </h3>
            <p class="mt-1">
              Flowboard stores application data, including projects, tasks, team members, and preferences, in your browser's local storage.
            </p>
          </div>

          <div>
            <h3 class="font-semibold text-slate-900 dark:text-white">
              2. Local Data
            </h3>
            <p class="mt-1">
              This frontend demonstration does not require a Flowboard account or send your workspace data to a Flowboard backend. Data saved in your browser may be lost if you clear your site data or use a different browser or device.
            </p>
          </div>

          <div>
            <h3 class="font-semibold text-slate-900 dark:text-white">
              3. External Links
            </h3>
            <p class="mt-1">
              The Help section links to third-party services such as GitHub, Facebook, and your email application. Those services have their own privacy policies and practices.
            </p>
          </div>

          <div>
            <h3 class="font-semibold text-slate-900 dark:text-white">
              4. Contact
            </h3>
            <p class="mt-1">
              If you have questions about this notice, contact the developer at
              <a
                href="mailto:abirebnaanowar@gmail.com"
                class="font-medium text-indigo-600 hover:underline dark:text-indigo-400"
              >abirebnaanowar@gmail.com</a>.
            </p>
          </div>

          <p class="rounded-lg bg-slate-100 p-3 text-xs leading-5 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
            This is a basic privacy notice for a frontend project, not legal advice. Update it if you introduce a backend, analytics, or third-party data collection.
          </p>

        </div>
      `,
    },

    terms: {
      title: "Terms of Use",
      content: `
        <div class="space-y-5 text-sm leading-6 text-slate-600 dark:text-slate-300">

          <div>
            <h3 class="font-semibold text-slate-900 dark:text-white">
              1. Using Flowboard
            </h3>
            <p class="mt-1">
              Flowboard is a project management interface intended to help organize projects, tasks, and team information.
            </p>
          </div>

          <div>
            <h3 class="font-semibold text-slate-900 dark:text-white">
              2. Your Data
            </h3>
            <p class="mt-1">
              You are responsible for the information you enter. Because this frontend stores data in your browser, you should not rely on it as the only copy of important information.
            </p>
          </div>

          <div>
            <h3 class="font-semibold text-slate-900 dark:text-white">
              3. Appropriate Use
            </h3>
            <p class="mt-1">
              Use the application lawfully and do not attempt to disrupt its operation, compromise its security, or misuse information belonging to others.
            </p>
          </div>

          <div>
            <h3 class="font-semibold text-slate-900 dark:text-white">
              4. Availability
            </h3>
            <p class="mt-1">
              This project is provided as-is, without a guarantee that every feature will always be available or that stored data will never be lost.
            </p>
          </div>

          <div>
            <h3 class="font-semibold text-slate-900 dark:text-white">
              5. Changes
            </h3>
            <p class="mt-1">
              These terms may be updated as the project evolves. Continued use of the application after changes means you accept the updated terms.
            </p>
          </div>

          <p class="rounded-lg bg-slate-100 p-3 text-xs leading-5 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
            These are simple demonstration terms, not a substitute for legally reviewed terms for a commercial service.
          </p>

        </div>
      `,
    },
  };

  function openModal(type, trigger) {
    const modalData = modalContentMap[type];

    if (!modalData) {
      return;
    }

    previouslyFocusedElement = trigger;

    modalTitle.textContent = modalData.title;
    modalContent.innerHTML = modalData.content;

    overlay.classList.remove("hidden");
    overlay.classList.add("flex");
    overlay.setAttribute("aria-hidden", "false");

    document.body.classList.add("overflow-hidden");

    closeButton.focus();
  }

  function closeModal() {
    overlay.classList.add("hidden");
    overlay.classList.remove("flex");
    overlay.setAttribute("aria-hidden", "true");

    document.body.classList.remove("overflow-hidden");

    if (previouslyFocusedElement?.isConnected) {
      previouslyFocusedElement.focus();
    }
  }

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-footer-modal]");

    if (trigger) {
      openModal(trigger.dataset.footerModal, trigger);
      return;
    }

    if (
      event.target.closest("#footer-modal-close") ||
      event.target.closest("#footer-modal-done")
    ) {
      closeModal();
      return;
    }

    if (event.target === overlay) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !overlay.classList.contains("hidden")) {
      closeModal();
    }
  });
}
