function isValidPassword(password) {
  const minLength = 8;
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasIPL = /ipl/i.test(password);

  if (password.length < minLength) return false;
  if (!hasSpecialChar) return false;
  if (!hasNumber) return false;
  if (hasIPL) return false;

  return true;
}

module.exports = isValidPassword;
