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

                    <!-- Links -->
                    <nav class="flex items-center gap-5">

                        <a
                            href="#"
                         class="text-sm text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                        >
                            Help
                        </a>

                        <a
                            href="#"
                         class="text-sm text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                        >
                            Privacy
                        </a>

                        <a
                            href="#"
                         class="text-sm text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                        >
                            Terms
                        </a>

                    </nav>

                </div>
            </div>
        </footer>
    `;
}
