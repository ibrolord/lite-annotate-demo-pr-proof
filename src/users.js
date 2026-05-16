const users = [
  { id: 1, name: 'Alice', role: 'Admin' },
  { id: 2, name: 'Bob', role: 'Editor' },
];

function getUserById(id) {
  return users.find((user) => user.id === id);
}

function formatUserGreeting(id) {
  const user = getUserById(id);
  if (!user) return 'User not found';
  return 'Welcome, ' + user.name + '!';
}

module.exports = { getUserById, formatUserGreeting };
