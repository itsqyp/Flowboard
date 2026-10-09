import { getState } from "../store/store.js";

const NOTIFICATIONS_STORAGE_KEY = "flowboard-notifications";
const SENT_DEADLINE_REMINDERS_KEY = "flowboard-deadline-reminders-sent";

// Remove the old demo notifications so the panel focuses on real reminders.
const LEGACY_SAMPLE_NOTIFICATION_IDS = new Set([
  "notification-1",
  "notification-2",
  "notification-3",
]);

let deadlineReminderInterval = null;

function getNotifications() {
  const storedNotifications = localStorage.getItem(NOTIFICATIONS_STORAGE_KEY);

  if (!storedNotifications) {
    return [];
  }

  try {
    const notifications = JSON.parse(storedNotifications);

    return Array.isArray(notifications)
      ? notifications.filter(
          (notification) =>
            notification &&
            !LEGACY_SAMPLE_NOTIFICATION_IDS.has(notification.id),
        )
      : [];
  } catch {
    return [];
  }
}

function saveNotifications(notifications) {
  localStorage.setItem(
    NOTIFICATIONS_STORAGE_KEY,
    JSON.stringify(notifications),
  );
}

function getSentDeadlineReminderIds() {
  try {
    const storedIds = localStorage.getItem(SENT_DEADLINE_REMINDERS_KEY);

    const parsedIds = storedIds ? JSON.parse(storedIds) : [];

    return Array.isArray(parsedIds) ? parsedIds : [];
  } catch {
    return [];
  }
}

function getDateOrdinal(year, monthIndex, day) {
  return Math.floor(Date.UTC(year, monthIndex, day) / 86400000);
}

function getDaysUntilDue(dueDateValue, now = new Date()) {
  if (!dueDateValue) {
    return null;
  }

  // Use calendar dates to avoid timezone errors.
  const dateText = String(dueDateValue).slice(0, 10);
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateText);

  if (!match) {
    return null;
  }

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);

  const dueDate = new Date(year, month - 1, day);

  // Reject invalid dates.
  if (
    dueDate.getFullYear() !== year ||
    dueDate.getMonth() !== month - 1 ||
    dueDate.getDate() !== day
  ) {
    return null;
  }

  const todayOrdinal = getDateOrdinal(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
  );

  const dueOrdinal = getDateOrdinal(year, month - 1, day);

  return dueOrdinal - todayOrdinal;
}

function getDeadlineReminderCopy(task, daysUntilDue) {
  if (daysUntilDue === 0) {
    return {
      title: "Task due today",
      message: `"${task.title}" is due today.`,
    };
  }

  if (daysUntilDue === 1) {
    return {
      title: "Task due tomorrow",
      message: `"${task.title}" is due tomorrow.`,
    };
  }

  return {
    title: `Task due in ${daysUntilDue} days`,
    message: `"${task.title}" is due in ${daysUntilDue} days.`,
  };
}

/**
 * Creates one reminder for each task on each reminder day:
 * 3 days before, 2 days before, 1 day before, and the due date.
 *
 * The sent-reminder list prevents reminders from being recreated
 * repeatedly after the user reads or clears them.
 */
function syncDeadlineNotifications() {
  const state = getState() || {};
  const tasks = Array.isArray(state.tasks) ? state.tasks : [];

  const notifications = getNotifications();

  const sentReminderIds = new Set(getSentDeadlineReminderIds());

  const existingNotificationIds = new Set(
    notifications.map((notification) => notification.id),
  );

  let hasNewNotifications = false;

  for (const task of tasks) {
    // Skip invalid tasks, completed tasks, and tasks without due dates.
    if (!task || task.status === "completed" || !task.dueDate) {
      continue;
    }

    const daysUntilDue = getDaysUntilDue(task.dueDate);

    // Ignore overdue tasks and tasks due more than 3 days from now.
    if (daysUntilDue === null || daysUntilDue < 0 || daysUntilDue > 3) {
      continue;
    }

    const dueDate = String(task.dueDate).slice(0, 10);

    // Unique ID for this task, due date, and reminder day.
    const reminderId = `deadline-${task.id}-${dueDate}-${daysUntilDue}`;

    if (sentReminderIds.has(reminderId)) {
      continue;
    }

    const copy = getDeadlineReminderCopy(task, daysUntilDue);

    if (!existingNotificationIds.has(reminderId)) {
      notifications.unshift({
        id: reminderId,
        title: copy.title,
        message: copy.message,
        type: "deadline",
        read: false,
        createdAt: new Date().toISOString(),
      });

      existingNotificationIds.add(reminderId);
      hasNewNotifications = true;
    }

    sentReminderIds.add(reminderId);
  }

  // Save notifications and remove old sample notifications.
  saveNotifications(notifications.slice(0, 50));

  localStorage.setItem(
    SENT_DEADLINE_REMINDERS_KEY,
    JSON.stringify([...sentReminderIds].slice(-500)),
  );

  if (hasNewNotifications) {
    renderNotifications();
  }
}

