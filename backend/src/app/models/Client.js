const Sequelize = require('sequelize');

class Client extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        first_name: Sequelize.STRING,
        last_name: Sequelize.STRING,
        email: Sequelize.STRING,
        phone: Sequelize.STRING,
        cellphone: Sequelize.STRING,
        birth_date: Sequelize.DATE,
        cep: Sequelize.STRING,
        state: Sequelize.INTEGER,
        city: Sequelize.STRING,
        cpf: Sequelize.STRING,
        value: Sequelize.FLOAT,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.About, {
      foreignKey: 'about_firgun_id',
      as: 'about_firgun',
    });
    this.belongsTo(models.Reason, { foreignKey: 'reason_id', as: 'reason' });
  }
}

module.exports = Client;
