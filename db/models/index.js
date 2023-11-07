const { User, USER_TABLE, UserSchema  } = require('./user.model');
const { Product, PRODUCT_TABLE, ProductSchema } = require('./product.model');
const { Category, CATEGORY_TABLE, CategorySchema } = require('./category.model');
const { People, PEOPLE_TABLE, PeopleSchema } = require('./people.model');
const { Customer, CUSTOMER_TABLE, CustomerSchema } = require('./customer.model');

function setupModels(sequelize){
  User.init(UserSchema, User.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  People.init(PeopleSchema, People.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));

  // ejecutar asociaciones
  Customer.associate(sequelize.models);
}

module.exports = { setupModels};