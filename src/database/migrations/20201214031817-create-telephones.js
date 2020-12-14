module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('telephones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      telephone: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      contact_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'contacts', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      telephone_type_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'telephone_types', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('telephones');
  }
};