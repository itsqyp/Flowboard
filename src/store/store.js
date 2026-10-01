import { projects as seedProjects } from "../data/projects.js";
import { tasks as seedTasks } from "../data/tasks.js";
import { teamMembers as seedTeamMembers } from "../data/team.js";
const initialProjects = structuredClone(seedProjects);
const initialTasks = structuredClone(seedTasks);
const initialTeamMembers = structuredClone(seedTeamMembers);
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

export function resetState() {
  state.projects.splice(0, state.projects.length, ...initialProjects);
  state.tasks.splice(0, state.tasks.length, ...initialTasks);
  state.teamMembers.splice(0, state.teamMembers.length, ...initialTeamMembers);

  notify();
}
