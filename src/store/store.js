import { projects } from "../data/projects.js";
import { tasks } from "../data/tasks.js";
import { teamMembers } from "../data/team.js";

const state = {
  projects,
  tasks,
  teamMembers,
};

const listeners = new Set();

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
  listeners.forEach((listener) => listener(state));
}
