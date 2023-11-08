const express = require('express');
const router = express.Router();

const OrdersService = require('../services/order.service');
const service = new OrdersService();

const validatorHandler = require('../middlewares/validator.handler');
const {
  createOrderSchema,
  updateOrderSchema,
  getOrderSchema,
  addItemSchema
} = require('../schemas/order.schema');

router.get('/', async (req, res, next) => {
  const {limit, offset} = req.query;
  try{
    const orders = await service.getAll(limit, offset);
    res.json(orders);
  }catch(err){
    next(err);
  }
});

router.get('/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    const {id} = req.params;
    try{
      const order = await service.find(id);
      res.json(order);
    } catch (err){
      next(err);
    }
  }
);

router.post('/',
  validatorHandler(createOrderSchema, 'body'),
  async (req, res, next) => {
    const body = req.body;
    try{
      let added = await service.add(body);
      return res.status(201).json({
        message: 'created',
        data: added,
      });
    }catch (err){
      next(err);
    }
  }
);

router.post('/add-item',
  validatorHandler(addItemSchema, 'body'),
  async (req, res, next) => {
    const body = req.body;
    try{
      let added = await service.addItem(body);
      return res.status(201).json({
        message: 'created',
        data: added,
      });
    }catch (err){
      next(err);
    }
  }
);

router.patch('/:id',
  validatorHandler(getOrderSchema, 'params'),
  validatorHandler(updateOrderSchema, 'body'),
  async (req, res, next) => {
    const {id} = req.params;
    const body = req.body;
    try{
      const order = await service.update(id, body);
      res.json(order);
    }catch(err){
      next(err);
    }
  }
);

router.put('/:id',
  validatorHandler(getOrderSchema, 'params'),
  validatorHandler(updateOrderSchema, 'body'),
  async (req, res, next) => {
    const {id} = req.params;
    const body = req.body;
    try{
      const order = await service.update(id, body);
      res.json(order);
    }catch(err){
      next(err);
    }
  }
);

router.delete('/:id',
  validatorHandler(getOrderSchema, 'params'),
  async (req, res, next) => {
    const {id} = req.params;
    try{
      const order = await service.delete(id);
      res.json(order);
    }catch(err){
      next(err);
    }
  }
);

module.exports = router;