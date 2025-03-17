// models/Fertilizer.js
const mongoose = require('mongoose');

const FertilizerSchema = new mongoose.Schema({
    cropType: String,
    soilHealth: String,
    weatherPattern: String,
    fertilizerType: String,
    quantity: Number,
});

module.exports = mongoose.model('Fertilizer', FertilizerSchema);