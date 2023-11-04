const express = require('express');
const router = express.Router();

const UsersService = require('../services/user.service');
const service = new UsersService();

router.get('/', async (req, res, next) => {
  const {limit, offset} = req.query; ///users?limit=1&offset=200
  try{
    const users = await service.getAll(limit, offset);
    res.json(users);
  }catch(err){
    next(err);
  }
});

router.get('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id,
    name: 'Usuario 1',
  });
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body,
  });
});

router.patch('/:id', (req, res) => {
  const {id} = req.params;
  const body = req.body;
  res.json({
    message: 'updated',
    data: body,
    id,
  });
});

router.put('/:id', (req, res) => {
  const {id} = req.params;
  const body = req.body;
  res.json({
    message: 'replaced',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    message: 'deleted',
    id,
  });
});

module.exports = router;