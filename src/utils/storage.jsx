export function setItem(key, value){
  localStorage.setItem(key, value);
}

export function getItem(key) {
  return localStorage.getItem(key);
}

export function delItem(key) {
  return localStorage.removeItem(key);
}
