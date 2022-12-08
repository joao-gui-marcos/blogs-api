const { Category } = require('../models');

const getAll = async () => {
  const categories = await Category.findAll();

  return categories;
};

const createCategory = ({ name }) => Category.create({ name });

module.exports = { 
  getAll,
  createCategory,
 };