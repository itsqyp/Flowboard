export const projects = [
  {
    id: "flowboard",
    name: "Flowboard",
    description:
      "Project management SaaS for teams to plan, organize, and track their work.",
    status: "in-progress",
    priority: "high",
    progress: 68,
    dueDate: "2026-09-18",
    memberIds: [1, 2, 3],
    tasks: {
      total: 32,
      completed: 22,
    },
    createdAt: "2026-08-20",
  },

  {
    id: "gojotech",
    name: "GojoTech",
    description:
      "Modern e-commerce platform for discovering and purchasing technology products.",
    status: "in-progress",
    priority: "high",
    progress: 82,
    dueDate: "2026-09-10",
    memberIds: [1, 4],
    tasks: {
      total: 45,
      completed: 37,
    },
    createdAt: "2026-08-12",
  },

  {
    id: "marketing-site",
    name: "Marketing Website",
    description:
      "Company marketing website focused on product presentation and lead generation.",
    status: "planning",
    priority: "medium",
    progress: 24,
    dueDate: "2026-10-05",
    memberIds: [1, 5],
    tasks: {
      total: 25,
      completed: 6,
    },
    createdAt: "2026-08-28",
  },

  {
    id: "mobile-app",
    name: "Mobile App",
    description:
      "Mobile companion application for managing projects and tasks on the go.",
    status: "completed",
    priority: "medium",
    progress: 100,
    dueDate: "2026-08-30",
    memberIds: [1, 6, 7],
    tasks: {
      total: 18,
      completed: 18,
    },
    createdAt: "2026-07-15",
  },

  {
    id: "design-system",
    name: "Design System",
    description:
      "Reusable UI component library and design guidelines for Flowboard products.",
    status: "on-hold",
    priority: "low",
    progress: 41,
    dueDate: "2026-10-20",
    memberIds: [1, 8],
    tasks: {
      total: 34,
      completed: 14,
    },
    createdAt: "2026-08-05",
  },
];
