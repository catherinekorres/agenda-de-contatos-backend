const { Model, DataTypes } = require('sequelize');

class Contact extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'users' });
    this.hasMany(models.Email, { foreignKey: 'contact_id', as: 'emails' });
    this.hasMany(models.Telephone, { foreignKey: 'contact_id', as: 'telephones' });
  }
}

module.exports = Contact;