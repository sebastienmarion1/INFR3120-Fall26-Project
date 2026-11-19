var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var FoodSpot = require('../models/foodspot');

router.get('/add', function(req, res) {
    res.render('addFoodSpot');
});

router.post('/add', async function(req, res) {
    try {
        if (mongoose.connection.readyState !== 1) {
            return res.status(503).send(
                'Database unavailable. Please try again later.'
            );
        }

        var foodSpot = new FoodSpot({
            name: req.body.name,
            location: req.body.location,
            foodType: req.body.foodType,
            priceRange: req.body.priceRange
        });

        if (req.body.rating) {
            foodSpot.rating = Number(req.body.rating);
        }

        await foodSpot.save();

        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error saving food spot.');
    }
});

module.exports = router;