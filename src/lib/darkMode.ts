import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const getInitialValue = () => {
  if (!browser) return null;
  const darkMode = localStorage.getItem('darkMode');
  if (darkMode === null) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  } else {
    return darkMode === 'true';
  }
};

export const darkMode = writable(getInitialValue() ?? false);

darkMode.subscribe((value) => {
  if (browser && value !== null) {
    if (value) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', String(value));
  }
});
