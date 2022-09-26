export const debounceEvent = (callback, delay = 100, timer) => (...args) => {
  clearTimeout(timer, timer = setTimeout(() => callback(...args), delay));
}