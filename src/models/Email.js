const { Model, DataTypes } = require('sequelize');

class Email extends Model {
  static init(sequelize) {
    super.init({
      email: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Contact, { foreignKey: 'contact_id', as: 'contacts' });
  }
}

module.exports = Email;