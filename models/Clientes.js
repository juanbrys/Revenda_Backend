import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/conecta.js';

export const Cliente = sequelize.define(
  'cliente',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    senha: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
  },
  {
    tableName: 'Clientes',
    timestamps: false
  }
);
