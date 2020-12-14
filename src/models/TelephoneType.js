const { Model, DataTypes } = require('sequelize');

class TelephoneType extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.Telephone, { foreignKey: 'telephone_type_id', as: 'telephones' });
  }
}

module.exports = TelephoneType;