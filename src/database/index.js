const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Contact = require('../models/Contact');
const Email = require('../models/Email');
const TelephoneType = require('../models/TelephoneType');
const Telephone = require('../models/Telephone');

const connection = new Sequelize(dbConfig);

User.init(connection);
Contact.init(connection);
Email.init(connection);
TelephoneType.init(connection);
Telephone.init(connection);

User.associate(connection.models);
Contact.associate(connection.models);
Email.associate(connection.models);
TelephoneType.associate(connection.models);
Telephone.associate(connection.models);

module.exports = connection;