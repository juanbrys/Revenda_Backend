import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/conecta.js';
import { Cliente } from './Clientes.js';
import { Proposta } from './Propostas.js';

export const ClienteProposta = sequelize.define(
  'clienteProposta',
  {
    clienteCod: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Cliente,
        key: 'id',
      },
    },
    propostaCod: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Proposta,
        key: 'id',
      }, 
    },
  },
  {
    tableName: 'ClientePropostas',
    timestamps: false,
  },
);

Cliente.belongsToMany(Proposta, { through: ClienteProposta });
Proposta.belongsToMany(Cliente, { through: ClienteProposta });

ClienteProposta.belongsTo(Proposta, { foreignKey: 'propostaCod' });
ClienteProposta.belongsTo(Cliente, { foreignKey: 'clienteCod' });