const Sequelize = require('sequelize');

class About extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        value: Sequelize.INTEGER,
        label: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

module.exports = About;
