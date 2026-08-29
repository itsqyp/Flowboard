let toastContainer = null;

export function renderToastContainer() {
  toastContainer = document.querySelector("#toast-container");

  if (!toastContainer) {
    console.error("Toast container mount point not found.");
    return;
  }

  toastContainer.className =
    "fixed right-4 top-4 z-[100] flex w-[calc(100%-2rem)] max-w-sm flex-col gap-3 sm:right-6 sm:top-6";

  toastContainer.setAttribute("aria-live", "polite");
  toastContainer.setAttribute("aria-atomic", "true");
}

export function showToast(message, type = "info", duration = 4000) {
  if (!toastContainer) {
    renderToastContainer();
  }

  if (!toastContainer) {
    return;
  }

  const toast = document.createElement("div");

  toast.className = `
        flex items-start gap-3 rounded-xl border bg-white p-4 shadow-lg
        opacity-0 translate-x-4
        transition-all duration-300
    `;

  const config = getToastConfig(type);

  toast.innerHTML = `
        <div class="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full ${config.iconBackground}">
            ${config.icon}
        </div>

        <div class="min-w-0 flex-1">
            <p class="text-sm font-semibold text-slate-900">
                ${config.title}
            </p>

            <p class="mt-1 text-sm leading-5 text-slate-500">
                ${message}
            </p>
        </div>

        <button
            type="button"
            class="toast-close shrink-0 rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
            aria-label="Close notification"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                class="size-4"
            >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
            </svg>
        </button>
    `;

  toastContainer.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove("opacity-0", "translate-x-4");
  });

  const closeButton = toast.querySelector(".toast-close");

  const removeToast = () => {
    toast.classList.add("opacity-0", "translate-x-4");

    setTimeout(() => {
      toast.remove();
    }, 300);
  };

  closeButton.addEventListener("click", removeToast);

  let timeout;
  let remainingTime = duration;
  let startTime = Date.now();

  function startTimer() {
    startTime = Date.now();

    timeout = setTimeout(() => {
      removeToast();
    }, remainingTime);
  }

  toast.addEventListener("mouseenter", () => {
    clearTimeout(timeout);

    const elapsedTime = Date.now() - startTime;
    remainingTime -= elapsedTime;
  });

  toast.addEventListener("mouseleave", () => {
    startTimer();
  });

  startTimer();
}

function getToastConfig(type) {
  const configs = {
    success: {
      title: "Success",
      iconBackground: "bg-green-100 text-green-600",
      icon: `
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="size-4"
                >
                    <path d="m5 12 4 4L19 6"></path>
                </svg>
            `,
    },

    error: {
      title: "Error",
      iconBackground: "bg-red-100 text-red-600",
      icon: `
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="size-4"
                >
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="M12 8v4"></path>
                    <path d="M12 16h.01"></path>
                </svg>
            `,
    },

    warning: {
      title: "Warning",
      iconBackground: "bg-amber-100 text-amber-600",
      icon: `
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="size-4"
                >
                    <path d="M12 9v4"></path>
                    <path d="M12 17h.01"></path>
                    <path d="M10.3 3.8 2.6 17a2 2 0 0 0 1.7 3h15.4a2 2 0 0 0 1.7-3L13.7 3.8a2 2 0 0 0-3.4 0Z"></path>
                </svg>
            `,
    },

    info: {
      title: "Information",
      iconBackground: "bg-blue-100 text-blue-600",
      icon: `
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    class="size-4"
                >
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="M12 11v5"></path>
                    <path d="M12 8h.01"></path>
                </svg>
            `,
    },
  };

  return configs[type] || configs.info;
}
