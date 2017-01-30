
'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', (req, res, next) => {
  knex('classifieds')
  .select('id', 'title', 'description', 'price', 'item_image')
  .then((results) => {
    res.send(200, results);
  })
  .catch ((err) => {
    next(err);
  });
});

router.get('/:id', (req, res, next) => {
  let ad_id = req.params.id;

  knex('classifieds')
  .where({
    id: ad_id
  })
  .select('id', 'title', 'description', 'price', 'item_image')
  .then((results) => {
    res.send(200, results[0]);
  })
  .catch ((err) => {
    next(err);
  });
});



module.exports = router;
