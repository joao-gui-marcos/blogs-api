const { User } = require('../models');

const getAll = async () => {
  const users = await User.findAll({
    // include: { model: BlogPost, as: 'blog_posts' },
    attributes: { exclude: ['password'] },
  });

  return users;
};

const getByUsername = (email) => User.findOne({ where: { email } });

const getById = (id) => User.findOne({ where: { id }, attributes: { exclude: ['password'] } });

const createUser = async ({ email, password, displayName, image }) => {
  const userSearch = await User.findAll({ where: { email } });
  if (userSearch.length > 0) {
    return false;
  } 
  User.create({ email, password, displayName, image });
  return true;
};

module.exports = { 
  getAll,
  getByUsername,
  createUser,
  getById,
 };