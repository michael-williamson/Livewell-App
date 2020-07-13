const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    fish: [{type: Schema.Types.ObjectId, ref: 'fish'}]

});

mongoose.model('user',userSchema);