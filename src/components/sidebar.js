export function renderSidebar() {
  const sidebar = document.querySelector("#sidebar");

  if (!sidebar) {
    console.error("Sidebar mount point not found.");
    return;
  }

  sidebar.innerHTML = `
        <aside class="hidden md:flex w-64 shrink-0 border-r bg-white">
            <div class="flex w-full flex-col">

                <!-- Navigation -->
                <nav class="flex-1 p-4">

                    <!-- Main Navigation -->
                    <div class="space-y-1">

                        <a
                            href="/"
                            class="flex items-center gap-3 rounded-lg bg-indigo-50 px-3 py-2.5 text-sm font-semibold text-indigo-700"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                class="size-5"
                            >
                                <rect
                                    width="7"
                                    height="9"
                                    x="3"
                                    y="3"
                                    rx="1"
                                ></rect>
                                <rect
                                    width="7"
                                    height="5"
                                    x="14"
                                    y="3"
                                    rx="1"
                                ></rect>
                                <rect
                                    width="7"
                                    height="9"
                                    x="14"
                                    y="12"
                                    rx="1"
                                ></rect>
                                <rect
                                    width="7"
                                    height="5"
                                    x="3"
                                    y="16"
                                    rx="1"
                                ></rect>
                            </svg>

                            Dashboard
                        </a>

                        <a
                            href="#"
                            class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                class="size-5"
                            >
                                <path d="M3 7h5l2 2h11v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <path d="M3 7V5a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v2"></path>
                            </svg>

                            Projects
                        </a>

                        <a
                            href="#"
                            class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                class="size-5"
                            >
                                <rect
                                    width="18"
                                    height="18"
                                    x="3"
                                    y="3"
                                    rx="2"
                                ></rect>
                                <path d="m9 12 2 2 4-4"></path>
                            </svg>

                            My Tasks
                        </a>

                        <a
                            href="#"
                            class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                class="size-5"
                            >
                                <rect
                                    width="18"
                                    height="18"
                                    x="3"
                                    y="4"
                                    rx="2"
                                ></rect>
                                <path d="M16 2v4"></path>
                                <path d="M8 2v4"></path>
                                <path d="M3 10h18"></path>
                            </svg>

                            Calendar
                        </a>

                        <a
                            href="#"
                            class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                class="size-5"
                            >
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>

                            Team
                        </a>

                    </div>

                    <!-- Secondary Navigation -->
                    <div class="mt-8">

                        <p class="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                            Workspace
                        </p>

                        <div class="mt-2 space-y-1">

                            <a
                                href="#"
                                class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    class="size-5"
                                >
                                    <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"></path>
                                    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.7 1.7-.06-.06A1.7 1.7 0 0 0 16.16 19a1.7 1.7 0 0 0-1.06 1.55V21h-2.4v-.45A1.7 1.7 0 0 0 11.64 19a1.7 1.7 0 0 0-1.88.34l-.06.06-1.7-1.7.06-.06A1.7 1.7 0 0 0 8.4 15a1.7 1.7 0 0 0-1.55-1.06H6v-2.4h.45A1.7 1.7 0 0 0 8.4 10a1.7 1.7 0 0 0-.34-1.88L8 8.06l1.7-1.7.06.06A1.7 1.7 0 0 0 11.64 6 1.7 1.7 0 0 0 12.7 4.45V4h2.4v.45A1.7 1.7 0 0 0 16.16 6a1.7 1.7 0 0 0 1.88-.34l.06-.06 1.7 1.7-.06.06A1.7 1.7 0 0 0 19.4 10a1.7 1.7 0 0 0 1.55 1.06H21v2.4h-.45A1.7 1.7 0 0 0 19.4 15Z"></path>
                                </svg>

                                Settings
                            </a>

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