function getRelativeTime(dateString) {
  const elapsedSeconds = Math.max(
    0,
    Math.floor((Date.now() - new Date(dateString).getTime()) / 1000),
  );

  if (Number.isNaN(elapsedSeconds)) {
    return "Recently";
  }

  if (elapsedSeconds < 60) {
    return "Just now";
  }

  const minutes = Math.floor(elapsedSeconds / 60);

  if (minutes < 60) {
    return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  }

  const hours = Math.floor(minutes / 60);

  if (hours < 24) {
    return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  }

  const days = Math.floor(hours / 24);

  if (days < 7) {
    return `${days} day${days === 1 ? "" : "s"} ago`;
  }

  return new Date(dateString).toLocaleDateString();
}

function getNotificationIcon(type) {
  const icons = {
    task: `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        class="size-5"
        aria-hidden="true"
      >
        <path d="M9 11l3 3L22 4"></path>
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
      </svg>
    `,

    deadline: `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        class="size-5"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 6v6l4 2"></path>
      </svg>
    `,

    info: `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        class="size-5"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 16v-4"></path>
        <path d="M12 8h.01"></path>
      </svg>
    `,
  };

  return icons[type] || icons.info;
}

function getNotificationIconClasses(type) {
  const classes = {
    task: "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-300",

    deadline:
      "bg-amber-50 text-amber-600 dark:bg-amber-500/15 dark:text-amber-300",

    info: "bg-blue-50 text-blue-600 dark:bg-blue-500/15 dark:text-blue-300",
  };

  return classes[type] || classes.info;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

export function getUnreadNotificationCount() {
  return getNotifications().filter((notification) => !notification.read).length;
}

export function addNotification({ title, message, type = "info" }) {
  const notifications = getNotifications();

  const newNotification = {
    id: crypto.randomUUID(),
    title,
    message,
    type,
    read: false,
    createdAt: new Date().toISOString(),
  };

  notifications.unshift(newNotification);

  saveNotifications(notifications.slice(0, 50));

  renderNotifications();

  return newNotification;
}

export function renderNotifications() {
  const container = document.querySelector("#notifications-container");

  const button = document.querySelector("#notifications-button");

  const badge = document.querySelector("#notifications-badge");

  if (!container || !button || !badge) {
    return;
  }

  const notifications = getNotifications();

  const unreadCount = notifications.filter(
    (notification) => !notification.read,
  ).length;

  badge.textContent = unreadCount > 9 ? "9+" : String(unreadCount);

  badge.classList.toggle("hidden", unreadCount === 0);

  button.setAttribute(
    "aria-label",
    unreadCount > 0 ? `Notifications, ${unreadCount} unread` : "Notifications",
  );

  const notificationItems = notifications.length
    ? notifications
        .map(
          (notification) => `
            <button
              type="button"
              class="notification-item flex w-full items-start gap-3 px-4 py-4 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/70 ${
                notification.read ? "" : "bg-indigo-50/50 dark:bg-indigo-500/5"
              }"
              data-notification-id="${escapeHTML(notification.id)}"
            >
              <span
                class="flex size-10 shrink-0 items-center justify-center rounded-full ${getNotificationIconClasses(notification.type)}"
              >
                ${getNotificationIcon(notification.type)}
              </span>

              <span class="min-w-0 flex-1">
                <span class="flex items-start justify-between gap-2">
                  <span class="text-sm font-semibold text-slate-900 dark:text-white">
                    ${escapeHTML(notification.title)}
                  </span>

                  ${
                    notification.read
                      ? ""
                      : '<span class="mt-1.5 size-2 shrink-0 rounded-full bg-indigo-600" aria-label="Unread"></span>'
                  }
                </span>

                <span class="mt-1 block text-sm leading-5 text-slate-600 dark:text-slate-300">
                  ${escapeHTML(notification.message)}
                </span>

                <span class="mt-2 block text-xs text-slate-400 dark:text-slate-500">
                  ${escapeHTML(getRelativeTime(notification.createdAt))}
                </span>
              </span>
            </button>
          `,
        )
        .join("")
    : `
        <div class="flex flex-col items-center px-6 py-12 text-center">
          <div class="flex size-14 items-center justify-center rounded-full bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              class="size-7"
              aria-hidden="true"
            >
              <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"></path>
              <path d="M10 21h4"></path>
            </svg>
          </div>

          <h3 class="mt-4 text-sm font-semibold text-slate-900 dark:text-white">
            You're all caught up!
          </h3>

          <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">
            You don't have any notifications yet.
          </p>
        </div>
      `;

  container.innerHTML = `
    <div class="flex items-center justify-between border-b border-slate-200 px-4 py-4 dark:border-slate-700">
      <div>
        <h2 class="text-base font-bold text-slate-900 dark:text-white">
          Notifications
        </h2>

        <p class="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
          ${
            unreadCount
              ? `${unreadCount} unread notification${unreadCount === 1 ? "" : "s"}`
              : "You're up to date"
          }
        </p>
      </div>

      ${
        unreadCount
          ? `
            <button
              type="button"
              id="mark-all-notifications-read"
              class="text-xs font-semibold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              Mark all as read
            </button>
          `
          : ""
      }
    </div>

    <div class="max-h-[min(65vh,420px)] overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800">
      ${notificationItems}
    </div>

    <div class="border-t border-slate-200 px-4 py-3 text-center dark:border-slate-700">
      <button
        type="button"
        id="clear-read-notifications"
        class="text-xs font-medium text-slate-500 transition-colors hover:text-red-600 dark:text-slate-400 dark:hover:text-red-400"
        ${notifications.some((notification) => notification.read) ? "" : "disabled"}
      >
        Clear read notifications
      </button>
    </div>
  `;

  setupNotificationActions();
}

function setupNotificationActions() {
  const container = document.querySelector("#notifications-container");

  if (!container) {
    return;
  }

  container.querySelectorAll(".notification-item").forEach((item) => {
    item.addEventListener("click", () => {
      const notificationId = item.dataset.notificationId;
      const notifications = getNotifications();

      const updatedNotifications = notifications.map((notification) =>
        notification.id === notificationId
          ? { ...notification, read: true }
          : notification,
      );

      saveNotifications(updatedNotifications);

      renderNotifications();
    });
  });

  container
    .querySelector("#mark-all-notifications-read")
    ?.addEventListener("click", () => {
      const notifications = getNotifications().map((notification) => ({
        ...notification,
        read: true,
      }));

      saveNotifications(notifications);

      renderNotifications();
    });

  container
    .querySelector("#clear-read-notifications")
    ?.addEventListener("click", () => {
      const notifications = getNotifications().filter(
        (notification) => !notification.read,
      );

      saveNotifications(notifications);

      renderNotifications();
    });
}

export function setupNotifications() {
  const button = document.querySelector("#notifications-button");

  const panel = document.querySelector("#notifications-panel");

  const container = document.querySelector("#notifications-container");

  if (!button || !panel || !container) {
    console.error("Notification elements not found.");
    return;
  }

  // Check deadlines during app initialization.
  syncDeadlineNotifications();

  if (button.dataset.notificationsInitialized === "true") {
    renderNotifications();
    return;
  }

  button.dataset.notificationsInitialized = "true";

  function openPanel() {
    syncDeadlineNotifications();

    panel.classList.remove("hidden");

    button.setAttribute("aria-expanded", "true");

    renderNotifications();
  }

  function closePanel() {
    panel.classList.add("hidden");

    button.setAttribute("aria-expanded", "false");
  }

  button.addEventListener("click", (event) => {
    event.stopPropagation();

    const isOpen = button.getAttribute("aria-expanded") === "true";

    if (isOpen) {
      closePanel();
    } else {
      openPanel();
    }
  });

  panel.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  document.addEventListener("click", (event) => {
    if (!panel.contains(event.target) && !button.contains(event.target)) {
      closePanel();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !panel.classList.contains("hidden")) {
      closePanel();
      button.focus();
    }
  });

  // Recheck periodically if Flowboard remains open.
  if (!deadlineReminderInterval) {
    deadlineReminderInterval = window.setInterval(
      syncDeadlineNotifications,
      60 * 1000,
    );
  }

  renderNotifications();
}
