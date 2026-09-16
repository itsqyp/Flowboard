# Flowboard

Flowboard is a modern project management SaaS interface designed to help teams organize projects, manage tasks, track deadlines, and collaborate from a centralized workspace.

The project is built with vanilla JavaScript and Tailwind CSS, with a component-based frontend architecture and client-side SPA routing.

> **Status:** Active development 🚧

---

## ✨ Features

### Dashboard

- Overview of total projects
- Active task statistics
- Completed task statistics
- Team member statistics
- Projects overview
- My tasks
- Upcoming deadlines
- Recent activity
- Create new project
- Real-time UI updates after creating projects
- Task completion feedback with toast notifications

### Projects

- View all projects
- Search projects
- Filter projects by status
- Sort projects
- Project statistics
- Project cards with progress information
- Create projects
- Edit projects
- Delete projects
- Project due dates
- Project priorities
- Project status tracking
- Project team members

### Project Details

- Dedicated project detail pages
- Project information
- Project progress
- Project team members
- Project task list
- Create tasks
- Edit tasks
- Delete tasks
- Change task status
- Mark tasks as completed
- Assign tasks to team members
- Task priority management
- Task due dates

### Tasks

- Global task management
- Search tasks
- Filter by status
- Filter by priority
- Filter by project
- Sort by creation date
- Sort by due date
- Sort by priority
- Pagination
- Task count
- Task completion
- Task editing
- Task deletion
- Assignee information
- Project information
- Priority indicators
- Empty states
- Clear filters
- Pagination edge-case handling

### Team

- Team member management
- Add team members
- Edit team members
- Delete team members
- Role information
- Member status
- Member initials/avatar display

### Calendar

- Monthly calendar view
- Dynamic month generation
- Previous month navigation
- Next month navigation
- Today navigation
- Correct day positioning
- Dynamic month/year display
- Responsive calendar layout

### Navigation & UI

- SPA-style client-side routing
- Dynamic active navigation state
- Responsive desktop sidebar
- Mobile navigation drawer
- Responsive layout
- Reusable UI components
- Toast notification system
- Form modals
- Confirmation modals
- Empty states
- Responsive Tailwind CSS styling

---

## 🛠️ Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript (ES Modules)
- Tailwind CSS
- Vite

### Development Tools

- npm
- VS Code
- Git
- GitHub

### Typography

- Quicksand Variable via Fontsource

---

## 📁 Project Structure

```text
Flowboard/
│
├── src/
│   │
│   ├── components/
│   │   ├── dashboard/
│   │   │   ├── project-modal.js
│   │   │   ├── projects-overview.js
│   │   │   ├── recent-activity.js
│   │   │   ├── stat-cards.js
│   │   │   ├── upcoming-deadlines.js
│   │   │   ├── welcome-header.js
│   │   │   └── my-tasks.js
│   │   │
│   │   ├── projects/
│   │   │   ├── project-card.js
│   │   │   ├── project-modal.js
│   │   │   ├── edit-project-modal.js
│   │   │   └── delete-project-modal.js
│   │   │
│   │   ├── tasks/
│   │   │   ├── task-modal.js
│   │   │   ├── edit-task-modal.js
│   │   │   └── delete-task-modal.js
│   │   │
│   │   ├── team/
│   │   │   ├── member-modal.js
│   │   │   ├── edit-member-modal.js
│   │   │   └── delete-member-modal.js
│   │   │
│   │   ├── navbar.js
│   │   ├── sidebar.js
│   │   ├── footer.js
│   │   ├── mobile-navigation.js
│   │   └── toast.js
│   │
│   ├── data/
│   │   ├── dashboard.js
│   │   ├── projects.js
│   │   ├── tasks.js
│   │   ├── team.js
│   │   └── navigation.js
│   │
│   ├── pages/
│   │   ├── dashboard.js
│   │   ├── projects.js
│   │   ├── project-details.js
│   │   ├── tasks.js
│   │   ├── calendar.js
│   │   ├── team.js
│   │   └── settings.js
│   │
│   ├── main.js
│   ├── router.js
│   ├── navigation.js
│   ├── input.css
│   └── output.css
│
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

---

## 🏗️ Architecture

Flowboard uses a lightweight component-based architecture built with vanilla JavaScript.

Instead of placing the entire application inside a single HTML file, the interface is separated into:

```text
Pages
  ↓
