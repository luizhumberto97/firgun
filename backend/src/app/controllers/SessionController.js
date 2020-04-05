const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authConfig = require('../../config/authConfig');

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'Usuario não cadastrado' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Senha invalida' });
    }
    const { id, name, adm } = user;

    return res.json({
      user: {
        id,
        name,
        email,
        adm,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

module.exports = new SessionController();
