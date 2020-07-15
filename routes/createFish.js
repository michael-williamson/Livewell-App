const mongoose = require('mongoose');
const User = mongoose.model('user');
const Fish = mongoose.model('fish');


module.exports = app => {
    app.post('/api/createFish', (req, res) => {
        const {
            id,
            species,
            inches,
            pounds,
            ounces
        } = req.body;

        const fish = new Fish({
            species,
            inches,
            pounds,
            ounces
        });

        User
        .findOne({googleId: id})
        .then((user) => {
            if (!user) {
                let newUser = new User({googleId: id});
                newUser
                    .fish
                    .push(fish);
                Promise.all([
                    newUser.save(),
                    fish.save()
                ]).then(() =>  res.send({}))
                .catch(err=>
                    console.log(err));

            } else {
                user
                    .fish
                    .push(fish);
                Promise.all([
                    user.save(),
                    fish.save()
                ]).then(() => res.send({message:"Creation Successful"}))
                .catch(err => console.log(err))
            }
        })
        .catch(err => console.log(err));

    })
}