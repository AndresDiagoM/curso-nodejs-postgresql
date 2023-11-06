const {Model, DataTypes, Sequelize} = require('sequelize');

const PEOPLE_TABLE = 'people';

const PeopleSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING(50),
    field: 'last_name',  // a good practice in db is using snake_case
    allowNull: false,
  },
  birthDate: {
    type: DataTypes.DATE,
    field: 'birth_date',
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  isBlock: {
    type: DataTypes.BOOLEAN,
    field: 'is_block',
    allowNull: false,
    defaultValue: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
}

class People extends Model {
  static associate(){

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PEOPLE_TABLE,
      modelName: 'People',
      timestamps: false,
    }
  }
}

module.exports = { PeopleSchema, People, PEOPLE_TABLE };