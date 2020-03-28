const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');

const database = new Sequelize(dbConfig);

User.init(database);

module.exports = database;
