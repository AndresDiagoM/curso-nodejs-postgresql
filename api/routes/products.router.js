const express = require('express');
const productsService = require('../services/product.service');

const router = express.Router();
const service = new productsService();

const validatorHandler = require('../middlewares/validator.handler');
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
  queryProductSchema,
} = require('../schemas/product.schema');

router.get('/',
  validatorHandler(queryProductSchema, 'query'),
  async (req, res, next) => {
    try{
      const products = await service.getAll(req.query);
      res.json(products);
    }catch(err){
      next(err);
    }
  }
);

// el endpoint especifico debe ir antes del endpoint dinámico
router.get('/filter', (req, res) => {
  const {min, max} = req.query;
  res.json({
    min,
    max,
  });
});

// it is posible to send all the middlewares that we want as callback functions
router.get('/:id',
  validatorHandler(getProductSchema, 'params'), // this is a middleware
  async (req, res, next) => { // this is another middleware as a callback function
    const {id} = req.params;
    try{
      const product = await service.find(id);
      res.json(product);
    } catch(error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res, next) => { //next is added for declaring a middleware of type error
    const body = req.body;
    try{
      let newProduct = await service.add(body);
      res.status(201).json({
        message: 'created',
        data: newProduct,
      });
    }catch(error){
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    const {id} = req.params;
    const body = req.body;
    try{
      const updated = await service.update(id, body);
      res.json({
        message: 'updated',
        data: body,
        id,
        updated: updated,
      });
    }catch(error){
      next(error);
    }
  }
);

router.put('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    const {id} = req.params;
    const body = req.body;
    try{
      const updated = await service.update(id, body);
      res.json({
        message: '[PUT] replaced',
        data: body,
        id: id,
        updated: updated,
      });
    }catch(error){
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    const {id} = req.params;
    try{
      const deleted = await service.delete(id);
      return res.json({
        message: 'deleted',
        deleted: deleted,
      });
    }catch(error){
      next(error); // si queremos que el error se maneje en el middleware de boom
    }
  }
);

module.exports = router;