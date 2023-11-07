const express = require('express');
const router = express.Router();

const CustomersService = require('../services/customer.service');
const service = new CustomersService();

const validatorHandler = require('../middlewares/validator.handler');
const {createCustomerSchema, updateCustomerSchema, getCustomerSchema} = require('../schemas/customer.schema');

router.get('/', async (req, res, next) => {
  const {limit, offset} = req.query;
  try{
    const customers = await service.getAll(limit, offset);
    res.json(customers);
  }catch(err){
    next(err);
  }
});

router.get('/:id',
  validatorHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    const {id} = req.params;
    try{
      const user = await service.find(id);
      res.json(user);
    } catch (err){
      next(err);
    }
  }
);

router.post('/',
  validatorHandler(createCustomerSchema, 'body'),
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

router.patch('/:id',
  validatorHandler(getCustomerSchema, 'params'),
  validatorHandler(updateCustomerSchema, 'body'),
  async (req, res, next) => {
    const {id} = req.params;
    const body = req.body;
    try{
      const user = await service.update(id, body);
      res.json(user);
    }catch(err){
      next(err);
    }
  }
);

router.put('/:id',
  validatorHandler(getCustomerSchema, 'params'),
  validatorHandler(updateCustomerSchema, 'body'),
  async (req, res, next) => {
    const {id} = req.params;
    const body = req.body;
    try{
      const user = await service.update(id, body);
      res.json(user);
    }catch(err){
      next(err);
    }
  }
);

router.delete('/:id',
  validatorHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    const {id} = req.params;
    try{
      const user = await service.delete(id);
      res.json(user);
    }catch(err){
      next(err);
    }
  }
);

module.exports = router;