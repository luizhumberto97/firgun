const { object, number, string, date } = require('yup');
const User = require('../models/User');
const Client = require('../models/Client');
const About = require('../models/About');
const Reason = require('../models/Reason');

class ClientController {
  async show(req, res) {
    const { id } = req.params;
    const { adm } = await User.findByPk(req.userId);
    if (!adm) {
      return res
        .status(401)
        .json({ error: 'Somente administradores podem alterar dados' });
    }
    const client = await Client.findOne({ where: { id } });

    if (!client) {
      return res.status(400).json({ error: 'Este usuario não existe' });
    }
    return res.json(client);
  }

  async index(req, res) {
    const { page = 1 } = req.query;
    const userExists = await User.findByPk(req.userId);

    if (!userExists) {
      return res.status(400).json({ error: 'Usuario invalido' });
    }

    const clients = await Client.findAndCountAll({
      order: ['id'],
      limite: 10,
      offset: (page - 1) * 10,
      attributes: { exclude: ['created_at', 'updated_at'] },
      include: [
        {
          model: About,
          as: 'about_firgun',
          attributes: ['id', 'value', 'label'],
        },
        {
          model: Reason,
          as: 'reason',
          attributes: ['id', 'value', 'label'],
        },
      ],
    });

    return res.json(clients);
  }

  async store(req, res) {
    const schema = object().shape({
      first_name: string().required(),
      last_name: string().required(),
      email: string().email().required(),
      phone: string().required(),
      cellphone: string().required(),
      birth_date: date().required(),
      cep: string().required(),
      state: number().required(),
      city: string().required(),
      cpf: number().required(),
      value: number().required(),
      about_firgun_id: number().required(),
      reason_id: number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error: 'Falha na validação dos dados, confira todos os campos',
      });
    }

    const clientExists = await Client.findOne({ where: { cpf: req.body.cpf } });
    if (clientExists) {
      return res.status(401).json({ error: 'Cpf ou cnpj já cadastrado' });
    }

    const emailExists = await Client.findOne({
      where: { email: req.body.email },
    });

    if (emailExists) {
      return res.status(401).json({ error: 'E-mail já cadastrado' });
    }

    const user = await Client.create(req.body);
    return res.json(user);
  }

  async update(req, res) {
    const { id } = req.params;
    const schema = object().shape({
      first_name: string().required(),
      last_name: string().required(),
      email: string().email().required(),
      phone: string().required(),
      cellphone: string().required(),
      birth_date: date().required(),
      cep: string().required(),
      state: number().required(),
      city: string().required(),
      cpf: number().required(),
      value: number().required(),
      about_firgun_id: number().required(),
      reason_id: number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error: 'Falha na validação dos dados, confira todos os campos',
      });
    }

    const { adm } = await User.findByPk(req.userId);
    if (!adm) {
      return res
        .status(401)
        .json({ error: 'Somente administradores podem alterar dados' });
    }

    const client = await Client.findOne({ where: { id } });

    if (Number(req.body.cpf) !== client.cpf) {
      const cpfExists = await Client.findOne({ where: { cpf: req.body.cpf } });
      if (cpfExists) {
        return res.status(401).json({ error: 'Cpf ou cnpj já cadastrado' });
      }
    }

    if (req.body.email !== client.email) {
      const emailExists = await Client.findOne({
        where: { email: req.body.email },
      });
      if (emailExists) {
        return res.status(401).json({ error: 'E-mail já cadastrado' });
      }
    }
    await client.update(req.body);

    return res.json(client);
  }
}

module.exports = new ClientController();
