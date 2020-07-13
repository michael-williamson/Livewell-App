const mongoose = require('mongoose');
const { Schema } = mongoose;

const fishSchema = new Schema({
    species: String,
    inches: String,
    pounds: String,
    ounces: String
});

mongoose.model('fish',fishSchema);