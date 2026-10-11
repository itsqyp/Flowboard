# Flowboard

A modern, responsive project management workspace built with **Vanilla JavaScript, Tailwind CSS, and Vite**.

Flowboard helps teams organize projects, manage tasks, track deadlines, and coordinate their work through a centralized interface. It features a component-based architecture, client-side SPA routing, reusable UI components, and persistent browser storage.

**Status:** Active Development 🚧

**Live Demo:** [flowboard-abir.netlify.app](https://flowboard-abir.netlify.app/)

**Repository:** [github.com/itsqyp/Flowboard](https://github.com/itsqyp/Flowboard)

---

## ✨ Features

### 📊 Dashboard

- Overview of projects, tasks, and team members
- Active and completed task statistics
- Projects overview with progress information
- Personal task overview
- Upcoming deadlines
- Recent activity
- Create projects directly from the dashboard
- Interactive UI updates after project and task actions
- Toast notifications for user feedback

### 📁 Project Management

- View all projects in a centralized workspace
- Search projects
- Filter projects by status
- Sort projects
- View project statistics and progress
- Create, edit, and delete projects
- Manage project priorities and statuses
- Set project due dates
- Associate team members with projects

### 📝 Task Management

- View tasks across projects
- Create, edit, and delete tasks
- Mark tasks as completed
- Update task statuses
- Assign tasks to team members
- Set task priorities and due dates
- Search tasks
- Filter tasks by status, priority, and project
- Sort tasks by creation date, due date, and priority
- Navigate task lists using pagination
- View task assignees and associated projects
- Handle empty states and pagination edge cases

### 🔎 Project Details

- Dedicated detail pages for individual projects
- View project information and progress
- Access project team members
- Manage project-specific tasks
- Update task statuses and priorities
- Assign tasks to team members
- Manage task due dates

### 👥 Team Management

- View team members
- Add, edit, and delete team members
- Display member initials or avatars
- View member roles and status information

### 📅 Calendar

- Dynamic monthly calendar
- Navigate between months
- Return to the current date
- Automatically position dates on the correct weekdays
- Dynamic month and year display
- Responsive calendar layout

_Task-deadline and project-deadline integration with the calendar remains planned._

### ⚙️ Settings & Profile

- Customize profile information
- Update profile name, email, and role
- Upload a profile avatar from your device
- Display the profile avatar in the settings page and navigation bar
- Persist profile information in browser storage
- Switch between light, dark, and system appearance preferences

### 🧭 Navigation & User Interface

- Client-side SPA routing
- Dynamic active navigation states
- Responsive desktop sidebar
- Mobile navigation drawer
- Reusable UI components
- Responsive layouts for desktop, tablet, and mobile
- Modal-based forms and confirmation dialogs
- Toast notifications
- Empty states
- Consistent Tailwind CSS styling

### 🔔 Toast Notifications

A reusable notification system provides feedback throughout the application.

Supported types:

- Success
- Error
- Warning
- Info

Additional behavior:

- Automatic dismissal
- Manual close button
- Fade transitions
- Pause the dismissal timer on hover
- Resume the timer when the pointer leaves

### 💾 Local Data Persistence

Flowboard uses browser `localStorage` to retain application data between page reloads.

Stored information includes application state and profile preferences, allowing users to continue working with their data in the same browser.

**Note:** This is a frontend-only implementation. Data is stored locally in the browser and is not synchronized across users or devices.

---

## 🛠️ Tech Stack

| Technology              | Purpose                                 |
| ----------------------- | --------------------------------------- |
| HTML5                   | Application entry point and markup      |
| CSS3                    | Custom styling                          |
| JavaScript (ES Modules) | Application logic and interactivity     |
| Tailwind CSS            | Utility-first styling                   |
| Vite                    | Development server and production build |
| Fontsource              | Quicksand Variable typography           |
| npm                     | Package management                      |
| Git & GitHub            | Version control and source hosting      |
| Netlify                 | Deployment and hosting                  |

---

## 🏗️ Architecture

Flowboard uses a lightweight, component-based architecture built with Vanilla JavaScript.

The application separates page composition, reusable interface components, and initial data definitions into dedicated modules.

Flowboard/
├── src/
│ ├── components/
│ │ ├── dashboard/
│ │ ├── projects/
│ │ ├── tasks/
│ │ ├── team/
│ │ ├── navbar.js
│ │ ├── sidebar.js
│ │ ├── footer.js
│ │ ├── mobile-navigation.js
│ │ └── toast.js
│ │
│ ├── data/
│ │ ├── dashboard.js
│ │ ├── projects.js
│ │ ├── tasks.js
│ │ ├── team.js
│ │ └── navigation.js
│ │
│ ├── pages/
│ │ ├── dashboard.js
│ │ ├── projects.js
│ │ ├── project-details.js
│ │ ├── tasks.js
│ │ ├── calendar.js
│ │ ├── team.js
│ │ └── settings.js
│ │
│ ├── main.js
│ ├── router.js
│ ├── navigation.js
│ ├── input.css
│ └── output.css
│
├── index.html
├── package.json
├── package-lock.json
└── README.md

_The directory tree above highlights the main application modules; individual component files are omitted for readability._

### Pages

Page modules assemble the interface for specific routes and coordinate their associated components.

Examples include:

- `dashboard.js`
- `projects.js`
- `project-details.js`
- `tasks.js`
- `calendar.js`
- `team.js`
- `settings.js`

### Components

Reusable components keep the interface modular and easier to maintain.

Examples include navigation components, project cards, task forms, confirmation dialogs, team member forms, and toast notifications.

### Data & State

Initial application data is organized into dedicated modules. A centralized state layer manages application data and persists it to browser storage.

This separation helps different parts of the application work with shared project, task, and team information.

---

## 🧭 Application Routes

Flowboard uses client-side routing to navigate between pages without performing a full browser reload for each navigation action.

| Route           | Page            |
| --------------- | --------------- |
| `/`             | Dashboard       |
| `/dashboard`    | Dashboard       |
| `/projects`     | Projects        |
| `/projects/:id` | Project Details |
| `/tasks`        | Tasks           |
| `/calendar`     | Calendar        |
| `/team`         | Team            |
| `/settings`     | Settings        |

Navigation is handled through the browser History API.

---

## 📊 Data Relationships

Projects, tasks, and team members are connected through identifiers.

### Project → Tasks

A project has its own identifier:

{
id: "flowboard",
name: "Flowboard"
}

Tasks reference the project they belong to:

{
id: "task-1",
projectId: "flowboard"
}

### Task → Team Member

A task can reference an assigned team member:

{
id: "task-1",
assigneeId: 1
}

The corresponding team member has a matching identifier:

{
id: 1,
name: "Abir"
}

Using identifiers to represent relationships makes it easier to associate tasks with projects and team members.

---

## 🚀 Getting Started

Follow these steps to run Flowboard locally.

### Prerequisites

Install the following:

- [Node.js](https://nodejs.org/) — preferably a current LTS release
- npm, which is included with Node.js
- [Git](https://git-scm.com/)

### 1. Clone the repository

git clone https://github.com/itsqyp/Flowboard.git

### 2. Navigate to the project directory

cd Flowboard

### 3. Install dependencies

npm install

### 4. Start the development server

npm run dev

Vite will display a local URL in the terminal, typically:

http://localhost:5173/

Open that URL in your browser to use Flowboard.

---

## 📦 Production Build

### Create a production build

npm run build

Vite generates the production-ready files in the `dist/` directory.

### Preview the production build

npm run preview

Use the local URL printed in the terminal to inspect the production build before deployment.

---

## 🌐 Deployment

Flowboard is deployed on Netlify.

**Live application:** https://flowboard-abir.netlify.app/

The repository can be connected to Netlify for continuous deployment, allowing updates pushed to the configured Git branch to trigger new deployments.

---

## 🗺️ Roadmap

Flowboard is an ongoing project. Planned improvements include:

- [ ] Connect calendar events to task deadlines
- [ ] Add calendar interactions for tasks and project deadlines
- [ ] Build a notification center
- [ ] Add loading and error states
- [ ] Improve accessibility and keyboard navigation
- [ ] Expand task interactions and workflow options
- [ ] Implement authentication and authorization
- [ ] Introduce a backend API
- [ ] Integrate a database
- [ ] Support real-time collaboration
- [ ] Add automated testing
- [ ] Improve production readiness and application security

---

## 🎯 Project Goals

Flowboard is designed as a portfolio project focused on practical frontend engineering rather than a basic CRUD application.

The project provides opportunities to practice:

- Component-based application architecture
- Vanilla JavaScript and ES modules
- Client-side SPA routing
- State management and persistence
- Data relationships
- CRUD workflows
- Search, filtering, sorting, and pagination
- Form validation
- Reusable UI components
- Responsive interface development
- User feedback and interaction patterns
- Edge-case handling
- Git and GitHub workflows
- Production builds and deployment

---

## ⚠️ Current Limitations

Flowboard is currently a frontend-focused project.

- Application data is stored in the browser rather than a remote database.
- Data is not synchronized between different users or devices.
- Authentication and server-side authorization are not implemented.
- Real-time collaboration is not available.
- Calendar integration with task and project deadlines is still planned.

These limitations are part of the project's current development stage and provide opportunities for future improvements.

---

## 👨‍💻 Author

**Abir**

Flowboard is a personal portfolio project built to explore modern frontend development practices and production-oriented web application architecture.

---

## 📄 License

This project is currently intended as a personal portfolio and learning project. No open-source license has been specified yet.
