const {faker} = require('@faker-js/faker');
const boom = require('@hapi/boom');

class ProductsService {

  constructor() {
    this.products = [];
    this.generate();
  }

  generate(){
    let size = 20;
    for(let i=0; i<size; i++){
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async add(product) {
    if(!product || Object.keys(product).length === 0) {
      throw boom.badRequest('invalid data');
    }
    let newProduct = {
      id: faker.string.uuid(),
      ...product,
    }
    this.products.push(newProduct);
    return newProduct;
  }

  async find(id) {
    const product = this.products.find(item => item.id === id);
    if(!product) {
      throw boom.notFound('product not found');
    }
    if(product.isBlock) {
      throw boom.conflict('product is blocked');
    }
    return product;
  }

  getAll() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 3000);
    });
  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1) {
      throw boom.notFound('product not found'); // manejar errores con boom, devuelve error 404
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes,
    };
    return this.products[index];
  }

  async delete(id){
    const index = this.products.findIndex(item => item.id === id);
    if(index === -1) {
      throw boom.notFound('product not found');
    }
    this.products.splice(index, 1);
    return {id};
  }
}

module.exports = ProductsService;