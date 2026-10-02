import { getState } from "../store/store.js";

export function getDashboardStats() {
  const { projects, tasks, teamMembers } = getState();

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
