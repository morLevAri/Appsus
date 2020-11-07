console.log('storage service run')

export const storageService = {
  storeToStorage,
  loadFromStorage,
}

function storeToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value) || null);
}

function loadFromStorage(key) {
  let data = localStorage.getItem(key);
  return (data) ? JSON.parse(data) : undefined;
}
