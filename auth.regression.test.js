const { login } = require('./auth');

describe('Regression: auth', () => {
  test('dang nhap dung', () => {
    expect(login('admin', '123')).toBe(true);
  });
  test('mat khau sai', () => {
    expect(login('admin', 'wrong')).toBe(false);
  });
  test('username rong', () => {
    expect(login('', '123')).toBe(false);
  });
  test('password rong', () => {
    expect(login('admin', '')).toBe(false);
  });
  test('mat khau chua ky tu dac biet', () => {
    expect(login('user1', 'p@ss#w0rd!')).toBe(true);
  });
  test('tai khoan bi khoa', () => {
    expect(login('locked_user', '123')).toBe(false);
  });
  test('username khong ton tai', () => {
    expect(login('ghost', '123')).toBe(false);
  });
});