const USERS = {
  admin: '123',
  user1: 'p@ss#w0rd!'
};
const LOCKED_USERS = ['locked_user'];
// Update login logic
function login(username, password) {
  if (!username || !password) return false;
  if (LOCKED_USERS.includes(username)) return false;
  return USERS[username] === password;
}

module.exports = { login };
