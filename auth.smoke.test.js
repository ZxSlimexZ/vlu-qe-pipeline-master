const { login } = require('./auth');

test('Smoke: admin/123 dang nhap thanh cong', () => {
  expect(login('admin', '123')).toBe(true);
});