import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/conecta.js';
import { Carro } from './carros.js';

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



// {
//   "nome": "Ana Maria",
//   "foto": "http://www.ensp.fiocruz.br/portal-ensp/_imagens/meu-cadastro/b23d9798162c07d06404e91542812e9.jpg",
//   "clienteId": 1,
//   "carroId": 22,
// },