const {Model, DataTypes, Sequelize} = require('sequelize');

const { USER_TABLE } = require('./user.model');

const CUSTOMER_TABLE = 'customers';

const CustomerSchema = {
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
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true, // this is a validation, not a constraint
  },
  address: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  birthDate: {
    type: DataTypes.DATE,
    field: 'birth_date',
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  userId: {
    type: DataTypes.INTEGER,
    field: 'user_id',
    allowNull: false,
    references: {
      model: USER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
}

// sequelize allows to use migrations
class Customer extends Model {
  // static methods -> this are class methods, not instance methods
  static associate(models){
    this.belongsTo(models.User, {
      as: 'user',
      foreignKey: 'user_id',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CUSTOMER_TABLE,
      modelName: 'Customer',
      timestamps: false,
    }
  }
}

module.exports = { CustomerSchema, Customer, CUSTOMER_TABLE };