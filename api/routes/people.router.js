const express = require('express');
const router = express.Router();

const peopleService = require('../services/people.service');
const service = new peopleService();

const validatorHandler = require('../middlewares/validator.handler');
const {createPeopleSchema, updatePeopleSchema, getPeopleSchema} = require('../schemas/people.schema');

router.get('/', async (req, res) => {
  const peoples = await service.getAll();
  res.json(peoples);
});

router.get('/:id',
  validatorHandler(getPeopleSchema, 'params'),
  async (req, res, next) => {
    const {id} = req.params;
    try{
      const people = await service.getById(id);
      res.json(people);
    }catch(error){
      next(error); // si queremos que el error se maneje en el middleware de boom
    }
  }
);

router.post('/',
  validatorHandler(createPeopleSchema, 'body'),
  async (req, res, next) => {
    const body = req.body;
    try{
      const newPerson = await service.add(body);
      res.json({
        message: 'created',
        newPerson,
      });
    }catch(error){
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getPeopleSchema, 'params'),
  validatorHandler(updatePeopleSchema, 'body'),
  async (req, res, next) => {
    const {id} = req.params;
    const body = req.body;
    try{
      const personUpdated = await service.update(id, body);
      res.json({
        message: 'updated',
        personUpdated,
        id,
      });
    }catch(error){
      next(error); // si queremos que el error se maneje en el middleware de boom
    }
  }
);

router.put('/:id',
  validatorHandler(getPeopleSchema, 'params'),
  validatorHandler(updatePeopleSchema, 'body'),
  async (req, res, next) => {
    const {id} = req.params;
    const body = req.body;
    try{
      const personUpdated = await service.update(id, body);
      res.json({
        message: 'updated',
        personUpdated,
        id,
      });
    }catch(error){
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getPeopleSchema, 'params'),
  async (req, res, next) => {
    const {id} = req.params;
    try{
      const personDeleted = await service.remove(id);
      res.json({
        message: 'deleted',
        personDeleted,
        id,
      });
    }catch(error){
      next(error);
    }
  }
);

module.exports = router;
