export const dashboardStats = [
  {
    label: "Total Projects",
    value: 12,
    change: "+12.5%",
    trend: "up",
    description: "vs. last month",
  },

  {
    label: "Active Tasks",
    value: 48,
    change: "+8.2%",
    trend: "up",
    description: "vs. last month",
  },

  {
    label: "Completed Tasks",
    value: 136,
    change: "+18.4%",
    trend: "up",
    description: "vs. last month",
  },

  {
    label: "Team Members",
    value: 8,
    change: "+2",
    trend: "up",
    description: "this month",
  },
];

export const dashboardProjects = [
  {
    id: 1,
    name: "Website Redesign",
    description: "Redesign the company website and improve UX.",
    progress: 78,
    status: "In Progress",
    statusType: "progress",
    dueDate: "Sep 12, 2026",
    members: 5,
  },

  {
    id: 2,
    name: "Mobile Application",
    description: "Build the next generation mobile experience.",
    progress: 54,
    status: "In Progress",
    statusType: "progress",
    dueDate: "Sep 24, 2026",
    members: 4,
  },

  {
    id: 3,
    name: "Marketing Campaign",
    description: "Prepare the Q4 marketing campaign.",
    progress: 32,
    status: "At Risk",
    statusType: "warning",
    dueDate: "Sep 08, 2026",
    members: 3,
  },

  {
    id: 4,
    name: "Internal Dashboard",
    description: "Create analytics dashboard for internal teams.",
    progress: 91,
    status: "Almost Done",
    statusType: "success",
    dueDate: "Sep 04, 2026",
    members: 2,
  },
];

export const dashboardTasks = [
  {
    id: 1,
    title: "Finalize homepage design",
    project: "Website Redesign",
    priority: "High",
    priorityType: "high",
    dueDate: "Today",
    completed: false,
  },

  {
    id: 2,
    title: "Review API integration",
    project: "Mobile Application",
    priority: "Medium",
    priorityType: "medium",
    dueDate: "Tomorrow",
    completed: false,
  },

  {
    id: 3,
    title: "Prepare campaign assets",
    project: "Marketing Campaign",
    priority: "High",
    priorityType: "high",
    dueDate: "Sep 02",
    completed: false,
  },

  {
    id: 4,
    title: "Fix dashboard responsive issues",
    project: "Internal Dashboard",
    priority: "Low",
    priorityType: "low",
    dueDate: "Sep 05",
    completed: false,
  },

  {
    id: 5,
    title: "Update project documentation",
    project: "Website Redesign",
    priority: "Low",
    priorityType: "low",
    dueDate: "Sep 06",
    completed: true,
  },
];

export const upcomingDeadlines = [
  {
    title: "Marketing Campaign",
    date: "Sep 08, 2026",
    daysRemaining: 9,
  },

  {
    title: "Website Redesign",
    date: "Sep 12, 2026",
    daysRemaining: 13,
  },

  {
    title: "Mobile Application",
    date: "Sep 24, 2026",
    daysRemaining: 25,
  },
];

export const recentActivity = [
  {
    user: "Sarah",
    action: "completed",
    target: "Update landing page",
    project: "Website Redesign",
    time: "10 minutes ago",
    avatar: "S",
  },

  {
    user: "Alex",
    action: "created",
    target: "API integration task",
    project: "Mobile Application",
    time: "42 minutes ago",
    avatar: "A",
  },

  {
    user: "Abir",
    action: "updated",
    target: "Marketing Campaign",
    project: "Marketing Campaign",
    time: "1 hour ago",
    avatar: "A",
  },

  {
    user: "Michael",
    action: "commented on",
    target: "Dashboard analytics",
    project: "Internal Dashboard",
    time: "2 hours ago",
    avatar: "M",
  },
];
