import { projects } from "../data/projects.js";
import { tasks } from "../data/tasks.js";

let currentCalendarDate = new Date();

function getCalendarEvents() {
  const projectEvents = projects.map((project) => ({
    id: `project-${project.id}`,
    type: "project",
    title: project.name,
    date: project.dueDate,
    projectId: project.id,
  }));

  const taskEvents = tasks.map((task) => ({
    id: task.id,
    type: "task",
    title: task.title,
    date: task.dueDate,
    projectId: task.projectId,
    status: task.status,
    priority: task.priority,
  }));

  return [...projectEvents, ...taskEvents];
}

export function renderCalendar() {
  const app = document.querySelector("#app");

  if (!app) {
    return;
  }

  const calendarEvents = getCalendarEvents();

  app.innerHTML = `
    <div class="space-y-6">

      <!-- Header -->
      <div class="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <h1 class="text-2xl font-bold text-slate-900">
            Calendar
          </h1>

          <p class="mt-1 text-sm text-slate-500">
            View and manage your project deadlines and tasks.
          </p>
        </div>

        <button
          id="today-calendar-btn"
          type="button"
          class="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          Today
        </button>

      </div>


      <!-- Calendar -->
      <div class="overflow-hidden rounded-xl border border-slate-200 bg-white p-4 shadow-sm">

        <!-- Calendar Header -->
        <div class="flex items-center justify-between border-b border-slate-200 px-5 py-4">

          <button
            id="previous-calendar-month"
            type="button"
            class="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            aria-label="Previous month"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.8"
              stroke="currentColor"
              class="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m15.75 19.5-7.5-7.5 7.5-7.5"
              />
            </svg>
          </button>


          <h2 class="text-base font-bold text-slate-900">
            ${currentCalendarDate.toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </h2>


          <button
            id="next-calendar-month"
            type="button"
            class="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            aria-label="Next month"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.8"
              stroke="currentColor"
              class="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5"
              />
            </svg>
          </button>

        </div>


        <!-- Weekdays -->
        <div class="grid grid-cols-7 border-b border-slate-200">

          <div class="px-2 py-3 text-center text-xs font-semibold text-slate-500">
            Sun
          </div>

          <div class="px-2 py-3 text-center text-xs font-semibold text-slate-500">
            Mon
          </div>

          <div class="px-2 py-3 text-center text-xs font-semibold text-slate-500">
            Tue
          </div>

          <div class="px-2 py-3 text-center text-xs font-semibold text-slate-500">
            Wed
          </div>

          <div class="px-2 py-3 text-center text-xs font-semibold text-slate-500">
            Thu
          </div>

          <div class="px-2 py-3 text-center text-xs font-semibold text-slate-500">
            Fri
          </div>

          <div class="px-2 py-3 text-center text-xs font-semibold text-slate-500">
            Sat
          </div>

        </div>


        <!-- Calendar Grid -->
        <div class="grid grid-cols-7">

          ${(() => {
            const year = currentCalendarDate.getFullYear();
            const month = currentCalendarDate.getMonth();

            const firstDay = new Date(year, month, 1).getDay();
            const daysInMonth = new Date(year, month + 1, 0).getDate();

            const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;

            return Array.from({ length: totalCells }, (_, index) => {
              const dayNumber = index - firstDay + 1;

              const isCurrentMonth = dayNumber >= 1 && dayNumber <= daysInMonth;

              const dateString = isCurrentMonth
                ? `${year}-${String(month + 1).padStart(2, "0")}-${String(dayNumber).padStart(2, "0")}`
                : "";

              const dayEvents = calendarEvents.filter(
                (event) => event.date === dateString,
              );

              return `
                  <div
                    class="min-h-28 border-b border-r border-slate-100 p-3 ${
                      isCurrentMonth ? "bg-white" : "bg-slate-50"
                    }"
                  >

                    ${
                      isCurrentMonth
                        ? `
                          <span
                            class="flex size-7 items-center justify-center rounded-full text-sm font-medium text-slate-700"
                          >
                            ${dayNumber}
                          </span>

                          ${
                            dayEvents.length > 0
                              ? `
                                <div class="mt-2 space-y-1">
                                  ${dayEvents
                                    .map(
                                      (event) => `
                                        <div
                                          class="truncate rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700"
                                          title="${event.title}"
                                        >
                                          ${event.title}
                                        </div>
                                      `,
                                    )
                                    .join("")}
                                </div>
                              `
                              : ""
                          }
                        `
                        : ""
                    }

                  </div>
                `;
            }).join("");
          })()}

        </div>

      </div>

    </div>
  `;

  // Previous Month
  const previousMonthButton = document.querySelector(
    "#previous-calendar-month",
  );

  previousMonthButton?.addEventListener("click", () => {
    currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1);

    renderCalendar();
  });

  // Next Month
  const nextMonthButton = document.querySelector("#next-calendar-month");

  nextMonthButton?.addEventListener("click", () => {
    currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1);

    renderCalendar();
  });

  // Today
  const todayCalendarButton = document.querySelector("#today-calendar-btn");

  todayCalendarButton?.addEventListener("click", () => {
    currentCalendarDate = new Date();

    renderCalendar();
  });
}