Components
  ↓
Data
```

### Pages

Pages are responsible for assembling the interface for each route.

Examples:

```text
dashboard.js
projects.js
project-details.js
tasks.js
calendar.js
team.js
settings.js
```

### Components

Reusable interface elements are separated into individual JavaScript modules.

For example:

```text
navbar.js
sidebar.js
toast.js
task-modal.js
edit-task-modal.js
project-card.js
```

### Data

Application data is centralized into dedicated modules:

```text
projects.js
tasks.js
team.js
dashboard.js
```

This allows different parts of the application to work with the same project, task, and team data.

---

## 🧭 Routing

Flowboard uses client-side SPA routing.

Supported routes currently include:

```text
/                   → Dashboard
/dashboard          → Dashboard
/projects           → Projects
/projects/:id       → Project Details
/tasks              → Tasks
/calendar           → Calendar
/team               → Team
/settings            → Settings
```

Navigation is handled through the browser History API, allowing page transitions without full browser reloads.

---

## 📊 Data Relationships

Projects, tasks, and team members are connected through IDs.

### Project → Tasks

```js
{
  id: "flowboard",
  name: "Flowboard"
}
```

Tasks reference the project:

```js
{
  id: "task-1",
  projectId: "flowboard"
}
```

### Task → Team Member

Tasks reference their assignee:

```js
{
  id: "task-1",
  assigneeId: 1
}
```

Team members contain the corresponding ID:

```js
{
  id: 1,
  name: "Abir"
}
```

This structure keeps the application data normalized and makes relationships easier to manage.

---

## 🔔 Toast Notification System

Flowboard includes a reusable toast notification system for user feedback.

Supported notification types include:

- Success
- Error
- Warning
- Info

The toast system also includes:

- Automatic dismissal
- Manual close
- Fade transitions
- Timer pause on hover
- Timer resume after hover

---

## 📱 Responsive Design

The interface is designed to work across:

- Desktop
- Tablet
- Mobile

The desktop experience uses a persistent sidebar, while smaller screens use a mobile navigation drawer.

Tailwind CSS responsive utilities are used throughout the application.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/flowboard.git
```

### 2. Navigate into the project

```bash
cd flowboard
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will provide a local development URL, usually:

```text
http://localhost:5173
```

---

## 📦 Build for Production

Create a production build with:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🗺️ Roadmap

Flowboard is actively being developed.

Planned improvements include:

- [ ] Connect calendar with task deadlines
- [ ] Calendar task interactions
- [ ] Calendar project deadlines
- [ ] Complete Settings page
- [ ] Notification center
- [ ] Persistent application state
- [ ] LocalStorage integration
- [ ] Loading states
- [ ] Error states
- [ ] Improved accessibility
- [ ] Advanced task interactions
- [ ] Authentication
- [ ] Backend/API integration
- [ ] Database integration
- [ ] Real-time collaboration
- [ ] Production deployment

---

## 🎯 Project Goals

Flowboard is being built as a production-oriented frontend project rather than a simple CRUD application.

The main goals are to practice:

- Scalable frontend architecture
- Component-based JavaScript
- SPA routing
- State management
- Data relationships
- CRUD workflows
- Responsive UI development
- UX patterns
- Form validation
- Reusable components
- Production-style edge-case handling
- Git/GitHub workflow

---

## 📌 Current Status

Flowboard currently provides a functional project-management workspace with:

- Dashboard
- Projects
- Project details
- Tasks
- Team management
- Calendar foundation
- SPA navigation
- Responsive UI
- CRUD workflows
- Search and filtering
- Sorting
- Pagination
- Toast notifications
- Reusable components

The project is still under active development, with additional SaaS functionality planned.

---

## 👨‍💻 Author

**Abir**

Built as a frontend portfolio project to explore production-oriented web application development using vanilla JavaScript and modern frontend tooling.

---

## 📄 License

This project is currently intended as a personal portfolio and learning project.
asdkasdjaslkdjaslkdjaslkdjalskjdalksjdalksjdalksjdlaksjdlakjdlkas
aslkdjasldkjalkdjalkdjalkdjalkjdlkajdlkasjldkas
asldkjaslkdjalkdjaslkdjlkasjdlmvskvsdlkjsdlkjlksf
asdlkajsdlkajsldkjaslkdjalskdjaslkdj
dask
