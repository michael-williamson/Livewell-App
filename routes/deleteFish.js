const mongoose = require('mongoose');
const User = mongoose.model('user');
const Fish = mongoose.model('fish');

module.exports = app => {
    app.post('/api/deleteFish', (req,res)=>{

       const {googleId,id} = req.body 
       console.log("working", googleId, id)

        User.find({googleId}).then(user => {
            let result = user[0].fish.filter(fish => fish != id && fish != null);
            let arr = [];

            user[0].fish = [];


            result.forEach(element=> {
              if(mongoose.Types.ObjectId.isValid(element)){
                arr.push(element);
              }  
            })

            user[0].fish = arr; 
            user[0].save(); 

        })




        Fish.findByIdAndDelete(id)
        .then(fish => res.send(fish))


    });
}  