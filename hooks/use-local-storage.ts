export function useLocalStorage<T>() {
  function get(key: string) {
    return localStorage.getItem(key);
  }

  function set(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function remove(key: string) {
    localStorage.removeItem(key);
  }

  return { get, set, remove };
}
