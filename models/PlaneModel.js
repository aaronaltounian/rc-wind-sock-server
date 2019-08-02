const mongoose = require('mongoose');

let planeSchema = new mongoose.Schema({
    userId: String,
    make: String,
    model: String,
    minWind: Number,
    maxWind: Number,
    maxGust: Number
})

let Plane = mongoose.model('plane', planeSchema);
module.exports = Plane;