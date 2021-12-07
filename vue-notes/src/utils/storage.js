export const storage = () => {
  const get = key => JSON.parse(localStorage.getItem(key))
  const set = (key, value) => localStorage.setItem(key, JSON.stringify(value))
  const remove = key => localStorage.removeItem(key)

  return {
    get,
    set,
    remove
  }
}
