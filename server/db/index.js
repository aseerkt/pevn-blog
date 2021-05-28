const { Sequelize } = require('sequelize');
// const { applyExtraSetup } = require('./extra-setup');

const sequelize = new Sequelize(process.env.DATABASE_URL);

const modelDefiners = [require('./models/user.model')];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

// We execute any extra setup after the models are defined, such as adding associations.
// applyExtraSetup(sequelize);

module.exports = sequelize;
