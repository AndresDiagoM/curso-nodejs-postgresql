const express = require('express');
const router = express.Router();

const UsersService = require('../services/user.service');
const service = new UsersService();

const validatorHandler = require('../middlewares/validator.handler');
const {createUserSchema, updateUserSchema, getUserSchema} = require('../schemas/user.schema');

router.get('/', async (req, res, next) => {
  const {limit, offset} = req.query; ///users?limit=1&offset=200
  try{
    const users = await service.getAll(limit, offset);
    res.json(users);
  }catch(err){
    next(err);
  }
});

router.get('/:id',
  validatorHandler(getUserSchema, 'params'),
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
  validatorHandler(createUserSchema, 'body'),
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
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
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
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
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
  validatorHandler(getUserSchema, 'params'),
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