import { projects as initialProjects } from "../data/projects.js";
import { tasks as initialTasks } from "../data/tasks.js";
import { teamMembers as initialTeamMembers } from "../data/team.js";

const STORAGE_KEY = "flowboard-state";

function loadState() {
  const storedState = localStorage.getItem(STORAGE_KEY);

  if (!storedState) {
    return {
      projects: [...initialProjects],
      tasks: [...initialTasks],
      teamMembers: [...initialTeamMembers],
    };
  }

  try {
    const parsedState = JSON.parse(storedState);

    return {
      projects: Array.isArray(parsedState.projects)
        ? parsedState.projects
        : [...initialProjects],

      tasks: Array.isArray(parsedState.tasks)
        ? parsedState.tasks
        : [...initialTasks],

      teamMembers: Array.isArray(parsedState.teamMembers)
        ? parsedState.teamMembers
        : [...initialTeamMembers],
    };
  } catch (error) {
    console.error("Failed to load Flowboard state:", error);

    return {
      projects: [...initialProjects],
      tasks: [...initialTasks],
      teamMembers: [...initialTeamMembers],
    };
  }
}

const state = loadState();

const listeners = new Set();

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function getState() {
  return state;
}

export function subscribe(listener) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

export function notify() {
  saveState();

  listeners.forEach((listener) => {
    listener(state);
  });
}
