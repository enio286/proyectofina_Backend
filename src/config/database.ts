import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('mangostor', 'root', 'enio123', {
    host: 'localhost',
    dialect: 'mysql', 
});

export { sequelize };

