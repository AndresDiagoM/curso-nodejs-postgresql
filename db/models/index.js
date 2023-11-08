const { User, USER_TABLE, UserSchema  } = require('./user.model');
const { Product, PRODUCT_TABLE, ProductSchema } = require('./product.model');
const { Category, CATEGORY_TABLE, CategorySchema } = require('./category.model');
const { People, PEOPLE_TABLE, PeopleSchema } = require('./people.model');
const { Customer, CUSTOMER_TABLE, CustomerSchema } = require('./customer.model');
const { Order, ORDER_TABLE, OrderSchema } = require('./order.model');

function setupModels(sequelize){
  User.init(UserSchema, User.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  People.init(PeopleSchema, People.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));

  // ejecutar asociaciones
  Customer.associate(sequelize.models);
  User.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
  Order.associate(sequelize.models);
}

module.exports = { setupModels};