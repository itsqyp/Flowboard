const APPEARANCE_STORAGE_KEY = "flowboard-appearance";

const DEFAULT_APPEARANCE = {
  theme: "light",
};

export function getAppearance() {
  const storedAppearance = localStorage.getItem(APPEARANCE_STORAGE_KEY);

  if (!storedAppearance) {
    return DEFAULT_APPEARANCE;
  }

  try {
    return {
      ...DEFAULT_APPEARANCE,
      ...JSON.parse(storedAppearance),
    };
  } catch {
    return DEFAULT_APPEARANCE;
  }
}

export function saveAppearance(appearance) {
  localStorage.setItem(APPEARANCE_STORAGE_KEY, JSON.stringify(appearance));
}

export function applyTheme(theme) {
  const root = document.documentElement;

  if (theme === "dark") {
    root.classList.add("dark");
    return;
  }

  if (theme === "light") {
    root.classList.remove("dark");
    return;
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  root.classList.toggle("dark", prefersDark);
}
