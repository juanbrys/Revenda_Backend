import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  "revenda", "root", "", {
  dialect: "mysql",
  host: "localhost",
  port: 3306
});