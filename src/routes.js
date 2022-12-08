const login = require('./controllers/login');
const users = require('./controllers/user.controller');
const categories = require('./controllers/category.controller');
const posts = require('./controllers/post.controller');

module.exports = {
  login,
  users,
  categories,
  posts,
};
//