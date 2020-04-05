const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');

const User = require('../app/models/User');
const Client = require('../app/models/Client');
const Reason = require('../app/models/Reason');
const About = require('../app/models/About');

const models = [User, Client, Reason, About];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

module.exports = new Database();
