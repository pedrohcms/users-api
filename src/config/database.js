const env = require('./env');

module.exports = {
    dialect: env.DB_DIALECT,
    host: env.DB_HOST,
    port: env.DB_PORT,
    username: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    define: {
        timestamps: true,
        underscored: true,
    }
};