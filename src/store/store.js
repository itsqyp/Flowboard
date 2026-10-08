const PROFILE_STORAGE_KEY = "flowboard-profile";

const DEFAULT_PROFILE = {
  name: "Abir",
  email: "abir@example.com",
  role: "Admin",
};

export function getCurrentUser() {
  const storedProfile = localStorage.getItem(PROFILE_STORAGE_KEY);

  if (!storedProfile) {
    return DEFAULT_PROFILE;
  }

  try {
    return {
      ...DEFAULT_PROFILE,
      ...JSON.parse(storedProfile),
    };
  } catch {
    return DEFAULT_PROFILE;
  }
}

import { projects as seedProjects } from "../data/projects.js";
import { tasks as seedTasks } from "../data/tasks.js";
import { teamMembers as seedTeamMembers } from "../data/team.js";

const initialProjects = structuredClone(seedProjects);
const initialTasks = structuredClone(seedTasks);
const initialTeamMembers = structuredClone(seedTeamMembers);
const initialActivities = [];

const STORAGE_KEY = "flowboard-state";

function loadState() {
  const storedState = localStorage.getItem(STORAGE_KEY);

  if (!storedState) {
    return {
      projects: [...initialProjects],
      tasks: [...initialTasks],
      teamMembers: [...initialTeamMembers],
      activities: [...initialActivities],
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

      activities: Array.isArray(parsedState.activities)
        ? parsedState.activities
        : [...initialActivities],
    };
  } catch (error) {
    console.error("Failed to load Flowboard state:", error);

    return {
      projects: [...initialProjects],
      tasks: [...initialTasks],
      teamMembers: [...initialTeamMembers],
      activities: [...initialActivities],
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
export function addActivity(activity) {
  state.activities.unshift({
    id: crypto.randomUUID(),
    ...activity,
    createdAt: new Date().toISOString(),
  });

  state.activities.splice(50);
}

export function resetState() {
  state.projects.splice(0, state.projects.length, ...initialProjects);

  state.tasks.splice(0, state.tasks.length, ...initialTasks);

  state.teamMembers.splice(0, state.teamMembers.length, ...initialTeamMembers);

  state.activities.splice(0, state.activities.length, ...initialActivities);

  notify();
}
