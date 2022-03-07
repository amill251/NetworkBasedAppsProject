const express = require('express');
const controller = require('./../controllers/controller')

const router = express.Router();


router.get('/', controller.index);

router.get('/trades', controller.trades);

router.get('/trade/:id', controller.trade);

router.get('/newTrade', controller.newTrade);

router.post('/new', controller.new);

router.get('/delete/:id', controller.delete);

router.get('/newUpdate/:id', controller.newUpdate);

router.post('/update/:id', controller.update);

module.exports = router;