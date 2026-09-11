import { projects } from "./projects.js";
import { tasks } from "./tasks.js";
import { teamMembers } from "./team.js";

export function getDashboardStats() {
  return [
    {
      label: "Total Projects",
      value: projects.length,
      change: "+12.5%",
      trend: "up",
      description: "vs. last month",
    },

    {
      label: "Active Tasks",
      value: tasks.filter((task) => task.status !== "completed").length,
      change: "+8.2%",
      trend: "up",
      description: "vs. last month",
    },

    {
      label: "Completed Tasks",
      value: tasks.filter((task) => task.status === "completed").length,
      change: "+18.4%",
      trend: "up",
      description: "vs. last month",
    },

    {
      label: "Team Members",
      value: teamMembers.length,
      change: "+2",
      trend: "up",
      description: "this month",
    },
  ];
}

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
