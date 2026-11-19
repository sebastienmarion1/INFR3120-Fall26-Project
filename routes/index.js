var express = require('express');
var router = express.Router();

var foodSpotList = require('../models/foodspot');


/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const foodSpotList = await FoodSpot.find();

  res.render('index', { 
    title: 'Campus Food Guide',
    foodSpotList: foodSpotList
  });
} catch (error) {
    next (error);
  }
});

module.exports = router;
