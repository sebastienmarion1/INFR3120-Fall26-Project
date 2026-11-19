var mongoose = require('mongoose');

var foodSpotSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    foodType: {
        type: String,
        required: true
    },
    priceRange: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    }
});

module.exports = mongoose.model('FoodSpot', foodSpotSchema);