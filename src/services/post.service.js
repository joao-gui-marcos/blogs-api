const { BlogPost, Category, User } = require('../models');

const getAll = async () => {
  const posts = await BlogPost.findAll({
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
    ],
    attributes: { exclude: ['userId'] },
  });

  return posts;
};

const getById = (id) => BlogPost.findOne({ 
  where: { id },
  include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  attributes: { exclude: ['userId'] },
});

module.exports = { 
  getAll,
  getById,
 };