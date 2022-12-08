require('dotenv/config');
const jwt = require('jsonwebtoken');
const UserService = require('../services/user.service');

const secret = process.env.JWT_SECRET || 'suaSenhaSecreta';

const getAll = async (_req, res) => {
  try {
    const users = await UserService.getAll();
    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await UserService.getById(id);
    if (!users) {
      return res.status(404).json({ message: 'User does not exist' });
    }
    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const validateNameAndPassword = (body, res) => {
  const { displayName, password } = body;

  if (displayName.length < 8) {
    res
      .status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
    return false;
  }

  if (password.length < 6) {
    res
      .status(400)
      .json({ message: '"password" length must be at least 6 characters long' });
    return false;
  }

  return true;
};

const validateEmail = (body, res) => {
  const { email } = body;
  const filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!filter.test(email)) {
    res
      .status(400)
      .json({ message: '"email" must be a valid email' });
    return false;
  }

  return true;
};

const createUser = async (req, res) => {
  try {
    const { email, password, displayName, image } = req.body;

    const user = await UserService.createUser({ email, password, displayName, image });

    if (!validateNameAndPassword(req.body, res)) return;
    if (!validateEmail(req.body, res)) return;

    if (!user) return res.status(409).json({ message: 'User already registered' });

    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);

    return res.status(201).json({ token });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Erro ao salvar o usuário no banco', error: err.message });
  }
};

module.exports = {
  getAll,
  createUser,
  getById,
};