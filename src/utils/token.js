export function saveToken (token) {
  localStorage.setItem('token', token);
}

export function getToken () {
  localStorage.getItem('token');
}
