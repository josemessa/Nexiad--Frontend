export function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);
}

export function validatePassword(password) {
  if (password.length < 8) {
    return false;
  }

  // Verificar si la contraseña contiene al menos un número
  if (!/\d/.test(password)) {
    return false;
  }

  return true;
}
