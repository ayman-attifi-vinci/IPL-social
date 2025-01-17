
const isValidPassword = require('./passwordChecker');

test('Password should be at least 8 characters long', () => {
  expect(isValidPassword('short')).toBe(false);
});

test('Password should contain at least one special character', () => {
  expect(isValidPassword('nosp3cial')).toBe(false);
});

test('Password should contain at least one number', () => {
  expect(isValidPassword('n0numb3r')).toBe(false);
});

test('Password should not contain "IPL" in any case', () => {
  expect(isValidPassword('IPL12345!')).toBe(false);
  expect(isValidPassword('ipl12345!')).toBe(false);
});

test('Valid password should pass all checks', () => {
  expect(isValidPassword('Valid123!')).toBe(true);
});
