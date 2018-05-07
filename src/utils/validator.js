export function required(value) {
  return value ? undefined : 'Required field';
}

export function isEmail(str) {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(str);
}
