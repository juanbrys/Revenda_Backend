import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/conecta.js';

export const Ano = sequelize.define(
  'ano',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ano: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'Anos',
    timestamps: false,
  },
);