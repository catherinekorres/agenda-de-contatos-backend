const { Model, DataTypes } = require('sequelize');

class Telephone extends Model {
  static init(sequelize) {
    super.init({
      telephone: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Contact, { foreignKey: 'contact_id', as: 'contacts' });
    this.belongsTo(models.TelephoneType, { foreignKey: 'telephone_type_id', as: 'telephone_types' });
  }
}

module.exports = Telephone;