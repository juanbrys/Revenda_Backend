import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/conecta.js';
import { Ano } from './Anos.js';

export const Carro = sequelize.define('carro', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  marca: {
    type: DataTypes.STRING(40),
    allowNull: false
  }, 
  imagem: {
    type: DataTypes.STRING,
    allowNull: false
  },
  quilometragem: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  preco: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  sobre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  destaque: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
},
{ 
  tableName: 'Carros',
  timestamps: false,
},
);

Carro.belongsTo(Ano, {
  foreignKey: {
    name: 'ano_id',
    allowNull: false,
  },
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE',
});

Ano.hasMany(Carro, {
  foreignKey: {
    name: 'ano_id',
  },
}); 
