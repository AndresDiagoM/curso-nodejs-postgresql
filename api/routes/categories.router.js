const express = require('express');
const router = express.Router();

const categoriesService = require('../services/categories.service');
const service = new categoriesService();

const validatorHandler = require('../middlewares/validator.handler');
const {createCategorySchema, updateCategorySchema, getCategorySchema} = require('../schemas/categories.schema');

router.get('/', async (req, res) => {
  const categories = await service.getAll();
  res.json(categories);
});

router.get('/:id',
  validatorHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    const {id} = req.params;
    try{
      const category = await service.getById(id);
      res.json(category);
    }catch(error){
      next(error);
    }
  }
);

router.get('/:categoryId/products/:productsId', (req, res) => {
  const {categoryId, productsId} = req.params;
  res.json([
    {
      categoryId,
      productsId,
    },
  ]);
});

router.post('/',
  validatorHandler(createCategorySchema, 'body'),
  async (req, res, next) => {
    const body = req.body;
    try{
      const newCategory = await service.add(body);
      return res.status(201).json({
        message: 'created',
        data: newCategory,
      });
    }catch(error){
      next(error);
    }
  }
);

router.put('/:id',
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  async (req, res, next) => {
    const {id} = req.params;
    const body = req.body;
    try{
      let updated = await service.update(id, body);
      return res.json({
        message: 'replaced',
        data: body,
        id,
        updated: updated,
      });
    }catch(error){
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  async (req, res, next) => {
    const {id} = req.params;
    const body = req.body;
    try{
      let updated = await service.update(id, body);
      return res.json({
        message: 'replaced',
        data: body,
        id,
        updated: updated,
      });
    }catch(error){
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    const {id} = req.params;
    try{
      const category = await service.remove(id);
      return res.json({
        message: 'deleted',
        id,
        category,
      });
    }catch(error){
      next(error);
    }
  }
);

module.exports = router;