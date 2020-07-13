const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/Keys');

const bodyParser = require('body-parser');
const app = express(); 

app.use(bodyParser.json());
require('./models/User')
require('./models/Fish');

// mongoose.connect(keys.mongoURI);  
mongoose.connect(keys.devURI,{ useNewUrlParser: true });

require('./routes/createFish')(app);
require('./routes/fetchFish')(app);

if(process.env.NODE_ENV === 'production'){
    //express will serve up production assets
    app.use(express.static('client/build'));

    //express will serve up index.html file if it
    // doesn't recognize router
    const path = require('path');
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
    });
}

const PORT = process.env.PORT || 5000; 
app.listen(PORT);

