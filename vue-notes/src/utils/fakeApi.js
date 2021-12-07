export const fakeApi = (value = true, delay = 500) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(value)
    }, delay)
  })
