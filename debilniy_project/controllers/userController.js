const { User, Log, Reg } = require("../models/Model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const generateToken = (userId) => {
  const secretKey = process.env.SECRET_KEY || 'default_secret_key';
  const expiresIn = '1h'; 

  return jwt.sign({ userId }, secretKey, { expiresIn });
};

exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = await User.create({ username, email, password: hashedPassword });

    const token = generateToken(newUser.id);

    res.status(201).json({ newUser, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ошибка сервера" });
  }
};
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (user && bcrypt.compareSync(password, user.password)) {
      
      const token = generateToken(user.id);
      res.json({ userId: user.id, token });
    } else {
      res.status(401).json({ error: "Неверные учетные данные" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Ошибка сервера" });
  }
};

exports.deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    
    await User.destroy({ where: { id: userId } });

    res.status(200).json({ message: 'Пользователь успешно удален' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
};


exports.updateUser = async (req, res) => {
  const userId = req.params.id;
  const { username, email, password, name } = req.body;

  try {
    
    await User.update(
      { username, email, password, name },
      { where: { id: userId } }
    );

    res.status(200).json({ message: 'Данные пользователя успешно обновлены' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
};
exports.getAllUsers = async (req, res) => {
  try {
   
    const users = await User.findAll();

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
};