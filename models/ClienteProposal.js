import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/conecta.js';
import { Client } from './Clients.js';
import { Proposal } from './Proposals.js';

export const ClienteProposal = sequelize.define(
  'clienteproposal',
  {
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Client,
        key: 'id',
      },
    },
    proposalId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Proposal,
        key: 'id',
      },
    },
  },
  {
    tableName: 'ClienteProposals',
    timestamps: false,
  },
);

Client.belongsToMany(Proposal, { through: ClienteProposal });
Proposal.belongsToMany(Client, { through: ClienteProposal });

ClienteProposal.belongsTo(Proposal, { foreignKey: 'proposalId' });
ClienteProposal.belongsTo(Client, { foreignKey: 'clientId' });
