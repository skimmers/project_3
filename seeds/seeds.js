const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = require('./userData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    // Creates a user for each object in userData.json file
    const user = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true
    });

    process.exit(0);
}

seedDatabase();

