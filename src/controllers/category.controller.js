require('dotenv/config');
// const jwt = require('jsonwebtoken');
const CategoryService = require('../services/category.service');

const getAll = async (_req, res) => {
  try {
    const categories = await CategoryService.getAll();
    return res.status(200).json(categories);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const validateName = (body, res) => {
  const { name } = body;

  if (!name) {
    res
      .status(400)
      .json({ message: '"name" is required' });
    return false;
  }

  return true;
};

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await CategoryService.createCategory({ name });

    if (!category) throw Error;

    // if (!validateNameAndPassword(req.body, res)) return;
    if (!validateName(req.body, res)) return;

    // const jwtConfig = {
    //   expiresIn: '7d',
    //   algorithm: 'HS256',
    // };

    // const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);

    res.status(201).json(category);
  } catch (err) {
    res
      .status(400)
      .json({ message: '"name" is required' });
  }
};

module.exports = {
  getAll,
  createCategory,
};