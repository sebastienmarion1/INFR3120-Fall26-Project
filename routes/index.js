var express = require('express');
var router = express.Router();

var foodSpotList = [];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Campus Food Guide',
    foodSpotList: foodSpotList
  });
});

module.exports = router;
