const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const {limit, offset} = req.query; ///users?limit=1&offset=200
  if(limit && offset) {
    res.json({
      limit,
      offset,
    });
  }else{
    res.json({
      message: 'No se envio limit y offset',
    });
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