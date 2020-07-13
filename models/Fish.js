const mongoose = require('mongoose');
const { Schema } = mongoose;

const fishSchema = new Schema({
    species: String,
    length: String,
    weight: String
});

mongoose.model('fish',fishSchema);