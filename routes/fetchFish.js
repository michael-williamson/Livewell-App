const mongoose = require('mongoose');
const User = mongoose.model('user');


module.exports = app => {
    app.post('/api/fetchFish', (req, res) => {
        const {id} = req.body;
        console.log(id)
        User.findOne({googleId:id}).populate(
            {
            path:'fish'
            }
        ).then((item)=>{
            console.log(item)
            if(item.fish.length === 0){
                res.send([{message:"No fish at this time"}])
            }else{
            res.send(item.fish)
            }
        })
    })
}