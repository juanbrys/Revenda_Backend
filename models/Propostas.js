import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/conecta.js';
import { Carro } from './Carros.js';
import { Cliente } from './Clientes.js';

export const Proposta = sequelize.define(
  'proposta',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    lance: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    texto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'Propostas',
    timestamps: false,
  },
); 

Proposta.belongsTo(Carro, {
  foreignKey: {
    name: 'carro_id',
    allowNull: false,
  },
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE',
});

Carro.hasMany(Proposta, {
  foreignKey: {
    name: 'carro_id',
  },
});

Proposta.belongsTo(Cliente, {
  foreignKey: {
    name: 'cliente_id',
    allowNull: false,
  },
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE',
});

Cliente.hasMany(Proposta, {
  foreignKey: {
    name: 'cliente_id',
  },
});






