export function useStorage () {

  function setStorage (key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }
  function getStorage (key) {
    return JSON.parse(localStorage.getItem(key))
  }


  return {
    setStorage, getStorage
  }
}