const {Model, DataTypes, Sequelize} = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
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
  password: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('admin', 'user'),
    allowNull: false,
    defaultValue: 'user',
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

// sequelize allows to use migrations
class User extends Model {
  // static methods -> this are class methods, not instance methods
  static associate(){

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false,
    }
  }
}

module.exports = { UserSchema, User, USER_TABLE };